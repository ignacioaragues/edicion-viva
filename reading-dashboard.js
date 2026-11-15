(() => {
  'use strict';
  const reading = window.EdicionVivaReading;
  const dayLabels = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const links = {
    'plauto-aulularia': './autores/plauto/aulularia/',
    'evangelios-marcos': './autores/evangelios/marcos/',
    'shakespeare-coriolanus': '../shakespeare-edicion-viva/#coriolanus',
    'leo-i-sermo-1': './autores/leon-i/sermones/sermo-i/',
    'leo-i-sermo-2': './autores/leon-i/sermones/sermo-ii/',
    'leo-i-sermones': './autores/leon-i/#corpus',
    'leo-i-epistolas': './autores/leon-i/#corpus',
    'corneille-attila': './autores/corneille/attila/'
  };
  const colors = {
    'plauto-aulularia': '#78927c',
    'evangelios-marcos': '#83719b',
    'shakespeare-coriolanus': '#ad7059',
    'leo-i-sermones': '#71928b',
    'leo-i-epistolas': '#b79c63',
    'corneille-attila': '#8d789b'
  };
  const fallbackColors = ['#7e89a8', '#b49a68', '#8d7790', '#6f9d9a', '#ac7e85'];
  const formatDate = date => `${date.getDate()}/${date.getMonth()+1}`;

  function dateOffset(days) {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + days);
    return date;
  }

  function make(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }

  // Agrupar únicamente para el informe: cada sermón y epístola conserva
  // sus registros individuales, posición, progreso y sincronización.
  function categoryId(id) {
    if (/^(?:leo|leon)-i-sermo(?:-|$)/.test(id)) return 'leo-i-sermones';
    if (/^(?:leo|leon)-i-(?:epist|epistola|epistula|carta|letter)/.test(id)) return 'leo-i-epistolas';
    return id;
  }

  function workEntries(data) {
    const groups = new Map();
    for (const [id, work] of Object.entries(data.works || {})) {
      if (!work || reading.secondsForWork(work) <= 0) continue;
      const category = categoryId(id);
      if (!groups.has(category)) {
        groups.set(category, { title:
          category === 'leo-i-sermones' ? 'León I · Sermones' :
          category === 'leo-i-epistolas' ? 'León I · Epístolas' :
          work.title || id,
          members: [], totalSeconds: 0
        });
      }
      const entry = groups.get(category);
      entry.members.push(work);
      entry.totalSeconds += reading.secondsForWork(work);
    }
    return [...groups].sort(([idA, a], [idB, b]) =>
      b.totalSeconds - a.totalSeconds || idA.localeCompare(idB));
  }

  function secondsOn(work, day) {
    return work.members.reduce((sum, member) => sum + reading.secondsForDay(member, day), 0);
  }

  // Semana calendario local: domingo a sábado, consistente con el resumen.
  function thisWeekSeconds(work) {
    const today = dateOffset(0);
    let total = 0;
    for (let i = 0; i <= today.getDay(); i++) {
      total += secondsOn(work, reading.dayKey(dateOffset(-i)));
    }
    return total;
  }

  function colorFor(id) {
    if (colors[id]) return colors[id];
    let hash = 0;
    for (const character of id) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    return fallbackColors[hash % fallbackColors.length];
  }

  function segmentsFor(date, entries, weekIds = null) {
    return entries.map(([id, work]) => ({ id, title: work.title || id,
      seconds: secondsOn(work, date),
      // La ventana histórica sigue mostrando todos los minutos, pero no
      // crea nuevas categorías en la leyenda de la semana actual.
      color: weekIds && !weekIds.has(id) ? '#bcc1b8' : colorFor(id) }))
      .filter(item => item.seconds > 0);
  }

  function renderLegend(entries) {
    const target = document.getElementById('work-legend');
    target.replaceChildren();
    if (!entries.length) {
      target.append(make('span', 'legend-empty', 'Todavía no hay lecturas esta semana.'));
      return;
    }
    entries.forEach(([id, work]) => {
      const entry = make('span', 'legend-entry');
      const dot = make('i', 'color-dot');
      dot.style.backgroundColor = colorFor(id);
      dot.setAttribute('aria-hidden', 'true');
      entry.append(dot, make('span', '', work.title || id));
      target.append(entry);
    });
  }

  function renderDaily(entries, thisWeekEntries) {
    const target = document.getElementById('daily-chart');
    target.replaceChildren();
    const active = new Set(thisWeekEntries.map(([id]) => id));
    const items = Array.from({ length: 14 }, (_, i) => {
      const date = dateOffset(i - 13);
      const segments = segmentsFor(reading.dayKey(date), entries, active);
      return { date, segments, seconds: segments.reduce((sum, item) => sum + item.seconds, 0) };
    });
    const max = Math.max(60, ...items.map(item => item.seconds));
    items.forEach(({ date, seconds, segments }, i) => {
      const wrapper = make('div', 'day' + (i === 13 ? ' today' : ''));
      const value = make('span', 'day-value', seconds > 0 ? `${Math.round(seconds / 60)}m` : '–');
      const track = make('div', 'day-bar-wrap');
      const bar = make('div', 'day-bar');
      bar.style.height = `${100 * seconds / max}%`;
      segments.forEach(segment => {
        const piece = make('div', 'day-segment');
        piece.style.height = `${100 * segment.seconds / seconds}%`;
        piece.style.backgroundColor = segment.color;
        piece.title = `${segment.title}: ${reading.format(segment.seconds)}`;
        bar.append(piece);
      });
      track.append(bar);
      wrapper.append(value, track, make('span','day-name',dayLabels[date.getDay()]),make('span','day-date',String(date.getDate())));
      wrapper.title = `${date.toLocaleDateString('es', {day:'numeric',month:'long',year:'numeric'})}: ${reading.format(seconds)}${segments.length ? '\n' + segments.map(segment => `${segment.title}: ${reading.format(segment.seconds)}`).join('\n') : ''}`;
      wrapper.setAttribute('aria-label', wrapper.title);
      target.append(wrapper);
    });
  }

  function renderWeekly(data, entries) {
    const target = document.getElementById('weekly-chart');
    target.replaceChildren();
    const currentSunday = dateOffset(0);
    currentSunday.setDate(currentSunday.getDate() - currentSunday.getDay());
    const weeks = Array.from({length:8}, (_, i) => {
      const sunday = new Date(currentSunday);
      sunday.setDate(sunday.getDate() - (7 - i) * 7);
      const workSeconds = new Map(entries.map(([id]) => [id, 0]));
      for (let d = 0; d < 7; d++) {
        const date = new Date(sunday);
        date.setDate(date.getDate() + d);
        entries.forEach(([id, work]) => workSeconds.set(id,
          workSeconds.get(id) + secondsOn(work, reading.dayKey(date))));
      }
      const saturday = new Date(sunday);
      saturday.setDate(saturday.getDate() + 6);
      const seconds = [...workSeconds.values()].reduce((sum, value) => sum + value, 0);
      return { label:`${formatDate(sunday)} – ${formatDate(saturday)}`, seconds,
        segments: entries.map(([id, work]) => ({ id, title: work.title || id, seconds: workSeconds.get(id), color: colorFor(id) }))
          .filter(item => item.seconds > 0) };
    });
    const max = Math.max(60,...weeks.map(item => item.seconds));
    weeks.forEach(item => {
      const row = make('div','week');
      const track = make('div','week-track');
      const fill = make('div','week-fill');
      fill.style.width = `${100 * item.seconds / max}%`;
      item.segments.forEach(segment => {
        const piece = make('span', 'week-segment');
        piece.style.width = `${100 * segment.seconds / item.seconds}%`;
        piece.style.backgroundColor = segment.color;
        piece.title = `${segment.title}: ${reading.format(segment.seconds)}`;
        fill.append(piece);
      });
      track.append(fill);
      row.append(make('span','week-label',item.label),track,make('span','week-value',reading.format(item.seconds)));
      target.append(row);
    });
  }

  function renderWorks(entries) {
    const target = document.getElementById('works-list');
    target.replaceChildren();
    if (!entries.length) {
      target.append(make('p','empty','Todavía no hay lecturas registradas. El contador comienza cuando entrás a una obra.'));
      return;
    }
    entries.forEach(([id,work]) => {
      const row = make('div','work-row');
      const title = make('span', 'work-name');
      const dot = make('i', 'color-dot');
      dot.style.backgroundColor = colorFor(id);
      dot.setAttribute('aria-hidden', 'true');
      const name = make(links[id] ? 'a':'span', '', work.title || id);
      if (links[id]) name.href = links[id];
      title.append(dot, name);
      row.append(title,make('strong','',reading.format(work.totalSeconds)));
      target.append(row);
    });
  }

  function render() {
    const data = reading.read();
    const entries = workEntries(data);
    const thisWeekEntries = entries
      .filter(([, work]) => thisWeekSeconds(work) > 0)
      .sort((a, b) => thisWeekSeconds(b[1]) - thisWeekSeconds(a[1]) || a[0].localeCompare(b[0]));
    document.getElementById('today-total').textContent = reading.format(reading.secondsForDate(data,reading.dayKey()));
    let week = 0;
    const today = dateOffset(0);
    for (let i=0; i<=today.getDay(); i++) {
      week += reading.secondsForDate(data, reading.dayKey(dateOffset(-i)));
    }
    document.getElementById('week-total').textContent = reading.format(week);
    document.getElementById('all-total').textContent = reading.format(
      Object.values(data.works).reduce((sum,work) => sum + reading.secondsForWork(work),0));
    renderLegend(thisWeekEntries);
    renderDaily(entries, thisWeekEntries);
    renderWeekly(data, entries);
    renderWorks(entries);
  }

  document.getElementById('export-reading').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(reading.read(),null,2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'edicion-viva-lecturas.json';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url),1000);
  });

  const file = document.getElementById('reading-file');
  document.getElementById('import-reading').addEventListener('click', () => file.click());
  file.addEventListener('change', async () => {
    const selected = file.files?.[0];
    if (!selected) return;
    const feedback = document.getElementById('reading-feedback');
    try {
      reading.merge(JSON.parse(await selected.text()));
      feedback.textContent = 'Registro importado. Se conservaron las sesiones que ya estaban guardadas.';
      render();
    } catch { feedback.textContent = 'No se pudo importar ese archivo JSON.'; }
    file.value = '';
  });

  window.addEventListener('storage', render);
  window.addEventListener('edicion-viva:reading-updated', render);
  render();
})();
