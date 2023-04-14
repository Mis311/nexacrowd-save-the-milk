import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
       
        <main className="flex-grow">
          {/* Project Image */}
          <div
            className="bg-cover bg-center h-64"
            style={{
              backgroundImage: "url('https://source.unsplash.com/random')",
            }}
          ></div>

          {/* Project Info */}
          <section className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-4 font-lato">Project Title</h1>
            <p className="text-lg mb-6 font-nunito">
              Project description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
              Donate
            </button>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded h-4 mb-4">
              <div
                className="h-full text-xs text-center text-white font-semibold bg-blue-500 rounded"
                style={{ width: "75%" }}
              >
                75% Funded
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">Amount Raised</h2>
                <p>$12,345</p>
              </div>
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">
                  Number of Backers
                </h2>
                <p>123</p>
              </div>
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">Duration</h2>
                <p>30 days</p>
              </div>
            </div>
          </section>

          {/* Project Narrative */}
          <section className="container mx-auto px-6 py-10">
            <div className="space-y-12">
              {/* Story 1 */}
              <div className="space-y-4" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-lato">Story 1</h2>
                <p className="text-lg font-nunito">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus accumsan est in sapien imperdiet ullamcorper.
                </p>
                <img
                  src="https://source.unsplash.com/random/800x450"
                  alt="Story 1"
                  className="rounded-lg w-full"
                />
              </div>

              {/* Story 2 */}
              <div className="space-y-4" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-lato">Story 2</h2>
                <p className="text-lg font-nunito">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus accumsan est in sapien imperdiet ullamcorper.
                </p>
                <img
                  src="https://source.unsplash.com/random/800x450?2"
                  alt="Story 2"
                  className="rounded-lg w-full"
                />
              </div>

              {/* Story 3 */}
              <div className="space-y-4" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-lato">Story 3</h2>
                <p className="text-lg font-nunito">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus accumsan est in sapien imperdiet ullamcorper.
                </p>
                <img
                  src="https://source.unsplash.com/random/800x450?3"
                  alt="Story 3"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Buy NFTs
              </button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Invest in Project
              </button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Lend Your Talent
              </button>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
