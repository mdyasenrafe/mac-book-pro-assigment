function setInnerText(id, number) {
  //get amount for extraMemoryAmount
  const extraElementAmount = document.getElementById(id);
  //convert int and get text
  const extraElementAmountNumber = parseInt(extraElementAmount.innerText);
  //set  extra element  Amount inner text
  extraElementAmount.innerText = number;
}
function totalPriceCalculation() {
  //set variable and get tag
  const bestPriceAmount = document.getElementById("best-price-amount");
  const extraMemoryAmount = document.getElementById("extra-memory-amount");
  const extraStorageAmount = document.getElementById("extra-storage-amount");
  const DeliveryCostAmount = document.getElementById("delivery-cost-amount");
  const totalPriceAmount = document.getElementById("total-price-amount");
  const couponTotalPriceAmount = document.getElementById("coupon-total-amount");
  //convert int and get number
  const bestPriceAmountNumber = parseInt(bestPriceAmount.innerText);
  const deliveryCostAmountNumber = parseInt(DeliveryCostAmount.innerText);
  const extraMemoryAmountNumber = parseInt(extraMemoryAmount.innerText);
  const extraStorageAmountNumber = parseInt(extraStorageAmount.innerText);
  //calculation
  totalPriceAmount.innerText =
    bestPriceAmountNumber +
    extraStorageAmountNumber +
    extraMemoryAmountNumber +
    deliveryCostAmountNumber;
  couponTotalPriceAmount.innerText = totalPriceAmount.innerText;
}
//handle 8gb memory function call
function handle8GbMemory() {
  //set inner text function call
  setInnerText("extra-memory-amount", 0);
  //total price function call
  totalPriceCalculation();
}
//handle 16 gb memory function call
function handle16GbMemory() {
  //calculation funtion call
  setInnerText("extra-memory-amount", 180);
  //total price function call
  totalPriceCalculation();
}
// handle 256Gb Ssd function
function handle256GbSsd() {
  setInnerText("extra-storage-amount", 0);
  //total price function call
  totalPriceCalculation();
}
//handle 512 gb ssd
function handle512GbSsd() {
  //setinner text function call
  setInnerText("extra-storage-amount", 100);
  //total price function call
  totalPriceCalculation();
}
//handle 1Tb Ssd function call
function handle1TbSsd() {
  //set inner text function call
  setInnerText("extra-storage-amount", 180);
  //total price function call
  totalPriceCalculation();
}
//Free Delivery Cost function
function freeDeliveryCost() {
  //setinner text function call
  setInnerText("delivery-cost-amount", 0);
  //total price function call
  totalPriceCalculation();
}
//premiumDeliveryCost function
function premiumDeliveryCost() {
  //setinner text function call
  setInnerText("delivery-cost-amount", 20);
  //total price function call
  totalPriceCalculation();
}
function handleApply() {
  //set variable
  const couponPriceAmount = document.getElementById("coupon-total-amount");
  const couponPriceAmountNumber = parseFloat(couponPriceAmount.innerText);
  const couponInput = document.getElementById("coupon-input");
  const applyBtn = document.getElementById("apply-btn");
  const couponFailMessage = document.getElementById("coupon-fail");
  //check conditon
  if (couponInput.value == "stevekaku") {
    const discountAmount = (couponPriceAmountNumber * 20) / 100;
    couponPriceAmount.innerText = couponPriceAmountNumber - discountAmount;
    applyBtn.disabled = true;
    couponFailMessage.innerText = "";
  }
  //fail message and set inner text
  else {
    couponPriceAmount.innerText = couponPriceAmount.innerText;
    couponFailMessage.innerText = "Please input a correct promo code";
  }
  //clear input value
  couponInput.value = "";
}
