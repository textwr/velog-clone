import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import { getTodos, setTodos, removeTodo } from "./data";
import Card from "./components/Card/Card.jsx";
import Menu from "./components/Menu/Menu.jsx";
import PostForm from "./components/PostForm/PostForm.jsx";
import ModifyForm from "./components/ModifyForm/ModifyForm.jsx";

function App() {
  const [topic, setTopic] = useState("trending");
  const [status, setStatus] = useState("main");
  const [data, setData] = useState({ trending: [], latest: [], feed: [] });
  const [currentDialog, SetDialog] = useState();
  /*{
    id: id,
    image: image,
    title: title,
    content: content,
    createdAt: createdAt,
    author: author,
    userImage: userImage,
    likes: likes,
    comments: comments,
  }*/

  useEffect(() => {
    function getTodoList() {
      const data = getTodos();
      setData(data);
    }
    getTodoList();
  }, []);

  function addTodo(todo, topic) {
    //Ref에서 value값 가져오기

    if (data[topic] === undefined) {
      setData((prev) => {
        prev[topic] = [todo];
        return prev;
      });
    } else {
      const newData = [...data[topic], todo];
      setData((prev) => {
        prev[topic] = newData;
      });
    }
    setData(data);
    setTodos(data);
  }

  function remove(todo) {
    const newData = removeTodo(todo, topic, data);
    setData(newData);
  }

  let listData = <p>게시글이 없습니다.</p>;

  if (data[topic] !== undefined && data[topic].length > 0) {
    listData = (
      <ul className="card-list">
        {data[topic].map((e) => (
          <Card
            key={e.id}
            {...e}
            setData={setData}
            topic={topic}
            remove={remove}
            setStatus={setStatus}
            currentDialog={currentDialog}
            SetDialog={SetDialog}
          />
        ))}
      </ul>
    );
  }

  if (status === "main") {
    return (
      <>
        <Header status={status} setStatus={setStatus} />
        <Menu topic={topic} setTopic={setTopic} />
        {listData}
      </>
    );
  } else if (status === "posting") {
    return (
      <>
        <Header status={status} setStatus={setStatus} />
        <PostForm
          setData={setData}
          setStatus={setStatus}
          topic={topic}
          addTodo={addTodo}
        ></PostForm>
      </>
    );
  } else if (status === "modify") {
    return (
      <>
        <Header status={status} setStatus={setStatus} />
        <ModifyForm
          setData={setData}
          topic={topic}
          setStatus={setStatus}
          addTodo={addTodo}
          currentDialog={currentDialog}
          SetDialog={SetDialog}
        ></ModifyForm>
      </>
    );
  }
}

export default App;
