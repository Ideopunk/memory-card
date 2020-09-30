import React, {useState} from 'react';
import './style/App.scss';


function App() {
  const fakeURLs = ["https://vignette.wikia.nocookie.net/lotr/images/2/23/TreebeardatIsengard.png/"]

  const [highScore, setHighScore] = useState(0)
  const [score, setScore] = useState(0)

  //
  const [clickArray, setClickArray] = useState(new Array(fakeURLs.length).fill(false))
  console.log(clickArray)
  
  const onMiss = () => {
    setHighScore(score)
    setScore(0)
  }

  const onHit = (i) {
    const newArray = clickArray.map((entry, index) => index === i? ...)
  }

  return (
    <div className="App">
      <p>{score}</p>
      <p>{highScore}</p>
    </div>
  );
}

export default App;
