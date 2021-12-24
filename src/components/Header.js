import React from "react";

const Header = (state) => {
  const usersCount = state.state.reduce(function (acc, curr) {
    let isElemExist = acc.findIndex(function (item) {
      return item.user === curr.user;
    });
    if (isElemExist === -1) {
      let obj = {};
      obj.user = curr.user;
      acc.push(obj);
    } else {
      void 0;
    }
    return acc;
  }, []);

  const latestMessage = state.state[state.state.length - 1]?.createdAt;
  const date = new Date(latestMessage);
  const dateStr =
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear() +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

  return (
    <div className="header">
      <h2 className="header-title">CHAT</h2>
      <div className="header-container">
        <h3 className="header-users-count">
          <span>users count:</span> {usersCount.length}
        </h3>
        <h3 className="header-messages-count">
          <span>messages count:</span> {state.state.length}
        </h3>
        <h3 className="header-last-message-date">
          <span>last message:</span> {state.state.length > 0 && dateStr}
        </h3>
      </div>
    </div>
  );
};

export default Header;
