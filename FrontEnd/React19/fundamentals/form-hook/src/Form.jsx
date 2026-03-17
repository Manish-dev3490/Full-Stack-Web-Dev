import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(5, "Minimumlength should be 5").max(20, "maximum length should be 20"),
    email: z.string().min(5, "Minimumlength should be 5").max(20, "maximum length should be 20"),
    password: z.string().min(5, "Minimumlength should be 5").max(20, "maximum length should be 20"),
})

export function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    function handleForm(data) {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)} >
                <div>
                    <label htmlFor='first'>Name :</label>
                    <input id='first' type='text' {...register('name')} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div>
                    <label htmlFor='second'>Age :</label>
                    <input id='second' type='text' {...register('age')} />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>

                <div>
                    <label htmlFor='third'>Email::</label>
                    <input id='third' type='text' {...register('email')} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>


                <div>
                    <label htmlFor='fourth'>Password :</label>
                    <input id='fourth' type='text' {...register('password')} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}
