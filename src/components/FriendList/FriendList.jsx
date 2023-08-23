import {
  FriendsCards,
  FriendsCard,
  SpanEl
} from 'components/FriendList/FriendList.styled';

import PropTypes from 'prop-types';


export const FriendList = ({ friends }) => {
  return (
    <FriendsCards>
      {friends.map(friend => (
        <FriendsCard key={friend.id}>
          <SpanEl color={friend}></SpanEl>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </FriendsCard>
      ))}{' '}
    </FriendsCards>
  );

};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};