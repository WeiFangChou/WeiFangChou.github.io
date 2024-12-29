import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Progress,
} from "@nextui-org/react";
import { mySkills, SubSkill } from "../../config/site";

export const SkillSection = () => {
  return (
    <div className="p-3 items-center justify-center content-center lg:max-w-[1024px] mx-auto">
      <p className="text-2xl font-bold p-6">Skill</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        {mySkills.map((skill) => (
          <Card key={skill.typeName} className="">
            <CardHeader>
              <h1 className="text-2xl font-bold">{skill.typeName}</h1>
            </CardHeader>
            <Divider className="w-full" />
            <CardBody className="my-3 gap-3 bg-transparent">
              {skill.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const SkillCard = ({ skill }: { skill: SubSkill }) => {
  return (
    <div className="flex flex-row">
      <Card className="w-full bg-background/50" shadow="md" isBlurred isPressable>
        <CardBody className="flex flex-row">
          <div className="m-2">
          {skill.icon({ height: 40, width: 40 })}
          </div>
          <Progress className="max-w-md" label={skill.name} value={55} />
        </CardBody>
      </Card>
    </div>
  );
};
