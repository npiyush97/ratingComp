const ratings = document.querySelector('.rating-container')
const submitBtn = document.querySelector('.submit-btn')
let Userrating

ratings.addEventListener('click', (e) => {
    Userrating = e.target.textContent
    let rating = document.querySelectorAll('.rate')
    for (let i = 0; i < rating.length; i++) {
        if (rating[i].classList.contains('selected')) {
            rating[i].classList.remove('selected')
        }
    }
    e.target.classList.add('selected')
    console.log(Userrating)
})


submitBtn.addEventListener('click', () => {
    if (!Userrating) throw Error('Select rating')
    const ratingState = document.querySelector('.rating-state')
    const thankyouState = document.querySelector('.thank-you')
    const selectBanner = document.querySelector('.select-banner')
    ratingState.style.display = 'none'
    thankyouState.style.display = 'flex'
    selectBanner.textContent = `You selected ${Userrating} out of 5`
})