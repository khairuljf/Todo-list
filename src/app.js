import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';

// Import component
import Header from "./components/Heaer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './styles/styles.scss';

const App = ()=>{

const [inputText, setInputText] = useState("");
const [todos,setTodos] = useState([]);

    return(
        <div className="app-wrapper">
            <Header />
            <TodoForm
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}


ReactDOM.render( <App />, document.getElementById('app'))
