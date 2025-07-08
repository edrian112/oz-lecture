// 기본 정보
const NAME = "이상정";
var age = 42;
let national = "미국";
national = "일본";
national = "중국";
national = "대한민국";
let isKorean = true;
const JOB = null;
let hobby = ["독서", "베이스연주", "영화보기", "달리기", "여행", null];

// 객체
let hobbyObj = {
  reading: hobby[0],
  bass: "베이스연주",
  movie: hobby[2],
  running: hobby[3],
  travling: hobby[4],
};

// 간단 출력
console.log("기본 정보");
console.log("\n\t이름: ", NAME);
console.log("\t나이: ", age);
console.log("\t국적: ", national);
console.log("\t국적 여부: ", isKorean);
console.log("\t직업: ", JOB);
console.log(`\t취미: ${hobby.join(", ")}`);

// 전체 출력
console.log(`안녕하새요. ${NAME}입니다. 나이는 ${age}세 이고,
국적은 ${national}이며, 최근에는 매일 ${hobbyObj.bass}와 ${hobbyObj.running}를 하고 있습니다.`);

// typeof 출력
console.log("\n=== 출력 데이터 타입 확인 ===");

console.log("\nNAME:", typeof NAME);
console.log("age:", typeof age);
console.log("national:", typeof national);
console.log("isKorean:", typeof isKorean);
console.log("JOB:", typeof JOB);
console.log("hobby:", typeof hobby);
console.log("hobbyObj:", typeof hobbyObj);
console.log("hobby.length", hobby.length);

// null과 undefined 구분
console.log("\n=== null과 undefined 구분 ===");

let a = null;
let b;

console.log("a:", a);
console.log("b:", b);
console.log("typeof a:", typeof a);
console.log("typeof b:", typeof b);
console.log("a === b:", a === b);

// 객체에 email 속성 추가
console.log("\n=== 객체에 email 추가===");
hobbyObj.email = null;

console.log("email", hobbyObj.email);
console.log("email type:", typeof hobbyObj.email);
console.log("hobbyObj.length", Object.keys(hobbyObj).length);

console.log("\n=== 객체 email 속성 확인 ===");

if (hobbyObj.email === null) {
  console.log("hobbyObj.email은 null입니다.");
} else {
  console.log("hobbyObj.email은 null이 아닙니다.");
}
