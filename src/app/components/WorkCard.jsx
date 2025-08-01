"use client";
import React, { useState, useEffect } from "react";
import "./WorkCard.css";

const WorkCard = ({ title, company, description, date, proof }) => {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [showModal]);


  const hasImages = Array.isArray(proof?.images) && proof.images.length > 0;

  return (
    <>
      <div
        className={`bg-[#181818] rounded-xl h-full flex flex-col p-6 border border-gray-700 hover:border-purple-500 transition cursor-pointer ${
          hasImages ? "hover:shadow-lg" : ""
        }`}
        onClick={() => hasImages && setShowModal(true)}
      >
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-purple-400 mb-2">
          {company} • {date}
        </p>

      
      <ul className="list-disc list-inside pl-4 space-y-1"> 
      {description.map((text, i) => ( 
        <li key={i} className="text-sm text-gray-300">{text}</li>
        
      ))}
      </ul>
      
 

        {/* Image previews */}
        {hasImages && (
          <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-custom">
            {proof.images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Proof preview ${i + 1}`}
                className="h-20  object-contain rounded shrink-0"
              />
            ))}
          </div>
        )}



        {/* Optional proof text */}
        {proof?.text && (
          <p className="mt-auto text-xs text-gray-400 mt-2">{proof.text}</p>
        )}

        {/* CTA */}
        {hasImages && (
          <p className="mt-auto text-sm text-yellow-400 ">
            Click to view all images
          </p>
        )}
      </div>

      {/* Modal gallery for images */}
      {showModal && hasImages && (
        
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-h-[80vh] overflow-y-auto scrollbar-custom flex gap-4 flex-wrap max-w-5xl p-4 justify-center"
            onClick={(e) => e.stopPropagation()}
          >
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition duration-200"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>

            {proof.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Proof ${i + 1}`}
                className="max-h-[500px] max-w-full object-contain rounded-lg"
              />
            ))}
          </div>
        </div>
        
      )}
    </>
  );
};

export default WorkCard;
