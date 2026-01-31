import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import reactionStyles from "@/components/Reactions.module.css";

export default async function Comments({ postId }) {
  async function createComment(formData) {
    "use server";

    const content = formData.get("content");
    const postId = formData.get("post_id");
    const { userId } = await auth();

    if (!userId) {
      redirect("/sign-in");
    }

    await db.query(
      `INSERT INTO comments (post_id, clerk_id, content) VALUES ($1, $2, $3)`,
      [postId, userId, content],
    );
    revalidatePath("/posts");
  }

  const { rows: comments } = await db.query(
    `SELECT comments.id, comments.content, comments.created_at, profiles.username FROM comments JOIN profiles ON comments.clerk_id = profiles.clerk_id WHERE comments.post_id = $1 ORDER BY comments.created_at ASC`,
    [postId],
  );

  return (
    <>
      <div>
        {comments.map((comment) => (
          <div className={reactionStyles.commentcard} key={comment.id}>
            <p>{comment.username} commented: </p>
            <p>{comment.content}</p>
            <p>{new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}

        <form className={reactionStyles.comment} action={createComment}>
          <input type="hidden" name="post_id" value={postId} />
          <textarea name="content" placeholder="Comment here..." required />
          <button className={reactionStyles.button} type="submit">
            Comment
          </button>
        </form>
      </div>
    </>
  );
}
