"use client";

import { HomeSection } from "./components/selections/home";
import { ExperienceSection } from "./components/selections/experience";
import { ProjectSection } from "./components/selections/project";
import { SkillSection } from "./components/selections/skill";
import { ContactForm } from "./components/forms/contact-form";
import NavigationBar from "./components/navbar/navbar";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <NavigationBar />
      <HomeSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <ContactForm />
    </div>
  );
}
