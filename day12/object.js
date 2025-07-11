console.log("객체실습");

const person = {
  name: {
    firstName: "Gildong",
    LastName: "Hong",
  },
  age: 20,
  isAdult: true,
  getFullName: function (isKorean = false) {
    const fullName = isKorean;

    return `${this.name.firstName} ${this.name.LastName}`;
  },
  printInfo: function () {
    console.log("printInfo");
    console.log(`name: ${this.name.firstName} ${this.name.LastName}`);
    console.log(`age: ${age}`);
    console.log(`isAdult: ${isAdult}`);
  },
};

console.log(person);

// person age, isAdult 조회
console.log("객체에서 . 사용하여 접근"); // 객체에서는 주로 이 방법 사용
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("isAdult :", isAdult);

console.log("객체에서 [key] 사용하여 접근");
let age2 = person["age"];
console.log("age2 :", age2);
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("isAdult2 :", isAdult2);

// 객체에서 키가 무엇인지 모르지만 어쨌든 모든 값을 꺼낼 때, []을 사용
let keys = [];
for (const key in person) {
  keys.push(key);
}
console.log(keys);

// console.log(keys[0]);
// const keyFirstValue = person[keys[0]];

for (const key of keys) {
  console.log("key", key);
  console.log("person[key]", person[key]);
}

// 객체 내의 함수 사용하기
person.printInfo();

const getFullName = person.getFullName();
console.log("fullName: ", getFullName);

// 객체에 속성 추가 / 삭제
// 추가
person.like = "apple";
person.KoreaAge = 22;
person.likes = ["tt", "coffee", 2, true];
// 삭제
delete person.isAdult;

console.log(person);
