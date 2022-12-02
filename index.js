import {saveSus} from './firebase.js'

window.addEventListener('DOMContentLoaded', () =>{

})

const suscribirse = document.getElementById('suscribirse')

suscribirse.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = suscribirse['email']

    saveSus(email.value)

    suscribirse.reset()
})

