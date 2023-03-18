document.getElementById('calculate-money').addEventListener('click', function () {

    // Food Expense:
    const foodExpenseField = document.getElementById('food-expense');
    const foodExpenseString = foodExpenseField.value;
    const foodExpense = parseFloat(foodExpenseString);
    foodExpenseField.value = '';

    // Rent Expense:
    const rentExpenseField = document.getElementById('rent-expense');
    const rentExpenseString = rentExpenseField.value;
    const rentExpense = parseFloat(rentExpenseString);
    rentExpenseField.value = '';

    // Cloth Expense:
    const clothExpenseField = document.getElementById('cloth-expense');
    const clothExpenseString = clothExpenseField.value;
    const clothExpense = parseFloat(clothExpenseString);
    clothExpenseField.value = '';

    // Total Expenses:

    const totalExpenseElement = document.getElementById('total-expense');
    const totalExpense = foodExpense + rentExpense + clothExpense;
    totalExpenseElement.innerText = totalExpense;
})