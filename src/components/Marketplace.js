import React from "react";
import ProjectCard from "../components/cards/ProjectCard";
import TalentCard from "../components/cards/TalentCard";

const projectData = [
  {
    title: "Mighty Cow",
    description: "MoMo Nation Project",
    image: "/nfts/cow1.png",
    width: 300,
    height: 300,
  },
  {
    title: "?",
    description: "Get me!",
    image: "/nfts/qmark.png",
    width: 300,
    height: 300,
  },
  {
    title: "Happy Cow",
    description: "Cow Happy We Happy ",
    image: "/nfts/cow2.png",
    width: 300,
    height: 300,
  },
  {
    title: "Sakura Cow Series",
    description: "This is a description of project 1.",
    image: "/nfts/cow4.png",
    width: 300,
    height: 300,
  },
  {
    title: "Oji-chan Project",
    description: "This is a description of project 1.",
    image: "/nfts/nft5.png",
    width: 300,
    height: 300,
  },

  {
    title: "Wafu",
    description: "This is a description of project 1.",
    image: "/nfts/nft2.png",
    width: 300,
    height: 300,
  },
  {
    title: "?",
    description: "Pick me.",
    image: "/nfts/qmark.png",
    width: 300,
    height: 300,
  },
  {
    title: "Project Wombat",
    description: "This is a description of project 1.",
    image: "/nfts/nft1.png",
    width: 300,
    height: 300,
  },
  {
    title: "Oji-chan Project",
    description: "This is a description of project 1.",
    image: "/nfts/nft6.png",
    width: 300,
    height: 300,
  },
];

const jobData = [
  {
    title: "Web3 Developer",
    description: "Join our team to develop and deploy smart contracts.",
    image: "/nfts/cow1.png",
    payment: "Paid",
    proofOfWork: "No",
  },
  {
    title: "Marketing Specialist",
    description: "Help promote our NFT farm and grow our community.",
    image: "/nfts/cow1.png",
    payment: "Paid",
    proofOfWork: "No",
  },
  {
    title: "Content Creator",
    description: "Create engaging content for our NFT project.",
    image: "/nfts/cow1.png",
    payment: "Non-Paid",
    proofOfWork: "Yes",
  },
  {
    title: "Social Media Manager",
    description:
      "Manage our social media accounts and engage with the community.",
    image: "/nfts/cow1.png",
    payment: "Paid",
    proofOfWork: "No",
  },
  {
    title: "Graphic Designer",
    description: "Design promotional materials and NFTs for our project.",
    image: "/nfts/cow1.png",
    payment: "Non-Paid",
    proofOfWork: "Yes",
  },
  {
    title: "Community Manager",
    description: "Grow and manage our NFT project's community.",
    image: "/nfts/cow1.png",
    payment: "Paid",
    proofOfWork: "No",
  },
  {
    title: "Partnership Manager",
    description: "Develop partnerships with other NFT projects and platforms.",
    image: "/nfts/cow1.png",
    payment: "Non-Paid",
    proofOfWork: "Yes",
  },
  {
    title: "UI/UX Designer",
    description: "Design and improve the user experience on our platform.",
    image: "/nfts/cow1.png",
    payment: "Paid",
    proofOfWork: "No",
  },
];

function Marketplace() {
  return (
    <div className="container mx-auto p-24">
      <h1 className="text-3xl font-semibold mb-6">Project NFT Top Sales</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} projectData={project} layout="vertical" />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4" id="talents">Job Postings</h2>
        {jobData.map((job, index) => (
          <TalentCard  key={index} jobData={job} layout="horizontal" />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
