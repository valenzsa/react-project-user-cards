import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SocialCard from './components/SocialCard';
import './App.scss';

function App() {

  let randomColor = '';

  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (
      async () => {
        let usersData;
        try {
          const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
          usersData = await response.json();
          console.log(usersData);
        }
        catch (error) {
          console.log(error);
          usersData = [];
        }
        setAllUsers(usersData);
        setUsers(usersData);
      }
    )();
  }, []);

  return (
    <div className="App">
      <h1>Robo Cards</h1>
      <SearchBar allUsers={allUsers} setUsers={setUsers} />
      <div className="card-container">
        {
          users.map((user, index) => {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            return (
              <SocialCard randomColor={randomColor} user={user} key={index} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
