//🔒최소직사각형

/* 문제 설명
모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

제한 조건 
sizes의 길이는 1 이상 10,000 이하입니다.
sizes의 원소는 [w, h] 형식입니다.
w는 명함의 가로 길이를 나타냅니다.
h는 명함의 세로 길이를 나타냅니다.
w와 h는 1 이상 1,000 이하인 자연수입니다.

입출력 예
sizes	result
[[60, 50], [30, 70], [60, 30], [80, 40]]	4000
[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133 */

// 🔑 My Solution 🔑
function solution(sizes) {
  var width = [];
  var height = [];

  sizes.map((size) => {
    if (size[0] < size[1]) {
      size = [size[1], size[0]];
    }
    width.push(size[0]);
    height.push(size[1]);
  });

  return Math.max(...width) * Math.max(...height);
}

/* 1) 접근 방법
              1-1. 가로 세로 길이 중 가장 긴쪽을 가로로 설정한다.
              1-2. 가로에서 가장 긴 부분과 세로에서 가장 긴 부분을 곱해 return  */

// test
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
// result 4000

// 🔑 Other's Solutions 🔑
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}

/* 1) 접근 방법
              - 현재값 a,b와 누산값 h,v를 max를 이용해 최대값을 찾는다.
        */
