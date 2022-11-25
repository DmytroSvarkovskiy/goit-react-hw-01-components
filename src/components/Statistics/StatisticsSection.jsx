import { StatisticsItem } from './StatisticsItem';
import data from '../../source/data.json';
export const StatisticsSection = () => {
  return (
    <section>
      <h2>Upload stats</h2>
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
