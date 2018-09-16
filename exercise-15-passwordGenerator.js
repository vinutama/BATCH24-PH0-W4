function changeVocals(str) {
    var vocals = 'aiueoAIUEO';
    var vocalMod = 'bjvfpBJVFP';
    var resultVocal = '';
    for (var i = 0; i < str.length; i++) {
        var counter = 0;
        for (var j = 0; j < vocals.length; j++) {
            if (str[i] === vocals[j]) {
                resultVocal += vocalMod[j];
                counter++;
            }
        }
        if (counter === 0) {
            resultVocal += str[i];
        }


    }
    return resultVocal;
}


function reverseWord(str) {
    var reverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

function setLowerUpperCase(str) {
    var upperCase = str.toUpperCase();
    var lowerCase = str.toLowerCase();
    var besarKecil = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === upperCase[i]) {
            besarKecil += lowerCase[i];
        } else if (str[i] === lowerCase[i]) {
            besarKecil += upperCase[i];
        }
    }
    return besarKecil;
}

function removeSpaces(str) {
    var space = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            space += '';
        } else {
            space += str[i];
        }
    }
    return space;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter input adalah 5';
    }
    var vocalsChange = changeVocals(name);
    var wordReverse = reverseWord(vocalsChange);
    var setUpperLower = setLowerUpperCase(wordReverse);
    var spaceRemove = removeSpaces(setUpperLower);
    return spaceRemove;

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'