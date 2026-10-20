(function () {
  "use strict";

  const COURSE = (window.COURSE || []).slice().sort((a, b) => a.no - b.no);
  const GLOSSARY = (window.GLOSSARY || []).slice().sort((a, b) => a.t.localeCompare(b.t, "en", { sensitivity: "base" }));
  const SITE = "https://ethereum.org";

  // ---------- index ----------
  const LESSONS = [];
  const BY_ID = {};
  COURSE.forEach((track) => {
    track.lessons.forEach((l, i) => {
      l.track = track;
      l.idx = i;
      l.gidx = LESSONS.length;
      LESSONS.push(l);
      BY_ID[l.id] = l;
    });
  });
  const TRACK_BY_ID = Object.fromEntries(COURSE.map((t) => [t.id, t]));

  // ---------- storage (per-viewer convenience only) ----------
  const KEY = "hoc-ethereum-v1";
  let state = { done: {}, quiz: {}, last: null, open: {}, known: {} };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = Object.assign(state, JSON.parse(raw));
  } catch (e) { /* storage unavailable */ }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  // ---------- theme ----------
  const root = document.documentElement;
  try {
    const t = localStorage.getItem(KEY + "-theme");
    if (t === "dark" || t === "light") root.setAttribute("data-theme", t);
  } catch (e) {}
  document.getElementById("themeBtn").addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY + "-theme", next); } catch (e) {}
  });

  // ---------- helpers ----------
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const strip = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  const doneCount = (track) => track.lessons.filter((l) => state.done[l.id]).length;
  const totalDone = () => LESSONS.filter((l) => state.done[l.id]).length;
  const totalMin = (track) => track.lessons.reduce((s, l) => s + (l.min || 5), 0);
  const srcLink = (p) => (p.startsWith("http") ? p : SITE + p);
  const srcLabel = (p) => (p.startsWith("http") ? p.replace(/^https?:\/\//, "") : p);
  const bits = (track) => `<div class="bits" aria-hidden="true">${track.lessons.map((l) => `<i class="${state.done[l.id] ? "on" : ""}"></i>`).join("")}</div>`;
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const main = $("#main");
  const sidebar = $("#sidebar");

  // ---------- sidebar ----------
  function renderSidebar(currentId) {
    const curTrack = currentId && BY_ID[currentId] ? BY_ID[currentId].track.id : null;
    const pct = LESSONS.length ? Math.round((totalDone() / LESSONS.length) * 100) : 0;
    let html = `
      <nav class="sb-mobile-nav" aria-label="Trang">
        <a href="#home">Lộ trình</a><a href="#glossary">Thuật ngữ</a><a href="#flashcards">Flashcard</a><a href="#review">Ôn tập</a>
      </nav>
      <div class="sb-overall">
        <div class="lbl"><span>Tiến độ</span><span>${totalDone()}/${LESSONS.length} bài</span></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div>`;
    COURSE.forEach((t) => {
      const open = state.open[t.id] !== undefined ? state.open[t.id] : t.id === curTrack;
      html += `<div class="sb-track">
        <button class="sb-track-btn" data-toggle="${t.id}" aria-expanded="${open}">
          <span class="sb-track-no">${pad(t.no)}</span>
          <span class="sb-track-title">${esc(t.title)}</span>
          <span class="sb-track-count">${doneCount(t)}/${t.lessons.length}</span>
        </button>
        <ul class="sb-lessons" ${open ? "" : "hidden"}>
          ${t.lessons.map((l) => `<li><a href="#${l.id}" class="${l.id === currentId ? "current" : ""}"><span class="dot ${state.done[l.id] ? "done" : ""}"></span><span>${esc(l.title)}</span></a></li>`).join("")}
        </ul>
      </div>`;
    });
    sidebar.innerHTML = html;
    const cur = sidebar.querySelector("a.current");
    if (cur) cur.scrollIntoView({ block: "nearest" });
  }
  sidebar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle]");
    if (btn) {
      const id = btn.dataset.toggle;
      const ul = btn.nextElementSibling;
      const open = ul.hidden;
      ul.hidden = !open;
      btn.setAttribute("aria-expanded", open);
      state.open[id] = open;
      save();
      return;
    }
    if (e.target.closest("a")) closeDrawer();
  });

  // mobile drawer
  const menuBtn = $("#menuBtn"), scrim = $("#scrim");
  function openDrawer() { sidebar.classList.add("open"); scrim.hidden = false; menuBtn.setAttribute("aria-expanded", "true"); }
  function closeDrawer() { sidebar.classList.remove("open"); scrim.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => (sidebar.classList.contains("open") ? closeDrawer() : openDrawer()));
  scrim.addEventListener("click", closeDrawer);

  // ---------- views ----------
  function viewHome() {
    const done = totalDone();
    const next = LESSONS.find((l) => !state.done[l.id]) || LESSONS[0];
    const resume = state.last && BY_ID[state.last] ? BY_ID[state.last] : null;
    const qCount = LESSONS.reduce((s, l) => s + (l.quiz ? l.quiz.length : 0), 0);
    const groups = [];
    COURSE.forEach((t) => { if (!groups.includes(t.group)) groups.push(t.group); });

    main.innerHTML = `<div class="wrap">
      <section class="hero">
        <div>
          <div class="eyebrow">Giáo trình tiếng Việt · dựa trên ethereum.org</div>
          <h1 style="margin-top:10px">Hiểu Ethereum từ <em>ví tiền</em> đến <em>EVM</em>.</h1>
          <p>${LESSONS.length} bài học ngắn, sắp xếp thành ${COURSE.length} học phần theo đúng cấu trúc của ethereum.org: từ khái niệm cơ bản, cách dùng, các ứng dụng, staking, lộ trình nâng cấp cho tới tài liệu dành cho nhà phát triển. Mỗi bài có tóm tắt, ý chính, câu hỏi kiểm tra và đường dẫn tới trang gốc.</p>
          <div class="hero-actions">
            ${resume && !state.done[resume.id] ? `<a class="btn primary" href="#${resume.id}">Học tiếp: ${esc(resume.title)}</a>` : `<a class="btn primary" href="#${next.id}">${done ? "Bài tiếp theo: " + esc(next.title) : "Bắt đầu bài đầu tiên"}</a>`}
            <a class="btn" href="#review">Ôn tập ngẫu nhiên</a>
          </div>
        </div>
        <div class="slotboard" aria-label="Tiến độ học">
          <div class="row"><span class="eyebrow">Tiến độ của bạn</span><span class="eyebrow">${LESSONS.length ? Math.round((done / LESSONS.length) * 100) : 0}%</span></div>
          <div class="row"><span class="big">${done}<span style="color:var(--muted);font-size:var(--t-lg)"> / ${LESSONS.length}</span></span><small>mỗi ô là một bài học</small></div>
          <div class="slotgrid">${LESSONS.map((l) => `<i class="${state.done[l.id] ? "on" : ""}" title="${esc(l.title)}"></i>`).join("")}</div>
          <div class="stats">
            <div><b>${COURSE.length}</b><span>học phần</span></div>
            <div><b>${qCount}</b><span>câu hỏi</span></div>
            <div><b>${GLOSSARY.length}</b><span>thuật ngữ</span></div>
            <div><b>~${Math.round(LESSONS.reduce((s, l) => s + (l.min || 5), 0) / 60)} giờ</b><span>thời lượng</span></div>
          </div>
          <div class="backup">
            <small id="backupMsg" role="status">Tiến độ chỉ lưu trên trình duyệt này. Sao lưu ra file để chuyển sang máy hoặc trình duyệt khác.</small>
            <div class="backup-actions">
              <button class="btn small" id="exportBtn">Sao lưu ra file</button>
              <button class="btn small" id="importBtn">Khôi phục từ file</button>
              <input type="file" id="importInput" accept=".json,application/json" hidden>
            </div>
          </div>
        </div>
      </section>

      ${groups.map((g) => `
        <div class="group-label"><span class="eyebrow">${esc(g)}</span></div>
        <div class="tracks">
          ${COURSE.filter((t) => t.group === g).map((t) => `
            <a class="track-card" href="#t-${t.id}">
              <span class="eyebrow">Học phần ${pad(t.no)} · ${t.lessons.length} bài · ~${totalMin(t)} phút</span>
              <h3>${esc(t.title)}</h3>
              <p>${esc(t.desc)}</p>
              <div class="meta">${bits(t)}<span class="lvl">${esc(t.level)}</span></div>
            </a>`).join("")}
        </div>`).join("")}

      <div class="tips">
        <div class="tip"><h4>Học theo thứ tự</h4><p>Học phần 01–05 dành cho mọi người. Học phần 06–08 đi sâu vào kỹ thuật, nên học sau khi đã nắm phần nền.</p></div>
        <div class="tip"><h4>Làm quiz cuối bài</h4><p>Trả lời đúng từ 2/3 số câu sẽ tự động đánh dấu bài là đã học. Sai cũng không sao, phần giải thích nằm ngay dưới.</p></div>
        <div class="tip"><h4>Ôn bằng flashcard</h4><p>Bộ thuật ngữ có ${GLOSSARY.length} mục. Lật thẻ mỗi ngày vài phút để nhớ các khái niệm như slot, blob hay nonce.</p></div>
        <div class="tip"><h4>Đọc trang gốc</h4><p>Mỗi bài liệt kê các trang ethereum.org mà nó tóm tắt. Bấm vào để đọc bản đầy đủ và cập nhật mới nhất.</p></div>
      </div>
    </div>`;

    $("#exportBtn").addEventListener("click", exportProgress);
    $("#importBtn").addEventListener("click", () => $("#importInput").click());
    $("#importInput").addEventListener("change", (e) => {
      const file = e.target.files[0];
      e.target.value = "";
      if (file) importProgress(file);
    });
  }

  // ---------- backup / restore ----------
  function exportProgress() {
    const data = { app: "hoc-ethereum", v: 1, exported: new Date().toISOString(), state };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `hoc-ethereum-tien-do-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    $("#backupMsg").textContent = `Đã sao lưu ${totalDone()} bài đã học.`;
  }

  // Merges a backup into the current progress, so restoring never erases anything.
  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      let inc;
      try {
        const data = JSON.parse(reader.result);
        if (data.app !== "hoc-ethereum" || !data.state || typeof data.state !== "object") throw new Error();
        inc = data.state;
      } catch (e) {
        $("#backupMsg").textContent = "File không hợp lệ. Hãy chọn file .json được tạo bằng nút “Sao lưu ra file”.";
        return;
      }
      const before = totalDone();
      const terms = new Set(GLOSSARY.map((g) => g.t));
      Object.keys(inc.done || {}).forEach((id) => { if (BY_ID[id]) state.done[id] = true; });
      Object.keys(inc.known || {}).forEach((t) => { if (terms.has(t)) state.known[t] = true; });
      Object.entries(inc.quiz || {}).forEach(([id, s]) => {
        if (!BY_ID[id] || !Array.isArray(s) || !(s[1] > 0) || !(s[0] >= 0)) return;
        const cur = state.quiz[id];
        if (!cur || s[0] / s[1] > cur[0] / cur[1]) state.quiz[id] = [s[0], s[1]];
      });
      if (!state.last && BY_ID[inc.last]) state.last = inc.last;
      save();
      viewHome();
      renderSidebar(null);
      const added = totalDone() - before;
      $("#backupMsg").textContent = added
        ? `Đã khôi phục: thêm ${added} bài đã học, tổng cộng ${totalDone()}/${LESSONS.length} bài.`
        : `Đã khôi phục. Không có bài mới, bạn vẫn có ${totalDone()}/${LESSONS.length} bài đã học.`;
    };
    reader.readAsText(file);
  }

  function viewTrack(track) {
    main.innerHTML = `<div class="wrap">
      <div class="track-head">
        <a class="eyebrow" href="#home" style="text-decoration:none">← Lộ trình</a>
        <h1>${pad(track.no)} · ${esc(track.title)}</h1>
        <p>${esc(track.desc)}</p>
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">${bits(track)}<span class="eyebrow">${doneCount(track)}/${track.lessons.length} bài · ~${totalMin(track)} phút · ${esc(track.level)}</span></div>
      </div>
      <ol class="lesson-list">
        ${track.lessons.map((l, i) => `<li><a href="#${l.id}">
          <span class="no">${pad(track.no)}.${pad(i + 1)}</span>
          <span><span class="t">${esc(l.title)}</span><span class="s">${esc(l.tldr)}</span></span>
          <span class="st ${state.done[l.id] ? "done" : ""}">${state.done[l.id] ? "✓ đã học" : (l.min || 5) + " phút"}</span>
        </a></li>`).join("")}
      </ol>
    </div>`;
  }

  // shuffle answer order each time a quiz is shown, so the correct letter isn't predictable
  function prepQuiz(quiz) {
    return quiz.map((q) => {
      const order = shuffle(q.o.map((_, i) => i));
      return Object.assign({}, q, { o: order.map((i) => q.o[i]), a: order.indexOf(q.a) });
    });
  }

  function quizHTML(quiz) {
    return quiz.map((q, qi) => `
      <div class="q" data-q="${qi}">
        <div class="q-title"><span>${qi + 1}.</span><div>${q.q}</div></div>
        <div class="opts">${q.o.map((o, oi) => `<button class="opt" data-o="${oi}"><span class="k">${"ABCD"[oi]}</span><span>${o}</span></button>`).join("")}</div>
        <div class="explain" hidden></div>
        ${q.from ? `<a class="from" href="#${q.from.id}">Từ bài: ${esc(q.from.title)}</a>` : ""}
      </div>`).join("");
  }

  function bindQuiz(container, quiz, onFinish) {
    const answers = new Array(quiz.length).fill(null);
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".opt");
      if (!btn) return;
      const qEl = btn.closest(".q");
      const qi = +qEl.dataset.q;
      if (answers[qi] !== null) return;
      const oi = +btn.dataset.o;
      const q = quiz[qi];
      answers[qi] = oi;
      qEl.querySelectorAll(".opt").forEach((b, i) => {
        b.disabled = true;
        if (i === q.a) b.classList.add("correct");
        else if (i === oi) b.classList.add("wrong");
      });
      const ex = qEl.querySelector(".explain");
      const ok = oi === q.a;
      ex.classList.toggle("no", !ok);
      ex.innerHTML = `<b>${ok ? "Chính xác." : "Chưa đúng."}</b> ${q.e || ""}`;
      ex.hidden = false;
      if (answers.every((a) => a !== null)) {
        const score = answers.filter((a, i) => a === quiz[i].a).length;
        onFinish(score, quiz.length);
      }
    });
  }

  function viewLesson(l) {
    const t = l.track;
    const prev = LESSONS[l.gidx - 1], next = LESSONS[l.gidx + 1];
    state.last = l.id; save();
    const prevScore = state.quiz[l.id];
    const quiz = l.quiz && l.quiz.length ? prepQuiz(l.quiz) : [];

    main.innerHTML = `<div class="lesson-layout">
      <article class="lesson">
        <div class="lesson-top eyebrow">
          <a href="#t-${t.id}">${pad(t.no)} · ${esc(t.title)}</a>
          <span>Bài ${pad(t.no)}.${pad(l.idx + 1)}</span>
          <span>${l.min || 5} phút đọc</span>
          ${state.done[l.id] ? `<span style="color:var(--ok)">✓ đã học</span>` : ""}
        </div>
        <h1>${esc(l.title)}</h1>
        <div class="sources">${(l.src || []).map((p) => `<a class="chip" href="${srcLink(p)}" target="_blank" rel="noopener">↗ ${esc(srcLabel(p))}</a>`).join("")}</div>
        <div class="tldr"><div class="eyebrow">Tóm tắt nhanh</div><p>${l.tldr}</p></div>
        <div class="prose">${l.body}</div>
        ${l.keys && l.keys.length ? `<section class="keypoints"><h2>Ghi nhớ</h2><ul>${l.keys.map((k) => `<li>${k}</li>`).join("")}</ul></section>` : ""}
        ${l.quiz && l.quiz.length ? `<section class="quiz" id="quiz">
          <h2>Kiểm tra nhanh</h2>
          <p>${l.quiz.length} câu. Đúng từ ${Math.ceil(l.quiz.length * 2 / 3)} câu trở lên sẽ tự đánh dấu bài đã học.${prevScore ? ` Lần trước bạn đạt ${prevScore[0]}/${prevScore[1]}.` : ""}</p>
          <div id="quizBox">${quizHTML(quiz)}</div>
          <div class="quiz-result" id="quizResult" hidden></div>
        </section>` : ""}
        <div class="lesson-actions">
          <button class="btn ${state.done[l.id] ? "ok" : "primary"}" id="doneBtn">${state.done[l.id] ? "✓ Đã học xong (bấm để bỏ đánh dấu)" : "Đánh dấu đã học"}</button>
          ${next ? `<a class="btn" href="#${next.id}">Bài tiếp →</a>` : `<a class="btn" href="#review">Ôn tập tổng hợp →</a>`}
        </div>
        <nav class="pager" aria-label="Chuyển bài">
          ${prev ? `<a href="#${prev.id}"><span>← Bài trước</span><b>${esc(prev.title)}</b></a>` : ""}
          ${next ? `<a class="next" href="#${next.id}"><span>Bài sau →</span><b>${esc(next.title)}</b></a>` : ""}
        </nav>
      </article>
      <aside class="toc" id="toc"></aside>
    </div>`;

    // wrap tables for horizontal scroll
    main.querySelectorAll(".prose table").forEach((tb) => {
      if (tb.parentElement.classList.contains("table-wrap")) return;
      const w = document.createElement("div");
      w.className = "table-wrap";
      tb.parentNode.insertBefore(w, tb);
      w.appendChild(tb);
    });

    // table of contents (scroll via JS so the hash keeps routing)
    const heads = [...main.querySelectorAll(".prose h2")];
    const toc = $("#toc");
    if (heads.length > 1) {
      toc.innerHTML = `<div class="eyebrow">Trong bài này</div>` +
        heads.map((h, i) => `<a href="#${l.id}" data-sec="${i}">${esc(h.textContent)}</a>`).join("") +
        (l.quiz && l.quiz.length ? `<a href="#${l.id}" data-sec="quiz">Kiểm tra nhanh</a>` : "");
      toc.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-sec]");
        if (!a) return;
        e.preventDefault();
        const target = a.dataset.sec === "quiz" ? $("#quiz") : heads[+a.dataset.sec];
        target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
      tocObserver(heads, toc);
    }

    $("#doneBtn").addEventListener("click", () => {
      if (state.done[l.id]) delete state.done[l.id]; else state.done[l.id] = true;
      save();
      viewLesson(l); renderSidebar(l.id);
    });

    if (l.quiz && l.quiz.length) {
      bindQuiz($("#quizBox"), quiz, (score, total) => {
        state.quiz[l.id] = [score, total];
        const pass = score >= Math.ceil(total * 2 / 3);
        if (pass) state.done[l.id] = true;
        save();
        const r = $("#quizResult");
        r.hidden = false;
        r.innerHTML = `<div><b>${score}/${total}</b> câu đúng. ${pass ? "Bài đã được đánh dấu là đã học." : "Đọc lại phần liên quan rồi thử lại nhé."}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn small" id="retry">Làm lại</button>${next ? `<a class="btn small primary" href="#${next.id}">Bài tiếp →</a>` : ""}</div>`;
        $("#retry").addEventListener("click", () => { viewLesson(l); $("#quiz").scrollIntoView(); });
        const db = $("#doneBtn");
        if (pass) { db.className = "btn ok"; db.textContent = "✓ Đã học xong (bấm để bỏ đánh dấu)"; }
        renderSidebar(l.id);
      });
    }
  }

  let tocObs = null;
  function tocObserver(heads, toc) {
    if (tocObs) tocObs.disconnect();
    if (!("IntersectionObserver" in window)) return;
    const links = [...toc.querySelectorAll("a[data-sec]")];
    tocObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const i = heads.indexOf(en.target);
          links.forEach((a) => a.classList.toggle("on", a.dataset.sec === String(i)));
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    heads.forEach((h) => tocObs.observe(h));
  }

  function viewGlossary() {
    main.innerHTML = `<div class="wrap">
      <div class="page-head">
        <div class="eyebrow">Tham khảo · ${GLOSSARY.length} mục</div>
        <h1>Thuật ngữ Ethereum</h1>
        <p>Các khái niệm hay gặp, giải thích bằng tiếng Việt, kèm liên kết tới bài học liên quan. Dựa theo trang <a href="${SITE}/glossary/" target="_blank" rel="noopener">ethereum.org/glossary</a>.</p>
      </div>
      <div class="filterbar"><input id="gFilter" type="search" placeholder="Lọc thuật ngữ, ví dụ: slashing, blob, nonce…" aria-label="Lọc thuật ngữ"></div>
      <div class="letters" id="gLetters"></div>
      <div class="gloss" id="gList"></div>
    </div>`;
    const list = $("#gList"), letters = $("#gLetters");
    function draw(q) {
      const nq = norm(q || "");
      const items = GLOSSARY.filter((g) => !nq || norm(g.t + " " + (g.vi || "") + " " + g.d).includes(nq));
      let html = "", cur = "";
      const ls = [];
      items.forEach((g) => {
        const L = /[a-z]/i.test(g.t[0]) ? g.t[0].toUpperCase() : "#";
        if (L !== cur) { cur = L; ls.push(L); html += `<div class="gloss-letter" id="g-${L}">${L}</div>`; }
        const lesson = g.l && BY_ID[g.l];
        html += `<div class="term"><h3>${esc(g.t)}</h3>${g.vi ? `<div class="vi">${esc(g.vi)}</div>` : ""}<p>${g.d}</p>${lesson ? `<a href="#${lesson.id}">→ Bài: ${esc(lesson.title)}</a>` : ""}</div>`;
      });
      list.innerHTML = html || `<p style="color:var(--muted)">Không có thuật ngữ nào khớp với "${esc(q)}".</p>`;
      letters.innerHTML = ls.map((L) => `<a href="#glossary" data-l="${L}">${L}</a>`).join("");
    }
    letters.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-l]");
      if (!a) return;
      e.preventDefault();
      const el = document.getElementById("g-" + a.dataset.l);
      if (el) el.scrollIntoView();
    });
    $("#gFilter").addEventListener("input", (e) => draw(e.target.value));
    draw("");
  }

  function viewFlashcards() {
    let deck = GLOSSARY.slice();
    let i = 0, onlyUnknown = false;
    main.innerHTML = `<div class="wrap">
      <div class="page-head" style="margin-inline:auto;text-align:center;max-width:620px">
        <div class="eyebrow">Ôn thuật ngữ</div>
        <h1>Flashcard</h1>
        <p>Bấm vào thẻ (hoặc phím Space) để lật. Phím ← → để chuyển thẻ.</p>
      </div>
      <div class="fc-wrap">
        <div class="fc-card" id="fcCard" tabindex="0" role="button" aria-label="Lật thẻ">
          <div class="fc-inner"><div class="fc-face fc-front"><div><h2 id="fcTerm"></h2><div class="fc-hint" id="fcVi"></div><div class="fc-hint">bấm để lật</div></div></div>
          <div class="fc-face fc-back"><div><p id="fcDef"></p><div class="fc-hint" id="fcLesson"></div></div></div></div>
        </div>
        <div class="fc-controls">
          <button class="btn" id="fcPrev">← Trước</button>
          <span class="fc-count" id="fcCount"></span>
          <button class="btn" id="fcNext">Sau →</button>
        </div>
        <div class="fc-controls">
          <button class="btn small" id="fcKnow">Đã nhớ thẻ này</button>
          <button class="btn small" id="fcShuffle">Xáo trộn</button>
          <button class="btn small" id="fcFilter">Chỉ thẻ chưa nhớ</button>
        </div>
      </div>
    </div>`;
    const card = $("#fcCard");
    function rebuild() {
      deck = onlyUnknown ? GLOSSARY.filter((g) => !state.known[g.t]) : GLOSSARY.slice();
      if (!deck.length) deck = GLOSSARY.slice();
      i = Math.min(i, deck.length - 1);
    }
    function draw() {
      const g = deck[i];
      card.classList.remove("flip");
      $("#fcTerm").textContent = g.t;
      $("#fcVi").textContent = g.vi || "";
      $("#fcDef").innerHTML = g.d;
      const lesson = g.l && BY_ID[g.l];
      $("#fcLesson").innerHTML = lesson ? `<a href="#${lesson.id}">Bài: ${esc(lesson.title)}</a>` : "";
      const known = Object.keys(state.known).length;
      $("#fcCount").textContent = `${i + 1} / ${deck.length} · đã nhớ ${known}`;
      $("#fcKnow").textContent = state.known[g.t] ? "✓ Đã nhớ (bấm để bỏ)" : "Đã nhớ thẻ này";
      $("#fcFilter").textContent = onlyUnknown ? "Hiện tất cả thẻ" : "Chỉ thẻ chưa nhớ";
    }
    const flip = () => card.classList.toggle("flip");
    const go = (d) => { i = (i + d + deck.length) % deck.length; draw(); };
    card.addEventListener("click", (e) => { if (!e.target.closest("a")) flip(); });
    card.addEventListener("keydown", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } });
    $("#fcPrev").onclick = () => go(-1);
    $("#fcNext").onclick = () => go(1);
    $("#fcShuffle").onclick = () => { deck = shuffle(deck); i = 0; draw(); };
    $("#fcFilter").onclick = () => { onlyUnknown = !onlyUnknown; i = 0; rebuild(); draw(); };
    $("#fcKnow").onclick = () => {
      const g = deck[i];
      if (state.known[g.t]) delete state.known[g.t]; else state.known[g.t] = true;
      save();
      if (onlyUnknown && state.known[g.t]) { rebuild(); draw(); } else go(1);
    };
    fcKeys = (e) => {
      if (e.target.matches("input, textarea, select")) return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " " && document.activeElement !== card) { e.preventDefault(); flip(); }
    };
    draw();
  }
  let fcKeys = null;

  function viewReview() {
    main.innerHTML = `<div class="wrap review-wrap">
      <div class="page-head">
        <div class="eyebrow">Ôn tập tổng hợp</div>
        <h1>Bài kiểm tra ngẫu nhiên</h1>
        <p>Chọn phạm vi và số câu. Câu hỏi được rút ngẫu nhiên từ các bài học, mỗi câu kèm link quay về bài gốc.</p>
      </div>
      <div class="review-setup">
        <select id="rScope" aria-label="Phạm vi">
          <option value="all">Toàn bộ khóa học</option>
          <option value="done">Chỉ các bài đã học</option>
          ${COURSE.map((t) => `<option value="${t.id}">${pad(t.no)} · ${esc(t.title)}</option>`).join("")}
        </select>
        <select id="rCount" aria-label="Số câu">
          <option value="10">10 câu</option><option value="20">20 câu</option><option value="30">30 câu</option>
        </select>
        <button class="btn primary" id="rStart">Tạo đề mới</button>
      </div>
      <div id="rBox"></div>
      <div class="quiz-result" id="rResult" hidden></div>
    </div>`;
    function start() {
      const scope = $("#rScope").value, n = +$("#rCount").value;
      let pool = LESSONS;
      if (scope === "done") pool = LESSONS.filter((l) => state.done[l.id]);
      else if (scope !== "all") pool = TRACK_BY_ID[scope].lessons;
      const qs = [];
      pool.forEach((l) => (l.quiz || []).forEach((q) => qs.push(Object.assign({}, q, { from: l }))));
      const box = $("#rBox"), res = $("#rResult");
      res.hidden = true;
      if (!qs.length) { box.innerHTML = `<p style="color:var(--muted)">Chưa có câu hỏi trong phạm vi này. Hãy học vài bài trước hoặc chọn "Toàn bộ khóa học".</p>`; return; }
      const picked = prepQuiz(shuffle(qs).slice(0, n));
      const fresh = box.cloneNode(false);
      box.replaceWith(fresh);
      fresh.innerHTML = quizHTML(picked);
      bindQuiz(fresh, picked, (score, total) => {
        res.hidden = false;
        res.innerHTML = `<div><b>${score}/${total}</b> câu đúng (${Math.round(score / total * 100)}%).</div><button class="btn small primary" id="rAgain">Làm đề khác</button>`;
        $("#rAgain").onclick = () => { start(); window.scrollTo(0, 0); };
        res.scrollIntoView({ block: "nearest" });
      });
    }
    $("#rStart").onclick = start;
    if (totalDone() >= 3) $("#rScope").value = "done";
    start();
  }

  // ---------- search ----------
  const overlay = $("#searchOverlay"), sInput = $("#searchInput"), sResults = $("#searchResults");
  const sIndex = LESSONS.map((l) => ({ kind: "Bài", title: l.title, sub: l.track.title, href: "#" + l.id, hay: norm(l.title + " " + l.tldr + " " + strip(l.body) + " " + (l.keys || []).join(" ")), titleN: norm(l.title) }))
    .concat(GLOSSARY.map((g) => ({ kind: "Thuật ngữ", title: g.t + (g.vi ? " · " + g.vi : ""), sub: strip(g.d).slice(0, 110), href: "#glossary", hay: norm(g.t + " " + (g.vi || "") + " " + strip(g.d)), titleN: norm(g.t + " " + (g.vi || "")), term: g.t })));
  let sel = 0, hits = [];
  function openSearch() { overlay.hidden = false; sInput.value = ""; doSearch(""); setTimeout(() => sInput.focus(), 0); }
  function closeSearch() { overlay.hidden = true; }
  function doSearch(q) {
    const nq = norm(q.trim());
    if (!nq) {
      hits = LESSONS.slice(0, 8).map((l) => sIndex[l.gidx]);
    } else {
      const words = nq.split(/\s+/);
      hits = sIndex.map((it) => {
        if (!words.every((w) => it.hay.includes(w))) return null;
        let score = 0;
        words.forEach((w) => { if (it.titleN.includes(w)) score += 10; score += Math.min(5, it.hay.split(w).length - 1); });
        if (it.titleN.startsWith(nq)) score += 20;
        return { it, score };
      }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 30).map((x) => x.it);
    }
    sel = 0;
    sResults.innerHTML = hits.length
      ? hits.map((h, i) => `<a class="sr ${i === 0 ? "sel" : ""}" href="${h.href}" data-term="${h.term ? esc(h.term) : ""}"><span class="kind">${h.kind}</span>${esc(h.title)}<small>${esc(h.sub)}</small></a>`).join("")
      : `<div class="sr-empty">Không tìm thấy kết quả cho "${esc(q)}".</div>`;
  }
  sInput.addEventListener("input", (e) => doSearch(e.target.value));
  sInput.addEventListener("keydown", (e) => {
    const items = [...sResults.querySelectorAll(".sr")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((a, i) => a.classList.toggle("sel", i === sel));
      items[sel].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && items[sel]) {
      e.preventDefault();
      items[sel].click();
    }
  });
  let pendingTerm = null;
  sResults.addEventListener("click", (e) => {
    const a = e.target.closest(".sr");
    if (!a) return;
    pendingTerm = a.dataset.term || null;
    if (pendingTerm && location.hash === "#glossary") { e.preventDefault(); route(); }
    closeSearch();
  });
  $("#searchBtn").addEventListener("click", openSearch);
  $("#searchClose").addEventListener("click", closeSearch);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (!overlay.hidden) closeSearch(); closeDrawer(); return; }
    if (!overlay.hidden) return;
    const typing = e.target.matches("input, textarea, select");
    if (!typing && (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"))) { e.preventDefault(); openSearch(); return; }
    if (fcKeys && route.cur === "flashcards") { fcKeys(e); return; }
    if (!typing && route.cur && BY_ID[route.cur] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const l = BY_ID[route.cur];
      if (e.key === "ArrowRight" && LESSONS[l.gidx + 1]) location.hash = LESSONS[l.gidx + 1].id;
      if (e.key === "ArrowLeft" && LESSONS[l.gidx - 1]) location.hash = LESSONS[l.gidx - 1].id;
    }
  });

  // ---------- reading bar ----------
  const readbar = $("#readbar");
  function updateBar() {
    if (!BY_ID[route.cur]) { readbar.style.width = "0"; return; }
    const h = document.documentElement.scrollHeight - innerHeight;
    readbar.style.width = (h > 0 ? Math.min(100, (scrollY / h) * 100) : 0) + "%";
  }
  addEventListener("scroll", updateBar, { passive: true });

  // ---------- router ----------
  function route() {
    const h = decodeURIComponent(location.hash.slice(1)) || "home";
    route.cur = h;
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === h));
    if (BY_ID[h]) { viewLesson(BY_ID[h]); document.title = BY_ID[h].title + " · Học Ethereum"; }
    else if (h.startsWith("t-") && TRACK_BY_ID[h.slice(2)]) { viewTrack(TRACK_BY_ID[h.slice(2)]); document.title = TRACK_BY_ID[h.slice(2)].title + " · Học Ethereum"; }
    else if (h === "glossary") { viewGlossary(); document.title = "Thuật ngữ · Học Ethereum"; }
    else if (h === "flashcards") { viewFlashcards(); document.title = "Flashcard · Học Ethereum"; }
    else if (h === "review") { viewReview(); document.title = "Ôn tập · Học Ethereum"; }
    else { route.cur = "home"; viewHome(); document.title = "Học Ethereum"; }
    renderSidebar(BY_ID[h] ? h : null);
    if (h === "glossary" && pendingTerm) {
      const f = $("#gFilter"); f.value = pendingTerm; f.dispatchEvent(new Event("input")); pendingTerm = null;
    }
    window.scrollTo(0, 0);
    updateBar();
  }
  addEventListener("hashchange", route);
  route();
})();
