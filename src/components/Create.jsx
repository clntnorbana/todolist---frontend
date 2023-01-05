import { useState } from "react";

import { useTodosContext } from "../hooks/UseTodosContexts";

const Create = ({ theme }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { dispatch } = useTodosContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date) return;

    const todo = { title, date };

    const response = await fetch(
      `https://clntn-todolist-api.onrender.com/api/todos`,
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_TODO", payload: data });
      setTitle("");
      setDate("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 pt-6 pb-8 mb-4 w-full md:w-1/3"
    >
      <div>
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-bold mt-2 mb-1">Schedule</label>
        <input
          className="shadow text-black appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
          Add todo
        </button>
      </div>
    </form>
  );
};

export default Create;
