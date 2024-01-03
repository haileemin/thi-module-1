function tryLastIndexOf(arr, value) {
    let findValue = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) {
            findValue = arr[i]
        };
    }
        if(findValue != 0) {
            console.log(arr.length-1);
        } else{
            console.log(-1)
        }
    
}
tryLastIndexOf([1, 2, 3, 4], 0)