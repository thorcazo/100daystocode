import React from 'react'

/* IMPORTAR LOS ICONOS */
import UserIcon from './icons/UserIcon'
import Message from './icons/Message'
import Notification from './icons/Notification'
import Location from './icons/Location'
import Community from './icons/Community'
import Arrow from './icons/Arrow'


// Objeto de mapeo de iconos
const icons = {
  userIcon: <UserIcon />,
  messageIcon: <Message />,
  notificationIcon: <Notification />,
  locationIcon: <Location />,
  communityIcon: <Community />
};


export default function MainMenuItem({ icon, text }) {
  const IconComponent = icons[icon] || null;


  return (
    <>
      <div className='main-menu__item'>
        <div>
          {IconComponent}
          <p>{text}</p>
        </div>
        <Arrow className="main-menu__arrow" />
      </div>
      <div>
        <p>
          informacion relevante
        </p>
      </div>
    </>
  )
}
