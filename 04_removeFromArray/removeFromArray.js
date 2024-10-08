const removeFromArray = function (array, ...args) {
     return array.filter(element => !args.includes(element));
}





// Do not edit below this line
module.exports = removeFromArray;

//Предпоследняя  версия 
// const removeFromArray = function(array,...args) {
//      for (let argumentsNumber = 0; argumentsNumber < args.length; argumentsNumber++) { 
//      if (array.includes(args[argumentsNumber])) {
//           array = array.filter(arg => args[argumentsNumber] !== arg);
//      }
// }
//      return array
// }






// if (argumentTwo){
//       ;
//      array.splice(array.indexOf(argumentTwo),1) ;
// }
// else {
//      array.splice(array.indexOf(argumentOne),1) ;
// }
// return array;


// const removeFromArray = function(array,...args) {
//      for (let argumentsNumber = 0; argumentsNumber < args.length; argumentsNumber++) { 
//           for(let i=0; i < array.length;i++){
//                if (array[i] === args[argumentsNumber]) {
//                     array.splice((array.indexOf(args[argumentsNumber])),1);
//                     i--;
//                }
//           }
//      }
//      return array;
// }

