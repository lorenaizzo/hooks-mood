import React, {useState} from 'react';
import './App.css'
import { MoodForm, MoodList } from './components/mood';
function App() {
  const [moods, setMoods] = useState([]);

  const handleNewMood = (mood, message) => {
    setMoods([...moods, {mood: mood, message: message}]);
  }

  return (
      <div>
        <div>
          <MoodForm handleNewMood={handleNewMood}></MoodForm>
        </div>
        <div>
          <MoodList moods={moods}></MoodList>
        </div>
      </div>
    );
}

export default App;
