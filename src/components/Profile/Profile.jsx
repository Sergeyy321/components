import {
  UserInf,
  CurrentInfBlock,
  CurrentInf,
} from 'components/Profile/Profile.styled';
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
      <CurrentInfBlock>
        <CurrentInf>
          <span>Followers</span>
          <span>{users.stats.followers}</span>
        </CurrentInf>
        <CurrentInf>
          <span>Views</span>
          <span>{users.stats.views}</span>
        </CurrentInf>
        <CurrentInf>
          <span>Likes</span>
          <span>{users.stats.likes}</span>
        </CurrentInf>
      </CurrentInfBlock>{' '}
    </div>
  );
};
