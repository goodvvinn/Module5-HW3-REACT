import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { userData } from './userData';
import './App.css';

function App() {
  const [defaultUsers, setInitialUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
    setInitialUsers(userData);
  }, []);

  const findByName = (e) => {
    const findResult = defaultUsers.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setUsers(findResult);
  }

  const handleSort = (e) => {
    const sort = e.target.value;
    const result = [...users]
      .sort((a,b) => sort == 'asc' ? a.age - b.age : b.age - a.age)
    setUsers(result)
  }

  const showUser = (item) => {
    console.log(item);
  }

  return (
    <div className="App">
      <header>
        <input type="text" placeholder="name" onChange={findByName}/>
        <select onChange={handleSort}>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </header>
      <main className="main">
        <div className="user-list">
          {
            users.map((item) =>
              <UserCard showUser={() => showUser(item)} user={item}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;