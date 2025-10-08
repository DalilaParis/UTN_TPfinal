import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import HeaderMessage from "../../Components/Header/HeaderMessage"
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div class="container-list">
        <div class='contact-list'>
            <HeaderMessage/>
            <ContactList/>
        </div>
    </div>
  )
}

export default HomeScreen