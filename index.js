

const userAge = Number(prompt("Your age is:"))
const Distance=Number(prompt("How km far away is th place from here ?"))
const costPerKM=0.21


const COST=costPerKM*Distance 
const juniorOFF=COST*0.8 
const seniorOFF=COST*0.6

console.log(' ')



console.log('Age', userAge)
console.log('Distance', Distance)



if (userAge < 18) {
    
    console.log(`You have 20% off , you will pay: ${juniorOFF.toFixed(2)} `)


}

else if (userAge > 65) {
    console.log(`You have 45% off , you will pay: ${seniorOFF.toFixed(2)}`)
}
else {
    console.log(`You will pay: ${COST.toFixed(2)}`)
}
