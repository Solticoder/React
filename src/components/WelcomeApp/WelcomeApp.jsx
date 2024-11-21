import React, { useEffect } from 'react';
import { useState } from 'react';
import WelcomeList from '../WelcomeList/WelcomeList';
import './WelcomeApp.css'

function WelcomeApp() {

    const [names, setNames] = useState([]);
    const [InputName, setInputName] = useState('');

    const addName = (e) => {
        e.preventDefault();
        if(InputName.trim() != '' && names.length < 5) {
            setNames((name) => [...name, InputName]);
            setInputName('');
        }
    }

    useEffect(() => {
        if (names.length > 0) {
          const lastAddedName = names[names.length - 1];
          console.log(`Welcome, ${lastAddedName}. Hope you have a great day! `);
        }
        return () => {
            console.log("Unmounted");
          };
      }, [names]);

    console.log(names);

    const disabled = names.length >= 5;

    return (
        <div className='nameList'>
            <h1>Welcome List</h1>            
            <form action=''>
                <input type="text" name='name' value={InputName} onChange={(e) => setInputName(e.target.value)} disabled={disabled} placeholder='Enter your name' required />
                <button onClick={addName} type='submit'>Add</button>
            </form>
            <h1>Names List</h1>

            {names.map((name,index) => {
                return <WelcomeList key={index} name={name} />
            })}
        </div>
    );
}

export default WelcomeApp;