import PropTypes from 'prop-types';
import data from '../../source/data.json';
export const StatisticsSection = ({ title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {data.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
StatisticsSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
