// 16953. A → B

// 🏷️ 문제
// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
// 2를 곱한다.
// 1을 수의 가장 오른쪽에 추가한다.
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

// 🏷️ 입력
// 첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

// 🏷️ 출력
// A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2 162

// 출력
// 5

let fs = require("fs");
let input = fs.readFileSync("greedy_5.txt").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let answer = 1;
let flag = false;

while (b >= a) {
  if (a === b) {
    flag = true;
    break;
  } else if (b % 2 === 0) {
    b = parseInt(b / 2);
    answer++;
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
    answer++;
  } else break;
}

if (flag) console.log(answer);
else console.log(-1);
