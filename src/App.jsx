import "./App.css";
import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import FeedBack from "./components/Feedback/FeedBack";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = window.localStorage.getItem("save-feedback");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem("save-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <div className="App">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <FeedBack
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="no feedback yet" />
      )}
    </div>
  );
};

export default App;
