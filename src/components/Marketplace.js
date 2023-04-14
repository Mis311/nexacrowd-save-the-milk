import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';

const projectData = [
  {
    title: 'Project 1',
    description: 'This is a description of project 1.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Project 2',
    description: 'This is a description of project 2.',
    image: 'https://via.placeholder.com/300',
  },
];

function Marketplace() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} projectData={project} layout="vertical" />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Horizontal Layout</h2>
        {projectData.map((project, index) => (
          <ProjectCard key={index} projectData={project} layout="horizontal" />
        ))}
      </div>
    </div>
  );
}

export default  Marketplace;
