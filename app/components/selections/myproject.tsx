import { Card, CardBody, Chip, Image, Button, Link } from "@heroui/react";
import { myProjects } from "../../config/site";
import { ExternalLinkIcon } from "../imgs/icons";

export const MyProjectSection = () => {
  return (
    <section
      id="project"
      className="py-20 lg:py-32 bg-linear-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Side <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {myProjects.map((project) => (
            <Card
              key={project.name}
              className="group bg-content1/50 backdrop-blur-sm border border-divider hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 w-full max-w-sm"
            >
              <CardBody className="flex flex-col p-0 overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image[0]}
                    loading="eager"
                    radius="none"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {project.name}
                    </h3>
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      variant="light"
                      as={Link}
                      href={project.link}
                      isExternal
                      className="hover:bg-primary/20"
                    >
                      <ExternalLinkIcon />
                    </Button>
                  </div>

                  <p className="text-foreground-700 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.responsible.map((tech) => (
                      <Chip
                        key={tech}
                        size="sm"
                        variant="flat"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
