module.exports =
    function getZerosCount(number, base) {
   let res;

       let factorBase = (divideIntoSimple(base, simpleNumbers(base)));
       res = divideIntoPrimitive(number, factorBase);

    return res;
}

function simpleNumbers(base){

    let simpleArray = [];
    for (var i=2; i <= base; i++){
        for(var j=2; j<=i; j++){
            if (i%j == 0) break;
        }
        if(j==i) simpleArray.push(i);
    }
    return simpleArray;
}

function divideIntoSimple(base, arr) {
    let factor = new Map();
    let n = 0;
    let i = 0;
    let rest = base;

    while (rest <= base) {

        if (rest % arr[i] === 0) {
            n++;
            rest = rest / arr[i];
            base = base / arr[i];
            if (factor.has(arr[i])) {
                factor.set(arr[i], n);
            } else {
                factor.set(arr[i], n);
            }
        } else if (rest !== 1) {
            n = 0;
            i++;
            continue;
        } else {
            break;
        }
    }

    let resArr;
    resArr = [];

debugger;
    for(let [key, value] of factor){
        if(Math.max(key)){
            resArr[0] = Math.max(key);
            resArr[1] = value;
        }
        if (value > 1 || factor.size === 1) {
            resArr.push(key, value);
        }else{
            continue;
        }
    }
    return resArr;

}

function divideIntoPrimitive(number, factorBase){
    debugger;
    let sum  = 0;
    let tempSum = number;
    debugger;

    if(factorBase[0] !== factorBase[2] || factorBase[2] !== 2){
        while(tempSum > factorBase[0]){
            tempSum = Math.floor(tempSum/factorBase[0]);
            sum += tempSum;
        }
        sum = Math.floor(sum/factorBase[1]);

    }else{

        while(tempSum >= factorBase[2]){
            tempSum = Math.floor(tempSum/(factorBase[2]));
            sum += tempSum;
        }

        sum = Math.floor(sum/factorBase[3]);
    }

    return sum;
}




