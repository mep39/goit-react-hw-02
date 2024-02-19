import css from "../Options/Options.module.css";

export default function Options({
  updateFeedback
}) {
  return (
    <ul className={css.wrapper}>
      <li>
        <button onClick={() => updateFeedback("good")} className={css.button}>
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => updateFeedback("neutral")}
          className={css.button}
        >
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")} className={css.button}>
          Bad
        </button>
      </li>
      </ul>
  );
}