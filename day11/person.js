// 기존에 만들던 방식
// const person1 = {
//   name: "상정",
//   age: 42,
// };
// const person2 = {
//   name: "dd",
//   age: 3,
// };
// const person3 = {
//   name: "ff",
//   age: 33,
// };

// 생성자
function person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `안녕하세요. 저는 ${this.name}입니다. 제 나이는 ${this.age}이죠 ㅎㅎ`
    );
  };
}

// 생성자로 만들어진 객체
const personA = new person("상정", 42);
const personB = new person("dd", 3);

console.log("person.name", personA.name);
console.log("person.age", personA.age);
personA.greet();

personB.greet();
