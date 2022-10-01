// import QuestionOne from '../QuestionOne';

import { Link } from 'react-router-dom';
import './index.css';

const Layout = () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    return(
        <>
            <h1>30 react interview questions</h1>
            <div className='questions-wrapper'>
                {numbers.map( (number, index) => (
                    <Link to={`/${number}`} key={index} className='number'>{number}</Link>
                ))}
            </div>
        </>
    );
}

export default Layout;