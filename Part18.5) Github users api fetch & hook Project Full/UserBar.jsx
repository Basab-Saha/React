import React, { useEffect, useState } from 'react';
import User from './User';

const UserBar = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='userbar'>
      {users.map((user) => (
        <div key={user.id} className='user-card'>
          <User imgURL={user.avatar_url} Name={user.login} />
        </div>
      ))}
    </div>
  );
};

export default UserBar;
