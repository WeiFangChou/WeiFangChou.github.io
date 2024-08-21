import { Divider } from "@nextui-org/divider";
import { Card, CardBody, Progress, Spacer } from "@nextui-org/react";
import {
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiCocoapods,
} from "react-icons/si";
import { FaJava, FaNode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

import { myExperience, mySkills } from "@/config/site";

export default function About() {
  return (
    <div className="mt-10" id="about">
      <div className=" md:flex md:grid-cols-2">
        <div className="md:w-1/2  md:col-span-1 content-start">
          <h2 className="text-5xl font-black m-4 ">
            Skills &<br /> Experience
          </h2>
          <h1 className="text-xl mx-4">{mySkills.descption}</h1>
        </div>
        <Spacer x={4} y={4} />
        <div className=" md:col-span-1">
          <div className="text-3xl font-mono m-5">{myExperience.name}</div>
          {myExperience.experiences.map((item, index) => (
            <div
              key={index}
              className=" h-[100px] hover:bg-clip-text hover:bg-blue-500 hover:text-transparent"
            >
              {index == 0 ? null : <Divider orientation="horizontal" />}
              <div key={index} className="grid grid-cols-2">
                <div className="m-5  col-span-1  ">
                  <p className=" text-center font-normal tracking-widest ">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
                <div className=" col-span-1  m-5">
                  <p>{item.title}</p>
                  <p>{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="m-5 text-3xl font-mono">{mySkills.name}</div>
      <div className="m-5">
        <div className="grid my-10 w-full md:h-[800px] lg:h-[500px]  lg:grid-cols-4 md:grid-cols-2">
          {mySkills.skills.map((item, index) => (
            <div key={index} className="col-span-1 m-3 ">
              <Card>
                <CardBody>
                  <div>
                    <p className="text-2xl m-3 hover:bg-clip-text hover:bg-blue-500 hover:text-transparent ">
                      {item.typeName}
                    </p>
                  </div>
                  {item.skills.map((item, index) => (
                    <div key={index} className="m-3">
                      <Progress
                        className="my-3"
                        label={generatorClassIcon(item.name)}
                        maxValue={10}
                        minValue={0}
                        radius="lg"
                        value={item.level}
                      />
                    </div>
                  ))}
                </CardBody>
              </Card>
              <Spacer x={5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function generatorClassIcon(name: string) {
  const commonDivStyle = "flex items-center justify-center font-mono ";
  const textStyle =
    "hover:bg-clip-text hover:bg-blue-500 hover:text-transparent";
  const iconStyle = "m-3";
  // <div className={commonDivStyle}>
  // <p className={textStyle}>{name}</p> */
  var icon;

  switch (name) {
    case "Node.js":
      icon = <FaNode className={iconStyle} />;
      break;
    case "Flutter":
      icon = <SiFlutter className={iconStyle} />;
      break;
    case "Swift":
      icon = <SiSwift className={iconStyle} />;
      break;
    case "Express.js":
      icon = <SiTypescript className={iconStyle} />;
      break;
    case "TypeScript":
      icon = <SiTypescript className={iconStyle} />;
      break;
    case "React":
      icon = <SiReact className={iconStyle} />;
      break;
    case "Next.js":
      icon = <SiNextdotjs className={iconStyle} />;
      break;
    case "TailwindCSS":
      icon = <SiTailwindcss className={iconStyle} />;
      break;
    case "Java":
      icon = <FaJava className={iconStyle} />;
      break;
    case "Github":
      icon = <FaGithub className={iconStyle} />;
      break;
    case "Cocoapods":
      icon = <SiCocoapods className={iconStyle} />;
      break;
    case "SwiftPackageManager":
      icon = <GoPackage className={iconStyle} />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div className={commonDivStyle}>
      <p className={textStyle}>{name}</p>
      {icon}
    </div>
  );
}
