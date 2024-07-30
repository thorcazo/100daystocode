import './App.css'


/* IMPORT ICONS */
import Linkedin from './components/icons/Linkedin';
import Facebook from './components/icons/Facebook';
import Twitter from './components/icons/Twitter';
import Instagram from './components/icons/Instagram';
import Dribbble from './components/icons/Dribbble';


function App() {

  return (
    <>
      <article className='card'>
        <div className='card__image-content'>
          <div className='svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="674" height="235" viewBox="0 0 674 235" fill="">
              <path d="M107.022 221.739L40.5745 180.077C-30.9779 135.214 -1.75615 24.8627 82.622 21.2911L583.719 0.0806694C653.667 -2.88009 697.653 74.5158 659.316 133.097L619.499 193.939C595.322 230.883 547.098 243.517 507.913 223.173L393.496 163.772C368.976 151.042 339.833 150.867 315.163 163.301L191.414 225.673C164.533 239.222 132.526 237.729 107.022 221.739Z" fill="" />
            </svg>
          </div>
          <div className='svg2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="674" height="235" viewBox="0 0 674 235" fill="">
              <path d="M107.022 221.739L40.5745 180.077C-30.9779 135.214 -1.75615 24.8627 82.622 21.2911L583.719 0.0806694C653.667 -2.88009 697.653 74.5158 659.316 133.097L619.499 193.939C595.322 230.883 547.098 243.517 507.913 223.173L393.496 163.772C368.976 151.042 339.833 150.867 315.163 163.301L191.414 225.673C164.533 239.222 132.526 237.729 107.022 221.739Z" fill="" />
            </svg>
          </div>
          <img className='card__image' src="./assets/foto.jpg" alt="" />
        </div>
        <div className='card__data-user' >
          <div className='card__name'>
            <h3 className='card__name-title'>Jonny Rogers</h3>
            <span className='card__name-nick'>@jonnyrogers</span>
          </div>

          {/* ICONO REDES SOCIALES */}
          <ul className='card__social'>
            <a href='#' className='card__social-item'><Facebook /></a>
            <a href='#' className='card__social-item'><Linkedin /></a>
            <a href='#' className='card__social-item'><Twitter /></a>
            <a href='#' className='card__social-item'><Instagram /></a>
            <a href='#' className='card__social-item'><Dribbble /></a>
          </ul>

          <p className='card__description'>Crafting brand and communication stratigies, creating visual designs, leading art direction, and capturing portraits through photography</p>
        </div>

        <div className='card__buttons'>
          <button className='bg-pink'>Follow</button>
          <button className=''>Message</button>
        </div>
      </article>

    </>
  )
}

export default App
