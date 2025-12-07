import { Experience } from "../../config/site";
import { Card, CardBody } from "@heroui/react";
import { Image } from "@heroui/react";

export const TimelineComponent = ({ data }: { data: Experience[] }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Timeline items */}
        <div className="space-y-12">
          {data.map((experience, index) => (
            <TimelineCard
              key={experience.company}
              experience={experience}
              index={index}
              isFirst={index === 0}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const TimelineCard = ({
  experience,
  index,
  isFirst,
  isLast,
}: {
  experience: Experience;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center">
      {/* Timeline line segments - extend beyond card to connect with adjacent cards */}
      {!isFirst && (
        <div className="absolute left-8 md:left-1/2 transform -translate-x-0.5 md:-translate-x-1/2 w-0.5 -top-6 h-[calc(50%+1.5rem)] bg-linear-to-b from-primary/50 to-primary hidden md:flex"></div>
      )}
      {!isLast && (
        <div className="absolute left-8 md:left-1/2 transform -translate-x-0.5 md:-translate-x-1/2 w-0.5 -bottom-6 h-[calc(50%+1.5rem)] bg-linear-to-b from-primary to-primary/50  hidden md:flex"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50 z-10  hidden md:flex">
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
      </div>

      {/* Card container */}
      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-20" : "pl-0 md:pl-20 md:ml-auto"
        } pl-0 md:pl-0 pr-0 md:pr-0`}
      >
        <Card className="bg-content1/50 backdrop-blur-sm border border-divider hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
          <CardBody className="p-4 md:p-6">
            {/* Date badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>

            {/* Content */}
            <div className="flex items-start gap-4">
              {experience.icon && (
                <div className="shrink-0 w-16 h-16 bg-white rounded-xl p-2 shadow-md flex justify-center items-center">
                  <Image
                    src={experience.icon}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {experience.title}
                </h3>
                <p className="text-base text-foreground-900 mb-3">
                  {experience.company}
                </p>
                <p className="text-sm text-foreground-900 mb-3">
                  📍 {experience.location}
                </p>
                <p className="text-base text-foreground-700 leading-relaxed">
                  {experience.description && experience.description}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
