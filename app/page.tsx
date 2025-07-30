"use client";

import { HomeSection } from "./components/selections/home";
import { ExperienceSection } from "./components/selections/experience";
import { WorkProjectSection } from "./components/selections/workproject";
import { MyProjectSection } from "./components/selections/myproject";
import { SkillSection } from "./components/selections/skill";
import { ContactForm } from "./components/forms/contact-form";
import NavigationBar from "./components/navbar/navbar";

export default function HomePage() {
  return (
    <>
      <div className="bg-background text-foreground">
        <NavigationBar />
        <HomeSection />
        <ExperienceSection />
        <SkillSection />
        <WorkProjectSection />
        <MyProjectSection />
        <ContactForm />
      </div>
    </>
  );
}
