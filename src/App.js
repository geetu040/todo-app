import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    let initTodos;
    // initTodos = JSON.parse('[{"sr":1,"title":"Machine Learning","desc":"Practise More Perprocessing techniques using datasets from kaggle"},{"sr":2,"title":"React","desc":"Finish react course by Code with Harry from youtube"},{"sr":3,"title":"Barbar","desc":"Get a Fresh Haircut by this week"},{"sr":4,"title":"Identity Card","desc":"Get National Identity Card from Nadra"}]')
    
    if (localStorage.getItem("todos") == null) {
        initTodos = []
    } else {
        initTodos = JSON.parse(localStorage.getItem("todos"))
    }

    const onDelete = (todo) => {
        setTodos(
            todos.filter((e) => {
                return e != todo;
            })
        )
    }
    const addTodo = (title, desc) => {
        let todo_to_add = {
            "sr": todos.length === 0 ? 1 : todos[todos.length - 1].sr + 1,
            "title": title,
            "desc": desc,
        }
        setTodos(
            [...todos, todo_to_add]
        )
    }

    const [todos, setTodos] = useState(initTodos)


    localStorage.setItem("todos", JSON.stringify(todos))

    /*
        <Header title="Todos List" search={true} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
    */
    return (
        <>
            <Router>
                <Header title="Todos List" search={false} />

                <Switch>
                    {/* <Route exact path="/" render={() => {
                        return (<>
                            <Todos todos={todos} onDelete={onDelete} />
                        </>)
                    }}>
                    </Route> */}
                    <Route exact path="/add-todo" render={() => {
                        return (<>
                            <AddTodo addTodo={addTodo} />
                        </>)
                    }}>

                    </Route>
                </Switch>


                <Todos todos={todos} onDelete={onDelete} />
                <Footer />
            </Router>
        </>
    );
}

export default App;
