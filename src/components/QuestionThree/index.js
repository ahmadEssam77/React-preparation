import './index.css';

const QuestionThree = ({name, myName, sayMyName}) => {
    return(
        <>
            <h1>What are props??</h1>
            <p>- props are simply like like states that can pass it to another component.</p>
            <p>- arguments passed into React components</p>
            <p>- props get passed to the component, (similar to function parameters) whereas state is managed
                within the component (similar to variables declared within a function)
            </p>
            <p>- <strong>Parent to children</strong></p>
            <p>- to pass data from child to parent, -hack- we can call a parent function from the child component with arguments</p>
            <hr />
            <p className='name-display'>{name}</p>
            <div className='button-wraper'>    
                <button onClick={myName}>My name is ..</button>
                <button onClick={sayMyName}>Say My Name</button>
            </div>
        </>
    );
}

export default QuestionThree;
