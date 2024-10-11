import React from 'react';
import './assets/css/TodoHead.css'

function TodoHead(props) {
    return (
        <div className="todo-head">
            <h1>2024/10/10</h1>
            <div className="day">목요일</div>
            <div className="tasks-left">할 일 2개 남음</div>

        </div>
    );
}


export default TodoHead;