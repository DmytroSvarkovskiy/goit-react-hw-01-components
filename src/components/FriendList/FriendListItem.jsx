import PropTypes from 'prop-types';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li>
      {isOnline ? (
        <span
          style={{
            borderRadius: '50%',
            display: 'flex',
            height: '12px',
            width: '12px',
            backgroundColor: 'green',
          }}
        ></span>
      ) : (
        <span
          style={{
            borderRadius: '50%',
            display: 'flex',
            height: '12px',
            width: '12px',
            backgroundColor: 'red',
          }}
        ></span>
      )}

      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
