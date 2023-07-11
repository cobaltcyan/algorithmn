function solution(arr)
{
    let answer = [];
    // return answer;
    
    return arr.filter((val,index) => val != arr[index+1]);
    
}