//π μμ μ°ΎκΈ°

/* λ¬Έμ  μ€λͺ
1λΆν° μλ ₯λ°μ μ«μ n μ¬μ΄μ μλ μμμ κ°μλ₯Ό λ°ννλ ν¨μ, solutionμ λ§λ€μ΄ λ³΄μΈμ.

μμλ 1κ³Ό μκΈ° μμ μΌλ‘λ§ λλμ΄μ§λ μλ₯Ό μλ―Έν©λλ€.
(1μ μμκ° μλλλ€.)

μ ν μ‘°κ±΄ 
nμ 2μ΄μ 1000000μ΄νμ μμ°μμλλ€.

μμΆλ ₯ μ
n	result
10	4
5	3 */

// π My Solution π
function solution(n) {
  var answer = 0;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      answer++;
    }
    count = 0;
  }
  return answer;
}

/* 1) μ κ·Ό λ°©λ²
          1-1. 2~nκΉμ§ μ«μ νλμ© 1λΆν° ν΄λΉ μ«μκΉμ§ λλμ΄ λ¨μ΄μ§λκ²μ΄ λ± 2κ°λ©΄ μμλ‘ νλ³ */

//βλ¬Έμ μ : ν¨μ¨μ± νμ€νΈ ν΅κ³Ό X
//π ν΄κ²° λ°©λ²: μ΄λ€ μμ°μ nμ΄ μμ λ, βn λ³΄λ€ μμ λͺ¨λ  μμλ€λ‘ λλμ΄ λ¨μ΄μ§μ§ μμΌλ©΄ nμ μμ

//π‘ ν΄κ²°
function solution(n) {
  var answer = 1;

  // 2~nκΉμ§ μ«μ νλνλ μμμΈμ§ νλ³
  for (let i = 3; i <= n; i++) {
    // μ«μ νλκ° μμμΈμ§ νλ³
    let count = 0;
    for (let j = 2; j * j <= i; j++) {
      // μμκ° μλλ©΄ count = 1
      if (i % j === 0) {
        ++count;
        break;
      }
    }
    if (count === 0) answer++;
  }
  return answer;
}

// test
console.log(solution(10));
// result 4

// π Other's Solutions π
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

/* 1) μ κ·Ό λ°©λ²
          - sμ 2ν¬ν¨ nκΉμ§μ νμλ₯Ό λ£μ
          - nμ μ κ³±κ·ΌκΉμ§ κ³μ°νκ³  sμ μμκ° μλ κ°μ΄ μμΌλ©΄ delete(ifλ¬Έμμ λ€μ΄κ°λ jλ λ€ νμμ΄λ©° νμ*μ§μλ©΄ μμκ° μλκ³ , νμ+νμ λν μμκ° μλ)
    */

