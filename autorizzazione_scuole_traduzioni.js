const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI DI CHI PRESENTA LA RICHIESTA",
        introanagrafica: "Se l'intestatario dell'abbonamento scolastico è minorenne, inserisci i dati di un genitore o del tutore. Se è maggiorenne, inserisci i dati dello studente.",
        legendaabbonamento: "DATI DELL'ABBONAMENTO SCOLASTICO DA INTEGRARE",
        legendasoluzione: "SOLUZIONE DA INTEGRARE PER IL RITORNO DA SCUOLA",
        erroreCampoObbligatorio: "Compila questo campo.",
        giorniObbligatori: "Seleziona almeno un giorno della settimana.",
        erroreOrarioFascia: "Puoi indicare solo corse in partenza fra le 12:00 e le 18:00.",
        erroreCaptcha: "Conferma di non essere un robot spuntando la casella.",
        valoreNonValidoDatalist: "Seleziona un'opzione dall'elenco.",
        seleziona: "--Seleziona--",
        nome: "Nome",
        cognome: "Cognome",
        mail: "E-mail",
        email_confirm_label: "Ripeti e-mail",
        email_invalid: "Controlla di aver scritto correttamente l'indirizzo e-mail.",
        email_mismatch: "I due indirizzi e-mail non coincidono.",
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        numerotesserinoidentificativo: "Numero di tesserino identificativo dello studente intestatario",
        nomeintestatario: "Nome dello studente intestatario",
        cognomeintestatario: "Cognome dello studente intestatario",
        percorsoabbonamento: "Percorso indicato sull'abbonamento",
        descrizione: "Descrivi la soluzione che hai individuato",
        linea_andata: "Numero di linea da integrare",
        giorni_andata: "Giorni della settimana",
        lun_andata: "Lun",
        mar_andata: "Mar",
        mer_andata: "Mer",
        gio_andata: "Gio",
        ven_andata: "Ven",
        sab_andata: "Sab",
        orario_partenza_andata: "Orario di partenza",
        partenza_andata: "Fermata o località di partenza",
        arrivo_andata: "Fermata o località di arrivo",
        note_andata: "Note o cambi intermedi",
        introdescrizione: `<p>Indica la linea o il percorso che hai individuato per il ritorno da scuola, in alternativa a quelli previsti dall'abbonamento. Specifica con esattezza:</p>
          <ul>
            <li>la linea e i giorni della settimana in cui vuoi usarla;</li>
            <li>l'orario di partenza della corsa;</li>
            <li>la fermata o la località di partenza e quella di arrivo del tratto da integrare.</li>
          </ul>
          <p>L'integrazione vale solo per le corse in partenza fra le 12:00 e le 18:00, dal lunedì al sabato, esclusi i giorni festivi.</p>
          <p>Per cercare una soluzione alternativa puoi usare il <a href="https://www.mycicero.it/tplfvg-go/TPWebPortal/it/" target="_blank" rel="noopener noreferrer">travel planner di Tpl Fvg a questo link</a>. Per evitare ambiguità, riporta nel modulo gli orari e i nomi delle fermate indicati nel travel planner. Se ci sono cambi intermedi o altre informazioni utili, scrivile nel campo NOTE O CAMBI INTERMEDI.</p>
          <p>Gli uffici di Tpl Fvg valuteranno la soluzione che proponi. Se sarà accolta, riceverai un'autorizzazione scritta da portare in viaggio ed <strong>esibire insieme con l'abbonamento</strong>. L'autorizzazione può essere rilasciata solo a chi possiede già un abbonamento per i servizi erogati da Arriva Udine.</p>`,
        camporiservatotplfvg: "Campo riservato a Tpl Fvg",
        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Ho letto e compreso l'informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e <a href=\"https://tplfvg.it/it/azienda/mia-privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">accessibile tramite questo link</a>.",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Partecipazione a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
        attivitacommerciali: "Comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
        comunicazionepartner: "Informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg.",
        cessioneterzi: "Comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",
        invia: "Invia",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Seleziona il prefisso internazionale fra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39.",
        numerotelefonico: "Indica un numero di cellulare dove gli operatori di Tpl Fvg possano contattarti in caso di necessità.",
        numerotesserinoidentificativo: `<span style="display: inline-block; width: min(420px, 80vw); line-height: 0;"><img src="abbonamento_numero_tesserino.png" alt="Tesserino esempio" style="display: block; width: 100%; height: auto;"/></span>`,
        percorsoabbonamento: `<span style="display: inline-block; width: min(420px, 80vw); line-height: 0;"><img src="abbonamento_percorso.png" alt="Esempio di abbonamento scolastico" style="display: block; width: 100%; height: auto;"/></span>`,
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
        legendasoluzione: "SOLUTION TO ADD FOR THE RETURN TRIP FROM SCHOOL",
        erroreCampoObbligatorio: "Please fill in this field.",
        giorniObbligatori: "Please select at least one day of the week.",
        erroreOrarioFascia: "You can only enter runs departing between 12:00 and 18:00.",
        erroreCaptcha: "Please confirm you are not a robot by ticking the box.",
        valoreNonValidoDatalist: "Select an option from the list.",
        seleziona: "--Select--",
        nome: "First name",
        cognome: "Last name",
        mail: "E-mail",
        email_confirm_label: "Repeat e-mail",
        email_invalid: "Please check that you have entered the e-mail address correctly.",
        email_mismatch: "The two e-mail addresses do not match.",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile number",
        numerotesserinoidentificativo: "ID card number of the student holding the pass",
        nomeintestatario: "First name of the student holding the pass",
        cognomeintestatario: "Last name of the student holding the pass",
        percorsoabbonamento: "Route shown on the pass",
        descrizione: "Describe the solution you have found",
        linea_andata: "Line number to add",
        giorni_andata: "Days of the week",
        lun_andata: "Mon",
        mar_andata: "Tue",
        mer_andata: "Wed",
        gio_andata: "Thu",
        ven_andata: "Fri",
        sab_andata: "Sat",
        orario_partenza_andata: "Departure time",
        partenza_andata: "Departure stop or place",
        arrivo_andata: "Arrival stop or place",
        note_andata: "Notes or intermediate changes",
        introdescrizione: `<p>Enter the line or route you have found for the return trip from school, as an alternative to those covered by the pass. Please state exactly:</p>
          <ul>
            <li>the line and the days of the week when you want to use it;</li>
            <li>the departure time of the run;</li>
            <li>the departure stop or place and the arrival stop or place of the section to be added.</li>
          </ul>
          <p>The integration only applies to runs departing between 12:00 and 18:00, Monday to Saturday, excluding public holidays.</p>
          <p>To look for an alternative solution you can use the <a href="https://www.mycicero.it/tplfvg-go/TPWebPortal/it/" target="_blank" rel="noopener noreferrer">Tpl Fvg travel planner at this link</a>. To avoid any ambiguity, enter in the form the times and stop names shown in the travel planner. If there are intermediate changes or other useful information, write them in the NOTES OR INTERMEDIATE CHANGES field.</p>
          <p>Tpl Fvg will assess the solution you propose. If it is accepted, you will receive a written authorisation to be carried when travelling and <strong>shown together with the pass</strong>. The authorisation can only be granted to holders of an existing pass for services operated by Arriva Udine.</p>`,
        camporiservatotplfvg: "Reserved field for Tpl Fvg",
        consensoobbligatorio: "MANDATORY CONSENT",
        privacy: "I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and <a href=\"https://tplfvg.it/it/azienda/mia-privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">accessible via this link</a>.",
        consensofacoltativo: "OPTIONAL CONSENTS",
        indaginidemoscopiche: "Taking part in surveys or market research on local public transport services.",
        attivitacommerciali: "Information about offers and discounts on the services of Tpl Fvg and its consortium companies.",
        comunicazionepartner: "Commercial information about products or services of third parties that are partners of Tpl Fvg.",
        cessioneterzi: "Sharing of my personal data with third parties for commercial and marketing purposes.",
        invia: "Submit the form",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Select the international dialing code from the list. The default value is +39.",
        numerotelefonico: "Please enter a mobile number where Tpl Fvg operators can contact you if necessary.",
        numerotesserinoidentificativo: `<span style="display: inline-block; width: min(420px, 80vw); line-height: 0;"><img src="abbonamento_numero_tesserino.png" alt="Sample ID card" style="display: block; width: 100%; height: auto;"/></span>`,
        percorsoabbonamento: `<span style="display: inline-block; width: min(420px, 80vw); line-height: 0;"><img src="abbonamento_percorso.png" alt="Example of a school pass" style="display: block; width: 100%; height: auto;"/></span>`,
        ultimo: ""
      }
    }
  }
};
