import Image from "next/image";
import React from "react";
import Meme from "./Meme";

export default function Header() {
  return (
    <>
      <header className="header">
        <Image
          alt="meme logo"
          src="/images/meme2.png"
          className="header--image"
          width={"70"}
          height={"100"}
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </>
  );
}
