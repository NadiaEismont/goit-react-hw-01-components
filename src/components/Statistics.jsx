import PropTypes from 'prop-types';
import style from './statistic.module.css';
export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(stat => (
          <li className={style.item}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number,
};
