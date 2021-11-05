
let hamburger_menu = document.querySelector('.hamburger-menu')
let navigation = document.querySelector('.second-part-nav')

let close = 0

hamburger_menu.addEventListener('click', () => {
    navigation.style.height = '8rem'
    navigation.style.width = 'auto'
    close++

    if (close%2 === 0) {
        navigation.style.height = '0'
        navigation.style.width = 'auto'
    }
})



