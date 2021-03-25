import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Lars', age: '30'},
            {name: 'Max', age: '28'},
            {name: 'Stephanie', age: '26'},
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: '30'},
                {name: 'Maximilian', age: '28'},
                {name: 'Stephanie', age: '27'},
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('Bars')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Mars!')}> // that's the better one
                    My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    }
}

export default App;
