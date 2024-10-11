import React, { useState } from 'react';
import "./assets/css/TodoItem.css"
import {ReactComponent as CheckIcon} from "./assets/svg/check.svg"
import {ReactComponent as DeleteIcon} from "./assets/svg/delete.svg"

function TodoItem({id, done, text}) {
    const [hoveredDelete, setHoveredDelete] = useState(false);

    return (
        <div className="todo-item-block">
            <div className={`check-circle ${done ? "done" : ""}`}>
                {
                    done && <CheckIcon fill='#38d9a9'/>
                }
            </div>
            <div className={`text ${done && "done"}`}>{text}</div>
            <div className="remove">
                <DeleteIcon 
                onMouseEnter={() => setHoveredDelete(true)}
                onMouseLeave={() => setHoveredDelete(false)}
                fill={hoveredDelete ? "#ff6b6b" : "#dee2e6"}/>
            </div>
        </div>
    )
}

export default TodoItem;