//TODO: set up profile after user has signed up
//I need: auth() and currentUser() from clerk |
// async function to await the data being received from sign up and added to supabase
//  form for user to add in addtional information
// server action with POST method that sends everything together to supabase

import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Styles from "@/components/completeProfile.module.css";

export default function CompleteProfile() {
  async function handleSubmit(formValues) {
    "use server";
    const { userId } = await auth();
    const user = await currentUser();

    const formData = {
      clerk_id: userId,
      username: user?.username,
      first_name: user.firstName,
      last_name: user.lastName,
      avatar_url: user.imageUrl,
      favourite_airplane: formValues.get("favourite_airplane"),
      favourite_airport: formValues.get("favourite_airport"),
      bio: formValues.get("bio"),
    };
    console.log(formData);

    await db.query(
      `INSERT INTO profiles (clerk_id, username, first_name, last_name, avatar_url, favourite_airplane, favourite_airport, bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        formData.clerk_id,
        formData.username,
        formData.first_name,
        formData.last_name,
        formData.avatar_url,
        formData.favourite_airplane,
        formData.favourite_airport,
        formData.bio,
      ],
    );
    revalidatePath(`/profile/${formData.username}`);
    redirect(`/profile/${formData.username}`);
  }

  return (
    <>
      <div>
        <form className={Styles.form} action={handleSubmit}>
          <label htmlFor="favourite_airplane">
            Your favourite plane: {""}
            <input type="text" name="favourite_airplane" required></input>
          </label>

          <label htmlFor="favourite_airport">
            Your favourite Airport: {""}
            <input type="text" name="favourite_airport" required></input>
          </label>

          <label htmlFor="bio"> About you: {""}</label>
          <textarea
            name="bio"
            placeholder="Share a bit about yourself..."
            id="bio"
            required
          />
          <button className={Styles.button} type="submit">
            Finish Profile Setup
          </button>
        </form>
      </div>
    </>
  );
}
