function solution(money) {
    let answer = [];
    const americano = 5500;
    answer.push(Math.floor(money / americano));
    answer.push(money % americano);
    console.log(answer);
    return answer;
}