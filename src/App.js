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
        otherState: 'some other value',
        showPersons: false
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Lars', age: '30'},
                {name: event.target.value, age: '28'},
                {name: 'Stephanie', age: '26'},
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Mars!')}
                        changed={this.nameChangedHandler}>
                        My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
