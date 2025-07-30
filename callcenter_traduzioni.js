
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE SEGNALA IL PROBLEMA",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        seleziona: "--Seleziona--",
        nome: "Nome",
          cognome: "Cognome",
          nazione: "Nazione di residenza",
          indirizzo: "Indirizzo di residenza o domicilio",
          ncivico:"Numero civico",
          comune: "Comune",
          citta:"città",
          localita:"Località o frazione",
          cap:"cap",
          provincia:"Provincia / Regione / Stato",
            prefissotelefonico:"Prefisso telefonico internazionale",
          numerotelefonico:"Numero di cellulare",
          mail: "E-mail",
          email_confirm_label:"ripeti e-mail",
          abbonatosino:"Abbonato",
          numerotesserinoidentificativo: `Numero di tesserino identificativo Tpl Fvg (se il reclamante ne è titolare)`,
        email_invalid:"Verifica l’indirizzo e-mail.",
          email_mismatch: "Verifica l’indirizzo e-mail.",
        legendadaticontatto: "INFORMAZIONI SUL CONTATTO",
        prefissotelefonico: "Prefisso telefonico internazionale del numero da cui si è contattato il call center",
        numerotelefonico: "Numero di telefono da cui si è contattato il call center",
        dataoraevento: "Data e ora in cui il contatto è avvenuto",
        accounttpl: "A quale azienda si riferiva la tua chiamata?",
        tipoproblema: "Quale problema hai riscontrato?",
        tipoproblemaOptions: ["--Seleziona--",
          "Tempi di attesa troppo lunghi",
          "Non sono riuscito a parlare con un operatore",
          "La chiamata è stata interrotta prima della conclusione",
          "L’operatore non ha saputo rispondere alla mia richiesta",
          "L’operatore mi ha dato una risposta sbagliata",
          "L’operatore è stato scortese o poco professionale",
          "Altro (motiva nel dettaglio la tua scelta)",
        ],
        descrizione: "Descrizione dell'evento",
        introdescrizione: "Descrivi il problema in modo sintetico ma completo, fornendo tutte le informazioni utili per ricostruire la telefonata.",
        invia: "Invia",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",

        ultimo: ""
      },
      tooltips: {
        nazione: "Scrivi il nome del tuo Paese di residenza: è sufficiente digitare le prime lettere e poi selezionare il nome corretto dall’elenco proposto. Il campo è impostato di default su ITALIA.",
        indirizzo: "Inserisci un indirizzo presso cui desideri ricevere eventuali comunicazioni via posta ordinaria.",
        comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
        prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        
        dataoraevento: "Se non ricordi con esattezza la data e l’ora del contatto, indica un dato approssimativo: ci aiuterà a risalire alla chiamata.",
        accounttpl: "Indica l’azienda a cui era riferita la tua chiamata: se non la conosci, o se la chiamata riguardava servizi non riconducibili a una singola azienda consorziata, seleziona l’opzione TPL FVG.",
        numerotesserinoidentificativo:`<div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino.<br/><br/>
              <img src="immagine_tooltip_tesserino.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
            </div>`,
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "PERSONAL DETAILS OF THE PERSON REPORTING THE ISSUE",
        valoreNonValidoDatalist: "Select an option from the list.",
        erroreCampoObbligatorio: "",
        seleziona: "--Select--",
        nome: "First Name",
          cognome: "Last Name",
          nazione: "Country",
          ncivico:"Street number",
          indirizzo: "Residential or mailing address",
          citta:"City",
          comune:"Municipality",
          localita:"Local area",
          cap:"Postal code",
          provincia:"Province / State / Region",

        mail: "E-mail",
        email_confirm_label:"Confirm e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",

        abbonatosino: "Pass holder",
        numerotesserinoidentificativo:"Tpl Fvg Identification card number (if the complainant holds one)",
        legendadaticontatto: "CONTACT INFORMATION",
        prefissotelefonico: "International dialing code of the number used to contact the call center",
        numerotelefonico: "Phone number used to contact the call center",
        dataoraevento: "Date and time the contact took place",
        accounttpl: "Which company was your call about?",
        tipoproblema: "What issue did you experience?",
        tipoproblemaOptions: [
          "--Select--",
          "Waiting times were too long",
          "I was unable to speak with an operator",
          "The call was disconnected before it ended",
          "The operator was unable to answer my request",
          "The operator gave me incorrect information",
          "The operator was rude or unprofessional",
          "Other (please explain your choice in detail)"
        ],
        descrizione: "Description of the event",
        introdescrizione: "Briefly but clearly describe the issue, providing all the useful details to help us reconstruct the call.",

        consensoobbligatorio: "MANDATORY CONSENT",
          privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
          consensofacoltativo: "OPTIONAL CONSENTS",
          indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
          attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
          analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
          comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
          cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",


        invia:"Submit the form",

        ultimo: ""

      },
      tooltips: {
        nazione: "Enter the name of your country of residence: just type the first few letters and then select the correct name from the list. The default value is ITALY.",
        indirizzo: "Enter an address where you wish to receive any communications by regular mail.",
        comune: "Select a municipality and its postal code (ZIP) from the available list.",
        prefissotelefonico: "Select the international dialing code from the list. The default value is +39",

        dataoraevento: "If you don’t remember the exact date and time of the call, enter an approximate value: it will help us trace the call.",
        accounttpl: "Indicate the company your call referred to. If you don’t know it, or if the call concerned services not linked to a specific consortium company, select the option TPL FVG.",
        numerotesserinoidentificativo: `<div>
        This is the seven-digit number that uniquely identifies a season ticket holder. It is shown on both the identification card and any season tickets purchased using that card.<br/><br/>             
          <img src="immagine_tooltip_tesserino.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
        </div>`,
        ultimo: ""



      }
    }
  }
};