
// FIRST FOR LOOP
// we need to start from the end of the array
// ... so lets let i be equal to arr.length-2, since in regular insertionsort,
// ... we start with the second element, now we start with the second to last element
// instead of incrmementing i, we decrement, since we move down the array
// we also set our condition for i >= 0, instead of i < arr.length
// our comparing value will still be arr[i], now starting with the second to last value
// SECOND FOR LOOP
// we set the for condition for when j less than the array length - 1 to move up towards the sorted
// ... portion of the list. And we set the second condtion for when the next value (arr[j+1]) is less
// ... than the current value (val). Lastly, instead of decrementing j towards the sorted portion of
// ... the list, we now increment j
// now we will compare the second to last value (val) w/ the next value in the array (arr[j+1])
// if the next value is less than the previous, we set the previous(arr[j]) to the next (arr[j+1])

function insertionSortReverse(arr)
{
    for (var i = arr.length-1; i >= 0; i--)
    {
        var val = arr[i]; // start with second to last element
        var j;
        for (var j = i; j < arr.length-1 && arr[j+1] < val; j++)
        {
            arr[j] = arr[j+1];
        }
        arr[j] = val;
    }
    return arr;
}
