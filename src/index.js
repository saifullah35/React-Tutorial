// 1. Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get a refernce to the div with ID root
const el = document.getElementById('root');

// Tel React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component(component is a function that returns some JSX)
function App() {
    const name = 'Samantha';
    const age = 23;
    // Tells react to find a variable called "(any var name)" inside our component,
    // take whatever val it has and print it inside h1 tag with the var name inside brackets
    return (
        <h1>
            Hi, my name is {name} and my age is {age}
        </h1>
    );
}

// 5. Show the component on the screen
root.render(<App />);