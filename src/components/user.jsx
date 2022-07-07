import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((item) => item._id !== userId));
  };
  const renderPhrase = (number) => {
    if (number >= 2 && number <= 4) {
      return 'человека тусанут';
    } else {
      return 'человек тусанет';
    }
  };

  return !users.length ? (
    <h2>
      <span className="badge bg-danger">{'Никто с тобой не тусанет'}</span>
    </h2>
  ) : (
    <>
      <h2>
        <span className="badge bg-primary">{`${users.length} ${renderPhrase(
          users.length
        )}  с тобой сегодня`}</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={'me-1 badge bg-' + quality.color}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + ` / 5`}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
