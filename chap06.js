"use strict";
function calculateDiscountedPrice(item) {
    return (item.price * (100 - item.discountPercentage)) / 100;
}
// 테스트 코드
const discountedProduct1 = {
    id: 101,
    name: 'Laptop',
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct1)); // 800
function printOrderSummary(order) {
    return `Order ${order.orderId} (Phone: ${order.phone})`;
}
// 테스트 코드
const orderDetails = {
    phone: '123-456-7890',
    address: '123 Main St',
    orderId: 2023,
    items: ['Laptop', 'Mouse'],
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return Object.assign(Object.assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin}`;
}
// 테스트 코드
const profile = { id: 1, name: 'Alice', email: 'alice@example.com' };
const activity = {
    lastLogin: new Date('2024-01-01T10:00:00Z'),
    actions: ['login', 'viewed dashboard', 'logout'],
};
const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
