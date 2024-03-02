function loadData(name) {
  if (name === "apple1") {
    document.getElementById("images").src = "images/download (3).jpeg";
	document.getElementById("images").style.display ='block';
	document.getElementById('text').innerHTML = "The iPhone XS models are equipped with a new 7-nanometer A12 Bionic chip that's faster and more efficient than the A11 in the previous-generation iPhone X. There are two high-performance cores in the A12 that are up to 15 percent faster than the A11 Bionic and four efficiency cores that use up to 50 percent less power.";
	document.getElementById("text").style.display ='block';
    document.getElementById("text1").style.display ='none';
  } else if (name === 'apple2') {
    document.getElementById("images").src = "images/download (2).jpeg";
	document.getElementById('text').innerHTML = 'iPhone XS Max has a 6.5-inch OLED display, A12 Bionic chip, dual 12-megapixel rear cameras, Face ID, up to 512GB storage, and water resistance.';
	document.getElementById("text").style.display ='block';
    document.getElementById("text1").style.display ='none';
  } else if (name === 'apple3') {
    document.getElementById("images").src = "images/download (4).jpeg";
	document.getElementById('text').innerHTML = 'The iPhone 8 Plus was released in 2017, with a 5.5-inch Retina HD display, A11 Bionic chip, dual 12-megapixel rear cameras, Touch ID, up to 256GB storage, and water and dust resistance. It also supports wireless charging.';
	document.getElementById("text").style.display ='block';
    document.getElementById("text1").style.display ='none';
  }
  else if (name === 'apple4') {
    document.getElementById("images").src = "images/download (5).jpeg";
	document.getElementById('text').innerHTML = 'The iPhone SE, released in 2020, has a 4.7-inch Retina HD display, A13 Bionic chip, single 12-megapixel rear camera, Touch ID, up to 256GB storage, and water and dust resistance. It also supports wireless charging and is available at a lower price point.';
	document.getElementById("text").style.display ='block';
    document.getElementById("text1").style.display ='none';
  }
 else{
	 alert("invalid!!");
 }
}
function priceForLoop() {
    const prices = ["Iphone XS - $1349","Iphone XS - $1349","Iphone XS - $999","Iphone 8 Plus - $599","Iphone SE - $399"];
    var text = "";

    for (var i = 0; i < 5; i++) {
        text += prices[i] + "<br>";
    }
    document.getElementById("text1").innerHTML = text;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}
const phones = {"Iphone 11":"1699","Iphone XS": "1499", "Iphone XS Max": "1699", "Iphone X": "999", "Iphone 8Plus": "699", "Iphone SE": "599"};

function priceHigher() {
    
    var high = "";
    for (var i in phones) {
        if (phones[i] > 1000) {
            high += i + " : $" + phones[i] + "<br>";
        }
    }
    document.getElementById("text1").innerHTML = high;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}
function priceLower() {
    
    var low = "";
    for (var i in phones) {
        if (phones[i] < 1000) {
            low += i + " : $" + phones[i] + "<br>";
        }
    }
    document.getElementById("text1").innerHTML = low;
    document.getElementById("text1").style.display ='block';
    document.getElementById("text").style.display ='none';
    document.getElementById("image").style.display ='none';
}

function checkPassword() {
    var pass1 = document.getElementById("psw1");
    var pass2 = document.getElementById("psw2");

    if (pass1 != pass2) {
        alert ("Password Mismatch!");
    }
    else {
        alert ("Success!");
    }
}
function enableButton() {
    var checkBox = document.getElementById("checkbox");

    if (checkBox.checked == true) {
        document.getElementById('btn').disabled = false;
    }
    else {
        document.getElementById('btn').disabled = true;
    }
}