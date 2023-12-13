// 1789. 수들의 합

// 🏷️ 문제
// 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

// 🏷️ 입력
// 첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.

// 🏷️ 출력
// 첫째 줄에 자연수 N의 최댓값을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 200

// 출력
// 19

let fs = require("fs");
let input = fs.readFileSync("greedy_6.txt").toString().split("\n");

let n = Number(input[0]);
let answer = -1;
let sum = 0;

for (let i = 1; sum <= n; i++) {
  sum += i;
  answer++;
}

console.log(answer);
