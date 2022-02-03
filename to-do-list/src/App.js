import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //비어있다면 실행하지않게함
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    console.log(toDos);
    setToDo(""); //초기화
  };
  return (
    <div>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="Write your to do"
      ></input>
      <button onClick={onSubmit}>Add To Do</button>
    </div>
  );
}

export default App;
