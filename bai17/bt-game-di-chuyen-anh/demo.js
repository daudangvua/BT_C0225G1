class Hero {
    constructor(image, top, left, size, speed = 20) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }

    // Phương thức tạo thẻ ảnh của nhân vật
    getHeroElement() {
        return `<img width="${this.size}" height="${this.size}" src="${this.image}" 
                style="top: ${this.top}px; left: ${this.left}px; position: absolute;" />`;
    }

    // Di chuyển sang phải
    moveRight() {
        if (this.left + this.size < window.innerWidth) {
            this.left += this.speed;
        }
    }

    // Di chuyển sang trái
    moveLeft() {
        if (this.left > 0) {
            this.left -= this.speed;
        }
    }

    // Di chuyển xuống dưới
    moveDown() {
        if (this.top + this.size < window.innerHeight) {
            this.top += this.speed;
        }
    }

    // Di chuyển lên trên
    moveUp() {
        if (this.top > 0) {
            this.top -= this.speed;
        }
    }
}
let hero = new Hero('ca.png', 100, 100, 100);

// Hàm cập nhật vị trí của nhân vật trên giao diện
function updateScreen() {
    document.getElementById('Game').innerHTML = hero.getHeroElement();
}

// Lắng nghe sự kiện bàn phím
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowRight":
            hero.moveRight();
            break;
        case "ArrowLeft":
            hero.moveLeft();
            break;
        case "ArrowUp":
            hero.moveUp();
            break;
        case "ArrowDown":
            hero.moveDown();
            break;
    }
    updateScreen(); // Cập nhật hình ảnh sau mỗi lần di chuyển
});

// Hiển thị nhân vật ban đầu
updateScreen();
