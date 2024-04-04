const PercentageGoingUp = ({ percentage = 0 }) => {
  return <span>{percentage.toFixed(1)}%</span>;
};

export { PercentageGoingUp };
