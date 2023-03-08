import React from 'react'
import { ContainerPages } from '../containers/ContainerPages'
import { useForm } from "react-hook-form";
import { usePostFlashCards } from '../hooks/usePostFlashCard';

export const Create = () => {
  const { post } = usePostFlashCards()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    post(data)
  }


  return (
    <ContainerPages>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4  dark:bg-gray-700/50 px-10 pb-10 pt-5 rounded-md shadow-lg'>
        <label className='flex flex-col gap-1'>
          Category
          <input
            type="text"
            placeholder='Languages'
            className='pl-3 py-1 rounded-sm outline-1 outline text-black'
            {...register("category",
              {
                required: true
              })
            }
          />
        </label>
        <label className='flex flex-col gap-1'>
          Word
          <input
            type="text"
            placeholder='Work'
            className='pl-3 py-1 rounded-sm outline-1 outline text-black'
            {...register("word",
              {
                required: true
              })
            }
          />
        </label>
        <label className='flex flex-col gap-1'>
          translation
          <input
            type="text"
            placeholder='Trabajo'
            className='pl-3 py-1 rounded-sm outline-1 outline text-black'
            {...register("translation",
              {
                required: true
              })
            }
          />
        </label>
        <button className='dark:bg-gray-700/70 px-4 py-2 rounded-md shadow-md mt-5'>Create</button>
      </form>
    </ContainerPages>
  )
}
