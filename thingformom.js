const salePercents = [10, 20, 25, 30, 35, 40, 45, 50, 55, 75];
const buttonsContainer = document.getElementById("buttonsContainer");
const result = document.getElementById("result");

function calculate(percent) {
    let price = document.getElementById("price").value;
    let discounted = price * (1 - percent / 100);
    document.getElementById("result").textContent = 
    "Ціна зі знижкою: " + discounted.toFixed(2) + " гривень";
}
