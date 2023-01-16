//🔒푸드 파이트 대회

/* 문제 설명
수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 
이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. 
대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 
중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

제한 조건 
2 ≤ food의 길이 ≤ 9
1 ≤ food의 각 원소 ≤ 1,000
food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
food[i]는 i번 음식의 수입니다.
food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
정답의 길이가 3 이상인 경우만 입력으로 주어집니다.

입출력 예
food	result
[1, 3, 4, 6]	"1223330333221"
[1, 7, 1, 2]	"111303111"*/

// 🔑 My Solution 🔑
function solution(food) {
  var answer = '';
  const array = food.map((item, i) => Math.floor(item / 2));

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array[i]; j++) {
      answer += i;
    }
  }
  const array_re = [...answer];
  array_re.reverse();
  return answer + 0 + array_re.join('');
}

/* 1) 접근 방법
                        1-1. food를 2로 나누어 한사람이 먹을 수 있는 음식의 개수를 구해 array에 담는다.
                        1-2. 음식의 개수만큼 해당 인덱스를 반복해 answer에 추가한다.
                        1-3. 오른쪽에서 먹는 사람의 음식을 reverse를 이용해 반대로 뒤집어 준다.
                        1-4. 중간에 물을 배치하고 오른쪽에서 먹는 사람의 음식을 합쳐준다
                              */

// test
console.log(solution([1, 3, 4, 6]));
// result "1223330333221"

// 🔑 Other's Solutions 🔑
function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + '0' + [...res].reverse().join('');
}

/* 1) 접근 방법
                        - repeat으로 반복해 줌!
                       
                  */
