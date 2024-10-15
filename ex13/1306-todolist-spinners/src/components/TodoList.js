import "../assets/css/TodoList.css"
import TodoItem from './TodoItem';
import useTodoStore from '../hooks/useTodoStore';
import {fetchTodos} from '../service/api'
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


function TodoList() {
    const {todos, setTodos} = useTodoStore();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await fetchTodos();
            setTodos(result)
            setLoading(false);
        })()//익명함수
    }, [setTodos]);

    return (
        <div className='todo-list'>
            <ClipLoader 
                color="#38d9a9"
                loading={true}
                cssOverride={{
                    position: "fixed",
                    top: "calc(50% -(35x / 2))",
                    right: "calc(50% -(35x / 2))"
                }}
                size={35}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
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