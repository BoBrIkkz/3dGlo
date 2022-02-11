const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const dots = document.querySelectorAll('.dot')

    let currentSlide = 0
    let interval

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = () => {
        interval = setInterval(autoSlide, 3000)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }
    sliderBlock.addEventListener('click', (event) => {
        event.preventDefault()

        if (!event.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (event.target.matches('#arrow-right')) {
            currentSlide++
        } else if (event.target.matches('#arrow-left')) {
            currentSlide--
        } else if (event.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (event.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }


        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (event) => {
        if (event.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }

    }, true)
    sliderBlock.addEventListener('mouseleave', (event) => {
        if (event.target.matches('.dot, .portfolio-btn')) {
            startSlide()
        }

    }, true)

    startSlide()
}

export default slider