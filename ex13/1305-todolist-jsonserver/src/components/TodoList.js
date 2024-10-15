import "../assets/css/TodoList.css"
import TodoItem from './TodoItem';
import useTodoStore from '../hooks/useTodoStore';
import {fetchTodos} from '../service/api'
import { useEffect } from "react";


function TodoList() {
    const {todos, setTodos} = useTodoStore();
    

    useEffect(() => {
        (async () => {
            const result = await fetchTodos();
            setTodos(result)
        })()//익명함수
    }, [setTodos]);

    return (
        <div className='todo-list'>
            {todos.map((todo) => 
                <TodoItem 
                    key={todo.id } 
                    id={todo.id} 
                    text={todo.text}
                    done={todo.done}
                />)
            }
        </div>
    );
}

export default TodoList;