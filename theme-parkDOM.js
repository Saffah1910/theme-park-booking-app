let readerElem= document.querySelector(".reader");

    var parktransactions = parkTransactions()

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);

    var radioBtn = document.querySelector("input[name='packRadio']:checked");
  
    if(decodedText == "one"){
      parktransactions.goOnRide(decodedText)
    }
    console.log(parktransactions.getRides())
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