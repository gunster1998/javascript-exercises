const findTheOldest = function(object) {
    const arraySort = object.sort(function(onePerson,twoPerson){
        const dateNow = new Date().getFullYear()
        let ageOnePerson = 0
        let ageTwoPerson = 0
        if (onePerson.yearOfDeath){
            ageOnePerson = onePerson.yearOfDeath - onePerson.yearOfBirth
        } else{
            ageOnePerson = dateNow - onePerson.yearOfBirth
        }
        if(twoPerson.yearOfDeath){
            ageTwoPerson = twoPerson.yearOfDeath - twoPerson.yearOfBirth
        } else {
            ageTwoPerson = dateNow - twoPerson.yearOfBirth
        }
        console.log(ageTwoPerson - ageOnePerson)
        return ageTwoPerson - ageOnePerson
    })
    console.log(arraySort[0])
    return arraySort[0]

};

// Do not edit below this line
module.exports = findTheOldest;
