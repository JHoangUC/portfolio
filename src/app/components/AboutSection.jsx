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
        <li>React & Next.js</li>
        <li>Node.js & Express</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
        <li>WordPress & Shopify</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          University of California, San Diego – B.S. in Cognitive Science (Design & Interaction)
        </li>
       
        
      </ul>
    ),
  },

];

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
        className="rounded-xl md:self-start"
          src={"/images/about filler.gif"}
          alt="filler"
          width={700}
          height={700}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <ul className="text-base lg:text-lg list-disc list-inside space-y-2">
            <li>Build SEO & GEO friendly web & mobile apps with React, Next.js, and React Native.</li>
            <li>Designer&apos;s eye with full-stack expertise to create intuitive UIs users can navigate easily</li>
            <li>Fluent in design, business, and code, to keep roadmaps clear and launches on time.</li>
         
          </ul>
          {/* This Div handles the path of the Tabs */}
          <div className="flex flex-row mt-8  ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Tech Stack{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>

            {/*MAKING ANYTHING Spacing -> Font/Color -> Hover -> border-b (underline the active selection) */}
            {/* <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span> */}

          </div>
          <div>
            {/* The paragraph handles the content found in the TAB_DATA */}
            <div className="mt-8 min-h-[12rem]">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
