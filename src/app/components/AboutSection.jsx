"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc columns-2 pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>C</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>HTML/CSS</li>
        <li>Cisco</li>
        <li>Python</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>École ÉNIGMA</li>
        <li>Bac général spé Maths/Science de l&apos;ingénieur</li>
      </ul>
    ),
  },
  {
    title: "experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Bot Discord (en cours de création)</li>
        <li>
          Agent du service technique (lettre de recommandation) a la ville de
          provin
        </li>
        <li>Divers projets au lycée</li>
        <li>Stage au Conseil régional &ndash; Service de l&apos;ENT en 3éme</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          alt="Image of a computer on a desk"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            A propos de moi
          </h2>
          <p className="text-base lg:text-lg">
            Je suis passionné par le développement web et mobile. Je suis un
            développeur full-stack, j&apos;ai une expérience dans la création de
            sites web et d&apos;applications mobiles. Je suis également un
            passionné de la technologie et de l&apos;innovation. Curieux et
            autodidacte, je suis toujours à la recherche de nouveaux défis et
            d&apos;opportunités pour apprendre et grandir dans mon domaine.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Éducation{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Éxperiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
