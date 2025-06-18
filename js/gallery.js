function autoChangeImage() {
    let imgArr = document.getElementsByClassName("preview");
    let imgTarget = document.getElementById("image");

    // Sleep delay
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Hàm async chạy slideshow
    async function runSlideshow() {
        while (true) { // Lặp vô hạn
            for (let element of imgArr) {
                imgTarget.style.backgroundImage = 'url("' + element.src + '")';
                imgTarget.innerText = element.alt;
                await sleep(2000); // đợi 2 giây
            }
        }
    }

    runSlideshow(); // gọi hàm để bắt đầu
}

window.onload = autoChangeImage;
