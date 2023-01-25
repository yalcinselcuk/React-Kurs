// document'teki elementi id'den yakala : getElementById
//innerHTML : bu id'nin olduğu html kısmının içine git.Bizimkisi p tag'i.
//document.getElementById("bio").innerHTML = "Yalcin Selcuk 2023";


// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

//sıfır denmesinin nedeni aynı class'ta birden fazla eleman olabilir.Onlardan hangisine erişmek istiyorsak onu seçiyoruz
var intro1 = document.getElementsByClassName("intro1");
alert(intro1[0].innerHTML);