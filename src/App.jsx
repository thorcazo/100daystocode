import './App.css'

function App() {

  return (
    <>
      <section>
        <article className='card'>
          <div>
            <h3>Jonny Rogers</h3>
            <span>@jonnyrogers</span>
          </div>

          {/* ICONO REDES SOCIALES */}
          <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>

          <p>Crafting brand and communication stratigies, creating visual designs, leading art direction, and capturing portraits through photography</p>

          <div>
            <button>Follow</button>
            <button>Message</button>
          </div>
        </article>

      </section>
    </>
  )
}

export default App
