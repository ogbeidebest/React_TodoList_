import React from 'react';



const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((e) => e.id !== todo.id));
    };
    // const completeHandler = () => {
    //     setTodos(todos.map(el) => {
    // setTodos(todos.map(el) => {
    //     if(el.id === todo, id {
    // return {
    //     ...el, completed : !el.completed
    //     }    }
    //         return el;

    // )
    // })
    //    })
    // };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
}
    return (
        <div className="container">
            <div className="todo">
                <li className={`todo=item ${todo.completed ? "completed" : ""}`} >
                    {text}
                </li>
                <button onClick={completeHandler} className="complete-btn"><li className="fas fa-check"></li></button>
                <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
      
    );
}
export default Todo;