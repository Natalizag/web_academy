import './lesson_14.scss';

function findMax(obj) {
    let maxValue = 0;
    let maxKey;
    for (let key in obj) {
        console.log(key, obj[key]);
        if (maxValue < obj[key]) {
            maxValue = obj[key];
            maxKey = key;
        }
    }

    return maxKey;
}

const salaries = {
    john: 100,
    jack: 25,
    robert: 55,
    jakob: 50,
};

console.log(findMax(salaries));

const products = [
    {
        title: 'IPHONE',
        price: 2400,
    },

    {
        title: 'SAMSUNG',
        price: 2200,
    },

    {
        title: 'IPHONE11',
        price: 2700,
    },

    {
        title: 'XIAOMI',
        price: 200,
    },
];

function findMaxProduct(arr) {
    let maxProduct = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxProduct.price < arr[i].price) {
            maxProduct = arr[i];
        }
    }
    return maxProduct;
}

console.log(findMaxProduct(products));


/*let user1 = {
    name: 'John',
};
let user2 = user1;

let user3 = Object.assign({}, user1);*/

function greeting() {
    console.log('HELLO ' + this.name + '!');
    console.log(' your salary is ' + this.salary + '$');
}

let user1 = {
    name: 'John',
    salary: 100,
    greet: greeting,
};

let user2 = {
    name: 'Jack',
    salary: 200,
    greet: greeting,
};

user1.greet();
user2.greet();

