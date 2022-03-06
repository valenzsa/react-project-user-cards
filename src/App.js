import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SocialCard from './components/SocialCard';
import './App.scss';

function App() {

  let randomColor = '';

  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isSearchResultEmpty, setIsSearchResultEmpty] = useState(false);

  useEffect(() => {
    (
      async () => {
        console.log('useEffect()')
        let usersData;
        try {
          const response = await fetch('https://random-data-api.com/api/users/random_user?size=50');
          usersData = await response.json();
          //console.log(usersData);
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
      <SearchBar allUsers={allUsers} setUsers={setUsers} setIsSearchResultEmpty={setIsSearchResultEmpty} />
      <div className="card-container">
        {/* {
          if(users === []) {
            <p>No Robo Found!</p>
          } else {
            users.map((user, index) => {
              randomColor = Math.floor(Math.random() * 16777215).toString(16);
              return (
                <SocialCard randomColor={randomColor} user={user} key={index} />
              )
            })
          }
        } */}

        {
          isSearchResultEmpty ? <p>No Robo Found!</p> : users.map((user, index) => {
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
