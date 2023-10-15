import React from "react";
import ProjectCard from "./ProjectCard";

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
		tag: ["All", "Web"],
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
	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				{
					// React - Adding to website dynamically
					//uses ProjectCard component
					projectsData.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					))
				}
			</div>
		</>
	);
};

export default ProjectsSection;
