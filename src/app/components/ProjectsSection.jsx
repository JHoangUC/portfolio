"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Project 1",
		description: "This is a description for project 1",
		image: "/images/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Project 2",
		description: "This is a description for project 2",
		image: "/images/1.png",
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "Project 3",
		description: "This is a description for project 3",
		image: "/images/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
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
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
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
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
