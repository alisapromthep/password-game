"use client"

import React, {useState} from 'react';
import {rules} from '../data/rules';


function Gamepage() {

    const [password, setPassword] = useState('');
    const [show, setShow] = useState([]);

    const addShow = (num)=>{
        setShow(prev=> [...prev, rules[num]] )
    }

    const checkPass = (current)=>{
        if (password.length < 5){
            addShow(0);
        }

    }

    const handleChange = (e)=>{
        e.preventDefault();

        checkPass();

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
            {show.length > 0 ? show.map((r,i)=>{
                return(
                    <p key={i} className='text-white'>{r.rule}</p>
                )
            }):<p></p>}
        </div>
    )
}

export default Gamepage;