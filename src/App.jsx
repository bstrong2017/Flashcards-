import { useState } from 'react'
import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {

  return (
    <div className="App">
      <div className="flashcard-container">
      <h1>✨Foundations of Cybersecurity Flashcards✨</h1>
      <h2>Prepare for class before the lecture begins!📝</h2>
      </div>
      <Flashcard/>
    </div>
  )
}

export default App