import user from 'DATA/user.json';
import Profile from 'components/Profile';
import 'core-js/es';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
