// import { useEffect } from 'react';
import './index.css';

const QuestionFour = () =>{

    const name = "Ahmad";

    return(
        <>
            <h1>What is inline conditional expressions or rendering??</h1>
            <p>- ternary operator, to show and hide something</p>
            <p>- or I can use &&</p>
            {
                name === "Essam" ? <h3>I'm Essam</h3> : <h3>You don't know my name</h3>
            }
            <p>- Check question one, users data there is a message no users till the API get the data</p>
        </>
    );
}

export default QuestionFour;