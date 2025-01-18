import "./App.css";
import { useState, useEffect } from "react";

import Options from "./components/Options/Options";
import FeedBack from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  useEffect(() => {
    const saveFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (saveFeedback) {
      setFeedback(saveFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
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
