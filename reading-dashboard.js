(() => {
  'use strict';
  const reading = window.EdicionVivaReading;
  const dayLabels = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const links = { 'plauto-aulularia': './autores/plauto/aulularia/' };
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

  function renderDaily(data) {
    const target = document.getElementById('daily-chart');
    target.replaceChildren();
    const items = Array.from({ length: 14 }, (_, i) => {
      const date = dateOffset(i - 13);
      return { date, seconds: reading.secondsForDate(data, reading.dayKey(date)) };
    });
    const max = Math.max(60, ...items.map(item => item.seconds));
    items.forEach(({ date, seconds }, i) => {
      const wrapper = make('div', 'day' + (i === 13 ? ' today' : ''));
      const value = make('span', 'day-value', seconds > 0 ? `${Math.round(seconds / 60)}m` : '–');
      const track = make('div', 'day-bar-wrap');
      const bar = make('div', 'day-bar');
      bar.style.height = `${seconds ? Math.max(3, 100 * seconds / max) : 0}%`;
      track.append(bar);
      wrapper.append(value, track, make('span','day-name',dayLabels[date.getDay()]),make('span','day-date',String(date.getDate())));
      wrapper.title = `${date.toLocaleDateString('es', {day:'numeric',month:'long',year:'numeric'})}: ${reading.format(seconds)}`;
      wrapper.setAttribute('aria-label', wrapper.title);
      target.append(wrapper);
    });
  }

  function renderWeekly(data) {
    const target = document.getElementById('weekly-chart');
    target.replaceChildren();
    const currentMonday = dateOffset(0);
    const shift = (currentMonday.getDay() + 6) % 7;
    currentMonday.setDate(currentMonday.getDate() - shift);
    const weeks = Array.from({length:8}, (_, i) => {
      const monday = new Date(currentMonday);
      monday.setDate(monday.getDate() - (7 - i) * 7);
      let seconds = 0;
      for (let d = 0; d < 7; d++) {
        const date = new Date(monday);
        date.setDate(date.getDate() + d);
        seconds += reading.secondsForDate(data, reading.dayKey(date));
      }
      const sunday = new Date(monday);
      sunday.setDate(sunday.getDate() + 6);
      return { label:`${formatDate(monday)} – ${formatDate(sunday)}`, seconds };
    });
    const max = Math.max(60,...weeks.map(item => item.seconds));
    weeks.forEach(item => {
      const row = make('div','week');
      const track = make('div','week-track');
      const fill = make('div','week-fill');
      fill.style.width = `${100 * item.seconds / max}%`;
      track.append(fill);
      row.append(make('span','week-label',item.label),track,make('span','week-value',reading.format(item.seconds)));
      target.append(row);
    });
  }

  function renderWorks(data) {
    const target = document.getElementById('works-list');
    target.replaceChildren();
    const works = Object.entries(data.works).filter(([,work]) => reading.secondsForWork(work) > 0)
      .sort(([,a],[,b]) => reading.secondsForWork(b) - reading.secondsForWork(a));
    if (!works.length) {
      target.append(make('p','empty','Todavía no hay lecturas registradas. El contador comienza cuando entrás a una obra.'));
      return;
    }
    works.forEach(([id,work]) => {
      const row = make('div','work-row');
      const name = make(links[id] ? 'a':'span', '', work.title || id);
      if (links[id]) name.href = links[id];
      row.append(name,make('strong','',reading.format(reading.secondsForWork(work))));
      target.append(row);
    });
  }

  function render() {
    const data = reading.read();
    document.getElementById('today-total').textContent = reading.format(reading.secondsForDate(data,reading.dayKey()));
    let week = 0;
    for (let i=0;i<7;i++) week += reading.secondsForDate(data,reading.dayKey(dateOffset(-i)));
    document.getElementById('week-total').textContent = reading.format(week);
    document.getElementById('all-total').textContent = reading.format(
      Object.values(data.works).reduce((sum,work) => sum + reading.secondsForWork(work),0));
    renderDaily(data);
    renderWeekly(data);
    renderWorks(data);
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
