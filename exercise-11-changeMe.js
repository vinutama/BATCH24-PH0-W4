function changeMe(arr) {
    var obj = {
        firstName: '',
        lastName: '',
        gender: '',
        age: 0,
    }
    for (var i = 0; i < arr.length; i++) {
        console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');
        obj.firstName = arr[i][0];
        obj.lastName = arr[i][1];
        obj.gender = arr[i][2];
        obj.age = Math.round(2018 - arr[i][3]);
        if (isNaN(obj.age) === true) {
            obj.age = 'Invalid Birth Year';
        }
        console.log(obj)
    }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""