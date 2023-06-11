let i = 10;
let ar = new Array(0);

for(let index = 0; index<=i;index++){
    if (index == 0){
        ar.push(0);
    }
    else if (index == 1){
        ar.push(1);
    }
    else{
        ar.push(ar[index-1]+ar[index-2]);
    }
}
console.log(ar);
console.log(ar[i-1]);