document.getElementById("btn-withdraw").addEventListener("click",function(){
const newWithdrawAmount=getInputFieldValueBytById("withdraw-field");
const previousWithdrawTotal=getElementValueById("withdraw-total");
const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
setTextElementValueById("withdraw-total",newWithdrawTotal);
const previousBalanceTotal=getElementValueById("balance-total");
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
setTextElementValueById("balance-total",newBalanceTotal);

});