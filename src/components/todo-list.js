import React from 'react';
// import components
import Todo from './todo'


const TodoList = ( {todos, setTodos, filteredTodos}) => {
    return (
        <div className="container">
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
                    ))}
                </ul>
            </div>
        </div>
       
    )
}

export default TodoList;