// Current mode: 'study' or 'test'
let mode = 'study';
let testState = {}; // questionId -> { selected: int, answered: bool }

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
  document.getElementById('studyBtn').classList.toggle('active', m === 'study');
  document.getElementById('testBtn').classList.toggle('active', m === 'test');
  document.body.classList.toggle('study-mode', m === 'study');
  document.body.classList.toggle('test-mode', m === 'test');
  document.getElementById('modeBanner').style.display = m === 'study' ? '' : 'none';
  document.getElementById('resetBtn').style.display = m === 'test' ? '' : 'none';
  renderAll();
  updateStats();
}

function resetTest() {
  testState = {};
  renderAll();
  updateStats();
}

// ─── Rendering ───────────────────────────────────────────────────────────────

function buildChoicesHtml(q, id, st) {
  return q.choices.map((c, ci) => {
    let cls = 'choice';
    if (mode === 'study') {
      if (ci === q.answer) cls += ' correct-answer';
    } else {
      if (st.answered) {
        cls += ' disabled';
        if (ci === st.selected && st.selected !== q.answer) cls += ' show-wrong';
        if (ci === q.answer) cls += ' show-correct';
      } else if (ci === st.selected) {
        cls += ' selected';
      }
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

  DATA.forEach((section, sIdx) => {
    if (!section.questions.length) return;

    // Sidebar nav link
    const answeredCount = section.questions.filter((_, qIdx) =>
      testState[questionId(sIdx, qIdx)]?.answered
    ).length;
    const pct = Math.round(answeredCount / section.questions.length * 100);

    const link = document.createElement('button');
    link.className = 'section-link';
    link.id = `nav_${sIdx}`;
    link.onclick = () => document.getElementById(`section_${sIdx}`)?.scrollIntoView({ behavior: 'smooth' });
    link.innerHTML = `${section.section}
      <small style="color:var(--muted);display:block;font-size:11px">${section.questions.length} questions</small>
      <div class="progress-bar"><div class="fill" style="width:${pct}%"></div></div>`;
    sidebar.appendChild(link);

    // Section heading
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    heading.id = `section_${sIdx}`;
    heading.innerHTML = `<h2>${section.title}</h2>`;
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

  document.getElementById('statAnswered').textContent = `${answered} / ${total}`;
  document.getElementById('statCorrect').textContent = correct;
  document.getElementById('statIncorrect').textContent = answered - correct;
  document.getElementById('scoreValue').innerHTML = `${correct} <span>/ ${total}</span>`;
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

// ─── Init ────────────────────────────────────────────────────────────────────

document.body.classList.add('study-mode');
renderAll();
