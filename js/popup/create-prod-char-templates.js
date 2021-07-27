import {estateT, carT, cameraT, laptopT} from '../translite.js';

const checkValue = (value) => {
  if (!value || value === '-' || value === ' ') {
    return null; // проверка, что данные есть и они не какая-нибудь х - ня
  }
  return value;
};

//для каждой категории свой сборщик характеристик
const addCarCharacteristic = (year, transmission, body) => {
  const yearText = checkValue(year) ? `<li class="chars__item">
      <div class="chars__name">Год выпуска</div>
      <div class="chars__value">${year}</div>
    </li>` : '';
  const transmissionText = checkValue(transmission) ?`<li class="chars__item">
      <div class="chars__name">Коробка передач</div>
      <div class="chars__value">${carT.transmission[transmission]}</div>
    </li>` : '';
  const bodyText = checkValue(body) ? `<li class="chars__item">
      <div class="chars__name">Тип кузова</div>
      <div class="chars__value">${carT.types[body]}</div>
    </li>` : '';
  return yearText + transmissionText + bodyText;
};

const addEstateCharacteristic = (type, area, rooms) => {
  const typeText = checkValue(type) ? `<li class="chars__item">
      <div class="chars__name">Тип жилья</div>
      <div class="chars__value">${estateT.types[type]}</div>
    </li>` : '';
  const areaText = checkValue(area) ?`<li class="chars__item">
      <div class="chars__name">Площадь</div>
      <div class="chars__value">${area} кв. м.</div>
    </li>` : '';
  const roomsText = checkValue(rooms) ? `<li class="chars__item">
      <div class="chars__name">Количество комнат</div>
      <div class="chars__value">${rooms}</div>
    </li>` : '';
  return typeText + areaText + roomsText;
};

const addLaptopCharacteristic = (type, ram, diagonal, processor) => {
  const typeText = checkValue(type) ? `<li class="chars__item">
      <div class="chars__name">Тип ноутбука</div>
      <div class="chars__value">${laptopT.types[type]}</div>
    </li>` : '';
  const ramText = checkValue(ram) ?`<li class="chars__item">
      <div class="chars__name">Объем оперативной памяти</div>
      <div class="chars__value">${ram}ГБ</div>
    </li>` : '';
  const diagonalText = checkValue(diagonal) ? `<li class="chars__item">
      <div class="chars__name">Диагональ</div>
      <div class="chars__value">${diagonal} дюймов</div>
    </li>` : '';
  const processorText = checkValue(processor) ? `<li class="chars__item">
    <div class="chars__name">Тип процессора</div>
    <div class="chars__value">${processor}</div>
    </li>` : '';
  return typeText + ramText + diagonalText + processorText;
};

const addCameraCharacteristic = (type, matrix, video) => {
  const typeText = checkValue(type) ? `<li class="chars__item">
      <div class="chars__name">Тип камеры</div>
      <div class="chars__value">${cameraT.types[type]}</div>
    </li>` : '';
  const matrixText = checkValue(matrix) ?`<li class="chars__item">
      <div class="chars__name">Тип матрицы</div>
      <div class="chars__value">${matrix} Мегапикселей</div>
    </li>` : '';
  const videoText = checkValue(video) ? `<li class="chars__item">
      <div class="chars__name">Качество видео</div>
      <div class="chars__value">${video}</div>
    </li>` : '';
  return typeText + matrixText + videoText;
};
// в зависимости от категории фомируются хар-ки
export const createCharTemplates = (data) => {
  const filter = data.filters;
  switch (data.category) {
    case 'Недвижимость': return addEstateCharacteristic(filter.type, filter.area, filter['rooms-count']);
    case 'Автомобиль': return addCarCharacteristic(filter['production-year'], filter.transmission, filter['body-type']);
    case 'Ноутбук': return addLaptopCharacteristic(filter.type, filter['ram-value'], filter['screen-size'], filter['cpu-type']);
    case 'Фотоаппарат': return addCameraCharacteristic(filter.type, filter['matrix-resolution'], filter['supporting']);
    default: return 'Что-то пошло не так';
  }
};
