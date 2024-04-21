// 1. conversation
//feetToInch

// function feetToInches(feet){
//     return feet * 12;
//   }
//   const inch = feetToInches(14);
//   console.log(inch);

// 2. conversion
//centimeterToMeter

// function centimeterToMeter(centimeter){
//     return centimeter / 100;
// }
// const meter = centimeterToMeter(14);
// console.log(meter);


// 3. calculation
//pageRequirements

// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

//function calculateTotalPages(bookPages) {
//   let totalPages = 0;
//   for (let pages of bookPages) {
//       totalPages += pages;
//   }
//   return totalPages;
// }

// // Test the function
// const bookPages = [100, 200, 300];
// const total = calculateTotalPages(bookPages);
// console.log("Total pages for all books:", total);

//4. friends
//bestFriend

var friends = ['Mofez', 'Kattu', 'Motu', 'Mc', 'Mangta', 'Chapri', 'Heron', 'Goriber Darshan'];

function bestFriend(friends) {
    var longestLength = 0;
    var longestName = '';
    for (var friend of friends) {
        if (longestLength < friend.length) {
            longestLength = friend.length;
            longestName = friend;
        }
    }
    return longestName;
}

var big_spell = bestFriend(friends);
console.log(big_spell);


//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
//onlyPositive

// function onlyPositive(arr) {
//   let result = [];
//   for (var element of arr) {
//       if (element < 0) {
//           break;
//       }
//       if (element >= 0) {
//           result.push(element);
//       }
//   }
//   return result;
// }

// // Example usage:
// const array1 = [1, 2, 3, 4, -5, 6, 7];
// console.log(onlyPositive(array1)); // Output: [1, 2, 3, 4]

// const array2 = [3, 5, 7, 9];
// console.log(onlyPositive(array2)); // Output: [3, 5, 7, 9]

// const array3 = [-2, 6, 8, 10];
// console.log(onlyPositive(array3)); // Output: []
