import { Card, CardBody, CardHeader } from "@heroui/react";
import { mySkills, SubSkill, myProfile } from "../../config/site";

export const SkillSection = () => {
  return (
    <section
      id="skill"
      className="py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-700">
            {myProfile.skillsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {mySkills.map((skillCategory) => (
            <Card
              key={skillCategory.typeName}
              className="bg-content1/50 backdrop-blur-sm border border-divider hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 p-2"
            >
              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold text-primary">
                  {skillCategory.typeName}
                </h3>
              </CardHeader>
              <CardBody className="gap-6 pt-6">
                {skillCategory.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// const StarRating = ({
//   rating,
//   maxRating = 5,
// }: {
//   rating: number;
//   maxRating?: number;
// }) => {
//   return (
//     <div className="flex gap-0.5">
//       {Array.from({ length: maxRating }, (_, i) => {
//         const isFilled = i < rating;
//         return (
//           <svg
//             key={i}
//             className={`w-4 h-4 ${isFilled ? "text-primary" : "text-gray-600"}`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         );
//       })}
//     </div>
//   );
// };

export const SkillCard = ({ skill }: { skill: SubSkill }) => {
  // const percentage = (skill.level / 5) * 100;

  return (
    <div className="group">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-shrink-0 w-12 h-12 items-center justify-center bg-primary/10 rounded-lg p-1.5 group-hover:bg-primary/20 transition-colors">
          {skill.icon({ height: 36, width: 36 })}
        </div>
        <p className="font-semibold text-base">{skill.name}</p>
        {/* <div className="flex-1">
          <div className="flex justify-between items-baseline mb-1">
            <p className="font-semibold text-base">{skill.name}</p>
            <StarRating rating={skill.level} />
          </div>
          <Progress
            value={percentage}
            size="sm"
            color="primary"
            className="max-w-full"
            classNames={{
              track: "bg-default/20",
              indicator: "bg-gradient-to-r from-primary to-purple-600",
            }}
          />
        </div> */}
      </div>
    </div>
  );
};
