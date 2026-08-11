let num = "3391933", k = 3;
console.log(largestNumber(num, k));

function largestNumber(num, k) {
    let map = new Map();

    for(let i = 0; i < num.length; i++) {
        let number = Number(num[i]);

        if(map.has(number)) map.set(number, map.get(number) + 1);
        else map.set(number, 1);
    }

    let largeNumber = "";
    let countOfLastDigit = 0;
    let lastDigit;

    while(map.size > 0) {
        let useDigit = false;

        for(let d = 9; d >= 0; d--) {
            if(!map.has(d)) continue;
            if(d === lastDigit && countOfLastDigit === k) continue;

            largeNumber += d;
            map.set(d, map.get(d) - 1);

            if(map.get(d) <= 0) map.delete(d);

            if(d === lastDigit) countOfLastDigit++;
            else {
                lastDigit = d;
                countOfLastDigit = 1;
            }

            useDigit = true;
            break;
        }

        if(!useDigit) break;
    }

    return largeNumber;
}
