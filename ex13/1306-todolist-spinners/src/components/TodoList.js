import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import { fetchTodos } from "../service/api";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();
  // const [loading, setLoading] = useState(false); <- useTodoStore에서 제어

  if (error) {
    return (
      <div>
        <div>
          <span class="material-symbols-outlined">error</span>
          오류가 발생했습니다.
        </div>
        ;
      </div>
    );
  }

  useEffect(() => {
    /** (async () => {
      const result = await fetchTodos(); <-loadTodos 안에 fetchTodos가 있으므로 빼도 됨
      setTodos(result);
      //   setLoading(false);
    })(); //익명함수 */
    loadTodos();
  }, [loadTodos]);

  return (
    <div className="todo-list">
      <ClipLoader
        color="#38d9a9"
        loading={loading}
        cssOverride={{
          position: "fixed",
          top: "calc(50% - (35px / 2))",
          right: "calc(50% - (35px / 2))",
        }}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
