import {
  FriendsCards,
  FriendsCard,
  spanEl
} from 'components/FriendList/FriendList.styled';

import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <FriendsCards>
      {friends.map(friend => (
        <FriendsCard key={friend.id}>
          <SpanEl className="status"></SpanEl>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </FriendsCard>
      ))}{' '}
    </FriendsCards>
  );
};
