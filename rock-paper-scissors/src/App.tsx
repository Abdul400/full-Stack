import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './components/Home';
import Results from './pages/results';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [chosen, setChosen] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                count={count}
                setCount={setCount}
                setChosen={setChosen}
                chosen={chosen}
              />
            }
          ></Route>
          <Route
            path="/results"
            element={
              <Results
                chosen={chosen}
                count={count}
                setChosen={setChosen}
                setCount={setCount}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
