const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI DI CHI PRESENTA LA RICHIESTA",
        introanagrafica: "Se l'intestatario dell'abbonamento scolastico è minorenne, inserisci i dati di un genitore o del tutore. Se è maggiorenne, inserisci i dati dello studente.",
        legendaabbonamento: "DATI DELL'ABBONAMENTO SCOLASTICO DA INTEGRARE",
        legendasoluzione: "SOLUZIONE DA INTEGRARE CON IL TUO ABBONAMENTO",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall'elenco.",
        seleziona: "--Seleziona--",
        nome: "Nome",
        cognome: "Cognome",
        mail: "E-mail",
        email_confirm_label: "Ripeti e-mail",
        email_invalid: "Verifica l'indirizzo e-mail.",
        email_mismatch: "Verifica l'indirizzo e-mail.",
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        numerotesserinoidentificativo: "Numero di tesserino identificativo dello studente intestatario",
        nomeintestatario: "Nome dello studente intestatario",
        cognomeintestatario: "Cognome dello studente intestatario",
        percorsoabbonamento: "Percorso indicato sull'abbonamento",
        descrizione: "Descrivi la soluzione che hai individuato",
        introdescrizione: `<p>Se hai individuato una linea o un percorso più adatti alle esigenze dello studente rispetto a quelli previsti dall'abbonamento, indica con esattezza:</p>
          <ol>
            <li>i giorni della settimana in cui vorresti usare la soluzione alternativa;</li>
            <li>la linea che intendi usare;</li>
            <li>la località di origine e la località di destinazione del tratto da integrare, non previsto dall'abbonamento già in tuo possesso.</li>
          </ol>
          <p>Per cercare una soluzione alternativa puoi usare il <a href="https://www.mycicero.it/tplfvg-go/TPWebPortal/it/" target="_blank" rel="noopener noreferrer">travel planner di Tpl Fvg a questo link</a>.</p>
          <p>Gli uffici di Tpl Fvg valuteranno la soluzione che proponi. Se sarà accolta, riceverai un'autorizzazione scritta, da portare sempre in viaggio ed esibire insieme con l'abbonamento. L'autorizzazione può essere rilasciata solo a chi possiede già un abbonamento per i servizi di Arriva Udine.</p>
          <p>Per aggiungere allegati, compila e invia prima questo modulo: riceverai un'e-mail di presa in carico della richiesta. Rispondi a quell'e-mail allegando i documenti o gli screenshot che ritieni utili.</p>`,
        camporiservatotplfvg: "Campo riservato a Tpl Fvg",
        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l'informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
        attivitacommerciali: "Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
        analisipreferenze: "Acconsento all'analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, per migliorare l'offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
        comunicazionepartner: "Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
        cessioneterzi: "Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",
        invia: "Invia",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Seleziona il prefisso internazionale fra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39.",
        numerotelefonico: "Indica un numero di cellulare dove gli operatori di Tpl Fvg possano contattarti in caso di necessità.",
        numerotesserinoidentificativo: `<div>È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati con quel tesserino.<br/><br/><img src="abbonamento_numero_tesserino.png" alt="Tesserino esempio" style="max-width: 100%; height: auto;"/></div>`,
        percorsoabbonamento: `<div>Scrivi il percorso esattamente come compare sull'abbonamento, nella riga evidenziata nell'immagine. Per esempio: GEMONA &gt;&gt; UDINE Via &gt; COMPRESO transito BUJA &lt;.<br/><br/><img src="abbonamento_percorso.png" alt="Esempio di abbonamento scolastico" style="max-width: 100%; height: auto;"/></div>`,
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "DETAILS OF THE PERSON SUBMITTING THE REQUEST",
        introanagrafica: "If the school pass holder is under 18, enter the details of a parent or guardian. If the pass holder is 18 or over, enter the student's details.",
        legendaabbonamento: "DETAILS OF THE SCHOOL PASS TO BE EXTENDED",
        legendasoluzione: "SOLUTION TO ADD TO YOUR PASS",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Select an option from the list.",
        seleziona: "--Select--",
        nome: "First name",
        cognome: "Last name",
        mail: "E-mail",
        email_confirm_label: "Repeat e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile number",
        numerotesserinoidentificativo: "ID card number of the student holding the pass",
        nomeintestatario: "First name of the student holding the pass",
        cognomeintestatario: "Last name of the student holding the pass",
        percorsoabbonamento: "Route shown on the pass",
        descrizione: "Describe the solution you have found",
        introdescrizione: `<p>If you have found a line or route that suits the student's needs better than the ones covered by the pass, please state exactly:</p>
          <ol>
            <li>the days of the week when you would like to use the alternative solution;</li>
            <li>the line you intend to use;</li>
            <li>the place of departure and the place of destination of the section to be added, not covered by the pass you already hold.</li>
          </ol>
          <p>To look for an alternative solution you can use the <a href="https://www.mycicero.it/tplfvg-go/TPWebPortal/it/" target="_blank" rel="noopener noreferrer">Tpl Fvg travel planner at this link</a>.</p>
          <p>Tpl Fvg will assess the solution you propose. If it is accepted, you will receive a written authorisation, to be carried at all times when travelling and shown together with the pass. The authorisation can only be granted to holders of an existing pass for Arriva Udine services.</p>
          <p>To add attachments, first fill in and submit this form: you will receive an e-mail confirming that your request has been taken in charge. Reply to that e-mail attaching any documents or screenshots you think useful.</p>`,
        camporiservatotplfvg: "Reserved field for Tpl Fvg",
        consensoobbligatorio: "MANDATORY CONSENT",
        privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
        consensofacoltativo: "OPTIONAL CONSENTS",
        indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
        attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
        analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
        comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
        cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",
        invia: "Submit the form",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Select the international dialing code from the list. The default value is +39.",
        numerotelefonico: "Please enter a mobile number where Tpl Fvg operators can contact you if necessary.",
        numerotesserinoidentificativo: `<div>This is the seven-digit number that uniquely identifies the pass holder. It can be found both on the ID card and on the passes purchased with that card.<br/><br/><img src="abbonamento_numero_tesserino.png" alt="Sample ID card" style="max-width: 100%; height: auto;"/></div>`,
        percorsoabbonamento: `<div>Enter the route exactly as it appears on the pass, in the line highlighted in the image. For example: GEMONA &gt;&gt; UDINE Via &gt; COMPRESO transito BUJA &lt;.<br/><br/><img src="abbonamento_percorso.png" alt="Example of a school pass" style="max-width: 100%; height: auto;"/></div>`,
        ultimo: ""
      }
    }
  }
};
