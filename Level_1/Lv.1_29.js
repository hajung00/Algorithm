//🔒2016

/* 문제 설명
당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. 
N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 
가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

제한 조건 
nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

입출력 예
nums	result
[3,1,2,3]	2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2*/

// 🔑 My Solution 🔑
function solution(nums) {
  const array = new Set(nums);
  return Math.min(array.size, nums.length / 2);
}

/* 1) 접근 방법
                  1-1. n(같은 종류 동물 포함한 개수)개의 동물 중 n/2개를 선택하는데 서로 다른 종류이기만 하면 된다.
                  1-2. Set을 이용해 중복된 동물 제거
                  1-3. 중복이 제거된 동물과 내가 뽑을 수 있는 동물의 개수중 작은 것을 고르면 된다.(Math.min사용)  */

// test
console.log(solution([3, 1, 2, 3]));
// result 2

// 🔑 Other's Solutions 🔑
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

/* 1) 접근 방법
                  - Math.min대신 삼항 연산자 사용
            */
