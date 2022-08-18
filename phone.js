const phoneImages = ["images/android.jpg ", "images/iphone.jpg  ", "images/oppo.jpg  ","images/poko.jpg ", "images/redmi.jpg","images/vivo.jpg" ]
let phoneCont = document.querySelector(".phone-image")
let black = document.querySelector(".android");

let blue = document.querySelector(".iphone")

let pink = document.querySelector(".oppo")

let starlight= document.querySelector(".poko")
let moonlight= document.querySelector(".redmi")
let otherlight= document.querySelector(".vivo")


let defaultImgItems =`<img  src= "${phoneImages.at(0)}">`

phoneCont.innerHTML = defaultImgItems

let blueImgItems = `<img "w-100" src= "${phoneImages.at(1)}">`
let pinkImgItems = `<img "w-100" src= "${phoneImages.at(2)}">`
let starImgItems = `<img "w-100" src= "${phoneImages.at(3)}">`
let moonlightImgItems = `<img src= "${phoneImages.at(4)}">`

let otherlightImgItems = `<img "w-100" src= "${phoneImages.at(5)}">`

black.addEventListener("click", function(){
    phoneCont.innerHTML=defaultImgItems
    })
blue.addEventListener("click", function () {
    phoneCont.innerHTML = blueImgItems
})

pink.addEventListener("click", function () {
    phoneCont.innerHTML = pinkImgItems
})

starlight.addEventListener("click", function () {
    phoneCont.innerHTML = starImgItems
})   


moonlight.addEventListener("click", function () {
    phoneCont.innerHTML = moonlightImgItems
})   


otherlight.addEventListener("click", function () {
    phoneCont.innerHTML = otherlightImgItems
})   