// 논리 연산자
let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("ismathLowAvg", isMathLowAvg);

let isEngLowAvg = english < avg;
console.log("isEngLowAvg", isEngLowAvg);

// 수학이 평균보다 낮고, 영어도 평균보다 낮아?  (and)
console.log(isMathLowAvg && isEngLowAvg);

// 수학이 평균보다 낮거나, 영어가 평균보다 낮아?    (or)
console.log(isMathLowAvg || isEngLowAvg);

console.log("!false", !false);
console.log("!true", !true);
