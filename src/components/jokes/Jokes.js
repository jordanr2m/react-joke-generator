import React from 'react'
import "./Jokes.css";
// Treat this as a default eport: no need to use {}. We can name this import anything
import smileyFace from "../../assets/smiley.png"

const Jokes = () => {
  return (
    <section className='jokes-sec'>
      <div className='joke'>
        <h2>Random Joke Generator</h2>
        <img src={smileyFace} alt='Smiley face'/>
        <hr />
        <p>Lorem sdfijsd pojerm</p>
        <hr />
        <button>Generate New Joke</button>
      </div>
    </section>
  )
}

export default Jokes;
