/**
 Diberikan sebuah function shoppingTime(memberId, money) 
 yang menerima dua parameter berupa string dan number. 
 Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi 
memberId, money, listPurchased dan changeMoney.

--Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
--Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
--Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu
 dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
 */


function shoppingTime(memberId, money) {
    var listBarang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ];
    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup';
    }
    for (var i = 0; i < listBarang.length; i++) {
        // console.log(listBarang[i]);
        var obj = {
            memberId: memberId,
            money: money,
            listPurchased: [],
            changeMoney: money
        }
        for (var j = 0; j < listBarang.length; j++) {
            if (listBarang[j][1] <= obj.changeMoney) {
                obj.listPurchased.push(listBarang[j][0]);
                obj.changeMoney -= listBarang[j][1];
                //console.log(obj);
            }
        }
    }
    return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja