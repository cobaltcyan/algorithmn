
import java.util.Arrays;

class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        //배열 재정렬
        Arrays.sort(sides);
        
        //출력값 비교
        // System.out.println(sides);  //[I@53e25b76
        // System.out.println(sides.toString());  //[I@53e25b76
        // for (int side: sides) {
        //     System.out.println(side);
        // }   // 2, 3, 6

        // if 조건문 이용
//         if (sides[0] + sides[1] > sides[2])
//             answer = 1;
//         else
//             answer = 2;

        // 3항 연산자 사용
        answer = (sides[0] + sides[1] > sides[2]) ? 1 : 2;
        // answer = if (sides[0] + sides[1] > sides[2]) ? 1 : 2;    // 문법 오류
        
        return answer;
    }
}


// System.out.println(Arrays.toString(sides));에서는 배열의 toString() 메서드 대신 Arrays.toString() 메서드를 명시적으로 호출하고 있습니다. Arrays.toString() 메서드는 배열의 각 요소를 쉼표로 구분하여 문자열로 변환해주는 역할을 합니다.

// 따라서 이 부분은 배열의 내용이 해시 코드 대신 각 요소를 포함한 문자열로 출력됩니다. Arrays.toString(sides)는 배열의 내용을 문자열로 변환하여 반환하므로, 이를 System.out.println()에 전달하면 배열의 내용이 출력됩니다.
