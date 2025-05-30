import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// parameters added to ProjectCard have to be added to ProjectData in ProjectSection
//as well as the map function
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	return (
		<div>
			{/* Dynamic Project List */}
				<div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
					<img
						src={imgUrl}
						alt={title}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
					/>
				{/* DIV = ICONS - overlay
                items-center justify-center absolute top-0 left-0 - makes it middle of page
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 - same thing
                */}
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
					{/* CodeBracket - difference is m-2 to space out the buttons */}
					<Link
						href={gitUrl}
						target="_blank"
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>

					{/* EyeIcon */}
					<Link
						href={previewUrl}
						target="_blank"
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>
				</div>
			</div>
			{/* Project Name & Description */}
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
