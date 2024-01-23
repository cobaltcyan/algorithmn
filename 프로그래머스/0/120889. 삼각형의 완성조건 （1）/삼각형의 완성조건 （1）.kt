import java.util.Arrays;

class Solution {
    fun solution(sides: IntArray): Int {
        var answer: Int = 0
        
        Arrays.sort(sides);
        
        if (sides[0] + sides[1] <= sides[2]) {
            answer = 2
        }
        else
            answer = 1
        
        return answer
    }
}

// class Solution {
//     fun solution(sides: IntArray): Int {
//         var sides = sides.sorted()
//         return if( sides[2] < sides[0]+sides[1] ) 1 else 2
//     }
// }
