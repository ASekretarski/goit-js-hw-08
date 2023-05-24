var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form')
const emailInputForm = document.querySelector('input[name="email"]')
const messageInputForm = document.querySelector('textarea[name="message"]')


function saveData() {
    const savedData = {
        email: emailInputForm.value,
        message: messageInputForm.value
    }
    const savedDataJSON = JSON.stringify(savedData)
    localStorage.setItem("feedback-form-state", savedDataJSON)
}
function readStoredData() {
    if (localStorage.getItem("feedback-form-state") !== null) {
        const storedData = JSON.parse(localStorage.getItem("feedback-form-state"))
        emailInputForm.value = storedData.email
        messageInputForm.value = storedData.message
    }
}
function submitData(event) {
    event.preventDefault();
    const submittedData = {
        email: emailInputForm.value,
        message: messageInputForm.value
    }
    console.log(submittedData);
    localStorage.removeItem("feedback-form-state")
    emailInputForm.value = "";
    messageInputForm.value=""
}

const throttledSaveData = throttle(saveData, 500)

function manageData() {
    try {
        form.addEventListener("input", throttledSaveData)
        readStoredData()
    } catch (e) {
        alert (`Local storage data incorrect, please provide your details again.`)
    }
}

manageData()

form.addEventListener("submit", submitData)



