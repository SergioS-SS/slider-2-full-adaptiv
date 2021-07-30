const btnL = document.querySelector('.btn-left')
const btnR = document.querySelector('.btn-right')

const sliderRow = document.querySelector('.slider-row')
const slides = sliderRow.querySelectorAll('.slider-item')
const slidesCount = sliderRow.querySelectorAll('.slider-item').length

let count = 1;
let slidesOnWindow;

btnL.addEventListener('click', () => { changeSlide('left') })
btnR.addEventListener('click', () => { changeSlide('right') })





function changeSlide(el) {

	// длина одного слайда
	const widthSlide = document.querySelector('.slider-item').offsetWidth

	// длина всех слайдов (всего контейнера)
	let widthAll = widthSlide * slidesCount

	// количество видимых слайдов в контейнере
	slidesOnWindow = Math.round(sliderRow.offsetWidth / widthSlide)



	if (el === 'left') {
		if (count > 1) {
			count--
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}
	}


	else if (el === 'right') {

		// Если в контейнере 1 слайд

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

		// Если в контейнере 2 слайда

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

		// Если в контейнере 3 слайда

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

	const widthSlide = document.querySelector('.slider-item').offsetWidth
	slidesOnWindow = Math.round(sliderRow.offsetWidth / widthSlide)


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

	// калибровка начального слайда при ресайзе 
	sliderRow.style.left = `-${widthSlide * (count - 1)}px`
})



//  Функция свайпа на мобильных

let x1 = null;
let y1 = null;

sliderRow.addEventListener('touchstart', (event) => {
	const firstTouch = event.touches[0];
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
})

sliderRow.addEventListener('touchmove', (event) => {
	if (!x1 || !y1) {
		return false;
	}

	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;
	let xDif = x2 - x1;
	let yDif = y2 - y1;

	if (Math.abs(xDif) > Math.abs(yDif)) {
		if (xDif > 0) changeSlide('left')
		else changeSlide('right')
	}

	x1 = null;
	y1 = null;
})
