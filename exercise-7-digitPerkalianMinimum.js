function digitPerkalianMinimum(angka) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i * j === angka) {
                arr1.push(i);
                arr2.push(j);
            }
        }
    }
    var min = 999
    for (var i = 0; i < arr1.length; i++) {
        var merge = [];
        for (var j = 0; j < arr2.length; j++) {
            if (i === j) {
                merge.push(arr1[i], arr2[j])
            }
        }
        var joinMerge = merge.join('')
        if (joinMerge.length < min) {
            min = joinMerge.length;
        }
    }
    return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2