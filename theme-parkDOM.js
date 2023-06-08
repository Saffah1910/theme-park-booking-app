let readerElem= document.querySelector(".reader");
const displayElement = document.querySelector(".display")
const buttonsElement = document.querySelector(".buttons")
const confirmBtn = document.querySelector(".confirmBtn")
const qrImage = document.querySelector(".qrImage")
const contain = document.querySelector(".contain")
let val = 0;


    var parktransactions = parkTransactions()
var QRid;
contain.innerHTML = val;
confirmBtn.addEventListener("click", function() {
 val = 1;

//     let p = document.createElement("p");
//     contain.append(p)
//   qrImage.setAttribute("src", "./one.png")
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
   // console.log(parktransactions.getPoints())
    // if(decodedText == "one"){
    //   alert("working")
    // }

  }

function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // console.warn(`Code scan error = ${error}`);
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

  function goOnRideDOM(){
    parktransactions.goOnRide(QRid)
    
    if(QRid == "one") {
      balanceElem.innerHTML = parktransactions.getPackageOne()
    } else if (QRid == "two") {
      balanceElem.innerHTML = parktransactions.getPackageTwo()
    } else if (QRid == "three") {
      balanceElem.innerHTML = parktransactions.getPackageThree()
    }
    //console.log( parktransactions.getRides())


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
    //console.log(parktransactions.getMeal())
  }
  
  buyMealELem.addEventListener("click", buyMealDOM)
