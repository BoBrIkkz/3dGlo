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
            modal.style.display = 'none'
        }
    })
}

export default modal