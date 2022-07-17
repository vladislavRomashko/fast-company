import React from 'react';
import User from './user';

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.map((user) => (
        <User
          key={user._id}
          {...user}
          onDelete={rest.onDelete}
          onChangeStatus={rest.onChangeStatus}
        />
      ))}
    </>
  );
};

export default Users;
