// File: webToCaseUtils.js
function caricaPrefissiTelefonici(selectId, url, t) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const select = document.getElementById(selectId);
      if (!select) return;

      const defaultCode = "+39";
      select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;

      data.forEach((entry) => {
        const prefisso = `+${entry.code}`;
        const opt = document.createElement("option");
        opt.value = prefisso;
        opt.textContent = `${prefisso} (${entry.country})`;

        if (prefisso === defaultCode) {
          opt.selected = true;
        }

        select.appendChild(opt);
      });
    })
    .catch((error) =>
      console.error("Errore nel caricamento prefissi telefonici:", error)
    );
}

var allAziende = [];
// Caricamento aziende da Static Resource
function caricaAziendeTPL(selectId, url, t) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const select = document.getElementById(selectId);
      if (!select) return;
      select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;
      data.aziende.forEach((account) => {
        const opt = document.createElement("option");
        opt.value = `${account.id}`;
        opt.textContent = account.name;
        allAziende.push({ id: account.id, name: account.name });

        select.appendChild(opt);
      });
    })
    .catch((error) =>
      console.error("Errore nel caricamento aziende TPL:", error)
    );
}

// Caricamento servizi filtrati per azienda
function caricaServizi(selectId, url, idAzienda, lang, t) {
  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder("utf-8");
      const jsonText = decoder.decode(buffer);
      return JSON.parse(jsonText);
    })
    .then((data) => {
      const select = document.getElementById(selectId);
      if (!select) return;
      select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;

      const serviziFiltrati = data.filter(
        (s) =>
          !idAzienda ||
          s.IdAzienda__c === idAzienda ||
          idAzienda === "001bU000007Q8fWQAS" // TPL FVG
      );

    

      serviziFiltrati.forEach((servizio) => {
        const opt = document.createElement("option");
        opt.value = servizio.Id;
        opt.textContent =
          lang === "en" && servizio.Nome_in_inglese__c
            ? servizio.Nome_in_inglese__c
            : servizio.Name;

        select.appendChild(opt);
      });
    })
    .catch((error) => console.error("Errore nel caricamento servizi:", error));
}

// Caricamento linee da servizio
function caricaLinee(selectId, url, servizioId, aziendaId, t) {
  const select = document.getElementById(selectId);
  select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;

  var qsServizio = servizioId;
  if (aziendaId == "001bU000007Q8fWQAS" /*TPL FVG*/) qsServizio = "";

  fetch(url + qsServizio)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder("utf-8");
      const jsonText = decoder.decode(buffer);
      return JSON.parse(jsonText);
    })
    .then((data) => {
      data.forEach((linea) => {
        if (aziendaId && aziendaId !== "001bU000007Q8fWQAS" /*TPL FVG*/) {
          if (linea.Azienda_TPL__c && aziendaId === linea.Azienda_TPL__c) {
            const opt = document.createElement("option");
            opt.value = linea.Id;
            opt.textContent = linea.Name || linea.Codice_Linea__c;
            select.appendChild(opt);
          }
        } else {
          const opt = document.createElement("option");
          opt.value = linea.Id;
          opt.textContent = linea.Name || linea.Codice_Linea__c;
          select.appendChild(opt);
        }
      });
    })
    .catch((error) => console.error("Errore nel caricamento linee:", error));
}

// Caricamento fermate da linea
function caricaFermate(selectId, url, lineaId, t) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;
  if (!lineaId) return;

  fetch(url + lineaId)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const decoder = new TextDecoder("utf-8");
      const jsonText = decoder.decode(buffer);
      return JSON.parse(jsonText);
    })
    .then((data) => {
      data.forEach((fermata) => {
        const opt = document.createElement("option");
        opt.value = fermata.Id;
        opt.textContent = fermata.Name;
        select.appendChild(opt);
      });
    })
    .catch((error) => console.error("Errore nel caricamento fermate:", error));
}
//carica i comuni per altro campo
function caricaDatalistComuni(url, lang, comuneListId) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const comuniList = document.getElementById(comuneListId);
      if (!comuniList) return;
      comuniList.innerHTML = "";
      data.comuni.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = `${c.nome} (${c.cap} - ${c.provincia})`;
        comuniList.appendChild(opt);
      });
    })
    .catch((error) =>
      console.error("Errore nel caricamento comuni/nazioni:", error)
    );
}
// Caricamento comuni e nazioni
function caricaDatalistComuniENazioni(
  url,
  lang,
  comuneListId,
  nazioniListId,
  campoNazioneId
) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const comuniList = document.getElementById(comuneListId);
      if (!comuniList) return;
      comuniList.innerHTML = "";
      data.comuni.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = `${c.nome} (${c.cap} - ${c.provincia})`;
        comuniList.appendChild(opt);
      });

      const nazioniList = document.getElementById(nazioniListId);
      nazioniList.innerHTML = "";
      data.nazioni.forEach((n) => {
        const opt = document.createElement("option");
        opt.value = n[lang] || n.it;
        nazioniList.appendChild(opt);
      });

      const campoNazione = document.getElementById(campoNazioneId);
      const italia = data.nazioni.find(
        (n) => n.it === "ITALIA" || n.en === "ITALY"
      );
      if (campoNazione && italia)
        campoNazione.value = italia[lang] || italia.it;
    })
    .catch((error) =>
      console.error("Errore nel caricamento comuni/nazioni:", error)
    );
}

// Formattazione data evento per Salesforce
function formattaDataEvento(inputId, outputId) {
  const dataVisibile = document.getElementById(inputId);
  const campoSalesforce = document.getElementById(outputId);

  if (!dataVisibile || !campoSalesforce) return;

  const valore = dataVisibile.value;
  if (!valore) {
    campoSalesforce.value = "";
    return;
  }

  const data = new Date(valore);

  let formato;
  if (dataVisibile.type === "date") {
    // Solo data
    formato = data.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else {
    // datetime-local o altri
    formato = data.toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  campoSalesforce.value = formato;
}

// Toggle indirizzo in base alla nazione
function toggleIndirizzo(nazioneId, wrapperId, lang, invertedLogic) {
  const nazione = document.getElementById(nazioneId).value.toLowerCase();
  const wrapper = document.getElementById(wrapperId);
  const isStraniero = !(nazione === "italia" || nazione === "italy");
  if (invertedLogic === true)
    wrapper.style.display = isStraniero ? "block" : "none";
  else wrapper.style.display = isStraniero ? "none" : "block";

  const elements = wrapper.querySelectorAll("label");
  elements.forEach((el) => {
    if (isStraniero) {
      el.classList.remove("required");
    } else {
      el.classList.add("required");
    }
  });

  if (!nazione || nazione.length === 0) {
    document.getElementById(nazioneId).value =
      lang === "it" ? "ITALIA" : "ITALY";
  }
}

// Toggle visibilità ragione sociale
function toggleRagioneSociale(tipoId, wrapperId, valoriPrivato) {
  const tipoElem = document.getElementById(tipoId);
  let tipo = tipoElem.value?.toLowerCase().trim();

  if (tipo === "--nessuno--") {
    tipoElem.value = "Privato cittadino";
    tipo = "privato cittadino";
  }
  if (tipo === "--none--") {
    tipoElem.value = "Individual";
    tipo = "individual";
  }

  if (!valoriPrivato) return;

  const valoriNormalizzati = valoriPrivato.map((val) =>
    val.toLowerCase().trim()
  );
  const isPrivato = valoriNormalizzati.includes(tipo);

  document.getElementById(wrapperId).style.display = isPrivato
    ? "none"
    : "block";

  const label = document.getElementById("label_ragioneSociale");
  if (isPrivato) {
    label.classList.remove("required");
  } else {
    label.classList.add("required");
  }
}

// Inizializzazione tooltip
/* function initTooltips() {
  document.querySelectorAll('.tooltip-icon').forEach(el => {
    if (el._tippy) el._tippy.destroy();
  });
  tippy('.tooltip-icon', { placement: 'top', animation: 'scale', theme: 'light-border' });
}*/
function initTooltips(t = null) {
  // Rimuove tutti i tooltip esistenti
  document.querySelectorAll(".tooltip-icon").forEach((el) => {
    if (el._tippy) el._tippy.destroy();
  });

  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  // Opzioni base per Tippy
  const commonOptions = {
    placement: "top",
    animation: "scale",
    theme: "light-border",
    allowHTML: true,
    maxWidth: 600,
    interactive: true,
    trigger: isMobile ? "click" : "mouseenter focus",
    hideOnClick: true,
    zIndex: 9999,
    duration: [200, 100] // animazione più veloce
 
  };

  // Se non abbiamo i18next, fallback a tooltip statici
  if (!t) {
    tippy(".tooltip-icon", commonOptions);
    return;
  }

  // Tooltip dinamici da dizionario i18next
  const allTooltips = t("tooltips", { returnObjects: true });

  for (const [campo, contenuto] of Object.entries(allTooltips)) {
    if (contenuto && contenuto.trim() !== "") {
      const icon = document.querySelector(`#label_${campo} .tooltip-icon`);
      if (icon) {
        tippy(icon, {
          ...commonOptions,
          content: contenuto,
        });
      }
    }
  }

    // 👇 Questo è il blocco che chiude i tooltip su tap fuori (solo mobile)
  if (isMobile) {
    document.addEventListener("click", (e) => {
      setTimeout(() => {
        document.querySelectorAll(".tooltip-icon").forEach((el) => {
          if (el._tippy && el !== e.target && !el.contains(e.target)) {
            el._tippy.hide();
          }
        });
      }, 5000); // aspetta 200ms prima di chiudere
    });
  }
  
  
}


// Validazione campi obbligatori
function validazioneCampiObbligatori(formId, t) {
  let hasError = false;
  let firstInvalid = null;

  document.querySelectorAll(`#${formId} label.required`).forEach((label) => {
    const inputId = label.getAttribute("for");
    const input = document.getElementById(inputId);
    const errorId = "error_" + inputId;

    // Se l'input non esiste o non è visibile, salta la validazione
    if (!input || input.offsetParent === null) return;

    let error = document.getElementById(errorId);
    if (!error) {
      error = document.createElement("div");
      error.id = errorId;
      error.className = "error-message";
      input.insertAdjacentElement("afterend", error);
    }

    input.classList.remove("error");
    input.removeAttribute("aria-invalid");
    error.textContent = "";

    let isEmpty = false;

    if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
      isEmpty = !input.value.trim();
    } else if (input.tagName === "SELECT") {
      isEmpty = !input.value;
    }

    if (isEmpty) {
      input.classList.add("error");
      input.setAttribute("aria-invalid", "true");
      const customMessage = input.getAttribute("data-error-message");
      error.textContent = customMessage || t("labels.erroreCampoObbligatorio");
      if (!firstInvalid) firstInvalid = input;
      hasError = true;
    }
  });

  if (firstInvalid) firstInvalid.focus();
  return !hasError;
}


function aggiornaEtichette(t, fields) {
  fields.forEach(([key, id]) => {
    const labelEl = document.getElementById(`label_${key}`);
    if (!labelEl) return;

    // --- Etichetta ---
    const labelText = t(`labels.${key}`) || key;

    // Rimuove tutto il contenuto esistente (utile se si fa un cambio lingua)
    labelEl.innerHTML = "";

    // Aggiunge testo etichetta
    labelEl.appendChild(document.createTextNode(labelText + " "));

    // --- Tooltip ---
    const tooltipText = t(`tooltips.${key}`, { defaultValue: "" });
    if (tooltipText && tooltipText.trim() !== "") {
      const tipEl = document.createElement("span");
      tipEl.className = "tooltip-icon";
      tipEl.setAttribute("data-tippy-content", tooltipText);
      tipEl.textContent = "?";
      labelEl.appendChild(tipEl);
    }

    // --- Required ---
    const isRequired = requiredFields.includes(key);
    labelEl.classList.remove("required");
    if (isRequired) {
      labelEl.classList.add("required");
    }
  });

  // Pulsante submit e checkbox "sì" (se presenti)
  document
    .getElementById("submitBtn")
    ?.setAttribute("value", t("labels.invia"));
  const siOption = document.getElementById("option_si");
  if (siOption) siOption.textContent = t("labels.si");

  initTooltips(t); // Attiva tippy.js
}

function validaCaptcha(t, errorContainerId = null) {
  const response = grecaptcha.getResponse();

  // Se è presente un contenitore errori, usalo, altrimenti fallback su alert
  if (!response) {
    const message =
      t?.("labels.erroreCampoObbligatorio") || "Devi compilare questo campo";

    if (errorContainerId) {
      const errorDiv = document.getElementById(errorContainerId);
      if (errorDiv) {
        errorDiv.textContent = `${message} (captcha)`;
        errorDiv.style.display = "block";
      }
    } else {
      alert(`${message} (captcha)`);
    }

    return false;
  }

  // Pulisce eventuali messaggi di errore precedenti
  if (errorContainerId) {
    const errorDiv = document.getElementById(errorContainerId);
    if (errorDiv) {
      errorDiv.textContent = "";
      errorDiv.style.display = "none";
    }
  }

  return true;
}

function estraiCampiDaLabel() {
  const labels = document.querySelectorAll('[id^="label_"]');
  const fields = [];

  labels.forEach((label) => {
    const logicalName = label.id.replace("label_", "");
    const forAttr = label.getAttribute("for");

    fields.push([logicalName, forAttr]);
  });

  return fields;
}

function validaCodiceFiscale(cf) {
  if (!cf) return false;
  cf = cf.toUpperCase();
  const regex =
    /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[A-EHLMPR-T]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/;
  return regex.test(cf);
}

function mostraErroreCampo(idCampo, messaggio) {
  const input = document.getElementById(idCampo);
  let error = document.getElementById("error_" + idCampo);

  if (!error) {
    error = document.createElement("div");
    error.id = "error_" + idCampo;
    error.className = "error-message";
    input.insertAdjacentElement("afterend", error);
  }

  input.classList.add("error");
  error.textContent = messaggio;
}

function validaCampoCodiceFiscale(idCampo, t) {
  const input = document.getElementById(idCampo);
  if (!input) return true;

  const valore = input.value.trim();
  const valido = validaCodiceFiscale(valore);

  // Rimuovi eventuali errori precedenti
  input.classList.remove("error");
  const erroreEsistente = document.getElementById("error_" + idCampo);
  if (erroreEsistente) erroreEsistente.textContent = "";

  if (valore && !valido) {
    const messaggio =
      t?.("labels.codiceFiscaleNonValido") || "Codice fiscale non valido";
    mostraErroreCampo(idCampo, messaggio);
    return false;
  }

  return true;
}

   function caricaOptionsTradotte(selectid,t, Options) {
        const selectTipoLuogo = document.getElementById(selectid);
        selectTipoLuogo.innerHTML = "";
        const options = t("labels."+Options, { returnObjects: true });

        options.forEach((opt, index) => {
          const optionEl = document.createElement("option");
          optionEl.textContent = opt;
          optionEl.value = opt;



          selectTipoLuogo.appendChild(optionEl);
        });

}


function enforceDatalistConstraint(inputEl, t) {
  if (!inputEl || !inputEl.list) {
    console.warn("Campo input non valido o senza datalist associata.");
    return;
  }

  const datalist = inputEl.list;
  const inputId = inputEl.id;

  inputEl.addEventListener("input", () => {
    const val = inputEl.value;
    const isValid = Array.from(datalist.options).some(opt => opt.value === val);

    const errorDiv = document.getElementById("error_" + inputId);

    if (!isValid && val.trim() !== "") {
      inputEl.classList.add("error");
      mostraErroreCampo(
        inputId,
        t?.("labels.valoreNonValidoDatalist") || "Seleziona un valore dalla lista"
      );
    } else {
      inputEl.classList.remove("error");
      if (errorDiv) errorDiv.textContent = "";
    }
  });
}

function aggiungiConfermaEmail() {
  const emailField = document.querySelector("#email");
  if (!emailField) return;

  // Crea nuovo campo conferma email
  const confirmField = emailField.cloneNode(true);
  confirmField.id = "EmailConfirm";
  confirmField.name = "EmailConfirm";
  confirmField.value = "";
  confirmField.required = true;

  // Crea etichetta localizzata
  const newLabel = document.createElement("label");
  newLabel.htmlFor = "EmailConfirm";
  newLabel.textContent = i18next.t('labels.email_confirm_label') || "Conferma email";

  // Messaggio di errore localizzato per mismatch
  const mismatchError = document.createElement("div");
  mismatchError.id = "emailMismatchError";
  mismatchError.style.color = "red";
  mismatchError.style.display = "none";
  mismatchError.textContent = i18next.t('labels.email_mismatch') || "Le email non coincidono.";

  // Messaggio di errore per email non valida
  const invalidError = document.createElement("div");
  invalidError.id = "emailInvalidError";
  invalidError.style.color = "red";
  invalidError.style.display = "none";
  invalidError.textContent = i18next.t('labels.email_invalid') || "Formato email non valido.";

  // Inserisci nel DOM
  emailField.parentNode.insertBefore(newLabel, emailField.nextSibling);
  emailField.parentNode.insertBefore(confirmField, newLabel.nextSibling);
  emailField.parentNode.insertBefore(mismatchError, confirmField.nextSibling);
  emailField.parentNode.insertBefore(invalidError, mismatchError.nextSibling);

  // Regex email semplice
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateEmails() {
    const email = emailField.value.trim();
    const confirm = confirmField.value.trim();
    const emailValid = emailRegex.test(email);
    const confirmValid = emailRegex.test(confirm);
    const match = email === confirm;

    // Mostra errore se uno dei due formati è errato
    const valid = emailValid && confirmValid;
    invalidError.style.display = valid ? "none" : "block";

    // Mostra errore se non coincidono (solo se sono entrambi validi)
    mismatchError.style.display = (valid && !match) ? "block" : "none";

    let validityMessage = "";
    if (!valid) {
      validityMessage = i18next.t('labels.email_invalid') || "Formato email non valido.";
    } else if (!match) {
      validityMessage = i18next.t('labels.email_mismatch') || "Le email non coincidono.";
    }
    confirmField.setCustomValidity(validityMessage);
  }

  emailField.addEventListener("input", validateEmails);
  confirmField.addEventListener("input", validateEmails);

  // Rimozione campo prima del submit
  const form = emailField.closest("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      validateEmails();
      if (!form.checkValidity()) {
        e.preventDefault(); // blocca invio se form non valido
        return;
      }

      // Se tutto è valido, rimuovi i campi aggiuntivi
      confirmField.remove();
      newLabel.remove();
      mismatchError.remove();
      invalidError.remove();
    });
  }
}

function caricaSottoOptions(appValue, t, reslabel, target) {
  const optionsMap = t("labels."+reslabel, { returnObjects: true });
  const select = document.getElementById(target);

  if (!select) return;

  // Svuota le opzioni
  select.innerHTML = `<option value="">${t("labels.seleziona")}</option>`;

  const sottoOpzioni = optionsMap[appValue] || [];

  sottoOpzioni.forEach((val) => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = val;
    select.appendChild(opt);
  });
}

function getCanonicalValueFromTranslation({
  translatedValue,
  translationPath, // es: "tipoSoggettoOptions"
  i18nextInstance,
  sourceLang = "it"
}) {
  if (!translatedValue || !translationPath || !i18nextInstance) return null;

  const pathParts = translationPath.split(".");
  let canonicalValues = i18nextInstance.getResource(sourceLang, "translation", pathParts[0]);

  // Naviga nella struttura se nested (es: labels.tipoSoggettoOptions)
  for (let i = 1; i < pathParts.length; i++) {
    if (!canonicalValues) return null;
    canonicalValues = canonicalValues[pathParts[i]];
  }

  if (!Array.isArray(canonicalValues)) return null;

  const currentLang = i18nextInstance.language;

  for (let i = 0; i < canonicalValues.length; i++) {
    const canonical = canonicalValues[i];
    const translated = i18nextInstance.t(`${translationPath}.${i}`, { lng: currentLang });

    if (translated.toLowerCase().trim() === translatedValue.toLowerCase().trim()) {
      return canonical;
    }
  }

  return null;
}

function toggleWrapperBySelectValue({
  selectId,
  valoriTrigger,
  logicalName,
  translationPath,
  i18nextInstance
}) {
  const selectElem = document.getElementById(selectId);
  if (!selectElem || !i18nextInstance) return;

  const selectedValue = selectElem.value?.toLowerCase().trim();
  if (!selectedValue) return;

  let tradotti = i18nextInstance.t(`labels.${translationPath}`, {
    returnObjects: true
  });

  // 🛡️ Verifica che sia un array
  if (!Array.isArray(tradotti)) {
    tradotti = [];
  }

  const tradottiNormalizzati = tradotti.map((v) => v.toLowerCase().trim());
  const valoriNormalizzati = valoriTrigger.map((v) => v.toLowerCase().trim());

  const matchIndex = tradottiNormalizzati.findIndex((val) => val === selectedValue);
  const valoreCanonico = matchIndex >= 0 ? tradotti[matchIndex] : selectedValue;

  const isTriggerMatch = valoriNormalizzati.includes(valoreCanonico.toLowerCase());

  const wrapperId = `${logicalName}Wrapper`;
  const labelId = `label_${logicalName}`;

  const wrapper = document.getElementById(wrapperId);
  if (wrapper) wrapper.style.display = isTriggerMatch ? "block" : "none";

  const label = document.getElementById(labelId);
  if (label) {
    label.classList.toggle("required", isTriggerMatch);
  }
}
function toggleCampi({
  selectId,
  i18nextInstance,
  configShowHide
}) {
  const selectElem = document.getElementById(selectId);
  if (!selectElem || !i18nextInstance) return;

  const selectedTranslated = selectElem.value?.trim();
  if (!selectedTranslated) return;

  const config = i18nextInstance.t('labels.'+configShowHide, {
    returnObjects: true
  });

  if (!config || typeof config !== 'object') return;

  const chiaviPossibili = Object.keys(config);
  const traduzioniNormalizzate = chiaviPossibili.map(v => v.toLowerCase().trim());
  const indice = traduzioniNormalizzate.indexOf(selectedTranslated.toLowerCase());

  if (indice === -1) return;

  const voceLogica = chiaviPossibili[indice];
  const { show = [], hide = [] } = config[voceLogica];

  // Mostra e imposta required
  show.forEach(logicalName => {
    const wrapper = document.getElementById(`${logicalName}Wrapper`);
    const label = document.getElementById(`label_${logicalName}`);
    if (wrapper) wrapper.style.display = "block";
    if (label) label.classList.add("required");
  });

  // Nascondi, rimuovi required e svuota i valori
  hide.forEach(logicalName => {
    const wrapper = document.getElementById(`${logicalName}Wrapper`);
    const label = document.getElementById(`label_${logicalName}`);
    const field = document.querySelector(`#${logicalName}Wrapper input, #${logicalName}Wrapper select, #${logicalName}Wrapper textarea`);

    if (wrapper) wrapper.style.display = "none";
    if (label) label.classList.remove("required");
    if (field) {
      if (field.tagName === "SELECT") {
        field.selectedIndex = 0; // seleziona "--Seleziona--"
      } else {
        field.value = "";
      }
    }
  });
}
