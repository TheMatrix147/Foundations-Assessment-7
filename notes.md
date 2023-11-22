

| tinyArray results | smallArray results | mediumArray results | largeArray results |
|  - - - - - - - -  |  - - - - - - - -   |   - - - - - - - -   |  - - - - - - - -   |
|   doublerInsert   |   doublerInsert    |    doublerInsert    |   doublerInsert    |
|  - - - - - - - -  |  - - - - - - - -   |   - - - - - - - -   |  - - - - - - - -   |
|     201.065 µs    |     109.79 µs      |      237.377 µs     |    11.597781 ms    |
|  - - - - - - - -  |  - - - - - - - -   |   - - - - - - - -   |  - - - - - - - -   | 
|   doublerAppend   |   doublerAppend    |    doublerAppend    |   doublerAppend    |
|  - - - - - - - -  |  - - - - - - - -   |   - - - - - - - -   |  - - - - - - - -   |
|     198.204 µs    |     178.891 µs     |      202.545 µs     |     1.144454 ms    |

| extraLargeArray results |
|     - - - - - - - -     |
|      doublerInsert      |
|     - - - - - - - -     |
|      1.003306665 s      |
|     - - - - - - - -     |
|      doublerAppend      |
|     - - - - - - - -     |
|       46.806954 ms      |


Comparing the scaling of each function:

For most of the time, the runtime of the doublerAppend function is much faster than the
runtime of the doublerInsert function. The doublerAppend function scales better than the doubler insert function because it has a runtime complexity of O(n). The doublerInsert function has a runtime complexity of O(n^2) due to the .unshift method and thus has a higher runtime complexity. 