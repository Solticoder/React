import React from 'react';
import './WelcomeList.css'

const WelcomeList = ({ index, name }) => {
    return (
        <div className='welcome'>
            <ul>
                <li key={index}>{name}</li>
            </ul>
            <div>The total number of names is {name.length}</div>
        </div>
    );
};



export default WelcomeList;