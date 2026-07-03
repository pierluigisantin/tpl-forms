(function () {
  function creaToggle(selectEl) {
    const iniziale = selectEl.dataset.iniziale === "si" ? "Si/Yes" : "No";
    selectEl.value = iniziale;
    selectEl.style.display = "none";

    const wrapper = document.createElement("div");
    wrapper.className = "toggle-consenso";
    wrapper.setAttribute("role", "switch");
    wrapper.setAttribute("tabindex", "0");

    const track = document.createElement("div");
    track.className = "toggle-consenso-track";
    if (iniziale === "Si/Yes") track.classList.add("is-on");

    const thumb = document.createElement("div");
    thumb.className = "toggle-consenso-thumb";
    track.appendChild(thumb);

    const labelText = document.createElement("span");
    labelText.className = "toggle-consenso-label";
    labelText.textContent = iniziale === "Si/Yes" ? "Sì" : "No";

    wrapper.appendChild(track);
    wrapper.appendChild(labelText);
    selectEl.parentNode.insertBefore(wrapper, selectEl.nextSibling);

    function aggiorna(valore) {
      selectEl.value = valore;
      wrapper.setAttribute("aria-checked", valore === "Si/Yes");
      if (valore === "Si/Yes") {
        track.classList.add("is-on");
        labelText.textContent = "Sì";
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