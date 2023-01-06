import { useState } from "react";
import { useEffect } from "react";
import { useTodosContext } from "../hooks/UseTodosContexts";
import Loading from "./Loading";
import Todo from "./Todo";

const Todos = ({ openEditForm, theme }) => {
  const { todos, dispatch } = useTodosContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://clntn-todolist-api.onrender.com/api/todos"
      );
      const data = await response.json();

      if (response.ok) {
        setLoading(true);
        dispatch({ type: "FETCH_TODOS", payload: data });
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchTodos();
  }, []);

  return (
    <div className="w-full">
      {todos.length > 0 && (
        <>
          {!loading ? (
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
            <Loading />
          )}
        </>
      )}
    </div>
  );
};

export default Todos;
