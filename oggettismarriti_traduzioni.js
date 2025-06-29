
const resources = {
  it: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "",
        seleziona: "--Seleziona--",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        legendanagrafica: "DATI ANAGRAFICI",
        nome: "Nome",
        cognome: "Cognome",
        nazione: "Nazione di residenza",
        indirizzo: "Indirizzo di residenza o domicilio",
          ncivico:"Numero civico",
          comune: "Comune",
        citta: "Città",
        localita:"Località o frazione",
        cap: "CAP",
        provincia:"Provincia / Regione / Stato",
        mail: "E-mail",
          email_confirm_label:"ripeti e-mail",
        email_invalid:"Verifica l’indirizzo e-mail.",
        email_mismatch: "Verifica l’indirizzo e-mail.",
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        legendainfoevento: "DOVE PRESUMI CHE SIA AVVENUTO LO SMARRIMENTO",
        accountTpl: "Azienda di riferimento",
        servizio: "Tipo di servizio",
        dataoraevento: "Data e ora presunta dello smarrimento",
        comuneevento: "Comune dove lo smarrimento si è presumibilmente verificato",
        linea: "Linea dove lo smarrimento si è presumibilmente verificato",
        direzione: "Direzione (indicare il capolinea o l’approdo di destinazione)",
        descrizione: "Descrizione dell'oggetto smarrito",
        introdescrizione: "Descrivi l'oggetto smarrito in modo dettagliato. Indica, se possibile, il colore, eventuali scritte o nomi presenti, il materiale o altre caratteristiche distintive. Esempi di oggetti smarriti possono essere: zaini, borse, cartelle da disegno, libri, cellulari, portafogli, chiavi, occhiali, indumenti. Se desideri allegare immagini o altri documenti utili, potrai farlo rispondendo direttamente alla e-mail di notifica che riceverai al termine della compilazione di questo form.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",

        invia: "Invia",
        ultimo: ""
      },
      tooltips: {
        nazione: "Scrivi il nome del tuo Paese di residenza: è sufficiente digitare le prime lettere e poi selezionare il nome corretto dall’elenco proposto. Il campo è impostato di default su ITALIA.",
          indirizzo: "Inserisci un indirizzo presso cui desideri ricevere eventuali comunicazioni via posta ordinaria.",
          comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
          prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",     
        
        accountTpl: "Se possibile, indica l’azienda a cui compete il servizio dove presumi che sia avvenuto lo smarrimento. Se non sai quale azienda indicare, scegli l’opzione TPL FVG.",
        servizio: "Seleziona il servizio dove presumi che lo smarrimento sia avvenuto. Se non sai quale servizio indicare, non compilare questo campo.",
        dataoraevento: "Anche se non sei certo di quando lo smarrimento sia avvenuto, indica una data e un’ora presunte.",
          linea:"Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee operate da Tpl Fvg in Friuli Venezia Giulia e nelle aree confinanti. Se non sai su quale linea sia avvenuto lo smarrimento, non compilare questo campo.",
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "",
        seleziona: "--Select--",
        valoreNonValidoDatalist: "Select an option from the list.",
        legendanagrafica: "PERSONAL DETAILS",
        nome: "First name",
        cognome: "Last name",
        nazione: "Country",
        comune: "Municipality",
        ncivico:"Street number",
          indirizzo: "Residential or mailing address",
          citta:"City",
          comune:"Municipality",
          localita:"Local area",
          cap:"Postal code",
          provincia:"Province / State / Region",
          prefissotelefonico: "International dialing code",
          numerotelefonico:"Mobile Phone Number",
          mail: "E-mail",
          email_confirm_label:"Confirm e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",
      
        legendainfoevento: "WHERE DO YOU BELIEVE THE ITEM WAS LOST?",
        accountTpl: "Reference company",
        servizio: "Type of service",
        dataoraevento: "Date and time of the loss",
        comuneevento: "Municipality where the loss presumably occurred",
        linea: "Line where the loss presumably occurred",
        direzione: "Direction (specify the terminal or landing destination)",
        descrizione: "Description of the lost item",
        introdescrizione: "Provide a detailed description of the lost item. If possible, include the color, any writing or names visible on it, the material, or other distinguishing features. Examples of lost items include: backpacks, bags, drawing folders, books, mobile phones, wallets, keys, glasses, clothing. If you wish to attach images or other useful documents, you can do so by replying directly to the notification e-mail you will receive once this form is completed.",
        
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
        accountTpl: "If possible, indicate the company responsible for the service where you believe the item was lost. If you are unsure which company to select, choose the TPL FVG option.",
        servizio: "Select the service where you believe the item was lost. If you are not sure which service to indicate, leave this field blank.",
        dataoraevento: "Even if you're not sure when the item was lost, please provide an estimated date and time.",
        linea: "This field becomes active after selecting the relevant company. The available routes depend on the selected company. If you selected TPL FVG as the company, the list will include all routes operated by Tpl Fvg in Friuli Venezia Giulia and neighboring areas. If you are not sure on which route the item was lost, leave this field blank.",
        ultimo: ""



      }
    }
  }
};