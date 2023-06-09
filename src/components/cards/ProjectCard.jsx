import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ projectData, layout = "vertical" }) => {
  const isHorizontal = layout === "horizontal";

  const cardClasses = classNames(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "p-4",
    "mb-4",
    "flex",
    "hover:shadow-lg",
    "transform",
    "hover:scale-105",
    "transition-all",
    "duration-200",
    "ease-in-out",
    {
      "flex-col": !isHorizontal,
      "flex-row": isHorizontal,
    }
  );

  const imageContainerClasses = classNames("relative", "rounded-lg", {
    "w-full": !isHorizontal,
    "w-1/2": isHorizontal,
    "h-64": !isHorizontal,
    "h-40": isHorizontal,
  });

  const contentClasses = classNames("flex", "flex-col", {
    "mt-4": !isHorizontal,
    "ml-4": isHorizontal,
  });

  return (
    <div className={cardClasses}>
      <div className={imageContainerClasses}>
        <Image
          src={projectData.image}
          alt={projectData.title}
        
          className="rounded-lg"
          fill
        />
      </div>
      <div className={contentClasses}>
        <h3 className="text-xl font-semibold mb-2">{projectData.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{projectData.description}</p>
        <Link href={`/product`}>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
