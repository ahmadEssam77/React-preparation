import './index.css';
import {useEffect, useState } from 'react';

const QuestionOne = () => {

    const [myUsersArr, setMyUsersArr] = useState([]);
    // const [myUser, setMyUser] = useState('');

    // function getUsers() {
    //     fetch('https://jsonplaceholder.typicode.com/users/1')
    //     .then( response => response.json() )
    //     .then( show => setMyUser(show))
    // }

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setMyUsersArr(data))
    }

    const filteredUsers = () => {
        let myFilter = myUsersArr.filter((user) => user.id < 5)

        setMyUsersArr(myFilter)
    }

    return (
        <>
            <h2>Question One : using map and filter</h2>
            <button onClick={getUsers}>Get users</button>
            <h2>Users</h2>
            {
                myUsersArr.length === 0 ? <p><strong>No users yet</strong></p> :
                <div className='display-users'>
                    {myUsersArr.map( (user, index) => (
                        <div className='user-wrapper' key={index}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                        </div>
                    ))}
                </div>
            }
            <button onClick={filteredUsers}>Filter Users</button>
        </>
    );
}

export default QuestionOne; 