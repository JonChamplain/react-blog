import React from 'react'
import './App.css'
import LogInPrompt from './LogInPrompt'
import Greeting from './Greeting'


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:false,
            name: 'Not Bo',
            postList: [
                {id: 1, author: 'Julius Caesar', content: 'Crossing rivers is east, and never has any consequences whatsoever!'},
                {id: 2, author: 'Pompey', content: 'Suck it, Caesar'},
                {id: 3, author: 'Brutus', content: 'Don\'nt worry, buddy, I\'ve got your back!'}
            ]
        }
    }
    
    logIn = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    logOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(req => res.json())
        .then(jsonObj => {
            this.setState({
                postList: jsonObj
            })
        })
    }
    
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <button onClick={this.logOut}>
                        Log Out
                    </button>
                    <Greeting name={this.state.name}/>
                    <ul>
                    {this.state.postList.map((post) => {
                        return (
                            <li>{post.id.toString()}>{post.author}: {post.content}</li>
                        )
                    })}
                    </ul>
                </div>
            )
        }

        else {
            return (
                <div>
                    <button onClick={this.logIn}>Log In</button>
                    <LogInPrompt />
                </div>
            )
        }
    }
}

export default App;