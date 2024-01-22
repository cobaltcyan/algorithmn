
import java.util.Arrays;

class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        
        Arrays.sort(sides);
        // System.out.println(sides); 
        
        // 출력 : 72 199 222
        for (int side : sides) {
            System.out.print(side + " ");
        }
        
        // 출력 : [I@ee7d9f1
        // Java에서 배열을 직접 출력하면 배열의 toString() 메서드가 호출되어 해당 배열의 해시 코드가 출력됩니다. 
        System.out.println(sides);
        
        // 출력 : [72, 199, 222]
        // toString() 메서드가 아닌 Arrays.toString() 메서드로 변환 후 출력
        System.out.println(Arrays.toString(sides));
        
        if (sides[0] + sides[1] <= sides[2]) {
            answer = 2;
        }
        else
            answer = 1;
        
        System.out.println(answer);
        
        return answer;
    }
}


// System.out.println(Arrays.toString(sides));에서는 배열의 toString() 메서드 대신 Arrays.toString() 메서드를 명시적으로 호출하고 있습니다. Arrays.toString() 메서드는 배열의 각 요소를 쉼표로 구분하여 문자열로 변환해주는 역할을 합니다.

// 따라서 이 부분은 배열의 내용이 해시 코드 대신 각 요소를 포함한 문자열로 출력됩니다. Arrays.toString(sides)는 배열의 내용을 문자열로 변환하여 반환하므로, 이를 System.out.println()에 전달하면 배열의 내용이 출력됩니다.





