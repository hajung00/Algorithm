// 11509. 풍선 맞추기

// 🏷️ 문제
// 큰 방에 N개의 풍선이 떠있다. 풍선들은 왼쪽부터 오른쪽까지 일렬로 있다. 진솔이는 화살 가지고 노는 것과 사냥 연습하는 것을 좋아한다.
// 진솔이는 화살을 왼쪽에서 오른쪽으로 쏜다. 높이는 임의로 선택한다. 화살은 선택된 높이 H에서 풍선을 마주칠 때까지 왼쪽에서 오른쪽으로 이동한다.
// 화살이 풍선을 마주치는 순간, 풍선은 터지고 사라진다. 화살은 계속해서 가던길을 가는데 높이는 1 줄어든다. 그러므로 만약 화살이 높이 H에서 이동 중이었다면 풍선을 터트린 후에는 높이가 H-1이 된다.

// 우리의 목표는 모든 풍선을 터트리되 가능한한 적은 화살을 사용하는 것이다.

// 🏷️ 입력
// 첫 번째 줄에는 정수 N(1 ≤ N ≤ 1 000 000)이 들어온다.
// 두 번째 줄에는 배열 Hi가 N개 들어온다.
// 각각의 Hi(1 ≤ Hi ≤ 1 000 000)는 i번째 풍선의 높이에 해당하며 왼쪽에서 오른쪽으로 나열되는 순서이다.

// 🏷️ 출력
// 첫 번째 줄 한줄에 최소한 필요한 화살의 개수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 5
// 2 1 5 4 3

// 출력
// 2

// let fs = require("fs");
// let input = fs.readFileSync("greedy_10.txt").toString().split("\n");

// let n = Number(input[0]);
// let arr = input[1].split(" ").map(Number);
// let answer = 0;

// while (arr.length > 0) {
//   let a = arr[0];
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     if (a > 0) {
//       let findIndex = arr.findIndex((v) => v === a);
//       if (findIndex !== -1) {
//         arr.splice(
//           arr.findIndex((v) => v === a),
//           1
//         );
//         --a;
//       }
//     } else break;
//   }
//   answer++;
// }

// console.log(answer);

// 맨 처음값을 기준으로 1씩 빼면서 배열의 값 제거
// 위의 방법은 시간 초과로 다른 방법 생각

let fs = require("fs");
let input = fs.readFileSync("greedy_10.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let numArr = new Array(Math.max(...arr) + 1).fill().map((v, i) => [i, 0]);
let answer = 0;

for (let i = 0; i < n; i++) {
  if (numArr[arr[i]][1] === 0) {
    numArr[arr[i] - 1][1]++;
    answer++;
  } else {
    numArr[arr[i]][1]--;
    numArr[arr[i] - 1][1]++;
  }
}

console.log(answer);

// 높이별 화살의 개수를 이차원 배열로 저장하여 높이에 해당하는 화살이 없을 경우 높이-1에 화살 추가, 반대의 경우에는 해당 높이의 화살 -1 후 높이-1에 화살추가
