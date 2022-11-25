import { StatisticsItem } from './StatisticsItem';
import data from '../../source/data.json';
export const StatisticsSection = () => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        {data.map(element => (
          <StatisticsItem element={data} />
        ))}
      </ul>
    </section>
  );
};
