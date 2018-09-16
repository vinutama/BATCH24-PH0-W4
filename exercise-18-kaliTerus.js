function kaliTerusRekursif(angka) {
    var numStr = String(angka);
    if (numStr.length === 1) {
        return angka;
    } else {
        subStr = Number(numStr[0]) * Number(kaliTerusRekursif(numStr.substr(1)));
        return kaliTerusRekursif(subStr);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6