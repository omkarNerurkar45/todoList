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
      <div className="bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-amber-50 h-100vh pt-15">
        <div className="todos border w-2/3 m-auto rounded-2xl h-[60vh] pt-2">
          <h1 className="font-bold p-2 text-center">Add a Todo</h1>

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
        </div>
      </div>
    </>
  );
}

export default App;
