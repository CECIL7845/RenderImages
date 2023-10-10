const imgs = [
    "images/images1.jpeg",
    "images/images2.jpeg",
    "images/image3.jpeg"
]
const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt= "Employee in the company" class= "team-img" src = "${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()