import {
  Card,
  CardFooter,
  Image,
  Button,
  Chip,
  Spacer,
  Link,
} from "@nextui-org/react";

import { myExperience, myProjects, mySkills } from "@/config/site";

export default function Projects() {
  return (
    <div>
      <div className=" md:col-span-1 content-start m-3">
        <h2 className="text-5xl font-black m-3 ">Projects</h2>
        <div className="text-3xl font-mono m-3">{myExperience.name}</div>
        <h1 className="text-base m-3">{mySkills.descption}</h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 m-3">
        {myProjects.projects.map((item, _) => (
          <div key={item.name} className="m-3">
            <Card className="col-span-1" radius="lg">
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
        ))}
      </div>
    </div>
  );
}
