function inputId(input){
  const inputValue=document.getElementById(input);
    const inputValueAmount=parseFloat(document.getElementById(input).value);
    inputValue.value='';
    return inputValueAmount;
}
function Update(ValueAmount,amount){
  const CurrentText=document.getElementById(amount);
  const Current = parseFloat(document.getElementById(amount).innerText);
  const Total = Current+ValueAmount;
  CurrentText.innerText=Total;
 
}
function getCurrentBalance(){
  const balanceCurrentText=document.getElementById('balance-amount');
   const balanceCurrentAmount=parseFloat(balanceCurrentText.innerText);
   return balanceCurrentAmount;
}
function balanceUpdate(ValueAmount,AddOrSubstract){
  const balanceCurrentText=document.getElementById('balance-amount');
   const balanceCurrentAmount=getCurrentBalance();
   if(AddOrSubstract==true){
    const balanceTotal =  balanceCurrentAmount+ValueAmount;
    balanceCurrentText.innerText= balanceTotal ;
   }
   else{
    const balanceTotal =  balanceCurrentAmount-ValueAmount;
    balanceCurrentText.innerText= balanceTotal ;
   }
   
   
   
}
document.getElementById('deposit-submit').addEventListener('click',function(){
   

    // const depositValue=document.getElementById('deposit-input');
    // const depositValueAmount=parseFloat(document.getElementById('deposit-input').value);
    
    // const depositCurrentText=document.getElementById('deposit-amount');
    // const depositCurrent = parseFloat(document.getElementById('deposit-amount').innerText);
    // const depositTotal = depositCurrent+depositValueAmount;
    // depositCurrentText.innerText=depositTotal;
      const depositValueAmount=inputId('deposit-input');
      if(depositValueAmount >0){
        const depositTotal=Update(depositValueAmount,'deposit-amount');
        balanceUpdate(depositValueAmount,true);
      }
      else{
        alert('Enter correct amount')
      }
      
  //  const balanceCurrentText=document.getElementById('balance-amount');
  //  const balanceCurrentAmount=parseFloat(balanceCurrentText.innerText);
  //  console.log(balanceCurrentAmount);
  //  const balanceTotal = depositValueAmount + balanceCurrentAmount;
  //  balanceCurrentText.innerText= balanceTotal ;

 


});



document.getElementById('withdraw-submit').addEventListener('click',function(){
  

    // const withdrawValue=document.getElementById('withdraw-input');
    // const withdrawValueAmount=parseFloat(document.getElementById('withdraw-input').value);
    
  //   const withdrawCurrentText=document.getElementById('withdraw-amount');
  // const withdrawCurrent = parseFloat(document.getElementById('withdraw-amount').innerText);
  //  const withdrawTotal = withdrawCurrent+withdrawValueAmount;
  //  withdrawCurrentText.innerText=withdrawTotal;
  const withdrawValueAmount=inputId('withdraw-input');
  const currentBalance = getCurrentBalance();
  if(currentBalance>=withdrawValueAmount){
    if(withdrawValueAmount>0)
    {
      const withdrawTotal=Update(withdrawValueAmount,'withdraw-amount');
      balanceUpdate(withdrawValueAmount,false);
    }
    else{
      alert('Enter correct amount')
    }
  }
  else{
    alert('Bank e etoh taka ase apnar j etoh taka withdraw korte chacchen? lol');
  }
  
   
  //  const balanceCurrentText=document.getElementById('balance-amount');
  //  const balanceCurrentAmount=parseFloat(balanceCurrentText.innerText);
  //  console.log(balanceCurrentAmount);
  //  const balanceTotal = balanceCurrentAmount-withdrawValueAmount;
  //  balanceCurrentText.innerText= balanceTotal ;

  //  withdrawValue.value='';
});