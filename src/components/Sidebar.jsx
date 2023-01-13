import React, { useState } from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import Arrow from '../img/arrow.png'

const Sidebar = () => {
  const[toggle, setToggle] = useState("sidebar isClose")

  const handleToogle = ()=> {
    toggle === "sidebar isClose" ? setToggle("sidebar isOpen") : setToggle("sidebar isClose")
    
  }

  return (
    <div className={toggle}>
      <div className="arrow">
        <img src={Arrow} alt="toggle" onClick={handleToogle}></img>
      </div>
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar