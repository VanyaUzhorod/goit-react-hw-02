import css from "./feedback.module.css";

const FeedBack = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedB}>
      <p>Good:{feedback.good}</p>
      <p>Neutral:{feedback.neutral}</p>
      <p>Bad:{feedback.bad}</p>
      <p>Total Feedback:{totalFeedback}</p>
      <p>Positive Feedback:{positiveFeedback}%</p>
    </div>
  );
};
export default FeedBack;
