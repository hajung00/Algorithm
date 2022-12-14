//๐ ๋ฌธ์์ด ๋ด p์ y์ ๊ฐ์

/* ๋ฌธ์  ์ค๋ช
๋๋ฌธ์์ ์๋ฌธ์๊ฐ ์์ฌ์๋ ๋ฌธ์์ด s๊ฐ ์ฃผ์ด์ง๋๋ค. s์ 'p'์ ๊ฐ์์ 'y'์ ๊ฐ์๋ฅผ ๋น๊ตํด ๊ฐ์ผ๋ฉด True, ๋ค๋ฅด๋ฉด False๋ฅผ return ํ๋ solution๋ฅผ ์์ฑํ์ธ์. 'p', 'y' ๋ชจ๋ ํ๋๋ ์๋ ๊ฒฝ์ฐ๋ ํญ์ True๋ฅผ ๋ฆฌํดํฉ๋๋ค. ๋จ, ๊ฐ์๋ฅผ ๋น๊ตํ  ๋ ๋๋ฌธ์์ ์๋ฌธ์๋ ๊ตฌ๋ณํ์ง ์์ต๋๋ค.
์๋ฅผ ๋ค์ด s๊ฐ "pPoooyY"๋ฉด true๋ฅผ returnํ๊ณ  "Pyy"๋ผ๋ฉด false๋ฅผ returnํฉ๋๋ค

์ ํ ์กฐ๊ฑด 
๋ฌธ์์ด s์ ๊ธธ์ด : 50 ์ดํ์ ์์ฐ์
๋ฌธ์์ด s๋ ์ํ๋ฒณ์ผ๋ก๋ง ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.

์์ถ๋ ฅ ์
s	answer
"pPoooyY"	true
"Pyy"	false */

// ๐ My Solution ๐
function solution(s) {
  let p = 0,
    y = 0;
  console.log(s.toUpperCase());
  let arr = s.toUpperCase().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'P') p++;
    else if (arr[i] === 'Y') y++;
  }

  return p === y ? true : false;
}

// test
console.log(solution('pPoooyY'));
// result true

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. toUpperCase()๋ฅผ ์ด์ฉํด ๋ค ๋๋ฌธ์๋ก ๋ณ๊ฒฝ
    1-2. ๋ฐฐ์ด๋ก ์ ์ฅ ํ p์ y์ ๊ฐ์๋ฅผ ๊ตฌํจ
    1-3. p์ y๊ฐ ๊ฐ์ผ๋ฉด true ์๋๋ฉด false */

// ๐ Other's Solutions ๐
function numPY(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. split(P)ํ๋ฉด P๋ฅผ ๊ธฐ์ค์ผ๋ก split๋๊ธฐ ๋๋ฌธ์ P์ ๊ฐ์ +1
    1-2. split(P)ํ๋ฉด Y๋ฅผ ๊ธฐ์ค์ผ๋ก split๋๊ธฐ ๋๋ฌธ์ Y์ ๊ฐ์ +1
    1-3. ๋๊ฐ๊ฐ ๊ฐ์ผ๋ฉด true */
