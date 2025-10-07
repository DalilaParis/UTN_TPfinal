import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './messageScreen.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import HeaderMessage from '../../Components/Header/HeaderMessage'

function MessageScreen() {
    
    
    const {isContactDetailLoading, contactDetailed, onCreateNewMessage} = useContext(ContactDetailContext)


    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <HeaderMessage/>
                <ContactList/>
            </div>
            <div className='message-screen__messages-container'>
                <a href="/" class="mobile-goback"><i class="bi bi-arrow-left"></i></a>
                {
                    isContactDetailLoading 
                    ? <div id="startup">
                        <svg class="spinner-container" width="65px" height="65px" viewBox="0 0 52 52">
                            <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px" />
                        </svg>
                    </div>
                    : (
                        contactDetailed
                        ? <MessagesList 
                            messages={contactDetailed.messages} 
                        />
                        : <span>contacto no encontrado</span>
                    )
                }
                
                <div className='messages-form-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen