import './App.css';
import { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <CardList>
        {monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </CardList>
      
    </div>
  );
}

export default App;
