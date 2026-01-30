import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const body = await req.text();

    const evt = await verifyWebhook({
      body,
      secret: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
      headers: req.headers,
    });

    if (evt.type !== "user.created") {
      return new Response("ignored", { status: 200 });
    }

    const userId = evt.data.id;

    await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/skylogusersocial`,
      {
        method: "POST",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "resolution=ignore-duplicates",
        },
        body: JSON.stringify({
          clerk_id: userId,
        }),
      },
    );
    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error("Webhook error", err);
    return new Response(err.message, { status: 400 });
  }
}
