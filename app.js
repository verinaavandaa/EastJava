const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const STORAGE = {
  saved: "eastjava_saved_v1",
  stories: "eastjava_stories_v1",
  quiz: "eastjava_quiz_v1"
};

// ======================================
// DATA BUDAYA JAWA TIMUR
// ======================================

const cultures = [
  {
    id: "reog",
    name: "Reog Ponorogo",
    category: "Kesenian & Pertunjukan",
    region: "Ponorogo",
    kind: "Seni pertunjukan",
    description: "Kesenian pertunjukan dari Ponorogo yang dikenal melalui topeng Dadak Merak, jathilan, dan iringan musik tradisional.",
    fact: "Reog Ponorogo menjadi salah satu identitas budaya yang sangat lekat dengan Kabupaten Ponorogo.",
    tags: ["pertunjukan", "topeng", "Ponorogo"]
  },
  {
    id: "remo",
    name: "Tari Remo",
    category: "Kesenian & Pertunjukan",
    region: "Jombang dan Surabaya",
    kind: "Tari tradisional",
    description: "Tari tradisional Jawa Timur yang dikenal dengan gerak dinamis, hentakan kaki, dan properti seperti selendang.",
    fact: "Tari Remo kerap ditampilkan sebagai tarian pembuka dalam pertunjukan ludruk.",
    tags: ["tari", "Jombang", "Surabaya"]
  },
  {
    id: "ludruk",
    name: "Ludruk",
    category: "Kesenian & Pertunjukan",
    region: "Surabaya dan sekitarnya",
    kind: "Teater tradisional",
    description: "Teater tradisional Jawa Timur yang memadukan dialog, humor, musik, dan kisah kehidupan masyarakat.",
    fact: "Ludruk banyak menggunakan bahasa Jawa dialek setempat.",
    tags: ["teater", "Surabaya"]
  },
  {
    id: "karapan",
    name: "Karapan Sapi",
    category: "Tradisi & Upacara Adat",
    region: "Madura",
    kind: "Tradisi masyarakat",
    description: "Tradisi perlombaan pacuan sapi yang berkembang di Pulau Madura dan berkaitan dengan kehidupan agraris masyarakat setempat.",
    fact: "Karapan Sapi menjadi salah satu tradisi Madura yang dikenal luas.",
    tags: ["Madura", "tradisi"]
  },
  {
    id: "kasada",
    name: "Yadnya Kasada",
    category: "Tradisi & Upacara Adat",
    region: "Kawasan Tengger, Probolinggo dan sekitarnya",
    kind: "Upacara adat dan keagamaan",
    description: "Upacara masyarakat Tengger yang dilaksanakan di kawasan Gunung Bromo sebagai bagian dari tradisi dan keyakinan masyarakat Tengger.",
    fact: "Pelaksanaan dan makna upacara berkaitan erat dengan kehidupan spiritual masyarakat Tengger.",
    tags: ["Tengger", "Bromo"]
  },
  {
    id: "osing",
    name: "Masyarakat Osing",
    category: "Suku",
    region: "Banyuwangi",
    kind: "Kelompok etnis",
    description: "Masyarakat Osing merupakan kelompok etnis yang tumbuh dan berkembang di wilayah Banyuwangi dengan bahasa serta tradisi khas.",
    fact: "Bahasa Osing merupakan salah satu penanda identitas budaya masyarakat Osing.",
    tags: ["Banyuwangi", "Osing"]
  },
  {
    id: "tengger",
    name: "Masyarakat Tengger",
    category: "Suku",
    region: "Kawasan Tengger",
    kind: "Kelompok etnis",
    description: "Masyarakat Tengger tinggal di kawasan pegunungan sekitar Bromo dan memiliki tradisi, bahasa, serta kehidupan budaya yang khas.",
    fact: "Yadnya Kasada merupakan salah satu tradisi penting masyarakat Tengger.",
    tags: ["Tengger", "Bromo"]
  },
  {
    id: "madura",
    name: "Bahasa Madura",
    category: "Bahasa",
    region: "Pulau Madura dan wilayah perantauan",
    kind: "Bahasa daerah",
    description: "Bahasa Madura digunakan oleh masyarakat Madura dan memiliki variasi dialek serta tingkatan tutur.",
    fact: "Bahasa Madura merupakan bagian penting dari identitas masyarakat Madura.",
    tags: ["bahasa", "Madura"]
  },
  {
    id: "osing-language",
    name: "Bahasa Osing",
    category: "Bahasa",
    region: "Banyuwangi",
    kind: "Bahasa daerah",
    description: "Bahasa Osing digunakan oleh masyarakat Osing di Banyuwangi dan memiliki ciri kosakata serta pelafalan tersendiri.",
    fact: "Bahasa Osing menjadi salah satu unsur penting dalam keberlanjutan budaya Osing.",
    tags: ["bahasa", "Banyuwangi"]
  },
  {
    id: "joglo",
    name: "Rumah Joglo",
    category: "Rumah Adat",
    region: "Berbagai wilayah Jawa",
    kind: "Arsitektur tradisional",
    description: "Rumah tradisional yang dikenal dengan bentuk atap bertingkat dan susunan ruang yang memiliki fungsi sosial maupun keluarga.",
    fact: "Bentuk joglo memiliki variasi dan tidak hanya ditemukan di satu wilayah Jawa Timur.",
    tags: ["arsitektur", "rumah"]
  },
  {
    id: "tanean",
    name: "Tanean Lanjhang",
    category: "Rumah Adat",
    region: "Madura",
    kind: "Pola permukiman tradisional",
    description: "Pola permukiman keluarga masyarakat Madura yang terdiri dari beberapa bangunan rumah dalam satu halaman memanjang.",
    fact: "Susunan ruangnya mencerminkan hubungan kekerabatan dalam keluarga.",
    tags: ["Madura", "arsitektur"]
  },
  {
    id: "pesa'an",
    name: "Pesa'an Madura",
    category: "Pakaian Adat",
    region: "Madura",
    kind: "Busana tradisional",
    description: "Busana tradisional Madura yang sering dikenali melalui baju hitam longgar dan kaus bergaris merah-putih sebagai bagian dari tampilannya.",
    fact: "Pesa'an sering dipadukan dengan odheng sebagai penutup kepala.",
    tags: ["Madura", "busana"]
  },
  {
    id: "banyuwangi-dress",
    name: "Busana Adat Osing",
    category: "Pakaian Adat",
    region: "Banyuwangi",
    kind: "Busana tradisional",
    description: "Busana tradisional yang digunakan dalam konteks adat dan kegiatan budaya masyarakat Osing, dengan ragam bentuk dan hiasan.",
    fact: "Ragam busana dapat berbeda menurut acara dan kelompok masyarakat.",
    tags: ["Osing", "busana"]
  },
  {
    id: "keris",
    name: "Keris",
    category: "Senjata Tradisional",
    region: "Berbagai wilayah Jawa Timur",
    kind: "Warisan benda budaya",
    description: "Keris merupakan senjata tradisional sekaligus benda budaya yang memiliki nilai sejarah, seni tempa, simbol, dan filosofi.",
    fact: "Keris diakui UNESCO sebagai Warisan Budaya Takbenda Kemanusiaan pada 2008.",
    tags: ["keris", "warisan"]
  },
  {
    id: "clurit",
    name: "Celurit",
    category: "Senjata Tradisional",
    region: "Madura",
    kind: "Senjata tradisional",
    description: "Celurit dikenal luas sebagai senjata tradisional yang lekat dengan identitas budaya Madura dan juga memiliki konteks sejarah serta fungsi yang beragam.",
    fact: "Penggunaan dan makna benda tradisional perlu dipahami sesuai konteks sejarah dan budaya, bukan untuk kekerasan.",
    tags: ["Madura", "warisan"]
  }
];

// ======================================
// KATEGORI
// ======================================

const categories = [
  ["Suku", "People", "◈", "suku", "Kenali kelompok masyarakat dan identitas budaya di Jawa Timur."],
  ["Bahasa", "Language", "文", "bahasa", "Jelajahi bahasa daerah dan ragam tutur."],
  ["Kesenian & Pertunjukan", "Art & Performance", "✳", "kesenian", "Temukan tari, musik, teater, dan seni pertunjukan."],
  ["Tradisi & Upacara Adat", "Traditions", "❋", "tradisi", "Kenali tradisi dan upacara dari berbagai daerah."],
  ["Rumah Adat", "Architecture", "⌂", "rumah-adat", "Pelajari arsitektur dan pola hunian tradisional."],
  ["Pakaian Adat", "Traditional Attire", "◇", "pakaian-adat", "Kenali busana tradisional dan makna pemakaiannya."],
  ["Senjata Tradisional", "Heritage Objects", "✧", "senjata", "Pelajari benda warisan budaya dari sisi sejarah dan filosofi."]
];

// ======================================
// BANK SOAL KUIS
// ======================================

const quizBank = {
  easy: [
    [
      "Reog Ponorogo berasal dari daerah mana?",
      ["Ponorogo", "Banyuwangi", "Madura", "Malang"],
      0,
      "Reog dikenal sebagai kesenian pertunjukan dari Kabupaten Ponorogo."
    ],
    [
      "Karapan Sapi merupakan tradisi yang identik dengan...",
      ["Madura", "Blitar", "Pacitan", "Kediri"],
      0,
      "Karapan Sapi merupakan tradisi pacuan sapi dari Pulau Madura."
    ],
    [
      "Tari Remo merupakan salah satu kesenian berupa...",
      ["Tari tradisional", "Kerajinan logam", "Rumah adat", "Bahasa daerah"],
      0,
      "Tari Remo adalah tari tradisional Jawa Timur."
    ],
    [
      "Yadnya Kasada berkaitan erat dengan masyarakat...",
      ["Tengger", "Osing", "Bawean", "Madura"],
      0,
      "Yadnya Kasada merupakan tradisi masyarakat Tengger di kawasan Bromo."
    ]
  ],

  medium: [
    [
      "Bahasa Osing terutama berkembang di wilayah...",
      ["Banyuwangi", "Madiun", "Lamongan", "Sumenep"],
      0,
      "Bahasa Osing merupakan bahasa daerah masyarakat Osing di Banyuwangi."
    ],
    [
      "Ludruk dikenal sebagai bentuk...",
      ["Teater tradisional", "Upacara panen", "Pakaian adat", "Arsitektur"],
      0,
      "Ludruk adalah teater tradisional Jawa Timur."
    ],
    [
      "Tanean Lanjhang merupakan pola permukiman tradisional dari...",
      ["Madura", "Tengger", "Ponorogo", "Tuban"],
      0,
      "Tanean Lanjhang dikenal sebagai pola permukiman keluarga di Madura."
    ],
    [
      "Tari Remo kerap menjadi tarian pembuka dalam pertunjukan...",
      ["Ludruk", "Karapan Sapi", "Wayang golek", "Jaran kepang"],
      0,
      "Tari Remo sering tampil sebagai tarian pembuka dalam pertunjukan ludruk."
    ]
  ],

  hard: [
    [
      "Pada 2008, keris diakui UNESCO sebagai...",
      ["Warisan Budaya Takbenda Kemanusiaan", "Situs Warisan Alam Dunia", "Cagar Biosfer", "Warisan Geologi Dunia"],
      0,
      "Keris Indonesia tercatat dalam daftar Representative List of the Intangible Cultural Heritage of Humanity pada 2008."
    ],
    [
      "Kelompok masyarakat Osing secara kuat diasosiasikan dengan kabupaten...",
      ["Banyuwangi", "Bojonegoro", "Ngawi", "Jember"],
      0,
      "Masyarakat Osing tumbuh dan berkembang di Banyuwangi."
    ],
    [
      "Yadnya Kasada dilaksanakan di kawasan...",
      ["Gunung Bromo", "Gunung Wilis", "Gunung Kelud", "Gunung Ijen"],
      0,
      "Tradisi Yadnya Kasada berlangsung di kawasan Tengger sekitar Gunung Bromo."
    ],
    [
      "Pesa'an merupakan busana tradisional yang identik dengan...",
      ["Madura", "Tulungagung", "Magetan", "Trenggalek"],
      0,
      "Pesa'an merupakan salah satu busana tradisional yang dikenal dari Madura."
    ]
  ]
};

// ======================================
// CONTOH AGENDA KALENDER
// ======================================

const sampleEvents = [
  {
    month: 0,
    day: 15,
    title: "Catatan budaya: Reog Ponorogo",
    region: "Ponorogo",
    desc: "Kenali sejarah dan ragam pertunjukan Reog melalui sumber budaya daerah."
  },
  {
    month: 1,
    day: 10,
    title: "Mengenal tradisi masyarakat Tengger",
    region: "Kawasan Tengger",
    desc: "Agenda edukasi contoh untuk mengenal tradisi dan kehidupan masyarakat Tengger."
  },
  {
    month: 3,
    day: 21,
    title: "Hari Keragaman Budaya",
    region: "Jawa Timur",
    desc: "Tanggal contoh untuk kegiatan belajar dan berbagi pengetahuan budaya."
  },
  {
    month: 7,
    day: 17,
    title: "Pekan cerita budaya daerah",
    region: "Jawa Timur",
    desc: "Contoh agenda komunitas untuk berbagi cerita dan pengetahuan lokal."
  }
];

// ======================================
// VARIABEL
// ======================================

let currentQuiz = null;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let calDate = new Date();
let selectedDate = null;

// ======================================
// PENYIMPANAN BROWSER
// ======================================

const safeRead = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

const saved = () => safeRead(STORAGE.saved, []);
const stories = () => safeRead(STORAGE.stories, []);

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
  }, 2300);
}

function updateSavedCount() {
  $("#savedCount").textContent = saved().length;
}

// ======================================
// MENAMPILKAN KATEGORI
// ======================================

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map((c, i) => `
    <a class="category-card" href="#category/${c[3]}">
      <span class="cat-no">0${i + 1} / ${c[1].toUpperCase()}</span>
      <span class="cat-icon">${c[2]}</span>
      <h3>${c[0]}</h3>
      <span class="cat-arrow">↗</span>
    </a>
  `).join("");
}

// ======================================
// PETA INTERAKTIF ILUSTRATIF
// ======================================

function renderMap() {
  const places = [
    ["Ponorogo", 24, 43],
    ["Surabaya", 68, 28],
    ["Banyuwangi", 87, 63],
    ["Madura", 70, 12],
    ["Probolinggo", 60, 49],
    ["Malang", 48, 66],
    ["Madiun", 32, 35]
  ];

  $("#mapDots").innerHTML = places.map(([name, x, y]) => `
    <button
      class="map-dot"
      style="left:${x}%;top:${y}%"
      data-region="${name}"
      aria-label="Lihat budaya ${name}"
      title="${name}">
    </button>
    <span class="map-dot-label" style="left:${x + 2}%;top:${y - 1}%">
      ${name}
    </span>
  `).join("");

  $$(".map-dot").forEach(button => {
    button.addEventListener("click", () => {
      showRegion(button.dataset.region);
    });
  });
}

function showRegion(region) {
  const matches = cultures.filter(c =>
    c.region.toLowerCase().includes(region.toLowerCase()) ||
    c.tags.some(tag => tag.toLowerCase() === region.toLowerCase())
  );

  $("#regionResults").innerHTML = `
    <strong>${region}</strong>
    <div>
      ${
        matches.length
          ? matches.map(c => `
              <a class="region-chip" href="#detail/${c.id}">
                ${c.name} ↗
              </a>
            `).join("")
          : '<span class="muted">Belum ada entri khusus untuk wilayah ini. Coba wilayah lain.</span>'
      }
    </div>
  `;
}

// ======================================
// CULTURE OF THE DAY
// ======================================

function dailyCulture() {
  const item = cultures[
    Math.floor(Date.now() / 86400000) % cultures.length
  ];

  $("#dailyTitle").textContent = item.name;
  $("#dailyText").textContent = item.description;
  $("#dailyMeta").textContent = `${item.category} · ${item.region}`;
}

// ======================================
// CULTURE COMPARISON
// ======================================

function renderSelects() {
  const options = cultures.map(c => `
    <option value="${c.id}">${c.name} — ${c.region}</option>
  `).join("");

  $("#cultureA").innerHTML = options;
  $("#cultureB").innerHTML = options;
  $("#cultureB").selectedIndex = 1;
}

function compareCultures() {
  const a = cultures.find(c => c.id === $("#cultureA").value);
  const b = cultures.find(c => c.id === $("#cultureB").value);

  if (a.id === b.id) {
    $("#comparisonResult").innerHTML = `
      <p class="muted">Pilih dua budaya yang berbeda agar bisa dibandingkan.</p>
    `;
    return;
  }

  $("#comparisonResult").innerHTML = `
    <div class="compare-cards">
      ${[a, b].map(c => `
        <article class="compare-card">
          <small>${c.category.toUpperCase()}</small>
          <h3>${c.name}</h3>
          <p><b>Asal:</b> ${c.region}</p>
          <p><b>Bentuk:</b> ${c.kind}</p>
          <p>${c.description}</p>
          <p><b>Fakta:</b> ${c.fact}</p>
          <button class="save-button" data-save="${c.id}">
            ＋ Simpan ke koleksi
          </button>
        </article>
      `).join("")}
    </div>
  `;

  bindSaveButtons();
}

// ======================================
// MY COLLECTION
// ======================================

function bindSaveButtons() {
  $$("[data-save]").forEach(button => {
    button.addEventListener("click", () => {
      toggleSave(button.dataset.save);
    });
  });
}

function toggleSave(id) {
  const list = saved();
  const index = list.indexOf(id);

  if (index >= 0) {
    list.splice(index, 1);
    toast("Dihapus dari koleksi.");
  } else {
    list.push(id);
    toast("Disimpan ke My Collection.");
  }

  persist(STORAGE.saved, list);
  updateSavedCount();
  renderCollection();

  $$("[data-save]").forEach(button => {
    if (button.dataset.save === id) {
      button.classList.toggle("saved", list.includes(id));
    }
  });
}

function renderCollection() {
  const list = saved()
    .map(id => cultures.find(c => c.id === id))
    .filter(Boolean);

  $("#collectionList").innerHTML = list.length
    ? list.map(c => `
        <article class="saved-card">
          <small class="eyebrow">${c.category}</small>
          <h3>${c.name}</h3>
          <p>${c.region} · ${c.kind}</p>
          <p>${c.description}</p>
          <button data-remove="${c.id}">
            Hapus dari koleksi ×
          </button>
        </article>
      `).join("")
    : `
      <div class="empty-state">
        Belum ada budaya yang disimpan.
        Buka kategori atau Culture Comparison, lalu tekan tombol
        “Simpan ke koleksi”.
      </div>
    `;

  $$("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      toggleSave(button.dataset.remove);
    });
  });
}

// ======================================
// KUIS BERTINGKAT
// ======================================

function startQuiz(level) {
  currentQuiz = level;
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  renderQuestion();

  $("#quizArea").hidden = false;
  $("#quizArea").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function renderQuestion() {
  const list = quizBank[currentQuiz];
  const q = list[quizIndex];

  quizAnswered = false;

  $("#quizArea").innerHTML = `
    <div class="quiz-actions">
      <span>
        LEVEL ${currentQuiz.toUpperCase()} ·
        PERTANYAAN ${quizIndex + 1}/${list.length}
      </span>
      <span>SKOR: ${quizScore}</span>
    </div>

    <div class="quiz-progress">
      <span style="width:${quizIndex / list.length * 100}%"></span>
    </div>

    <h3 class="quiz-question">${q[0]}</h3>

    <div class="quiz-options">
      ${q[1].map((option, i) => `
        <button class="quiz-option" data-answer="${i}">
          ${String.fromCharCode(65 + i)}. ${option}
        </button>
      `).join("")}
    </div>

    <p class="quiz-feedback" id="quizFeedback">
      Pilih satu jawaban yang paling tepat.
    </p>

    <div class="quiz-actions">
      <span class="muted" style="color:#d4c8b6">
        Jawaban benar mendapat 10 poin.
      </span>
      <button id="nextQuestion" disabled>
        ${quizIndex === list.length - 1
          ? "Lihat hasil"
          : "Pertanyaan berikutnya →"}
      </button>
    </div>
  `;

  $$("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      answerQuiz(Number(button.dataset.answer));
    });
  });

  $("#nextQuestion").addEventListener("click", nextQuestion);
}

function answerQuiz(choice) {
  if (quizAnswered) return;

  quizAnswered = true;

  const q = quizBank[currentQuiz][quizIndex];
  const correct = choice === q[2];

  if (correct) {
    quizScore += 10;
  }

  $$("[data-answer]").forEach((button, i) => {
    button.disabled = true;

    if (i === q[2]) {
      button.classList.add("correct");
    } else if (i === choice) {
      button.classList.add("wrong");
    }
  });

  $("#quizFeedback").textContent =
    (correct ? "Tepat! " : "Belum tepat. ") + q[3];

  $("#nextQuestion").disabled = false;
}

function nextQuestion() {
  if (!quizAnswered) return;

  if (quizIndex < quizBank[currentQuiz].length - 1) {
    quizIndex++;
    renderQuestion();
    return;
  }

  const best = safeRead(STORAGE.quiz, {});

  best[currentQuiz] = Math.max(
    best[currentQuiz] || 0,
    quizScore
  );

  persist(STORAGE.quiz, best);

  $("#quizArea").innerHTML = `
    <p class="eyebrow" style="color:#d5b887">
      CHALLENGE COMPLETED
    </p>

    <h3 class="quiz-question">
      Kamu berhasil menyelesaikan level ${currentQuiz}!
    </h3>

    <p style="font:500 42px var(--serif);color:#d5b887;margin:15px 0">
      ${quizScore} / 40
    </p>

    <p class="quiz-feedback">
      Skor terbaikmu di level ini: ${best[currentQuiz]} poin.
      Terus belajar dan coba lagi untuk meningkatkan pemahamanmu.
    </p>

    <div class="quiz-actions">
      <button id="retryQuiz">Ulangi level ↻</button>
      <button id="closeQuiz">Tutup</button>
    </div>
  `;

  $("#retryQuiz").addEventListener("click", () => {
    startQuiz(currentQuiz);
  });

  $("#closeQuiz").addEventListener("click", () => {
    $("#quizArea").hidden = true;
  });
}

// ======================================
// CERITA DARI DAERAH
// ======================================

function renderStories() {
  const list = stories();

  $("#storyList").innerHTML = list.length
    ? list.slice().reverse().map(s => `
        <article class="story-item">
          <b>${escapeHTML(s.title)}</b>
          <small>
            ${escapeHTML(s.region)} · oleh ${escapeHTML(s.name)}
          </small>
          <p>${escapeHTML(s.text)}</p>
        </article>
      `).join("")
    : '<p class="muted">Belum ada cerita yang tersimpan di browser ini.</p>';
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

$("#storyForm").addEventListener("submit", e => {
  e.preventDefault();

  const item = {
    name: $("#storyName").value.trim(),
    region: $("#storyRegion").value.trim(),
    title: $("#storyTitle").value.trim(),
    text: $("#storyText").value.trim(),
    date: new Date().toISOString()
  };

  if (!item.name || !item.region || !item.title || !item.text) {
    return;
  }

  const list = stories();
  list.push(item);

  persist(STORAGE.stories, list);

  e.target.reset();

  $("#storyFeedback").textContent =
    "Cerita tersimpan secara lokal di browser ini.";

  renderStories();
  toast("Cerita berhasil disimpan.");
});

// ======================================
// CULTURE CALENDAR
// ======================================

function renderCalendar() {
  const year = calDate.getFullYear();
  const month = calDate.getMonth();

  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();

  $("#monthLabel").textContent =
    new Intl.DateTimeFormat("id-ID", {
      month: "long",
      year: "numeric"
    }).format(calDate);

  let html = "";

  for (let i = 0; i < first; i++) {
    html += "<span></span>";
  }

  for (let d = 1; d <= days; d++) {
    const has = sampleEvents.some(
      e => e.month === month && e.day === d
    );

    html += `
      <button class="calendar-day
        ${has ? "has-event" : ""}
        ${selectedDate === d ? "selected" : ""}"
        data-day="${d}">
        ${d}
      </button>
    `;
  }

  $("#calendarDays").innerHTML = html;

  $$(".calendar-day").forEach(button => {
    button.addEventListener("click", () => {
      selectedDate = Number(button.dataset.day);
      renderCalendar();
      showCalendarDetail(selectedDate);
    });
  });
}

function showCalendarDetail(day) {
  const events = sampleEvents.filter(
    e => e.month === calDate.getMonth() && e.day === day
  );

  $("#calendarDetail").innerHTML = events.length
    ? events.map(e => `
        <article class="event-item">
          <b>${e.title}</b>
          <small>
            ${day} ${$("#monthLabel").textContent} ·
            ${e.region} · Agenda contoh
          </small>
          <p>${e.desc}</p>
        </article>
      `).join("")
    : `
      <p class="muted">
        Tidak ada agenda contoh pada tanggal ${day}.
        Kamu bisa memeriksa pengumuman resmi penyelenggara
        untuk acara terbaru.
      </p>
    `;
}

$("#prevMonth").addEventListener("click", () => {
  calDate.setMonth(calDate.getMonth() - 1);
  selectedDate = null;
  renderCalendar();

  $("#calendarDetail").innerHTML = `
    <p class="muted">Pilih tanggal untuk melihat catatan agenda.</p>
  `;
});

$("#nextMonth").addEventListener("click", () => {
  calDate.setMonth(calDate.getMonth() + 1);
  selectedDate = null;
  renderCalendar();

  $("#calendarDetail").innerHTML = `
    <p class="muted">Pilih tanggal untuk melihat catatan agenda.</p>
  `;
});

// ======================================
// NAVIGASI DAN HALAMAN KATEGORI
// ======================================

$$(".level-card").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.level);
  });
});

$("#compareButton").addEventListener("click", compareCultures);

$("#menuToggle").addEventListener("click", () => {
  const open = $("#mainNav").classList.toggle("open");

  $("#menuToggle").setAttribute(
    "aria-expanded",
    String(open)
  );
});

$$(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  });
});

function route() {
  const hash = location.hash || "#home";

  $$(".main-nav a").forEach(link => {
    link.classList.toggle(
      "active",
      hash.startsWith("#" + link.dataset.nav)
    );
  });

  const categoryMatch = hash.match(/^#category\/(.+)/);
  const detailMatch = hash.match(/^#detail\/(.+)/);

  if (categoryMatch) {
    const slug = categoryMatch[1];
    const cat = categories.find(c => c[3] === slug);

    if (!cat) {
      location.hash = "#explore";
      return;
    }

    const items = cultures.filter(c => c.category === cat[0]);

    $("#regionResults").innerHTML = `
      <div class="section-heading">
        <div>
          <p class="eyebrow">CULTURE CATEGORY</p>
          <h2>${cat[0]}</h2>
          <p class="section-subtitle">${cat[4]}</p>
        </div>
      </div>

      ${
        items.map(c => `
          <article class="saved-card" style="margin:10px 0">
            <small class="eyebrow">${c.region}</small>
            <h3>${c.name}</h3>
            <p>${c.description}</p>
            <p><b>Fakta menarik:</b> ${c.fact}</p>
            <button class="save-button" data-save="${c.id}">
              ＋ Simpan ke koleksi
            </button>
          </article>
        `).join("")
        || '<p class="muted">Konten kategori ini sedang disiapkan. Silakan kembali lagi.</p>'
      }

      <p>
        <a class="text-link" href="#explore">
          ← Kembali ke kategori
        </a>
      </p>
    `;

    bindSaveButtons();
    $("#explore").scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (detailMatch) {
    const c = cultures.find(x => x.id === detailMatch[1]);

    if (c) {
      $("#regionResults").innerHTML = `
        <article class="saved-card">
          <small class="eyebrow">
            ${c.category} · ${c.region}
          </small>
          <h2>${c.name}</h2>
          <p>${c.description}</p>
          <p><b>Fakta menarik:</b> ${c.fact}</p>
          <button class="save-button" data-save="${c.id}">
            ＋ Simpan ke koleksi
          </button>
        </article>

        <p>
          <a class="text-link" href="#explore">
            ← Kembali menjelajah
          </a>
        </p>
      `;

      bindSaveButtons();
      $("#explore").scrollIntoView({ behavior: "smooth" });
    }

    return;
  }

  const id = hash.slice(1).split("/")[0];
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

window.addEventListener("hashchange", route);

// ======================================
// MENJALANKAN WEBSITE
// ======================================

function init() {
  renderCategories();
  renderMap();
  dailyCulture();
  renderSelects();
  renderCollection();
  renderStories();
  renderCalendar();
  updateSavedCount();

  $("#year").textContent = new Date().getFullYear();

  if (location.hash) {
    setTimeout(route, 80);
  }
}

init();
