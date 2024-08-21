"use client";

import { Image, Link } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { FaMedium } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { useState } from "react";

import { GithubIcon } from "../icons";

import { myProfessions, myProfile } from "@/config/site";

export default function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section>
      <div>{resumeOpen ? null : <div />}</div>
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:h-[500px] content-center m-3 mt-[100px] ">
        <div className="col-span-4 m-10 sm:block md:block lg:hidden">
          <Image
            isBlurred
            alt="profile"
            className="m-5"
            height="100%"
            src="/assets/img/hero.jpg"
            width="100%"
          />
        </div>
        <div className="col-span-6 md:mt-[150px]">
          <div className="grid-cols-2 block">
            <h1 className=" col-span-1 mb-4 text-4xl lg:text-left md:text-center sm:text-center  lg:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text">
              Hello, I&apos;m
            </h1>
            <h1 className=" col-span-1 mb-4 text-4xl lg:text-right md:text-center sm:text-center lg:text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text ">
              WeiFang Chou
            </h1>
          </div>

          <h1 className="mb-4 text-4xl lg:text-6xl lg:text-right md:text-center sm:text-center  font-extrabold">
            <TypeAnimation
              className="test bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text "
              repeat={Infinity}
              sequence={myProfessions}
              speed={40}
              style={{
                fontSize: "1.1em",
                display: "inline-block",
                color: "#667eea",
              }}
              wrapper="p"
            />
          </h1>
          <p className="text-lg lg:text-xl sm:text-center hover:text-primary">
            {myProfile.description}
          </p>
          <div className="m-5">
            <Link
              isExternal
              className="m-5"
              color="foreground"
              href={"https://github.com/weiFangChou"}
            >
              <GithubIcon className="hover:text-primary" size={55} />
            </Link>
            <Link
              isExternal
              className="m-5"
              color="foreground"
              href="https://medium.com/@chou.wei.fang"
            >
              <FaMedium className="hover:text-primary" size={55} />
            </Link>

            <Link
              isExternal
              className="m-5"
              color="foreground"
              href="/resume.pdf"
            >
              <SiGoogledocs className="hover:text-primary" size={55} />
            </Link>
          </div>
        </div>
        <div className="col-span-4 m-10 sm:hidden md:hidden lg:block content-center">
          <Image
            alt="profile"
            className="m-5"
            height={300}
            src="/assets/img/hero.jpg"
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
