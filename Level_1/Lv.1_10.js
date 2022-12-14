//๐ ์์ธ์์ ๊น์๋ฐฉ ์ฐพ๊ธฐ

/* ๋ฌธ์  ์ค๋ช
Stringํ ๋ฐฐ์ด seoul์ element์ค "Kim"์ ์์น x๋ฅผ ์ฐพ์, "๊น์๋ฐฉ์ x์ ์๋ค"๋ String์ ๋ฐํํ๋ ํจ์, solution์ ์์ฑํ์ธ์. 
seoul์ "Kim"์ ์ค์ง ํ ๋ฒ๋ง ๋ํ๋๋ฉฐ ์๋ชป๋ ๊ฐ์ด ์๋ ฅ๋๋ ๊ฒฝ์ฐ๋ ์์ต๋๋ค.

์ ํ ์กฐ๊ฑด 
seoul์ ๊ธธ์ด 1 ์ด์, 1000 ์ดํ์ธ ๋ฐฐ์ด์๋๋ค.
seoul์ ์์๋ ๊ธธ์ด 1 ์ด์, 20 ์ดํ์ธ ๋ฌธ์์ด์๋๋ค.
"Kim"์ ๋ฐ๋์ seoul ์์ ํฌํจ๋์ด ์์ต๋๋ค.

์์ถ๋ ฅ ์
seoul	return
["Jane", "Kim"]	"๊น์๋ฐฉ์ 1์ ์๋ค" */

// ๐ My Solution ๐
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == 'Kim') {
      return '๊น์๋ฐฉ์ ' + i + '์ ์๋ค';
      break;
    }
  }
}

// test
console.log(solution(['Jane', 'Kim']));
// result "๊น์๋ฐฉ์ 1์ ์๋ค"

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. for๋ฌธ์ ํตํด ๋ฐฐ์ด ๊ธธ์ด ๋งํผ ์คํ
    1-2. ๊ฐ์ด Kim์ธ ์ธ๋ฑ์ค๋ฅผ ์ฐพ์ ์ถ๋ ฅ */

// ๐ Other's Solutions ๐
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return '๊น์๋ฐฉ์ ' + idx + '์ ์๋ค';
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - indexOf๋ก Kim์ ์ธ๋ฑ์ค๋ฅผ ์ฐพ๋๋ค */
