const body = document.querySelector("body")
const ButtonDark = document.getElementById('darkMode')
const buttonFilter = document.querySelectorAll(".buttons-genre")
const products = document.querySelectorAll(".products-final")
const buttonProducts = document.querySelectorAll(".products-button")
const darkLocalStrage = localStorage.getItem("DarkMode")

ButtonDark.addEventListener('click', () => {
    const imgDark = document.querySelector("#imgDark")
  if(ButtonDark.classList.contains("button-Dark-on")){
      localStorage.setItem("DarkMode",false)
      ButtonDark.classList.remove("button-Dark-on")
      imgDark.src = "../assets/img/moon.svg"
      body.classList.remove("body-dark")
        buttonFilter.forEach(element => {
            element.classList.remove("buttons-genre-dark")
        })
        products.forEach(element => {
            element.classList.remove("products-final-dark")
            
            console.log(element)
        })
        buttonProducts.forEach(element => {
            element.classList.remove("products-button-dark")
        })
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")

  }else{
      localStorage.setItem("DarkMode",true)
      ButtonDark.classList.add("button-Dark-on")
      imgDark.src = "../assets/img/sun.svg"
      body.classList.add("body-dark")
        buttonFilter.forEach(element => {
            element.classList.add("buttons-genre-dark")
        })
        products.forEach(element => {
            element.classList.add("products-final-dark")
        })
        buttonProducts.forEach(element => {
            element.classList.add("products-button-dark")
        })
        categoryTodos.classList.remove("buttons-genre-fixe")
        categoryPop.classList.remove("buttons-genre-fixe")
        categoryMPB.classList.remove("buttons-genre-fixe")
        categoryForro.classList.remove("buttons-genre-fixe")
        categorySamba.classList.remove("buttons-genre-fixe")
        categoryBaiao.classList.remove("buttons-genre-fixe")
        categoryRap.classList.remove("buttons-genre-fixe")
        categoryHipHop.classList.remove("buttons-genre-fixe")
        categoryRock.classList.remove("buttons-genre-fixe")
        categoryReggae.classList.remove("buttons-genre-fixe")
        categoryCountry.classList.remove("buttons-genre-fixe")
        categoryGospel.classList.remove("buttons-genre-fixe")
  }
  productsfound.innerHTML =" "
  renderingProducts(productsMain, range.value)
})

//dark monde salve
function darkizinho(local){
    if(local == "true"){
        ButtonDark.classList.add("button-Dark-on")
        imgDark.src = "../assets/img/sun.svg"
        body.classList.add("body-dark")
        buttonFilter.forEach(element => {
            element.classList.add("buttons-genre-dark")
        })
        products.forEach(element => {
            element.classList.add("products-final-dark")
        })
        buttonProducts.forEach(element => {
            element.classList.add("products-button-dark")
        })
    }
    if(local == "false"){
        ButtonDark.classList.remove("button-Dark-on")
        imgDark.src = "../assets/img/moon.svg"
        body.classList.remove("body-dark")
        buttonFilter.forEach(element => {
            element.classList.remove("buttons-genre-dark")
        })
        products.forEach(element => {
            element.classList.remove("products-final-dark")
        })
        buttonProducts.forEach(element => {
            element.classList.remove("products-button-dark")
        })
    }
}
darkizinho(darkLocalStrage)