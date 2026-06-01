const ICONS = {
  home: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>',
  book: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H21"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H21v20H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M8 6h8"/></svg>',
  camera: '<svg class="icon" viewBox="0 0 24 24"><path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  user: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  hand: '<svg class="icon" viewBox="0 0 24 24"><path d="M7 11V5a2 2 0 0 1 4 0v5"/><path d="M11 10V4a2 2 0 0 1 4 0v7"/><path d="M15 11V6a2 2 0 0 1 4 0v7"/><path d="M7 11 5.8 9.8a2 2 0 0 0-2.8 2.8l5.2 6.2A6 6 0 0 0 12.8 21H15a4 4 0 0 0 4-4v-4"/></svg>',
  mic: '<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>',
  text: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 5h16"/><path d="M12 5v14"/><path d="M8 19h8"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"/></svg>',
  play: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  chevron: '<svg class="icon" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
  gear: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 0 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.3 7A2 2 0 0 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 .9-1.6V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 0 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6.9h.1a2 2 0 0 1 0 4H21a1.7 1.7 0 0 0-1.6 1z"/></svg>',
  bell: '<svg class="icon" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  trophy: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H4v2a4 4 0 0 0 4 4"/><path d="M16 6h4v2a4 4 0 0 1-4 4"/><path d="M12 13v5"/><path d="M8 21h8"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  volume: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 10v4h4l5 4V6l-5 4H4z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M18.5 6.5a9 9 0 0 1 0 11"/></svg>',
  spark: '<svg class="icon" viewBox="0 0 24 24"><path d="M13 2 9 12l-7 2 7 2 4 6 2-8 7-2-7-2-2-8z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  back: '<svg class="icon" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  list: '<svg class="icon" viewBox="0 0 24 24"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>'
};

const signs = [
  ['A', 'Apple', 'Closed fist rotates gently on the cheek.', true],
  ['A', 'Afternoon', 'Dominant hand rests above the other hand in a downward angle.', false],
  ['A', 'Always', 'Index finger circles near the head.', false],
  ['B', 'Baby', 'Arms rock as if holding a baby.', true],
  ['B', 'Beautiful', 'Open hand circles in front of the face and closes.', false],
  ['B', 'Blue', 'B-hand twists near shoulder height.', false],
  ['C', 'Cat', 'Pinch fingers near cheeks like whiskers.', true],
  ['C', 'Coffee', 'Stack fists and rotate like a grinder.', false],
  ['D', 'Doctor', 'Tap fingers on the wrist like checking pulse.', false],
  ['F', 'Friend', 'Hook index fingers together, then switch.', true],
  ['H', 'Hello', 'Open hand moves outward from forehead.', true],
  ['T', 'Thank you', 'Flat hand moves from chin outward.', true]
];

const lessons = [
  ['Basics', 'Alphabet, numbers and greetings', 72],
  ['Daily phrases', 'Questions, manners and family signs', 46],
  ['Conversation', 'Build full signed sentences', 28],
  ['Emergency signs', 'Fast communication for urgent moments', 12]
];

const quickPhrases = ['Hello', 'How are you?', 'Thank you', 'Good morning', 'I need help', 'Please repeat'];
const app = document.getElementById('app');
let state = {
  route: 'welcome',
  mode: 'text',
  signQuery: '',
  signFilter: 'all',
  selectedSign: signs[0],
  selectedLesson: lessons[0],
  toast: '',
  cameraStream: null,
  videoUrl: '',
  settings: { speech: true, reminders: true, highContrast: true },
  history: [
    ['Thank you', 'Text to sign, 8 minutes ago'],
    ['Good morning', 'Voice to sign, yesterday']
  ]
};

function icon(name) { return ICONS[name] || ''; }
function escapeAttr(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[char]));
}
function setRoute(route) {
  stopCamera();
  state.route = route;
  location.hash = route === 'welcome' ? '' : route;
  render();
}
function showToast(message) {
  state.toast = message;
  const toast = document.querySelector('.toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }
}
function header(title, subtitle = '') {
  return `<header class="app-header">
    <button class="icon-button" data-route="home" aria-label="Go home">${icon('back')}</button>
    <div class="brand">
      <img class="logo-mark" src="logo.png" alt="MyM logo">
      <div class="brand-copy"><div class="brand-name">${title}</div>${subtitle ? `<div class="brand-kicker">${subtitle}</div>` : ''}</div>
    </div>
    <button class="icon-button" data-route="settings" aria-label="Open settings">${icon('gear')}</button>
  </header>`;
}
function nav() {
  const items = [
    ['home', 'Home', 'home'], ['dictionary', 'Dictionary', 'book'], ['translate', 'Translate', 'camera'], ['practice', 'Practice', 'hand'], ['profile', 'Profile', 'user']
  ];
  return `<nav class="bottom-nav" aria-label="Main navigation">${items.map(([r, label, ic]) => `
    <button class="nav-item ${r === state.route ? 'active' : ''} ${r === 'translate' ? 'center' : ''}" data-route="${r}" aria-label="${label}">
      ${r === 'translate' ? `<span class="center-disc">${icon(ic)}</span>` : icon(ic)}<span class="nav-label">${label}</span>
    </button>`).join('')}</nav>`;
}
function shell(content, title, subtitle) {
  return `<main id="app-main" class="screen"><span class="orb blue"></span><span class="orb orange"></span>${header(title, subtitle)}${content}</main>${nav()}<div class="toast" role="status"></div>`;
}
function welcome() {
  return `<main id="app-main" class="welcome screen compact">
    <span class="orb blue"></span><span class="orb orange"></span>
    <section>
      <img class="welcome-logo" src="logo.png" alt="MyM application logo">
      <h1 class="hero-title">Learn <span class="blue">sign</span><br><span class="orange">language</span> for real conversations.</h1>
      <p class="hero-text">Practice signs, search a visual dictionary, and translate text, voice and camera input in one focused mobile app.</p>
      <div class="hero-actions">
        <button class="primary-btn" data-route="home">Get started ${icon('chevron')}</button>
        <button class="secondary-btn" data-route="translate">Open live translation</button>
      </div>
    </section>
    <section class="welcome-stats" aria-label="App statistics">
      <div class="stat-card"><div class="stat-number">10k+</div><div class="stat-label">active learners</div></div>
      <div class="stat-card"><div class="stat-number">500+</div><div class="stat-label">sign lessons</div></div>
    </section>
  </main>`;
}
function home() {
  return shell(`<section>
    <h1 class="page-title">Ready to translate or practice today?</h1>
    <p class="page-subtitle">Pick a mode, continue lessons, or review signs you saved recently.</p>
    <div class="feature-grid">
      <button class="feature-tile orange" data-route="translate"><span class="tile-icon">${icon('camera')}</span><div><h3>Live translator</h3><p>Text, sound, video and camera sign support.</p></div></button>
      <button class="feature-tile" data-route="dictionary"><span class="tile-icon">${icon('book')}</span><div><h3>Dictionary</h3><p>Search common ASL signs.</p></div></button>
      <button class="feature-tile" data-route="lessons"><span class="tile-icon">${icon('play')}</span><div><h3>Lessons</h3><p>Guided daily learning path.</p></div></button>
      <button class="feature-tile" data-route="practice"><span class="tile-icon">${icon('hand')}</span><div><h3>Practice</h3><p>Camera drills and quizzes.</p></div></button>
    </div>
    <h2 class="section-heading">Continue learning</h2>
    ${lessonList(lessons.slice(0, 2))}
    <h2 class="section-heading">Recent translations</h2>
    <div class="history-list">${state.history.map(([phrase, meta]) => `<button class="history-item" data-history-phrase="${escapeAttr(phrase)}"><div><b>${escapeHtml(phrase)}</b><small>${escapeHtml(meta)}</small></div>${icon('chevron')}</button>`).join('')}</div>
  </section>`, 'MyM', 'sign language app');
}
function translate() {
  return shell(`<section>
    <h1 class="page-title">Live translation</h1>
    <p class="page-subtitle">Translate text, voice, video or camera signing. Camera access uses your browser permission.</p>
    <div class="translate-stage" id="stage">
      ${stageMedia()}
      <div class="stage-badge"><i class="pulse-dot"></i>${state.mode === 'camera' ? 'Camera listening' : state.mode === 'video' ? 'Video analysis' : 'Interpreting'}</div>
      <div class="live-caption" id="liveCaption">${captionForMode()}</div>
    </div>
    <div class="mode-tabs" role="tablist">
      ${['text','voice','video','camera'].map(m => `<button class="mode-tab ${state.mode === m ? 'active' : ''}" data-mode="${m}">${m}</button>`).join('')}
    </div>
    <div class="translator-card">
      <div class="input-row"><input class="translate-input" id="translateInput" placeholder="Type here to translate..." aria-label="Text to translate"><button class="icon-button" id="speakBtn" aria-label="Read translation aloud">${icon('volume')}</button></div>
      <div class="output-box" id="translationOutput">Sign sequence will appear here after you type or choose a phrase.</div>
    </div>
    <div class="quick-row">${quickPhrases.map(p => `<button class="chip" data-phrase="${p}">${p}</button>`).join('')}</div>
    <input id="videoFile" type="file" accept="video/*" hidden>
    <div class="quick-row"><button class="chip" data-mode="camera">Start camera translation</button><button class="chip" id="voiceBtn">Start voice capture</button><button class="chip" id="videoBtn">Upload video sample</button></div>
  </section>`, 'Translate', 'text, voice, camera');
}
function stageMedia() {
  if (state.mode === 'camera') return '<video class="camera-view" id="cameraView" autoplay playsinline muted></video>';
  if (state.mode === 'video' && state.videoUrl) return `<video class="camera-view" src="${state.videoUrl}" controls playsinline></video>`;
  return `<div class="avatar-stage"><div class="avatar-hand">${icon('hand')}</div></div>`;
}
function captionForMode() {
  if (state.mode === 'camera') return 'Show a sign to the camera. Demo recognition: Hello, Thank you, Please repeat.';
  if (state.mode === 'voice') return 'Voice mode converts spoken words into sign guidance.';
  if (state.mode === 'video') return 'Video mode creates a signed interpretation preview.';
  return 'Type a phrase and MyM will describe the matching sign sequence.';
}
function dictionary() {
  const filtered = signs.filter(s => {
    const matchesQuery = `${s[1]} ${s[2]} ${s[0]}`.toLowerCase().includes(state.signQuery.toLowerCase());
    const matchesFilter = state.signFilter === 'all' || (state.signFilter === 'favorites' && s[3]) || (state.signFilter === 'recent' && ['Hello', 'Thank you', 'Apple'].includes(s[1]));
    return matchesQuery && matchesFilter;
  });
  if (filtered.length && !filtered.includes(state.selectedSign)) state.selectedSign = filtered[0];
  return shell(`<section>
    <h1 class="page-title">Dictionary</h1><p class="page-subtitle">Search clear descriptions for common signs and save favorites for practice.</p>
    <div class="search-wrap">${icon('search')}<input class="search-input" id="signSearch" value="${escapeAttr(state.signQuery)}" placeholder="Search for a sign..." aria-label="Search dictionary"></div>
    <div class="filter-tabs">
      ${[
        ['all','All signs','list'],
        ['recent','Recent','clock'],
        ['favorites','Favorites','star']
      ].map(([key, label, ic]) => `<button class="filter-tab ${state.signFilter === key ? 'active' : ''}" data-filter="${key}" aria-pressed="${state.signFilter === key}">${icon(ic)}<span>${label}</span></button>`).join('')}
    </div>
    <div class="sign-list">${filtered.map((s, i) => signRow(s, i)).join('') || `<div class="empty-state">${icon('search')}No signs match that search.</div>`}</div>
    ${filtered.length && state.selectedSign ? signDetail(state.selectedSign) : ''}
  </section>`, 'Dictionary', 'visual sign guide');
}
function signRow(s, i) {
  return `<button class="sign-item ${state.selectedSign === s ? 'selected' : ''}" data-sign-index="${signs.indexOf(s)}" aria-label="Open ${s[1]} sign">
    <span class="sign-letter">${s[0]}</span>
    <span><strong>${s[1]}</strong><span>${s[2]}</span></span>
    <span class="sign-action ${s[3] ? 'saved' : ''}" aria-hidden="true">${s[3] ? icon('star') : icon('chevron')}</span>
  </button>`;
}
function signDetail(s) {
  return `<article class="sign-detail-card"><div class="sign-video-box">${icon('hand')}</div><h2 class="section-heading">${s[1]}</h2><p class="page-subtitle">${s[2]} Practice slowly first, then repeat at conversation speed.</p><div class="detail-actions"><button class="primary-btn" data-practice-sign="${s[1]}">${icon('hand')} Practice</button><button class="secondary-btn compact-btn" data-toggle-favorite="${s[1]}">${icon('star')} ${s[3] ? 'Saved' : 'Save'}</button></div></article>`;
}
function lessonList(list = lessons) {
  return `<div class="lesson-list">${list.map((l, index) => `<button class="lesson-card" data-lesson-index="${lessons.indexOf(l) >= 0 ? lessons.indexOf(l) : index}"><div class="lesson-progress">${l[2]}%</div><div><h3>${l[0]}</h3><p>${l[1]}</p><div class="progress-line" style="--value:${l[2]}%"><i></i></div></div></button>`).join('')}</div>`;
}
function lessonsPage() {
  return shell(`<section><h1 class="page-title">Lessons</h1><p class="page-subtitle">Short sessions designed for daily learning and long-term memory.</p>${lessonList()}<h2 class="section-heading">Today’s focus</h2><div class="practice-card">${icon('spark')}<h3>Five-minute greeting drill</h3><p>Practice Hello, Good morning, Thank you and Please repeat with guided timing.</p></div></section>`, 'Lessons', 'guided path');
}
function lessonDetail() {
  const lesson = state.selectedLesson || lessons[0];
  const drills = ['Watch the sign', 'Repeat slowly', 'Use it in a sentence'];
  return shell(`<section><h1 class="page-title">${lesson[0]}</h1><p class="page-subtitle">${lesson[1]}. Complete the steps below to move your progress forward.</p><div class="sign-detail-card"><div class="sign-video-box">${icon('play')}</div><h2 class="section-heading">Lesson preview</h2><p class="page-subtitle">A guided practice session with visual pacing, text prompts and spoken feedback.</p></div><div class="lesson-list">${drills.map((d, i) => `<button class="lesson-card" data-complete-step="${i}"><div class="lesson-progress">${i + 1}</div><div><h3>${d}</h3><p>${i === 0 ? 'Study hand position and movement.' : i === 1 ? 'Repeat with the timer until it feels natural.' : 'Practice the sign inside a short phrase.'}</p></div></button>`).join('')}</div><button class="primary-btn full-width" data-route="practice">Start practice drill</button></section>`, 'Lesson', 'guided session');
}
function practice() {
  return shell(`<section><h1 class="page-title">Practice</h1><p class="page-subtitle">Build muscle memory with recognition drills, flashcards and pronunciation support.</p><div class="practice-options"><button class="practice-card" data-route="translate">${icon('camera')}<h3>Camera accuracy drill</h3><p>Perform a sign and receive instant text feedback.</p></button><button class="practice-card" data-route="dictionary">${icon('book')}<h3>Flashcard review</h3><p>Review favorites and recent mistakes.</p></button><button class="practice-card" id="soundPractice">${icon('mic')}<h3>Sound to sign</h3><p>Say a phrase and practice the matching sign sequence.</p></button></div></section>`, 'Practice', 'daily drills');
}
function profile() {
  return shell(`<section><div class="profile-top"><img class="avatar" src="logo.png" alt="Karim profile avatar"><h1 class="page-title">Karim daldoul</h1><div class="rank">Beginner Explorer, level 12</div></div><div class="stats-grid"><div class="mini-stat"><b>142</b><span>words</span></div><div class="mini-stat"><b>7</b><span>day streak</span></div><div class="mini-stat"><b>12h</b><span>practice</span></div></div><div class="progress-line profile-progress"><i></i></div><h2 class="section-heading">Achievements</h2><div class="achievement-row">${['First word','Verified','Master','Scholar','Social'].map((a,i)=>`<div class="achievement ${i>1?'locked':''}"><div class="badge-icon">${icon(i>1?'star':'trophy')}</div><small>${a}</small></div>`).join('')}</div><h2 class="section-heading">Account</h2><div class="settings-list"><button class="settings-item" data-route="account"><span class="settings-left"><span class="icon-wrap">${icon('user')}</span><span>Account information<small>Name, email and accessibility preferences</small></span></span>${icon('chevron')}</button><button class="settings-item" data-route="notifications"><span class="settings-left"><span class="icon-wrap">${icon('bell')}</span><span>Notifications<small>Practice reminders and lesson updates</small></span></span>${icon('chevron')}</button></div></section>`, 'Profile', 'progress and settings');
}
function settings() {
  return shell(`<section><h1 class="page-title">Settings</h1><p class="page-subtitle">Tune the app for comfortable learning and accessible translation.</p><div class="settings-list">
    ${settingsRow('speech', 'volume', 'Speak translations', 'Read text output aloud')}
    ${settingsRow('reminders', 'bell', 'Practice reminders', 'Daily lesson and streak notifications')}
    ${settingsRow('highContrast', 'spark', 'High contrast text', 'Keep labels, captions and controls easier to read')}
    <button class="settings-item" data-route="camera-permissions"><span class="settings-left"><span class="icon-wrap">${icon('camera')}</span><span>Camera permissions<small>Used only for live sign recognition</small></span></span>${icon('chevron')}</button>
    <button class="settings-item" data-route="support"><span class="settings-left"><span class="icon-wrap">${icon('mail')}</span><span>Support<small>help@mym-sign.app</small></span></span>${icon('chevron')}</button>
  </div><h2 class="section-heading">Legal</h2><div class="history-list"><button class="history-item" data-route="privacy"><b>Privacy policy</b>${icon('chevron')}</button><button class="history-item" data-route="terms"><b>Terms of service</b>${icon('chevron')}</button></div></section>`, 'Settings', 'accessibility');
}
function settingsRow(key, ic, title, desc) {
  return `<button class="settings-item" data-setting="${key}" aria-pressed="${state.settings[key]}"><span class="settings-left"><span class="icon-wrap">${icon(ic)}</span><span>${title}<small>${desc}</small></span></span><span class="toggle ${state.settings[key] ? 'on' : ''}"></span></button>`;
}
function infoPage(kind) {
  const pages = {
    privacy: ['Privacy policy', 'MyM stores learning preferences on this device for this demo. Camera, voice and video features only run after you choose them and grant browser permission.'],
    terms: ['Terms of service', 'Use MyM as a learning aid, not as a replacement for a qualified interpreter in medical, legal or emergency situations.'],
    support: ['Support', 'Send questions, accessibility feedback or account requests to help@mym-sign.app. We respond with practical steps and clear follow-up.'],
    'camera-permissions': ['Camera permissions', 'Live translation asks your browser for camera access only when camera mode starts. Leaving the page stops the camera stream.'],
    account: ['Account information', 'Karim daldoul is signed in as a beginner learner. Accessibility preferences and saved signs are kept with the app profile.'],
    notifications: ['Notifications', 'Practice reminders are enabled. MyM uses reminders for lesson streaks, unfinished drills and review sessions.']
  };
  const [title, text] = pages[kind] || pages.support;
  return shell(`<section><h1 class="page-title">${title}</h1><p class="page-subtitle">${text}</p><div class="practice-card">${icon(kind === 'camera-permissions' ? 'camera' : 'mail')}<h3>What you can do here</h3><p>${kind === 'camera-permissions' ? 'Open Translate, choose Camera, then approve or deny access in your browser controls.' : 'Review this information, then return to Settings or Home using the app navigation.'}</p></div><button class="primary-btn full-width" data-route="settings">Back to settings</button></section>`, title, 'details');
}
function notFound() {
  return shell(`<div class="empty-state">${icon('hand')}<h1 class="page-title">Page not found</h1><p>The page you opened does not exist in MyM.</p><button class="primary-btn" data-route="home">Back home</button></div>`, 'Not found', '404');
}
function routeView() {
  const routes = { welcome, home, translate, dictionary, lessons: lessonsPage, 'lesson-detail': lessonDetail, practice, profile, settings };
  if (routes[state.route]) return routes[state.route]();
  if (['privacy', 'terms', 'support', 'camera-permissions', 'account', 'notifications'].includes(state.route)) return infoPage(state.route);
  return notFound();
}
function render() {
  app.innerHTML = routeView();
  bindEvents();
  if (state.route === 'translate' && state.mode === 'camera') startCamera();
}
function bindEvents() {
  document.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => setRoute(el.dataset.route)));
  document.querySelectorAll('[data-mode]').forEach(el => el.addEventListener('click', () => { state.mode = el.dataset.mode; render(); showToast(`${state.mode} translation mode ready`); }));
  document.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('click', () => { state.signFilter = el.dataset.filter; render(); }));
  document.querySelectorAll('[data-setting]').forEach(el => el.addEventListener('click', () => { const key = el.dataset.setting; state.settings[key] = !state.settings[key]; render(); showToast(`${el.querySelector('.settings-left span:last-child')?.childNodes[0]?.textContent || 'Setting'} ${state.settings[key] ? 'enabled' : 'disabled'}`); }));
  document.querySelectorAll('[data-lesson-index]').forEach(el => el.addEventListener('click', () => { state.selectedLesson = lessons[Number(el.dataset.lessonIndex)] || lessons[0]; setRoute('lesson-detail'); }));
  document.querySelectorAll('[data-complete-step]').forEach(el => el.addEventListener('click', () => showToast('Step marked complete')));
  document.querySelectorAll('[data-phrase]').forEach(el => el.addEventListener('click', () => translatePhrase(el.dataset.phrase)));
  document.querySelectorAll('[data-history-phrase]').forEach(el => el.addEventListener('click', () => { state.mode = 'text'; setRoute('translate'); setTimeout(() => translatePhrase(el.dataset.historyPhrase), 0); }));
  document.querySelectorAll('[data-sign-index]').forEach(el => el.addEventListener('click', () => { state.selectedSign = signs[Number(el.dataset.signIndex)]; render(); }));
  document.querySelectorAll('[data-toggle-favorite]').forEach(el => el.addEventListener('click', () => toggleFavorite(el.dataset.toggleFavorite)));
  const search = document.getElementById('signSearch');
  if (search) search.addEventListener('input', e => {
    state.signQuery = e.target.value;
    render();
    const nextSearch = document.getElementById('signSearch');
    if (nextSearch) {
      nextSearch.focus();
      nextSearch.setSelectionRange(state.signQuery.length, state.signQuery.length);
    }
  });
  const input = document.getElementById('translateInput');
  if (input) input.addEventListener('input', e => updateTranslation(e.target.value));
  const speak = document.getElementById('speakBtn');
  if (speak) speak.addEventListener('click', speakOutput);
  const voice = document.getElementById('voiceBtn');
  if (voice) voice.addEventListener('click', voiceCapture);
  const video = document.getElementById('videoBtn');
  const videoFile = document.getElementById('videoFile');
  if (video && videoFile) video.addEventListener('click', () => videoFile.click());
  if (videoFile) videoFile.addEventListener('change', e => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (state.videoUrl) URL.revokeObjectURL(state.videoUrl);
    state.videoUrl = URL.createObjectURL(file);
    state.mode = 'video';
    render();
    updateTranslation('Hello I need help');
    showToast('Video loaded. Demo interpretation prepared.');
  });
  const sound = document.getElementById('soundPractice');
  if (sound) sound.addEventListener('click', () => { state.route = 'translate'; state.mode = 'voice'; render(); });
  document.querySelectorAll('[data-practice-sign]').forEach(el => el.addEventListener('click', () => { state.route = 'practice'; render(); showToast(`Practice started: ${el.dataset.practiceSign}`); }));
}
function translatePhrase(text) {
  const input = document.getElementById('translateInput');
  if (input) input.value = text;
  updateTranslation(text);
}
function updateTranslation(text) {
  const output = document.getElementById('translationOutput');
  const caption = document.getElementById('liveCaption');
  const value = text.trim();
  const result = value ? `Sign guide: ${value.split(/\s+/).map(w => w.replace(/[^a-z]/gi, '')).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' → ')}. Keep eye contact, sign at chest level, then pause.` : 'Sign sequence will appear here after you type or choose a phrase.';
  if (output) output.textContent = result;
  if (caption && value) caption.textContent = `Live text translation: ${value}`;
  if (value && !state.history.some(([phrase]) => phrase.toLowerCase() === value.toLowerCase())) {
    state.history = [[value, `${state.mode[0].toUpperCase() + state.mode.slice(1)} to sign, just now`], ...state.history].slice(0, 4);
  }
}
function toggleFavorite(name) {
  const sign = signs.find(s => s[1] === name);
  if (!sign) return;
  sign[3] = !sign[3];
  state.selectedSign = sign;
  render();
  showToast(`${name} ${sign[3] ? 'saved to favorites' : 'removed from favorites'}`);
}
function speakOutput() {
  const text = document.getElementById('translationOutput')?.textContent || 'No translation yet.';
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    showToast('Reading translation aloud');
  } else showToast('Speech synthesis is not supported in this browser.');
}
function voiceCapture() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) { showToast('Voice capture is not supported. Try typing a phrase.'); return; }
  const recognition = new Recognition();
  recognition.lang = 'en-US';
  recognition.onresult = e => translatePhrase(e.results[0][0].transcript);
  recognition.onerror = () => showToast('Voice capture failed. Please try again.');
  recognition.start();
  showToast('Listening for voice input');
}
async function startCamera() {
  const video = document.getElementById('cameraView');
  if (!video || !navigator.mediaDevices?.getUserMedia) { showToast('Camera is not available in this browser.'); return; }
  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
    video.srcObject = state.cameraStream;
  } catch {
    showToast('Camera permission denied. Text and voice modes still work.');
  }
}
function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(track => track.stop());
    state.cameraStream = null;
  }
}
function boot() {
  const hash = location.hash.replace('#', '');
  if (hash) state.route = hash;
  render();
}
window.addEventListener('hashchange', () => { state.route = location.hash.replace('#', '') || 'welcome'; render(); });
boot();
