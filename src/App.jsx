import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    console.log(todos);
    if (todo.trim() === "") {
      alert("Please enter a todo before adding!");
      return;
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(`ths id is ${id}`);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos, todos);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
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
              className="border-2 w-20 p-2 rounded-3xl cursor-pointer hover:bg-blue-500 transition-all shadow-[5px_5px_5px_rgba(17,24,39,0.7)]"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div className="list text-center font-bold pt-5 text-2xl">
            Your Todos
          </div>
          {todos.length === 0 && (
            <div className="mx-auto text-center pt-5">No Todos to Display</div>
          )}
          {todos.map((item) => {
            return (
              <div
                key={item.id}
                className="display mx-auto m-2 text-amber-50 flex w-1/2  justify-between border-b-1 p-3"
              >
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <input
                    onChange={handleCheckBox}
                    type="checkbox"
                    className="mx-1"
                    name={item.id}
                    id=""
                  />
                  <button
                    className="shadow-[5px_5px_5px_rgba(17,24,39,0.7)] mx-1 border-1 w-20 rounded-3xl cursor-pointer hover:bg-blue-500 transition-all "
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="shadow-[5px_5px_5px_rgba(17,24,39,0.7)] mx-1 border-1 w-20 rounded-3xl cursor-pointer hover:bg-blue-500 transition-all "
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
