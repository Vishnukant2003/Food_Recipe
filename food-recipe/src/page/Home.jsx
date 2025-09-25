import React from 'react'
import Hero from "../components/Hero"
import HotRecipes from '../components/HotRecipes';
// 
const Home = () => {
  return (
    <div className='bg-amber-200 '>
      <Hero/>
      <HotRecipes></HotRecipes>
    </div>
  )
}

export default Home;
