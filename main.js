console.clear()
console.log("+======= [PIN ATTACK] =======+\n")

let num = 2175
let leg = 4
let max = 18

startIn(random(leg))

function startIn(pw){
  if(pw == num){
    console.clear()
    console.log("+======= [PIN ATTACK] =======+\n")
    console.log("+ PIN correct is: " + pw + "\n")
    return
  }
  console.log("+ Try with (" + pw + ") incorrect!")
  max--;
  if(max < 0){
    console.log("\nAttacking PIN Please Wait ...")
    setTimeout(function(){
      max = 18
      console.clear()
      console.log("+======= [PIN ATTACK] =======+\n")
      startIn(random(leg))
    }, 80)
  }else{
    startIn(random(leg))
  }
}

function random(length){
  let result = ""
  const numbers = "0123456789"
  const numbersLength = numbers.length
  let count = 0
  while(count < length){
    result += numbers.charAt(Math.floor(Math.random() * numbersLength))
    count += 1
  }
  return result;
}
