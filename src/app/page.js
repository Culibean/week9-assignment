//TODO: Render a homepage with navigation and/or intro to the app
import Image from "next/image";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import homepageStyles from "@/components/Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <section className={homepageStyles.all}>
        <div className={homepageStyles.hero}>
          <Image
            src={
              "https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="flying Southwest Airline plane over clouds"
            width={723}
            height={481}
            className={homepageStyles.image}
          />
          <div className={homepageStyles.overlay}>
            <div className={homepageStyles.textcard}>
              <h1 className={homepageStyles.h1}>
                Share your stories from the sky
              </h1>
              <p className={homepageStyles.p}>
                Connect with travelers worldwide and share your travel stories
              </p>
            </div>

            <div className={homepageStyles.buttons}>
              <SignInButton className={homepageStyles.button} />
              <SignUpButton className={homepageStyles.button} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
