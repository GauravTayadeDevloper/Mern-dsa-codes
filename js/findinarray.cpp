#include <iostream>
using namespace std;
#include <algorithm>
// Function definitions (to be implemented)
void findElementInArray(int a[], int size)
{
    cout << "enter number to find : ";
    int f;
    cin >> f;
    int i = 0;
    while (i < size)
    {
        if (f == a[i])
        {
            cout << " your elemnt " << f << " in " << i << " position" << endl;
            i = i + 1;
        }
        else
        {
            i = i + 1;
        }
    }
}

void reverseArray(int a[], int size)
{
    int i = 0, j = size - 1, k;
    cout << " lets reverse array  ";
    while (i < j)
    {
        k = a[i];
        a[i] = a[j];
        a[j] = k;

        i = i + 1;
        j = j - 1;
    }
    int l = 0;
    while (l < size)
    {
        cout << a[l] << " ";
        l = l + 1;
    }
}

void sumOfElements(int a[], int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum = sum + a[i];
    }
    cout << "sum is: " << sum << endl;
}

void averageOfElements(int a[], int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum = sum + a[i];
    }
    int average = sum / size;
    cout << "average is: " << average << endl;
}

void countEvenOdd(int a[], int size)
{
    int i = 0, j = 0, k = 0;

    while (i < size)
    {
        if (a[i] % 2 == 0)
        {
            j = j + 1;
            i = i + 1;
        }
        else
        {
            k = k + 1;
            i = i + 1;
        }
    }
    cout << "even number count is  " << j << " odd number is " << k << endl;
}

void findMaxMin(int a[], int size)
{
    int i = 0, j = a[0], k = a[0];
    while (i < size)
    {
        if (a[i] > j)
        {
            j = a[i];
        }
        else if (a[i] < k)
        {
            k = a[i];
        }
        i++;
    }

    cout << "max number is  " << j << " min number is " << k << endl;
}

void findFrequency(int a[], int size)
{
    int n;
    cout << "insert which number frequency do you want : " << endl;
    cin >> n;
    int i, count = 0;

    for (i = 0; i < size; i++)
    {
        if (a[i] == n)
        {
            count++;
        }
    }

    cout << n << " numbers frequncy is : " << count << endl;
}
void Sorting(int a[], int size)
{
    std::sort(a, size + a);
    for (int i = 0; i < size; i++)
    {
        cout << a[i] << " ";
    }
}
void checkIfSorted(int a[], int size)
{
    int x = 1;
    int i = 0;

    for (i = 0; i < size - 1; i++)
    {
        if (a[i] > a[i + 1])
        {
            x = 0;
            break;
        }
    }

    if (x == 0)
    {
        cout << "array is not sorted: " << endl;
    }
    else if (x == 1)
    {
        cout << "array is Sorted" << endl;
    }
}
void findSecondLargest(int a[], int size)
{
    int first, second;
    int i = 0;
    if (a[0] > a[1])
    {
        first = a[1];
        second = a[0];
    }
    for (i = 2; i < size; i++)
    {
        if (a[i] > first)
        {
            second = first;
            first = a[i];
        }
        else if (a[i] > second && a[i] != first)
        {

            second = a[i];
        }
    }

    cout << second << "is Second Largest number  : " << endl;
}

void findDuplicateElements(int a[], int size)
{

    const int max = 100;
    int freq[max] = {0};
    for (int i = 0; i < size; i++)
    {
        freq[a[i]]++;
    }

    cout << "duplicte elements area: ";
    bool found = false;
    for (int i = 0; i < max; i++)
    {
        if (freq[i] > 1)
        {
            cout << i << " ";
            found = true;
        }
    }

    if (!found)
        cout << "None";
}

void removeDuplicates(int a[], int size)
{
    const int max = 100;
    int freq[max] = {0};
    int newarr[size], j = 0;
    for (int i = 0; i < size; i++)
    {
        if (freq[a[i]] == 0)
        {
            freq[a[i]] = 1;
            newarr[j++] = a[i];
        }
    }

    //  int lenghthof = sizeof(a) / sizeof(a[0]);
    for (int i = 0; i < j; i++)
    {
        cout << newarr[i] << " ";
    }
}
void rightRotateByOne(int a[], int size)
{
    int temp = a[size - 1];
    for (int i = size - 1; i > 0; i--)
    {
        a[i] = a[i - 1];
    }
    a[0] = temp;
}
void leftRotateByOne(int a[], int size)
{
    int temp = a[0];
    for (int i = 0; i < size - 1; i++)
    {
        a[i] = a[i + 1];
    }
    a[size - 1] = temp;
}
void leftRotateArray(int a[], int size)
{

    int k;
    cout << "enter how many times u want to rotate: " << endl;
    cin >> k;
    k = k % size;

    for (int i = 0; i < k; i++)
    {
        leftRotateByOne(a, size);
    }
    cout << "[";
    for (int i = 0; i < size; i++)
    {
        cout << a[i] << " ";
    }
    cout << "]";
}
void rightRotateArray(int a[], int size)
{

    int k;
    cout << "enter how many times u want to rotate: " << endl;
    cin >> k;
    k = k % size;

    for (int i = 0; i < k; i++)
    {
        rightRotateByOne(a, size);
    }
    cout << "[";
    for (int i = 0; i < size; i++)
    {
        cout << a[i] << " ";
    }
    cout << "]";
}

void mergeTwoArrays(int a[], int size)
{
    // Implement function here
}

void moveZerosToEnd(int a[], int size)
{
    int b[size], point = 0;
    for (int i = 0; i < size; i++)
    {
        if (a[i] != 0)
        {
            b[point] = a[i];
            point++;
        }
    }

    for (int i = point; i < size; i++)
    {
        b[i] = 0;
    }
    cout << "[";
    for (int i = 0; i < size; i++)
    {
        cout << b[i] << " ";
    }
    cout << "]";
}
#include <unordered_set>
void findPairWithSum(int a[], int size)
{
    unordered_set<int> seen;
    int target;
    cout << "enter target : ";
    cin >> target;
    for (int i = 0; i < size; i++)
    {
        int complement = target - a[i];
        if (seen.count(complement))
        {
            cout << "Pair found: (" << a[i] << ", " << complement << ")" << endl;
            return;
        }
        seen.insert(a[i]);
    }

    cout << "No pair found with sum " << target << endl;
}

void kadaneAlgorithm(int a[], int size)
{

    int maxEndingHere = a[0];
    int maxSoFar = a[0];

    for (int i = 1; i < size; i++)
    {
        maxEndingHere = max(a[i], maxEndingHere + a[i]);
        maxSoFar = max(maxSoFar, maxEndingHere);
    }

    cout << maxSoFar << " ";
}

void subarrayWithGivenSum(int a[], int size)
{
    int start = 0, sum = 0;
    int target;
    cout << "enter target : ";
    cin >> target;
    for (int end = 0; end < size; end++)
    {
        sum += a[end];

        while (sum > target && start <= end)
        {
            sum -= a[start];
            start++;
        }

        if (sum == target)
        {
            cout << "Subarray found from index " << start << " to " << end << endl;
            return;
        }
    }

    cout << "No subarray found with sum " << target << endl;
}

int main()
{
    int size;
    cout << "enter size of array: " << endl;
    cin >> size;
    int arr[size];
    int i = 0;
    cout << "enter numbers now : " << endl;
    while (i < size)
    {
        cin >> arr[i];
        i++;
    }

    cout << "What do you want to perform on array?" << endl;
    cout << "Press 1 to find element in array: " << endl;
    cout << "Press 2 for reverse array: " << endl;
    cout << "Press 3 for Sum of Elements: " << endl;
    cout << "Press 4 for Average of Elements: " << endl;
    cout << "Press 5 to Count Even and Odd Numbers: " << endl;
    cout << "Press 6 to Find Maximum and Minimum: " << endl;
    cout << "Press 7 to Find Frequency of an Element: " << endl;
    cout << "Press 8 to Check if Array is Sorted: " << endl;
    cout << "Press 9 to Find Second Largest Element: " << endl;
    cout << "Press 10 to Find Duplicate Elements: " << endl;
    cout << "Press 11 to Remove Duplicates: " << endl;
    cout << "Press 12 to Left Rotate Array: " << endl;
    cout << "Press 13 to Right Rotate Array: " << endl;
    cout << "Press 14 to Merge Two Arrays: " << endl;
    cout << "Press 15 to Move Zeros to End: " << endl;
    cout << "Press 16 to Find Pair with Sum: " << endl;
    cout << "Press 17 for Largest Sum Subarray (Kadane's Algorithm): " << endl;
    cout << "Press 18 to Find Missing Number in Array: " << endl;
    cout << "Press 19 for Subarray with Given Sum: " << endl;
    cout << "Press 20 to Find Majority Element: " << endl;
    cout << "Press 21 to Rearrange Array Alternating Positive and Negative: " << endl;

    int p;
    cin >> p;
    if (p == 1)
    {
        findElementInArray(arr, size);
    }
    else if (p == 2)
    {
        reverseArray(arr, size);
    }
    else if (p == 3)
    {
        sumOfElements(arr, size);
    }
    else if (p == 4)
    {
        averageOfElements(arr, size);
    }
    else if (p == 5)
    {
        countEvenOdd(arr, size);
    }
    else if (p == 6)
    {
        findMaxMin(arr, size);
    }
    else if (p == 7)
    {
        findFrequency(arr, size);
    }
    else if (p == 8)
    {
        checkIfSorted(arr, size);
    }
    else if (p == 9)
    {
        findSecondLargest(arr, size);
    }
    else if (p == 10)
    {
        findDuplicateElements(arr, size);
    }
    else if (p == 11)
    {
        removeDuplicates(arr, size);
    }
    else if (p == 12)
    {
        leftRotateArray(arr, size);
    }
    else if (p == 13)
    {
        rightRotateArray(arr, size);
    }
    else if (p == 14)
    {
        mergeTwoArrays(arr, size);
    }
    else if (p == 15)
    {
        moveZerosToEnd(arr, size);
    }
    else if (p == 16)
    {
        findPairWithSum(arr, size);
    }
    else if (p == 17)
    {
        kadaneAlgorithm(arr, size);
    }
    else if (p == 18)
    {
        // findMissingNumber(arr, size);
    }
    else if (p == 19)
    {
        subarrayWithGivenSum(arr, size);
    }
    else if (p == 20)
    {
        // findMajorityElement(arr, size);
    }
    else if (p == 21)
    {
        // rearrangeArray(arr, size);
    }
    else
    {
        cout << "Invalid option selected!" << endl;
    }

    return 0;
}