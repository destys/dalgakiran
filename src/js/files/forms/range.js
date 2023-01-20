// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeSlider = document.querySelectorAll('.filters-catalog__range');

	if (rangeSlider.length) {
		rangeSlider.forEach(slider => {
			var stepsSlider = slider.querySelector('.slider');

			var input0 = slider.querySelector('.input_0');
			var input1 = slider.querySelector('.input_1');
			var inputs = [input0, input1];

			noUiSlider.create(stepsSlider, {
				start: [20, 80],
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [0],
					'max': 200
				}
			});

			stepsSlider.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = values[handle];
			});
		})
	}

	/* if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: 0, // [0,200000]
			connect: [true, false],
			range: {
				'min': [0],
				'max': [200000]
			}
		}); */
	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/
	/* function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
} */
}
rangeInit();
