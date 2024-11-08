const findTheOldest = function(object) {
    const arraySort = object.map( (user) => {
        const dateNow = new Date().getFullYear();
        let agePerson = 0;

        if (user.yearOfDeath){
            agePerson = user.yearOfDeath - user.yearOfBirth;
        } else{
            agePerson = dateNow - user.yearOfBirth;
        }

        return {
            ...user,
            age: agePerson
        }
    }).sort(function(onePerson,twoPerson) {
        return twoPerson.age - onePerson.age;
    })
    return arraySort[0];

};



//Старый вариант
// const findTheOldest = function(object) {
//     const arraySort = object.sort(function(agePerson,twoPerson){
//         const dateNow = new Date().getFullYear()
//         let ageagePerson = 0
//         let ageTwoPerson = 0

//         if (agePerson.yearOfDeath){
//             ageagePerson = agePerson.yearOfDeath - agePerson.yearOfBirth
//         } else{
//             ageagePerson = dateNow - agePerson.yearOfBirth
//         }

//         if(twoPerson.yearOfDeath){
//             ageTwoPerson = twoPerson.yearOfDeath - twoPerson.yearOfBirth
//         } else {
//             ageTwoPerson = dateNow - twoPerson.yearOfBirth
//         }

//         return ageTwoPerson - ageagePerson
//     })
//     return arraySort[0]

// };

// Do not edit below this line
module.exports = findTheOldest;
