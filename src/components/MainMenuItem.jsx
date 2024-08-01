import React, { useState } from 'react'

/* IMPORTAR LOS ICONOS */
import UserIcon from './icons/UserIcon'
import Message from './icons/Message'
import Notification from './icons/Notification'
import Location from './icons/Location'
import Community from './icons/Community'
import Arrow from './icons/Arrow'



/* COMPONENTS */
import ContentItem from './ContentItem'


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

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (icon) => {
    if (icon) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <div className='main-menu__item'>
        <div onClick={() => handleClick(icon)}>
          <div className='item__content'>
            {IconComponent}
            <p>{text}</p>
          </div>
          <Arrow className={isOpen ? 'main-menu__arrow active-arrow' : 'main-menu__arrow'} />
        </div>
        <div className={`content__text  ${isOpen ? 'active-content' : ''}`}>
          <ContentItem handleClick={handleClick} icon={icon} />
        </div>
      </div>
    </>
  )
}
