import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <Person name={"Lars"} age={"30"}/>
                <Person name={"Lars"} age={"30"}>My Hobbies: Racing</Person>
                <Person name={"Lars"} age={"30"}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    }
}

export default App;
