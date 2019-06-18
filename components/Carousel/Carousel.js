class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftButton = carouselElement.querySelector(".carousel .left-button");
        this.rightButton= carouselElement.querySelector(".carousel .right-button");
        this.index = 0;
        this.image = carouselElement.querySelectorAll("img")[this.index];
        this.image.style.display = "block";
        this.images = carouselElement.querySelectorAll(".carousel img");
        this.rightButton.addEventListener("click", () => {
            this.imageRight();
        });
        this.leftButton.addEventListener("click", () => {
            this.imageLeft();
        });
    }

    hide(){
        this.images.forEach(item => {
            item.style.display = "none";
        });
    }

    show(){
        this.images[this.index].style.display = "block";
    }
    imageRight() {
        if (this.index <Array.from(this.images).length - 1) {
            this.index++;
            this.hide();
            this.show();
        }
    }
    imageLeft() {
        if (this.index > 0) {
            this.index--;
            this.hide();
            this.show();
        }
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel.forEach(carouselElement => new Carousel(carouselElement)); 