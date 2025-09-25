import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import{ Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='flex text-2xl items-center justify-between max-w-7xl h-20 m-auto' >
      <Link to="/" className='flex items-center gap-4 font bold'>
        <FaHamburger/>
        Tast Vibes
      </Link>
      <div>
        <button className='cursor-pointer'>
          <CiSearch/>
        </button>
        <buttton className='cursor-pointer'>
          <VscThreeBars/>
        </buttton>
      </div>
      <h2>Recipe..</h2>
    </header>
  )
}

export default Header;
