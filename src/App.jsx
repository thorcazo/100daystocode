import './App.css'

import ProfileCard from './components/challenges/ProfileCard';
import AddToBag from './components/challenges/AddToBag';

function App() {

  return (
    <section className='container'>
      <article>
        <h1>1. Profile Card</h1>
        <ProfileCard />
      </article>
      <article>
        <h1>2. Add to bag</h1>
        <AddToBag />
      </article>
    </section>

  )
}

export default App
