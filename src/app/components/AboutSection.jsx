"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>MongoDb</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University Of California, San Diego</li>
        <li>Palomar College, San Marcos</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native Developer, Resilience Inc</li>
        
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
//startTransition
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    //NEW START Make Section? -> Make column Div -> CSS -> Div
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
        className="rounded-xl"
          src={"/images/about filler.gif"}
          alt="filler"
          width={700}
          height={700}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <p className="text-base lg:text-lg">
          Equipped with a solid foundation in both front-end and back-end technologies, 
          I specialize in creating seamless, responsive, and scalable applications. My proficiency extends to frameworks like React for building 
          interactive user interfaces and MongoDB for efficient data management.
          </p>
          {/* This Div handles the path of the Tabs */}
          <div className="flex flex-row mt-8  ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience{" "}
            </TabButton>
            {/*MAKING ANYTHING Spacing -> Font/Color -> Hover -> border-b (underline the active selection) */}
            {/* <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span> */}

          </div>
          <div>
            {/* The paragraph handles the content found in the TAB_DATA */}
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
