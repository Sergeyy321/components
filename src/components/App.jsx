import { Profile } from 'components/Profile/Profile';
import user from 'json.files/user.json';
import { Statistic } from 'components/Statistics/Statistics';
import data from 'json.files/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friendsList from 'json.files/friends.json'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transaction from 'json.files/transactions.json'
import {MainStyle} from 'components/App.style'
export const App = () => {
  return (
    <MainStyle>
      <Profile users={user} />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friendsList}  />
      <TransactionHistory transactions={transaction} />
    </MainStyle>
  );
};
