import {useState, useEffect} from 'react'
import "./Jokes.css";
// Treat this as a default eport: no need to use {}. We can name this import anything
import smileyFace from "../../assets/smiley.png"

const Jokes = () => {
  // Variable to store API url
  const url = "https://api.chucknorris.io/jokes/random";

  // State to store Loading state. When the app opens, the data will need to load first, so we set this to true initially
  const [isLoading, setIsLoading] = useState(true);
  // State to store Joke. Set it as an empty object initially
  const [joke, setJoke] = useState({});

  // Function to fetch the joke
  async function getJoke() {
    // set isLoading to true here just to be sure it's true
    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);

    // set isLoading to false after operation is finished
    setIsLoading(false);
  }

  // useEffect to fetch & display a joke on page load. Set a 2 second delay to make sure everything has loaded before fetching joke
  useEffect(() => {
    setTimeout(() => {
      getJoke();
      console.log("delay of 2 seconds")
    }, 2000)
  }, []); // Add [] to show no dependencies
  // NOTE! The useEffect hook will fire twice initially (shows 1 joke, then quickly shows another). This is how development mode is set up when using React.StrictMode. In build mode, useEffect will fire only once. See this article for more info: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar 
  // When I remove StrictMode tags from index.js, the problem goes away

  return (
    <section className='jokes-sec --center-all'>
      <div className='joke --bg-light --card'>
        <h2>Random Joke Generator</h2>
        <img className='smiley' src={smileyFace} alt='Smiley face'/>
        <hr />
        {/* Check if the state is loading or not */}
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p className='--my2'>{joke.value}</p>
        )}
        <hr />
        <button className='--btn --btn-primary --btn-block' onClick={getJoke}>Generate New Joke</button>
      </div>
    </section>
  )
}

export default Jokes;
