//🔒가장 가까운 같은 글자

/* 문제 설명
문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

제한 조건 
1 ≤ s의 길이 ≤ 10,000
s은 영어 소문자로만 이루어져 있습니다.

입출력 예
s	result
"banana"	[-1, -1, -1, 2, 2, 2]
"foobar"	[-1, -1, 1, -1, -1, -1]*/

// 🔑 My Solution 🔑
function solution(s) {
  var answer = Array(s.length).fill(-1);
  const array = [...s];

  for (let i = s.length; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] === array[j]) {
        answer[i] = i - j;
        break;
      }
    }
  }
  return answer;
}

/* 1) 접근 방법
                          1-1. s문자열 길이만큼 배열을 만들고 기본값을 -1로 채워줌
                          1-2. s문자열 뒤에서 앞으로 가면서 같은 문자열이 있을 경우 두 인덱스 값을 빼서 그 값을 answer의 해당 인덱스에 넣어줌
                          1-3. 가장 가까운 값을 찾고나서  break를 사용해 같은 문자열이 있더라도 찾지 않도록함.
                                */

// test
console.log(solution('banana'));
// result [-1, -1, -1, 2, 2, 2]

// 🔑 Other's Solutions 🔑
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;

    hash[v] = i;
    return result;
  });
}

/* 1) 접근 방법
                          - 배열로 만든 s의 값 하나하나를 v를 이용해  hash에 있는 값인지 확인
                          - hash에 해당 문자가 없을 경우 -1로 result에 저장 후 return , hash에 등록(b:0, a:1, n:2)
                          - hash에 해당 문자가 있을 경우 해당 인덱스와 hash에 저장되어있던 값 빼줌, hash를 재등록(같은 문자의 최근 인덱스로)
                    */
