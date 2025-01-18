import css from "./options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsList}>
      <button className={css.options} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.options} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.options} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.options} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
