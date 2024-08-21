"use client";

import { Card, Image, Button, Chip, Link, CardBody } from "@nextui-org/react";

import { myProjects } from "@/config/site";

export default function Projects() {
  return (
    <div className="">
      <div className=" md:col-span-1 content-start m-3 my-10">
        <h2 className="text-5xl font-black m-3 hover:text-primary">Projects</h2>
        <div className="text-3xl font-mono m-3 hover:text-primary">
          {myProjects.name}
        </div>
        <h1 className="text-base m-3 hover:text-primary">
          {myProjects.description}
        </h1>
      </div>
      <div className="m-3">
        {myProjects.projects.map((item, _) => (
          <div key={item.name}>
            {/* <div className="m-5">
              <Card radius="lg">
                <Image
                  isBlurred
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  height={300}
                  shadow="lg"
                  src={item.image[0]}
                  width={300}
                />
                <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <div>
                        {item.responsible.map((item, _) => (
                          <Chip key={item} className="mr-3 mb-3">
                            {item}
                          </Chip>
                        ))}
                      </div>
                      <p className="text-xl text-primary-foreground ml-3">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    <Link
                      isExternal
                      showAnchorIcon
                      className="font-bold"
                      href={item.link}
                    >
                      Get Link
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="m-5 w-1/2">123</div> */}

            <Card
              isBlurred
              className="bg-background/60 dark:bg-default-100/50 m-5"
              shadow="sm"
            >
              <CardBody>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-center m-3">
                  <div className="md:col-span-1">
                    <Image
                      alt="Album cover"
                      className="object-cover bg-slate-300"
                      height="100%"
                      shadow="md"
                      src={item.image[0]}
                      width="100%"
                    />
                  </div>

                  <div className="col-span-2  mx-5">
                    <div className="flex gap-10">
                      <p className="font-bold text-3xl m-y-3 text-foreground/90 hover:text-primary">
                        {item.name}
                      </p>
                      <Button
                        isExternal
                        isIconOnly
                        showAnchorIcon
                        as={Link}
                        color="primary"
                        href={item.link}
                        size="md"
                        variant="shadow"
                      />
                    </div>
                    <div>
                      <p className="text-medium font-normal hover:text-primary ">
                        {item.description}
                      </p>
                    </div>
                    <div className="my-3 flex-col">
                      {item.responsible.map((item, _) => (
                        <Chip
                          key={item}
                          className="mr-3 mb-3 hover:text-primary "
                        >
                          {item}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
