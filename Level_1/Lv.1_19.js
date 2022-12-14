//๐ ์ฝ์์ ๊ฐ์์ ๋ง์

/* ๋ฌธ์  ์ค๋ช
๋ ์ ์ left์ right๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค. 
left๋ถํฐ right๊น์ง์ ๋ชจ๋  ์๋ค ์ค์์, ์ฝ์์ ๊ฐ์๊ฐ ์ง์์ธ ์๋ ๋ํ๊ณ , ์ฝ์์ ๊ฐ์๊ฐ ํ์์ธ ์๋ ๋บ ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

์ ํ ์กฐ๊ฑด 
1 โค left โค right โค 1,000

์์ถ๋ ฅ ์
left	right	result
13	17	43
24	27	52 */

// ๐ My Solution ๐
function solution(left, right) {
  var answer = 0;
  var count = 0;

  for (left; left <= right; left++) {
    for (let i = 1; i <= left; i++) {
      left % i === 0 ? ++count : '';
    }
    count % 2 === 0 ? (answer += left) : (answer -= left);
    count = 0;
  }
  return answer;
}

// test
console.log(solution(13, 17));
// result 43

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. for๋ฌธ์ผ๋ก left๊ฐ right๊ฐ ๋ ๋๊น์ง ๋๋ฉด์ ํด๋น ์์ ์ฝ์์ผ ๊ฒฝ์ฐ ++count
    1-2. count๊ฐ ์ง์์ผ ๊ฒฝ์ฐ, answer์ ํด๋น ์๋ฅผ ๋ํด์ค
    1-3. count๊ฐ ํ์์ผ ๊ฒฝ์ฐ, asnwer์ ํด๋น ์๋ฅผ ๋นผ์ค ํ๋์ ์๊ฐ ๋๋๋ฉด count 0์ผ๋ก setting */

// ๐ Other's Solutions ๐
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - ์ ๊ณฑ๊ทผ์ด ์ ์๋ฉด ํ์  */

/* 2) ์๊ฒ๋ ์ง์
    - ์ ๊ณฑ๊ทผ์ด ์ ์๋ฉด ํ์
    - Number.isInteger(value): ์ฃผ์ด์ง ๊ฐ์ด ์ ์์ธ์ง ํ๋ณํ๋ ํจ์
    ๋งค๊ฐ๋ณ์(parameter)
    1. value: ์ ์์ธ์ง ํ์ธํ๋ ค๋ ๊ฐ. */
