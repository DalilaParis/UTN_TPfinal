import React from 'react'
import "./HeaderMessage.css"

const HeaderMessage = () => {
  return (
    <div class="header-buttons-container">
      <header class="header-container">
          <span class="header-Logo">WhatsApp</span>
          <div class="header-icons">
              <i class="bi bi-envelope-plus"></i>
              <i class="bi bi-three-dots-vertical"></i>
          </div>
      </header>
      <div class="buttons-container">
        <a href="" class="selection">Todos</a>
        <a href="" class="not-selection">No leidos</a>
        <a href="" class="not-selection">Favoritos</a>
        <a href="" class="not-selection">Grupos</a>
      </div>
    </div>
  )
}

export default HeaderMessage