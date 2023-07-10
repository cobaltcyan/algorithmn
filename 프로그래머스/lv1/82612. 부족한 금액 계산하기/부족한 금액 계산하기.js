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
    return answer;
}