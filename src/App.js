import React, {useState} from 'react';
import './style/App.scss';


function App() {
  const fakeURLs = ["https://vignette.wikia.nocookie.net/lotr/images/2/23/TreebeardatIsengard.png/"]

  const [highScore, setHighScore] = useState(0)
  const [score, setScore] = useState(0)

  //
  const initialArray = new Array(fakeURLs.length).fill(false)
  const [clickArray, setClickArray] = useState(JSON.parse(JSON.stringify(initialArray)))
  console.log(clickArray)
  
  const onMiss = () => {
    setHighScore(score)
    setScore(0)
  }

  const onHit = (i) => {
    const newArray = [...clickArray];
    if (newArray[i] === false) {
      newArray[i] = true
      setHighScore(score + 1)
      setScore(score + 1)
      setClickArray(newArray)
    } else {
      onMiss()
      setClickArray(JSON.parse(JSON.stringify(initialArray)))
    }
  }

  const mappedURLs = fakeURLs.map(url => <div className="card"><img className="entrant-img" src={url} alt="entrant" /></div>)

  return (
    <div className="App">
      <p>{score}</p>
      <p>{highScore}</p>
      {mappedURLs}
    </div>
  );
}

export default App;
