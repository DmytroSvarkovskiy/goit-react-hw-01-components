import PropTypes from 'prop-types';
import { FrienrStatus, FriendsLogo } from './FriendListItem.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FrienrStatus status={isOnline}></FrienrStatus>
      <FriendsLogo src={avatar} alt="User avatar" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
