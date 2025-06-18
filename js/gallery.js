function autoChangeImage() {
    //Take list of image that have class = preview
    let imgArr = document.getElementsByClassName("preview");

    //Take target 
    let imgTarget = document.getElementById("image");

    for (let element of imgArr) {
        imgTarget.style.backgroundImage = 'url("' + element.src + '")';
        imgTarget.innerText = element.alt;
    };
}