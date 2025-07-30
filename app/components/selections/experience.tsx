import { myExperience, myProfile } from "../../config/site";
import { TimelineComponent } from "../timeline/timelinecard";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-700">
            {myProfile.experienceDescription}
          </p>
        </div>
        <TimelineComponent data={myExperience} />
      </div>
    </section>
  );
};
