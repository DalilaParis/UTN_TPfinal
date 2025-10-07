import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [is_open, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!is_open)
    }
  return (
    <header class='nav-wsp'>
        <nav className='nav-wsp_desktop'>
            <a href=""><i class="bi bi-chat-left-text-fill"></i></a>
            <a href=""><i class="bi bi-opencollective"></i></a>
            <a href=""><i class="bi bi-chat-dots"></i></a>
            <a href=""><i class="bi bi-people"></i></a>
        </nav>
        <div class="user-interface">
            <a href=""><i class="bi bi-gear"></i></a>
            <a href=""><img src="https://i.pinimg.com/736x/67/0e/1f/670e1fc607d825c1a783f4308043be28.jpg" class="user-pfp"/></a>
        </div>
    </header>
  )
}

export default Navbar