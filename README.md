[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11784679&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

--> The best-case complexity of reverse insertion sort is still O(n), because if you try sorting a sorted array, only one for loop (the first for loop) in our code will run since the already sorted array will never meet the conditions of the second for loop. The first for loop increments n times, with n being the size of the array, therefore the best case complexity of reverse insertion sort is O(n) with n as the size of the array. An example of the best-case scenario is the sorted list in decreasing order. 

--> The worst-case complexity of reverse insertion sort is also O(n^2) since we are running two for loops, and both for loops increment n times. An example of this would be a sorted list, since the second for loop conditions would be met through every pass. 

--> The average-case complexity here would then be O(n^2) because unless we have a sorted list, both for loops will be executed at least once meaning we have an average case complexity of O(n^2). In order for the average complexity to be less than O(n^2) we would be assuming that the list on average, is sorted, however, realistically, the average list here will not be completely sorted, therefore, without making any assumptions, the average complexity is )(n^2)
