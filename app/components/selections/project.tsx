import { Card, CardBody, Chip, Image, Button, Link } from "@nextui-org/react";
import { myProjects } from "../../config/site";
import { ExternalLinkIcon } from "../imgs/icons";

export const ProjectSection = () => {
  return (
    <section
      id="project"
      className="p-3 items-center justify-center content-center lg:max-w-[1024px] mx-auto"
    >
      <div className="text-2xl font-bold p-4">Projects</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myProjects.map((project) => (
          <Card key={project.name} className="h-fit">
            <CardBody className="flex flex-col flex-nowrap p-0">
              <Image
                alt={project.name}
                className="w-full h-full"
                src={project.image[0]}
                isZoomed
                loading="eager"
              />

              <div className="p-4">
                <div className="flex flex-row justify-between">
                  <h3 className="text-large font-medium">{project.name}</h3>
                  <Button
                    isIconOnly
                    color="primary"
                    size="sm"
                    radius="sm"
                    as={Link}
                    href={project.link}
                    isExternal
                  >
                    <ExternalLinkIcon />
                  </Button>
                </div>
                <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                  <p className="text-wrap text-default-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 text-small">
                  {project.responsible.map((responsible) => (
                    <Chip
                      key={responsible}
                      color="default"
                      size="md"
                      radius="sm"
                    >
                      {responsible}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
