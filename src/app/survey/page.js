'use client'
import React from 'react';
import {useState} from 'react';

function Surveypage() {

    const newInfo = {
        'firstname':'',
        'lastname':'',
        'email':'',
        'interest':'false'
    };

    const [info, setInfo] = useState(newInfo);

    const handleChange = (e)=>{
        e.preventDefault();

        const {name, value} = e.target;

        setInfo((prev)=>{
            return (
                {...prev,
                [name]:value}
            )
        });
    
    }

    const create = async()=>{
        await fetch('http://127.0.0.1:8090/api/collections/survey/records',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                ...info
            })
        }
        );

        setNote(newNote);
        router.refresh();


    };

    const formFields = [
        {
            'label':'first name',
            'input_name':'firstname',
        },
        {
            'label':'last name',
            'input_name':'lastname',
        },
        {
            'label':'email',
            'input_name':'email',
        },
    ]

    return (
        <div>
            <h1>Please fill out the survey for a chance to win $100 giftcard!</h1>
            <form className='flex flex-col justify-center items-center border-white'
            onSubmit={create}
            >
                {
                    formFields.map((field,i)=>{
                        return (
                            <label key={i}
                            className='m-2 flex flex-col'
                            >
                                {field.label}
                                <input type='text'
                                name={field.input_name}
                                onChange={handleChange}
                                className='text-black'
                                />
                            </label>
                        )
                    })
                }
                <label>
                <input
                type='radio'
                name='interest'
                onChange={handleChange}
                value={true}
                />
                    are you interested in tech event?
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Surveypage;