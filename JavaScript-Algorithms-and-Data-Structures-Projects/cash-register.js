const DENOM = [10000,5000,2000,1000,500,100,25,5,1];
const CHANGE_NAMES = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE" ,"ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]

function checkCashRegister(price, cash, cid){
  cid = cid.reverse();
  let changeDue = (cash*100) - (price*100);
  var response = {status: "", change: []};
  var change = [];
  for(let i = 0; i < cid.length; i++){
      cid[i][1] = Math.round(cid[i][1]*100);
  }
  function calcChange(){
    for(let i = 0; i<DENOM.length; i++){
      if (changeDue >= DENOM[i]) {
        while (changeDue >= DENOM[i] && cid[i][1] >= DENOM[i]){
          changeDue -= DENOM[i];
          cid[i][1] -=DENOM[i];
          mult += 1;  
        }
      change.push([CHANGE_NAMES[i], (DENOM[i] * mult)]);
      mult = 0;
      } 
      if (changeDue >= 0.01){
        response.status =  "INSUFFICIENT_FUNDS";
        response.change = [];
        return response;
      }
      console.log(change);
    }
  }
  for (let i = 0; i<DENOM.length; i++) {
    cidTotal += cid[i][1];
  }
  if (changeDue > ) {
    response.status = "OPEN"
    response.change = change;
  } else if (changeDue === cidTotal) {
    response.status = "CLOSED"
    response.change = cid;
  } else{
    countChange();
  }
};
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
