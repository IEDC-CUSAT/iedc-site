"use client";

import TeamCardComponent from "./TeamCardComponent";
import { team } from "@/constants";

const Team = () => {
  return (
    <section className="bg-[#E3FEF7] px-2 lg:px-4 py-8" aria-labelledby="team-title">
      <h2 id="team-title" className="my-16 text-center text-4xl font-bold text-[#001D23] md:text-7xl lg:text-8xl">
        EXECOM 24-25
      </h2>
      <div className="grid w-full grid-cols-1 gap-6 place-items-center md:px-2 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="w-full max-w-sm p-4">
            <TeamCardComponent
              imageSrc={member.image}
              name={member.name}
              role={member.role}
              linkedInURL={member.linkedinUrl}
              alt={`Profile picture of ${member.name}`}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
