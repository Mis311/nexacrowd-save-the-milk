import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import openaiApi from "../utils/chatGpt";

const DisplayGptResponse = ({ response }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">ChatGPT Response</h2>
    </div>
  );
};

const CreateProject = () => {
  const [amount, setAmount] = useState("");
  const [objective, setObjective] = useState({});
  const [otherObjective, setOtherObjective] = useState("");
  const [chatGptResponse, setChatGptResponse] = useState("");

  const handleObjectiveChange = (e) => {
    const { name, checked } = e.target;
    setObjective((prevObjective) => ({ ...prevObjective, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chosenObjective = objective.others ? otherObjective : objective;

    // Create a formatted prompt for ChatGPT
    const prompt = `The user needs approximately ${amount} JPY in funding for their project. Their main objective is "${chosenObjective}". What are some suitable duration for the fundraising (suggest approcimate time), solutions and a list of necessary stakeholders (people to hire and their skillset & experiences) for this project? Suggest each of the list up to 10(only 1 for duration)`;

    // Get ChatGPT response
    const chatGptResponse = await openaiApi(prompt);
    setChatGptResponse(chatGptResponse);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "grey" }} />
      <main>
        <chatGpt />
        <div className="container mx-auto px-4 py-8 mt-24">
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
              <label className="block text-sm font-medium">
                What do you want to achieve?
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="support"
                    checked={objective.support || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">
                    To support cows, family, and business
                  </span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="revenue"
                    checked={objective.revenue || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">To grow in revenue</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="promotion"
                    checked={objective.promotion || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">New promotion and campaign</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="expansion"
                    checked={objective.expansion || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">New market expansion</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    name="branding"
                    checked={objective.branding || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Media mix and branding</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="others"
                    checked={objective.others || false}
                    onChange={handleObjectiveChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Others</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
            >
              Confirm
            </button>
          </form>
        </div>
        {chatGptResponse && <DisplayGptResponse response={chatGptResponse} />}
      </main>
    </div>
  );
};

export default CreateProject;
