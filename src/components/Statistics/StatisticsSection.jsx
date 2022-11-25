import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import data from '../../source/data.json';
export const StatisticsSection = ({ title = 'Upload stats' }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {data.map(element => (
          <li key={element.id}>
            <StatisticsItem data={element} />
          </li>
        ))}
      </ul>
    </section>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string,
};
