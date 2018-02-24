module.exports = function getZerosCount(number, base) {
  // ищу простые множители
    let j = 0;
    let i = 2;
    let simpleMultiplierArr = [];
    do {
        if(base === 2){
            simpleMultiplierArr[0] = 2;
            break;
        }
        if ( base % i === 0){
            simpleMultiplierArr[j] = i;
            j++;
            base = base / i;
        }
        else
        {
            i++;
        }
    }
    while (i < base);

    simpleMultiplierArr[j] = i;

    let powSimpleMultiplierArr = [];
    for (let i = 0; i < simpleMultiplierArr.length; i++){
        let count = 1;
        while (simpleMultiplierArr[i] === simpleMultiplierArr[i + 1]){
            simpleMultiplierArr.splice(i+1, 1);
            count++;
        }
        powSimpleMultiplierArr[i] = count;

    }

// ищу  склько раз повторяются простые множители в number
    let countSimpleMulArr = [];
    for (let i = 0; i<simpleMultiplierArr.length; i++) {

        let n = 1;
        let resPow = 0;
        let pow;

        do {
            pow = Math.floor(number / Math.pow(simpleMultiplierArr[i], n));

            n++;

            resPow += pow;

        } while (pow > 0);
        countSimpleMulArr.push(resPow);

    }

    let resSimpleMultiplierArr = [];
    let subArr = [];
    for (let g = 0; g<simpleMultiplierArr.length; g++){
        subArr[0] = countSimpleMulArr[g];
        subArr[1] = powSimpleMultiplierArr[g];
        resSimpleMultiplierArr[g] = subArr;
        subArr = [];

    }



    resSimpleMultiplierArr.sort(function(a,b) {return  a[0] - b[0]});



    return Math.floor(resSimpleMultiplierArr[0][0]/resSimpleMultiplierArr[0][1]);
}