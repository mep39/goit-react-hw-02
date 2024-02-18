// import React, { useState } from "react";
import { useState } from "react";

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const handleFeedbackSelect = (type) => {
  //   setFeedbackTypes((prevFeedbackTypes) => ({
  //     ...prevFeedbackTypes,
  //     [type]: prevFeedbackTypes[type] + 1,
  //   }));
  // };

  return (
    <div>
      <Feedback
        feedbackTypes={feedbackTypes}
        onFeedbackSelect={handleFeedbackSelect}
      />
      <Options feedbackTypes={feedbackTypes} />
    </div>
  );
}

export default App;
