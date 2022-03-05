import { useEffect, useState } from 'react';
import SocialCard from './components/SocialCard';
import '../src/css/_SocialCard.scss';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (
      async () => {
        let usersData;
        try {
          const response = await fetch('https://random-data-api.com/api/users/random_user?size=3');
          usersData = await response.json();
          console.log(usersData);
        }
        catch (error) {
          console.log(error);
          usersData = [];
        }

        setUsers(usersData);
      }
    )();
  }, []);

  return (
    <div className="App">
      {
        users.map((user, index) => {
          return (
            <SocialCard user={user} key={index} />
          )
        })
      }
    </div>
  );
}

export default App;
