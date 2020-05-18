function convertToRoman(num) {
  var arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var converted = "";
  
  for (var i = 0; i < arabicNum.length; i++) {
    while (arabicNum[i] <= num) {
      num -= arabicNum[i];
      converted += romanNum[i];
    }
  }
 return converted;
}

convertToRoman(36);
