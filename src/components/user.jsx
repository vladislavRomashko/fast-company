import React from 'react';
import Qualities from './qualitie';
import BookMark from './bookmark';

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onChangeStatus,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualities key={quality._id} {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{`${rate} / 5`}</td>
      <td className="mx-auto">
        <BookMark status={bookmark} onChange={() => onChangeStatus(_id)} />
      </td>
      <td>
        <button className="btn btn-danger " onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
