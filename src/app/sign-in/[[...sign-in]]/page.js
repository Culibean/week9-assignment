import { neobrutalism } from "@clerk/themes";

//TODO: render sign-in page Clerk component

// this is the sign-in page
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-2xl font-semibold">
          Welcome back to SkyLog! Sign In here!{" "}
        </h1>
        <SignIn
          appearance={{
            theme: [neobrutalism],
            variables: {
              colorPrimary: "#47a6ff",
              colorBackground: "#aed4eb",
            },
            elements: {
              root: {
                boxShadow: "#3694c7",
              },
              card: {
                boxShadow: "#3694c7",
              },
            },
          }}
        />
      </div>
    </>
  );
}
