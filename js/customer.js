function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSenderName = document.getElementById("enterSenderName").value;
  var findSenderBankAccount = enterSenderName + "BankBalance";
    var enterSenderAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSenderAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserBankAccount = enterName + "BankBalance";

       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!
       $${enterAmount} is sent to ${enterName}@email.com.`)

       // transaction history
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSenderName}@email.com
  to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }
