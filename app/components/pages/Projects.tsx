"use client";

import { Card, Image, Button, Chip, Link, CardBody } from "@nextui-org/react";

import { myProjects } from "@/config/site";

export default function Projects() {
  return (
    <div className="my-10">
      <div className=" md:col-span-1 content-start m-3 my-10">
        <h2 className="text-5xl font-black m-3 hover:text-primary mt-20">
          專案 Projects
        </h2>
        {/* <div className="text-3xl font-mono m-3 hover:text-primary">
          {myProjects.name}
        </div> */}
        <h1 className="text-base m-3 hover:text-primary">
          {myProjects.description}
        </h1>
      </div>
      <div className="m-3">
        {myProjects.projects.map((item, _) => (
          <div key={item.name}>
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
                      className="object-cover bg-slate-300 aspect-video"
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
