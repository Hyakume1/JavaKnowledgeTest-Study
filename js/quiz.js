// Current mode: 'study' or 'test'
let mode = 'study';
let testState = {}; // questionId -> { selected: int, answered: bool }
let sectionOrder = []; // display order of section indices into DATA

// ─── Section order ───────────────────────────────────────────────────────────

function initSectionOrder() {
  sectionOrder = DATA.map((_, i) => i);
}

function shuffleSectionOrder() {
  const order = DATA.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  sectionOrder = order;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function questionId(sIdx, qIdx) {
  return `${sIdx}_${qIdx}`;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

function escHtmlCode(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ─── Mode ────────────────────────────────────────────────────────────────────

function setMode(m) {
  mode = m;
  if (m === 'test') shuffleSectionOrder();
  else initSectionOrder();
  document.getElementById('studyBtn').classList.toggle('active', m === 'study');
  document.getElementById('testBtn').classList.toggle('active', m === 'test');
  document.body.classList.toggle('study-mode', m === 'study');
  document.body.classList.toggle('test-mode', m === 'test');
  document.getElementById('modeBanner').style.display = m === 'study' ? '' : 'none';
  renderAll();
  updateStats();
  if (m === 'test') window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetTest() {
  testState = {};
  renderAll();
  updateStats();
}

// ─── Rendering ───────────────────────────────────────────────────────────────

function buildChoicesHtml(q, id, st) {
  if (mode === 'study') {
    const correctText = escHtml(q.choices[q.answer]);
    return `<div class="study-answer">
      <span class="answer-label">Answer</span>
      <div class="answer-value">${correctText}</div>
    </div>`;
  }

  return q.choices.map((c, ci) => {
    let cls = 'choice';
    if (st.answered) {
      cls += ' disabled';
      if (ci === st.selected && st.selected !== q.answer) cls += ' show-wrong';
      if (ci === q.answer) cls += ' show-correct';
    } else if (ci === st.selected) {
      cls += ' selected';
    }
    const letter = String.fromCharCode(65 + ci);
    const disabled = st.answered ? 'disabled' : '';
    return `<button class="${cls}" onclick="selectChoice(event,'${id}',${ci})" ${disabled}>
      <span class="letter">${letter}.</span>
      <span class="text">${escHtml(c)}</span>
    </button>`;
  }).join('');
}

function buildFeedbackHtml(q, st) {
  if (mode !== 'test' || !st.answered) return '';
  if (st.selected === q.answer) {
    return `<div class="feedback correct show">✓ Correct!</div>`;
  }
  const correctLetter = String.fromCharCode(65 + q.answer);
  return `<div class="feedback incorrect show">✗ Incorrect. The correct answer is <strong>${correctLetter}. ${escHtml(q.choices[q.answer])}</strong></div>`;
}

function renderAll() {
  const container = document.getElementById('questions');
  const sidebar = document.getElementById('sectionLinks');
  container.innerHTML = '';
  sidebar.innerHTML = '';

  sectionOrder.forEach((sIdx) => {
    const section = DATA[sIdx];
    if (!section.questions.length) return;

    // Sidebar nav link
    const answeredCount = section.questions.filter((_, qIdx) =>
      testState[questionId(sIdx, qIdx)]?.answered
    ).length;
    const pct = Math.round(answeredCount / section.questions.length * 100);

    const link = document.createElement('button');
    link.className = 'section-link';
    link.id = `nav_${sIdx}`;
    link.onclick = () => {
      document.getElementById(`section_${sIdx}`)?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 900) closeSidebar();
    };
    link.innerHTML = `${section.title}
      <small style="color:var(--muted);display:block;font-size:11px">${section.questions.length} questions</small>
      <div class="progress-bar"><div class="fill" style="width:${pct}%"></div></div>`;
    sidebar.appendChild(link);

    // Section heading
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    heading.id = `section_${sIdx}`;
    const tutSlug = section.section.replace(/\s+/g, '_').replace(/\./g, '_');
    heading.innerHTML = `
      <div class="section-heading-top">
        <h2>${section.title}</h2>
        <button class="tut-btn" onclick="openTutorial('${tutSlug}', '${section.title}')">Tutorial</button>
      </div>
      ${section.description ? `<p class="section-desc">${section.description}</p>` : ''}
    `;
    container.appendChild(heading);

    // Question cards
    section.questions.forEach((q, qIdx) => {
      const id = questionId(sIdx, qIdx);
      const st = testState[id] || {};

      const card = document.createElement('div');
      card.id = `q_${id}`;
      card.className = 'question-card' +
        (st.answered ? (st.selected === q.answer ? ' correct' : ' incorrect') : '');

      const codeHtml = q.code ? `<pre class="q-code">${escHtmlCode(q.code)}</pre>` : '';

      card.innerHTML = `
        <div class="q-num">${section.section} · Question ${qIdx + 1}</div>
        <div class="q-text">${escHtml(q.q)}</div>
        ${codeHtml}
        <div class="choices">${buildChoicesHtml(q, id, st)}</div>
        ${buildFeedbackHtml(q, st)}
      `;
      container.appendChild(card);
    });
  });
}

function rerenderCard(sIdx, qIdx) {
  const id = questionId(sIdx, qIdx);
  const st = testState[id] || {};
  const q = DATA[sIdx].questions[qIdx];
  const card = document.getElementById(`q_${id}`);
  if (!card) return;

  card.className = 'question-card' +
    (st.answered ? (st.selected === q.answer ? ' correct' : ' incorrect') : '');

  card.querySelector('.choices').innerHTML = buildChoicesHtml(q, id, st);

  const existing = card.querySelector('.feedback');
  if (existing) existing.remove();
  const feedbackHtml = buildFeedbackHtml(q, st);
  if (feedbackHtml) card.insertAdjacentHTML('beforeend', feedbackHtml);
}

// ─── Interaction ─────────────────────────────────────────────────────────────

function selectChoice(event, id, choiceIdx) {
  if (mode === 'study') return;
  event.stopPropagation();

  if (testState[id]?.answered) return;

  const parts = id.split('_');
  const sIdx = parseInt(parts[0]);
  const qIdx = parseInt(parts[1]);

  testState[id] = { selected: choiceIdx, answered: true };

  rerenderCard(sIdx, qIdx);
  updateStats();
  updateSectionProgress(sIdx);
}

// ─── Stats ───────────────────────────────────────────────────────────────────

function updateStats() {
  const total = DATA.reduce((a, s) => a + s.questions.length, 0);
  const answered = Object.values(testState).filter(s => s.answered).length;
  let correct = 0;
  DATA.forEach((sec, sIdx) => {
    sec.questions.forEach((q, qIdx) => {
      const st = testState[questionId(sIdx, qIdx)];
      if (st?.answered && st.selected === q.answer) correct++;
    });
  });

  const incorrect = answered - correct;
  const pct = answered > 0 ? Math.round(correct / answered * 100) : null;

  document.getElementById('statAnswered').textContent = `${answered} / ${total}`;
  document.getElementById('statCorrect').textContent = correct;
  document.getElementById('statIncorrect').textContent = incorrect;
  document.getElementById('percentageValue').textContent = pct !== null ? `${pct}%` : '—';
}

function updateSectionProgress(sIdx) {
  const section = DATA[sIdx];
  const answeredCount = section.questions.filter((_, qIdx) =>
    testState[questionId(sIdx, qIdx)]?.answered
  ).length;
  const pct = Math.round(answeredCount / section.questions.length * 100);
  const fill = document.getElementById(`nav_${sIdx}`)?.querySelector('.fill');
  if (fill) fill.style.width = pct + '%';
}

// ─── Tutorial Modal ──────────────────────────────────────────────────────────

function openTutorial(slug, title) {
  const overlay = document.getElementById('tutorialOverlay');
  const body    = document.getElementById('tutorialBody');
  const heading = document.getElementById('tutorialTitle');

  heading.textContent = title;
  body.innerHTML = '<p class="tut-loading">Loading...</p>';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  fetch(`tutorials/${slug}.html`)
    .then(r => r.ok ? r.text() : Promise.reject(r.status))
    .then(html => { body.innerHTML = html; })
    .catch(() => { body.innerHTML = '<p class="tut-loading">Could not load tutorial content.</p>'; });
}

function closeTutorial(event) {
  if (event && event.target !== document.getElementById('tutorialOverlay')) return;
  document.getElementById('tutorialOverlay').classList.remove('active');
  if (!document.getElementById('sidebar').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// ─── Mobile Sidebar ──────────────────────────────────────────────────────────

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    sidebar.classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
  if (!document.getElementById('tutorialOverlay').classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTutorial();
});

// ─── Init ────────────────────────────────────────────────────────────────────

function updateHeaderHeight() {
  const h = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--header-h', h + 'px');
}
updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);

document.body.classList.add('study-mode');
initSectionOrder();
renderAll();
