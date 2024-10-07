const removeFromArray = function(array,...args) {
     for (let argumentsNumber = 0; argumentsNumber < args.length; argumentsNumber++){
          for(let i=0; i<array.length;i++){
               if (array[i] === args[argumentsNumber]){
                    array.splice((array.indexOf(args[argumentsNumber])),1);
                    i--;
               }
          }
     }
     return array;
}



// Do not edit below this line
module.exports = removeFromArray;



// if (argumentTwo){
//       ;
//      array.splice(array.indexOf(argumentTwo),1) ;
// }
// else {
//      array.splice(array.indexOf(argumentOne),1) ;
// }
// return array;