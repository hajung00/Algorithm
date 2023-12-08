//🔒 두 정수 사이의 합

/* 문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건 
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

입출력 예
a	b	return
3	5	12
3	3	3
5	3	12 */

// 🔑 My Solution 🔑
function solution(a, b) {
  let arr = [a, b];
  arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  let answer = Array(Math.abs(arr[1] - arr[0]) + 1)
    .fill(arr[0])
    .map((v, i) => v + i);
  let add = answer.reduce((acc, v) => acc + v);
  return add;
}

// test
console.log(solution(3, 5));
// result 12

/* 1) 접근 방법
    1-1. a와 b 크기 비교 후 b-a+1 만큼 길이의 배열 생성 (음수를 대비해 절댓값 씌워줌)
    1-2. 제일 작은 값으로 다 채운뒤 인덱스만큼 더해줌 ex) [-1,-1,-1]=>[-1,0,1]
    1-3. reduce로 누적해서 더해줌 */

// 🔑 Other's Solutions 🔑
function adder(a, b) {
  var result = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

/* 1) 접근 방법
     - 양 끝의 합 * 양 끝의 합의 개수 */

function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

/* 1) 접근 방법
    - a, b를 Math.min, Math.max로 찾고 min에서 max까지 for문으로 돌면서 min에 1씩 더해주면서 누적 */
