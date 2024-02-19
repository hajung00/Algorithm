// 10844. 쉬운 계단 수

// 🏷️ 문제
// 45656이란 수를 보자.
// 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.
// N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.

// 🏷️ 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

// 🏷️ 출력
// 첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2

// 출력
// 17

let fs = require("fs");
let input = fs.readFileSync("dynamic_11.txt").toString().split("\n");

let n = Number(input[0]);
let d = Array.from(Array(n + 1), () => Array(10).fill(0));

d[1][0] = 0;
for (let i = 1; i <= 9; i++) {
  d[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    d[i][j] = 0;
    if (j > 0) d[i][j] += d[i - 1][j - 1];
    if (j < 9) d[i][j] += d[i - 1][j + 1];
    d[i][j] %= Number(1e9);
  }
}

let result = 0;
for (let i = 0; i <= 9; i++) {
  result += d[n][i];
  result %= Number(1e9);
}
console.log(result);
