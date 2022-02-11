import { animate } from './helpers'
const modal = () => {

    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })
    modal.addEventListener('click', (event) => {
        if (!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    modal.style.opacity = progress
                    if (progress === 0) {
                        modal.style.display = `none`
                    }
                }
            });
        }

    })
}

export default modal