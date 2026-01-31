//TODO: render a list of all posts (and you could also render the user who posted them)

import PostCard from "@/components/Postcard";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import formStyles from "@/components/Form.module.css";

export default async function Posts() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); //added in for spinner to show up long enough
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  async function createPost(formData) {
    "use server";

    const trip_description = formData.get("trip_description");
    const departure_airport = formData.get("departure_airport");
    const arrival_airport = formData.get("arrival_airport");
    const image_url = formData.get("image_url");
    const image_alt = formData.get("image_alt");

    await db.query(
      `INSERT INTO posts (clerk_id, trip_description, departure_airport, arrival_airport, image_url, image_alt) VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        userId,
        trip_description,
        departure_airport,
        arrival_airport,
        image_url,
        image_alt,
      ],
    );

    revalidatePath("/posts");
    redirect("/posts");
  }

  const { rows: posts } = await db.query(
    `SELECT posts.id, posts.trip_description, posts.departure_airport, posts.arrival_airport, posts.image_url, posts.image_alt, posts.created_at, profiles.username, profiles.first_name, profiles.last_name, profiles.avatar_url, (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.id) AS likes_count, (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS comments_count FROM posts JOIN profiles on posts.clerk_id = profiles.clerk_id ORDER BY posts.created_at DESC`,
  );

  return (
    <>
      <h1 className={formStyles.header}>SkyLog Feed</h1>

      <form className={formStyles.tripform} action={createPost}>
        <label>Where have you been?</label>
        {""}
        <textarea
          name="trip_description"
          placeholder="Share your trip here..."
          required
        />

        <div>
          <label>
            ✈️ {""}
            <input
              type="text"
              name="departure_airport"
              placeholder="From"
              required
            />
          </label>
        </div>

        <div>
          <label>
            🛬 {""}
            <input
              type="text"
              name="arrival_airport"
              placeholder="To"
              required
            />
          </label>
        </div>

        <div>
          <label>
            Unsplash Image URL: {""}
            <input
              type="url"
              name="image_url"
              placeholder="add a link from Unsplash here..."
            />
          </label>
        </div>

        <div>
          <label>
            Image description: {""}
            <input
              type="text"
              name="image_alt"
              placeholder="Describe the image..."
            />
          </label>
        </div>

        <button className={formStyles.button} type="submit">
          SkyLog it
        </button>
      </form>

      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </>
  );
}
