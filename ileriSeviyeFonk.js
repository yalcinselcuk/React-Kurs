var selamFonksiyonu = function selam(){
    console.log("selamlar");
}
selamFonksiyonu();


//parametresiz ileri seviye fonksiyon
var selamFonksiyonu2 = () => {
    console.log("selamlarrrrrrr");
}

selamFonksiyonu2();

//parametreli ileri seviye fonksiyon
var selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}

selamFonksiyonu3("selamlar kolaysoft");