import React, { useState, useEffect } from "react";
import "./style/App.scss";

function App() {
	const fakeURLs = [
		"https://vignette.wikia.nocookie.net/lotr/images/2/23/TreebeardatIsengard.png/",
    "https://vignette.wikia.nocookie.net/lotr/images/f/fb/Cirdan_by_moumou38.jpg/revision/latest/top-crop/width/360/height/450?cb=20121226111023",
    "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/2a/The_Lord_of_The_Rings_-_Gandalf_The_Grey.png/revision/latest/scale-to-width-down/340?cb=20160321085616"
	];

	const [urlArray, setURLArray] = useState(
		fakeURLs.map((fakeURL) => {
			return { url: fakeURL, clicked: false };
		})
	);
	const [highScore, setHighScore] = useState(0);
	const [score, setScore] = useState(0);

	//

	const checkHighScore = () => {
		if (highScore > score + 1) {
			return true;
		} else {
			return false;
		}
	};

	const onMiss = () => {
    setURLArray(urlArray.map(entry => {
      entry.clicked = false;
      return entry;
    }))
		setHighScore((highScore > score? highScore: score));
		setScore(0);
	};

	const shuffleArray = (array) => {
		let newArray = Object.assign(array);
		for (var i = newArray.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = newArray[i];
			newArray[i] = newArray[j];
			newArray[j] = temp;
		}
		return newArray;
	};

	const onHit = (url) => {
    console.log(`onHit, ${url}`);
    
		if (url.clicked === false) {
			setURLArray((urlArray) =>
				urlArray.map((entry) => {
					if (entry.url === url.url) {
            entry.clicked = true
          }
          return entry;
				})
			);

			checkHighScore() ? setHighScore(highScore) : setHighScore(score + 1);
			setScore(score + 1);

		} else {
			onMiss();
    }
    setURLArray(shuffleArray(urlArray))
	};

	const mappedURLs = urlArray.map((url, index) => (
		<div className="card" key={index} value={url.clicked} onClick={() => onHit(url)}>
			<img className="entrant-img" src={url.url} alt="entrant" />
		</div>
	));

  useEffect(() => {setURLArray(shuffleArray(urlArray))}, [urlArray]);

	return (
		<div className="App">
			<p>{score}</p>
			<p>{highScore}</p>
			<div className="game">{mappedURLs}</div>
		</div>
	);
}

export default App;
