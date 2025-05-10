import { Experience } from "../../config/site";
import { Card, CardBody } from "@heroui/react";
import { Image } from "@heroui/react";
import { Timeline } from "rsuite";
import TimelineItem from "rsuite/esm/Timeline/TimelineItem";

export const TimelineComponent = ({ data }: { data: Experience[] }) => {
  return (
    <>
      <div className=" lg:max-w-[1024px] mx-auto m-4">
        <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold m-4">
          Experience
        </p>
        <Timeline align="alternate" className="m-4">
          {data.map((experience) => (
            <TimelineCard key={experience.company} experience={experience} />
          ))}
        </Timeline>
      </div>
    </>
  );
};

export const TimelineCard = ({ experience }: { experience: Experience }) => {
  return (
    <TimelineItem
      className=""
      time={`${experience.startDate} - ${experience.endDate}`}
    >
      <Card>
        <CardBody>
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            <div className="row-span-4 w-[60px] h-[60px] min-w-[50px] min-h-[50px] bg-white rounded-xl content-center">
              <Image
                src={experience.icon}
                alt={`${experience.title} logo`}
                className="object-contain"
              />
            </div>
            <div className="row-span-2">
              <p className="text-lg md:text-xl lg:text-2xl font-bold">
                {experience.title}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-500">
                {experience.company} - {experience.location}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </TimelineItem>
  );
};
