module.exports = function getZerosCount(number, base) {
    let res;

        let factorBase = (divideIntoSimple(base, simpleNumbers(base)));
        console.log(factorBase);
        res = divideIntoPrimitive(number, factorBase);

    return res;

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
    function divideIntoSimple(base, arr){
        let factor = [];
        let n = 1;
        let i = 0;
          let rest = base ;
        while(rest <= base){
            console.log(arr[i]);
            if(rest % arr[i] === 0){
                n++;
                rest = rest/arr[i];
                base = base/arr[i];
                factor.push(arr[i]);
            }else if(rest !== 1){
                n = 0;
                i++;
                continue;
            }else{
                break;
            }
        }
        return factor[factor.length-1];
    }
    function divideIntoPrimitive(number, factorBase){

        let sum  = 0;
        let tempSum = number;
        let end = 0;
        while(tempSum > factorBase){
            tempSum = Math.floor(tempSum/factorBase);
            sum += tempSum;
        }
        end += Math.floor(sum);
        return end;
    }


};