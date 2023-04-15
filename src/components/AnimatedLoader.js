import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const AnimatedLoader = () => {
  const [loading, setLoading] = useState(true);
  const [solutions, setSolutions] = useState([]);
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    // Simulate loading and data generation
    setTimeout(() => {
      setLoading(false);
      setSolutions([
        "Solution 1",
        "Solution 2",
        "Solution 3",
      ]);
      setTalents([
        "Talent 1",
        "Talent 2",
        "Talent 3",
      ]);
    }, 3000);
  }, []);

  const loadingContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
  };

  return (
    <div className="container mx-auto p-24">
      {loading ? (
        <div style={loadingContainerStyle}>
          <ReactLoading type="spin" color="#000" />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">Solutions:</h2>
          <ul>
            {solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Talents:</h2>
          <ul>
            {talents.map((talent, index) => (
              <li key={index}>{talent}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AnimatedLoader;
