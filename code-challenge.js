// Add to Zero Coding challenge, I believe the runtime would be O(n^2) becuase of the nested for loop
// Space Complexity: O(n)
function addToZero(arr){

    for(let i = 0; i <arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        let sum = arr[i] + arr[j]
  
        if(sum === 0){
          return true
        }
      }
    }
    return false
}

// Unique Characters, I believe this would also be O(n^2) due to the nested for loop
// Space Complexity: O(n)
function hasUniqueChars(str) {
    //Check one letter
    for(let i = 0; i < str.length; i++){
      //Check letter to each letter in string
      for(let j = i+1; j < str.length; j++){
        if (str[i] === str[j]){
          return false
      }
    }
  }
    return true
  }

  // isPangram, I believe this one would have a runtime of O(n) because it has only one for loop it runs thorugh
// Space Complexity: O(1)
  function isPangram(str){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y', 'z']
    str = str.toLowerCase()
  
    for(let i = 0; i < alphabet.length; i++){
      if(!str.includes(alphabet[i])){
        return false
      }
    }
    return true
  }

// findLongestWord I believe this function has a runtime of O(n) since it only has one for loop
//Space complexity: O(1) since it stores over the same declared variables each time throuhg so they're constant
function findLongestWord (arr) {
    let longestWord = 0
    for(let i = 0; i < arr.length; i++){
      if(longestWord < arr[i].length){
        longestWord = arr[i].length
      }
    }
    return longestWord
  }