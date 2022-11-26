import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { ProfImg, ProfItem, ProfUl } from './Profile.styled';
export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <Box
      mt="30px"
      bg="background"
      display="block"
      width="50vh"
      pd="20px"
      borderRadius="8px"
      fontSize="40"
      overflow="hidden"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <ProfImg src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Box>
      <ProfUl>
        <ProfItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </ProfItem>
        <ProfItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </ProfItem>
        <ProfItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </ProfItem>
      </ProfUl>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
