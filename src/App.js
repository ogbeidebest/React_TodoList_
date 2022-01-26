import React, {useState, useEffect} from "react";
import './App.css';
import Form from './components/form'
import TodoList from './components/todo-list'
import Footer from './components/footer'

function App() {


  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState('all');
   const [filteredTodos, setfilteredTodos] = useState([]);
//run once when the app start
useEffect(() => {
  getLocalTodo();
}, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();

  },  [todos, status]);


  //functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        
        break;
    
     
      case "uncompleted":
        setfilteredTodos(todos.filter(todo => todo.completed === false))

        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }

  //save to localstorage
  const saveLocalTodos = () => {
   
      localStorage.setItem("todos", JSON.stringify(todos));
    
  };

  const getLocalTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1> TodoList App </h1>
      </header>
      <Form todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
       
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      <Footer/>
    </div>
  );
}

export default App;
