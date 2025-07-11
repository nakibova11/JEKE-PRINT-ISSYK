/* ===== Preloader ===== */
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  AOS.init({ once: true, duration: 800 });
});

/* Scroll-spy + shadow */
const sections = document.querySelectorAll("section, footer");
const navItems = document.querySelectorAll("#nav-links a");
window.addEventListener("scroll", () => {
  const top = window.scrollY + 80;
  /* Тень меню */
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 0);
  /* Кнопка вверх */
  document.getElementById("to-top").classList.toggle("show", window.scrollY > 600);
  /* Активный пункт */
  sections.forEach(sec => {
    if (top >= sec.offsetTop && top < sec.offsetTop + sec.offsetHeight) {
      navItems.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`#nav-links a[href="#${sec.id}"]`);
      if (active) active.classList.add("active");
    }
  });
});

/* Back to top */
document.getElementById("to-top").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* ===== Swiper ===== */
new Swiper(".portfolio-swiper", {
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".portfolio-swiper .swiper-pagination" },
  navigation: {
    nextEl: ".portfolio-swiper .swiper-button-next",
    prevEl: ".portfolio-swiper .swiper-button-prev"
  },
  autoHeight: true
});
new Swiper(".testimonial-swiper", {
  loop: true,
  autoplay: { delay: 6000 },
  pagination: { el: ".testimonial-swiper .swiper-pagination" }
});

/* ===== LANG SWITCHER ===== */
const dict = {
  kz: {
    "nav.about":"Біз туралы",
    "nav.services":"Каталог",
    "nav.portfolio":"Жұмыстар",
    "nav.process":"Үрдіс",
    "nav.contacts":"Байланыс",
    "hero.title":"JEKE PRINT ISSYK — идеяларыңызды жүзеге асырамыз!",
    "hero.subtitle":"Футболка, кружка және т.б. басып шығару",
    "hero.cta1":"Қызметтер",
    "hero.cta2":"Байланысу",
    "about.title":"Біз туралы",
    "about.p1":"Біз – JEKE PRINT ISSYK креативті баспа шеберханасымыз. Біз идеяларды жүзеге асырамыз: бір эксклюзивті футболкадан бастап, корпоративті худилер партиясына дейін, естелік кружкалардан бастап, фирмалық қаптамаларға дейін барлығын жасаймыз. Біздің жұмыс істеу тәсіліміз – икемділік пен креативтілік. Біздің міндетіміз – сіздің идеяңызды матаға, киімге немесе кружкаға барынша сапалы етіп түсіру, авторлық стиль мен көңіл-күйді сақтау.",
    "about.f1":"- Сапалы басып шығару",
    "about.f2":"- Жеке дизайн",
    "about.f3":"- Кез келген тираж",
    "about.f4":"- Қолайлы сервис",
    "services.title":"Қызметтеріміз",
    "services.c1":"Киім",
    "services.c2":"Кружкалар",
    "services.c3":"Кепкалар",
    "services.c4":"Пакеттер",
    "services.c5":"Корпоративтік мерч",
    "portfolio.title":"Жұмыстар",
    "process.title":"Қалай жұмыс істейміз",
    "process.p1":"Өзіңізге қолайлы тәсіл арқылы бізбен байланысасыз",
    "process.p2":"Идеяны талқылаймыз",
    "process.p3":"Баға мен макет",
    "process.p4":"Басып шығару",
    "process.note":"Тапсырыс 24 сағаттың ішінде, яғни 1 тәулікте дайын болады. Кез-келген уақытта (24/7) тапсырыс бере аласыз, алайда бутик күнделікті 10.00-17.00 жұмыс істейді. Қазақстан бойынша жеткізу қызметі қарастырылған",
    "contacts.title":"Байланыс",
    "contacts.address":"Алматы обл., Есік қ., “Kari”, 2-қабат, 26-бутик",
    "contacts.hours":"Күн сайын 10:00–17:00"
  },
  ru: {/* Русский — уже в верстке, поэтому пусто */},
  en: {
    "nav.about":"About",
    "nav.services":"Services",
    "nav.portfolio":"Works",
    "nav.process":"Process",
    "nav.contacts":"Contacts",
    "hero.title":"JEKE PRINT ISSYK — we print your ideas!",
    "hero.subtitle":"T-shirts, mugs & more",
    "hero.cta1":"Our services",
    "hero.cta2":"Contact us",
    "about.title":"About us",
    "about.p1":"We are JEKE PRINT ISSYK, a creative printing workshop. We love transforming ideas into tangible items: from a single exclusive T-shirt to batches of corporate hoodies, from a memorable mug to branded packaging. Our approach is flexibility and creativity. We don't impose templates on our clients; instead, we believe that every item can tell its own unique story. That's why for us, there are no 'too bold' or 'too simple' ideas – we enthusiastically bring to life both minimalistic black-and-white patterns and vibrant, multi-colored neon prints. Our mission is to transfer your vision onto fabric or a mug with the highest quality, preserving your original style and mood.",
    "about.f1":"- Photo-quality prints",
    "about.f2":"- Custom design",
    "about.f3":"- Any quantities",
    "about.f4":"- Heartfelt service",
    "services.title":"Our services",
    "services.c1":"Apparel",
    "services.c2":"Mugs",
    "services.c3":"Caps",
    "services.c4":"Bags",
    "services.c5":"Corporate merch",
    "portfolio.title":"Portfolio",
    "process.title":"How it works",
    "process.p1":"Get in touch",
    "process.p2":"Discuss design",
    "process.p3":"Approve quote",
    "process.p4":"Print & deliver",
    "process.note":"Every order is unique! Your order will be ready within 24 hours. You can place orders anytime (24/7), while our physical boutique is open daily from 10:00 to 17:00. We also offer delivery services throughout Kazakhstan.",
    "contacts.title":"Contacts",
    "contacts.address":"Issyk, Kari Mall, 2F, Booth 26",
    "contacts.hours":"Daily 10 AM-5 PM"
  }
};

/* Вешаем обработчик на переключатель */
document.querySelectorAll("#lang-switcher button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const lang = btn.dataset.lang;
    /* активный класс */
    document.querySelectorAll("#lang-switcher button").forEach(b=>b.classList.toggle("active",b===btn));
    translate(lang);
  });
});

/* Авто-детект языка */
const browserLang = navigator.language.startsWith("kk")?"kz":navigator.language.startsWith("en")?"en":"ru";
if(browserLang!=="ru") translate(browserLang);

function translate(lang){
  const texts = dict[lang] || {};
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(texts[key]) el.textContent = texts[key];
  });
}

/* ===== End of script.js 🔨🤖🔧 ===== */
