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
      fontFamily="Roboto"
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      alignItems="center"
      fontSize="fontSizes[5]px"
      color="#010101"
    >
      <Profile user={user} />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
