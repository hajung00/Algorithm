//๐ ์๋ ์ซ์ ๋ํ๊ธฐ

/* ๋ฌธ์  ์ค๋ช
0๋ถํฐ 9๊น์ง์ ์ซ์ ์ค ์ผ๋ถ๊ฐ ๋ค์ด์๋ ์ ์ ๋ฐฐ์ด numbers๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค. 
numbers์์ ์ฐพ์ ์ ์๋ 0๋ถํฐ 9๊น์ง์ ์ซ์๋ฅผ ๋ชจ๋ ์ฐพ์ ๋ํ ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

์ ํ ์กฐ๊ฑด 
1 โค numbers์ ๊ธธ์ด โค 9
0 โค numbers์ ๋ชจ๋  ์์ โค 9
numbers์ ๋ชจ๋  ์์๋ ์๋ก ๋ค๋ฆ๋๋ค.

์์ถ๋ ฅ ์
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6 */

// ๐ My Solution ๐
function solution(numbers) {
  const sum = numbers.reduce((arr, i) => arr + i);
  const answer = sum === 45 ? '' : 45 - sum;
  return answer;
}

// test
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
// result 14

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. reduce๋ก numbers์ ๋ชจ๋  ๋ฐฐ์ด ๊ฐ์ ๋ํด sum์ ํ ๋น
    1-2. 0~9 ๋ชจ๋ ๋ํ ๊ฐ์ธ 45์ ๋น๊ตํด ๋ค๋ฅผ ๊ฒฝ์ฐ 45์์ sum์ ๋บ ๊ฐ์ return */

// ๐ Other's Solutions ๐
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - 0~9๊น์ง์ ์ซ์๋ฅผ includesํจ์๋ฅผ ์ด์ฉํด ์์ ๊ฒฝ์ฐ answer์ ๋ํด์ค */

/* 2) ์๊ฒ๋ ์ง์
    - Array.includes(searchElement): ๋ฐฐ์ด์ ํด๋น ๊ฐ์ด ์กด์ฌํ๋์ง ์ฌ๋ถ์ ๋ฐ๋ผ true, false๋ฅผ ๋ฐํํ๋ ํจ์
    ๋งค๊ฐ๋ณ์(parameter)
    1. searchElement: ์ฐพ๋ ๊ฐ */
