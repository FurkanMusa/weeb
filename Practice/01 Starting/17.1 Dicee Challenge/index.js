function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function zarlaa() {
  var dice1 = getRandomNumber();
  var dice2 = getRandomNumber();

  document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

  var specialName = getSpecialName(dice1, dice2);

  if (specialName == "") {
    specialName = getSpecialName(dice2, dice1);
  }

  document.querySelector(".result").textContent = specialName;

}

function getSpecialName(dice1, dice2) {
  var specialName = "";

  if (dice1 == 1) {
    if (dice2 == 1) {
      specialName = "Hep Yek";
    } 
  } else if (dice1 == 2) {
    if (dice2 == 2) {
      specialName = "Dubara";
    } else if (dice2 == 1) {
      specialName = "Yek-i Dü";
    }
  } else if (dice1 == 3) {
    if (dice2 == 3) {
      specialName = "Dü Se";
    } else if (dice2 == 2) {
      specialName = "Seba-i Dü";
    } else if (dice2 == 1) {
      specialName = "Se Yek";
    }
  } else if (dice1 == 4) {
    if (dice2 == 4) {
      specialName = "Dört Cihar";
    } else if (dice2 == 3) {
      specialName = "Cihar-ü Se";
    } else if (dice2 == 2) {
      specialName = "Cihar-i Dü";
    } else if (dice2 == 1) {
      specialName = "Cihar-ı Yek";
    }
  } else if (dice1 == 5) {
    if (dice2 == 5) {
      specialName = "Dü Beş";
    } else if (dice2 == 4) {
      specialName = "Cihar-ü Penc";
    } else if (dice2 == 3) {
      specialName = "Penc-ü Se";
    } else if (dice2 == 2) {
      specialName = "Penc-i Dü";
    } else if (dice2 == 1) {
      specialName = "Penc-i Yek";
    }
  } else if (dice1 == 6) {
    if (dice2 == 6) {
      specialName = "Dü Şeş";
    } else if (dice2 == 5) {
      specialName = "Şeş Beş";
    } else if (dice2 == 4) {
      specialName = "Şeş Cihar";
    } else if (dice2 == 3) {
      specialName = "Şeş-ü Se";
    } else if (dice2 == 2) {
      specialName = "Şeş-i Dü";
    } else if (dice2 == 1) {
      specialName = "Şeş-i Yek";
    }
  }
  
  return specialName;
}

// 1-1: Hep Yek
// 2-2: Dubara;
// 2-1: yek-i dü;
// 3-3: Dü Se;
// 3-2: Seba-i Dü;
// 3-1: Se Yek;
// 4-4: Dört Cihar ("Dört Caar" gibi de okunur);
// 4-3: Cihar-ü Se ("Caar-i Se" gibi de okunur);
// 4-2: Cihar-i Dü ("Caar-i Dü" gibi de okunur);
// 4-1: Cihar-ı Yek ("Caar-i Yek" gibi de okunur);
// 5-5: Dü Beş;
// 5-4: Cihar-ü Penc ("Caar-i Penc" gibi de okunur);
// 5-3: Penc-ü Se;
// 5-2: Penc-i Dü;
// 5-1: Penc-i Yek;
// 6-6: Dü Şeş;
// 6-5: Şeş Beş;
// 6-4: Şeş Cihar;
// 6-3: Şeş-ü Se;
// 6-2: Şeş-i Dü;
// 6-1: Şeş-i Yek;