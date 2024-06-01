let kilo = Number(prompt("Kilonuzu girin:"));
let boy = Number(prompt("Lütfen boyunuzu metre cinsinden giriniz:"));

let sonuc = kilo / (boy * boy);

if (sonuc < 18.5) {
  alert("İdeal kilonuzun altındasınız" + sonuc);
} 

else if (sonuc >= 18.5 && sonuc <= 24.9) {
  alert("İdeal kilonuzun altındasınız" + sonuc);

} else if (sonuc >= 25 && sonuc <= 29.9) {
  alert("ideal ağırlık " + sonuc);

} else if (sonuc >= 30 && sonuc <= 39.9) {
 alert("İdeal kilonuzun çok üzerindesiniz (obez)" + sonuc);


} else if (sonuc >= 40) {
  alert("İdeal kilonuzun çok üstündesiniz (morbid obez)" + sonuc);
}