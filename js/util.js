const TIME_CORRECT = 19136000000; // потому что данные в базе годовой давности

const formatPrice = (price) => {
  let oldPrice = price.toString();
  let resultPrice = '';

  while (oldPrice.length > 3) {
    resultPrice = `${oldPrice.slice(oldPrice.length - 3)} ${resultPrice}`;
    oldPrice = oldPrice.slice(0, oldPrice.length - 3);
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
  if (hours < 24) {
    return `${Math.round(hours)} часов назад`;
  } else if (hours < 168) {
    return `${Math.round(hours / 24)} дней назад`;
  }
  return getOldDate(pseudoDate);
};

export {formatPrice, formateDate};
