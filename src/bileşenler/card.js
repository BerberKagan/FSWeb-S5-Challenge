import axios from "axios";

const Card = (makale) => {

  const addCard = document.createElement('div');
  addCard.classList.add('card');

  const addHeadline = document.createElement('div');
  addHeadline.classList.add('headline');
  addHeadline.textContent = makale["anabaslik"];
  addCard.append(addHeadline);

  const addAuthor = document.createElement('div');
  addAuthor.classList.add('author');
  addCard.append(addAuthor);

  const addImage = document.createElement('div');
  addImage.classList.add('img-container');
  addAuthor.append(addImage);

  const addImgPart = document.createElement('img');
  addImage.append(addImgPart);
  addImgPart.setAttribute('src', makale["yazarFoto"]);

  const addAuthorName = document.createElement('span');
  addAuthorName.textContent = `${makale["yazarAdi"]} tarafından`;
  addAuthor.append(addAuthorName);

  addCard.addEventListener("click", (e) => {
    console.log(makale["anabaslik"]);
  });

  return addCard;


  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {

  const seciciEkle = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((res) => {
      /* console.log(res); */
      for (let value of Object.values(res.data.makaleler)) {
        value.forEach((e) => {
          seciciEkle.append(Card(e));
        })
      }
    })

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Card, cardEkleyici }
