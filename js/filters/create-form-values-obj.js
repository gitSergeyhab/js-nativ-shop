
import {
    resultsList, filterForm, categoriesSelect,
    slider, priceMin, priceMax, 
    estateTypeBoxes, squareInput, roomRadios, 
    cameraTypeBoxes, matrixSelect, videoSelect, 
    laptopTypeBoxes, ramRadios, diagonalRadios, laptopProcessorBoxes,
    carYearSelect, transmissionRadios, carBodyBoxes,
} from '../dom-elements.js';

import {
    filterValues, 
    mainCategories, 
    estateCategories, estateRooms,
    laptopCategories, processorCategories, 
    cameraCategories, resolutionVideo, 
    carCategories,
} from '../form-categories.js';


export const createFormValuesObj = () => {

    const readFromCheckbox = (boxes, dict) => {
        const arr = []
        if (dict) {
            boxes.forEach(box => box.checked ? arr.push(dict[box.value]) : null);
        } else {
            boxes.forEach(box => box.checked ? arr.push(box.value) : null);   
        }
        
        return arr
    }

    const readFromRadio = (buttons, dict) => {
        for (let button of buttons) {
            if (button.checked) {
                return dict ? dict[button.value] : button.value;
            }
        }
    };
    
    return {
        'category': categoriesSelect.value,
        price: {
            'min': +priceMin.value,
            'max': +priceMax.value,
        },
        estate: {
            'type': readFromCheckbox(estateTypeBoxes, estateCategories),
            'area': +squareInput.value,
            'rooms-count': readFromRadio(roomRadios, estateRooms),
        },
        camera: {
            'type': readFromCheckbox(cameraTypeBoxes, cameraCategories),
            'matrix-resolution': parseFloat(matrixSelect.value),
            'supporting': resolutionVideo[videoSelect.value],
        },

        laptop: {
            'type': readFromCheckbox(laptopTypeBoxes, laptopCategories),
            'ram-value': parseFloat(readFromRadio(ramRadios)),
            'screen-size': parseFloat(readFromRadio(diagonalRadios)),
            'cpu-type': readFromCheckbox(laptopProcessorBoxes),
        },
        car: {
            'body-type': readFromCheckbox(carBodyBoxes, carCategories),
            'production-year': +carYearSelect.value,
            'transmission': readFromRadio(transmissionRadios),
        }

    }
}

