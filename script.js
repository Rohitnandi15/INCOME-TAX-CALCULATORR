function calculateTax() {
  const income = parseFloat(document.getElementById("income").value) || 0;
  const deductions =
    parseFloat(document.getElementById("deductions").value) || 0;
  const taxableIncome = Math.max(0, income - deductions);

  let tax = 0;

  if (taxableIncome <= 300000) {
    tax = 0;
  } else if (taxableIncome <= 700000) {
    tax = (taxableIncome - 300000) * 0.05;
  } else if (taxableIncome <= 1000000) {
    tax = 20000 + (taxableIncome - 700000) * 0.1;
    if (taxableIncome > 700000) {
      tax += tax * 0.04;
    }
  } else if (taxableIncome <= 1200000) {
    tax = 20000 + 30000 + (taxableIncome - 1000000) * 0.15;
    if (taxableIncome > 700000) {
      tax += tax * 0.04;
    }
  } else if (taxableIncome <= 1500000) {
    tax = 20000 + 30000 + 30000 + (taxableIncome - 1200000) * 0.2;
    if (taxableIncome > 700000) {
      tax += tax * 0.04;
    }
  } else {
    tax = 20000 + 30000 + 30000 + 60000 + (taxableIncome - 1500000) * 0.3;
    if (taxableIncome > 700000) {
      tax += tax * 0.04;
    }
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("result").textContent = `Your calculated income tax is: ₹${tax.toFixed(2)}`;
}
