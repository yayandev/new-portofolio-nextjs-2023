import SkillList from "@/components/SkillList";
import React from "react";

const Skills = () => {
  return (
    <section className="w-full py-5 space-y-3">
      <h1 className="text-xl sm:text-3xl font-bold">Skills</h1>
      <p className="text-sm max-w-sm">
        Berikut Skills yang saya miliki dalam dunia programming saat ini dan
        saya berjanji akan terus mengembangkan diri saya dengan semangat belajar
        sampai mati.
      </p>
      <SkillList />
    </section>
  );
};

export default Skills;
