/**
 * LESSON 35: Closures & Private State
 *
 * A closure gives you access to an outer function's scope from an inner function.
 * We can use closures to hide variables (private state) from direct external access.
 *
 * WHAT TO DO:
 * Create a function 'createBankAccount' that takes 'initialBalance' (number).
 * It should declare a variable 'balance' in the outer scope, which starts at 'initialBalance'.
 * It should return an object containing three methods:
 * 1. 'deposit(amount)' - adds amount to the balance.
 * 2. 'withdraw(amount)' - subtracts amount from the balance only if balance >= amount.
 * 3. 'getBalance()' - returns the current balance.
 *
 * Note: The 'balance' variable must not be a property of the returned object (i.e. do not use 'this.balance').
 * It should only be accessible through the three methods via closure!
 *
 * IMPORTANT: Call 'createBankAccount' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
      }
    },
    getBalance() {
      return balance;
    }
  };
}

// Export for validation
export const lesson35 = {
  createBankAccount: typeof createBankAccount !== "undefined" ? createBankAccount : null,
};
