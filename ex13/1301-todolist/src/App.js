import './App.css';
import TodoHead from './TodoHead';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function App() {
  return (
   <>
    {/* <div>안녕하세요</div> */}
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoItem />
    </TodoTemplate>
   </>
  );
}

export default App;
