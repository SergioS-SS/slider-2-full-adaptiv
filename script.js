
const sliderBody = document.querySelector('.slider-body')
const sliderRow = document.querySelector('.slider-row')
const btnL = document.querySelector('.btn-left')
const btnR = document.querySelector('.btn-right')

const slides = sliderRow.querySelectorAll('.slider-column')
const slidesCount = sliderRow.querySelectorAll('.slider-column').length
let count = 1;
let slidesOnWindow;


btnL.addEventListener('click', () => {
	changeSlide('left')
})
btnR.addEventListener('click', () => {
	changeSlide('right')
})


function changeSlide(el) {

	// длина одного слайда
	const widthSlide = document.querySelector('.slider-column').offsetWidth

	// длина всех слайдов (всего контейнера)
	let widthAll = widthSlide * slidesCount

	// количество видимых слайдов в контейнере
	slidesOnWindow = Math.round(sliderRow.offsetWidth / widthSlide)

	console.log(slidesOnWindow);


	if (el === 'left') {
		if (count > 1) {
			count--
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}
	}


	else if (el === 'right') {

		if (slidesOnWindow === 1) {
			if (count < slidesCount) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}
			else if (count = slidesCount) {
				count = 1
				sliderRow.style.left = '0px'
			}
		}
		else if (slidesOnWindow === 2) {
			if (count < slidesCount - 1) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}
			else if (count = slidesCount - 1) {
				count = 1
				sliderRow.style.left = '0px'
			}
		}
		else if (slidesOnWindow === 3) {
			if (count < slidesCount - 2) {
				count++
				let newSlidePos = (count - 1) * widthSlide
				sliderRow.style.left = `-${newSlidePos}px`
			}
			else if (count = slidesCount - 2) {
				count = 1
				sliderRow.style.left = '0px'
			}
		}

	}
}


window.addEventListener('resize', () => {

	const widthSlide = document.querySelector('.slider-column').offsetWidth
	slidesOnWindow = Math.round(sliderRow.offsetWidth / widthSlide)
	// console.log(sliderRow.offsetWidth);
	// console.log(widthSlide);

	rounded()
	function rounded() {

		if (slidesOnWindow === 1) {
			slides.forEach(item => {
				item.style.width = '100%'
			})
		}
		else if (slidesOnWindow === 2) {
			slides.forEach(item => {
				item.style.width = '50%'
			})
		}
		else if (slidesOnWindow === 3) {
			slides.forEach(item => {
				item.style.width = '33.333%'
			})
		}
		else {
			rounded()
		}
	}

	// let newSlidePos = (count - 1) * widthSlide
	sliderRow.style.left = '0px'

	// console.log(slidesOnWindow);

	// changeSlide()
})

