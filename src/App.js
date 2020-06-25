// create your App component here
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(obj => {
      this.setState({
        people: obj.people
      })
    })
  }

  displaySpacePeople = () => {
    return this.state.people.map((person, index) => {
      return <h4 key={index}>{person.name}</h4>})
  }

  render() {
    console.log(this.state.people)
    return (
    <div>{this.displaySpacePeople()}</div>
    )
  }
}

export default App;