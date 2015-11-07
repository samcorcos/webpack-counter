let React = require('react')
let ReactDOM = require('react-dom')

let Counter = React.createClass({
  getInitialState() {
    return {
      counter: 0
    }
  },
  addToCounter() {
    this.setState(function(previousState) {
      return { counter: previousState.counter + 1 };
    })
  },
  render() {
    return (
      <div>
        <h1>Welcome to Meteor!</h1>
        <button
          onClick={this.addToCounter}
          >Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    )
  }
})

Meteor.startup(function() {
  ReactDOM.render(
    <Counter />,
    document.getElementById('app')
  )
})
