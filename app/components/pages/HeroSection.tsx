import { Image } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import { FaMedium } from "react-icons/fa6";

import { GithubIcon } from "../icons";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:h-[500px] content-center m-3 mt-[100px] ">
        <div className="col-span-6 md:mt-[150px]">
          <div className="">
            <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text">
              Hello, I&apos;m
            </h1>
            <h1 className="mb-4 text-4xl text-center lg:text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text">
              WeiFang Chou
            </h1>
          </div>

          <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
            <TypeAnimation
              className="test bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text "
              repeat={Infinity}
              sequence={["App Developer", 2000, "", 1500, "App Developer  "]}
              speed={40}
              style={{
                fontSize: "1.1em",
                display: "inline-block",
                color: "#667eea",
              }}
              wrapper="p"
            />
          </h1>
          <p className="text-lg lg:text-xl">
            我熱愛挑戰自己，並不斷追求個人成長和學習。我的經驗涵蓋了設計與前端，並且我喜歡在這些領域中不斷創新和探索。我擁有良好的溝通和團隊合作能力，並能夠在壓力下保持高效率。
          </p>
          <div className="my-10 flex">
            <a href={"https://github.com/WeiFangChou"}>
              <GithubIcon className="m-3" size={45} />
            </a>
            <a href={"https://github.com/WeiFangChou"}>
              <FaMedium className="m-3" size={45} />
              cle
            </a>
          </div>
        </div>
        <div className="col-span-4 m-10">
          <div>
            <Image
              isBlurred
              alt="profile"
              className="m-5"
              height={300}
              src="/assets/img/hero.jpg"
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
