import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import OwnMessage from "./OwnMessage";
import EditForm from "./EditForm";
import MessageInput from "./MessageInput";

const MessageList = ({ state, setState }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentMessage, setCurrentMessage] = useState({});

  function handleEditInputChange(e) {
    setCurrentMessage({ ...currentMessage, text: e.target.value });
  }

  function handleUpdateMessage(id, updatedTodo) {
    const updatedItem = state.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setState(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateMessage(currentMessage?.id, currentMessage);
  }

  function handleEditClick(message) {
    setIsEditing(true);
    setCurrentMessage({ ...message, editedAt: new Date() });
  }

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [state]);

  return (
    <div className="message-list">
      <div className="messages-divider">
        {state.map((message) => {
          <div className="messages-date">{message.createdAt}</div>;
          if (message.user !== "Dima") {
            return (
              <Message
                text={message.text}
                avatar={message.avatar}
                id={message.id}
                key={message.id}
                user={message.user}
                time={message.createdAt}
              />
            );
          } else if (message.user === "Dima") {
            return (
              <OwnMessage
                text={message.text}
                avatar={message.avatar}
                id={message.id}
                key={message.id}
                user={message.user}
                time={message.createdAt}
                state={state}
                setState={setState}
                item={message}
                onEditClick={handleEditClick}
              />
            );
          }
          return void 0;
        })}
        <div ref={messagesEndRef} />
      </div>
      {isEditing ? (
        <EditForm
          currentMessage={currentMessage}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <MessageInput state={state} setState={setState} />
      )}
    </div>
  );
};

export default MessageList;
