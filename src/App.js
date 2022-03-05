import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (
      async () => {
        let userData;

        try {
          const response = await fetch('https://random-data-api.com/api/users/random_user?size=3');
          userData = await response.json();
          console.log(userData);
        }
        catch (error) {
          console.log(error);
          userData = [];
        }

        setUsers(userData);
      }
    )();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
