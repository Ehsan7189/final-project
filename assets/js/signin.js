const subBtn = document.getElementById("signin-btn");
const email = document.getElementById('floatingInput');
const pass = document.getElementById('password');
const incorrectMassage = document.getElementById('massage');

// show massage function 

const showMassage = element => element.classList.remove("d-none")

// add danger class
const dangerClass = elementName => elementName.classList.add("bg-danger");
// sending to denger class

const sendToDanger = (...args) => args.map(item => dangerClass(item));


// !change input bg

const incorrectHandling = () => {
    sendToDanger(pass, email)
    showMassage(incorrectMassage)
}

// !change Page functionality

const changePage = () => {
    window.location.href = "../pages/check-out.html"
}


// ! sub btn functionality
subBtn.addEventListener("click", e => {
    e.preventDefault();
    !email.value && !pass.value ? incorrectHandling() : changePage();




    // });

})




