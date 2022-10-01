import { useState } from 'react';
import QuestionThree from '../QuestionThree';
import './index.css';

const QuestionTwo = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('Say My Name');

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter +- 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    const myName = () => {
        setName('Essam');
    }

    const sayMyName = () => {
        setName('Say My Name');
    }

    return (
        <>
            <h1>What are states??</h1>
            <p>- It's a built in react object that is used to contain data or information about the component</p>
            <p>- A component's state can change over time</p>
            <p>- useState hook in functional component, and this.state this.setState in class component</p>
            <h3>Counter Example: </h3>
            <p className='counter-display'>{counter}</p>
            <div className='button-wraper'>    
                <button onClick={decrementCounter}>Decrement</button>
                <button onClick={resetCounter}>Reset counter</button>
                <button onClick={incrementCounter}>Increment</button>
            </div>
            <p className='name-display'>{name}</p>
            <div className='button-wraper'>    
                <button onClick={myName}>My name is ..</button>
                <button onClick={sayMyName}>Say My Name</button>
            </div>
            <hr />
            <QuestionThree name={name} myName={myName} sayMyName={sayMyName} />
        </>
    )
}

export default QuestionTwo;