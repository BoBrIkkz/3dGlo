const modal = () => {

    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })
    modal.addEventListener('click', (event) => {
        if (event.target.closest('.popup-content')) {
            modal.style.display = 'block'
        } else {
            modal.style.display = 'none'
        }
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal