const TIME_CORRECT = 19136000000; // потому что данные в базе годовой давности
const NUMBERS_BETWEEN_SPICES = 3;
const HOURS_FRESH_DATE = 24;
const HOURS_IN_DAY = 24;
const HOURS_IN_WEEK = 168;

const formatPrice = (price) => {
  let oldPrice = price.toString();
  let resultPrice = '';

  while (oldPrice.length > NUMBERS_BETWEEN_SPICES) {
    resultPrice = `${oldPrice.slice(oldPrice.length - NUMBERS_BETWEEN_SPICES)} ${resultPrice}`;
    oldPrice = oldPrice.slice(0, oldPrice.length - NUMBERS_BETWEEN_SPICES);
  }

  resultPrice = `${oldPrice} ${resultPrice}`;

  return resultPrice;
};


const months = ['', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const getMonth = (num) => months[num];

const getOldDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${getMonth(newDate.getMonth())} ${newDate.getFullYear()} года`;
};

const formateDate = (date) => {
  const pseudoDate = +date + TIME_CORRECT;
  const diffDate = new Date() - new Date(pseudoDate);
  const hours = diffDate / 1000 / 60 / 60;
  if (hours < HOURS_FRESH_DATE) {
    return `${Math.round(hours)} часов назад`;
  } else if (hours < HOURS_IN_WEEK) {
    return `${Math.round(hours / HOURS_IN_DAY)} дней назад`;
  }
  return getOldDate(pseudoDate);
};

export {formatPrice, formateDate};
