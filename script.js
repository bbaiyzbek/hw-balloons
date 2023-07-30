const arrayImg = document.querySelectorAll('.img-wrapper')
const selectBtn = document.querySelector('#btn')
const check = document.querySelector('#check')


arrayImg.forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red')
    })
    selectBtn.addEventListener('click', () => {
        img.classList.toggle('bg-red')
    })
})

arrayImg.forEach((img) => {
    setTimeout(() => {
        img.classList.remove('bg-red')
    }, 5000)
})







