import { myExperience } from "../../config/site";
import { TimelineComponent } from "../timeline/timelinecard";

export const ExperienceSection = () => {
  return (
    <>
      <section id="experience" className="bg-background text-foreground">
        <TimelineComponent data={myExperience} />
      </section>
    </>
  );
};
