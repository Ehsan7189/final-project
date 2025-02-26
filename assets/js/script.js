const productContainer = document.getElementById('product-container');

const shortText = (text, maxLength = 136) => text.length > maxLength ? `${(text.substring(0, maxLength))}` + "..." : text + "..."

// !mapping data

const iteration = rawData => {
    rawData.map(item => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "col-lg-4", "product");

        cardContainer.innerHTML = `
        
        <img src="./assets/img/826118.png" class="card-img-top product__image" alt="..." />
        <div class="card-body product__body">
            <h3 class="card-title  product__title"> ${item.title}</h3>
            <p class="card-text product__description">
                ${shortText(item.description)}
            </p>
            <a href="#" class="btn sign-btn product-btn" >Go somewhere</a>
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
    // console.log(signInBtn);


})()
