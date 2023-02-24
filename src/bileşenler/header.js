const Header = (baslik, tarih, yazi) => {

  const getHeader = document.createElement('div');
  getHeader.classList.add('header');

  const getDate = document.createElement('span');
  getDate.classList.add('date');
  getDate.textContent = tarih;
  getHeader.append(getDate);

  const getTitle = document.createElement('h1');
  getTitle.textContent = baslik;
  getHeader.append(getTitle);

  const getArticle = document.createElement('span')
  getArticle.classList.add('temp');
  getArticle.textContent = yazi;
  getHeader.append(getArticle);

  return getHeader;
}

// GÖREV 1 
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//


const headerEkleyici = (secici) => {

  const getHeaderContainer = document.querySelector(secici);
  getHeaderContainer.append(Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı"));

  return getHeaderContainer;

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

}

export { Header, headerEkleyici }
