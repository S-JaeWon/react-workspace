import './assets/css/App.css';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
   <>
    {/* <div>안녕하세요</div> */}
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoItem />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
   </>
  );
}

export default App;
