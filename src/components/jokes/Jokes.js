import React from 'react'
import "./Jokes.css";
// Treat this as a default eport: no need to use {}. We can name this import anything
import smileyFace from "../../assets/smiley.png"

const Jokes = () => {
  return (
    <section className='jokes-sec --center-all'>
      <div className='joke --bg-light --card'>
        <h2>Random Joke Generator</h2>
        <img className='smiley' src={smileyFace} alt='Smiley face'/>
        <hr />
        <p className='--my2'>Lorem sdfijsd pojerm</p>
        <hr />
        <button className='--btn --btn-primary --btn-block'>Generate New Joke</button>
      </div>
    </section>
  )
}

export default Jokes;
