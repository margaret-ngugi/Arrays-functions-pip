//write a function that takes an array of numbers and consoles the sum of 
//all the even numbers in the array.
// let num= [15,20,25,40,50,65];
function findSum(num){
    let sum =0
    for(let i=0;i < num.length;i++){
       
        if(num[i]%2==0){
            sum +=num[i]
           
        }
        
        
    }
    
 console.log(sum)
}
let num= [15,20,25,40,50,65];
findSum(num)

//Write a function that takes an array of numbers and returns the average of all the numbers in the array.
function averangeArray(array){
   sum =0
    for(let i=0;i < array.length;i++){
       sum+=array[i]     
    }
    return sum / array.length


}
let array = [12,32,10,15,23];
console.log(averangeArray(array));


//Write a function that takes an array of numbers and returns the highest number in the array.
function numbers(arr) {
      return Math.max.apply(null,arr);
  
}

let arr=[1,4,5,2,10,6]
console.log(numbers(arr));

//Write a function that takes an array of numbers and returns the lowest number in the array.
function number(ar) {
    return Math.min.apply(null,ar);

}

let ar=[11,43,5,2,10,6]
console.log(number(ar));


