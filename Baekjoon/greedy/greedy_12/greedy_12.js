// 19939. 박 터뜨리기

// 🏷️ 문제
// K개의 팀이 박 터트리기 게임을 한다. 각 팀은 하나의 바구니를 가지고 있고, 바구니에 들어있는 공을 던져서 자기 팀의 박을 터트려야 한다.
// 우리는 게임을 준비하기 위해서, N개의 공을 K개의 바구니에 나눠 담아야 한다. 이때, 게임의 재미를 위해서 바구니에 담기는 공의 개수를 모두 다르게 하고 싶다. 즉,
// N개의 공을 K개의 바구니에 빠짐없이 나누어 담는데, 각 바구니에는 1개 이상의 공이 있어야 하고, 바구니에 담긴 공의 개수가 모두 달라야 한다.
// 게임의 불공정함을 줄이기 위해서, 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되도록 담을 것이다.

// 공을 바구니에 나눠 담기 위한 규칙을 정리하면 다음과 같다.
// 1. N개의 공을 K개의 바구니에 빠짐없이 나누어 담는다.
// 2. 각 바구니에는 1개 이상의 공이 들어 있어야 한다.
// 3. 각 바구니에 담긴 공의 개수는 모두 달라야 한다.
// 4. 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되어야 한다.

// 위의 규칙을 모두 만족하며 N개의 공을 K개의 바구니에 나눠 담을 때, 나눠 담을 수 있는지 여부를 결정하고, 담을 수 있는 경우에는 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이를 계산해서 출력하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫 번째 줄에 공의 개수를 나타내는 N과 팀의 수를 나타내는 정수 K가 주어진다.

// 🏷️ 출력
//  N개의 공을 K개의 바구니에 문제의 규칙을 만족하면서 나눠 담을 수 있다면, 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이를 출력한다. 나눠 담을 수 없는 경우에는 -1을 출력한다.

// 🏷️ 제한
// 2 <= N <= 100,000
// 2 <= K <= 1,000

// 🏷️ 예제 입출력

// 입력
// 5 3

// 출력
// -1

let fs = require("fs");
let input = fs.readFileSync("greedy_12.txt").toString().split("\n");
let [n, k] = input[0].split(" ").map(Number);

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

if (n < sum) {
  console.log("-1");
} else {
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k);
}