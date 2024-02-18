function Feedback({ feedbackTypes, onFeedbackSelect }) {
  return (
    <div>
      <h2>Feedback</h2>
      <button onClick={() => onFeedbackSelect("good")}>Good</button>
      <button onClick={() => onFeedbackSelect("neutral")}>Neutral</button>
      <button onClick={() => onFeedbackSelect("bad")}>Bad</button>
    </div>
  );
}
