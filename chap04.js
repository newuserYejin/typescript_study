"use strict";
// enum 타입
// 특정 값을 타입으로 지정할때 쓰는게 enum
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender || (Gender = {}));
let gender = Gender.FEMALE;
// const enum과 enum의 차이
/*
원초의 enum은 ts에서만 존재하는개념으로 js에는 존재하지 않는다.
따라서, js로의 변환 과정에서 사용하지 않는 변수를 빼고 변환하는
tree shaking이 되지 않는다.

===> 사용하지 않아도 일단 다 만들어둠

그에 비해 const enum은 상수로 인식되어 tree shaking대상에
포함되어 js로 변환시 코드가 깔끔해지지만, 추후에 js만을 보고 디버깅 시
변수의 출처를 알기 어려워진다.
*/
// 문제 1번. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
/*
작업의 상태는 다음과 같습니다:

Pending: 대기 중
InProgress: 진행 중
Completed: 완료됨
상태에 따라 다음 메시지를 반환하세요:

Pending: "작업이 대기 중입니다."
InProgress: "작업이 진행 중입니다."
Completed: "작업이 완료되었습니다."
*/
// 작업 상태를 나타내는 enum을 작성하세요.
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "\uB300\uAE30 \uC911";
    TaskStatus["InProgress"] = "\uC9C4\uD589 \uC911";
    TaskStatus["Completed"] = "\uC644\uB8CC\uB428";
})(TaskStatus || (TaskStatus = {}));
function getStatusMessage(status) {
    // 여기에 구현
    if (status === TaskStatus.Pending) {
        return '작업이 대기 중입니다.';
    }
    else if (status === TaskStatus.InProgress) {
        return '작업이 진행 중입니다.';
    }
    else if (status === TaskStatus.Completed) {
        return '작업이 완료되었습니다.';
    }
    else {
        return '작업 상황을 알 수 없습니다.';
    }
}
// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."
// 문제 2. 아래 조건에 따라 함수를 작성하세요.
/*
1. 작업 상태를 나타내는 enum:

  Pending: 작업 대기 중
  InProgress: 작업 진행 중
  Completed: 작업 완료
  Failed: 작업 실패

2. 함수의 요구사항:

  함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
  input은 문자열이어야 합니다.
  문자열을 작업 상태에 따라 가공합니다:
  Pending: 문자열을 모두 대문자로 변환.
  InProgress: 문자열을 소문자로 변환.
  Completed: 문자열 앞에 "완료: "를 추가.
  Failed: 에러를 발생시킵니다.
  작업 상태가 Failed면 에러를 발생시켜야 합니다.
  최종 결과로 가공된 문자열 배열을 반환합니다.
*/
// 작업 상태를 나타내는 enum 작성
var TaskStatus2;
(function (TaskStatus2) {
    TaskStatus2["Pending"] = "\uC791\uC5C5 \uB300\uAE30 \uC911";
    TaskStatus2["InProgress"] = "\uC791\uC5C5 \uC9C4\uD589 \uC911";
    TaskStatus2["Completed"] = "\uC791\uC5C5 \uC644\uB8CC";
    TaskStatus2["Failed"] = "\uC791\uC5C5 \uC2E4\uD328";
})(TaskStatus2 || (TaskStatus2 = {}));
function processTask(status, input) {
    // 여기에 구현
    if (typeof input !== 'string') {
        return '입력값은 문자열이여야 합니다.';
    }
    switch (status) {
        case TaskStatus2.Pending:
            return input.toUpperCase();
        case TaskStatus2.InProgress:
            return input.toLowerCase();
        case TaskStatus2.Completed:
            return '완료 : ' + input;
        case TaskStatus2.Failed:
            return '작업이 실패했습니다.';
        // throw new Error('작업이 실패했습니다.');
    }
}
// 테스트 코드
console.log(processTask(TaskStatus2.Pending, 'task1'));
// 기대 출력: "TASK1"
console.log(processTask(TaskStatus2.InProgress, 'TaskA'));
// 기대 출력: "taska"
console.log(processTask(TaskStatus2.Completed, 'Report1'));
// 기대 출력: "완료: Report1"
console.log(processTask(TaskStatus2.Failed, 'TaskX'));
// 에러: 작업이 실패했습니다.
console.log(processTask(TaskStatus2.Pending, 42));
// 에러: 입력값은 문자열이어야 합니다.
// 문제 3. 아래 조건에 따라 코드를 작성하세요.
/*

1. 로그 수준을 나타내는 enum을 작성하세요:

  Info
  Error
  Debug

2. 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

  message: 로그 메시지 (문자열)
  level: 로그 수준 (enum 값)
  반환값이 없습니다. (void 타입)

3. 작성한 타입과 enum을 사용해 함수를 구현하세요:

  로그 수준에 따라 다른 메시지를 출력합니다.
    Info: [INFO] 메시지 앞에 [INFO] 출력
    Error: 메시지 앞에 [ERROR] 출력
    Debug: 메시지 앞에 [DEBUG] 출력

*/
// 로그 수준을 나타내는 enum 작성
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Error"] = "Error";
    LogLevel["Debug"] = "Debug";
})(LogLevel || (LogLevel = {}));
// 로그 함수 구현
const logMessage = (message, level) => {
    // 여기에 구현
    switch (level) {
        case LogLevel.Info:
            console.log('[INFO] ' + message);
            break;
        case LogLevel.Error:
            console.log('[ERROR] ' + message);
            break;
        case LogLevel.Debug:
            console.log('[DEBUG] ' + message);
            break;
    }
};
// 테스트 코드
logMessage('시스템이 시작되었습니다.', LogLevel.Info);
logMessage('네트워크 연결 실패!', LogLevel.Error);
logMessage('디버깅 모드 활성화', LogLevel.Debug);
