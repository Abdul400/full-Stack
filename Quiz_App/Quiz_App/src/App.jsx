import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import QuizPage from './components/QuizPage';
import { useEffect } from 'react';

function App() {
  //definition of states
  const [pages, setPages] = useState(false);

  //obtaining data from API
  // function getData() {
  //   console.log('testingddfsdafdsdfa');
  //   useEffect(() => {
  //     fetch(
  //       'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAnswersArray(data.results);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);
  // }

  // getData();

  function startQuiz() {
    setPages(true);
  }
  return (
    <div className="app">
      {pages ? <QuizPage /> : <FirstPage func={startQuiz} />}
    </div>
  );
}

export default App;
