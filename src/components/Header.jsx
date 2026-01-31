import Image from "next/image";
import logo from "@/../public/assets/logo.png";
import HeaderStyles from "./Header.module.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className={HeaderStyles.header}>
        <Image
          className={HeaderStyles.image}
          src={logo}
          alt={"logo of Skylog"}
          width={50}
          height={50}
        />
        <h1 className={HeaderStyles.h1}>SkyLog</h1>
        <NavBar />
      </header>
    </>
  );
}
