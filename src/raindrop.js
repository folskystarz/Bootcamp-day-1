function rainDrop (num) {
	//this keeps pushing factors of 2
    let result = [];
    let x = num;
    while (x % 2 === 0) {
        result.push(2);
        x = x / 2;
    }
    
    let sqrtNum = Math.sqrt(x);
    for (let i = 3; i <= sqrtNum; i++) {
        while (x % i === 0) {
            result.push(i);
            x = x / i;
        }
    }

    if (x > 2) {
       result.push(x);
    }
    
    let unique = result.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
      })
    
    let output = "";
   for (let i = 0; i < result.length; i++){
     if (unique[i] === 3){
       output = output + "Pling"
     }else if(unique[i] ===5){
       output = output +"Plang"
     }else if (unique[i] === 7){
       output = output + "Plong"
     }
   }
    if (output === ""){
      return num;
    }else{
      return output;
    }
}

console.log(rainDrop(10)); // [2, 5]
console.log(rainDrop(28));
console.log(rainDrop(34));
console.log(rainDrop(105));

