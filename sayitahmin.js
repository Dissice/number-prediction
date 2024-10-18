// Kullanıcıya 1-20 arası bir sayı tahmin etmesini isteyelim.
// Cevap hakkı 5 olacak.
// Her bir yanlış cevapta cevap hakkından -1 azalacak.
// Eğer tahmin ettiği sayı random üretilen sayıdan büyükse "Daha küçük bir sayı deneyin." , tahmin ettiği sayı random üretilen sayıdan küçükse "Daha büyük bir sayı deneyin." diye console'da mesaj çıkartalım.
// Doğru bildiğinde console'da tebrikler yazdıralım.


let pcRandom = Math.floor(Math.random() * 5) + 1;

for(let hak = 5; hak > 0; hak--) {
  let kullaniciTahmin = prompt("Lütfen 1-20 arası bir sayı tahmin ediniz. (Cevap hakkınız: " + hak + ")");
  if (kullaniciTahmin == pcRandom) {
    console.log('Tebrikler Doğru Cevap!');
    break
  } else if (kullaniciTahmin > pcRandom) {
    console.log('Daha küçük bir sayı deneyin.');
  } else if (kullaniciTahmin < pcRandom) {
    console.log('Daha büyük bir sayı deneyin.');
  } 
}