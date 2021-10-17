export default (start, end) => {
  let formattedTimeSpan = "";
  if (isToday(start)) {
    formattedTimeSpan += "Today";
  } else {
    formattedTimeSpan += "Yesterday";
  }

  formattedTimeSpan += ` ${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`;
  return formattedTimeSpan;
};

const isToday = (date) => {
  const now = new Date();
  return date.getDate() === now.getDate();
};
