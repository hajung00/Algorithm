//๐ ์ ์ผ ์์ ์ ์ ๊ฑฐํ๊ธฐ

/* ๋ฌธ์  ์ค๋ช
์ ์๋ฅผ ์ ์ฅํ ๋ฐฐ์ด, arr ์์ ๊ฐ์ฅ ์์ ์๋ฅผ ์ ๊ฑฐํ ๋ฐฐ์ด์ ๋ฆฌํดํ๋ ํจ์, solution์ ์์ฑํด์ฃผ์ธ์. 
๋จ, ๋ฆฌํดํ๋ ค๋ ๋ฐฐ์ด์ด ๋น ๋ฐฐ์ด์ธ ๊ฒฝ์ฐ์ ๋ฐฐ์ด์ -1์ ์ฑ์ ๋ฆฌํดํ์ธ์. ์๋ฅผ๋ค์ด arr์ด [4,3,2,1]์ธ ๊ฒฝ์ฐ๋ [4,3,2]๋ฅผ ๋ฆฌํด ํ๊ณ , [10]๋ฉด [-1]์ ๋ฆฌํด ํฉ๋๋ค.

์ ํ ์กฐ๊ฑด 
arr์ ๊ธธ์ด 1 ์ด์์ธ ๋ฐฐ์ด์๋๋ค.
์ธ๋ฑ์ค i, j์ ๋ํด i โ  j์ด๋ฉด arr[i] โ  arr[j] ์๋๋ค.

์์ถ๋ ฅ ์
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1] */

// ๐ My Solution ๐
function solution(arr) {
  let min = arr[0];
  let minIndex = 0;

  if (arr.length === 1) return [-1];
  else {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIndex = i;
      }
    }
    arr.splice(minIndex, 1);
    return arr;
  }
}

// test
console.log(solution([4, 3, 2, 1]));
// result [4,3,2]

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    1-1. arr์ ๊ธธ์ด๊ฐ 1์ผ ๊ฒฝ์ฐ -1 return
    1-2. min์ arr์ฒซ๋ฒ์งธ ๊ฐ์ ๋ฃ๊ณ  for๋ฌธ์ผ๋ก arr์ ๊ธธ์ด๋งํผ ๋๋ฉฐ ๊ฐ์ฅ ์์ arr์ ๊ฐ์ ์ฐพ์
    1-3. arr์ ๊ฐ์ฅ ์์ ๊ฐ์ min์ ํ ๋นํ๊ณ  ๊ทธ๋์ ์ธ๋ฑ์ค ๊ฐ์ minIndex์ ํ ๋น
    1-4. splice๋ก ํด๋น minIndex์ ๊ฑฐ */

// ๐ Other's Solutions ๐
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - ์์ ๋์ผ
  
/* 2) ์๊ฒ๋ ์ง์
    - Math.min() : ์ต์๊ฐ์ ์ฐพ์์ฃผ๋ ๋ด์ฅํจ์
        ex) Math.min(1,2,3,4,5) // result = 1
    - Array.indexOf(searchElement[, fromIndex]): ์ธ์๋ก ๋ฐ์ ๊ฐ์ ์ฐพ์ ๋ง๋ ์๋ณ์ ๋ฐํ
      ๋งค๊ฐ๋ณ์(parameter)
      searchElement: ์ฐพ์ผ๋ ค๋ ๊ฐ
ย      fromIndex: ๊ฒ์์ ์์ํ  index (์๋ ฅํ์ง ์์ผ๋ฉด 0๋ถํฐ ๊ฒ์์ ์์)
        ex) let arr = [1,2,3,4]
           arr.indexOf(2) // result = 1 */
