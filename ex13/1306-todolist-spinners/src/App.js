import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import Configuration from "./components/Configuration";

function App() {
  return (
    <>
      {/* <div>안녕하세요</div> */}
      <Routes>
        <Route
          path="/"
          element={
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
          }
        />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/test" element={<>test page!!!</>} />
      </Routes>
    </>
  );
}

export default App;
