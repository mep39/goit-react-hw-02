function Options({ feedbackTypes }) {
  return (
    <div>
      <h2>Options</h2>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
    </div>
  );
}
