let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalEl = document.getElementById("Total");
let errorMsgEl = document.getElementById("errorMsg");
let errorMsg = "Please enter a valid input";

function calTip() {
  let billAmountVl = billAmountEl.value;
  let percentageTipVl = percentageTipEl.value;

  if (billAmountVl === "") {
    errorMsgEl.textContent = errorMsg;
  } else if (percentageTipVl === "") {
    errorMsgEl.textContent = errorMsg;
  } else {
    errorMsgEl.textContent = "";
    let billAmount = +billAmountVl;
    let percentageTip = +percentageTipVl;

    let tipAmountVl = (percentageTipVl / 100) * billAmount;
    let totalVl = billAmount + tipAmountVl;

    tipAmountEl.value = tipAmountVl;
    totalEl.value = totalVl;
  }
}
