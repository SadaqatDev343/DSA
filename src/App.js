import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [sortedArr, setSortedArr] = useState([]);
  const arr = [5, 6, 4, 7];
  const array = [5, 9, 2, 3, 4, 6, 3, 4, 8, 5, 1, 5];
  function sortDescending(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  function isPalindrome(str) {
    let string = '';
    for (let char of str) {
      if (/[a-zA-Z0-9]/.test(char)) {
        string += char.toLowerCase();
      } else {
        string = str;
      }
    }

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      if (string[left] !== string[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
  console.log(sortedArr);

  function sumOfTwoLargestNumbers(arr) {
    if (arr.length < 2) {
      throw new Error('Array must contain at least two numbers');
    }

    let num1 = 0;
    let num2 = 0;

    for (let num of arr) {
      if (num > num1) {
        num2 = num1;
        num1 = num;
      } else if (num > num2) {
        num2 = num;
      }
    }

    return num1 + num2;
  }
  function findMissingNumbers(arr) {
    let highestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > highestNumber) {
        highestNumber = arr[i];
      }
    }

    let present = [];
    for (let i = 0; i <= highestNumber; i++) {
      present[i] = false;
    }

    for (let i = 0; i < arr.length; i++) {
      present[arr[i]] = true;
    }

    let missingNumbers = [];
    for (let i = 0; i <= highestNumber; i++) {
      if (!present[i]) {
        missingNumbers.push(i);
      }
    }

    return missingNumbers;
  }
  function mostRepeatedNumber(arr) {
    let count = {};

    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
    }

    let mostRepeated = { number: null, occurrences: 0 };

    for (let num in count) {
      if (count[num] > mostRepeated.occurrences) {
        mostRepeated.number = parseInt(num);
        mostRepeated.occurrences = count[num];
      } else if (count[num] === mostRepeated.occurrences && count[num] > 1) {
        mostRepeated.number += `, ${parseInt(num)}`;
      }
    }

    return `${mostRepeated.number} is repeated ${mostRepeated.occurrences} times.`;
  }
  function rotateArrayRightOnce(arr) {
    if (arr.length === 0 || 1) {
      return arr;
    }

    const lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    let output = '';
    for (let i = 0; i < arr.length; i++) {
      output += `${i}: ${arr[i]}\n`;
    }

    return output;
  }

  useEffect(() => {
    console.log('madam', isPalindrome('madam'));
    console.log('doctore', isPalindrome('doctor'));
    const sorted = sortDescending(arr);
    setSortedArr(sorted);
    const sumOfTwoNum = sumOfTwoLargestNumbers(arr);
    console.log('rest of  sum of  two larger number', sumOfTwoNum);
    const missingNum = findMissingNumbers(arr);
    console.log('MISSING  NUMBER', missingNum);
    const mostRepeated = mostRepeatedNumber(array);
    console.log('mostRepeatedNumber', mostRepeated);
    const rotatedArray = rotateArrayRightOnce(arr);
    console.log('rotatedArray', rotatedArray);
  }, []);
  return <div className='App'></div>;
}

export default App;
