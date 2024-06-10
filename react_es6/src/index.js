import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';

// 1. Classes
class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to ES6 in React!',
      name: "Nithin U"
    };
  }

  // 2. Arrow Functions
  updateMessage = () => {
    this.setState((prevState) => ({
      message: prevState.message === 'Welcome to ES6 in React!' ? 'Hello from ES6 and React!' : 'Welcome to ES6 in React!',
      name: prevState.name === 'Nithin U' ? 'Nithisha' : 'Nithin U'
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>Done by {this.state.name}</h1>
        <button onClick={this.updateMessage}>Update Message</button>
      </div>
    );
  }
}

// Functional component to demonstrate hooks and other ES6 features
const FeaturesDemo = () => {
  // 3. Variables
  var functionScoped = 'I am function scoped';
  let blockScoped = 'I am block scoped';
  const immutable = 'I am immutable';

  // State using useState hook
  const [counter, setCounter] = useState(0);

  // 4. Array Methods
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(num => num * 2);

  // 5. Destructuring
  const [first, second, third] = numbers;

  // 6. Spread Operator
  const moreNumbers = [...numbers, 6, 7, 8];

  // 7. Modules (React import at the top)

  // 8. Ternary Operator
  const isEven = counter % 2 === 0;

  return (
    <div>
      <h2>ES6 Features in Action</h2>
      <p>{functionScoped}</p>
      <p>{blockScoped}</p>
      <p>{immutable}</p>
      <p>Doubled Numbers: {doubledNumbers.join(', ')}</p>
      <p>Destructured Numbers: {first}, {second}, {third}</p>
      <p>More Numbers: {moreNumbers.join(', ')}</p>
      <p>Counter is {isEven ? 'Even' : 'Odd'}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  );
}

// Main App Component
const App = () => (
  <div>
    <WelcomeMessage />
    <FeaturesDemo />
  </div>
);

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);