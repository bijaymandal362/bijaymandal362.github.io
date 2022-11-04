window.onload = testJavaScript;

function testJavaScript() {
    testMax(6, 5, 5);
    testMaxOfThree(44, 5, 4, 5);
    testIsVowel("A");
    testSum([1, 2, 3, 6, 1], 13);
    testSum([1, 2, 3, 6, 1], 10);
    testMultiply([1, 2, 3, 4], 25);
    testMultiply([1, 2, 3, 4], 24);
    testReverse("bijay mandal", "ladnam yajib");
    testReverse("bijay mandal", "ladnam yib");
    testFindLongestWord(["Bijay", "Kumar", "Mandals"], 7);
    testfilterLongWords(["Bijay", "kunmarrrr", "mandall"], 5, ["kunmarrrr", "hjhjhjhjhjhj"]);
    testjsFiddle8A([1, 2, 3], [10, 20, 30]);
    testjsFiddle8b([1, 2, 3], [3]);
    testjsFiddle8c([1, 2, 3], 6);
}

function testMax(x, y, exceptResult) {
    let outPut = max(x, y);
    if (exceptResult === outPut) {
        console.log("Excepted output of max(" + x + "," + y + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of max(" + x + "," + y + ") is " + outPut + "  TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testMaxOfThree(x, y, z, exceptResult) {
    let outPut = maxOfThree(x, y, z);
    if (exceptResult === outPut) {
        console.log("Excepted output of max(" + x + "," + y + "," + z + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of max(" + x + "," + y + "," + z + ") is " + outPut + "  TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testIsVowel(x) {
    let outPut = isVowel(x);
    if (outPut)
        console.log("Excepted output of IsVowel(" + x + ") is " + outPut + "  TEST SUCCEDED");
    else console.log("Excepted output of IsVowel(" + x + ") is " + outPut + " TEST FAILED.");
}


function testSum(x, exceptResult) {
    let outPut = sum(x);
    if (outPut == exceptResult) {
        console.log("Excepted output of sum(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of sum(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testMultiply(x, exceptResult) {
    let outPut = multiply(x);
    if (outPut == exceptResult) {
        console.log("Excepted output of multiply(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of multiply(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testReverse(x, exceptResult) {
    let outPut = reverse(x);
    if (outPut == exceptResult) {
        console.log("Excepted output of reverse(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of reverse(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testFindLongestWord(x, exceptResult) {
    let outPut = findLongestWord(x);
    if (outPut == exceptResult) {
        console.log("Excepted output of findLongestWord(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of findLongestWord(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testfilterLongWords(x, i, exceptResult) {
    let outPut = filterLongWords(x, i);
    let isEqual = true;
    for (let i = 0; i < outPut.length; i++) {
        if (outPut[i] !== exceptResult[i]) {
            isEqual = false;
            break;
        }
    }
    if (outPut.length == exceptResult.length && isEqual) {
        console.log("Excepted output of filterLongWords(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of filterLongWords(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddle8A(x, exceptResult) {
    let outPut = jsFiddle8A(x);
    if (outPut.length == exceptResult.length && checkArrayEquals(outPut,exceptResult)) {
        console.log("Excepted output of jsFiddle8A(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8A(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddle8b(x, exceptResult) {
    let outPut = jsFiddle8b(x);
    if (outPut.length == exceptResult.length && checkArrayEquals(outPut,exceptResult)) {
        console.log("Excepted output of jsFiddle8b(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8b(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function testjsFiddle8c(x, exceptResult) {
    let outPut = jsFiddle8c(x);
    if (outPut == exceptResult ) {
        console.log("Excepted output of jsFiddle8c(" + x + ") is " + outPut + "  TEST SUCCEDED");
    } else {
        console.log("Excepted output of jsFiddle8c(" + x + ") is " + outPut + " TEST FAILED. Expected  " + exceptResult + " found  " + outPut);
    }
}

function checkArrayEquals(a, b) {
    let isEqual = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            isEqual = false;
        break;
    }
    return isEqual;
}