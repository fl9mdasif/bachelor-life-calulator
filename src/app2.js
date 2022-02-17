// getElementById
const balanceTotalField = document.getElementById('balanceTotal');
const totalExpense = document.getElementById('totalExpense');
const savingsAmount = document.getElementById('savingAmount');
const remainingBalanceUpdate = document.getElementById('remainingAmount');
const err2 = document.getElementById('empty2');
const err1 = document.getElementById('empty1');


// function for all input value
function inputFieldForAll(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const amount = parseFloat(inputText);
    return amount;
}


function expense() {

    const incomeInput = inputFieldForAll('incomeInput');
    const fInp = inputFieldForAll('foodInput');
    // console.log(incomeInput);
    const rInp = inputFieldForAll('rentInput');
    const cInp = inputFieldForAll('clothsInput');

    const totalExpenseCost = fInp + rInp + cInp;

    
    // for update expense 
    totalExpense.innerText = totalExpenseCost;
   

    const restAmount = incomeInput - totalExpenseCost
    balanceTotalField.innerText = restAmount;

    if (incomeInput < totalExpenseCost) {
        err2.innerText = 'Error : not enough money for expense';
        balanceTotalField.innerText='';
    } else {
        err2.style.display = 'none';
        return restAmount;
    }
}

document.getElementById('calculateBtn').addEventListener('click', function () {
    const incomeInput = inputFieldForAll('incomeInput');

    const fInp = inputFieldForAll('foodInput');
    const rInp = inputFieldForAll('rentInput');
    const cInp = inputFieldForAll('clothsInput');

    // if (fInp < 0 && fInp != 'numbers') {
    //     err1.innerText = 'Error : please put a positive number';
    // }
    
    if ((incomeInput  || fInp  || rInp || cInp )< 0) {
        err1.innerText = 'Error : please put a positive number';
    } else {
        expense();
        err1.style.display = 'none';
    }
})


document.getElementById('saveBtn').addEventListener('click', function () {

    const saveInp = inputFieldForAll('savingInput');

    const restA = expense();
    // // get the value after percentage
    const totalSaving = restA * (saveInp / 100);
    savingsAmount.innerText = totalSaving;

    const remainingBalance = restA - totalSaving;
    remainingBalanceUpdate.innerText = remainingBalance;

})