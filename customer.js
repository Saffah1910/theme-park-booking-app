const confirmBtn = document.querySelector(".confirmBtn")
const qrImage = document.querySelector(".qrImage")

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