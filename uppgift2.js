const priceOfOne = 12;
const minAmountDicount = 1000;
const drunkCups = 50;

let moneySpent = priceOfOne * drunkCups;

if (moneySpent < 1000){
    let cups = Math.ceil((minAmountDicount - moneySpent) / priceOfOne);
    console.log(`Du får inte 10% rabbatt. Du behöver dricka ${cups} koppar mer!`);
}else {
    console.log("Du får 10% rabbatt");
}