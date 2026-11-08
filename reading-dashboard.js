(() => {
  'use strict';
  const reading = window.EdicionVivaReading;
  const dayLabels = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const links = {
    'plauto-aulularia': './autores/plauto/aulularia/',
    'shakespeare-coriolanus': '../shakespeare-edicion-viva/#coriolanus'
  };
  const colors = {
    'plauto-aulularia': '#78927c',
    'shakespeare-coriolanus': '#ad7059'
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

  function workEntries(data) {
    return Object.entries(data.works || {}).filter(([, work]) => reading.secondsForWork(work) > 0)
      .sort(([idA, a], [idB, b]) => reading.secondsForWork(b) - reading.secondsForWork(a) || idA.localeCompare(idB));
  }

  function colorFor(id, entries) {
    if (colors[id]) return colors[id];
    const others = entries.filter(([workId]) => !colors[workId]);
    return fallbackColors[Math.max(0, others.findIndex(([workId]) => workId === id)) % fallbackColors.length];
  }

  function segmentsFor(data, date, entries) {
    return entries.map(([id, work]) => ({ id, title: work.title || id,
      seconds: reading.secondsForDay(work, date), color: colorFor(id, entries) }))
      .filter(item => item.seconds > 0);
  }

  function renderLegend(entries) {
    const target = document.getElementById('work-legend');
    target.replaceChildren();
    entries.forEach(([id, work]) => {
      const entry = make('span', 'legend-entry');
      const dot = make('i', 'color-dot');
      dot.style.backgroundColor = colorFor(id, entries);
      dot.setAttribute('aria-hidden', 'true');
      entry.append(dot, make('span', '', work.title || id));
      target.append(entry);
    });
  }

  function renderDaily(data, entries) {
    const target = document.getElementById('daily-chart');
    target.replaceChildren();
    const items = Array.from({ length: 14 }, (_, i) => {
      const date = dateOffset(i - 13);
      const segments = segmentsFor(data, reading.dayKey(date), entries);
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
    const currentMonday = dateOffset(0);
    const shift = (currentMonday.getDay() + 6) % 7;
    currentMonday.setDate(currentMonday.getDate() - shift);
    const weeks = Array.from({length:8}, (_, i) => {
      const monday = new Date(currentMonday);
      monday.setDate(monday.getDate() - (7 - i) * 7);
      const workSeconds = new Map(entries.map(([id]) => [id, 0]));
      for (let d = 0; d < 7; d++) {
        const date = new Date(monday);
        date.setDate(date.getDate() + d);
        entries.forEach(([id, work]) => workSeconds.set(id,
          workSeconds.get(id) + reading.secondsForDay(work, reading.dayKey(date))));
      }
      const sunday = new Date(monday);
      sunday.setDate(sunday.getDate() + 6);
      const seconds = [...workSeconds.values()].reduce((sum, value) => sum + value, 0);
      return { label:`${formatDate(monday)} – ${formatDate(sunday)}`, seconds,
        segments: entries.map(([id, work]) => ({ id, title: work.title || id, seconds: workSeconds.get(id), color: colorFor(id, entries) }))
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
      dot.style.backgroundColor = colorFor(id, entries);
      dot.setAttribute('aria-hidden', 'true');
      const name = make(links[id] ? 'a':'span', '', work.title || id);
      if (links[id]) name.href = links[id];
      title.append(dot, name);
      row.append(title,make('strong','',reading.format(reading.secondsForWork(work))));
      target.append(row);
    });
  }

  function render() {
    const data = reading.read();
    const entries = workEntries(data);
    document.getElementById('today-total').textContent = reading.format(reading.secondsForDate(data,reading.dayKey()));
    let week = 0;
    for (let i=0;i<7;i++) week += reading.secondsForDate(data,reading.dayKey(dateOffset(-i)));
    document.getElementById('week-total').textContent = reading.format(week);
    document.getElementById('all-total').textContent = reading.format(
      Object.values(data.works).reduce((sum,work) => sum + reading.secondsForWork(work),0));
    renderLegend(entries);
    renderDaily(data, entries);
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
  render();
})();
