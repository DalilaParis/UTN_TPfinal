import React, { useContext } from 'react'
import { getAllContacts } from '../../services/contactService'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import "./ContactList.css"

const ContactList = () => {
    const { contactList, isContactListLoading } = useContext(ContactListContext)

    return (
        <div>
            {
                isContactListLoading
                    ? <div id="startup">
                            <svg class="spinner-container" width="65px" height="65px" viewBox="0 0 52 52">
                            <circle class="path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px" />
                            </svg>
                        </div>
                    : contactList.map(
                        (contact) => {
                            return <ContactItem
                                contact={contact}
                                key={contact.id}
                            />
                        }
                    )
            }

        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link to={'/contacto/' + contact.id} class="contact">
            <div class="profile-pic">
                <img src={contact.profile_img} class="profile-pic_image" />
            </div>
            <div class="contact-info">
                <h2 class="contact-info_name">{contact.name}</h2>
                <span class="contact-info_online">En linea: {contact.is_connected ? 'Si' : 'No'}</span>
            </div>
            <hr />
        </Link>
    )
}

export default ContactList