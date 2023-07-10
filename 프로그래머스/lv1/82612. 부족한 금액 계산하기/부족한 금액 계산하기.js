function solution(price, money, count) {
    let answer = -1;
    let totalPrice = 0;
    let arr = [];
    for (let i = 1; i <= count; i++) {
        console.log(i);
        arr.push(i * price);
    }
    
    totalPrice = arr.reduce((sum, currentValue) => sum + currentValue, 0);
    
    if (totalPrice < money) {
        answer = 0;
    } else {
        answer = Math.abs(money - totalPrice);        
    }
    
    // 3항 연산자 이용
    // answer = totalPrice < money ? 0 : Math.abs(money - totalPrice);
    
    return answer;
}
/*
    // 가우스의 공식 이용
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
    
    // 기본
    function solution(price, money, count) {
        let answer = 0;

        for (let i = 1; i <= count; i++) {
            answer += price * i;
        }

        return answer > money ? answer - money : 0;
    }
*/
