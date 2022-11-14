function max(x, y) {
    if (x > y) return x;
    return y;
};

function maxOfThree(x, y, z) {
    if (x > y && x > z) return x;
    else if (y > x && y > z) return y;
    return z;
}

function isVowel(x) {
    let isVowel = false;
    const vowelArray = ["a", "e", "i", "o", "u"];
    vowelArray.forEach(element => {
        if (x.toLowerCase() === element) {
            isVowel = true;
            return isVowel;
        }

    });
    return isVowel;
}

function sum(x) {
    let sum = 0;
    x.forEach(element => {
        sum += element;
    });
    return sum;
}

function multiply(x) {
    let multiply = 1;
    x.forEach(element => {
        multiply *= element;
    });
    return multiply;
}

function reverse(x) {
    let length = x.length;
    let revereString = "";

    for (let index = length - 1; index >= 0; index--) {
        revereString += x[index];
    };
    return revereString;
}

function findLongestWord(x) {
    let greater = 0;
    x.forEach(element => {
        if (greater < element.length) {
            greater = element.length;
        }
    });
    return greater;
}

function filterLongWords(x, i) {
    let longWords = [];
    x.forEach(element => {
        if (element.length > i) {
            longWords.push(element);
        }
    })
    return longWords;
}

function jsFiddle8A(x) {
    const b = x.map(function (element, i, array) {
        return element * 10;
    });

    return b;
};

function jsFiddle8b(x) {
    const b = x.filter(function (element, i, array) {
        return element == 3;
    });

    return b;
};

function jsFiddle8c(x) {

    const b = x.reduce(function (previousValue, element) {
        return previousValue * element;
    });

    return b;
};

let arrays = ["biay", "mandal"];
function xy(...x) {
    return x.
        reduce((previousValue, element) => previousValue + element, 0);
}
let x = [1, 2, 3, 4];
console.log("result " + xy(...[1, 2, 3, 4, 5, 6]));
console.log("result2 " + xy(...[1, 2, 3, 4]));

function combine(x, y) {
    return [...x , ...y];
}

console.log(combine([1,2,3],[1,2,3,4,5,6]));