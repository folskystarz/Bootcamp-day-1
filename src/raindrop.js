module.exports = {
  
     rainDrops: (num) => {
  
         
  
   
  
   if (isNaN(num)){
  
     return "Value must be a number"
  
   }
  
   if(num === ""){
  
     return "Value must be entered";
  
   }
  
   if(num % 1 !== 0){
  
     return "Value Cannot be a Decimal number";
  
   }
  
         
  
   let result = "";
  
   let list = [3,5,7];
  
     
  
   if(num % list[0] === 0){
  
     result += "Pling";
  
   }
  
   if(num % list[1] === 0){
  
     result += "Plang";
  
   }
  
   if(num % list[2] === 0){
  
     result += "Plong";
  
   }
  
   if(num % list[0] !== 0 && num % list[1] !== 0 && num % list[2] !== 0){
  
     result = num;
  
   }
  
   
  
   return result.toString();
  
     }
  
  }