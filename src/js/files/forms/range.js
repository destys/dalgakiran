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
			let stepsSlider = slider.querySelector('.slider');

			let input0 = slider.querySelector('.input_0');
			let input1 = slider.querySelector('.input_1');
			let inputs = [input0, input1];
			console.log('inputs: ', inputs);

			let textFrom = stepsSlider.getAttribute('data-from');
			textFrom = Math.floor(+textFrom)
			console.log('textFrom: ', textFrom);
			let textTo = stepsSlider.getAttribute('data-to');
			textTo = Math.floor(+textTo)
			console.log('textTo: ', textTo);

			noUiSlider.create(stepsSlider, {
				start: [+textFrom, +textTo],
				connect: true,
				tooltips: [false, false],
				format: {
					from: function (value) {
						return parseInt(value);
					},
					to: function (value) {
						return parseInt(value);
					}
				},
				range: {
				'min': textFrom,
					'max': textTo,
				}
		});

		stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
		});

		input0.addEventListener('change', setPriceValues);
		input1.addEventListener('change', setPriceValues);

		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (input0.value != '') {
				priceStartValue = input0.value;
			}
			if (input1.value != '') {
				priceEndValue = input1.value;
			}
			stepsSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	})
}
}
rangeInit();
