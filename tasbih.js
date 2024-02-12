const subhanallahDisplay = document.getElementById('Subhanallah-display');
const subhanallahIncrement = document.getElementById('Subhanallah-increment')
const subhanallahDecrement = document.getElementById('Subhanallah-decrement')

const alhamdulillahDisplay = document.getElementById('Alhamdulillah-display');
const alhamdulillahIncrement = document.getElementById('Alhamdulillah-increment')
const alhamdulillahDecrement = document.getElementById('Alhamdulillah-decrement')

const allahuakbarhDisplay = document.getElementById('Allahu-akbar-display');
const allahuakbarIncrement = document.getElementById('Allahu-akbar-increment')
const allahuakbarDecrement = document.getElementById('Allahu-akbar-decrement')

const resetBtn = document.getElementById('resetBtn')

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAKberInitialValue = 0;

subhanallahIncrement.addEventListener('click',function(){
   
    if (subhanAllahInitialValue === 33) {
        return alert("Subhan Allah Complete. Please Fillup another one")
    }
    subhanAllahInitialValue += 1
    subhanallahDisplay.innerText = subhanAllahInitialValue
})

subhanallahDecrement.addEventListener('click',function(){
    if (subhanAllahInitialValue === 0 ) {
        return alert("You cannot enter a negative value ")
    }
    subhanAllahInitialValue -= 1
    subhanallahDisplay.innerText = subhanAllahInitialValue
})

alhamdulillahIncrement.addEventListener('click',function(){
    if (alhamdulillahInitialValue === 33) {
        return alert(" alhamdulillah  complete.now say Allahu akbar")
    }
    alhamdulillahInitialValue +=1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

alhamdulillahDecrement.addEventListener('click',function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("it cannot be a negative value")
    }
    alhamdulillahInitialValue -= 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

allahuakbarIncrement.addEventListener('click',function(){
    if (allahAKberInitialValue === 33) {
        return alert("allahu akbar complete mashallah brother")
    }
    allahAKberInitialValue += 1
    allahuakbarhDisplay.innerText = allahAKberInitialValue
})
allahuakbarDecrement.addEventListener('click',function(){
    if (allahAKberInitialValue === 0) {
        return alert("it cannot be less than 0")
    }
    allahAKberInitialValue -= 1
    allahuakbarhDisplay.innerText = allahAKberInitialValue
})

resetBtn.addEventListener('click',function(){
    subhanallahDisplay.innerText = 0
    alhamdulillahDisplay.innerText = 0
    allahuakbarhDisplay.innerText = 0 
    subhanAllahInitialValue = 0
    alhamdulillahInitialValue = 0
    allahAKberInitialValue = 0 
})
