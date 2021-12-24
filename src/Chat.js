import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import Preloader from "./components/Preloader";

function Chat() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const myMessage = {
    id: "80f08600-1b8f-11e8-9629-c7eca82aa7qq",
    userId: "17dima",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6sMvJx7mgTDe5CJDe6Smzy1tWzCAOi6RYoUBAZGCYRK3NP3QNC00N2l6_DJCWlR-jrA&usqp=CAU",
    user: "Dima",
    text: "My only message",
    createdAt: "2020-07-16T19:48:19.936Z",
    editedAt: "",
  };

  useEffect(() => {
    const url = "https://edikdolynskyi.github.io/react_sources/messages.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        json.unshift(myMessage);
        setState(json.sort((a, b) => a.createdAt.localeCompare(b.createdAt)));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(state);

  return (
    <div className="chat">
      <div style={{ fontSize: "1rem" }}></div>
      <h6 style={{ margin: "0", fontSize: "1rem", fontWeight: "300" }}></h6>
      <Header state={state} />
      {loading && <Preloader />}
      <MessageList state={state} setState={setState} />
    </div>
  );
}

export default Chat;
