function sorting(arrNumber) {
    arrNumber.sort(function (value1, value2) {
        return value1 < value2;
    })
    return arrNumber
}


function getTotal(arrNumber) {
    var counter = 0;
    var max = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > max) {
            max = arrNumber[i];
        }
        if (max === arrNumber[i]) {
            counter++;
        }
    }
    if (counter) {
        return 'angka paling besar adalah ' + arrNumber[0] + ' ' + 'dan jumlah kemunculan sebanyak ' + counter + ' kali';
    } else {
        return 'No data';
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));