//🔒 3진법 뒤집기

/* 문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한 조건 
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예
45	7
125	229 */

// 🔑 My Solution 🔑
function solution(n) {
  var array = [];
  let answer = 0;
  let a = 1;
  while (n > 0) {
    array.push(n % 3);
    n = parseInt(n / 3);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      a *= 3;
    }
    answer += array[i] * a;
    a = 1;
  }
  return answer;
}

// test
console.log(solution(45));
// result 7

/* 1) 접근 방법
    1-1. array에 3진법으로 바꾼 숫자 넣어줌(나머지가 순서대로 들어가기 때문에 뒤집혀있는 상태)
    1-2. 3의 0승, 1승, 2승 ... 해주기 위해 for문 이용
    1-3. answer에 3의 n승과 array[n]의 배열 값을 곱한 값을 차례대로 더해줌 */

// 🔑 Other's Solutions 🔑
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

/* 1) 접근 방법
    1-1. toString으로 3진수 변환 
    1-2. reverse로 뒤집어줌
    1-3. 배열을 join으로 합쳐주고 parseInt로 3진수로 변환 */

/* 2) 알게된 지식
    - parseInt(string, radix): 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
    매개변수(parameter)
    1. string: 파싱할 값입니다. 
    2. radix(Optional): string의 진수를 나타내는 2부터 36까지의 정수 
    - toString(): 기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있음
      ex)let baseTenInt = 10;
      console.log(baseTenInt.toString(2)); */
