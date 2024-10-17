import { create } from "zustand";
import { fetchTodos, toggleTodo } from "../service/api";

const handleApiCall = async (set, apiFuntion, onSuccess) => {
  set({ loading: true, error: null });
  try {
    const result = await apiFuntion();
    if (onSuccess) onSuccess(result); // onSuccess가 null, undefined가 아닌 경우 실행
  } catch (error) {
    set({ error: error.message });
  } finally {
    set({ loading: false });
  }
};

const useTodoStore = create((set) => ({
  todos /**key */: [],
  loading: false,
  error: null,

  setTodos: (todos) => set({ todos }),

  loadTodos: async () => {
    await handleApiCall(
      set,
      fetchTodos,
      (todos) =>
        set(
          {
            todos /**key */: todos,
          } /**key 와 value가 같으면 생략가능 -> { todos }*/
        ) /**onSuccess 함수 */
    );
  },

  handleToggleTodo: async (id, done) => {
    await handleApiCall(set, toggleTodo, () =>
      useTodoStore.getState().loadTodos()
    );
  },
}));

export default useTodoStore;
