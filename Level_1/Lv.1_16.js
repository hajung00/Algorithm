//๐ ์์ ๋ํ๊ธฐ

/* ๋ฌธ์  ์ค๋ช
์ด๋ค ์ ์๋ค์ด ์์ต๋๋ค. 
์ด ์ ์๋ค์ ์ ๋๊ฐ์ ์ฐจ๋ก๋๋ก ๋ด์ ์ ์ ๋ฐฐ์ด absolutes์ ์ด ์ ์๋ค์ ๋ถํธ๋ฅผ ์ฐจ๋ก๋๋ก ๋ด์ ๋ถ๋ฆฌ์ธ ๋ฐฐ์ด signs๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค. 
์ค์  ์ ์๋ค์ ํฉ์ ๊ตฌํ์ฌ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

์ ํ ์กฐ๊ฑด 
absolutes์ ๊ธธ์ด๋ 1 ์ด์ 1,000 ์ดํ์๋๋ค.
absolutes์ ๋ชจ๋  ์๋ ๊ฐ๊ฐ 1 ์ด์ 1,000 ์ดํ์๋๋ค.
signs์ ๊ธธ์ด๋ absolutes์ ๊ธธ์ด์ ๊ฐ์ต๋๋ค.
signs[i] ๊ฐ ์ฐธ์ด๋ฉด absolutes[i] ์ ์ค์  ์ ์๊ฐ ์์์์, ๊ทธ๋ ์ง ์์ผ๋ฉด ์์์์ ์๋ฏธํฉ๋๋ค.

์์ถ๋ ฅ ์
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0 */

// ๐ My Solution ๐
function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = absolutes[i] * -1;
    }
  }
  const result = absolutes.reduce((arr, i) => arr + i);
  return result;
}

// test
console.log(solution([4, 7, 12][(true, false, true)]));
// result 9

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
     1-1. signs๊ฐ true์ผ๋, absolutes๊ทธ๋๋ก, false์ผ๋, -๋ถ์ด๊ธฐ
     1-2. ์๋กญ๊ฒ ๋ฐํ๋ absolutes๋ฐฐ์ด๊ฐ reduce๋ก ๋ค ๋ํ๊ธฐ */

// ๐ Other's Solutions ๐
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - ์์ ๋์ผ */
