import React from 'react'
import { useForm } from 'react-hook-form';

export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleForm(data) {
        console.log(data);
    }
    console.log("hello world");

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)} >
                <div>
                    <label htmlFor='first'>Name :</label>
                    <input id='first' type='text' {...register('name')} />

                </div>

                <div>
                    <label htmlFor='second'>Age :</label>
                    <input id='second' type='text' {...register('age')} />
                </div>

                <div>
                    <label htmlFor='third'>Email::</label>
                    <input id='third' type='text' {...register('email')} />
                </div>


                <div>
                    <label htmlFor='fourth'>Password :</label>
                    <input id='fourth' type='text' {...register('password')} />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}
