// 15651. N과 M (3)

// 🏷️ 문제
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
// 1부터 N까지 자연수 중에서 M개를 고른 수열
// 같은 수를 여러 번 골라도 된다.

// 🏷️ 입력
// 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

// 🏷️ 출력
// 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
// 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

// 🏷️ 예제 입출력

// 입력
// 3 1

// 출력
// 1
// 2
// 3

let fs = require("fs");
let input = fs.readFileSync("backtracking_5.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = Array(n)
  .fill()
  .map((v, i) => i + 1);
let selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth == m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i + 1);
    dfs(arr, depth + 1);
    selected.pop();
  }
}
dfs(arr, 0);
console.log(answer);
