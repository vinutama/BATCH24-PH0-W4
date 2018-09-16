function totalDigitRekursif(angka) {
    var numStr = String(angka);
    if (numStr.length === 1) {
        return numStr[0];
    } else {
        return Number(numStr[0]) + Number(totalDigitRekursif(numStr.substr(1)));
    }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5