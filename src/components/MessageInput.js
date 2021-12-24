import React, { useState } from "react";

const MessageInput = ({ state, setState }) => {
  // const scrollingElement = document.getElementsByClassName("messages-divider");
  // function scrollToBottom() {
  //   scrollingElement.scrollTop = scrollingElement.scrollHeight;
  // }
  // const messagesEndRef = useRef(null);
  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(scrollToBottom, [state]);

  const [input, setInput] = useState("");
  const newMessageHandler = (event) => {
    event.preventDefault();
    if (input.trim().length > 1) {
      setState([
        ...state,
        {
          id: Date.now(),
          userId: "17dima",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6sMvJx7mgTDe5CJDe6Smzy1tWzCAOi6RYoUBAZGCYRK3NP3QNC00N2l6_DJCWlR-jrA&usqp=CAU",
          createdAt: Date.now(),
          editedAt: "",
          text: input,
          user: "Dima",
        },
      ]);
      setInput("");
    }
    if (input.length < 2) window.alert("at least 2 characters");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      newMessageHandler(e);
    }
  };
  return (
    <div className="message-input">
      <input
        type="text"
        className="message-input-text"
        placeholder="new message"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button onClick={newMessageHandler} className="message-input-button">
        SEND
      </button>
    </div>
  );
};

export default MessageInput;
