"use client";            // ← only if you’re in /app; safe to include even in pages/
import React, { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence  } from "framer-motion";
import WorkCard from "./WorkCard";
import ProjectTag from "./ProjectTag";

const workData = [
  {
    id: 1,
    title: "Web Developer",
    company: "Tempo Communications",
    description:[
      "Managed and optimized a multi-platform web stack across WordPress, Shopify, and Craft CMS.",
      "Shaped concepts into 250+ high-fidelity Figma frames in 3 weeks (vs 12), adding 2× detail, freeing
senior resources and averting delays."
    ],
      
    tag: ["Career"],
    date: "Apr 2025 – Present",
    proof: {
      text: "User Interface Designs for EML250-ID",
      images: ["/images/tempo/Main Menu Dark.png","/images/tempo/Main Menu Light.png","/images/tempo/Device Menu Dark.png","/images/tempo/Device Menu.png", "/images/tempo/Template List Light.png","/images/tempo/Template List.png", "/images/tempo/History Dark.png", "/images/tempo/History.png"],
    },
  },
  {
    id: 2,
    title: "Progressive Web App Developer",
    company: "PIC Health – CSUSM",
    description:[
      "Overhauled their interface mid-project into a culturally appriopriate aesthetic", 
      "Collaborated on PostgreSQL implementation, for account creation and calendar events",
      "Led Team of Student Developers, coordinating tasks and milestones."

    ],
    
      tag: ["Career"],
    date: "Jan 2025 – May 2025",
    proof: {
      text: "Modernized UI and improved performance.",
      images: ["/images/pwa/picHealth 1.png","/images/pwa/image.png","/images/pwa/image (2).png","/images/pwa/image (3).png","/images/pwa/image (4).png", ,"/images/pwa/image (5).png","/images/pwa/homepage old.png","/images/pwa/resources old.png"],
    },
  },
  {
    id: 3,
    title: "Founder & Full-Stack Developer",
    company: "Designs By Khoi",
    description:[
      "Launched and maintained a $0/month e-commerce store using Next.js, Tailwind CSS, and Stripe.", 
      "Designed the products, handled UX, and drove traffic using SEO and content marketing."
    ],
    tag: ["Startup"],
    date: "Mar 2023 – Present",
    proof: {
      text: "Products Designed in Photoshop and Illustrator",
      images: ["/images/stickers/capybara boba.png", "/images/stickers/Pengu Boba.png", "/images/stickers/Octo Boba.png"],
    },
  },
    {
    id: 4,
    title: "React Native Developer",
    company: "Resilience Inc.",
    description:[
      "Integrated Figma designs into functional features for implementation in their AIMEE app.", 
      "Leveraged AI mood detection to drive chatbot course recommendations"
    ],
    tag: ["Career"],
    date: "June 2023 – Jan 2024",
    proof: {
      text: "Figma Designs Converted into React Native Code",
      images: ["/images/resilience/Log In.png", "/images/resilience/Sign Up - Sample Info Email.png", "/images/resilience/Sign Up - Sample Info Password.png", "/images/resilience/aimeeChat.png", "/images/resilience/Home - Static.png", "/images/resilience/Active Listening - Static.png"],
    },
  },
];

export default function WorkSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Special-case “All”
  const filteredWork = useMemo(() => {
    return tag === "All"
      ? workData
      : workData.filter((item) => item.tag.includes(tag));
  }, [tag]);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work" className="pb-12 "> {/* ← className! */}
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-6">
        Experience
      </h2>

      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
        {["All", "Career", "Startup"].map((t) => (
          <ProjectTag
            key={t}
            name={t}
            isSelected={tag === t}
            onClick={() => setTag(t)}
          />
        ))}
      </div>

      <motion.ul
        ref={ref}
        layout                /* 👈 key line: animate height & re-flow */
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 "
      >
        <AnimatePresence>
          {filteredWork.map((item, i) => (
            <motion.li
              key={item.id}
              layout              /* animate each card’s move/resize */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <WorkCard {...item} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
