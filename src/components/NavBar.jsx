import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

import NavBarStyles from "./NavBar.module.css";

export default async function NavBar() {
  const { userId } = await auth();

  let username = null;

  if (userId) {
    const { rows } = await db.query(
      `SELECT username FROM profiles WHERE clerk_id = $1`,
      [userId],
    );
    username = rows[0]?.username;
  }
  return (
    <>
      <nav className={NavBarStyles.navbar}>
        <SignedOut>
          <SignInButton className={NavBarStyles.button} />
          <SignUpButton>
            <button className={NavBarStyles.button}>Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <button className={NavBarStyles.button}>Sign Out</button>
          </SignOutButton>
        </SignedIn>
        <a className={NavBarStyles.button} href="/posts">
          SkyStories
        </a>
        {username && (
          <a className={NavBarStyles.button} href={`/profile/${username}`}>
            Profile
          </a>
        )}
      </nav>
    </>
  );
}
