import axios from 'axios';
import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import UserList from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Todos from './components/Todos';
import Layout from './components/Layout';
import NoPage from './components/NoPage';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    { 'users': users }
                )
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const projects = response.data
                this.setState(
                    { 'projects': projects }
                )
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(response => {
                const todos = response.data
                this.setState(
                    { 'todos': todos }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="users" element={<UserList users={this.state.users} />} />
                        <Route path="projects" element={<Projects projects={this.state.projects} />} />
                        <Route path="todos" element={<Todos todos={this.state.todos} />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
                <>
                    <Menu />
                    <Footer />
                </>
            </BrowserRouter>
        );
    }
}

export default App;
