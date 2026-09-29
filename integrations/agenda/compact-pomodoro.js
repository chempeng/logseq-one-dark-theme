/* Optional Agenda display helper. Saved Logseq blocks are never changed. */
(() => {
  const document = window.parent.document;
  const selector = 'a.external-link[href^="#agenda-pomo://"]';
  const pomodoroLabel = /^(🍅+)(?:×(\d+))?\s+(\d+min)$/u;

  function compact(anchor) {
    if (anchor.querySelector(':scope > .od-pomo-icon')) return;
    const match = pomodoroLabel.exec(anchor.textContent.trim());
    if (!match) return;

    const count = Number(match[2]) || Array.from(match[1]).length;
    const icon = document.createElement('span');
    icon.className = 'od-pomo-icon';
    icon.textContent = '🍅';
    icon.style.pointerEvents = 'none';
    anchor.replaceChildren(icon, document.createTextNode(`${count > 1 ? `×${count}` : ''} ${match[3]}`));
  }

  function scan(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches(selector)) compact(node);
    node.querySelectorAll(selector).forEach(compact);
  }

  const root = document.documentElement;
  scan(root);
  new MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type === 'characterData') {
        const anchor = change.target.parentElement?.closest(selector);
        if (anchor) compact(anchor);
      } else {
        change.addedNodes.forEach(scan);
      }
    }
  }).observe(root, { childList: true, characterData: true, subtree: true });
})();
