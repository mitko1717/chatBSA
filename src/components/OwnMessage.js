import React from "react";

const OwnMessage = ({
  text,
  avatar,
  user,
  time,
  state,
  setState,
  item,
  onEditClick,
}) => {
  const deleteHandler = () => {
    setState(state.filter((el) => el.id !== item.id));
  };
  const date = new Date(time);
  const dateStr =
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateObj = new Date(time);
  const month = monthNames[dateObj.getMonth()];
  const dayName = days[dateObj.getDay()];
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return (
    <div>
      <div className="own-messages-date">
        {dateObj.getDate() === new Date().getDate()
          ? "Today"
          : dateObj.getDate() === Date.now() - 86400000
          ? "Yesterday"
          : `${dayName} ${day}, ${month} ${year}`}
      </div>
      <div className="message own-message">
        <img src={avatar} alt="avatar" />
        <p className="message-user-name">{user}</p>
        <p className="message-text">{text}</p>
        <p className="message-time">{dateStr}</p>
        <button onClick={() => onEditClick(item)}>EDIT</button>
        <button className="message-delete" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default OwnMessage;
