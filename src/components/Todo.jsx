import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
import { MdUpdate, MdDelete } from "react-icons/md";
import Edit from "./Edit";

import { useTodosContext } from "../hooks/UseTodosContexts";

const Todo = ({ todo, theme }) => {
  const { dispatch } = useTodosContext();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const openEditForm = () => setIsEditFormOpen(true);
  const closeEditForm = () => setIsEditFormOpen(false);

  const deleteTodo = async () => {
    const response = await fetch(
      `https://clntn-todolist-api.onrender.com/api/todos/${todo._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: data });
    }
  };

  return (
    <>
      {isEditFormOpen && <Edit closeEditForm={closeEditForm} editTodo={todo} />}
      <div
        className={`shadow ${
          theme
            ? "bg-slate-700 shadow-slate-700/50"
            : "bg-gray-200 shadow-gray-200/50"
        } flex flex-col p-3 rounded capitalize`}
      >
        <span className="text-xl font-bold">{todo.title}</span>
        <span className="text-sm opacity-75">scheduled: {todo.date}</span>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs opacity-60">
            {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
          </span>
          <div className="flex gap-2">
            <button type="button">
              <MdUpdate className="cursor-pointer" onClick={openEditForm} />
            </button>
            <button type="button">
              <MdDelete className="cursor-pointer" onClick={deleteTodo} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
