import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import { redirect } from 'react-router-dom';

const View = () => {
    const [todoData, changetoDo] = useState({ todos: [] });
    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then((response) => {
            changetoDo(response.data);
        }
        )
            .catch()
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Nav />
           <div className="container">
            <div className="row g-4 px-4 py-4">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <table class="table table-striped table-danger">
                <thead style={{backgroundColor:'red'}}>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todoData.todos.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.userId}</td>
                                    <td>{value.todo}</td>
                                    <td>{value.completed ? "Yes" : "No"}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
                </div>
            </div>
           </div>
        </div>
    )
}

export default View