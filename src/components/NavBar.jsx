import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

import NavBarStyles from "./NavBar.module.css";

export default function NavBar() {
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
        <a className={NavBarStyles.button} href="http://localhost:3000/posts">
          SkyStories
        </a>
      </nav>
    </>
  );
}
