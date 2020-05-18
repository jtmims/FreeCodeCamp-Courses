function palindrome(str) {
  str = str.replace(/[^a-z0-9+]+/gi, '').split(" ").join("").toLowerCase();
  for(var i = 0; i < (str.length-1)/2; i++){
    if(str[i] != str[(str.length-1) - i]){
      return false;
    }
  }
  return true;
}

palindrome("eye");
