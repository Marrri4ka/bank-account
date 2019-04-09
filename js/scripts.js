var user;

function AccountMember(name,balance){
  this.name = name,
  this.balance = balance
}

function signUp() {
  user = new AccountMember($("input#userName").val(), parseFloat($("input#initialDeposit").val()));
  displayBalance(user.balance);
}

function withdraw (amount){
  user.balance -= amount;
  console.log("new balance: "+user.balance);
  displayBalance(user.balance);
  return user.balance;
}

function deposit (amount){
  user.balance += amount;
  console.log(user.balance);

  displayBalance(user.balance);
  return user.balance;
}

function displayBalance(balance){

  $("#current-balance").text(balance);


}


$(document).ready(function(){
  $("form.sign-up").submit(function(event){
    event.preventDefault();
    signUp();

  });

  $("#withdraw-button").click(function(event){
    event.preventDefault();
    withdraw(parseFloat($("#deposit-withdraw").val()));

  });

  $("#deposit-button").click(function(event){
    event.preventDefault();
    deposit(parseFloat($("#deposit-withdraw").val()));
  })

});
