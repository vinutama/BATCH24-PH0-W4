function hitungHuruf(kata) {
    var splitKata = kata.split(' ');
    //console.log(splitKata)
    var pembanding = 0;
    var result = '';
    for (var i = 0; i < splitKata.length; i++) {
        var splitAlphabet = splitKata[i].split('')
        for (var j = 0; j < splitAlphabet.length; j++) {
            for (var k = 0; k < splitAlphabet.length; k++) {
                var counter = 0;
                if (j !== k && splitAlphabet[j] === splitAlphabet[k]) {
                    counter++;
                }
                if (counter > pembanding) {
                    pembanding = counter;
                    result = splitKata[i];
                }
                // console.log(pembanding)
            }
        }
    }
    return result;

}

// TEST CASES{}
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau