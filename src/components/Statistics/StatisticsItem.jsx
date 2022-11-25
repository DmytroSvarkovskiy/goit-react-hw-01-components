export const StatisticsItem = ({ data: { id, label, percentage } }) => {
  return (
    <li key={id}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};
