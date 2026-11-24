/* MoodSky — moods, XP game, secret skies and 3 languages. No libraries. */

/* ---------- Translations ---------- */

const STRINGS = {
  en: {
    eyebrow: "A LITTLE WEATHER JOURNAL",
    lede: "Tell me what the weather is like in there. I'll draw it.",
    surprise: "Surprise me",
    forecastKicker: "FORECAST, MORE OR LESS",
    another: "Another message",
    hint: "Tip: press 1–8 on your keyboard",
    gameKicker: "A SMALL GAME",
    gameTitle: "Field notes",
    xpLabel: "INK MARKS",
    secretKicker: "HIDDEN PAGES",
    diaryKicker: "THE PAST WEEK",
    diaryTitle: "Mood diary",
    clearDiary: "Clear my diary",
    footer: "Kept in this browser. No account, no cloud, no fuss.",
    confirmClear: "Clear your whole mood diary? This can't be undone.",
    langLabel: "Language",
    moodLabel: "Choose your mood",
    secretLabel: "Secret skies",
    keyLabel: "key",
    today: "Today",
    noEntry: "No entry",
    "greeting.night": "Still up, night owl?",
    "greeting.morning": "Good morning, traveler.",
    "greeting.afternoon": "Good afternoon, traveler.",
    "greeting.evening": "Good evening, traveler.",
    "mood.sunny": "Happy", "mood.rainy": "Rainy", "mood.stormy": "Stormy",
    "mood.calm": "Calm", "mood.electric": "Electric", "mood.meteor": "Meteor",
    "mood.nebula": "Nebula", "mood.golden": "Golden Hour",
    "forecast.sunny": "A bright, golden kind of day",
    "forecast.rainy": "Soft rain, soft heart",
    "forecast.stormy": "Thunder with a side of lightning",
    "forecast.calm": "Clear skies and quiet stars",
    "forecast.electric": "Auroras, sparks, and big ideas",
    "forecast.meteor": "Wishes flying across the dark",
    "forecast.nebula": "A slow, colorful drift through space",
    "forecast.golden": "Warm light on everything",
    "stat.streak.one": "{n} day streak", "stat.streak.many": "{n} day streak",
    "stat.entries.one": "{n} entry", "stat.entries.many": "{n} entries",
    "quest.first.title": "First forecast", "quest.first.desc": "Log your first mood · +20 XP",
    "quest.explorer.title": "Weather explorer", "quest.explorer.desc": "Try all 5 base skies · +40 XP",
    "quest.streak3.title": "On a roll", "quest.streak3.desc": "Reach a 3-day streak · +50 XP",
    "quest.collector.title": "Sky collector", "quest.collector.desc": "Unlock all secret skies · +60 XP",
    "quest.done": "Done",
    "secret.locked": "Unlocks at Level {n}",
    "secret.hint": "Tap to paint the sky",
    "toast.level": "Level {n} reached!",
    "toast.unlock": "New sky unlocked: {name}",
    "toast.quest": "Quest complete: {name} · +{xp} XP",
    "toast.cleared": "Diary cleared"
  },
  fr: {
    eyebrow: "UN PETIT JOURNAL MÉTÉO",
    lede: "Dis-moi quel temps il fait là-dedans. Je le dessinerai.",
    surprise: "Surprends-moi",
    forecastKicker: "PRÉVISION, PLUS OU MOINS",
    another: "Un autre message",
    hint: "Astuce : appuie sur 1–8 au clavier",
    gameKicker: "UN PETIT JEU",
    gameTitle: "Notes de terrain",
    xpLabel: "MARQUES D'ENCRE",
    secretKicker: "PAGES CACHÉES",
    diaryKicker: "LA SEMAINE PASSÉE",
    diaryTitle: "Journal d'humeur",
    clearDiary: "Effacer mon journal",
    footer: "Gardé dans ce navigateur. Pas de compte, pas de cloud, pas d'histoire.",
    confirmClear: "Effacer tout ton journal ? Cette action est irréversible.",
    langLabel: "Langue",
    moodLabel: "Choisis ton humeur",
    secretLabel: "Ciels secrets",
    keyLabel: "touche",
    today: "Aujourd'hui",
    noEntry: "Aucune donnée",
    "greeting.night": "Encore réveillé, oiseau de nuit ?",
    "greeting.morning": "Bonjour, voyageur.",
    "greeting.afternoon": "Bel après-midi, voyageur.",
    "greeting.evening": "Bonsoir, voyageur.",
    "mood.sunny": "Joyeux", "mood.rainy": "Pluvieux", "mood.stormy": "Orageux",
    "mood.calm": "Calme", "mood.electric": "Électrique", "mood.meteor": "Météore",
    "mood.nebula": "Nébuleuse", "mood.golden": "Heure dorée",
    "forecast.sunny": "Une journée lumineuse et dorée",
    "forecast.rainy": "Pluie douce, cœur doux",
    "forecast.stormy": "Tonnerre et éclairs au menu",
    "forecast.calm": "Ciel dégagé et étoiles tranquilles",
    "forecast.electric": "Aurores, étincelles et grandes idées",
    "forecast.meteor": "Des vœux filent dans la nuit",
    "forecast.nebula": "Une lente dérive colorée dans l'espace",
    "forecast.golden": "Une lumière chaude sur tout",
    "stat.streak.one": "{n} jour d'affilée", "stat.streak.many": "{n} jours d'affilée",
    "stat.entries.one": "{n} entrée", "stat.entries.many": "{n} entrées",
    "quest.first.title": "Première prévision", "quest.first.desc": "Note ta première humeur · +20 XP",
    "quest.explorer.title": "Explorateur météo", "quest.explorer.desc": "Essaie les 5 ciels de base · +40 XP",
    "quest.streak3.title": "En série", "quest.streak3.desc": "Atteins 3 jours d'affilée · +50 XP",
    "quest.collector.title": "Collectionneur", "quest.collector.desc": "Débloque tous les ciels secrets · +60 XP",
    "quest.done": "Fait",
    "secret.locked": "Débloqué au niveau {n}",
    "secret.hint": "Touche pour peindre le ciel",
    "toast.level": "Niveau {n} atteint !",
    "toast.unlock": "Nouveau ciel débloqué : {name}",
    "toast.quest": "Quête terminée : {name} · +{xp} XP",
    "toast.cleared": "Journal effacé"
  },
  ar: {
    eyebrow: "مفكرة طقس صغيرة",
    lede: "قل لي ما الطقس في داخلك. سأرسمه لك.",
    surprise: "فاجئني",
    forecastKicker: "توقع تقريبي",
    another: "رسالة أخرى",
    hint: "نصيحة: اضغط 1–8 من لوحة المفاتيح",
    gameKicker: "لعبة صغيرة",
    gameTitle: "ملاحظات ميدانية",
    xpLabel: "علامات حبر",
    secretKicker: "صفحات مخفية",
    diaryKicker: "الأسبوع الماضي",
    diaryTitle: "مفكرة المزاج",
    clearDiary: "مسح مفكرتي",
    footer: "محفوظ في هذا المتصفح. بلا حساب، بلا سحابة، بلا تعقيد.",
    confirmClear: "هل تريد مسح مفكرة المزاج بالكامل؟ لا يمكن التراجع.",
    langLabel: "اللغة",
    moodLabel: "اختر حالتك",
    secretLabel: "سماء سرية",
    keyLabel: "مفتاح",
    today: "اليوم",
    noEntry: "لا يوجد سجل",
    "greeting.night": "ما زلت مستيقظاً يا بوم الليل؟",
    "greeting.morning": "صباح الخير أيها المسافر.",
    "greeting.afternoon": "مساء الخير أيها المسافر.",
    "greeting.evening": "مساء الخير أيها المسافر.",
    "mood.sunny": "سعيد", "mood.rainy": "ممطر", "mood.stormy": "عاصف",
    "mood.calm": "هادئ", "mood.electric": "كهربائي", "mood.meteor": "شهاب",
    "mood.nebula": "سديم", "mood.golden": "الساعة الذهبية",
    "forecast.sunny": "يوم مشرق وذهبي",
    "forecast.rainy": "مطر ناعم وقلب ناعم",
    "forecast.stormy": "رعد مع لمسة من البرق",
    "forecast.calm": "سماء صافية ونجوم هادئة",
    "forecast.electric": "شفق وشرارات وأفكار كبيرة",
    "forecast.meteor": "أمنيات تطير في الظلام",
    "forecast.nebula": "انجراف بطيء وملون في الفضاء",
    "forecast.golden": "ضوء دافئ على كل شيء",
    "stat.streak.one": "{n} يوم متتالي", "stat.streak.many": "{n} أيام متتالية",
    "stat.entries.one": "{n} سجل", "stat.entries.many": "{n} سجلات",
    "quest.first.title": "أول توقع", "quest.first.desc": "سجل حالتك الأولى · +20 XP",
    "quest.explorer.title": "مستكشف الطقس", "quest.explorer.desc": "جرّب السماء الأساسية الخمس · +40 XP",
    "quest.streak3.title": "في سلسلة", "quest.streak3.desc": "صل إلى 3 أيام متتالية · +50 XP",
    "quest.collector.title": "جامع السماء", "quest.collector.desc": "افتح كل السماء السرية · +60 XP",
    "quest.done": "تم",
    "secret.locked": "يفتح في المستوى {n}",
    "secret.hint": "اضغط لتلوين السماء",
    "toast.level": "وصلت إلى المستوى {n}!",
    "toast.unlock": "سماء جديدة مفتوحة: {name}",
    "toast.quest": "مهمة مكتملة: {name} · +{xp} XP",
    "toast.cleared": "تم مسح المفكرة"
  }
};

/* ---------- Mood data ---------- */

const MOODS = {
  sunny: {
    emoji: "☀️", score: 5,
    gradient: "#a85036",
    messages: {
      en: ["Today the universe left a little sunshine in your pocket. Go spend it.", "Good things are quietly lining up for you. Walk into them.", "Your smile is contagious — please keep spreading it irresponsibly."],
      fr: ["Aujourd'hui, l'univers a laissé un peu de soleil dans ta poche. Dépense-le.", "Les bonnes choses s'alignent doucement pour toi. Avance vers elles.", "Ton sourire est contagieux. Continue de le répandre sans retenue."],
      ar: ["اليوم ترك لك الكون قليلاً من الشمس في جيبك. أنفقه بحكمة.", "الأشياء الجميلة تتجمع بهدوء من أجلك. امشِ نحوها.", "ابتسامتك معدية. واصل نشرها بلا توقف."]
    }
  },
  rainy: {
    emoji: "🌧️", score: 2,
    gradient: "#3c6d82",
    messages: {
      en: ["Rain is just the sky taking a deep breath. You can too.", "Slow down. Even clouds get to rest before they clear.", "Name one small thing you can feel right now. That's enough."],
      fr: ["La pluie, c'est juste le ciel qui respire. Toi aussi, tu peux.", "Ralentis. Même les nuages se reposent avant de se dissiper.", "Nomme une petite chose que tu ressens maintenant. Ça suffit."],
      ar: ["المطر مجرد سماء تأخذ نفساً عميقاً. يمكنك أنت أيضاً.", "تبطّئ. حتى الغيوم تستريح قبل أن تنجلي.", "اذكر شيئاً صغيراً تشعر به الآن. هذا يكفي."]
    }
  },
  stormy: {
    emoji: "⛈️", score: 1,
    gradient: "#5b4f76",
    messages: {
      en: ["Storms don't last. You are bigger than the weather passing through you.", "It's okay to be loud today. Even thunder has something to say.", "Breathe in for four, hold for four, out for six. Again."],
      fr: ["Les orages ne durent pas. Tu es plus grand que la tempête qui passe.", "C'est ok d'être bruyant aujourd'hui. Même le tonnerre a quelque chose à dire.", "Inspire quatre temps, retiens quatre, expire six. Encore."],
      ar: ["العواصف لا تدوم. أنت أكبر من الطقس الذي يمرّ بك.", "لا بأس أن تكون صاخباً اليوم. حتى الرعد له ما يقوله.", "اشهق أربعاً، احبس أربعاً، أزفر ستاً. مرة أخرى."]
    }
  },
  calm: {
    emoji: "✨", score: 4,
    gradient: "#3f7079",
    messages: {
      en: ["The stars are out and none of them are in a hurry. Neither are you.", "Quiet is a superpower. You're using it well.", "You don't have to shine to be worth looking at."],
      fr: ["Les étoiles sont là et aucune n'est pressée. Toi non plus.", "Le calme est un super-pouvoir. Tu l'utilises bien.", "Tu n'as pas besoin de briller pour être précieux."],
      ar: ["النجوم تظهر ولا أحد منها مستعجل. أنت أيضاً لست مستعجلاً.", "الهدوء قوة خارقة. أنت تستخدمها جيداً.", "لا تحتاج إلى أن تتألق لتكون ذا قيمة."]
    }
  },
  electric: {
    emoji: "🌌", score: 5,
    gradient: "#355f84",
    messages: {
      en: ["That buzz in your chest? That's your future self waving.", "The sky is doing tricks for you today. Make a wish anyway.", "Go do the thing. The thing is waiting for you."],
      fr: ["Ce bourdonnement dans ta poitrine ? C'est ton futur toi qui salue.", "Le ciel fait des tours pour toi aujourd'hui. Fais un vœu quand même.", "Va faire cette chose. Elle t'attend."],
      ar: ["هذا الطنين في صدرك؟ إنه ذاتك المستقبلية تلوّح لك.", "السماء تؤدي الحيل من أجلك اليوم. تمنَّ أمنية على أي حال.", "اذهب وافعلها. إنها تنتظرك."]
    }
  },
  meteor: {
    emoji: "🌠", score: 5, secret: true,
    gradient: "#4c5784",
    messages: {
      en: ["Make a wish — that streak just crossed the whole sky for you.", "Even the fastest things in the universe leave a trail. So will you.", "Look up. Something brilliant is passing by."],
      fr: ["Fais un vœu : cette traînée a traversé le ciel pour toi.", "Même les choses les plus rapides laissent une trace. Toi aussi.", "Lève les yeux. Quelque chose de brillant passe."],
      ar: ["تمنَّ أمنية؛ هذا الشهاب عبر السماء من أجلك.", "حتى أسرع الأشياء في الكون تترك أثراً. وأنت أيضاً.", "انظر للأعلى. شيء لامع يمرّ الآن."]
    }
  },
  nebula: {
    emoji: "🪐", score: 4, secret: true,
    gradient: "#7a547f",
    messages: {
      en: ["You are stardust learning what it means to be a galaxy.", "Everything beautiful started as a cloud of chaos.", "Drift a while. The universe is making something new."],
      fr: ["Tu es de la poussière d'étoiles qui apprend à être une galaxie.", "Tout ce qui est beau a commencé par un nuage de chaos.", "Dérive un peu. L'univers crée quelque chose de nouveau."],
      ar: ["أنت غبار نجوم يتعلّم كيف يكون مجرّة.", "كل ما هو جميل بدأ كسحابة من الفوضى.", "انجرف قليلاً. الكون يصنع شيئاً جديداً."]
    }
  },
  golden: {
    emoji: "🌅", score: 5, secret: true,
    gradient: "#9b6b32",
    messages: {
      en: ["The light is soft now. So can you be.", "Every ending has a warm side. Turn toward it.", "Golden hours don't ask permission. Neither should you."],
      fr: ["La lumière est douce maintenant. Toi aussi, tu peux l'être.", "Chaque fin a un côté chaud. Tourne-toi vers lui.", "L'heure dorée ne demande pas la permission. Toi non plus."],
      ar: ["الضوء لطيف الآن. يمكنك أنت أيضاً أن تكون لطيفاً.", "لكل نهاية جانبٌ دافئ. اتجه نحوه.", "الساعة الذهبية لا تطلب إذناً. وأنت أيضاً."]
    }
  }
};

const BASE_MOODS = ["sunny", "rainy", "stormy", "calm", "electric"];
const SECRET_SKIES = [{ id: "meteor", level: 2 }, { id: "nebula", level: 3 }, { id: "golden", level: 4 }];
const ALL_MOODS = [...BASE_MOODS, ...SECRET_SKIES.map(s => s.id)];
const XP_PER_LEVEL = 80;
const SAVE_KEY = "moodsky.save.v2";
const OLD_KEY = "moodsky.diary.v1";
const LANGS = ["en", "fr", "ar"];

/* ---------- State ---------- */

function defaults() {
  return {
    diary: {}, xp: 0, lastLevel: 1, tried: [], achievements: [],
    unlocked: [], lang: "en", lastMood: "calm", lastMessageIndex: {}
  };
}

function loadState() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch { /* ignore */ }
  const fresh = defaults();
  if (!raw) {
    try {
      const old = JSON.parse(localStorage.getItem(OLD_KEY));
      if (old && typeof old === "object") fresh.diary = old;
    } catch { /* ignore */ }
    return fresh;
  }
  const merged = { ...fresh, ...raw };
  if (!LANGS.includes(merged.lang)) merged.lang = "en";
  merged.lastLevel = levelOf(merged.xp);
  return merged;
}

let state = loadState();
let currentMood = MOODS[state.lastMood] ? state.lastMood : "calm";

function persist() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch { /* private mode */ }
}

function levelOf(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }

function t(key) { return STRINGS[state.lang][key] ?? STRINGS.en[key] ?? key; }

function fmt(key, vars) {
  return t(key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
}

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/* ---------- Elements ---------- */

const el = {
  body: document.body,
  particles: document.getElementById("particles"),
  greeting: document.getElementById("greeting"),
  forecast: document.getElementById("forecast"),
  badge: document.getElementById("badge"),
  message: document.getElementById("message"),
  clock: document.getElementById("clock"),
  today: document.getElementById("today"),
  chart: document.getElementById("chart"),
  streak: document.getElementById("streak"),
  total: document.getElementById("total"),
  moodPicker: document.getElementById("moodPicker"),
  secretPicker: document.getElementById("secretPicker"),
  secretGrid: document.getElementById("secretGrid"),
  quests: document.getElementById("quests"),
  levelBadge: document.getElementById("levelBadge"),
  xpText: document.getElementById("xpText"),
  xpFill: document.getElementById("xpFill"),
  secretCount: document.getElementById("secretCount"),
  lang: document.getElementById("lang"),
  surprise: document.getElementById("surprise"),
  newMessage: document.getElementById("newMessage"),
  reset: document.getElementById("reset"),
  toasts: document.getElementById("toasts")
};

/* ---------- Toasts ---------- */

function toast(text) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = text;
  el.toasts.appendChild(node);
  setTimeout(() => {
    node.classList.add("is-leaving");
    setTimeout(() => node.remove(), 320);
  }, 3600);
}

/* ---------- Clock ---------- */

function tickClock() {
  const now = new Date();
  el.clock.textContent = now.toLocaleTimeString(state.lang, { hour12: false });
  el.today.textContent = now.toLocaleDateString(state.lang, { weekday: "long", month: "short", day: "numeric" });
  const hour = now.getHours();
  const key = hour < 5 ? "greeting.night" : hour < 12 ? "greeting.morning" : hour < 18 ? "greeting.afternoon" : "greeting.evening";
  el.greeting.textContent = t(key);
}

/* ---------- Sky particles ---------- */

function renderParticles(moodId) {
  el.particles.replaceChildren();
  const wantRain = moodId === "rainy" || moodId === "stormy";
  const wantStars = moodId === "calm" || moodId === "electric" || moodId === "meteor";
  const wantMeteors = moodId === "meteor";
  const wantBolts = moodId === "electric";
  const wantSparks = moodId === "golden";
  const count = moodId === "stormy" ? 80 : 55;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    if (wantRain) {
      p.className = "rain";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${0.5 + Math.random() * 0.7}s`;
      p.style.animationDelay = `${-Math.random() * 2}s`;
      p.style.opacity = String(0.3 + Math.random() * 0.5);
    } else if (wantStars) {
      p.className = "star";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 85}%`;
      p.style.animationDuration = `${1.5 + Math.random() * 3}s`;
      p.style.animationDelay = `${-Math.random() * 4}s`;
      const size = 1 + Math.random() * 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
    } else if (wantSparks) {
      p.className = "spark";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${60 + Math.random() * 40}%`;
      p.style.animationDuration = `${5 + Math.random() * 6}s`;
      p.style.animationDelay = `${-Math.random() * 8}s`;
      p.style.opacity = String(0.3 + Math.random() * 0.6);
    }
    if (p.className) fragment.appendChild(p);
  }

  if (wantMeteors) {
    for (let i = 0; i < 5; i++) {
      const m = document.createElement("span");
      m.className = "meteor";
      m.style.top = `${Math.random() * 45}%`;
      m.style.animationDuration = `${2.5 + Math.random() * 2}s`;
      m.style.animationDelay = `${-Math.random() * 5}s`;
      fragment.appendChild(m);
    }
  }

  if (wantBolts) {
    for (let i = 0; i < 4; i++) {
      const bolt = document.createElement("span");
      bolt.className = "bolt";
      bolt.style.left = `${8 + Math.random() * 84}%`;
      bolt.style.top = `${-5 + Math.random() * 25}%`;
      bolt.style.animationDuration = `${2.6 + Math.random() * 1.8}s`;
      bolt.style.animationDelay = `${-Math.random() * 4}s`;
      fragment.appendChild(bolt);
    }
  }
  el.particles.appendChild(fragment);
}

/* ---------- Forecast ---------- */

function showMessage(moodId, reroll = false) {
  const list = MOODS[moodId].messages[state.lang] || MOODS[moodId].messages.en;
  let index = state.lastMessageIndex[moodId];
  if (reroll || typeof index !== "number" || index < 0 || index >= list.length) {
    index = reroll && typeof index === "number" && list.length > 1
      ? (index + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length
      : Math.floor(Math.random() * list.length);
  }
  state.lastMessageIndex[moodId] = index;
  el.message.textContent = `“${list[index]}”`;
  el.message.classList.remove("pop");
  void el.message.offsetWidth;
  el.message.classList.add("pop");
}

/* ---------- Diary ---------- */

function computeStreak() {
  const cursor = new Date();
  if (!state.diary[dateKey(cursor)]) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (state.diary[dateKey(cursor)]) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function renderChart() {
  const today = new Date();
  const fragment = document.createDocumentFragment();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const moodId = state.diary[dateKey(date)];
    const mood = moodId ? MOODS[moodId] : null;

    const col = document.createElement("div");
    col.className = "chart__col" + (i === 0 ? " chart__col--today" : "");
    const track = document.createElement("div");
    track.className = "chart__track";
    const bar = document.createElement("div");
    bar.className = "chart__bar";
    bar.style.height = mood ? `${mood.score * 20}%` : "4%";
    if (mood) bar.style.background = mood.gradient;
    bar.title = mood ? `${t("mood." + moodId)} · ${mood.score}/5` : t("noEntry");
    const emoji = document.createElement("div");
    emoji.className = "chart__emoji";
    emoji.textContent = mood ? mood.emoji : "";
    const label = document.createElement("div");
    label.className = "chart__day";
    label.textContent = i === 0 ? t("today") : new Intl.DateTimeFormat(state.lang, { weekday: "narrow" }).format(date);
    track.appendChild(bar);
    col.append(track, emoji, label);
    fragment.appendChild(col);
  }
  el.chart.replaceChildren(fragment);

  const entries = Object.keys(state.diary).length;
  const streak = computeStreak();
  el.total.textContent = fmt(entries === 1 ? "stat.entries.one" : "stat.entries.many", { n: entries });
  el.streak.textContent = fmt(streak === 1 ? "stat.streak.one" : "stat.streak.many", { n: streak });
}

/* ---------- Game ---------- */

const QUESTS = [
  { id: "first", xp: 20, goal: 1, progress: () => Math.min(1, Object.keys(state.diary).length) },
  { id: "explorer", xp: 40, goal: 5, progress: () => BASE_MOODS.filter(id => state.tried.includes(id)).length },
  { id: "streak3", xp: 50, goal: 3, progress: () => Math.min(3, computeStreak()) },
  { id: "collector", xp: 60, goal: 3, progress: () => state.unlocked.length }
];

function renderQuests() {
  const fragment = document.createDocumentFragment();
  QUESTS.forEach(q => {
    const done = state.achievements.includes(q.id);
    const progress = Math.min(q.goal, q.progress());
    const row = document.createElement("div");
    row.className = "quest" + (done ? " is-done" : "");
    row.innerHTML =
      `<span class="quest__icon">${done ? "✓" : "◇"}</span>` +
      `<span class="quest__body"><strong>${t("quest." + q.id + ".title")}</strong>` +
      `<span>${t("quest." + q.id + ".desc")}</span></span>` +
      `<span class="quest__progress">${done ? t("quest.done") : `${progress}/${q.goal}`}</span>`;
    fragment.appendChild(row);
  });
  el.quests.replaceChildren(fragment);
}

function renderGame() {
  const level = levelOf(state.xp);
  const progress = state.xp % XP_PER_LEVEL;
  el.levelBadge.textContent = `LVL ${level}`;
  el.xpText.textContent = `${progress} / ${XP_PER_LEVEL} XP`;
  el.xpFill.style.width = `${(progress / XP_PER_LEVEL) * 100}%`;
  el.secretCount.textContent = `${state.unlocked.length} / ${SECRET_SKIES.length}`;

  const fragment = document.createDocumentFragment();
  SECRET_SKIES.forEach(s => {
    const mood = MOODS[s.id];
    const unlocked = state.unlocked.includes(s.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "secret-card" + (unlocked ? "" : " is-locked");
    button.dataset.mood = s.id;
    button.disabled = !unlocked;
    button.setAttribute("aria-pressed", String(currentMood === s.id));
    button.innerHTML =
      `<span class="secret-card__icon">${unlocked ? mood.emoji : "🔒"}</span>` +
      `<strong>${t("mood." + s.id)}</strong>` +
      `<small>${unlocked ? t("secret.hint") : fmt("secret.locked", { n: s.level })}</small>`;
    if (unlocked) button.addEventListener("click", () => selectMood(s.id));
    fragment.appendChild(button);
  });
  el.secretGrid.replaceChildren(fragment);
}

function checkLevels() {
  while (levelOf(state.xp) > state.lastLevel) {
    state.lastLevel++;
    toast(fmt("toast.level", { n: state.lastLevel }));
  }
}

function checkUnlocks() {
  SECRET_SKIES.forEach(s => {
    if (levelOf(state.xp) >= s.level && !state.unlocked.includes(s.id)) {
      state.unlocked.push(s.id);
      toast(fmt("toast.unlock", { name: t("mood." + s.id) }));
    }
  });
}

function syncProgress() {
  checkLevels();
  checkUnlocks();
  QUESTS.forEach(q => {
    if (!state.achievements.includes(q.id) && q.progress() >= q.goal) {
      state.achievements.push(q.id);
      state.xp += q.xp;
      toast(fmt("toast.quest", { name: t("quest." + q.id + ".title"), xp: q.xp }));
    }
  });
  checkLevels();
  checkUnlocks();
  renderGame();
  persist();
}

function awardXP(amount) {
  state.xp += amount;
  syncProgress();
}

/* ---------- Mood selection ---------- */

function renderMoodButtons() {
  const fragment = document.createDocumentFragment();
  BASE_MOODS.forEach((id, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mood";
    button.dataset.mood = id;
    button.setAttribute("aria-pressed", String(currentMood === id));
    button.setAttribute("aria-label", `${t("mood." + id)} · ${t("keyLabel")} ${i + 1}`);
    button.innerHTML =
      `<span class="mood__icon">${MOODS[id].emoji}</span>` +
      `<strong>${t("mood." + id)}</strong><small>${i + 1}</small>`;
    button.addEventListener("click", () => selectMood(id));
    fragment.appendChild(button);
  });
  el.moodPicker.replaceChildren(fragment);
  el.moodPicker.setAttribute("aria-label", t("moodLabel"));
  el.secretPicker.setAttribute("aria-label", t("secretLabel"));
  el.secretPicker.hidden = state.unlocked.length === 0;
}

function selectMood(moodId, options = {}) {
  if (!MOODS[moodId]) return;
  const isSecret = !!MOODS[moodId].secret;
  if (isSecret && !state.unlocked.includes(moodId)) return;

  currentMood = moodId;
  state.lastMood = moodId;
  const key = dateKey(new Date());
  const firstToday = !state.diary[key];
  if (!options.noLog) {
    state.diary[key] = moodId;
    if (!state.tried.includes(moodId)) state.tried.push(moodId);
  }
  persist();

  el.body.dataset.mood = moodId;
  el.forecast.textContent = t("forecast." + moodId);
  el.badge.textContent = `${t("mood." + moodId)} · ${MOODS[moodId].score}/5`;

  renderMoodButtons();
  renderGame();
  renderQuests();
  renderChart();
  renderParticles(moodId);
  showMessage(moodId);

  if (!options.silent) {
    awardXP(firstToday ? 10 : 3);
  }
}

/* ---------- Language ---------- */

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  el.lang.value = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  tickClock();
  renderMoodButtons();
  renderQuests();
  renderChart();
  renderGame();
  showMessage(currentMood);
}

/* ---------- Events ---------- */

el.lang.addEventListener("change", () => {
  state.lang = el.lang.value;
  persist();
  applyLanguage();
});

el.surprise.addEventListener("click", () => {
  const available = ALL_MOODS.filter(id => !MOODS[id].secret || state.unlocked.includes(id));
  const choices = available.filter(id => id !== currentMood);
  selectMood(choices[Math.floor(Math.random() * choices.length)]);
});

el.newMessage.addEventListener("click", () => {
  showMessage(currentMood, true);
});

el.reset.addEventListener("click", () => {
  if (!confirm(t("confirmClear"))) return;
  state.diary = {};
  state.tried = [];
  state.achievements = [];
  state.xp = 0;
  state.lastLevel = 1;
  state.unlocked = [];
  state.lastMessageIndex = {};
  persist();
  currentMood = "calm";
  toast(t("toast.cleared"));
  selectMood(currentMood, { silent: true, noLog: true });
});

document.addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  const index = Number(event.key) - 1;
  if (!Number.isInteger(index) || index < 0 || index >= ALL_MOODS.length) return;
  const id = ALL_MOODS[index];
  const secret = SECRET_SKIES.find(s => s.id === id);
  if (secret && !state.unlocked.includes(id)) {
    toast(fmt("secret.locked", { n: secret.level }));
    return;
  }
  selectMood(id);
});

/* ---------- Boot ---------- */

applyLanguage();
tickClock();
setInterval(tickClock, 1000);
selectMood(MOODS[savedMood()] ? savedMood() : "calm", { silent: true, noLog: true });

function savedMood() { return state.diary[dateKey(new Date())] || state.lastMood; }
