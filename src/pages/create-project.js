import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import openaiApi from "../utils/openaiApi";

const CreateProject = () => {
  const [amount, setAmount] = useState("");
  const [objective, setObjective] = useState("");
  const [otherObjective, setOtherObjective] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chosenObjective = objective === "others" ? otherObjective : objective;

    // Create a formatted prompt for ChatGPT
    const prompt = `The user needs approximately ${amount} JPY in funding for their project. Their main objective is "${chosenObjective}". What are some suitable solutions and a list of necessary stakeholders (people to hire and their skillset & experiences) for this project? Suggest each of the list up to 10`;

    // Get ChatGPT response
    const chatGptResponse = await openaiApi(prompt);

    // Process and display the response, extract solutions, and stakeholders
    // Create reusable cards of stakeholders
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-4">Create Project</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium">
                Approximately how much funding do you need? (JPY)
              </label>
              <input
                id="amount"
                type="range"
                min="1000000"
                max="100000000"
                step="1000000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full"
              />
              <div className="mt-1 text-sm">{amount} JPY</div>
            </div>
            <div className="mb-4">
              <label htmlFor="objective" className="block text-sm font-medium">
                What do you want to achieve?
              </label>
              <select
                id="objective"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="mt-1 block w-full"
              >
                <option value="">Select an option</option>
                <option value="support">
                  To support cows, family, and business
                </option>
                <option value="revenue">To grow in revenue</option>
                <option value="promotion">New promotion and campaign</option>
                <option value="expansion">New market expansion</option>
                <option value="branding">Media mix and branding</option>
                <option value="others">Others</option>
              </select>
            </div>
            {objective === "others" && (
              <div className="mb-4">
                <label
                  htmlFor="otherObjective"
                  className="block text-sm font-medium"
                >
                  Please specify your objective
                </label>
                <input
                  id="otherObjective"
                  type="text"
                  value={otherObjective}
                  onChange={(e) => setOtherObjective(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
            >
              Confirm
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateProject;
