export const fetchTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response.ok) throw new Error("Failed to fetch todo");
  return response.json();
};

export const toggleTodo = async (id, done) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done }),
  });
  throw new Error("Failed to toggle todo");
  // if (!response.ok) throw new Error("Failed to toggle todo")
  // return response.json();
};

export const removeTodo = async (id) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to remove todo");
  return response.json();
};

export const createTodo = async (text) => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text, // text: text, -> 변수명과 같다면 생략 가능
      done: false,
    }),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
};
