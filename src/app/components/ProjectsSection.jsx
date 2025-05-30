"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Steam Clone",
		description: "Express, Node.js, and MongoDB. | Features an encrypted login system, RESTful API, and CRUD operations.",
		image: "/images/Steem.png",
		tag: ["All", "Node.js"],
		gitUrl: "https://github.com/JHoangUC/SteamClone",
		previewUrl: "https://safe-lake-19909.herokuapp.com/",
	},
	{
		id: 2,
		title: "P.E. Lap Tracker",
		description: "JavaScript. | Features a timer, lap counter, and a history of previous lap times. Organized by Teacher, Period, and ID.",
		image: "/images/peProject.png",
		tag: ["All", "Node.js"],
		gitUrl: "https://github.com/JHoangUC/PE-Project",
		previewUrl: "https://safe-lake-19909.herokuapp.com/peProject",
	},
	{
		id: 3,
		title: "Sticker Store",
		description: "Next.Js, React, and TailwindCSS. | Features a personally designed sticker, and a link to stripe for payment.",
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
