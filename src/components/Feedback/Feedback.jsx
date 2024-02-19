import css from "../Feedback/Feedback.module.css";

export default function Feedback({ clicks }) {
  return (
    <ul>
      <li className={css.item}>Good:{clicks.good}</li>
      <li className={css.item}>Neutral:{clicks.neutral}</li>
      <li className={css.item}>Bad:{clicks.bad}</li>
    </ul>
  );
}
