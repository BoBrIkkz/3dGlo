const link = () => {

    const links = document.querySelectorAll('a');
    for (let smoothLink of links) {
        smoothLink.addEventListener('click', function(event) {
            event.preventDefault()
            const id = smoothLink.getAttribute('href')
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
        })
    }
}

export default link