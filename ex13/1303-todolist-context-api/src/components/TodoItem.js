import React, { useState } from 'react';
import "../assets/css/TodoItem.css"
import {ReactComponent as CheckIcon} from "../assets/svg/check.svg"
import {ReactComponent as DeleteIcon} from "../assets/svg/delete.svg"
import { useTodoDispatch } from '../context/TodoContext';

function TodoItem({id, done, text}) {
    const dispatch = useTodoDispatch();

    const onToggle = () => dispatch({ type: "TOGGLE", id});
    const onRemove = () => dispatch({ type: "REMOVE", id});
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