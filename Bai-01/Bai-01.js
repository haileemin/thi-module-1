let arr = ["hai", "giang dam", "dat","phuoc", "nghia"];

function findStringMaxLength(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if(max.length < arr[i].length) {
        max = arr[i];
    };
};
console.log("ký tự dài nhất là: " + max);
};

findStringMaxLength(arr);