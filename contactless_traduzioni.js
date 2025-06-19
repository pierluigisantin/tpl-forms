


const resources = {
  it: {
    translation: {
      labels: {

        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE HA RILEVATO IL PROBLEMA",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        erroreCampoObbligatorio: "Devi compilare questo campo",
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

        email_mismatch: "le mail non corrispondono",
        legendainfoevento: "Problema rilevato",
        appcontactless: "A cosa si riferisce il problema che hai rilevato?",
        appcontactlessOptions: ["--Seleziona--", "Acquisto di biglietti con carta contactless",
          "Convalida di biglietti cartacei con QR code",
          "App Tpl Fvg",
          "App Glimble"
        ],
        appcontactlessOptionsRequired: {
          "Acquisto di biglietti con carta contactless": ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime",   "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
          
          "Convalida di biglietti cartacei con QR code":["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"] ,
          "App Tpl Fvg": ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
          "App Glimble": ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"]
        },
        appcontactlessOptionsShowHide: {
          "Acquisto di biglietti con carta contactless": {
            show: ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["numerotelefonicoapp", "indirizzomailapp"]
          },
          "Convalida di biglietti cartacei con QR code": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "numerotelefonicoapp", "indirizzomailapp"]
          },
          "App Tpl Fvg": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet"]
          },
          "App Glimble": {
            show: ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "linea", "nvettura", "tipoproblemacontactless"]
          }
        },
        tipoproblemacontactless: "Indica il problema che hai rilevato",
        tipoproblemacontactlessOptions: {
          "--Seleziona--": [],
          "Acquisto di biglietti con carta contactless":
            ["Blocco della carta", "Addebito non corretto", "Mancato addebito",
              "Altro"
            ],
          "Convalida di biglietti cartacei con QR code": ["Non mi è possibile convalidare un biglietto",
            "Un biglietto valido risulta già convalidato",
            "Altro"
          ],
          "App Tpl Fvg": ["Non visualizzo i biglietti acquistati",
            "Non riesco ad accedere al mio profilo",
            "Non riesco a convalidare i biglietti acquistati",
            "Non visualizzo il mio abbonamento",
            "Altro"
          ],
          "App Glimble": []
        },
        circuitocarta: "Indica il circuito della tua carta",
        circuitocartaOptions: ["--Seleziona--", "Mastercard", "Visa", "American Express", "Maestro", "VPay", "Altro"],

        accountTpl: "Azienda di riferimento",
        altrocircuito: "Indica il circuito a cui appartiene la tua carta",
        panprime: "Digita le prime 4 cifre del PAN",
        panultime: "Digita le ultime 4 cifre del PAN",
        panvirtuale: "Se usi un wallet (come Apple Pay o Google Pay) digita il PAN della tua carta virtuale",
        wallet: "Indica la tua app di pagamento",
        walletOptions: ["--Seleziona--", "Apple Pay", "Google Pay", "Altro"],
        dataoraevento: "Data e ora dell'evento",
        linea: "Linea dove il problema si è verificato o dove è stato rilevato",
        nvettura: "Numero di matricola dell’autobus",
        introdescrizione: "Descrivi il problema in modo sintetico ma completo.",
        descrizione: "Descrizione del problema ",
        tipoluogoproblemacontactless: "Il problema si è verificato su un solo autobus o si verifica sempre? ",
        tipoluogoproblemacontactlessOptions: ["--Seleziona--", "Su un solo autobus", "Sempre"],
        indirizzomailapp: "Indirizzo e-mail associato al tuo profilo",
        numerotelefonicoapp: "Numero di telefono associato al tuo profilo",


        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
        attivitacommerciali: "Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
        analisipreferenze: "Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
        comunicazionepartner: "Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
        cessioneterzi: "Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",


        ultimo: ""
      },
      tooltips: {
        nazione: "Scrivi il nome del tuo Paese di residenza: è sufficiente digitare le prime lettere e poi selezionare il nome corretto dall’elenco proposto. Il campo è impostato di default su ITALIA.",
        prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        accountTpl: "Indica l’azienda sul cui servizio hai rilevato il problema. Se non sai quale azienda indicare, scegli l’opzione TPL FVG.",
        panprime: "Il PAN (Primary Account Number) è il numero stampato sulla tua carta di pagamento. Le prime 4 e le ultime 4 cifre aiutano a identificare la transazione.",
          panultime: "Il PAN (Primary Account Number) è il numero stampato sulla tua carta di pagamento. Le prime 4 e le ultime 4 cifre aiutano a identificare la transazione.",
          panvirtuale: "Se hai aggiunto la tua carta a un wallet digitale, accedi al wallet per visualizzare il PAN virtuale. È composto da 4 cifre, diverse da quelle della carta fisica.",
      
        dataoraevento: "Indica la data e l’ora dell’operazione o del momento in cui hai rilevato il problema. Se non conosci l’orario esatto, indica quello approssimativo o il momento in cui ti sei accorto del problema.",
        linea: "Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee operate da Tpl Fvg. Se la segnalazione o l’evento non sono collegati a una linea, puoi lasciare questo campo in bianco.",
        nvettura: "Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola non coincide mai con il numero di linea.",
        numerotelefonicoapp: "Inserisci il numero di telefono che hai usato per attivare l’app o su cui l’app è installata, senza indicare il prefisso internazionale.",
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "PERSONAL DATA OF THE INDIVIDUAL WHO REPORTED THE ISSUE",
        valoreNonValidoDatalist: "Please select a valid value from the list",
        erroreCampoObbligatorio: "This field is required",
        seleziona: "--Select--",

        nome: "First name",
        cognome: "Last name",
        nazione: "Country of residence",
        indirizzo: "Residential or mailing address",
        ncivico: "Street number",
        comune: "Municipality",
        citta: "City",
        localita: "Local area or district",
        cap: "Postal code",
        provincia: "Province / Region / State",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile phone number",
        mail: "Email",
        email_confirm_label: "Repeat email",

        email_mismatch: "Email addresses do not match",
        legendainfoevento: "Reported issue",
        appcontactless: "What does the issue you experienced refer to?",
        appcontactlessOptions: [
          "--Select--",
          "Ticket purchase with contactless card",
          "Validation of paper tickets with QR code",
          "Tpl Fvg app",
          "Glimble app"
        ],
        appcontactlessOptionsRequired: {
          "Ticket purchase with contactless card": ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
          "Validation of paper tickets with QR code": ["accountTpl", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
          "Tpl Fvg app": ["accountTpl", "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
          "Glimble app": ["accountTpl", "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"]
        },
        appcontactlessOptionsShowHide: {
          "Ticket purchase with contactless card": {
            show: ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["numerotelefonicoapp", "indirizzomailapp"]
          },
          "Validation of paper tickets with QR code": {
            show: ["accountTpl", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "numerotelefonicoapp", "indirizzomailapp"]
          },
          "Tpl Fvg app": {
            show: ["accountTpl", "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet"]
          },
          "Glimble app": {
            show: ["accountTpl", "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "linea", "nvettura", "tipoproblemacontactless"]
          }
        },
        tipoproblemacontactless: "Describe the issue you encountered",
        tipoproblemacontactlessOptions: {
          "--Select--": [],
          "Ticket purchase with contactless card": [
            "Card blocked",
            "Incorrect charge",
            "No charge applied",
            "Other"
          ],
          "Validation of paper tickets with QR code": [
            "Unable to validate a ticket",
            "A valid ticket appears already validated",
            "Other"
          ],
          "Tpl Fvg app": [
            "Purchased tickets are not visible",
            "Cannot access my profile",
            "Cannot validate purchased tickets",
            "My pass is not displayed",
            "Other"
          ],
          "Glimble app": []
        },
        circuitocarta: "Select your card's payment network",
        circuitocartaOptions: ["--Select--", "Mastercard", "Visa", "American Express", "Maestro", "VPay", "Other"],

        accountTpl: "Reference company",
        altrocircuito: "Specify your card’s payment network",
        panprime: "Enter the first 4 digits of the PAN",
        panultime: "Enter the last 4 digits of the PAN",
        panvirtuale: "If you use a wallet (like Apple Pay or Google Pay), enter the PAN of your virtual card",
        wallet: "Select your payment app",
        walletOptions: ["--Select--", "Apple Pay", "Google Pay", "Other"],
        dataoraevento: "Date and time of the event",
        linea: "Line where the issue occurred or was detected",
        nvettura: "Bus fleet number",
        introdescrizione: "Briefly but clearly describe the issue.",
        descrizione: "Description of the issue",
        tipoluogoproblemacontactless: "Did the issue occur on a single bus or does it happen every time?",
        tipoluogoproblemacontactlessOptions: ["--Select--", "On a single bus", "Always"],
        indirizzomailapp: "Email address linked to your profile",
        numerotelefonicoapp: "Phone number linked to your profile",

        consensoobbligatorio: "MANDATORY CONSENT",
          privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
          consensofacoltativo: "OPTIONAL CONSENTS",
          indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
          attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
          analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
          comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
          cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",

        ultimo: ""

      },
      tooltips: {
        nazione: "Enter the name of your country of residence: just type the first few letters and select the correct name from the list. The default value is ITALY.",
        prefissotelefonico: "Select the international dialing code from the available list. The default value is +39",
        accountTpl: "Specify the company operating the service where you experienced the issue. If you're not sure which company to select, choose the TPL FVG option.",
        panprime: "The PAN (Primary Account Number) is the number printed on your payment card. The first and last 4 digits help to identify the transaction.",
        panultime: "The PAN (Primary Account Number) is the number printed on your payment card. The first and last 4 digits help to identify the transaction.",
        panvirtuale: "If you've added your card to a digital wallet, access the wallet to view the virtual PAN. It consists of 4 digits, different from those on the physical card.",
        dataoraevento: "Enter the date and time of the transaction or the moment you noticed the issue. If you don't know the exact time, provide an approximate time or when you became aware of the problem.",
        linea: "This field is activated after selecting the relevant company, which determines the available lines. If you selected TPL FVG as the company, the list will include all lines operated by Tpl Fvg. If the report or event is not related to a specific line, you can leave this field blank.",
        nvettura: "The bus fleet number is a 3- or 4-digit code used to identify the vehicle. It is usually visible both inside and outside the bus. The fleet number is never the same as the line number.",
        numerotelefonicoapp: "Enter the phone number you used to activate the app or the one associated with the app, without including the international dialing code.",
        ultimo: ""



      }
    }
  }
};