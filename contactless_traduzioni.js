const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "SEGNALAZIONE PROBLEMI SU APP E CONTACTLESS",
        introtiposoggetto: "Compila i dati per segnalare un problema riscontrato con l'app di Tpl Fvg o con l'acquisto contactless a bordo.",
        legendsegnalazione: "DETTAGLI DELLA SEGNALAZIONE",
        tiposegnalazione: "A cosa si riferisce il problema che hai rilevato?",
        accountTpl: "Azienda di riferimento",
        dataevento: "Data e ora dell'evento",
        sistemaoperativo: "Sistema operativo del dispositivo",
        versioneapp: "Versione dell'app installata",
        tipocarta: "Tipo di carta o wallet utilizzato",
        ultimequattrocifre: "Ultime quattro cifre della carta",
        descrizione: "Descrizione del problema",
        introdescrizione: "Descrivi in modo sintetico il problema che hai rilevato, indicando ogni informazione utile a identificarlo e risolverlo.",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall'elenco.",
        seleziona: "--Seleziona--",
        nome: "Nome",
        cognome: "Cognome",
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        mail: "E-mail",
        email_confirm_label: "Ripeti e-mail",
        email_invalid: "Verifica l'indirizzo e-mail.",
        email_mismatch: "Verifica l'indirizzo e-mail.",
        camporiservatotplfvg: "Campo riservato a Tpl Fvg",
        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l'informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
        attivitacommerciali: "Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
        analisipreferenze: "Acconsento all'analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, per migliorare l'offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
        comunicazionepartner: "Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
        cessioneterzi: "Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",
        invia: "Invia segnalazione",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39.",
        numerotelefonico: "Indica un numero di cellulare dove gli operatori di Tpl Fvg possano contattarti in caso di necessità.",
        accountTpl: "Indica l'azienda consorziata di Tpl Fvg che gestisce la linea o il servizio a cui si riferisce la segnalazione. Se non la conosci, seleziona Tpl Fvg.",
        dataevento: "Indica la data e l'ora precise in cui hai riscontrato il problema.",
        tiposegnalazione: "Scegli l'ambito a cui si riferisce la segnalazione. In base alla scelta compariranno campi aggiuntivi specifici.",
        ultimequattrocifre: "Indica le ultime quattro cifre della carta o del wallet utilizzato, per aiutarci a identificare la transazione.",
        ultimo: ""
      },
      tipoSegnalazioneOptions: [
        { value: "App Tpl Fvg", label: "App Tpl Fvg" },
        { value: "Contactless a bordo", label: "Acquisto contactless a bordo" }
      ]
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "REPORT PROBLEMS WITH APP AND CONTACTLESS",
        introtiposoggetto: "Please fill in the form to report a problem you have encountered with the Tpl Fvg app or with a contactless purchase on board.",
        legendsegnalazione: "REPORT DETAILS",
        tiposegnalazione: "What is the problem about?",
        accountTpl: "Reference company",
        dataevento: "Date and time of the event",
        sistemaoperativo: "Device operating system",
        versioneapp: "App version installed",
        tipocarta: "Card or wallet type used",
        ultimequattrocifre: "Last four digits of the card",
        descrizione: "Problem description",
        introdescrizione: "Please describe the problem briefly, providing any information useful to identify and resolve it.",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Select an option from the list.",
        seleziona: "--Select--",
        nome: "First name",
        cognome: "Last name",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile number",
        mail: "E-mail",
        email_confirm_label: "Repeat e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",
        camporiservatotplfvg: "Reserved field for Tpl Fvg",
        consensoobbligatorio: "MANDATORY CONSENT",
        privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
        consensofacoltativo: "OPTIONAL CONSENTS",
        indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
        attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
        analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
        comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
        cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",
        invia: "Submit the report",
        ultimo: ""
      },
      tooltips: {
        prefissotelefonico: "Select the international dialing code from the list. The default value is +39.",
        numerotelefonico: "Please enter a mobile number where Tpl Fvg operators can contact you if necessary.",
        accountTpl: "Enter the name of the Tpl Fvg consortium company that operates the line or service concerned by your report. If you don't know it, select Tpl Fvg.",
        dataevento: "Enter the exact date and time when you encountered the problem.",
        tiposegnalazione: "Choose the area concerned by your report. Depending on the choice, additional specific fields will appear.",
        ultimequattrocifre: "Enter the last four digits of the card or wallet used, to help us identify the transaction.",
        ultimo: ""
      },
      tipoSegnalazioneOptions: [
        { value: "App Tpl Fvg", label: "Tpl Fvg app" },
        { value: "Contactless a bordo", label: "Contactless purchase on board" }
      ]
    }
  }
};