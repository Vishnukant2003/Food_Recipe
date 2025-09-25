import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import RecipeAll from './page/RecipeAll'
import RecipeWithId from './page/RecipeWithId'
import Header from './components/Header'
// import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeAll" element={<RecipeAll />} />
        <Route path="/RecipeWithId" element={<RecipeWithId />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
