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
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      React homework template
    </div>
  );
};
