//first code
const addToZero = (arr, num) => {
    let object = {}
    let zero
  
    for (let i = 0; i < arr.length; i++) {
      zero = num - arr[i]
  
      if (object[zero]) {
        return true
      } else {
        object[arr[i]] = true
      }
    }
    return false
  }
//   space complexity: O(n)
  
let arr1 = [1, 2, 3, 4, -2]
console.log(addToZero(arr1, 7))


//second code
function uniqueChars(str) {
    for (i = 0; i < str.length; i++) {
        for (j = i +1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}
// space complexity: O(1)

let str1 = 'Monday'
let str2 = 'Moonday'

console.log(uniqueChars(str1))
console.log(uniqueChars(str2))

//code three
function isPang(str){
    let newArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(newArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  //space complexity: O(1)

  let string1 = "The quick brown fox jumps over the lazy dog."
  let string2 = "This is not a pangram."

  console.log(isPang(string1))
  console.log(isPang(string2))

  //code four
  function findLongWord(str){

    let strSplit = str.split(' ')
    let longWord = 0

    for (i = 0; i < strSplit.length; i++){
        if (strSplit[i].length > longWord){
            longWord = strSplit[i].length
        }
    }
    return longWord
  }
  // space complexity: O(n)

  let str3 = "The quick brown fox jumped over the lazy dog repeatedly"

  console.log(findLongWord(str3))