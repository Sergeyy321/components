import { MainStyle } from 'components/App.style';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'json.files/user.json';
import data from 'json.files/data.json';
import friendsList from 'json.files/friends.json';
import transaction from 'json.files/transactions.json';

export const App = () => {
  return (
    <MainStyle>
      <Profile users={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory transactions={transaction} />
    </MainStyle>
  );
};
