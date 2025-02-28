const users = document.getElementById("user-product-container")



const iteration = rawData => {
    rawData.map(item => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "col-lg-4", "product");


        cardContainer.innerHTML = `
        
        <img src="../img/826118.png" class="card-img-top product__image" alt="..." />
        <div class="card-body product__body">
            <h3 class="card-title  product__title"> ${item.username}</h3>
            <p class="card-text product__description">
                ${item.email}
            </p>
        </div>
        `;
        users.appendChild(cardContainer);


    })
}


fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(data => iteration(data));
