export default (start, duration) => {
  const millisecondDifference = duration * 60000;
  const endDate = new Date(start.getTime() + millisecondDifference);
  return endDate;
};
