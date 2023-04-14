import React from 'react';
import classNames from 'classnames';

const ProjectCard = ({ projectData, layout = 'vertical' }) => {
  const isHorizontal = layout === 'horizontal';

  const cardClasses = classNames(
    'bg-white',
    'rounded-lg',
    'shadow-md',
    'p-4',
    'mb-4',
    'flex',
    {hover: 'hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out'},
    {
      'flex-col': !isHorizontal,
      'flex-row': isHorizontal,
    }
  );

  const imageClasses = classNames(
    'object-cover',
    'rounded-lg',
    {
      'w-full': !isHorizontal,
      'w-1/2': isHorizontal,
      'h-64': !isHorizontal,
      'h-40': isHorizontal,
    }
  );

  const contentClasses = classNames(
    'flex',
    'flex-col',
    {
      'mt-4': !isHorizontal,
      'ml-4': isHorizontal,
    }
  );

  return (
    <div className={cardClasses}>
      <Image src={projectData.image} alt={projectData.title} className={imageClasses} />
      <div className={contentClasses}>
        <h3 className="text-xl font-semibold mb-2">{projectData.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{projectData.description}</p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
