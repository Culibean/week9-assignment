//TODO: render a sign up page with Clerk components

//A form the collect other user data (bio, nickname, location, interests)
//insert users data into the users table, so we can render it in the profile page
//can also have a separate page to collect additional profile information

// this is the sign-up page
import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign Up to become part of SkyLog</h1>
      <SignUp
        appearance={{
          theme: [neobrutalism],
          variables: {
            colorPrimary: "#47a6ff",
            colorBackground: "#aed4eb",
          },
        }}
      />
    </>
  );
}
