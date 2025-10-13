import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className=" pb-20 h-[93.7vh] bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-amber-50 h-100vh pt-15">
        <div className="todos shadow-[20px_20px_50px_rgba(17,24,39,0.7)] border w-2/3 m-auto rounded-2xl h-[60vh] pt-2">
          <h1 className="font-bold p-2 text-center text-2xl">Add a Todo</h1>

          <div className="todo text-center">
            <input
              type="text"
              className="border-2 p-2 mx-2 rounded-2xl w-2/4"
              onChange={handleChange}
              value={todo}
            />
            <button
              className="border-2 w-20 p-2 rounded-3xl cursor-pointer"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div className="list text-center font-bold pt-5 text-2xl">
            Your Todos
          </div>
          {todos.map(item=>{

          return <div className="display mx-auto m-2 text-amber-50 flex w-1/2  justify-between border-b-1 p-3">
        <div className={item.isCompleted?"line-through":""} >{item.todo}</div>
        <div className="buttons">
        <button className="mx-1 border-1 w-20 rounded-3xl">Edit</button>
        <button className="mx-1 border-1 w-20 rounded-3xl">Delete</button>
        </div>
      </div>
      })}
        </div>
      </div>
    </>
  );
}

export default App;
