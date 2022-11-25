import user from '..//..//source/user.json';
import { Profile } from 'components/Profile/Profile';
import { StatisticsSection } from 'components/Statistics/StatisticsSection';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <StatisticsSection title="Upload stats" />
    </div>
  );
};
