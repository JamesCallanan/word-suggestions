//import logo from "./logo.svg";
import datamuse from "datamuse";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [rhymeWords, setRhymeWords] = useState([]);
  const [meansLikeWords, setMeansLikeWords] = useState([]);
  const [soundsLikeWords, setSoundsLikeWords] = useState([]);
  const [triggerWords, setTriggerWords] = useState([]);

  const wordRef = useRef();

  const getWordInfo = () => {
    const word = wordRef.current.value;
    if (word === "") return;
    datamuse
      .request("words?ml=" + word + "&max=5")
      .then((json) => setMeansLikeWords(json));
    datamuse
      .request("words?sl=" + word + "&max=5")
      .then((json) => setSoundsLikeWords(json));
    datamuse
      .request("words?rel_rhy=" + word + "&max=5")
      .then((json) => setRhymeWords(json));
    datamuse
      .request("words?rel_trg=" + word + "&max=5")
      .then((json) => setTriggerWords(json));
  };
  return (
    <>
      <div className="title">
        <h1>Niall's word suggestor</h1>
        <input ref={wordRef}></input>
        <button onClick={getWordInfo}>Click me</button>
      </div>
      <div className="container">
        <div>
          {triggerWords.map((word, i) => (
            <li key={i}>{word.word}</li>
          ))}
        </div>
        <div>
          {rhymeWords.map((word, i) => (
            <li key={i}>{word.word}</li>
          ))}
        </div>
        <div>
          {soundsLikeWords.map((word, i) => (
            <li key={i}>{word.word}</li>
          ))}
        </div>
        <div>
          {meansLikeWords.map((word, i) => (
            <li key={i}>{word.word}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
