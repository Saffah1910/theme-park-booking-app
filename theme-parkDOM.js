let readerElem= document.querySelector(".reader");
const displayElement = document.querySelector(".display")
const buttonsElement = document.querySelector(".buttons")

var parktransactions = parkTransactions()
var QRid;

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);

    var radioBtn = document.querySelector("input[name='packRadio']:checked");
  
  if(decodedText == "one"){
      displayElement.innerHTML = "Your QR code is vailid, you're on package one"
      setTimeout(function () {
      displayElement.innerHTML = ""
      }, 6000)
      buttonsElement.style.display = "flex";
      balanceElem.innerHTML = parktransactions.getPackageOne();
      QRid = decodedText;
    } 
  else if (decodedText == "two"){
    displayElement.innerHTML = "Your QR code is vailid, you're on package two"
    setTimeout(function () {
    displayElement.innerHTML = ""
    }, 6000)
    buttonsElement.style.display = "flex";
    balanceElem.innerHTML = parktransactions.getPackageTwo();
    QRid = decodedText;
  }
  else if(decodedText == "three"){
    displayElement.innerHTML = "Your QR code is vailid, you're on package three"
    setTimeout(function () {
    displayElement.innerHTML = ""
    }, 6000)
    buttonsElement.style.display = "flex";
    balanceElem.innerHTML = parktransactions.getPackageThree();
    QRid = decodedText;
  }
 

  }

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
}
let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  const nameElement = document.querySelector(".firstname")
  const numberElement = document.querySelector(".phone")
  
  
  var radioBtn = document.querySelector("input[name='packRadio']:checked");
    const buyRideElem = document.querySelector(".buyRide")
    const buyMealELem = document.querySelector(".buyMeal")
    const balanceElem = document.querySelector(".balance")
    const confirmElem = document.querySelector(".confirm")

  function goOnRideDOM(){
    parktransactions.goOnRide(QRid)
    
    if(QRid == "one") {
      balanceElem.innerHTML = parktransactions.getPackageOne()
    } else if (QRid == "two") {
      balanceElem.innerHTML = parktransactions.getPackageTwo()
    } else if (QRid == "three") {
      balanceElem.innerHTML = parktransactions.getPackageThree()
    }

  }buyRideElem.addEventListener("click", goOnRideDOM)

  function buyMealDOM(){
    parktransactions.buyMeal(QRid)
    if(QRid == "one") {
      balanceElem.innerHTML = parktransactions.getPackageOne()
    } else if (QRid == "two") {
      balanceElem.innerHTML = parktransactions.getPackageTwo()
    } else if (QRid == "three") {
      balanceElem.innerHTML = parktransactions.getPackageThree()
    }
  }
  
  buyMealELem.addEventListener("click", buyMealDOM)
