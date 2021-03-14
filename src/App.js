//import logo from "./logo.svg";
import datamuse from "datamuse";
import { useEffect, useRef, useState } from "react";
import "./App.css";

const REQUEST_TYPE = {
  SOUNDS_LIKE: "sl",
  MEANS_LIKE: "ml",
  RHYMES_WITH: "rel_rhy",
  TRIGGER_WORDS: "rel_trg",
};

function App() {
  const [word, setWord] = useState([]);
  const [rhymeWords, setRhymeWords] = useState([]);
  const [numRhymeWords, setNumRhymeWords] = useState(5);
  const [meansLikeWords, setMeansLikeWords] = useState([]);
  const [numMeansLikeWords, setNumMeansLikeWords] = useState(5);
  const [soundsLikeWords, setSoundsLikeWords] = useState([]);
  const [numSoundsLikeWords, setNumSoundsLikeWords] = useState(5);
  const [triggerWords, setTriggerWords] = useState([]);
  const [numTriggerWords, setNumTriggerWords] = useState(5);

  const wordRef = useRef();

  useEffect(() => {
    if (word === "") return;
    getWords(word, REQUEST_TYPE.MEANS_LIKE, numMeansLikeWords).then((json) =>
      setMeansLikeWords(json)
    );
    getWords(word, REQUEST_TYPE.SOUNDS_LIKE, numSoundsLikeWords).then((json) =>
      setSoundsLikeWords(json)
    );
    getWords(word, REQUEST_TYPE.RHYMES_WITH, numRhymeWords).then((json) =>
      setRhymeWords(json)
    );
    getWords(word, REQUEST_TYPE.TRIGGER_WORDS, numTriggerWords).then((json) =>
      setTriggerWords(json)
    );
  }, [
    word,
    numRhymeWords,
    numTriggerWords,
    numMeansLikeWords,
    numSoundsLikeWords,
  ]);

  // const getWordInfo = async () => {
  //   const word = wordRef.current.value;
  //   if (word === "") return;
  //   getWords(word, REQUEST_TYPE.MEANS_LIKE, 5).then((json) =>
  //     setMeansLikeWords(json)
  //   );
  //   getWords(word, REQUEST_TYPE.SOUNDS_LIKE, 5).then((json) =>
  //     setSoundsLikeWords(json)
  //   );
  //   getWords(word, REQUEST_TYPE.RHYMES_WITH, 5).then((json) =>
  //     setRhymeWords(json)
  //   );
  //   getWords(word, REQUEST_TYPE.TRIGGER_WORDS, 5).then((json) =>
  //     setTriggerWords(json)
  //   );
  // };

  const getWords = async (word, request_type, amount) => {
    const response = await datamuse.request(
      `words?${request_type}=${word}&max=${amount}`
    );
    return response;
  };

  return (
    <>
      <div className="title">
        <h1>Niall's word suggestor</h1>
        <input ref={wordRef}></input>
        <button onClick={() => setWord(wordRef.current.value)}>Click me</button>
      </div>

      <div className="container">
        {Array.isArray(triggerWords) && triggerWords.length ? (
          <div>
            <h2>Trigger Words</h2>
            <button
              onClick={() => setNumTriggerWords((prev) => prev - 5)}
              disabled={numTriggerWords === 5}
            >
              -
            </button>
            <button onClick={() => setNumTriggerWords((prev) => prev + 5)}>
              +
            </button>
            {triggerWords.map((word, i) => (
              <li key={i}>{word.word}</li>
            ))}
          </div>
        ) : null}
        {Array.isArray(rhymeWords) && rhymeWords.length ? (
          <div>
            <h2>Rhyme Words</h2>
            <button
              onClick={() => setNumRhymeWords((prev) => prev - 5)}
              disabled={numRhymeWords === 5}
            >
              -
            </button>
            <button onClick={() => setNumRhymeWords((prev) => prev + 5)}>
              +
            </button>
            {rhymeWords.map((word, i) => (
              <li key={i}>{word.word}</li>
            ))}
          </div>
        ) : null}
        {Array.isArray(soundsLikeWords) && soundsLikeWords.length ? (
          <div>
            <h2>Sounds like Words</h2>
            <button
              onClick={() => setNumSoundsLikeWords((prev) => prev - 5)}
              disabled={numSoundsLikeWords === 5}
            >
              -
            </button>
            <button onClick={() => setNumSoundsLikeWords((prev) => prev + 5)}>
              +
            </button>
            {soundsLikeWords.map((word, i) => (
              <li key={i}>{word.word}</li>
            ))}
          </div>
        ) : null}
        {Array.isArray(meansLikeWords) && meansLikeWords.length ? (
          <div>
            <h2>Means like Words</h2>
            <button
              onClick={() => setNumMeansLikeWords((prev) => prev - 5)}
              disabled={numMeansLikeWords === 5}
            >
              -
            </button>
            <button onClick={() => setNumMeansLikeWords((prev) => prev + 5)}>
              +
            </button>
            {meansLikeWords.map((word, i) => (
              <li key={i}>{word.word}</li>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
