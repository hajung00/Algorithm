// 1058. 친구

// 🏷️ 문제
// 지민이는 세계에서 가장 유명한 사람이 누구인지 궁금해졌다. 가장 유명한 사람을 구하는 방법은 각 사람의 2-친구를 구하면 된다. 어떤 사람 A가 또다른 사람 B의 2-친구가 되기 위해선, 두 사람이 친구이거나, A와 친구이고, B와 친구인 C가 존재해야 된다. 여기서 가장 유명한 사람은 2-친구의 수가 가장 많은 사람이다. 가장 유명한 사람의 2-친구의 수를 출력하는 프로그램을 작성하시오.
// A와 B가 친구면, B와 A도 친구이고, A와 A는 친구가 아니다.

// 🏷️ 입력
// 첫째 줄에 사람의 수 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 각 사람이 친구이면 Y, 아니면 N이 주어진다.

// 🏷️ 출력
// 첫째 줄에 가장 유명한 사람의 2-친구의 수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3
// NYY
// YNY
// YYN

// 출력
// 2

let fs = require("fs");
let input = fs.readFileSync("shortest_path_4.txt").toString().split("\n");

let INF = 1e9;
let n = Number(input[0]);
let graph = [Array(n + 1).fill(INF)];
for (let i = 1; i <= n; i++) {
  graph.push(Array(n + 1).fill(INF));
  let cur = input[i].split("");
  for (let j = 0; j < cur.length; j++) {
    if (cur[j] == "Y") {
      graph[i][j + 1] = 1;
    }
  }
}

for (let i = 1; i <= n; i++) graph[i][i] = 0;

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      graph[a][b] = Math.min(graph[a][k] + graph[k][b], graph[a][b]);
    }
  }
}

let answer = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i != j && graph[i][j] <= 2) {
      answer[i]++;
    }
  }
}
console.log(Math.max(...answer));
