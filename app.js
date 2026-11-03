document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current date in Venezuela format (DD/MM/YYYY)
  const now = new Date();
  const formattedDate = now.toLocaleDateString('es-VE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const dateNoteEl = document.getElementById('currentDateNote');
  if (dateNoteEl) {
    dateNoteEl.textContent = formattedDate;
  }

  const footerYearEl = document.getElementById('footerYear');
  if (footerYearEl) {
    footerYearEl.textContent = now.getFullYear();
  }

  // 2. Tabs Navigation Logic
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const gotoButtons = document.querySelectorAll('.btn-link-tab');

  function activateTab(targetId) {
    tabButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-tab') === targetId;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === targetId);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      activateTab(targetTab);
    });
  });

  gotoButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-goto');
      activateTab(targetTab);
      const reglamentoSection = document.getElementById('reglamento');
      if (reglamentoSection) {
        reglamentoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 3. Copy Helper Function
  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const tempArea = document.createElement('textarea');
      tempArea.value = text;
      document.body.appendChild(tempArea);
      tempArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempArea);
      return true;
    }
  }

  // 4. Modal Logic for Binance P2P Templates
  const templatesModal = document.getElementById('templatesModal');
  const openTemplatesBtn = document.getElementById('openTemplatesBtn');
  const closeTemplatesBtn = document.getElementById('closeTemplatesBtn');
  const copyTemplateBtns = document.querySelectorAll('.btn-copy-template');

  if (openTemplatesBtn && templatesModal) {
    openTemplatesBtn.addEventListener('click', () => {
      templatesModal.classList.remove('hidden');
      templatesModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeTemplatesBtn && templatesModal) {
    closeTemplatesBtn.addEventListener('click', () => {
      templatesModal.classList.add('hidden');
      templatesModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (templatesModal) {
    templatesModal.addEventListener('click', (e) => {
      if (e.target === templatesModal) {
        templatesModal.classList.add('hidden');
        templatesModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  copyTemplateBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-target');
      const textarea = document.getElementById(targetId);
      if (textarea) {
        await copyTextToClipboard(textarea.value);
        const originalText = btn.textContent;
        btn.textContent = '¡Copiado!';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 1800);
      }
    });
  });
});

