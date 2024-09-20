// // Problem 01


function calculateTax(income, expenses) {
     if(0>income || 0>expenses || income < expenses){
         return "Invalid Input"
     }

     let calculate = income - expenses;
     let tax = (calculate * .20)
     return tax;
}
let cost = calculateTax(6000, -1500)
console.log(cost)




// // Problem 02
function sendNotification(email) {

if(email.includes('@')===false){
     return "Invalid Email";
}
   let mail= email.split('@')
   let add = mail.join(' sent you an email from ')
   return add;
}

let emailSend = sendNotification("sadia8icloud.com")
console.log(emailSend)





// Problem 03

function checkDigitsInName(name) {
  for(let i=0;i<name.length; i++){
    if(!isNaN(name[i])){
     return true
   }
 }
   
     if(typeof name !== 'string') {
         return "Invalid Input"
    }
       else{
         return false;
       }
     }
    
let input = checkDigitsInName(["Raj"])
console.log(input);


// Problem 04


function calculateFinalScore(obj) {
  if ( typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || obj.testScore > 50 || typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || typeof obj.isFFamily !== 'boolean'){
    return "Invalid Input"
}
if (typeof obj !== "object")
  return "Invalid Input" 
let totalMarks = obj.testScore + obj.schoolGrade
  if(obj.isFFamily){
     totalMarks = totalMarks + (totalMarks * 0.2) 
    }
    if(totalMarks >=80){
    return true
  }
  else{
    return false
  }
}
const person={ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
let details=calculateFinalScore(person)
console.log(details)


// // Problem 05
function  waitingTime(waitingTimes  , serialNumber) {

  if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
     return "Invalid Input "

  }
let sum = 0;
for(let i = 0; i<waitingTimes.length; i++){
  sum = sum + waitingTimes[i];
}

let round= Math.round(sum/waitingTimes.length);
let serial = serialNumber - waitingTimes.length -1;
let waitForTimes = round * serial
return waitForTimes
}
let num = waitingTime("[6,2]", 9)
console.log(num)


