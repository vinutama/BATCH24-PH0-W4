function cariModus(arr) {
    var modusArr = [];
    for (var i = 0; i < arr.length; i++) {
        var counterMod = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                counterMod++;
                modusArr.push(arr[i]);
            }
        }
    }
    if (!modusArr.length) {
        return -1;
    }
    if (modusArr.length < arr.length) {
        return modusArr[0];
    } else {
        return -1;
    }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1