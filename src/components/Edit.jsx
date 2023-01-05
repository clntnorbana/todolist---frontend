import { useState } from "react";

import { useTodosContext } from "../hooks/UseTodosContexts";

const Edit = ({ closeEditForm, editTodo }) => {
  const [title, setTitle] = useState(editTodo.title);
  const [date, setDate] = useState(editTodo.date);

  const { dispatch } = useTodosContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { title, date };

    const response = await fetch(
      `https://clntn-todolist-api.onrender.com/api/todos/${editTodo._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 bg-white z-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-2/3 fixed"
      style={{ top: "20%", left: "50%", transform: "translate(-50%)" }}
    >
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Schedule
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mt-3 flex gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update
        </button>
        <button
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          onClick={closeEditForm}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Edit;
