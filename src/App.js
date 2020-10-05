import React, { useState } from "react";
import "./style/App.scss";

function App() {
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

	const colors = [
		{ rgb: "(62, 180, 137)", name: "Mint" },
		{ rgb: "(208, 240, 192)", name: "Tea" },
		{ rgb: "(128, 128, 0)", name: "Olive" },
		{ rgb: "(1, 121, 111)", name: "Pine" },
		{ rgb: "(138, 154, 91)", name: "Moss" },
		{ rgb: "(192, 255, 0)", name: "Lime" },
		{ rgb: "(113, 188, 120)", name: "Fern" },
		{ rgb: "(86, 130, 3)", name: "Avocado" },
    { rgb: "(135, 169, 107)", name: "Asparagus" },
    {rgb: "(75, 111, 68)", name: "Artichoke"}
	];

	const [urlArray, setURLArray] = useState(
		shuffleArray(
			colors.map((fakeURL) => {
				return { url: fakeURL, clicked: false };
			})
		)
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
		setURLArray(
			urlArray.map((entry) => {
				entry.clicked = false;
				return entry;
			})
		);
		setHighScore(highScore > score ? highScore : score);
		setScore(0);
	};

	const onHit = (url) => {
		console.log(`onHit, ${url}`);

		if (url.clicked === false) {
			setURLArray((urlArray) =>
				urlArray.map((entry) => {
					if (entry.url === url.url) {
						entry.clicked = true;
					}
					return entry;
				})
			);

			checkHighScore() ? setHighScore(highScore) : setHighScore(score + 1);
			setScore(score + 1);
		} else {
			onMiss();
		}
		setURLArray(shuffleArray(urlArray));
	};

	const mappedURLs = urlArray.map((url, index) => (
		<div className="card" key={index} value={url.clicked} onClick={() => onHit(url)}>
			<img className="entrant-img" src={url.url} alt="entrant" />
		</div>
	));

	return (
		<div className="App">
			<div>
				<header className="header">
					<h1>Memory Card</h1>
				</header>
				<div className="guide">
					<p>
						Get a high score by clicking each image without clicking any more than once
					</p>
					<p>Score: {score}</p>
					<p>High score: {highScore}</p>
				</div>
			</div>
			<div className="game">{mappedURLs}</div>
		</div>
	);
}

export default App;
