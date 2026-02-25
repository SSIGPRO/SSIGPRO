const i18n = {
  it: {
    page_title_home: "SSIGPRO - Statistical Signal Processing Group",
    page_title_research: "SSIGPRO - Ricerca",
    page_title_team: "SSIGPRO - Team",
    page_desc_home: "SSIGPRO e il gruppo di ricerca su elaborazione statistica di dati e segnali, machine learning e inferenza a supporto delle decisioni.",
    page_desc_research: "Linee di ricerca SSIGPRO su elaborazione statistica, machine learning e inferenza.",
    page_desc_team: "Team SSIGPRO e collaborazioni accademiche.",
    nav_research: "Ricerca",
    nav_team: "Team",
    hero_title: "Statistical Signal Processing Group",
    hero_lead: "SSIGPRO studia modelli e algoritmi per estrarre informazione da dati complessi: inferenza statistica, machine learning, teoria dei segnali e decision making.",
    focus_title: "Focus",
    focus_1: "Signal and data processing",
    focus_2: "Statistical learning and inference",
    focus_3: "Modeling for AI-enabled systems",
    focus_4: "Optimization and decision support",
    research_title: "Linee di ricerca",
    r1_title: "Elaborazione Statistica di Dati e Segnali",
    r1_text: "Stima, rilevazione, filtraggio e analisi di segnali in scenari incerti o rumorosi.",
    r2_title: "Machine Learning e Inferenza",
    r2_text: "Modelli probabilistici, apprendimento supervisionato/non supervisionato e metodi bayesiani.",
    r3_title: "Ottimizzazione per i Sistemi Intelligenti",
    r3_text: "Algoritmi efficienti per problemi decisionali ad alta dimensionalita e vincoli reali.",
    r4_title: "Teoria e Applicazioni",
    r4_text: "Sviluppo teorico con applicazioni in elettronica, telecom e tecnologie data-driven.",
    team_title: "Team",
    team_intro: "Profili di riferimento del gruppo e collaborazioni accademiche.",
    aff_unibo: "Universita di Bologna",
    aff_polito: "Politecnico di Torino",
    profile_link: "Profilo personale",
    footer_text: "SSIGPRO - Statistical Signal Processing Group"
  },
  en: {
    page_title_home: "SSIGPRO - Statistical Signal Processing Group",
    page_title_research: "SSIGPRO - Research",
    page_title_team: "SSIGPRO - Team",
    page_desc_home: "SSIGPRO is the research group on statistical signal and data processing, machine learning, and inference for decision support.",
    page_desc_research: "SSIGPRO research lines in statistical processing, machine learning, and inference.",
    page_desc_team: "SSIGPRO team and academic collaborations.",
    nav_research: "Research",
    nav_team: "Team",
    hero_title: "Statistical Signal Processing Group",
    hero_lead: "SSIGPRO develops models and algorithms to extract information from complex data: statistical inference, machine learning, signal theory, and decision making.",
    focus_title: "Focus",
    focus_1: "Signal and data processing",
    focus_2: "Statistical learning and inference",
    focus_3: "Modeling for AI-enabled systems",
    focus_4: "Optimization and decision support",
    research_title: "Research lines",
    r1_title: "Statistical Signal and Data Processing",
    r1_text: "Estimation, detection, filtering, and analysis of signals in uncertain or noisy scenarios.",
    r2_title: "Machine Learning and Inference",
    r2_text: "Probabilistic models, supervised/unsupervised learning, and Bayesian methods.",
    r3_title: "Optimization for Intelligent Systems",
    r3_text: "Efficient algorithms for high-dimensional decision problems with real constraints.",
    r4_title: "Theory and Applications",
    r4_text: "Theoretical advances with applications in electronics, telecommunications, and data-driven technologies.",
    team_title: "Team",
    team_intro: "Reference profiles and academic collaborations of the group.",
    aff_unibo: "University of Bologna",
    aff_polito: "Politecnico di Torino",
    profile_link: "Personal profile",
    footer_text: "SSIGPRO - Statistical Signal Processing Group"
  }
};

const applyLanguage = (lang) => {
  const dictionary = i18n[lang] || i18n.it;
  const page = document.body.dataset.page || "home";

  document.documentElement.lang = lang;
  document.title = dictionary[`page_title_${page}`] || dictionary.page_title_home;

  const desc = dictionary[`page_desc_${page}`] || dictionary.page_desc_home;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", desc);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem("ssigpro-language", lang);
};

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const savedLanguage = localStorage.getItem("ssigpro-language");
applyLanguage(savedLanguage === "en" ? "en" : "it");
