import React, { useState } from "react";
import "../assets/css/TodoCreate.css";
import addIco from "../assets/svg/add.svg";
import useTodoStore from "../hooks/useTodoStore";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { createTodo } = useTodoStore();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    /**form 태그에서는 onClick 대신 onSubmit 사용 */
    e.preventDefault(); /**from 태그는 랜더링 되면서 새로고침 되면 초기화 되기 때문에, 초기화 방지 해줌 */
    createTodo(value);
    setValue("");
  };

  // console.log(value);

  return (
    <>
      {open && (
        <div className="insert-form-positioner">
          <form className="insert-form" onSubmit={onSubmit}>
            <input
              className="input"
              autoFocus
              placeholder="할 일을 입력 후, Enter를 눌러주세요"
              onChange={onChange}
              value={value}
            />
          </form>
        </div>
      )}
      <button className={`circle-button ${open && "open"}`} onClick={onToggle}>
        <img src={addIco} alt="add icon" style={{ width: "50px" }} />
      </button>
    </>
  );
}

export default TodoCreate;
