//🔒 가운데 글자 가져오기

/* 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

제한 조건 
s는 길이가 1 이상, 100이하인 스트링입니다.

입출력 예
s	return
"abcde"	"c"
"qwer"	"we" */

// 🔑 My Solution 🔑
function solution(s) {
  var answer = [];
  let arr = s.split('');
  let number = arr.length;
  number % 2 === 0
    ? answer.push(arr[number / 2 - 1], arr[number / 2])
    : answer.push(arr[Math.floor(number / 2)]);
  return answer.join('');
}

// test
console.log(solution([5, 9, 7, 10], 5));
// result [5, 10]

/* 1) 접근 방법
   1-1. s길이가 짝수일 경우, 나누기 2한 값의 인덱스와 그 전의 인덱스 값을 answer에 push
   1-2. s길이가 홀수일 경우, 나누기 2한 값을 floor로 소수 값을 버리고 인덱스 값을 answer에 push */

// 🔑 Other's Solutions 🔑
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

/* 1) 접근 방법
    - filter 사용 */

/* 2) 알게된 지식
    - Math.ceil(): 소수값이 존재할 때 값을 올리는 역활을 하는 함수
    - Math.floor(): 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수
    - Math.round(): 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수 */
