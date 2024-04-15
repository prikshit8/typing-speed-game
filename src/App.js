import { useRef, useState } from "react";
import "./App.css";
import Word from "./Word";
import Timer from "./Timer";

const cloudGen = () =>
  `codedamn pc playground react nextjs macbook windows elon musk bitcoin dogecoin cryptocurrency tesla spacex editor coding html javascript world earth mars heater wood blanket`.split(
    " "
  );

function App() {
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);

  const cloud = useRef(cloudGen());
  function processInput(value) {
    if (!startCounting) {
      setStartCounting(true);
    }
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setUserInput("");
      const word = value.trim();
      const newResult = [...correctWordArray];
      newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
      console.log(newResult);
      console.log(cloud.current.length);
      if (newResult.length === cloud.current.length) {
        setStartCounting(false);
      }
      setCorrectWordArray(newResult);
    } else {
      setUserInput(value);
    }
  }
  return (
    <div>
      <h1>Typing Test</h1>
      <Timer
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
      />
      <p>
        {cloud.current.map((word, index) => {
          return (
            <Word
              key={word}
              word={word}
              active={index === activeWordIndex}
              correct={correctWordArray[index]}
            />
          );
        })}
      </p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
}

export default App;
