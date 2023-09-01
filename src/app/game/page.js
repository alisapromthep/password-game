"use client"

import React, {useState} from 'react';
import {rules} from '../data/rules';


function Gamepage() {

    const [password, setPassword] = useState('');
    const [show, setShow] = useState([]);

    const addShow = (num)=>{
        
        const currentRule = show[num];
        if(show.length && currentRule.add){
            return;
        } else {
            //set show state for that rule to be true
            setShow(prev=> [...prev,
                {...rules[num], 
                add:true}
            ] )
        }
    };

    const createCheck = (str)=> {return new RegExp(str)};

    const updateState = (num,bool)=>{
        setShow((prev)=>[...prev,show[num].done=[bool]]);
    };

    const check = (num,str)=>{
        if (show.length) {
            const answer = createCheck(show[num].answers);
            console.log('ans',answer)
            //check 
            return answer.test(str)
        } 

    }

    const handleChange = (e)=>{
        e.preventDefault();
        addShow(0);
        
        const value = e.target.value; 
        
        console.log(check(0,value));

        setPassword(value)

        console.log(password)
    };

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
            {show.length ? show.map((r,i)=>{
                return(
                    <p key={i} className={`${ show.length && show[i].done ? 'text-green-500':'text-red-500'}`}>{r.rule}</p>
                )
            }):<p></p>}
        </div>
    )
}

export default Gamepage;