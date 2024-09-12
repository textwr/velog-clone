import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { data } from "./data";
import Card from "./components/Card/Card.jsx";
import Menu from "./components/Menu/Menu.jsx";

function App() {
  const [topic, setTopic] = useState("trending");

  return (
    <>
      <Header />
      <Menu topic={topic} setTopic={setTopic} />
      <ul className="card-list">
        {data[topic].map((e) => (
          <Card key={e.id} {...e} />
        ))}
      </ul>
    </>
  );
}

export default App;
