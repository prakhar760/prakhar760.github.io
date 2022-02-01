
function calculate() {
  var billamt = document.getElementById('amt').value;
  var opt = document.getElementById('drop').value;
  var num = document.getElementById('people').value;

  var tip = (billamt*opt)/num;
  document.getElementById('result').innerHTML=("TIP AMOUNT <br>$"+tip+"<br>each");
}
