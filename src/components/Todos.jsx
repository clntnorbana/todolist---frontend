import { useEffect } from "react";
import { useTodosContext } from "../hooks/UseTodosContexts";
import Todo from "./Todo";

const Todos = ({ openEditForm, theme }) => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("api/todos");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "FETCH_TODOS", payload: data });
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="w-full">
      {todos && todos.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-3">
          {todos.map((todo) => (
            <Todo
              key={todo._id}
              todo={todo}
              openEditForm={openEditForm}
              theme={theme}
            />
          ))}
        </div>
      ) : (
        <h1>no todos</h1>
      )}
    </div>
  );
};

export default Todos;
