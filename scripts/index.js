let range = document.querySelector(".range")
range.oninput = (()=>{
    const productsfound = document.querySelector(".products-found")
    let valorRager = document.querySelector(".Price-filter-show")
    valorRager.innerHTML = `Até R$ ${range.value}`
    productsfound.innerHTML =" "
    renderingProducts(productsMain, range.value)

})

function renderingProducts(arr, fitro){
    const productsfound = document.querySelector(".products-found")
    arr.forEach(element =>{
        if(element.price < fitro){
    const productsFinal = document.createElement("li")
    productsFinal.classList.add("products-final")
    const img = document.createElement("img")
    const productsInformation = document.createElement("div")
    productsInformation.classList.add("products-information")
    const paragraph1 = document.createElement("p")
    const paragraph2 = document.createElement("p")
    const title = document.createElement("h2")
    const productsPrice = document.createElement("div")
    productsPrice.classList.add("products-price")
    const Price = document.createElement("h3")
    const productsButton = document.createElement("button")
    productsButton.classList.add("products-button")
    let priceReal = element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    productsfound.appendChild(productsFinal)
    productsFinal.appendChild(img)
    productsFinal.appendChild(productsInformation)
    productsInformation.appendChild(paragraph1)
    productsInformation.appendChild(paragraph2)
    productsFinal.appendChild(title)
    productsFinal.appendChild(productsPrice)
    productsPrice.appendChild(Price)
    productsPrice.appendChild(productsButton)

    img.src = element.img
    paragraph1.innerHTML = element.band
    paragraph2.innerHTML = element.year
    title.innerHTML = element.title
    Price.innerHTML = priceReal
    productsButton.innerHTML = "Comprar"

    const ButtonDark = document.getElementById('darkMode')
    if(ButtonDark.classList.contains("button-Dark-on")){ 
        productsFinal.classList.add("products-final-dark")
        productsButton.classList.add("products-button-dark")   
    }

}
})
}
renderingProducts(productsMain, 100)