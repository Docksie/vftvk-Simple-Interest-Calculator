document.querySelector("#range").addEventListener("input", function(e){
    document.querySelector(".range").textContent=e.currentTarget.value + "%";
}) 

function compute() {
    var amount = document.getElementById("principal").value;
    if(amount <= 0 || amount == '') {
        window.alert("Enter a positive integer greater than 0");
        document.getElementById("principal").focus();
        return;
    }
    var interestRate = document.getElementById("range").value / 100;
    var numOfYears = document.getElementById("years").value;
    var result = document.getElementById("resultDisplay").innerHTML = amount * interestRate * numOfYears;
    document.getElementById("amountDisplay").innerHTML = amount;
    document.getElementById('rangeDisplay').innerHTML = interestRate;
    document.getElementById('resultDisplay').innerHTML = result;
    var currentYear = new Date().getFullYear();
    var totalYear = currentYear + Number(numOfYears);
    document.getElementById('yearsDisplay').innerHTML = totalYear;
}
