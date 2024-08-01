import './App.css'

import UserIcon from './components/icons/UserIcon'
import MainMenuItem from './components/MainMenuItem'

/* IMPORT ICONS FOR NAV-BOTTOM */
import CloseContent from './components/icons/CloseContent'


function App() {

  return (
    <article className='mobile-navigation'>
      <div className='navigation__user'>
        {/* info user */}
        <img src="./assets/3-mobile-navigation_photo-profile.png" alt="user-img" />
        <div>
          <h2>Lisa Recharsdson</h2>
          <p>Environmental meteorologist</p>
        </div>
      </div>
      <div className='navigation__menu'>
        <div className='navigation__main-menu'>
          {/* main menu: personal data, messages, notifications, location, community*/}
          <MainMenuItem icon="userIcon" text="Personal Data"  handleOpen={false}/>
          <MainMenuItem icon="messageIcon" text="Message" />
          <MainMenuItem icon="notificationIcon" text="Notification" />
          <MainMenuItem icon="locationIcon" text="Location" />
          <MainMenuItem icon="communityIcon" text="Community" />
        </div>

        <div>
          {/* menu settings: FAQs, Settings */}
        </div>

        <nav className='nav-bottom'>
          <div className='nav__menu'>
            <CloseContent />
          </div>
          {/* nav for mobile, this sections have next sections: IconHome, IconStadistics, IconMessage, IconProfile */}
        </nav>
      </div>
    </article>
  )
}

export default App
