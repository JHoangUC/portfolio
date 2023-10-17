import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    // if isSelected is true, then buttonStyles = text-white bg-purple-500 
    // else buttonStyles = text-[#ADB7BE] border-slate-600 hover:border-white
    //if else statement (ternary operator - ? true : false)
  const buttonStyles = isSelected ? "text-white bg-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    // onClick is a prop that is passed in from ProjectsSection
    // Dynamically adds a button to the page
    <button className={` ${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    // gets name from ProjectSection
    onClick={() => onClick(name)}
    >
        {name}
    </button>
  )
}

export default ProjectTag