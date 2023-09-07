"use client"

import React, {useState, useEffect} from 'react';
import {rules} from '../data/rules';
import { current } from 'tailwindcss/colors';


function Gamepage() {

    const [password, setPassword] = useState('');
    const [show, setShow] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [oneValidate, setOneValidate] = useState(false);
    const [twoValidate, setTwoValidate] = useState(false);
    const [threeValidate, setThreeValidate] = useState(false);
    const [fourValidate, setFourValidate] = useState(false);
    const [fiveValidate, setFiveValidate] = useState(false);
    const [sixValidate, setSixValidate] = useState(false);
    const [sevenValidate, setSevenValidate] = useState(false);
    const [eightValidate, setEightValidate] = useState(false);
    const [nineValidate, setNineValidate] = useState(false);

    

    // useEffect(()=>{
    //     console.log('use effect', currentIndex)
    //     addShow(currentIndex)

        
    // },[currentIndex] )

    const addShow = (i)=>{
        console.log('show', show)
        console.log('index in addShow',i);
        if(show.length === i-1){
            return;
        } else {
            //set show state for that rule to be true
            setShow(prev=> [
                {...rules[i], 
                add:true}, ...prev
            ] )
        }
    };

    const createCheck = (str)=> {return new RegExp(str)};

    const updateState = (index,bool)=>{
        const updatedShow = [...show];
        updatedShow[index].done = bool;

        setShow((prev)=> [...updatedShow]);
        
    };

    const check = (str)=>{
        if (show.length) {
            show.map((r,i)=>{
                const answer = createCheck(r.answers);
                //check 
                const checkResult = answer.test(str);
                if(checkResult && r.done === false){
                    setCurrentIndex((prev)=> prev+1);
                    updateState(i,checkResult);
                } 
                else {
                    updateState(i,checkResult);
                }
            })
        } 

    };

    const handleChange = (e)=>{
        e.preventDefault();
        const value = e.target.value; 
        addShow(currentIndex);
        
        
        const checkResult = check(value);
        //console.log(checkResult);

        setPassword(value)
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