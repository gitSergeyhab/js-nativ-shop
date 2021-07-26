// export const mySlider = new rSlider({
//     target: '#sampleSlider',
//     values: [10000, 1000000],
//     range: true,
//     // tooltip: true,
//     // scale: true,
//     // labels: false,
//     // step: 10000
//   });
import {slider, priceMin, priceMax} from './dom-elements.js';
import {filterByCategory} from './filters/filter.js';

const sliderPrices = {
  min: 0,
  max: 1000000000,
};

noUiSlider.create(slider, {
  range: {
    min: [0],
    max: [sliderPrices.max * 1.2],
  },
  start: [sliderPrices.min, sliderPrices.max],
  step: sliderPrices.max * 0.05,
  connect: [false, true, false],
  tooltips: true,
  format: {
    to: function (value) {
      return parseInt(value).toFixed();
    },
    from: function (value) {
      return parseInt(value).toFixed();
    },
  },
});


slider.noUiSlider.on('update', (___, handle, values) => {
  if (handle === 0) {
    priceMin.value = values[handle];
    // console.log('priceMin.value', priceMin.value, values[handle])

  } else if (handle === 1) {
    priceMax.value = values[handle];
    // console.log('priceMax.value', priceMax.value, values[handle])
  }
});


export const makeSliderPrices = (data, values) => {
  const newData = data.filter((elem) => filterByCategory(elem, values));
  // console.log(newData, 1)
  // console.log(data)
  let minPrice = newData[0].price,
    maxPrice = newData[0].price;
  newData.forEach((elem) => {
    if (elem.price > maxPrice) {
      maxPrice = elem.price;
    }
    if (elem.price < minPrice) {
      minPrice = elem.price;
    }
  });

  sliderPrices.min = minPrice;
  sliderPrices.max = maxPrice;

  slider.noUiSlider.updateOptions({
    range: {
      min: [0],
      max: [sliderPrices.max * 1.2],
    },
    start: [sliderPrices.min * 0.99, sliderPrices.max * 1.01],
    step: sliderPrices.max * 0.001,
  });
};
