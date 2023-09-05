"use client"

import React, {useState, useEffect} from 'react';
import {rules} from '../data/rules';
import { current } from 'tailwindcss/colors';


function Gamepage() {

    const [password, setPassword] = useState('');
    const [show, setShow] = useState([]);
    const [currentIndex, setCurrentId] = useState(0);
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

        
    // },[currentId] )

    const addShow = (id)=>{
        
        if(show.length && show[id].add){
            return;
        } else {
            //set show state for that rule to be true
            setShow(prev=> [
                {...rules[id], 
                add:true, ...prev}
            ] )
        }
    };

    const createCheck = (str)=> {return new RegExp(str)};

    const updateState = (index,bool)=>{
        console.log(show[index].id)
        console.log('show in updateState',show);
        setShow((prev)=>[...prev,show[index].done=[bool]]);
    };

    const check = (str)=>{
        if (show.length) {
            show.map((r,i)=>{
                const answer = createCheck(r.answers);
                //check 
                const checkResult = answer.test(str);
                if(checkResult && r.done === false){
                    setCurrentId((prev)=> prev+1);
                    updateState(i,checkResult)
                    
                }
            })
        } 

    };

    const handleChange = (e)=>{
        e.preventDefault();
        addShow(currentIndex);
        
        const value = e.target.value; 
        
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