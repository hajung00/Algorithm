//๐ K๋ฒ์งธ ์

/* ๋ฌธ์  ์ค๋ช
๋ฐฐ์ด array์ i๋ฒ์งธ ์ซ์๋ถํฐ j๋ฒ์งธ ์ซ์๊น์ง ์๋ฅด๊ณ  ์ ๋ ฌํ์ ๋, k๋ฒ์งธ์ ์๋ ์๋ฅผ ๊ตฌํ๋ ค ํฉ๋๋ค.

์๋ฅผ ๋ค์ด array๊ฐ [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3์ด๋ผ๋ฉด

array์ 2๋ฒ์งธ๋ถํฐ 5๋ฒ์งธ๊น์ง ์๋ฅด๋ฉด [5, 2, 6, 3]์๋๋ค.
1์์ ๋์จ ๋ฐฐ์ด์ ์ ๋ ฌํ๋ฉด [2, 3, 5, 6]์๋๋ค.
2์์ ๋์จ ๋ฐฐ์ด์ 3๋ฒ์งธ ์ซ์๋ 5์๋๋ค.
๋ฐฐ์ด array, [i, j, k]๋ฅผ ์์๋ก ๊ฐ์ง 2์ฐจ์ ๋ฐฐ์ด commands๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, 
commands์ ๋ชจ๋  ์์์ ๋ํด ์์ ์ค๋ชํ ์ฐ์ฐ์ ์ ์ฉํ์ ๋ ๋์จ ๊ฒฐ๊ณผ๋ฅผ ๋ฐฐ์ด์ ๋ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

์ ํ ์กฐ๊ฑด 
array์ ๊ธธ์ด๋ 1 ์ด์ 100 ์ดํ์๋๋ค.
array์ ๊ฐ ์์๋ 1 ์ด์ 100 ์ดํ์๋๋ค.
commands์ ๊ธธ์ด๋ 1 ์ด์ 50 ์ดํ์๋๋ค.
commands์ ๊ฐ ์์๋ ๊ธธ์ด๊ฐ 3์๋๋ค.

์์ถ๋ ฅ ์
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]*/

// ๐ My Solution ๐
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let copy = [...array];
    let splice_array = copy.splice(
      commands[i][0] - 1,
      commands[i][1] - commands[i][0] + 1
    );
    splice_array.sort(function (a, b) {
      return a - b;
    });
    answer.push(splice_array[commands[i][2] - 1]);
  }

  return answer;
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
            1-1. array๋ฅผ commands์ ์ธ๋ฑ์ค 0,1๊ฐ์ ์ด์ฉํด ์๋ฅธ๋ค.(n๋ถํฐ k๊น์ง ์ซ์ ๊ฐ์๋ n-k+1)
            1-2. sort๋ฅผ ์ด์ฉํด ์ค๋ฆ์ฐจ์ ์ ๋ ฌํ๋ค.
            1-3. commands์ ์ธ๋ฑ์ค 2๋ฒ์งธ ์์์ ๊ฐ์ ์ด์ฉํด ํด๋น ๋ฒ์งธ ์ซ์๋ฅผ answer๋ฐฐ์ด์ push  */

// test
console.log(solution([1, 5, 2, 6, 3, 7, 4][([2, 5, 3], [4, 4, 1], [1, 7, 3])]));
// result [5, 6, 3]

// ๐ Other's Solutions ๐
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

/* 1) ์ ๊ทผ ๋ฐฉ๋ฒ
            - ๊ตฌ์กฐ๋ถํดํ ๋น์ผ๋ก command์ ์์๋ฅผ ๊ฐ ๋ณ์์ ์ ์ฅ
            - filter๋ก n๋ถํฐ k๊น์ง ํํฐํ๊ณ  sort๋ก ์ค๋ฆ์ฐจ์ ์ ๋ ฌ
      */
