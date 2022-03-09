import user from 'DATA/user.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import statistic from 'DATA/statistic.json';
import 'core-js/es';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export const App = () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#010101',
        }}
      >
        <Section title={"Task-1 'Social network profile'"}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Section>

        <Section title={"Task-2 'Statistics section'"}>
          <Statistics title="Upload stats" stats={statistic} />;
        </Section>
      </div>
    </div>
  );
};
