"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import WorkCard from "./WorkCard";
import ProjectTag from "./ProjectTag";

const workData = [
  {
    id: 1,
    title: "Web Developer",
    company: "Tempo Communications",
    description:
      "Managed and optimized a multi-platform web stack across WordPress, Shopify, and Craft CMS. Improved SEO using structured data and metadata cleanup, and researched GEO targeting for future AI-based search.",
    tag: ["All", "Internship"],
    date: "Apr 2025 – Present",
  },
  {
    id: 2,
    title: "Progressive Web App Developer",
    company: "PIC Health – CSUSM",
    description:
      "Built responsive web apps in React Native. Helped redesign a legacy interface into a modern 3D layout and collaborated on feature implementation for internal and patient-facing tools.",
    tag: ["All", "Internship"],
    date: "Jan 2025 – May 2025",
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "Resilience Inc",
    description:
      "Translated Figma designs into code for a mobile app. Helped debug key components and implemented interactive features using React Native and JavaScript.",
    tag: ["All", "Internship"],
    date: "Jan 2023 – Jun 2023",
  },
  {
    id: 4,
    title: "Founder & Full-Stack Developer",
    company: "Designs By Khoi",
    description:
      "Launched and maintained an e-commerce store using Next.js, Tailwind CSS, and Stripe. Designed the brand, handled UX, and drove traffic using SEO and content marketing.",
    tag: ["All", "Entrepreneurship"],
    date: "Mar 2023 – Present",
  },
];


const WorkSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredWork = workData.filter((item) => item.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work" class="pb-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Internship" isSelected={tag === "Internship"} />
        <ProjectTag onClick={handleTagChange} name="Entrepreneurship" isSelected={tag === "Entrepreneurship"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 sm:grid-cols-1">
        {filteredWork.map((item, index) => (
          <motion.li
            key={item.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <WorkCard
              title={item.title}
              company={item.company}
              description={item.description}
              date={item.date}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WorkSection;
