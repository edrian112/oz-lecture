const defaultGenre = "Unknown";
let movie = [];
var count = 0;

// 기본 영화 객체
const newMovie = {
  title: "쎄시봉",
  director: "김현석",
  year: 2014,
  genre: "음악",
};

// 영화 배열
const movies = [
  {
    title: "7년의 밤",
    director: "추창민",
    year: 2018,
    genre: "스릴러",
  },
  {
    title: "소방관",
    director: "곽경택",
    year: 2024,
    genre: "재난",
  },
  {
    title: "영웅",
    director: "윤제균",
    year: 2022,
    genre: "뮤지컬",
  },
];

// 영화 배열(movies)에 영화 객체(movie)를 삽입 (unShift)
movies.unshift(newMovie);

////////////////// splice ver. ///////////////////////
// function addMovies(index, ...newMovies) {
//   movies.splice(index, 0, ...newMovies);
// }

// addMovies(0, newMovie);

// 출력 될 내용 지정
function printMovies(moviesArray) {
  console.log("Movie List :");

  for (let i = 0; i < moviesArray.length; i++) {
    const m = moviesArray[i];
    // 논리연산자 || (or) ver.
    const title = m.title || `Unknown`;
    const director = m.director || `Unknown`;
    const year = m.year || `Unknown`;
    const genre = m.genre || defaultGenre;

    ///////////////////// if 조건문 ver. ////////////////////////////////////
    // let title, director, year, genre;

    // if (m.title) {
    //   title = m.title;
    // } else {
    //   title = "Unknown";
    // }
    // if (m.director) {
    //   title = m.director;
    // } else {
    //   title = "Unknown";
    // }
    // if (m.year) {
    //   title = m.year;
    // } else {
    //   title = "Unknown";
    // }
    // if (m.genre) {
    //   title = m.genre;
    // } else {
    //   title = "Unknown";
    // }
    //////////////////////////////////////////////////////////////////////////

    console.log(
      `${
        i + 1
      }. Title : ${title} Director : ${director} Year : ${year} Genre : ${genre}`
    ); // 출력 문구 설정
    count++; // Total 갯수 출력을 위한 누적값 계산
  }
  console.log("Total : ", moviesArray.length);
}

printMovies(movies);

// 도전과제

// 장르 검색

///////////// 전통적 for문 ver. /////////////////////////
function findMovieByGenre(genreToFind) {
  console.log(`Genre Search: ${genreToFind}`);

  let found = false;

  for (let i = 0; i < movies.length; i++) {
    const m = movies[i];
    if (m.genre === genreToFind) {
      console.log(
        `${i + 1}. Title : ${m.title} Director : ${m.director} Year : ${
          m.year
        } Genre : ${m.genre}`
      );
      found = true;
    }
  }
  if (!found) {
    console.log(`No movies found for genre: ${genreToFind}`);
  }
}

///////////////// filter () ver. ///////////////////////////////
// function findMoviesByGenre(genreToFind) {
//   console.log(`Genre Search: ${genreToFind}`);

//   const result = movies.filter(m => m.genre === genreToFind);

//   if (result.length > 0) {
//     result.forEach((m, i) => {
//       console.log(
//         `${i + 1}. Title: ${m.title}, Director: ${m.director}, Year: ${m.year}, Genre: ${m.genre}`
//       );
//     });
//   } else {
//     console.log(`No movies found for genre: ${genreToFind}`);
//   }
// }

// 통계 계산

/////////////////// 함수표현식 ver. ////////////////
const calculateAverageYear = function (moviesArray) {
  ////////////////////////////////////////////////

  ///////////////// 함수 선언문 ver. /////////////////
  // function calculateAverageYear(moviesArray) {
  /////////////////////////////////////////////////

  ///////////////// 화살표 ver. /////////////////////
  // const calculateAverageYear = (moviesArray) => {
  /////////////////////////////////////////////////
  let sum = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    sum += moviesArray[i].year;
  }

  const avg = Math.round(sum / moviesArray.length);
  console.log(`Average Year: ${avg}`);
};

// 최신 영화 검색

// const findNewestMovie = function (moviesArray) {
const findNewestMovie = (moviesArray) => {
  let newest = moviesArray[0];

  for (let i = 1; i < moviesArray.length; i++) {
    if (moviesArray[i].year > newest.year) {
      newest = moviesArray[i];
    }
  }

  console.log(`Newest Movie: ${newest.title} (${newest.year})`);
};

// 도전과제 출력식
// findMovieByGenre(genreToFind);
findMovieByGenre("뮤지컬");
calculateAverageYear(movies);
findNewestMovie(movies);
