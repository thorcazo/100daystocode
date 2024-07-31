import './App.css'

import UserIcon from './components/icons/UserIcon'
import MainMenuItem from './components/MainMenuItem'


function App() {

  return (
    <>
      <section className='container'>
        <h1>3 Mobile navigation</h1>

        <article className='mobile-navigation'>
          <div className='navigation__user'>
            {/* info user */}
            <img src="./assets/3-mobile-navigation_photo-profile.png" alt="user-img" />
            <div>
              <h2>Lisa Recharsdson</h2>
              <p>Environmental meteorologist</p>
            </div>
          </div>
          <div className='navigation__main-menu'>
            {/* main menu: personal data, messages, notifications, location, community*/}
            <MainMenuItem icon="userIcon" text="Personal Data" />
            <MainMenuItem icon="messageIcon" text="Message" />
            <MainMenuItem icon="notificationIcon" text="Notification" />
            <MainMenuItem icon="locationIcon" text="Location" />
            <MainMenuItem icon="communityIcon" text="Community" />
          </div>

          <div>
            {/* menu settings: FAQs, Settings */}
          </div>

          <nav>
            {/* nav for mobile, this sections have next sections: IconHome, IconStadistics, IconMessage, IconProfile */}
          </nav>


        </article>




      </section>
    </>
  )
}

export default App
