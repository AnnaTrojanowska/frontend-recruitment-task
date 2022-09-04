const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

alert(document.cookie);

openModalButtons.forEach(button=> {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button=> {
    button.addEventListener('click', () => {
        const modal = button.closest('.popup')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.popup.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal ==null) return 
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


var clicks = Number(document.cookie);

function buttonClickCounter() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  saveClicks();
};



function saveClicks(){
    document.cookie = clicks
}

