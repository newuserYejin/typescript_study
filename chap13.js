"use strict";
// 1. Omit => 뺀디.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const updateAddress = (address) => {
    console.log('address : ', address);
};
// 함수 작성
function updateUserForm(user, updates) {
    // 여기에 구현
    return Object.assign(Object.assign({}, user), updates);
}
// 테스트 코드
const currentUser = { name: 'Alice', email: 'alice@example.com', password: '1234' };
const updatedForm = { email: 'new-email@example.com' };
console.log(updateUserForm(currentUser, updatedForm));
// 함수 작성
function getProfileSummary(user) {
    //js로 변환시에는 입력 탕비 제한이 사라지기 때문에 직접 구현해야한다.
    return { id: user.id, name: user.name };
}
// 테스트 코드
const userProfile = { id: 1, name: 'Alice', email: 'alice@example.com', address: '123 Main St' };
console.log(getProfileSummary(userProfile));
// 함수 작성
function filterSensitiveInfo(user) {
    // 여기에 구현
    const { password } = user, info = __rest(user, ["password"]);
    return info;
}
// 테스트 코드
const userInfo = { name: 'Alice', email: 'alice@example.com', password: '1234', role: 'admin' };
console.log(filterSensitiveInfo(userInfo));
// 1. `createTeamMember` 함수 작성
function createTeamMember(data) {
    // 여기에 구현
    let newMember = {
        id: 0,
        name: '',
        email: '',
        role: 'developer',
        isActive: true,
    };
    return Object.assign(Object.assign({}, newMember), data);
}
// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(members, filter) {
    // 여기에 구현
    return members.filter((member) => member.role === filter.role && member.isActive == filter.isActive);
}
// 3. `removeSensitiveInfo` 함수 작성
function removeSensitiveInfo(members) {
    // 여기에 구현
    return members.map((_a) => {
        var { email } = _a, rest = __rest(_a, ["email"]);
        return rest;
    });
}
// 테스트 코드
const members = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'developer', isActive: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'designer', isActive: false },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'manager', isActive: true },
];
// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: 'Diana' });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }
// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, { role: 'designer', isActive: true });
console.log(activeDesigners);
// 기대 출력: []
// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]
