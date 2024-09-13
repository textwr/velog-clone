import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { dummyData } from "./data";
import Card from "./components/Card/Card.jsx";
import Menu from "./components/Menu/Menu.jsx";
import PostForm from "./components/PostForm/PostForm.jsx";

function App() {
  const [topic, setTopic] = useState("trending");
  const [status, setStatus] = useState("main");
  const [data, setData] = useState(dummyData);

  if (status === "main") {
    return (
      <>
        <Header status={status} setStatus={setStatus} />
        <Menu topic={topic} setTopic={setTopic} />
        <ul className="card-list">
          {data[topic].map((e) => (
            <Card key={e.id} {...e} />
          ))}
        </ul>
      </>
    );
  } else if (status === "posting") {
    return (
      <>
        <Header status={status} setStatus={setStatus} />
        <PostForm setData={setData} topic={topic}></PostForm>
      </>
    );
  }
}

export default App;
