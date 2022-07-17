import React, { useState } from 'react';
import Users from './components/users';
import api from './api';
import SearchStatus from './components/searchStatus';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (usersId) => {
    setUsers(users.filter((user) => user._id !== usersId));
  };
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        console.log(user.bookmark);
        if (user._id === id) {
          user.bookmark = !user.bookmark;
        }
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '300px' }} scope="col">
                Имя
              </th>
              <th style={{ width: '400px' }} scope="col">
                Качества
              </th>
              <th style={{ width: '300px' }} scope="col">
                Профессия
              </th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Users
              users={users}
              onDelete={handleDelete}
              onChangeStatus={handleToggleBookMark}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
