function fruits(name) {
    this.name = name;
    this.__proto__ = Object.create(null);
}

function apple() {
    fruits.call(this);
}

apple.prototype = Object.create(fruits.prototype);
const app = new apple('apple');
console.log(app.name);
