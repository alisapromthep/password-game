"use client"

import React, {useState} from 'react';
import {rules} from '../data/rules';


function Gamepage() {

    const [password, setPassword] = useState('');

    const checkPass = (current)=>{


    }

    const handleChange = (e)=>{
        e.preventDefault();

        const value = e.target.value; 

        setPassword((prev)=>{
            return (
                prev + value
            )
        })

        console.log(password)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='capitalize'>password game</h1>
            <h2 className='capitalize'>science addition</h2>
            <textarea
            type='text'
            name='password'
            className='rounded-md h-8 text-black'
            onChange={handleChange}
            />
        </div>
    )
}

export default Gamepage;