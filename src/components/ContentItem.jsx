import React from 'react'


/* Comportar Contenidos de cada seccion */
import ContentPersonalData from './ContentPersonalData'
import ContentMessages from './ContentMessage'
import ContentNotifications from './ContentNotification'
import ContentLocation from './ContentLocation'
import ContentCommunity from './ContentCommunity'

import CloseContent from './icons/CloseContent'


/* Asignar cada componente a un objeto dentro de un array de objetos */

const contentItems = [
  {
    icon: 'userIcon',
    component: <ContentPersonalData />
  },
  {
    icon: 'messageIcon',
    component: <ContentMessages />
  },
  {
    icon: 'notificationIcon',
    component: <ContentNotifications />
  },
  {
    icon: 'locationIcon',
    component: <ContentLocation />
  },
  {
    icon: 'communityIcon',
    component: <ContentCommunity />
  }
];





export default function ContentItem({ handleClick, icon }) {
  return (
    <div className='personal-data'>
      {contentItems.map((item, index) => {
        if (item.icon === icon) {
          return (
            <div key={index}>
              {item.component}
            </div>
          )
        }
        return null;
      })}

    </div>
  )
}
