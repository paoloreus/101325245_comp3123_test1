// Student ID:      101325245
// Student Name:    Paolo Tous

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(arr.length >= 0 && Array.isArray(arr)){
            const filteredArr = arr.filter((element) => typeof element === "string");
            const mappedArr = filteredArr.map((item) => item.toLowerCase());
            resolve(mappedArr);
        }
        else{
            reject("Not a valid array");
        }

    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];
lowerCaseWords(mixedArray).then((result)=>
console.log(result));