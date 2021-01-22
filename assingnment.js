//

// 1.
function kilometerToMeter(number) {
    if (number > 0) {
        var kilometer = number * 1000;
        return kilometer;
    }
    else {
        console.log("Invalid input");
    }

}
var result = kilometerToMeter(5);
console.log(result);


// 2.
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        console.log("Undefined");
    }
    else {
        var forWatch = watch * 50;
        var forPhone = phone * 100;
        var forLaptop = laptop * 500;
        var total = forWatch + forPhone + forLaptop;
        return total;
    }
}
var output = budgetCalculator(3, 2, 2);
console.log(output);


// 3.
function hotelCost(spend) {
    var cost = 0;
    if (spend < 0) {
        console.log("Invalid");
    }
    else if (spend <= 10) {
        cost = spend * 100;
        return cost;
    }

    else if (spend <= 20) {
        var firstTenNight = 10 * 100;
        var remaining = spend - 10;
        var secondTenNight = remaining * 80;
        cost = firstTenNight + secondTenNight;
        return cost;
    }

    else {
        var firstTenNight = 10 * 100;
        var secondTenNight = 10 * 80;
        var remaining = spend - 20;
        var thirdTenNight = remaining * 50;
        cost = firstTenNight + secondTenNight + thirdTenNight;
        return cost;
    }
}
var result = hotelCost(25);
console.log(result);


// 4.
function megaFriend(str_arr) {
    var  lengthNum= 0, largest;
    if (str_arr != [] || str_arr != '') {
        for (var i = 0; i < str_arr.length; i++) {
            if (str_arr[i].length > lengthNum) {
                lengthNum = str_arr[i].length;
                largest = str_arr[i];
            }
        }
        return largest;
    }
   else{
       return -1;
   }
}
var str_arr = ['Kamal', 'Rahim', 'Zubair', 'Sultana'];
console.log(megaFriend(str_arr));
