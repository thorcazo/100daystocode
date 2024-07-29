import './App.css'


/* IMPORT ICONS */
import Linkedin from './components/icons/Linkedin';
import Facebook from './components/icons/Facebook';
import Twitter from './components/icons/Twitter';


function App() {

  return (
    <>
      <article className='card'>
        <img className='card__image' src="./assets/foto.jpg" alt="" />
        <div className='card__name'>
          <h3 className='card__name-title'>Jonny Rogers</h3>
          <span className='card__name-nick'>@jonnyrogers</span>
        </div>

        {/* ICONO REDES SOCIALES */}
        <ul className='card__social'>
          <a href='#' className='card__social-item'><Facebook /></a>
          <a href='#' className='card__social-item'><Linkedin /></a>
          <a href='#' className='card__social-item'><Twitter /></a>
        </ul>

        <p>Crafting brand and communication stratigies, creating visual designs, leading art direction, and capturing portraits through photography</p>

        <div className=''>
          <button className='card__button pink'>Follow</button>
          <button className='card__button'>Message</button>
        </div>
      </article>

    </>
  )
}

export default App
