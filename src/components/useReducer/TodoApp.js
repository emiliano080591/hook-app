import React, {useEffect, useReducer} from 'react';
import {todoReducer} from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }
    // ];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }


    return (
        <div>
            <h1>Todo APP ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-md-7 col-lg-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-md-5 col-lg-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;