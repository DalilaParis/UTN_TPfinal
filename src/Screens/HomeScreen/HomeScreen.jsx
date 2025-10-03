
import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div class="container-list">
        <div class='contact-list'>
            <ContactList/>
        </div>
    </div>
  )
}

export default HomeScreen