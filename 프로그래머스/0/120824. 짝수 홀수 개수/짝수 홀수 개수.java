class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = {0, 0};
        for (int num: num_list) {
            // System.out.println(num);
            if (num % 2 == 0)
                answer[0]++;
            else
                answer[1]++;          
        }
        return answer;
    }
}

// 다른 문제 풀이

// import java.util.Arrays;

// public class Solution {
//     public static void main(String[] args) {
//         // 테스트코드
//         int[] num_list = {1, 2, 3, 4, 5};
//         int[] result = solution(num_list);
//         System.out.println(Arrays.toString(result));
//     }

//     public static int[] solution(int[] num_list) {
//         int[] answer = new int[2]; // 결과를 저장할 배열, 크기는 2로 설정

//         int num1 = 0;
//         int num2 = 0;

//         for (int i = 0; i < num_list.length; i++) {
//             // System.out.println(num_list[i]);   // 1, 2, 3, 4, 5
//             if (num_list[i] % 2 == 0)
//                 num1++;
//             else
//                 num2++;
//         }

//         answer[0] = num1;
//         answer[1] = num2;

//         return answer;
//     }
// }