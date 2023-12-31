process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const row = '*'.repeat(a);
    for(let i = 0; i < b; i++){
        console.log(row);
    }
    
    // for(let row = 0; row < b; row++){
    //     console.log('*'.repeat(a));
    // }
});

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     console.log(a);
//     console.log(b);
// });

/*
    // 문제코드 해석
    
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', data => {
        const n = data.split(" ");
        const a = Number(n[0]), b = Number(n[1]);
        console.log(a);
        console.log(b);
    });

    process.stdin.setEncoding('utf8'): 표준 입력 스트림(stdin)의 인코딩을 UTF-8로 설정합니다.
    이렇게 설정하면 입력된 데이터가 UTF-8 형식으로 처리됩니다.
    
    process.stdin.on('data', data => { ... }): 표준 입력 스트림으로부터 데이터가 입력되었을 때
    실행할 콜백 함수를 등록합니다.
    콜백 함수는 입력된 데이터를 매개변수 data로 받습니다.
    
    const n = data.split(" "): 입력된 데이터를 공백을 기준으로 분할하여 배열 n에 저장합니다.
    
    const a = Number(n[0]), b = Number(n[1]): 배열 n의 첫 번째 요소와 두 번째 요소를
    숫자로 변환하여 a와 b에 저장합니다.
    
    console.log(a)과 console.log(b): 변수 a와 b의 값을 출력합니다.
    
    따라서 위의 코드는 사용자로부터 두 개의 숫자를 공백으로 구분하여 입력받고,
    입력된 숫자를 변수 a와 b에 저장하여 출력하는 기능을 수행합니다.
*/
/*
    // repeat() 함수 : 문자열을 반복하여 새로운 문자열을 생성하는 JS 내장함수
    // string.repeat(count);
    string : 반복할 대상이 되는 문자열
    count : 반복횟수를 나타내는 양의 정수 값
    repeat() 은 string 을 count 만큼 반복하여 새로운 문자열 생성함.
    abc.repeat(3) -> "abcabcabc"
    count 는 0 또는 음수가 될 수 없으며, 소수값은 정수로 변환됌. 2.5 -> 2
    ES6(ECMAScript2015)에서 추가된 기능이므로 호환성을 고려하여 사용할것.
    

*/
