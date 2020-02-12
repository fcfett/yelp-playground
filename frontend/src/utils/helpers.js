const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const getMonth = (month) => months[month - 1];

const rgxISODate = /(\d{4}).(\d{2}).(\d{2})T(\d{2}).(\d{2}).*/;

export const getDate = (date) => {
  const isoDate = new Date(date).toISOString();
  const [, year, month, day] = isoDate.match(rgxISODate);
  return `${getMonth(+month)} ${day}, ${year}`;
};

export default {
  getMonth,
  getDate
};
