import axios from 'axios';
import React, { Component } from 'react';

import UserList from './components/User';
import Menu from './components/Menu';
import Footer from './components/Footer';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
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
    }

    render() {
        return (
            <>
                <div>
                    <UserList users={this.state.users} />
                </div>
                <Menu />
                <Footer />
            </>
        );
    }
}

export default App;
