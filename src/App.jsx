import { useState, useEffect } from "react";

import Descriptions from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("clicks");

  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks);

  useEffect(() => {
    window.localStorage.setItem("clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  return (
    <>
      <Descriptions />
      <Options updateFeedback={updateFeedback} />
      <Feedback clicks={clicks} />
    </>
  );
}

// function App() {
//   const [feedbackTypes, setFeedbackTypes] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   // const handleFeedbackSelect = (type) => {
//   //   setFeedbackTypes((prevFeedbackTypes) => ({
//   //     ...prevFeedbackTypes,
//   //     [type]: prevFeedbackTypes[type] + 1,
//   //   }));
//   // };

//   return (
//     <div>
//       <Feedback
//         feedbackTypes={feedbackTypes}
//         onFeedbackSelect={handleFeedbackSelect}
//       />
//       <Options feedbackTypes={feedbackTypes} />
//     </div>
//   );
// }

// export default App;
