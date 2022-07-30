import react from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import './styles/App.css';
import Data from './data/Data';

function App() {
  let myArray = Data.map((data) => {
    return (
      <Body
        title={data.title}
        location={data.location}
        googlelink={data.googleMapsUrl}
        startingDate={data.startDate}
        endingDate={data.endDate}
        description={data.description}
        ImageSource={data.imageUrl}
      />
    );
  });
  return (
    <main>
      <Navbar />
      <div className="container">{myArray}</div>
    </main>
  );
}

export default App;
