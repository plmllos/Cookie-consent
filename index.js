const modalEl = document.getElementById('modal-el')
const consentForm = document.getElementById('consent-form')
const closeBtn = document.getElementById('close-btn')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtn = document.getElementById('modal-choice-btns')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modalEl.style.display = 'block'
}, 1500)

closeBtn.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtn.classList.toggle('reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <p id="upload-text"> Uploading your data to the dark web... </p>
        </div>
    `
    setTimeout(function(){
        const uploadText = document.getElementById('upload-text')
        uploadText.innerText = `Making the sale...`
    }, 1500)
        
    setTimeout(function(){
        const modalInner = document.getElementById('modal-inner')
        modalInner.innerHTML = `
            <h2> Thanks <span class="modal-display-name">${fullName}</span>! </h2>
            <p> We just sold the rights to your eternal soul. </p>
        `
        closeBtn.disabled = false
    }, 3000)
})