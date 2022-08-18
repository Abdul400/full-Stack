import { useState } from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import QuizPage from './components/QuizPage';
import { useEffect } from 'react';
import { MagicSpinner, SphereSpinner, SwapSpinner } from 'react-spinners-kit';

function App() {
  //definition of states
  const [pages, setPages] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(9);

  //obtaining data from API
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  function startQuiz(finalSelected) {
    setSelectedCategory(finalSelected);
    setPages(true);
  }
  function render() {
    if (pages === true) {
      return <QuizPage category={selectedCategory} />;
    } else if (pages === false) {
      if (categories.length < 5) {
        return (
          <div className="loading-firstpage">
            <MagicSpinner size={100} color="#686769" loading={true} />
          </div>
        );
      } else {
        return (
          <FirstPage
            func={(event) => startQuiz(event)}
            categories={categories}
          />
        );
      }
    }
  }
  return <div className="app">{render()}</div>;
}

export default App;
