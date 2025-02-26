const elementSelector = id => document.getElementById(id);

const firstName = elementSelector("firstName");
const lastName = elementSelector("lastName");
const userName = elementSelector("username");
const emailContainer = elementSelector("email");
const passContainer = elementSelector("password");
const gitLink = elementSelector("gitLink");
const countryCode = elementSelector("countryCode");
const phoneNumber = elementSelector("phoneNumber");
const skill = elementSelector("skill");
const freelancerBtn = elementSelector("freelancer");
const clientBtn = elementSelector("client");
const typeOfUser = freelancerBtn.checked ? freelancerBtn.value : clientBtn.value;
const cardOwner = elementSelector("cc-name")
const cardNumber = `${elementSelector("cc-number").value.substring(0, 4)}-${elementSelector("cc-number").value.substring(4, 8)}-${elementSelector("cc-number").value.substring(8, 12)}-${elementSelector("cc-number").value.substring(12)}`
console.log(cardNumber);







let user = JSON.parse(localStorage.getItem("user"));

// !set email and pass

emailContainer.value = user.email;
passContainer.value = user.pass;

// !this data send to will server
const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: emailContainer.value,
    password: passContainer.value,
    gitLink: gitLink.value,
    countryCode: countryCode.value,
    phoneNumber: phoneNumber.value,
    skill: skill.value,


};




// !

(() => {



    fetch("http://localhost:3000/country")
        .then(res => {
            if (!res.ok) {
                throw new Error("network was not ok" + res.statusText);
            };
            return res.json();
        })
        .then(data => data.map(item => {
            const option = document.createElement("option");
            option.value = `${item.numericCode}`
            option.innerText = `${item.name}(+${item.numericCode})`
            countryCode.appendChild(option)
        }));

    fetch("http://localhost:3000/freelancerSkills")
        .then(res => {
            if (!res.ok) {
                throw new Error("network was not ok" + res.statusText);
            };
            return res.json();
        })
        .then(data => data.map(item => {
            const option = document.createElement("option");
            option.value = `${item}`;
            option.innerText = `${item}`;
            skill.appendChild(option);
        }));

    // !send user data to server



})()