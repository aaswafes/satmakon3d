export const LOCALES = ["uz", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

export const DEFAULT_LOCALE: Locale = "uz";

const uz = {
  nav: {
    product: "Dasturlar",
    howItWorks: "Jarayon",
    results: "Natijalar",
    pricing: "Tariflar",
    faq: "Savollar",
    bookAudit: "Bepul mock",
  },
  hero: {
    badge: "Toshkent · Buxoro · Guliston · Navoiy — qabul davom etmoqda",
    titleA: "Harvard, MIT, Stanford —",
    titleB: "boshlanishi shu yerda.",
    sub: {
      before: "SAT Makon — bu",
      bold: "1500+ ball kafolati",
      after:
        ". Haftada 3 dars, 1.5 soatdan, 5 kishilik kichik guruhlarda. 300+ talabamiz allaqachon top universitetlarning eshigini ochdi.",
    },
    ctaPrimary: "Bepul mock testga yozilish",
    ctaSecondary: "Tariflarni ko'rish",
    trust: "1100+ dan boshlasangiz · 1520 yoki bepul · 7 yillik tajriba",
    scroll: "Aylantiring",
  },
  logos: {
    eyebrow: "O'quvchilarimiz qabul qilingan universitetlar",
    industries: [
      "HARVARD",
      "STANFORD",
      "MIT",
      "YALE",
      "PRINCETON",
      "BROWN",
      "CAMBRIDGE",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "Raqamlar bilan",
    titleA: "Natijalar gapiradi —",
    titleB: "biz sukut saqlaymiz.",
    sub: "300+ talaba 1500+ ball oldi. Har 3-talabamiz Ivy League darajasidagi natija bilan bitiradi. Mana bizning haqiqatimiz.",
    cards: [
      {
        label: "1500+ ballik talabalar",
        highlight: "Talabamiz",
        description:
          "1500+ ball oldi va Harvard, MIT, Stanford, Cornell, NYU darajasidagi universitetlarga ariza yo'lini ochdi.",
      },
      {
        label: "Yuqori ballarning ulushi",
        highlight: "Talabalarimizning",
        description:
          "1500+ ball bilan bitiradi — bozor bo'yicha o'rtacha ko'rsatkich 7%, biz 4 baravar yuqori turamiz.",
      },
      {
        label: "Eng yuqori natija",
        highlight: "Mukammal natijaga",
        description:
          "yetib bordik (1600 — maximal SAT bali). Bu — ta'lim modelimiz ishlayotganining isboti.",
      },
    ],
  },
  features: {
    eyebrow: "Tizim",
    titleA: "1520+ ballga olib boruvchi",
    titleB: "to'liq tizim.",
    sub: "Faqat darslar emas — to'liq qabul strategiyasi. Esse tahriri, universitet tanlash, AI bilan kuchaytirilgan amaliyot — hammasi bir tizimda.",
    big: {
      tag: "Kafolat",
      titleBefore: "",
      titleBold: "1520+ ball",
      titleAfter: " yoki",
      titleLine2: "darslar bepul davom etadi.",
      body: "Boshlang'ich balingiz 1100+ bo'lsa — biz 1520 va undan yuqori natijani kafolatlaymiz. Maqsadga yetmasangiz, qo'shimcha to'lovsiz davom ettiramiz — to maqsadga yetguncha.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "AI tahlil",
        "60+ mock test",
        "Esse tahriri",
        "Qabul strategiyasi",
      ],
      timeline: {
        leadArrives: "Boshlang'ich",
        aiReplies: "Maqsad",
        you: "1100+ → 1520+",
        competitors: "5 oy o'rtacha",
        industry: "5 kishilik guruh",
      },
    },
    qualifies: {
      tag: "Kichik guruh",
      title: "5 talabaga 1 ustoz.",
      body: "O'qituvchi har bir talabaning kuchli va zaif tomonlarini shaxsan biladi. Hech kim orqada qolmaydi — bu kafolat.",
    },
    books: {
      tag: "AI platforma",
      title: "makon.ai — 60+ amaliy test, AI tahlil.",
      body: "Har bir savol bo'yicha AI nima qilganingizni va nimani o'rganishingiz kerakligini aytadi. 24/7 mashq, jonli mock testlar.",
    },
    languages: {
      tag: "Esse va qabul",
      title: "Esse tahriri va universitet tanlash.",
      body: "Top maktablar uchun ta'sirchan esse va strategik tanlov. Ariza har bir ustunini qamrab olamiz — GPA, SAT, AP, qo'shimcha faoliyat.",
    },
    memory: {
      tag: "Ball tahlili",
      title: "Har bo'lim bo'yicha hisobot.",
      body: "Math, Reading, Writing — qaysi mavzuda qancha ko'tardingiz, qaysi savollarda qiynalasiz. Progressingiz xaritada.",
    },
    dfy: {
      tag: "AP tayyorlov",
      title: "AP — universitet krediti uchun.",
      body: "Calculus, Physics, Chemistry, Computer Science. AP 5 bali — universitet kreditiga teng. Vaqt va pul tejaysiz.",
    },
  },
  process: {
    eyebrow: "Yo'nalish",
    titleA: "Uch qadam.",
    titleB: "Bitta orzu.",
    sub: "1100 dan 1520+ gacha — aniq harakat rejasi bilan. Tasodif yo'q, faqat tizim.",
    step: "Bosqich",
    steps: [
      {
        chip: "1-bosqich",
        title: "Bepul mock va tahlil.",
        body: "Joriy darajangizni aniqlaymiz — to'liq mock test, AI tahlili, kuchli va zaif tomonlaringiz xaritasi. Bu — bepul. Yozasizmi yoki yo'q — fikrlashga asos olib ketasiz.",
      },
      {
        chip: "2-bosqich",
        title: "Shaxsiy o'qish rejasi.",
        body: "Haftada 3 dars, 1.5 soatdan, 5 kishilik guruhda. Har dars Math, Reading, Writing — barchasini qamrab oladi. Uy vazifalari makon.ai da, AI sizni kuzatib boradi.",
      },
      {
        chip: "3-bosqich",
        title: "Mock testlar va imtihon.",
        body: "Har 2 haftada haqiqiy mock. Kuzga tayyor — 1520+ ball bilan. Esse tahriri va qabul strategiyasi orqali Ivy League ariza paketini tugatamiz.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Talabalar nima deyishadi",
    titleA: "Yuqori ballar,",
    titleB: "ochilgan eshiklar.",
    quotes: [
      {
        quote:
          "1320 dan 1570 ga ko'tarildim — 5 oyda. SAT Makonsiz Cornell hech qachon bo'lmas edi. Endi men u yerdaman.",
        name: "Kalmuxammed Z.",
        role: "1320 → 1570 · Cornell University",
      },
      {
        quote:
          "Eng katta o'zgarish — 1420 dan 1590 gacha. Math da har savol uchun ustozim shaxsan keldi va tushuntirdi. 5 kishilik guruh haqiqiy farq qiladi.",
        name: "Taisiia S.",
        role: "1420 → 1590 · Stanford qabuli",
      },
      {
        quote:
          "Maktabda hech kim 1500+ olmagan edi. SAT Makonda 4 oyda 1530 oldim. Endi MIT'ga ariza beraman — bu real.",
        name: "Madiyar N.",
        role: "1170 → 1560 · MIT ariza",
      },
    ],
  },
  cta: {
    eyebrow: "Ball kafolati",
    titleA: "1520+ ball — yoki",
    titleB: "darslar bepul.",
    sub: "Boshlang'ich balingiz 1100+ bo'lsa, biz 1520+ ni kafolatlaymiz. Maqsadga yetmasangiz, darslar to maqsadga yetguncha bepul davom etadi. Yozma shartnoma.",
    ctaPrimary: "Bepul mock testga yozilish",
    ctaSecondary: "Konsultatsiya olish",
    foot: "Bepul mock · 4 soat · Aniq AI tahlili",
  },
  faq: {
    eyebrow: "Savollar",
    title: "Eng ko'p so'raladigan savollar.",
    items: [
      {
        q: "SAT nima va u nega muhim?",
        a: "SAT — AQSh va 180+ mamlakatdagi universitetlar uchun standart kirish testi. Ball 400 dan 1600 gacha. Harvard, MIT, Stanford — barchasi SAT balingizga qarab baho beradi. 1500+ ball $10,000–$70,000 stipendiya imkoniyati.",
      },
      {
        q: "Ball kafolati qanday ishlaydi?",
        a: "Boshlang'ich balingiz 1100+ bo'lsa, biz 1520 va undan yuqori natijani yozma kafolatlaymiz. Agar maqsadga yetmasangiz, darslar qo'shimcha to'lovsiz davom etadi — to siz maqsadga yetguncha.",
      },
      {
        q: "Qancha vaqt o'qiladi va kuniga necha soat?",
        a: "Asosiy SAT dasturi 4–6 oy davom etadi. Haftada 3 dars, har biri 1.5 soatdan — jami 4.5 soat sinfda + uy vazifasi makon.ai da. 5 kishilik guruhda har bir talaba shaxsan diqqatga olinadi.",
      },
      {
        q: "Filiallar qayerda joylashgan?",
        a: "Toshkent (Novza va Yunusobod), Buxoro, Guliston (Sirdaryo), Navoiy. Yana Online format ham mavjud — butun O'zbekiston bo'ylab.",
      },
      {
        q: "PRE-SAT va AP ham bormi?",
        a: "Ha. PRE-SAT — universitetga dastlabki tayyorgarlik (sinif 9–10). AP — Calculus, Physics, Chemistry, Computer Science va boshqalar. AP 5 bali universitet krediti — vaqt va pul tejaysiz.",
      },
      {
        q: "Esse va ariza yordami beriladimi?",
        a: "Albatta. SAT Makon faqat ball emas, qabulni to'liq qamrab oladi: esse tahriri, universitet tanlash, ariza strategiyasi, qo'shimcha faoliyat profili. Ivy League ariza paketini birga yozamiz.",
      },
      {
        q: "Narxi qancha?",
        a: "Tarif, davomiylik va guruh formatiga bog'liq. Bepul konsultatsiyada darajangizni baholaymiz va sizga mos tarifni tanlaymiz. Ko'p oilalarga qulay to'lov rejalari mavjud.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — 1500+ ballga ixtisoslashgan SAT va AP tayyorlov markazi. 300+ talaba, 5 ta filial, 1 ta vazifa: dunyodagi top universitetlarga yo'l ochish.",
    location: "Toshkent · Buxoro · Guliston · Navoiy",
    cols: [
      {
        title: "Dasturlar",
        links: [
          { label: "PRE-SAT", href: "#features" },
          { label: "SAT", href: "#features" },
          { label: "AP Calculus", href: "#features" },
          { label: "Esse va qabul", href: "#features" },
        ],
      },
      {
        title: "Markaz",
        links: [
          { label: "Biz haqimizda", href: "#" },
          { label: "Ustozlar", href: "#" },
          { label: "Filiallar", href: "#" },
          { label: "makon.ai", href: "#" },
        ],
      },
      {
        title: "Resurslar",
        links: [
          { label: "Bepul mock", href: "#cta" },
          { label: "60+ amaliy test", href: "#" },
          { label: "Savollar", href: "#faq" },
        ],
      },
    ],
    copyright: "Universitet — bu boshlanish.",
    privacy: "Maxfiylik",
    terms: "Shartlar",
    contact: "Aloqa",
  },
  students: {
    eyebrow: "Talabalarimiz",
    titleA: "300+ talaba.",
    titleB: "1500+ ball.",
    sub: "Bu — bizning haqiqiy talabalarimiz. Haqiqiy ballar. Hech narsa bo'rttirilmagan.",
  },
  unis: {
    eyebrow: "Talabalarimiz qabul qilingan",
    title: "Top universitetlar",
  },
};

export type Dictionary = typeof uz;

const ru: Dictionary = {
  nav: {
    product: "Программы",
    howItWorks: "Процесс",
    results: "Результаты",
    pricing: "Тарифы",
    faq: "Вопросы",
    bookAudit: "Бесплатный mock",
  },
  hero: {
    badge: "Ташкент · Бухара · Гулистан · Навои — набор продолжается",
    titleA: "Harvard, MIT, Stanford —",
    titleB: "начинается здесь.",
    sub: {
      before: "SAT Makon — это",
      bold: "гарантия 1500+ балла",
      after:
        ". 3 урока в неделю по 1.5 часа в группах из 5 человек. 300+ наших студентов уже открыли двери топ-университетов.",
    },
    ctaPrimary: "Записаться на бесплатный mock",
    ctaSecondary: "Посмотреть тарифы",
    trust: "От 1100+ балла · 1520 или бесплатно · 7 лет опыта",
    scroll: "Листайте",
  },
  logos: {
    eyebrow: "Университеты, в которые поступили наши студенты",
    industries: [
      "HARVARD",
      "STANFORD",
      "MIT",
      "YALE",
      "PRINCETON",
      "BROWN",
      "CAMBRIDGE",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "В цифрах",
    titleA: "Цифры говорят —",
    titleB: "мы молчим.",
    sub: "300+ студентов с баллом 1500+. Каждый третий выпускник — на уровне Ivy League. Это наша реальность.",
    cards: [
      {
        label: "Студентов с 1500+",
        highlight: "Наших студентов",
        description:
          "набрали 1500+ и открыли путь в Harvard, MIT, Stanford, Cornell, NYU и другие топ-вузы.",
      },
      {
        label: "Доля высоких баллов",
        highlight: "Наших выпускников",
        description:
          "заканчивают с баллом 1500+. По рынку — около 7%. Мы выше в 4 раза.",
      },
      {
        label: "Высший результат",
        highlight: "Дошли до",
        description:
          "идеального результата (1600 — максимум SAT). Доказательство, что наша модель работает.",
      },
    ],
  },
  features: {
    eyebrow: "Система",
    titleA: "Полная система,",
    titleB: "ведущая к 1520+.",
    sub: "Не просто уроки — полная стратегия поступления. Редактура эссе, выбор университета, AI-практика — всё в одной системе.",
    big: {
      tag: "Гарантия",
      titleBefore: "",
      titleBold: "1520+ баллов",
      titleAfter: " или",
      titleLine2: "занятия продолжаются бесплатно.",
      body: "Если ваш стартовый балл 1100+, мы гарантируем 1520 и выше. Если цель не достигнута — занятия продолжаются без доплаты, пока вы не возьмёте свой балл.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "AI-анализ",
        "60+ mock-тестов",
        "Редактура эссе",
        "Стратегия поступления",
      ],
      timeline: {
        leadArrives: "Старт",
        aiReplies: "Цель",
        you: "1100+ → 1520+",
        competitors: "5 мес. в среднем",
        industry: "Группа из 5",
      },
    },
    qualifies: {
      tag: "Малая группа",
      title: "5 студентов на 1 преподавателя.",
      body: "Преподаватель лично знает сильные и слабые стороны каждого. Никто не остаётся позади — это гарантия.",
    },
    books: {
      tag: "AI-платформа",
      title: "makon.ai — 60+ практик и AI-анализ.",
      body: "По каждому вопросу AI говорит, что вы сделали и что нужно подтянуть. Тренировка 24/7, живые mock-тесты.",
    },
    languages: {
      tag: "Эссе и поступление",
      title: "Редактура эссе и выбор вуза.",
      body: "Сильные эссе для топ-школ и стратегический выбор. Покрываем каждый столп заявки — GPA, SAT, AP, внеклассная деятельность.",
    },
    memory: {
      tag: "Анализ балла",
      title: "Отчёт по каждому разделу.",
      body: "Math, Reading, Writing — где выросли, где буксуете. Ваш прогресс — на карте.",
    },
    dfy: {
      tag: "AP-подготовка",
      title: "AP — для университетских кредитов.",
      body: "Calculus, Physics, Chemistry, Computer Science. AP 5 = университетский кредит. Экономите время и деньги.",
    },
  },
  process: {
    eyebrow: "Маршрут",
    titleA: "Три шага.",
    titleB: "Одна мечта.",
    sub: "От 1100 до 1520+ — по чёткому плану. Никакой случайности — только система.",
    step: "Этап",
    steps: [
      {
        chip: "Этап 1",
        title: "Бесплатный mock и анализ.",
        body: "Определяем ваш текущий уровень — полный mock-тест, AI-анализ, карта сильных и слабых сторон. Это бесплатно. Идёте к нам или нет — уносите основу для решения.",
      },
      {
        chip: "Этап 2",
        title: "Личный план обучения.",
        body: "3 урока в неделю по 1.5 часа в группе из 5 человек. Каждый урок — Math, Reading, Writing. Домашние — на makon.ai, AI ведёт вас по пути.",
      },
      {
        chip: "Этап 3",
        title: "Mock-тесты и экзамен.",
        body: "Каждые 2 недели — реальный mock. К осени готовы — с баллом 1520+. Дальше — редактура эссе и стратегия поступления, готовый пакет для Ivy League.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Что говорят студенты",
    titleA: "Высокие баллы,",
    titleB: "открытые двери.",
    quotes: [
      {
        quote:
          "С 1320 до 1570 — за 5 месяцев. Без SAT Makon Cornell бы никогда не случился. Сейчас я там.",
        name: "Калмухаммед З.",
        role: "1320 → 1570 · Cornell University",
      },
      {
        quote:
          "Самый большой скачок — с 1420 до 1590. По Math преподаватель лично разобрал каждый вопрос. Группа из 5 — это реальная разница.",
        name: "Таисия С.",
        role: "1420 → 1590 · Stanford приём",
      },
      {
        quote:
          "В моей школе никто не брал 1500+. В SAT Makon я взял 1530 за 4 месяца. Подаю в MIT — это реально.",
        name: "Мадияр Н.",
        role: "1170 → 1560 · MIT заявка",
      },
    ],
  },
  cta: {
    eyebrow: "Гарантия балла",
    titleA: "1520+ баллов — или",
    titleB: "занятия бесплатно.",
    sub: "Если ваш стартовый балл 1100+, мы гарантируем 1520+. Если цель не достигнута — занятия продолжаются бесплатно, пока вы не возьмёте свой балл. Письменный договор.",
    ctaPrimary: "Записаться на бесплатный mock",
    ctaSecondary: "Получить консультацию",
    foot: "Бесплатно · 4 часа · Точный AI-анализ",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Чаще всего спрашивают.",
    items: [
      {
        q: "Что такое SAT и почему это важно?",
        a: "SAT — стандартизированный вступительный тест для университетов США и 180+ стран. Балл — от 400 до 1600. Harvard, MIT, Stanford — все смотрят на ваш балл SAT. 1500+ — это $10,000–$70,000 стипендии в год.",
      },
      {
        q: "Как работает гарантия балла?",
        a: "Если стартовый балл 1100+, мы письменно гарантируем 1520 и выше. Если цель не взяли — занятия продолжаются без доплаты, пока вы её не возьмёте.",
      },
      {
        q: "Сколько длится курс и сколько часов в неделю?",
        a: "Основная программа SAT — 4–6 месяцев. 3 урока в неделю по 1.5 часа — 4.5 часа в классе + домашние на makon.ai. В группе из 5 каждый студент получает личное внимание.",
      },
      {
        q: "Где находятся филиалы?",
        a: "Ташкент (Новза и Юнусабад), Бухара, Гулистан (Сырдарья), Навои. Также онлайн-формат — по всему Узбекистану.",
      },
      {
        q: "Есть ли PRE-SAT и AP?",
        a: "Да. PRE-SAT — предварительная подготовка к университету (9–10 классы). AP — Calculus, Physics, Chemistry, Computer Science и другие. AP 5 = университетский кредит — экономия времени и денег.",
      },
      {
        q: "Помогаете ли с эссе и заявкой?",
        a: "Конечно. SAT Makon — это не только балл, а вся приёмная воронка: редактура эссе, выбор университета, стратегия заявки, профиль внеклассной деятельности. Пакет для Ivy League пишем вместе.",
      },
      {
        q: "Сколько стоит?",
        a: "Зависит от тарифа, длительности и формата. На бесплатной консультации оценим уровень и подберём подходящий тариф. Для многих семей доступны удобные планы оплаты.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — центр подготовки к SAT и AP, специализирующийся на 1500+ балле. 300+ студентов, 5 филиалов, 1 цель: открыть путь в топ-университеты мира.",
    location: "Ташкент · Бухара · Гулистан · Навои",
    cols: [
      {
        title: "Программы",
        links: [
          { label: "PRE-SAT", href: "#features" },
          { label: "SAT", href: "#features" },
          { label: "AP Calculus", href: "#features" },
          { label: "Эссе и приём", href: "#features" },
        ],
      },
      {
        title: "Центр",
        links: [
          { label: "О нас", href: "#" },
          { label: "Преподаватели", href: "#" },
          { label: "Филиалы", href: "#" },
          { label: "makon.ai", href: "#" },
        ],
      },
      {
        title: "Ресурсы",
        links: [
          { label: "Бесплатный mock", href: "#cta" },
          { label: "60+ практик", href: "#" },
          { label: "Вопросы", href: "#faq" },
        ],
      },
    ],
    copyright: "Университет — это начало.",
    privacy: "Конфиденциальность",
    terms: "Условия",
    contact: "Контакт",
  },
  students: {
    eyebrow: "Наши студенты",
    titleA: "300+ студентов.",
    titleB: "1500+ балл.",
    sub: "Это наши настоящие студенты. Настоящие баллы. Ничего не приукрашено.",
  },
  unis: {
    eyebrow: "Куда поступили наши студенты",
    title: "Топ-университеты",
  },
};

const en: Dictionary = {
  nav: {
    product: "Programs",
    howItWorks: "Process",
    results: "Results",
    pricing: "Pricing",
    faq: "FAQ",
    bookAudit: "Free mock",
  },
  hero: {
    badge: "Tashkent · Bukhara · Guliston · Navoiy — enrollment open",
    titleA: "Harvard, MIT, Stanford —",
    titleB: "starts here.",
    sub: {
      before: "SAT Makon delivers a written",
      bold: "1500+ score guarantee",
      after:
        ". 3 lessons a week, 1.5 hours each, in groups of 5. 300+ of our students already opened the door to top universities.",
    },
    ctaPrimary: "Book your free mock",
    ctaSecondary: "See pricing",
    trust: "Start at 1100+ · 1520 or it's on us · 7 years of proof",
    scroll: "Scroll",
  },
  logos: {
    eyebrow: "Universities our students got into",
    industries: [
      "HARVARD",
      "STANFORD",
      "MIT",
      "YALE",
      "PRINCETON",
      "BROWN",
      "CAMBRIDGE",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    titleA: "The numbers talk —",
    titleB: "we don't have to.",
    sub: "300+ students scored 1500+. Every third graduate hits Ivy League level. This is our reality.",
    cards: [
      {
        label: "Students with 1500+",
        highlight: "Of our students",
        description:
          "scored 1500+ and unlocked Harvard, MIT, Stanford, Cornell, NYU and others.",
      },
      {
        label: "High-score share",
        highlight: "Of our graduates",
        description:
          "leave with 1500+. The market average is around 7% — we are 4× higher.",
      },
      {
        label: "Top result",
        highlight: "We hit the",
        description:
          "perfect score (1600 — the SAT max). Proof that the system works.",
      },
    ],
  },
  features: {
    eyebrow: "The system",
    titleA: "A full system",
    titleB: "built to deliver 1520+.",
    sub: "Not just lessons — a full admissions strategy. Essay editing, school selection, AI-powered practice — all in one system.",
    big: {
      tag: "Guarantee",
      titleBefore: "",
      titleBold: "1520+ score",
      titleAfter: " or",
      titleLine2: "the lessons keep going free.",
      body: "If your starting score is 1100 or above, we guarantee 1520 and higher. Don't hit it? Lessons continue at no extra cost — until you do.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "AI analysis",
        "60+ mock tests",
        "Essay editing",
        "Admissions strategy",
      ],
      timeline: {
        leadArrives: "Start",
        aiReplies: "Goal",
        you: "1100+ → 1520+",
        competitors: "5-month average",
        industry: "Groups of 5",
      },
    },
    qualifies: {
      tag: "Small group",
      title: "5 students per teacher.",
      body: "The teacher personally knows every student's strengths and gaps. No one falls behind — that's the promise.",
    },
    books: {
      tag: "AI platform",
      title: "makon.ai — 60+ practice tests, AI analysis.",
      body: "Per-question AI feedback on what you got, what to fix. 24/7 practice, live mock tests.",
    },
    languages: {
      tag: "Essay & admissions",
      title: "Essay editing & university selection.",
      body: "Compelling essays for top schools and strategic school choice. We cover every pillar — GPA, SAT, AP, extracurriculars.",
    },
    memory: {
      tag: "Score breakdown",
      title: "Per-section reporting.",
      body: "Math, Reading, Writing — where you climbed, where you stalled. Your progress, on the map.",
    },
    dfy: {
      tag: "AP prep",
      title: "AP — for college credit.",
      body: "Calculus, Physics, Chemistry, Computer Science. A 5 on AP equals a college credit — saving time and money.",
    },
  },
  process: {
    eyebrow: "The path",
    titleA: "Three steps.",
    titleB: "One dream.",
    sub: "From 1100 to 1520+ — by a clear plan. No luck involved, just a system.",
    step: "Step",
    steps: [
      {
        chip: "Step 1",
        title: "Free mock + diagnosis.",
        body: "We measure where you stand today — full mock test, AI analysis, map of strengths and weak spots. It's free. Whether you sign up or not, you walk out with a real plan.",
      },
      {
        chip: "Step 2",
        title: "A personalized study plan.",
        body: "3 lessons per week, 1.5 hours each, in groups of 5. Every lesson covers Math, Reading, Writing. Homework on makon.ai with AI tracking your progress.",
      },
      {
        chip: "Step 3",
        title: "Mock tests + the real exam.",
        body: "Every 2 weeks, a full live mock. By fall, you're ready — 1520+. Then we wrap the Ivy League application — essays, admissions strategy, the whole package.",
      },
    ],
  },
  testimonials: {
    eyebrow: "What students say",
    titleA: "High scores,",
    titleB: "doors opened.",
    quotes: [
      {
        quote:
          "1320 to 1570 — in five months. Without SAT Makon, Cornell never happens. Now I'm here.",
        name: "Kalmuxammed Z.",
        role: "1320 → 1570 · Cornell University",
      },
      {
        quote:
          "Biggest jump — 1420 to 1590. On Math, my teacher walked through every question with me. The 5-student group makes a real difference.",
        name: "Taisiia S.",
        role: "1420 → 1590 · Stanford admit",
      },
      {
        quote:
          "Nobody at my school had ever scored 1500+. At SAT Makon I hit 1530 in 4 months. Applying to MIT — and it's real.",
        name: "Madiyar N.",
        role: "1170 → 1560 · MIT applicant",
      },
    ],
  },
  cta: {
    eyebrow: "Score guarantee",
    titleA: "1520+ — or",
    titleB: "lessons are on us.",
    sub: "If your starting score is 1100+, we guarantee 1520+. Don't hit it? Lessons keep going free, until you do. In writing.",
    ctaPrimary: "Book your free mock",
    ctaSecondary: "Get a consultation",
    foot: "Free · 4 hours · Honest AI breakdown",
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions everyone asks.",
    items: [
      {
        q: "What is the SAT and why does it matter?",
        a: "The SAT is the standardized admissions exam for U.S. universities and 180+ countries. Scores range from 400 to 1600. Harvard, MIT, Stanford — all weigh your score heavily. 1500+ unlocks $10,000–$70,000/year in scholarships.",
      },
      {
        q: "How does the score guarantee work?",
        a: "If your starting score is 1100+, we guarantee 1520 or higher in writing. If you don't hit the target, lessons continue at no extra cost until you do.",
      },
      {
        q: "How long is the course and how many hours per week?",
        a: "The main SAT program runs 4–6 months. Three 1.5-hour classes per week — 4.5 hours in class plus homework on makon.ai. Groups of 5 mean every student gets personal attention.",
      },
      {
        q: "Where are your branches?",
        a: "Tashkent (Novza and Yunusobod), Bukhara, Guliston (Syrdarya), Navoiy. Online format also available across all of Uzbekistan.",
      },
      {
        q: "Do you offer PRE-SAT and AP?",
        a: "Yes. PRE-SAT for early university prep (grades 9–10). AP — Calculus, Physics, Chemistry, Computer Science and more. A 5 on AP equals a college credit — time and money saved.",
      },
      {
        q: "Do you help with essays and applications?",
        a: "Absolutely. SAT Makon isn't just about the score — we cover the full admissions funnel: essay editing, school selection, application strategy, extracurricular profile. We build the Ivy League package together.",
      },
      {
        q: "How much does it cost?",
        a: "Depends on the program, duration, and format. The free consultation is where we measure your level and pick the right tier. Friendly payment plans available for most families.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — the SAT and AP prep center built around the 1500+ score. 300+ students, 5 branches, 1 mission: open the door to the world's top universities.",
    location: "Tashkent · Bukhara · Guliston · Navoiy",
    cols: [
      {
        title: "Programs",
        links: [
          { label: "PRE-SAT", href: "#features" },
          { label: "SAT", href: "#features" },
          { label: "AP Calculus", href: "#features" },
          { label: "Essay & admissions", href: "#features" },
        ],
      },
      {
        title: "The center",
        links: [
          { label: "About us", href: "#" },
          { label: "Teachers", href: "#" },
          { label: "Branches", href: "#" },
          { label: "makon.ai", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Free mock", href: "#cta" },
          { label: "60+ practice tests", href: "#" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    copyright: "University is the beginning.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
  },
  students: {
    eyebrow: "Our students",
    titleA: "300+ students.",
    titleB: "1500+ scores.",
    sub: "Real students. Real scores. Nothing dressed up.",
  },
  unis: {
    eyebrow: "Where our students got in",
    title: "Top universities",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  uz,
  ru,
  en,
};
