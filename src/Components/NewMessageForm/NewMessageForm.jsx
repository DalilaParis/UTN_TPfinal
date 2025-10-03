import React, { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'
import "./NewMessageForm.css"

const NewMessageForm = (props) => {
    console.log(useContext(ContactListContext))
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (

        <form onSubmit={handleSubmit} class="message-form">
            <label htmlFor="mensaje">Escribe tu mensaje</label>
            <textarea id='mensaje' name='mensaje' placeholder='Escribe tu mensaje' />
            <button class="button-send"><i class="bi bi-send-fill"></i></button>
        </form>

    )
}

export default NewMessageForm