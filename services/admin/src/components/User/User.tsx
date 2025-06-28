import React, { useEffect, useState } from 'react';
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div>
      {users?.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)}
    </div>
  );
};

export default User;