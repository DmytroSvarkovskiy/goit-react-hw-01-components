import user from '..//..//source/user.json';
import data from '../../source/data.json';
import friends from '../../source/friends.json';
import transactions from '../../source/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Box } from 'components/Box';
export const App = () => {
  return (
    <Box
      fontFamily="body"
      display="flex"
      flexDirection="column"
      gridRowGap="30px"
      justifyContent="center"
      alignItems="center"
      fontSize={3}
      color="primary"
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
