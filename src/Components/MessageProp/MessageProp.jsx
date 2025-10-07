import "./MessageProp.css"

function Message(propiedades){
    return(
        <div class="message">
            <span class="message_author">{propiedades.author}</span>
            <p class="message_content">{propiedades.content}</p>
            <span class="message_timestamp">{propiedades.timestamp}</span>
        </div>
    )
}

export default Message