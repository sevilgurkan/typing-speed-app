const regex = /[^\w\s+ıçğşüöÇİĞÖÜŞ]/gi;

const words200_turkish_1 =
  "şimdi göre yalnızca kriz hava onlar dakika takım farketmek hayal suç balık özellik girmek yaş kredi başlamak yaklaşık servis birbiri kurtulmak mektup bitmek olma ölmek sabah en hızla güvenlik çok ışık ilgilenmek düşünülmek düşünmek masa cam burun karışmak sanmak birlikte eylem demek ön üretilmek toplumsal satmak sadece araştırma dinlemek çıkarılmak yıl birlik renk varlık vücut sanatçı uç ağaç karıştırmak yanmak aşk ki öykü hazır tutmak hafif düzey imkan yaratmak anlayış yanıt kesim batı ince denmek oysa çizmek yüzde gerek parça özel istenmek şart geliştirmek kadar adam arkadaş mesele diğer hedef yöntem sigorta yüksek sanat yazı az çekilmek koltuk sonuç aslında politika gazete bahçe içermek dil üçüncü seçmek hayır sigara bakmak bütün kullanılmak sağlanmak belki yol otobüs şarkı acaba yine değişik mümkün olanak yaklaşmak rahat birçok göndermek aramak hayat ayak maç önce sonunda canlı çalışmak her üst bulunmak hergün resim yüzünden ünlü aile iyi ayrılmak dış ciddi uluslararası tedavi inanç genel yeterli sayfa kendi ölçü süre üye akmak ben buna hemen yardım madde vermek aşama benzemek millet yeşilgazeteci kanal gelişme ağır etmek çevre soğuk kapanmak yasa yok anlamak sahip acı gelecek ifade düzenlemek koşmak rüzgar anlam sokak ora otel polis kötü beyin düşmek bir amaç yer yaz iletişim o yanlış beri";
const words200_turkish_2 =
  "hem kas ilke sıcaklık kimlik almak eser savaş isim ürün diye vitamin karşılaşmak oluşturmak sonra bilinmek belirlenmek çünkü bağlı birey belirtmek şekil birkaç iki fakat aşağı tabi sağlıklı daha film yayımlanmak at sana uyumak yaşamak sebep ders yarı üç hissetmek kuruluş sevgi yumurta bey yetmek doğal kimse durmak hal bölüm herzaman varmak yeniden böylece aşmak dört sıcak ek çoğu boyunca sosyal sırt uzun sunmak gerçek derin ayrı günlük hız atmak ülke unutmak elbette şu telefon kardeş hizmet gelişmek kalkmak merkez oynamak ekonomi sert bebek izin açıklamakhele üniversite tüketici şehir çiçek kısım var büyümek geç geçmek ana çalışma koku istek boyun içerisi davranmak okumak akıl artırmak çıkmak gaz orta dengenerede geçirmek uzak asıl talep kadın nitelik kilo kaçmak korku taşımak faiz metre sevgili herkes kısa eşya çekmek ara dünya ay veya kalan dönmek yazılmak sayı büyük toprak görülmek paylaşmak besin kaza yaşam akşam taş sürücü değerlendirmek hikaye zarar dükkan düşük güçlü televizyon katılmak eş toplam neredeyse içeri plan fiyat sormak yatak nasıl örneğin düşünce saye cumhuriyet gülmek peki beş sağlık marka sağlamak toplum inanmak ceza korkmak basın kahve kanun meclis doğmak abla kolay sanayi görmek hata nokta herhangibir bırakmak ve araba zengin toplantı kapatmak hücre et lazım üretmek kamu uymak yan";
const words200_turkish_3 =
  "ücret sen mal mücadele karanlık köşe sorun araç teknik açı normal çeşitli son çıkar vurmak güneş önem dönüşmek ilişki istemek iç edilmek öteki lira gerçekten bölge getirmek silah daire uygulamak dost çağ alışveriş din koşul fikir konuşmak bazen yaşlı ya bakan örnek asker boy eklemek toplamak oyun soru salon vatandaş tamam sağ evlenmek hoca kağıt bina dayanmak çizgi yetenek üstelik derece içinde küçük saygı doğru kelime ad yapı bunun sorumluluk ait bilgisayar kez türlü bura söylemek ateş konudikkat sıkıntı oluşmak devlet tamamen bağlamak dağ yatırım açılmak değişmek bilim yükselmek gerekli hep trafik zaman duymak kavram cihaz kim grup sektör romanhükümet vakit parti tüm başkan özellikle olmak geri defa su paşa eğer uğraşmak sınıf kırmızı birisi sokmak mekan yıllık numara satış birden proje birşey söz kullanmak seçim mutlaka deri deniz dolayısıyla milyar başarı üzerine ekonomik hareket kaldırmak yönetici katkı tanımak artık internet kurmak piyasa müşteri yapılmak iyice pencere pazar haber kişi herşey gider sayılmak yağ cilt ses değer model için zevk risk bitki arka tarih üzeri uzatmak altınticaret hatırlamak yukarıda çözüm sürekli kitap toplanmak dün koca giderek adres üretim giriş etki yavaş yakalamak yaprak mağaza çeşit biçim can başarılı asla hızlı boş açık mahalle gelen kural evet oldukça çerçeve anlaşılmak şarap";
const words200_turkish_4 =
  "dolayı top hasta oran öğretmen başka gibi tip hayvan çıkarmak gizli para güç öğrenci insan yani belediye görünmek site basit erkek fazla kurtarmak parmak incelemek değişim bugün kol adım aynı etraf alınmak ruh anne basmak sözetmek öyle doğagetirilmek genellikle götürmek üstünde yemek milyon yedi otomobil görüşmek tek aday eğitim göstermek hiç malzeme fırsat görev yönetim ilgili saç yapmakişletme şöyle okul birinci dolaşmak tehlike belirtilmek farklı bağlanmak cevap şey ev sürmek sözcük belli bağırmak gitmek siz oda el tavır öğrenmek örgütyanısıra şirket mesela hazırlanmak beraber çaba kaç işçi kaynak sınır geçen modern karar halk bilmek ölüm art kimi açmak doktor firma tatlı alt özgürlük hepsi kan uzman tam sahne hastalık baskı elektrik ile gerçekleşmek oturmak tür ilk bacak verilmek organ görüntü ikinci dergi görüş biraz uçak işte idi teknolojiyıldız kafa mutfak uygulanmak program korumak yüzden düzen gece ise ancak ulaşmak dolu bozulmak an hoş birer dönem onun sinema gelir işlemek öte artış bilgi yönelik ilaç aşırı hak kalite geçmiş yön anlatmak vergi meslek kılmak reklam bu laf içmek burada değiştirmek duygu sürdürmek okur bazı faaliyet kültür demokrasisevmek orada yararlanmak kullanım neden hangi yayın köy bakış müzik yayılmak çay işlem problem niye tarz oğul rağmen karşılamak rol olay ortak kazanmak durum beklemek";
const words200_turkish_5 =
  "yerine gene giymek yakmak taraf tuz ödemek kenar izlemek atılmak cadde ağız sene yatmak enerji tepki yeni kent gelmek eleman on temel sistem hanım mevcut öldürmek kat baş bundan kurulmak adet zaten bakanlık yoksa ağlamak etkilemek kesin yarar sanki geniş medya üzere yürek takılmak belirlemek fark fotoğraf kerebilinç kulak kaybetmek ilgi kontrol gönül uzanmak hala gerekmek biri yakın değil tekrar birim cami beyaz baba meyve bile saat miktar pek bulmak hafta yazar bedenağırlık yüzyıl ihtiyaç şiir ilerlemek ilginç biz doldurmak seyretmek ekmek hiçbir ağabey ayrıca enflasyon davranış beyan sıra uygulama hazırlamak köpek bitirmek gün zor müdür çalmak böyle süt üstüne banka yazmak eski uygun göz yalnız yaptırmak kurum iş değişiklik artmak duvar alan makine çevirmek koymak ama ayırmak ne önemli belge yoğun hatta karşı bunu tutulmak hastahane denilmek söylenmek azalmak saymak ortam spor orman boyut karşılık süreç henüz hakkında inmekkız binmek ileri yüz üzerinde kesmek yaşanmak benzer kapı temiz destek dilemek çocuk meydan güzel kesilmek bunlar hesap sunulmak güven cümle dışarı sol hukuk gençyürümek tane kalmak yabancı kalp girmek yaş kredi başlamak yaklaşık servis birbiri kurtulmak mektup bitmek olma ölmek sabah en hızla güvenlik çok ışık ilgilenmek düşünülmek düşünmek masa cam burun karışmak sanmak birlikte eylem demek ön üretilmek toplumsal";

const words200_english_1 =
  "the be and a of to in i you it have to that for do he with on this n’t we that not but they say at what his from go or by get she my can as know if me your all who about their will so would make just up think time there see her as out one come people take year him them some want how when which now like other could our into here then than look way more these no thing well because also two use tell good first man day find give more new one us any those very her need back there should even only many really work life why right down on try let something too call woman may still through mean after never no world in feel yeah great last child oh over ask when as school state much talk out keep leave put like help big where same all own while start three high every another become most between happen family over president old yes house show again student so seem might part hear its place problem where believe country always week point hand off play turn few group such";
const words200_english_2 =
  "against run guy about case question work night live game number write bring without money lot most book system government next city company story today job move must bad friend during begin love each hold different american little before ever word fact right read anything nothing sure small month program maybe right under business home kind stop pay study since issue name idea room percent far away law actually large though provide lose power kid war understand head mother real best team eye long long side water young wait okay both yet after meet service area important person hey thank much someone end change however only around hour everything national four line girl around watch until father sit create information car learn least already kill minute party include stand together back follow health remember often reason speak ago set black member community once social news allow win body lead continue whether enough spend level able political almost boy university before stay add later change five probably center among face public die food else history buy result morning off parent office course send research walk door white several court home grow better open moment including consider both such little within second late";
const words200_english_3 =
  "street free better everyone policy table sorry care low human please hope TRUE process teacher data offer death whole experience plan easy education build expect fall himself age hard sense across show early college music appear mind class police use effect season tax heart son art possible serve break although end market even air force require foot up listen agree according anyone baby wrong love cut decide republican full behind pass interest sometimes security eat report control rate local suggest report nation sell action support wife decision receive value base pick phone thanks event drive strong reach remain explain site hit pull church model perhaps relationship six fine movie field raise less player couple million themselves record especially difference light development federal former role pretty myself view price effort nice quite along voice finally department either toward leader because photo wear space project return position special million film need major type town article road form chance drug economic situation choose practice cause happy science join teach early develop share yourself carry clear brother matter dead image star cost simply post society picture piece paper energy personal building military open doctor activity exactly american media miss evidence product realize save arm technology";
const words200_english_4 =
  "catch comment look term color cover describe guess choice source mom soon director international rule campaign ground election face uh check page fight itself test patient produce certain whatever half video support throw third care rest recent available step ready opportunity official oil call organization character single current likely county future dad whose less shoot industry second list general stuff figure attention forget risk no focus short fire dog red hair point condition wall daughter before deal author truth upon husband period series order officer close land note computer thought economy goal bank behavior sound deal certainly nearly increase act north well blood culture medical ok everybody top difficult close language window response population lie tree park worker draw plan drop push earth cause per private tonight race than letter other gun simple course wonder involve hell poor each answer nature administration common no hard message song enjoy similar congress attack past hot seek amount analysis store defense bill like cell away performance hospital bed board protect century summer material individual recently example represent fill state place animal fail factor natural sir agency usually significant help ability mile statement entire democrat floor serious career dollar vote sex compare south forward subject";
const words200_english_5 =
  "financial identify beautiful decade bit reduce sister quality quickly act press worry accept enter mention sound thus plant movement scene section treatment wish benefit interesting west candidate approach determine resource claim answer prove sort enough size somebody knowledge rather hang sport tv loss argue left note meeting skill card feeling despite degree crime that sign occur imagine vote near king box present figure seven foreign laugh disease lady beyond discuss finish design concern ball east recognize apply prepare network huge success district cup name physical growth rise hi standard force sign fan theory staff hurt legal september set outside et strategy clearly property lay final authority perfect method region since impact indicate safe committee supposed dream training shit central option eight particularly completely opinion main ten interview exist remove dark play union professor pressure purpose stage blue herself sun pain artist employee avoid account release fund environment treat specific version shot hate reality visit club justice river brain memory rock talk camera global various arrive notice bit detail challenge argument lot nobody weapon best station island absolutely instead discussion instead affect design little anyway respond control trouble conversation manage close date public army top post charge seat";

const WORDS = {
  tr: [
    words200_turkish_1,
    words200_turkish_2,
    words200_turkish_3,
    words200_turkish_4,
    words200_turkish_5,
  ],
  en: [
    words200_english_1,
    words200_english_2,
    words200_english_3,
    words200_english_4,
    words200_english_5,
  ],
};

const INDEX_OF_AMOUNT_IN_WORDS = {
  200: 1,
  400: 2,
  600: 3,
  800: 4,
  1000: 5,
};

/**
 *
 * @param {number} combineCount 200, 400, 600, 800, 1000
 * @param {string} language tr or en
 * @returns
 */
function combineStrings(language, combineCount) {
  /**
   * continue merging if index is less than amount,
   * otherwise continue from current state
   */
  return WORDS[language].reduce((prev, curr, idx) => {
    return idx < combineCount ? prev + " " + curr : prev;
  });
}

const processRegex = (str) => {
  return str.replace(regex, "");
};

const makeStringArray = (str) => str.split(" ");

const makeUnique = (array) => [...new Set(array)];

const shuffleWords = (ar) => {
  let currentIndex = ar.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [ar[currentIndex], ar[randomIndex]] = [ar[randomIndex], ar[currentIndex]];
  }

  return ar;
};

const handleAllProcess = (str) => {
  const cleanStr = processRegex(str);
  const array = makeStringArray(cleanStr);
  const uniqueArray = makeUnique(array);
  const shuffledUniqueWords = shuffleWords(uniqueArray);

  return shuffledUniqueWords;
};

/**
 * @param {string} amount amount of words
 * @param {string} language en or tr
 * @returns {string[]}
 */
export function getWords(language, amount) {
  return handleAllProcess(
    combineStrings(language, INDEX_OF_AMOUNT_IN_WORDS[amount])
  );
}
