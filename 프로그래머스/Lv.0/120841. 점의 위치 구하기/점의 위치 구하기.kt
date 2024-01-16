class Solution {
    fun solution(dot: IntArray): Int {
        return when {
            dot[0] > 0 -> if (dot[1] > 0) 1 else 4
            dot[0] < 0 -> if (dot[1] > 0) 2 else 3
            else -> 0 // (0, 0)일 경우
        }
    }
}

// class Solution {
//     fun solution(dot: IntArray): Int {
//         var answer: Int = 0
//         if (dot[0] > 0 && dot[1] > 0) {
//             answer = 1;
//         }
//         else if(dot[0] < 0 && dot[1] > 0) {
//             answer = 2;
//         }
//         else if(dot[0] < 0 && dot[1] < 0) {
//             answer = 3;
//         }
//         else if(dot[0] > 0 && dot[1] < 0) {
//             answer = 4;
//         }
//         return answer
//     }
// }
