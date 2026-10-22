(function () {
  const MESSAGGIO_ERRORE = {
    it: "Per inviare il modulo, conferma di aver letto l'informativa sulla privacy.",
    en: "To submit the form, please confirm that you have read the privacy policy."
  };

  function lingua() {
    const lng = (window.i18next && window.i18next.language) || document.documentElement.lang || "it";
    return lng.toLowerCase().startsWith("en") ? "en" : "it";
  }

  function creaToggle(selectEl) {
    // Il consenso obbligatorio (privacy) è quello marcato con data-iniziale="si" nei moduli:
    // parte acceso, il cliente può spegnerlo, ma se è spento il modulo non si invia.
    const obbligatorio = selectEl.dataset.iniziale === "si" || selectEl.dataset.obbligatorio === "si";
    const iniziale = selectEl.dataset.iniziale === "si" ? "Si/Yes" : "No";

    selectEl.value = iniziale;
    selectEl.style.display = "none";

    // Etichetta del consenso: testo leggibile invece del maiuscolo verde
    const label = document.querySelector(`label[for="${selectEl.id}"]`);
    if (label) label.classList.add("consenso-testo");

    const wrapper = document.createElement("div");
    wrapper.className = "toggle-consenso";
    wrapper.setAttribute("role", "switch");
    wrapper.setAttribute("tabindex", "0");

    const track = document.createElement("div");
    track.className = "toggle-consenso-track";

    const thumb = document.createElement("div");
    thumb.className = "toggle-consenso-thumb";
    track.appendChild(thumb);

    const labelText = document.createElement("span");
    labelText.className = "toggle-consenso-label";

    wrapper.appendChild(track);
    wrapper.appendChild(labelText);
    selectEl.parentNode.insertBefore(wrapper, selectEl.nextSibling);

    // Raggruppa testo e interruttore in un unico blocco
    const blocco = document.createElement("div");
    blocco.className = "consenso-blocco";
    if (obbligatorio) blocco.classList.add("is-obbligatorio");
    const primo = label && label.parentNode === selectEl.parentNode ? label : selectEl;
    primo.parentNode.insertBefore(blocco, primo);
    if (label && label.parentNode === selectEl.parentNode) blocco.appendChild(label);
    blocco.appendChild(selectEl);
    blocco.appendChild(wrapper);

    // Messaggio di errore sotto il consenso obbligatorio
    let errore = null;
    if (obbligatorio) {
      errore = document.createElement("div");
      errore.className = "consenso-errore";
      errore.setAttribute("role", "alert");
      errore.style.display = "none";
      blocco.parentNode.insertBefore(errore, blocco.nextSibling);
    }

    function nascondiErrore() {
      if (!errore) return;
      errore.style.display = "none";
      errore.textContent = "";
      blocco.classList.remove("has-error");
    }

    function mostraErrore() {
      if (!errore) return;
      errore.textContent = MESSAGGIO_ERRORE[lingua()];
      errore.style.display = "block";
      blocco.classList.add("has-error");
    }

    function aggiorna(valore) {
      selectEl.value = valore;
      wrapper.setAttribute("aria-checked", valore === "Si/Yes");
      if (valore === "Si/Yes") {
        track.classList.add("is-on");
        labelText.textContent = "Sì";
        nascondiErrore();
      } else {
        track.classList.remove("is-on");
        labelText.textContent = "No";
      }
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    aggiorna(iniziale);

    wrapper.addEventListener("click", () => {
      aggiorna(selectEl.value === "Si/Yes" ? "No" : "Si/Yes");
    });

    wrapper.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        aggiorna(selectEl.value === "Si/Yes" ? "No" : "Si/Yes");
      }
    });

    let startX = null;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = endX - startX;
      if (diff > 15) aggiorna("Si/Yes");
      else if (diff < -15) aggiorna("No");
      else aggiorna(selectEl.value === "Si/Yes" ? "No" : "Si/Yes");
      startX = null;
    });

    // Blocca l'invio del modulo se il consenso obbligatorio non è attivo
    if (obbligatorio) {
      const form = selectEl.closest("form");
      if (form) {
        form.addEventListener("submit", (e) => {
          if (selectEl.value !== "Si/Yes") {
            e.preventDefault();
            mostraErrore();
            blocco.scrollIntoView({ behavior: "smooth", block: "center" });
            wrapper.focus({ preventScroll: true });
          }
        });
      }
    }
  }

  function inizializza() {
    document.querySelectorAll("select.toggle-consenso-select").forEach(creaToggle);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inizializza);
  } else {
    inizializza();
  }
})();