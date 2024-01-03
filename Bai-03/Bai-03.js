function isNarcissisticNumber() {
    let arr = [];
    for (i = 100; i <= 10000 ; i++) {
        let n = i;
        let y = n.toString();
        if (y.length > 2){
            let a = 0;
            let result = 0;
            for(j = 0; j <= y.length; i++){
                a = i % 10;
                result += Math.pow(a, y.length);
            }
            if (result === i){
                arr.push(i);
            }
        }
    }
    console.log(arr);
}

isNarcissisticNumber();




