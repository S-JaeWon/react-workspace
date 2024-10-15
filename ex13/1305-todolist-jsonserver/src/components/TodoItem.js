import React, { useState } from 'react';
import "../assets/css/TodoItem.css"
import {ReactComponent as CheckIcon} from "../assets/svg/check.svg"
import {ReactComponent as DeleteIcon} from "../assets/svg/delete.svg"
import {toggleTodo, fetchTodos, removeTodo} from '../service/api'
import useTodoStore from '../hooks/useTodoStore';

function TodoItem({id, done, text}) {
    // console.log(id, done, text);

    // const {toggleTodo, removeTodo} = useTodoStore();
    const {setTodos} = useTodoStore();

    const onToggle = async () => {
        toggleTodo(id, done);
        const result = await fetchTodos();
        setTodos(result);
    };
    const onRemove = async () => {
        await removeTodo(id);
        const result = await fetchTodos();
        setTodos(result);
    };

    const [hoveredDelete, setHoveredDelete] = useState(false);

    return (
        <div className="todo-item-block"> 
            <div className='item' onClick={onToggle}> {/** onToggle 함수를 밖으로 꺼내서 text 클릭시 toggle 가능 */}
                <div className={`check-circle ${done ? "done" : ""}`} >
                    {
                        done && <CheckIcon fill='#38d9a9'/>
                    }
                </div>
                <div className={`text ${done && "done"}`}>{text}</div>  
            </div>
            <div className="remove" onClick={onRemove}>
                <DeleteIcon 
                onMouseEnter={() => setHoveredDelete(true)}
                onMouseLeave={() => setHoveredDelete(false)}
                fill={hoveredDelete ? "#ff6b6b" : "#dee2e6"}/>
            </div>
        </div>
    )
}

export default TodoItem;