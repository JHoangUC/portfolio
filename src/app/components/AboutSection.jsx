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
        <li>SEO & GEO Integrations</li>
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
        className="rounded-xl"
          src={"/images/about filler.gif"}
          alt="filler"
          width={700}
          height={700}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-3">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a full-stack developer and designer focused on building intuitive, scalable digital experiences. From improving SEO to designing interfaces or coding full-stack apps, 
          I think ahead — anticipating how products will grow and evolve. 
          With a UX background and an entrepreneurial mindset, I’m always looking for the next opportunity to build something meaningful.
          </p>
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
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
