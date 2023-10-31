import { useState } from 'react'
import words from '../data/words.json'
import './App.css'

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  
  const play = () => {
    const randInt = Math.floor(Math.random() * (words.length - 0));
    setPuzzle(words[randInt]);
    console.log(puzzle);
  }

  return (
    <>
      <button onClick={play}>Play Hangman</button>
    </>
  )
}

export default App
