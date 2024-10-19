import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();

  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleModifyTodo } = useTodoStore();

  const [currentId, setCurrentId] = useState("");
  const [value, setValue] = useState("");
  const [dueDate, setDudeDate] = useState("");

  function openModal(id, text, dueDate) {
    setIsOpen(true);

    setCurrentId(id);
    setValue(text);
    setDudeDate(dueDate);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onDueDateChange = (e) => {
    setDudeDate(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault(); // 새로고침 방지

    await handleModifyTodo(currentId, value, dueDate);

    setValue("");
    setDudeDate("");

    closeModal();
  };
  // console.log(fetchTodos());

  console.log(error);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  if (error) {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <span className="material-symbols-outlined">error</span>
          불편을 드려 죄송합니다.
        </div>
      </div>
    );
  }

  return (
    <>
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
            dueDate={todo.due_date}
            openModal={openModal}
          />
        ))}
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{currentId} 할일 수정</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="dueDate">마감일을 선택하세요.</label>
            <input
              type="date"
              className="input"
              onChange={onDueDateChange}
              value={dueDate}
            />
            <input
              className="input"
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" style={{ marginRight: "10px" }}>
                수정
              </button>
              <button onClick={closeModal}>취소</button>
            </div>
          </form>
        </Modal>
      </div>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default TodoList;
