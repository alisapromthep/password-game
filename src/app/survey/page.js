'use client'
import React from 'react';
import {useState} from 'react';

function Surveypage() {

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
            <form className='flex flex-col justify-center items-center'>
                {
                    formFields.map((field,i)=>{
                        return (
                            <label key={i}
                            className='m-2 flex flex-col'
                            >
                                {field.label}
                                <input type='text'
                                name={field.input_name}
                                />
                            </label>
                        )
                    })
                }
                <label>
                <input
                type='checkbox'
                />
                    are you interested in tech event?
                </label>

            </form>
        </div>
    )
}

export default Surveypage;