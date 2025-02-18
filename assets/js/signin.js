const subBtn = document.getElementById("signin-btn");
const email = document.getElementById('floatingInput');
const pass = document.getElementById('password');
const incorrectMassage = document.getElementById('massage');

// show massage function 

const showMassage = element => element.classList.remove("d-none")

// shack btn

const shakingBtn = btn => btn.classList.add("animate__heartBeat");

// reset button animate and incorrect massage state



let clickCounter = 0;

// !change input bg

const incorrectHandling = () => {
    showMassage(incorrectMassage)
    shakingBtn(subBtn);
    ;
}



// !change Page functionality


const correctHandling = () => {

    basicData = {
        email, pass
    }

    alert(basicData)
}


// ! sub btn functionality

subBtn.addEventListener("click", e => {

    e.preventDefault();


    !email.value && !pass.value ? incorrectHandling() : correctHandling();



})

    (() => {
        location.reload(true)

    })()


