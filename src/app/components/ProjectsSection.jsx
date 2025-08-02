"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Steam Clone",
		stack: "Express | Node.js | MongoDB",
		description: "Implemented MongoDB schema design that powers social connections and seamless cart management.",
		year: "2018",
		image: "/images/Steem.png",
		tag: ["All", "Node.js"],
		gitUrl: "https://github.com/JHoangUC/SteamClone",
		previewUrl: "https://safe-lake-19909.herokuapp.com/",
	},
	{
		id: 2,
		title: "Fitness Lap Tracker",
		stack: "JavaScript | HTML | CSS",
		description: "Automates lap tracking for a 150+ students. Data is organized by Teacher, Period, and ID.",
		year: "2019",
		image: "/images/peProject.png",
		tag: ["All", "Node.js"],
		gitUrl: "https://github.com/JHoangUC/PE-Project",
		previewUrl: "https://safe-lake-19909.herokuapp.com/peProject",
	},
	{
		id: 3,
		title: "Sticker Store",
		stack: "Next.Js | React | TailwindCSS",
		description: " Features a personally designed sticker, and a link to stripe for payment.",
		year: "2023",
		image: "/images/khoi.png",
		tag: ["All", "Next.js"],
		gitUrl: "https://github.com/JHoangUC/webstore",
		previewUrl: "https://webstore-plum.vercel.app/",
	},
];
const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};
	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);
	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			{/* Filter Buttons BUTTON CSS*/}
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Node.js"
					isSelected={tag === "Node.js"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Next.js"
					isSelected={tag === "Next.js"}
				/>
				{/* Original static button */}
				{/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
					All
				</button>
				<button className="rounded-full border-2 border-slate-600  hover:border-white px-6 py-3 text-xl cursor-pointer">
					Web
				</button> */}
				{/* adds space between the columns in myProjects */}
			</div>
			<ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12 md:grid-cols-2 ">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							stack={project.stack}
							year={project.year}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
