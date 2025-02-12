const productContainer = document.getElementById('product-container');

// console.log(productContainer);



// !mapping data

const iteration = rawData => {
    rawData.map(item => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "col-lg-4");
        cardContainer.innerHTML = `
        
        <img src="./assets/img/826118.png" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"> ${item.title}</h5>
            <p class="card-text">
                ${item.description}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
        productContainer.appendChild(cardContainer);


    })
}

// !

const render = url => {
    fetch(url)

        .then(res => {

            if (!res.ok) {

                throw new Error("Api not responded" + res.statusText);

            }

            return res.json()
        })
        .then(data => iteration(data))

}

// !fetch

(() => {

    render("https://fakestoreapi.com/products")


})()