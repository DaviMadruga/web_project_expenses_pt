let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function calculateTotalExpenses() {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    total += expenseEntries[i][1];
  }

  return total;
}

totalExpensesValue = calculateTotalExpenses();

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  let balance = 0;

  balance = budgetValue - totalExpensesValue;

  return balance;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < calculateTotalExpenses() * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }

  return total;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const total = calculateCategoryExpenses(category);

    categoriesTotals.push([category, total]);
  }

  let largestCategory = categoriesTotals[0][0];
  let largestTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestTotal) {
      largestTotal = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += expense[1];
}
