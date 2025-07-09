// 삼항 연산자
let score = 90;
let grade = score >= 90 ? "a+" : "a";
console.log(grade);

let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("ismathLowAvg", isMathLowAvg);

let isEngLowAvg = english < avg;
console.log("isEngLowAvg", isEngLowAvg);

let avgMathGrade = isMathLowAvg ? "수학점수 평균 이하" : "수학점수 평균 이상";
console.log("avgMathGrade", avgMathGrade);

let avgEngGrade = isEngLowAvg ? "영어점수 평균 이하" : "영어점수 평균 이상";
console.log("영어점수", avgEngGrade);
