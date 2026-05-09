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
    product: "SAT",
    howItWorks: "Jarayon",
    results: "Natijalar",
    pricing: "Tariflar",
    faq: "Savollar",
    bookAudit: "Boshlash",
  },
  hero: {
    badge: "Toshkent · Buxoro · Guliston · Navoiy — qabul ochiq",
    titleA: "SAT Makon —",
    titleB: "universitetga ilk qadam.",
    sub: {
      before: "Yetakchi universitetlarga intilayotganlar uchun",
      bold: "yuqori samarali SAT va AP tayyorlovi",
      after:
        ". 25K+ o'quvchi bizga ishondi, 300+ talabamiz 1500+ ball oldi.",
    },
    ctaPrimary: "Biz bilan bog'laning",
    ctaSecondary: "Tariflarni ko'rish",
    trust: "25K+ o'quvchi · 30% — 1500+ ball · 5 filial",
    scroll: "Aylantiring",
  },
  logos: {
    eyebrow: "O'quvchilarimiz qabul qilingan universitetlar",
    industries: [
      "HARVARD",
      "YALE",
      "PRINCETON",
      "STANFORD",
      "CAMBRIDGE",
      "BROWN",
      "MIT",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "Raqamlar bilan",
    titleA: "Natijalar gapiradi —",
    titleB: "biz sukut saqlaymiz.",
    sub: "300+ o'quvchimiz 1500+ ball oldi. Har 3-talabamizdan 1 nafari Ivy League darajasidagi natija bilan bitiradi.",
    cards: [
      {
        label: "1500+ ballik talabalar",
        highlight: "O'quvchilarimiz",
        description:
          "1500+ ball oldi va Harvard, MIT, Stanford, Cornell, NYU darajasidagi universitetlarga ariza yo'lini ochdi.",
      },
      {
        label: "Yuqori ballarning ulushi",
        highlight: "Talabalarimizning",
        description:
          "1500+ ball bilan bitiradi — bozor o'rtachasi ~7%, biz 4 baravar yuqorida turamiz.",
      },
      {
        label: "Eng yuqori natija",
        highlight: "Mukammal natijaga",
        description:
          "yetib bordik (1600 — maximal SAT bali). Ta'lim modelimiz ishlayotganining isboti.",
      },
    ],
  },
  features: {
    eyebrow: "Tizim",
    titleA: "1520+ ballga olib boruvchi",
    titleB: "to'liq tizim.",
    sub: "Faqat darslar emas — to'liq qabul strategiyasi. Esse tekshiruvi, universitet tanlash, AI bilan kuchaytirilgan amaliyot — hammasi bir tizimda.",
    big: {
      tag: "Ball kafolati",
      titleBefore: "",
      titleBold: "1520+ ball",
      titleAfter: " — yoki",
      titleLine2: "darslar bepul davom etadi.",
      body: "Boshlang'ich balingiz 1100+ bo'lsa — biz 1520 va undan yuqori natijani yozma kafolatlaymiz. Maqsadga yetmasangiz, darslar qo'shimcha to'lovsiz davom etadi — to siz maqsadga yetguncha.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "60+ mock test",
        "AI tahlili",
        "Esse tekshiruvi",
        "Universitet tanlash",
      ],
      timeline: {
        leadArrives: "Boshlanish",
        aiReplies: "Maqsad",
        you: "1100+ → 1520+",
        competitors: "5 kishilik guruh",
        industry: "Yozma shartnoma",
      },
    },
    qualifies: {
      tag: "Kichik guruh",
      title: "5 talabaga 1 ustoz.",
      body: "O'qituvchi har bir o'quvchining kuchli va zaif tomonlarini shaxsan biladi. Hech kim orqada qolmaydi — bu kafolat.",
    },
    books: {
      tag: "AI platforma",
      title: "makon.ai — 60+ amaliy test, AI tahlili.",
      body: "Har savol bo'yicha AI tutor sizga shaxsiy fikr bildiradi. 24/7 mashq, jonli mock testlar, lug'at trenajori — hammasi bir joyda.",
    },
    languages: {
      tag: "Esse va qabul",
      title: "Esse tekshiruvi va universitet tanlash.",
      body: "Top maktablar uchun ta'sirchan esselar va strategik tanlov. Ariza har ustunini qamrab olamiz — GPA, SAT, AP, qo'shimcha faoliyat.",
    },
    memory: {
      tag: "Ball tahlili",
      title: "Har bo'lim bo'yicha hisobot.",
      body: "Math, Reading, Writing — qaysi mavzuda qancha ko'tardingiz, qaysi savollarda qiynalasiz. Progressingiz xaritada.",
    },
    dfy: {
      tag: "AP tayyorlov",
      title: "AP — 38+ fan, universitet krediti.",
      body: "Calculus, Physics, Chemistry, Computer Science, Statistics, Economics va boshqa 30+ AP fanlari. AP 5 bali = universitet krediti — vaqt va pul tejaysiz.",
    },
  },
  process: {
    eyebrow: "Yo'l",
    titleA: "Universitetga",
    titleB: "yo'lingiz.",
    sub: "Yutuqli arizaning har bir ustunini qamrab olamiz. GPA → SAT/AP → Esse va profil — tizimli ravishda.",
    step: "Bosqich",
    steps: [
      {
        chip: "01-bosqich",
        title: "GPA va o'quv odatlari.",
        body: "Strukturlangan rejalar va vaqt boshqaruvi orqali mustahkam akademik poydevor. Maktab davomida ham, undan keyin ham — bu fundament hech qachon eskirmaydi.",
      },
      {
        chip: "02-bosqich",
        title: "SAT va AP bali.",
        body: "Isbotlangan metodologiya bilan top foizli SAT natijasi. Math, Reading, Writing — barcha bo'limlar. Haftada amaliy testlar va shaxsiy tahlil.",
      },
      {
        chip: "03-bosqich",
        title: "Esse, ariza va profil.",
        body: "Ta'sirchan esse, ko'zga tashlanadigan ariza, qo'shimcha faoliyat profili. Top maktablar uchun strategik tanlov — Ivy League ariza paketini birga yozamiz.",
      },
    ],
  },
  testimonials: {
    eyebrow: "O'quvchilarimiz nima deyishadi",
    titleA: "Yuqori ballar,",
    titleB: "ochilgan eshiklar.",
    quotes: [
      {
        quote:
          "Kam aka shunchaki o'qituvchi emas — mentor. 1600 olishim mumkin deb hech kim aytmagan edi, u aytdi va men oldim.",
        name: "Muhammadmirzo X.",
        role: "1450 → 1600 · Stanford",
      },
      {
        quote:
          "Math bo'yicha 720 dan 800 ga ko'tarildim — Kam akaning question-strategiyasi tufayli. Endi MIT da Computer Science o'qiyman.",
        name: "Madiyar N.",
        role: "1380 → 1560 · MIT",
      },
      {
        quote:
          "Esse yordami va ariza strategiyasi — bu SAT'dan keyingi eng katta farq. Columbia'ga to'liq stipendiya bilan kirdim.",
        name: "Taisiia S.",
        role: "1420 → 1590 · Columbia",
      },
    ],
  },
  cta: {
    eyebrow: "Birinchi qadam",
    titleA: "Birinchi qadamni",
    titleB: "bugun qo'ying.",
    sub: "Bepul konsultatsiyada maqsadlaringiz, joriy ballingiz va sizga mos tarifni muhokama qilamiz. Yozma ravishda 1520+ kafolat — ozod qadam tashlang.",
    ctaPrimary: "Ro'yxatdan o'ting",
    ctaSecondary: "Bepul mock test",
    foot: "Majburiyatsiz · 30 daqiqa · Shaxsiy tavsiyalar",
  },
  faq: {
    eyebrow: "Savollar",
    title: "Eng ko'p so'raladigan savollar.",
    items: [
      {
        q: "SAT va AP orasidagi farq nima?",
        a: "SAT — universitetga kirish standart testi (400–1600). AP — alohida fanlar bo'yicha universitet darajasidagi imtihonlar (1–5). Ikkalasi ham arizani kuchaytiradi va katta stipendiyaga olib keladi.",
      },
      {
        q: "Ball kafolati qanday ishlaydi?",
        a: "Boshlang'ich balingiz 1100+ bo'lsa — biz yozma ravishda 1520 va undan yuqori natijani kafolatlaymiz. Agar maqsadga yetmasangiz, darslar qo'shimcha to'lovsiz davom etadi — to siz maqsadga yetguncha.",
      },
      {
        q: "Qaysi ball bilan kursga qo'shilish mumkin?",
        a: "Har qanday boshlang'ich ball bilan yordam bera olamiz. Bepul konsultatsiyada darajangizni baholaymiz va sizga mos tarifni — PRE-SAT, SAT yoki AP — tanlaymiz.",
      },
      {
        q: "Darslar qanday formatda o'tadi?",
        a: "Ham onlayn, ham oflayn guruhlar mavjud. 5 kishilik kichik guruhlar — har bir o'quvchi shaxsiy e'tibor oladi. O'qituvchi darsdan tashqari ham javob beradi.",
      },
      {
        q: "Filiallar qayerda joylashgan?",
        a: "Toshkent (Novza va Yunusobod), Buxoro, Guliston (Sirdaryo), Navoiy. Onlayn format ham mavjud — butun O'zbekiston bo'ylab.",
      },
      {
        q: "AP imtihonlari qachon va qaysi fanlar bor?",
        a: "AP imtihonlari har yil may oyida bo'lib o'tadi — College Board sanalari bo'yicha. Tayyorgarlikni 3–4 oy oldin boshlash — eng to'g'risi. Calculus, Physics, Chemistry, Computer Science va boshqa 30+ fan mavjud.",
      },
      {
        q: "Narxi qancha?",
        a: "SAT va PRE-SAT: 1 fan — 900 000 so'm, 2 fan (Math + Ingliz tili) — 1 700 000 so'm. AP Calculus: 1 000 000 so'm. Bepul konsultatsiyada to'liq shartlar va chegirmalar muhokama qilinadi.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — 1500+ ballga ixtisoslashgan SAT va AP tayyorlov markazi. 25K+ o'quvchi, 5 filial, 1 ta vazifa: dunyodagi top universitetlarga yo'l ochish.",
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
          { label: "Filiallar", href: "#footer" },
          { label: "Ustozlar", href: "#testimonials" },
          { label: "makon.ai", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
          { label: "Bepul mock", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
        ],
      },
      {
        title: "Resurslar",
        links: [
          { label: "Bepul konsultatsiya", href: "#cta" },
          { label: "Savollar", href: "#faq" },
          { label: "Telegram kanal", href: "https://t.me/sat_makon_uz" },
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
    eyebrow: "O'quvchilarimiz qabul qilingan",
    title: "Top universitetlar",
  },
};

export type Dictionary = typeof uz;

const ru: Dictionary = {
  nav: {
    product: "SAT",
    howItWorks: "Процесс",
    results: "Результаты",
    pricing: "Тарифы",
    faq: "Вопросы",
    bookAudit: "Начать",
  },
  hero: {
    badge: "Ташкент · Бухара · Гулистан · Навои — набор открыт",
    titleA: "SAT Makon —",
    titleB: "первый шаг в университет.",
    sub: {
      before: "Для тех, кто стремится в ведущие университеты —",
      bold: "высокоэффективная подготовка к SAT и AP",
      after:
        ". 25K+ студентов нам доверились, 300+ выпускников набрали 1500+ балла.",
    },
    ctaPrimary: "Связаться с нами",
    ctaSecondary: "Посмотреть тарифы",
    trust: "25K+ студентов · 30% — 1500+ балла · 5 филиалов",
    scroll: "Листайте",
  },
  logos: {
    eyebrow: "Университеты, в которые поступили наши студенты",
    industries: [
      "HARVARD",
      "YALE",
      "PRINCETON",
      "STANFORD",
      "CAMBRIDGE",
      "BROWN",
      "MIT",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "В цифрах",
    titleA: "Цифры говорят —",
    titleB: "мы молчим.",
    sub: "300+ студентов набрали 1500+ балла. Каждый третий выпускник — на уровне Ivy League.",
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
          "заканчивают с 1500+ баллом — это в 4 раза выше среднего по рынку (~7%).",
      },
      {
        label: "Высший результат",
        highlight: "Мы дошли до",
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
      tag: "Гарантия балла",
      titleBefore: "",
      titleBold: "1520+ баллов",
      titleAfter: " — или",
      titleLine2: "занятия продолжаются бесплатно.",
      body: "Если ваш стартовый балл 1100+, мы письменно гарантируем 1520 и выше. Если цель не достигнута — занятия продолжаются без доплаты, пока вы не возьмёте свой балл.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "60+ mock-тестов",
        "AI-анализ",
        "Редактура эссе",
        "Выбор вуза",
      ],
      timeline: {
        leadArrives: "Старт",
        aiReplies: "Цель",
        you: "1100+ → 1520+",
        competitors: "Группа из 5",
        industry: "Письменный договор",
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
      body: "По каждому вопросу AI-тьютор даёт персональный разбор. Тренировка 24/7, живые mock-тесты, тренажёр лексики — всё в одном.",
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
      title: "AP — 38+ предметов, кредит вуза.",
      body: "Calculus, Physics, Chemistry, Computer Science, Statistics, Economics и ещё 30+ AP-предметов. 5 на AP = университетский кредит — экономия времени и денег.",
    },
  },
  process: {
    eyebrow: "Маршрут",
    titleA: "Ваш путь",
    titleB: "в университет.",
    sub: "Покрываем каждый столп успешной заявки. GPA → SAT/AP → Эссе и профиль — системно.",
    step: "Этап",
    steps: [
      {
        chip: "Этап 01",
        title: "GPA и учебные привычки.",
        body: "Структурированные планы и тайм-менеджмент строят прочный академический фундамент. Этот навык не устаревает — ни в школе, ни после.",
      },
      {
        chip: "Этап 02",
        title: "Балл SAT и AP.",
        body: "Проверенная методология ведёт к топ-процентному результату. Math, Reading, Writing — все секции. Еженедельные практики и личный разбор.",
      },
      {
        chip: "Этап 03",
        title: "Эссе, заявка и профиль.",
        body: "Сильное эссе, выделяющаяся заявка, профиль внеклассной деятельности. Стратегический выбор школ — пакет для Ivy League собираем вместе.",
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
          "Кам ака — это не просто учитель, а ментор. Никто не говорил мне, что я могу взять 1600. Он сказал — и я взял.",
        name: "Мухаммадмирзо Х.",
        role: "1450 → 1600 · Stanford",
      },
      {
        quote:
          "По Math я поднялся с 720 до 800 — благодаря стратегии Кам аки по разбору вопросов. Сейчас я учусь в MIT на Computer Science.",
        name: "Мадияр Н.",
        role: "1380 → 1560 · MIT",
      },
      {
        quote:
          "Помощь с эссе и стратегией заявки — это самая большая разница после SAT. Поступил в Columbia с полной стипендией.",
        name: "Таисия С.",
        role: "1420 → 1590 · Columbia",
      },
    ],
  },
  cta: {
    eyebrow: "Первый шаг",
    titleA: "Сделайте первый шаг",
    titleB: "сегодня.",
    sub: "На бесплатной консультации обсудим ваши цели, текущий балл и подходящий тариф. Письменная гарантия 1520+ — шагните без рисков.",
    ctaPrimary: "Записаться",
    ctaSecondary: "Бесплатный mock-тест",
    foot: "Без обязательств · 30 минут · Персональные рекомендации",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Чаще всего спрашивают.",
    items: [
      {
        q: "В чём разница между SAT и AP?",
        a: "SAT — стандартизированный вступительный тест в университет (400–1600). AP — экзамены университетского уровня по отдельным предметам (1–5). Оба усиливают заявку и открывают путь к стипендиям.",
      },
      {
        q: "Как работает гарантия балла?",
        a: "Если стартовый балл 1100+, мы письменно гарантируем 1520 и выше. Если цель не взяли — занятия продолжаются без доплаты, пока вы её не возьмёте.",
      },
      {
        q: "С каким баллом можно записаться на курс?",
        a: "Поможем с любым стартовым баллом. На бесплатной консультации оценим уровень и подберём тариф — PRE-SAT, SAT или AP.",
      },
      {
        q: "В каком формате проходят занятия?",
        a: "Доступны и онлайн, и офлайн группы. Малые группы по 5 человек — каждый студент получает личное внимание. Преподаватель отвечает и вне урока.",
      },
      {
        q: "Где находятся филиалы?",
        a: "Ташкент (Новза и Юнусабад), Бухара, Гулистан (Сырдарья), Навои. Доступен также онлайн-формат — по всему Узбекистану.",
      },
      {
        q: "Когда AP-экзамены и какие предметы есть?",
        a: "AP-экзамены проходят каждый май — по датам College Board. Готовиться лучше за 3–4 месяца. Доступны Calculus, Physics, Chemistry, Computer Science и ещё 30+ предметов.",
      },
      {
        q: "Сколько стоит?",
        a: "SAT и PRE-SAT: 1 предмет — 900 000 сум, 2 предмета (Math + Англ.) — 1 700 000 сум. AP Calculus: 1 000 000 сум. На бесплатной консультации обсуждаем условия и скидки.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — центр подготовки к SAT и AP, специализирующийся на 1500+ балле. 25K+ студентов, 5 филиалов, 1 цель: открыть путь в топ-университеты мира.",
    location: "Ташкент · Бухара · Гулистан · Навои",
    cols: [
      {
        title: "Программы",
        links: [
          { label: "PRE-SAT", href: "#features" },
          { label: "SAT", href: "#features" },
          { label: "AP Calculus", href: "#features" },
          { label: "Эссе и поступление", href: "#features" },
        ],
      },
      {
        title: "Центр",
        links: [
          { label: "Филиалы", href: "#footer" },
          { label: "Преподаватели", href: "#testimonials" },
          { label: "makon.ai", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
          { label: "Бесплатный mock", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
        ],
      },
      {
        title: "Ресурсы",
        links: [
          { label: "Бесплатная консультация", href: "#cta" },
          { label: "Вопросы", href: "#faq" },
          { label: "Telegram-канал", href: "https://t.me/sat_makon_uz" },
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
    product: "SAT",
    howItWorks: "Process",
    results: "Results",
    pricing: "Pricing",
    faq: "FAQ",
    bookAudit: "Get started",
  },
  hero: {
    badge: "Tashkent · Bukhara · Guliston · Navoiy — enrollment open",
    titleA: "SAT Makon —",
    titleB: "your first step to university.",
    sub: {
      before: "For students aiming at the world's leading universities —",
      bold: "high-performance SAT and AP prep",
      after:
        ". 25K+ students trusted us; 300+ scored 1500+.",
    },
    ctaPrimary: "Get in touch",
    ctaSecondary: "See pricing",
    trust: "25K+ students · 30% scored 1500+ · 5 branches",
    scroll: "Scroll",
  },
  logos: {
    eyebrow: "Universities our students got into",
    industries: [
      "HARVARD",
      "YALE",
      "PRINCETON",
      "STANFORD",
      "CAMBRIDGE",
      "BROWN",
      "MIT",
      "CORNELL",
      "BERKELEY",
      "NYU",
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    titleA: "The numbers talk —",
    titleB: "we don't have to.",
    sub: "300+ students scored 1500+. Every third graduate hits Ivy League level.",
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
          "leave with 1500+ — about 4× the market average of ~7%.",
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
      tag: "Score guarantee",
      titleBefore: "",
      titleBold: "1520+ score",
      titleAfter: " — or",
      titleLine2: "the lessons keep going free.",
      body: "If your starting score is 1100 or above, we guarantee 1520 and higher in writing. Don't hit it? Lessons continue at no extra cost — until you do.",
      channels: [
        "Math 800",
        "Reading 760+",
        "Writing 760+",
        "60+ mock tests",
        "AI analysis",
        "Essay editing",
        "School selection",
      ],
      timeline: {
        leadArrives: "Start",
        aiReplies: "Goal",
        you: "1100+ → 1520+",
        competitors: "Groups of 5",
        industry: "Written agreement",
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
      body: "Per-question AI tutor feedback. 24/7 practice, live mock tests, vocabulary trainer — all in one place.",
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
      title: "AP — 38+ subjects, college credit.",
      body: "Calculus, Physics, Chemistry, Computer Science, Statistics, Economics and 30+ more AP subjects. A 5 on AP = a college credit — saving time and money.",
    },
  },
  process: {
    eyebrow: "The path",
    titleA: "Your path",
    titleB: "to university.",
    sub: "We cover every pillar of a winning application. GPA → SAT/AP → essay & profile — systematically.",
    step: "Step",
    steps: [
      {
        chip: "Step 01",
        title: "GPA & study habits.",
        body: "Structured plans and time management build a rock-solid academic base. This skill ages well — through school and well beyond.",
      },
      {
        chip: "Step 02",
        title: "SAT & AP score.",
        body: "Proven methodology delivers top-percentile SAT results. Math, Reading, Writing — every section. Weekly practice tests and personal breakdowns.",
      },
      {
        chip: "Step 03",
        title: "Essay, application, profile.",
        body: "Compelling essays, a stand-out application, an extracurricular profile. Strategic school choice — we build the Ivy League package together.",
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
          "Kam aka isn't just a teacher — he's a mentor. No one told me I could hit 1600. He did. And I did.",
        name: "Muhammadmirzo X.",
        role: "1450 → 1600 · Stanford",
      },
      {
        quote:
          "Math went from 720 to 800 — thanks to Kam aka's question strategy. Now I'm at MIT studying Computer Science.",
        name: "Madiyar N.",
        role: "1380 → 1560 · MIT",
      },
      {
        quote:
          "Essay help and admissions strategy — that's the biggest difference after the SAT. Got into Columbia with a full scholarship.",
        name: "Taisiia S.",
        role: "1420 → 1590 · Columbia",
      },
    ],
  },
  cta: {
    eyebrow: "First step",
    titleA: "Take the first step",
    titleB: "today.",
    sub: "In a free consultation, we'll talk goals, your current score, and the right tier for you. A written 1520+ guarantee — step in risk-free.",
    ctaPrimary: "Sign up",
    ctaSecondary: "Free mock test",
    foot: "No obligation · 30 minutes · Personalized recommendations",
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions everyone asks.",
    items: [
      {
        q: "What's the difference between SAT and AP?",
        a: "SAT is the standardized university admissions test (400–1600). AP exams are college-level tests in individual subjects (1–5). Both strengthen your application and unlock scholarships.",
      },
      {
        q: "How does the score guarantee work?",
        a: "If your starting score is 1100+, we guarantee 1520 or higher in writing. If you don't hit the target, lessons continue at no extra cost until you do.",
      },
      {
        q: "What starting score do I need?",
        a: "We help at any starting level. The free consultation is where we measure your level and pick the right tier — PRE-SAT, SAT, or AP.",
      },
      {
        q: "What's the lesson format?",
        a: "We run both online and in-person groups. Small groups of 5 — every student gets personal attention. Teachers stay reachable outside lesson hours too.",
      },
      {
        q: "Where are your branches?",
        a: "Tashkent (Novza and Yunusobod), Bukhara, Guliston (Syrdarya), Navoiy. Online format also available across all of Uzbekistan.",
      },
      {
        q: "When are AP exams and which subjects do you offer?",
        a: "AP exams run every May, on College Board dates. Best to start prepping 3–4 months out. We offer Calculus, Physics, Chemistry, Computer Science and 30+ other subjects.",
      },
      {
        q: "How much does it cost?",
        a: "SAT and PRE-SAT: 1 subject — 900,000 UZS, 2 subjects (Math + English) — 1,700,000 UZS. AP Calculus: 1,000,000 UZS. The free consultation is where we walk through full terms and discounts.",
      },
    ],
  },
  footer: {
    blurb:
      "SAT Makon — the SAT and AP prep center built around the 1500+ score. 25K+ students, 5 branches, 1 mission: open the door to the world's top universities.",
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
          { label: "Branches", href: "#footer" },
          { label: "Teachers", href: "#testimonials" },
          { label: "makon.ai", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
          { label: "Free mock", href: "https://makonbook-sat-itqub.ondigitalocean.app/sat/guest/" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Free consultation", href: "#cta" },
          { label: "FAQ", href: "#faq" },
          { label: "Telegram channel", href: "https://t.me/sat_makon_uz" },
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
