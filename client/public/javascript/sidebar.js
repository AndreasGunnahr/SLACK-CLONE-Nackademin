const showChannelContainer = document.getElementsByClassName('createChannel')[0];
const showDirectMessageContainer = document.getElementsByClassName('createDirectMessage')[0];
const createChannelContainer = document.getElementById("createChannel__container")
const createDirectMessageContainer = document.getElementById("createDirectMessage__container");
const overlay = document.getElementsByClassName('overlay')[0];
const errorText = document.getElementById('createChannel__error');
const successText = document.getElementById('createChannel__success');

const exitBtn = document.querySelectorAll('.fa-times');

showChannelContainer.addEventListener('click', () => {
    createChannelContainer.style.display = "block";
    overlay.style.display = "block";
});

showDirectMessageContainer.addEventListener('click', () => {
    createDirectMessageContainer.style.display = "block";
    overlay.style.display = "block";
});

overlay.addEventListener('click', () => {
    createChannelContainer.style.display = "none";
    createDirectMessageContainer.style.display = "none";
    overlay.style.display = "none";
    errorText.innerText = "";
    successText.innerText = "";
})

exitBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        createChannelContainer.style.display = "none";
        createDirectMessageContainer.style.display = "none";
        overlay.style.display = "none";
        errorText.innerText = "";
        successText.innerText = "";
    })
});


  