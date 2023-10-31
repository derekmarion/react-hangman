import { useState, useEffect } from 'react'
import words from '../data/words.json'
import './App.css'

function Letter({letter, guessedLetters}) { //shift this component so separate file
  if (guessedLetters.includes(letter)) {
    return <span>{letter}</span>;
  } else {
    return <span>_</span>;
  }
}

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const play = () => {
    const randInt = Math.floor(Math.random() * (words.length - 0));
    setPuzzle(words[randInt]);
  }

  useEffect(() => {
    console.log(puzzle);
  }, [puzzle]);

  const handleGuess = (letter) => {
    setGuessedLetters([...guessedLetters, letter]);
  };

  const renderWord = () => {
    return puzzle.split('').map((letter, index) => (
      <Letter key={index} letter={letter} guessedLetters={guessedLetters} /> 
    ));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <button onClick={play}>Play Hangman</button>
      <div>
        {renderWord()}
      </div>
      <div>
      <form
              onClick={(e) => {
                e.preventDefault();
                handleGuess(inputValue);
              }}
            >
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Guess</button>
      </form>
      </div>
    </>
  )
}

export default App
