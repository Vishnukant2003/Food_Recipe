import React from 'react'
import { Link } from 'react-router-dom'
const HotRecipes = () => {
  return (
    <div>
      <h2 className='flex items-center justify-center gap-4 bold text-2xl pt-8'>
            <div className='h-[3px] w-[50px] bg-[black]'></div>
            Hot Recipe
            <div className='h-[3px] w-[50px] bg-[black]'></div>    
      </h2>
      <p className='text-center uppercase pb-8'>sdfsdf</p> 


      <div>
          <Link to="/" className='rounded-2xl p-4 border flex flex-col gap-4'>
          <img className='rounded-2xl border' src='https://cdn.dummyjson.com/recipe-images/1.webp' alt=''></img>
          </Link>
          <Link to="/" className='rounded-2xl p-4 border flex flex-col gap-4'>
          <img className='rounded-2xl border' src='https://cdn.dummyjson.com/recipe-images/1.webp' alt=''></img>
          </Link>
          <Link to="/" className='rounded-2xl p-4 border flex flex-col gap-4'>
          <img className='rounded-2xl border' src='https://cdn.dummyjson.com/recipe-images/1.webp' alt=''></img>
          </Link>
          <Link to="/" className='rounded-2xl p-4 border flex flex-col gap-4'>
          <img className='rounded-2xl border' src='https://cdn.dummyjson.com/recipe-images/1.webp' alt=''></img>
          </Link>
      
      </div> 
    </div>
  )
}

export default HotRecipes
