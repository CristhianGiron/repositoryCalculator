import React from 'react';

const ConversionSteps = ({ steps }) => {
  return (
    <div className="mt-4">
      <ul className="list-disc list-inside">
        {steps.map((step, index) => (
          <li key={index} className="mb-1">{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConversionSteps;


