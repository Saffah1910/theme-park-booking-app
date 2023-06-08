let readerElem= document.querySelector(".reader");
const displayElement = document.querySelector(".display")
const buttonsElement = document.querySelector(".buttons")
const confirmBtn = document.querySelector(".confirmBtn")
const qrImage = document.querySelector(".qrImage")

var parktransactions = parkTransactions()
var QRid;

  if(document.URL.includes("qrcode.html")) {
    if (localStorage.getItem("package") == "packageOne") {
      qrImage.setAttribute("src", "../one.png")
    } else if (localStorage.getItem("package") == "packageTwo") {
      qrImage.setAttribute("src", "../two.png")
    } else if (localStorage.getItem("package") == "packageThree") {
      qrImage.setAttribute("src", "../three.png")
    }
  }

  confirmBtn.addEventListener("click", function() {
    const checkedBtn = document.querySelector("input[name='packRadio']:checked")
    
    localStorage.setItem("package", checkedBtn.value)
    
    window.open("../customer/qrcode.html", "_self")

  })




function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);

    var radioBtn = document.querySelector("input[name='packRadio']:checked");
  
  if(decodedText == "one"){
     displayElement.innerHTML = "Your QR code is vailid, you're on package one"
      buttonsElement.style.display = "flex";
      balanceElem.innerHTML = parktransactions.getPackageOne();
      QRid = decodedText;
    } 
  else if (decodedText == "two"){
    displayElement.innerHTML = "Your QR code is vailid, you're on package two"
    buttonsElement.style.display = "flex";
    balanceElem.innerHTML = parktransactions.getPackageTwo();
    QRid = decodedText;
  }
  else if(decodedText == "three"){
    displayElement.innerHTML = "Your QR code is vailid, you're on package three"
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
