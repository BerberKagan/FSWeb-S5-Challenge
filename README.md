# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

* [ ] Bu projenyi forklayarak bir kopyasını oluşturun.
* [ ] Reponun kendi versiyonunuzu klonlayın.
* [ ] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [ ] Komut satırınızla projenin kök dizinine gidin.
- [ ] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [ ] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [ ] Chrome'da `http://localhost:3000` konumuna gidin
- [ ] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [ ] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [ ] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [ ] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.


## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
Bir web sayfası tarayıcıya yüklendiğinde tarayıcı ilk olarak HTML dosyasını arar. Ardından tarayıcı, HTML dosyasını sayfayı oluşturmak için bir plan(blueprint) veya talimat olarak kullanır (bu sonra CSS dosyası ile birleştirilir). Son olarak, tarayıcı bu talimatları ayrıştırır ve Javascript kullanarak sayfanın görünümü ve eylemi için bir model oluşturur. Bu model, sayfadaki her öğeyi sırayla içeren bir Javascript Object’tir, yani Javascript Nesnesi. Bu nesne “Document Object Model”(Belge Nesne Modeli) - kısaca “DOM”-  olarak adlandırılır.

2. Bir event nedir?
Bir site ile her kullanıcı etkileşimi bir “event” yani bir olaydır: tıklama, fareyi hareket ettirme, sayfayı kaydırma, klavyede bir tuşa basma, bunların hepsi sayfadaki olaylardır ve tarayıcı bunların hepsini algılayabilir. Tarayıcının izlediği tonlarca farklı olay vardır. Bir sayfada bir olay gerçekleştiğinde, bu olay tetikleyici(”trigger”) olarak bilinir.

3. Bir event dinleyici(listener) nedir?
Bir öğenin dinleyebileceği düzinelerce olay vardır. Daha sonra, bu olaylardan biri o öğe üzerinde gerçekleştiğinde, bununla ilgili bir şey yapabiliriz. İzleme sürecine ve ardından gerçekleştirilen eyleme “olay dinleyicisi”(”event listener”) denir. Bir öğeye bir olay dinleyicisi koyarız ve ona bir callback veririz. Eleman üzerinde bu olay tetiklendiğinde, geri arama çalıştırılır.

4. Neden bir NodeList'i Array'e dönüştürelim?
Örneğin; querySelectorAll() bize statik bir NodeList döndürür. Dönen sonuç diziye benzer ama değildir. Fakat NodeList, nasıl eriştiğinize bağlı olarak farklı davranır. Elementlere childNodes kullanarak erişirseniz eğer, döndürülen liste canlıdır ve düğüme daha fazla öğe eklendikçe güncellenir. querySelectorAll() kullanılarak erişilirse, döndürülen liste statiktir ve düğüme daha fazla öğe eklenirse güncellenmez. Canlı ve statik düğüm arasındaki temel fark; DOM’a bir öğe eklendiğinde, canlı bir düğümün yeni öğeyi tanıyacağı ancak statik düğümün ise tanımayacağıdır. Array canlı bir listedir; ancak Nodelist statik bir listedir. Ekleme veya çıkarma yapılamaz. 

5. Bileşen nedir?
Bir component birkaç parçadan oluşur: HTML, CSS veya bir web sitesinde ya da uygulamada yeniden kullanılmak üzere bir araya getirilmiş JavaScript.