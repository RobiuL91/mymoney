function calculateRemainingTotal(calculateBalance, savePersentage) {

    console.log("claculateBalance : ",calculateBalance)
console.log("savePercentage : ",savePersentage)
   
    const saveingAmmount = (calculateBalance * savePersentage) / 100;
    // console.log(saveingAmmount);
}



document.getElementById('expenses-amount').addEventListener('click', function () {
    const foodCost = document.getElementById('food-expenses').value;
    const foodExpenses = parseInt(foodCost);

    const rentCost = document.getElementById('rent-expenses').value;
    const rentExpenses = parseInt(rentCost);

    const clothsCost = document.getElementById('cloth-expenses').value;
    const clothExpenses = parseInt(clothsCost);

    const incomeInput = document.getElementById('income-ammount').value;
    const incomeAmmount = parseInt(incomeInput);


    const calculateExpenses = foodExpenses + rentExpenses + clothExpenses;
    const calculateBalance = incomeAmmount - calculateExpenses;
    

    // Update on the Html ..........>

    document.getElementById('total-expenses').innerText = calculateExpenses;
    document.getElementById('remaining-balance').innerText = calculateBalance;

    calculateRemainingTotal(calculateBalance);

    // console.log(calculateBalance);
});

// saving amount calcluation....

document.getElementById('save-amount').addEventListener('click', function () {
    const saveInput = document.getElementById('save-persentage').value;
    const savePersentage = parseInt(saveInput);

    const total = document.getElementById('remaining-balance').value
    console.log(total);

    // calculateRemainingTotal(savePersentage);

    // console.log(savePersentage);


    
});