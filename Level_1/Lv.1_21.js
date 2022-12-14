//๐ 3์ง๋ฒ ๋ค์ง๊ธฐ

/* ๋ฌธ์  ์ค๋ช
์์ฐ์ n์ด ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง๋๋ค. 
n์ 3์ง๋ฒ ์์์ ์๋ค๋ก ๋ค์ง์ ํ, ์ด๋ฅผ ๋ค์ 10์ง๋ฒ์ผ๋ก ํํํ ์๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

์ ํ ์กฐ๊ฑด 
n์ 1 ์ด์ 100,000,000 ์ดํ์ธ ์์ฐ์์๋๋ค.

์์ถ๋ ฅ ์
45	7
125	229 */

// ๐ My Solution ๐
function solution(n) {
  var array = [];
  let answer = 0;
  let a = 1;
  while (n > 0) {
    array.push(n % 3);
    n = parseInt(n / 3);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      a *= 3;
    }
    answer += array[i] * a;
    a = 1;
  }
  return answer;
}

// test
console.log(solution(45));
// result 7

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. array์ 3์ง๋ฒ์ผ๋ก ๋ฐ๊พผ ์ซ์ ๋ฃ์ด์ค(๋๋จธ์ง๊ฐ ์์๋๋ก ๋ค์ด๊ฐ๊ธฐ ๋๋ฌธ์ ๋ค์งํ์๋ ์ํ)
    1-2. 3์ 0์น, 1์น, 2์น ... ํด์ฃผ๊ธฐ ์ํด for๋ฌธ ์ด์ฉ
    1-3. answer์ 3์ n์น๊ณผ array[n]์ ๋ฐฐ์ด ๊ฐ์ ๊ณฑํ ๊ฐ์ ์ฐจ๋ก๋๋ก ๋ํด์ค */

// ๐ Other's Solutions ๐
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. toString์ผ๋ก 3์ง์ ๋ณํ 
    1-2. reverse๋ก ๋ค์ง์ด์ค
    1-3. ๋ฐฐ์ด์ join์ผ๋ก ํฉ์ณ์ฃผ๊ณ  parseInt๋ก 3์ง์๋ก ๋ณํ */

/* 2) ์๊ฒ๋ ์ง์
    - parseInt(string, radix): ๋ฌธ์์ด ์ธ์๋ฅผ ํ์ฑํ์ฌ ํน์  ์ง์(์์ ์ง๋ฒ ์ฒด๊ณ์์ ๊ธฐ์ค์ด ๋๋ ๊ฐ)์ ์ ์๋ฅผ ๋ฐํํฉ๋๋ค.
    ๋งค๊ฐ๋ณ์(parameter)
    1. string: ํ์ฑํ  ๊ฐ์๋๋ค. 
    2. radix(Optional): string์ ์ง์๋ฅผ ๋ํ๋ด๋ 2๋ถํฐ 36๊น์ง์ ์ ์ 
    - toString(): ๊ธฐ์๋ฅผ ์ด์ฉํจ์ผ๋ก์จ 10์ง์๋ฅผ (1, 2, 3, 4, 5...) ๋ค๋ฅธ ์ง์๋ก ๋ณํํ  ์ ์์
      ex)let baseTenInt = 10;
      console.log(baseTenInt.toString(2)); */
