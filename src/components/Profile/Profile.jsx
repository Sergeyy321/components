import { UserInf, CurrentInf } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';
export const Profile = ({ users }) => {
  return (
    <div >
      <div>
        <img src={users.avatar} alt="User avatar" />
        <UserInf>{users.username}</UserInf>
        <UserInf>{users.tag}</UserInf>
        <UserInf>{users.location}</UserInf>
      </div>
      <CurrentInf>
        <li>
          <span>Followers</span>
          <span>{users.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{users.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{users.stats.likes}</span>
        </li>
      </CurrentInf>{' '}
    </div>
  );
};
