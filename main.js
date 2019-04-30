let form = document.getElementById("calculate__interest__form").addEventListener("submit", function(event){
    event.preventDefault()
  });

  let principal;
  let yearsToGrow;
  let yearlyAddition;
  let interestRate;
  let result;


calculate__savings = () => {
    principal = document.getElementById('principal').value;
    yearsToGrow = document.getElementById('years__to__grow').value;

    yearlyAdditionStr = document.getElementById('yearly__addition').value;
    let yearlyAddition = Number(yearlyAdditionStr);

    interestRate = document.getElementById('interest__rate').value / 100 + 1;

    for (let i = 0; i < yearsToGrow; i++) {
        principal *= interestRate;
        principal += yearlyAddition;
    }
    result = Math.floor(principal)
    document.getElementById("result").innerText = result;
}