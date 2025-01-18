import css from "./notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      <p>{message}</p>
    </div>
  );
};
export default Notification;
