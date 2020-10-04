import React, {useState} from 'react';
import './style/App.scss';


function App() {
  const fakeURLs = ["https://vignette.wikia.nocookie.net/lotr/images/2/23/TreebeardatIsengard.png/", "https://vignette.wikia.nocookie.net/lotr/images/f/fb/Cirdan_by_moumou38.jpg/revision/latest/top-crop/width/360/height/450?cb=20121226111023"]

  const [highScore, setHighScore] = useState(0)
  const [score, setScore] = useState(0)

  //
  const initialArray = new Array(fakeURLs.length).fill(false)
  const [clickArray, setClickArray] = useState(JSON.parse(JSON.stringify(initialArray)))
  console.log(clickArray)
  
  const checkHighScore = () => {
    if (highScore > score + 1) {
      return true;
    } else {
      return false;
    }
  }

  const onMiss = () => {
    setHighScore(score)
    setScore(0)
  }

  const onHit = (i) => {
    console.log(`onHit, ${i}`)
    const newArray = [...clickArray];
    if (newArray[i] === false) {
      newArray[i] = true
      checkHighScore()? setHighScore(highScore): setHighScore(score + 1)
      setScore(score + 1)
      setClickArray(newArray)
    } else {
      onMiss()
      setClickArray(JSON.parse(JSON.stringify(initialArray)))
    }
  }

  const mappedURLs = fakeURLs.map((url, index) => <div className="card" value={index} onClick={() => onHit(index)}><img className="entrant-img" src={url} alt="entrant" /></div>)

  return (
    <div className="App">
      <p>{score}</p>
      <p>{highScore}</p>
      <div className="game">
        {mappedURLs}
      </div>
    </div>
  );
}

export default App;
