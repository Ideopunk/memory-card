import React, {useState} from 'react';
import './style/App.scss';

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const onMiss = () => {
    setHighScore(score)
    setScore(0)
  }

  return (
    <div className="App">
      <p>{score}</p>
      <p>{highScore}</p>
    </div>
  );
}

export default App;
