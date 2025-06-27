// a loan based on income and credit score.

function checkLoanEligibility(income, creditScore) {
    if (income >= 50000) {
        if (creditScore >= 700) {
            return "Eligible for a loan with a low interest rate.";
        } else {
            return "Eligible for a loan but with a higher interest rate.";
        }
    } 
    else {
        if (creditScore >= 700) {
            return "Not eligible for a loan due to low income, but can apply for a small loan.";
        } else {
            return "Not eligible for a loan.";
        }
    }
}


console.log(checkLoanEligibility(60000, 750)); 
console.log(checkLoanEligibility(60000, 650));
console.log(checkLoanEligibility(40000, 750)); 
console.log(checkLoanEligibility(40000, 650));