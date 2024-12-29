import { myProfile } from "../../config/site";
import { Button, Image, Link } from "@nextui-org/react";
import { AnimateIcon } from "../imgs/icons";

export const HomeSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center content-center lg:h-[50dvh] bg-background text-foreground"
      id="home"
    >
      <div className="h-full sm:flex sm:justify-between md:flex md:justify-between p-8 items-center">
        <div className="items-center justify-center content-center md:max-w-[350px] aspect-square">
          <Image src={myProfile.avatar} isBlurred alt="avatar" radius="full" className="aspect-square" />
        </div>
        <div className="col-span-1 sm:min-w-[200px] md:max-w-[600px]">
          <p className="text-2xl lg:text-4xl font-bold m-4">
            Hi, I&apos;m WeiFang Chou
          </p>
          <p className="text-xl lg:text-3xl font-bold m-4">iOS Developer</p>
          <p className="sm:text-base lg:text-xl p-4 sm:min-w-[200px] w-full">
            {myProfile.description}
          </p>
          <div className="flex p-4 gap-3 justify-stretch">
            <Button
              size="md"
              className="sm:w-full md:max-w-[150px]"
              as={Link}
              color="primary"
              href={myProfile.contact}
            >
              <p className="text-white font-bold">Contact Me</p>
            </Button>
            <Button
              size="md"
              className="sm:w-full md:max-w-[150px]"
              as={Link}
              href={myProfile.resume}
              color="default"
            >
              <p className="text-[rgba(255, 255, 255, 0.15)] font-bold">
                Download Resume
              </p>
            </Button>
          </div>

          <div className="flex gap-4 m-4">
            {myProfile.socialLinks.map((link) => (
              <Button
                as={Link}
                key={link.label}
                href={link.href}
                className="text-md font-semibold"
                isExternal={!link.href.startsWith("#")}
                isIconOnly={link.icon !== undefined}
                color={link.color !== undefined ? link.color : undefined}
              >
                <AnimateIcon>
                  {link.icon && <link.icon />}
                  {!link.icon && <p>{link.label}</p>}
                </AnimateIcon>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
