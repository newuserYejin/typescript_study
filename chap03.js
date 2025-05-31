"use strict";
let b = { name: 'nooona' };
let c = { name: 'nooona', age: 23 };
let d = { name: 'ho', isStudent: false };
let e = { name: 'ho', isStudent: false };
const user = {
    id: 1,
    name: 'Alice',
};
const userWithEmail = {
    id: 2,
    name: 'Bob',
    email: 'bob@example.com',
};
// User 타입을 사용하여 아래 객체를 작성하세요.
const user2 = {
    id: 1,
    name: 'Alice',
    address: {
        city: 'Seoul',
        zipCode: 12345,
    },
};
const normalUser = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
};
const adminUser = {
    id: 2,
    name: 'Bob',
    role: 'Administrator',
};
const normalProduct = {
    id: 1,
    name: 'Laptop',
    price: 1000,
};
const discountedProduct = {
    id: 2,
    name: 'Smartphone',
    price: 800,
    discount: 10,
};
// Order 타입을 사용하여 아래 객체를 작성하세요.
const order = {
    orderId: 101,
    products: [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Mouse', price: 50 },
    ],
    totalPrice: 1050,
};
// 아래 객체를 작성하세요.
const admin = {
    id: 1,
    name: 'Alice',
    role: 'Administrator',
};
const guest = {
    id: 2,
    name: 'Bob',
    visitCount: 5,
};
