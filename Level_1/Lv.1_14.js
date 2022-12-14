//๐ ๋๋์ด ๋จ์ด์ง๋ ์ซ์ ๋ฐฐ์ด

/* ๋ฌธ์  ์ค๋ช
array์ ๊ฐ element ์ค divisor๋ก ๋๋์ด ๋จ์ด์ง๋ ๊ฐ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ ๋ฐฐ์ด์ ๋ฐํํ๋ ํจ์, solution์ ์์ฑํด์ฃผ์ธ์.
divisor๋ก ๋๋์ด ๋จ์ด์ง๋ element๊ฐ ํ๋๋ ์๋ค๋ฉด ๋ฐฐ์ด์ -1์ ๋ด์ ๋ฐํํ์ธ์.

์ ํ ์กฐ๊ฑด 
arr์ ์์ฐ์๋ฅผ ๋ด์ ๋ฐฐ์ด์๋๋ค.
์ ์ i, j์ ๋ํด i โ  j ์ด๋ฉด arr[i] โ  arr[j] ์๋๋ค.
divisor๋ ์์ฐ์์๋๋ค.
array๋ ๊ธธ์ด 1 ์ด์์ธ ๋ฐฐ์ด์๋๋ค.

์์ถ๋ ฅ ์
arr	divisor	return
[5, 9, 7, 10]	5	[5, 10]
[2, 36, 1, 3]	1	[1, 2, 3, 36]
[3,2,6]	10	[-1] */

// ๐ My Solution ๐
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0 ; i<arr.length ;i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        } 
    }
    
   if(answer.length===0){
       answer.push(-1)
   }
    return answer.sort(function(a, b) => a-b)
}

// test
console.log(solution([5, 9, 7, 10], 5));
// result [5, 10]

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - for๋ฌธ ์ฌ์ฉ */

// ๐ Other's Solutions ๐
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
    - filter ์ฌ์ฉ */
