function calculateRemainingTotal(totalRemainingBalance, savePercentage) {
    const savingAmount = (savePercentage / 100) * totalRemainingBalance;
  
    const currentBalance = totalRemainingBalance - savingAmount;
  
    return {
      amount: savingAmount,
      balance: currentBalance,
    };
  }
  
  document
    .getElementById("expenses-amount")
    .addEventListener("click", function () {
      const foodCost = document.getElementById("food-expenses").value;
      const foodExpenses = parseInt(foodCost);
  
      if (foodExpenses <= 0 || isNaN(foodExpenses)) {
        alert("Please enter a valid number");
        return false;
      }
  
      const rentCost = document.getElementById("rent-expenses").value;
      const rentExpenses = parseInt(rentCost);
  
      const clothsCost = document.getElementById("cloth-expenses").value;
      const clothExpenses = parseInt(clothsCost);
  
      const incomeInput = document.getElementById("income-ammount").value;
      const incomeAmmount = parseInt(incomeInput);
  
      const calculateExpenses = foodExpenses + rentExpenses + clothExpenses;
      const calculateBalance = incomeAmmount - calculateExpenses;
  
      document.getElementById("total-expenses").innerText = calculateExpenses;
      document.getElementById("remaining-balance").innerText = calculateBalance;
    });
  
  // saving amount calcluation....
  
  document.getElementById("save-amount").addEventListener("click", function () {
    const saveInput = document.getElementById("save-persentage").value;
    const savePercentage = saveInput ? parseInt(saveInput) : 0;
  
    const total = document.getElementById("remaining-balance").innerText;
  
    const remaining = calculateRemainingTotal(total, savePercentage);
  
    document.getElementById("total-saving").innerText = remaining.amount;
    document.getElementById("total-balance").innerText = remaining.balance;
  });
  