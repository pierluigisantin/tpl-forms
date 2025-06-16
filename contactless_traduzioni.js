


const resources = {
  it: {
    translation: {
      labels: {

        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE HA RILEVATO IL PROBLEMA",
        valoreNonValidoDatalist: "Devi selezionare un valore valido dalla lista",
        erroreCampoObbligatorio: "Devi compilare questo campo",
        seleziona: "--Seleziona--",

        tipoSoggetto: "Chi è il soggetto che presenta il reclamo",
        tipoSoggettoOptions: ["--Seleziona--", "Privato cittadino", "Azienda", "Ente pubblico", "Associazione"],
        ragioneSociale: "Nome associazione, ente pubblico o azienda",
        nome: "Nome",
        cognome: "Cognome",
        nazione: "Nazione di residenza",
        ncivico: "Street N°",
        indirizzo: "Indirizzo di residenza o domicilio",
        localita: "Località",
        citta: "Città",
        comune: "Comune",
        cap: "CAP",
        provincia: "Provincia o distretto",
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        mail: "E-mail",
        email_confirm_label: "Conferma e-mail",
        email_mismatch: "le mail non corrispondono",
        legendainfoevento: "Problema rilevato",
        appcontactless: "Il problema che hai rilevato riguarda",
        appcontactlessOptions: ["--Seleziona--", "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)",
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus",
          "L’app Tpl Fvg",
          "L’app Glimble"
        ],
        appcontactlessOptionsRequired: {
          "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)": ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime",   "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
          
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus":["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"] ,
          "L’app Tpl Fvg": ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
          "L’app Glimble": ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"]
        },
        appcontactlessOptionsShowHide: {
          "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)": {
            show: ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["numerotelefonicoapp", "indirizzomailapp"]
          },
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "numerotelefonicoapp", "indirizzomailapp"]
          },
          "L’app Tpl Fvg": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet"]
          },
          "L’app Glimble": {
            show: ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "linea", "nvettura", "tipoproblemacontactless"]
          }
        },
        tipoproblemacontactless: "Indica il problema che hai rilevato",
        tipoproblemacontactlessOptions: {
          "--Seleziona--": [],
          "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)":
            ["Blocco della carta di credito o debito", "Importo addebitato non corrispondente all’effettivo acquisto",
              "Ho acquistato uno o più biglietti ma non mi sono stati addebitati sulla carta gli importi corrispondenti",
              "Ho ricevuto addebiti sulla carta in giorni diversi da quelli in cui ho effettuato il viaggio",
              "Altro"
            ],
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus": ["Non mi è possibile convalidare un biglietto",
            "Un biglietto che non ho mai convalidato risulta già convalidato",
            "Altro"
          ],
          "L’app Tpl Fvg": ["Ho acquistato uno o più biglietti che non si sono materializzati",
            "Non riesco ad accedere al mio profilo",
            "Non riesco a convalidare i biglietti acquistati",
            "Non vedo il mio abbonamento nell’app",
            "Altro"
          ],
          "L’app Glimble": []
        },
        circuitocarta: "Indica il circuito della tua carta",
        circuitocartaOptions: ["--Seleziona--", "Mastercard", "Visa", "American Express", "Maestro", "VPay", "Altro"],

        accountTpl: "Azienda di riferimento",
        altrocircuito: "Indica il circuito a cui appartiene la tua carta",
        panintro: "Digita le prime e le ultime 4 cifre del numero della tua carta (PAN) ",
        panprime: "Prime 4 cifre",
        panultime: "Ultime 4 cifre",
        panvirtualeintro: "Se usi una carta virtualizzata (come Apple Pay o Google Pay), digita le 4 cifre del PAN del tuo wallet",
        panvirtuale: "PAN virtuale",
        wallet: "Indica il tuo wallet",
        walletOptions: ["--Seleziona--", "Apple Pay", "Google Pay", "Altro"],
        altrowallet: "Indica il tuo wallet",
        dataoraevento: "Data e ora dell'evento",
        linea: "Linea urbana dove il problema si è verificato o dove è stato rilevato",
        nvettura: "Numero di matricola dell’autobus",
        introdescrizione: "Descrivi il problema in modo sintetico ma completo. Specifica, se possibile, ciò che ti aspettavi che accadesse e cosa invece è successo ",
        descrizione: "Descrizione del problema ",
        tipoluogoproblemacontactless: "Il problema si è verificato su un solo autobus o si verifica sempre? ",
        tipoluogoproblemacontactlessOptions: ["--Seleziona--", "Su un solo autobus", "Sempre"],
        indirizzomailapp: "Indirizzo e-mail associato al profilo nell’app ",
        numerotelefonicoapp: "Numero di telefono associato al profilo",


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
        accountTpl: "Indica l’azienda sul cui servizio urbano hai rilevato il problema. Se non sai quale azienda indicare, scegli l’opzione TPL FVG",
        panintro: "Il PAN (Primary Account Number) è il numero da 13 a 19 cifre stampato sulla tua carta di pagamento. Le prime 4 e le ultime 4 cifre servono a identificare la transazione",
        panvirtualeintro: "Se hai virtualizzato la tua carta in un wallet, entra nel wallet per visualizzare il PAN. Il PAN del wallet ha solo 4 cifre, sempre diverse da quelle della carta fisica",
        dataoraevento: "Indica la data e l’ora dell’operazione o del momento in cui hai rilevato il problema. Se non conosci l’orario esatto, indica quello approssimativo o il momento in cui ti sei accorto del problema",
        linea: "Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee urbane operate da Tpl Fvg. Se la segnalazione o l’evento non sono collegati a una linea, puoi lasciare questo campo in bianco",
        nvettura: "Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola non coincide mai con il numero di linea",
        numerotelefonicoapp: "Inserisci il numero di telefono che hai usato per attivare l’app o su cui l’app è installata, senza indicare il prefisso internazionale",
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

        tipoSoggetto: "Who is submitting the complaint",
        tipoSoggettoOptions: ["--Select--", "Private individual", "Company", "Public entity", "Association"],
        ragioneSociale: "Name of association, public entity or company",
        nome: "First name",
        cognome: "Last name",
        nazione: "Country of residence",
        ncivico: "Street number",
        indirizzo: "Address (residence or domicile)",
        localita: "Locality",
        citta: "City",
        comune: "Municipality",
        cap: "Postal code",
        provincia: "Province or district",
        prefissotelefonico: "International phone prefix",
        numerotelefonico: "Mobile phone number",
        mail: "E‑mail",
        email_confirm_label: "Confirm e‑mail",
        email_mismatch: "E‑mails do not match",

        legendainfoevento: "Reported issue",
        appcontactless: "The issue you reported relates to",
        appcontactlessOptions: ["--Select--",
          "Purchasing tickets via contactless payment (credit/debit card)",
          "Validating paper tickets with QR code on buses",
          "Tpl Fvg mobile app",
          "Glimble mobile app"
        ],
        tipoproblemacontactless: "Specify the issue you encountered",
        tipoproblemacontactlessOptions: {
          "--Select--": [],
          "Purchasing tickets via contactless payment (credit/debit card)": [
            "Credit/debit card was blocked",
            "Charged amount does not match purchase",
            "I purchased ticket(s) but charges did not appear on card",
            "Charges appeared on different day than travel",
            "Other"
          ],
          "Validating paper tickets with QR code on buses": [
            "Unable to validate ticket",
            "A ticket appears validated though I never used it",
            "Other"
          ],
          "Tpl Fvg mobile app": [
            "I bought ticket(s) that did not appear",
            "Unable to access my profile",
            "Unable to validate purchased tickets",
            "Subscription not visible in the app",
            "Other"
          ],
          "Glimble mobile app": []
        },
        appcontactlessOptionsRequired: {
          "Purchasing tickets via contactless payment (credit/debit card)": ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime",   "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],

          "Validating paper tickets with QR code on buses":["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"] ,
          "Tpl Fvg mobile app": ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
          "Glimble mobile app": ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"]
        },
        appcontactlessOptionsShowHide: {
          "Purchasing tickets via contactless payment (credit/debit card)": {
            show: ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["numerotelefonicoapp", "indirizzomailapp"]
          },
          "Validating paper tickets with QR code on buses": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "numerotelefonicoapp", "indirizzomailapp"]
          },
          "Tpl Fvg mobile app": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "numerotelefonicoapp", "indirizzomailapp", "tipoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet"]
          },
          "Glimble mobile app": {
            show: ["accountTpl", , "dataoraevento", "descrizione", "numerotelefonicoapp", "indirizzomailapp"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "linea", "nvettura", "tipoproblemacontactless"]
          }
        },
        circuitocarta: "Select your card’s scheme",
        circuitocartaOptions: ["--Select--", "Mastercard", "Visa", "American Express", "Maestro", "VPay", "Other"],

        accountTpl: "Operating company",
        altrocircuito: "Specify your card’s scheme",
        panintro: "Enter the first and last 4 digits of your card number (PAN)",
        panprime: "First 4 digits",
        panultime: "Last 4 digits",
        panvirtualeintro: "If you use a virtual card (e.g. Apple Pay/Google Pay), enter its 4‑digit PAN",
        panvirtuale: "Virtual PAN",
        wallet: "Select your wallet",
        walletOptions: ["--Select--", "Apple Pay", "Google Pay", "Other"],
        altrowallet: "Specify your wallet",
        dataoraevento: "Date and time of the event",
        linea: "Bus line where the issue occurred or was noticed",
        nvettura: "Bus registration number",
        introdescrizione: "Briefly yet clearly describe the issue. Specify what you expected and what happened instead",
        descrizione: "Description of the issue",
        tipoluogoproblemacontactless: "Did the issue happen on only one bus or is it recurring?",
        tipoluogoproblemacontactlessOptions: ["--Select--", "On one bus only", "Always"],
        indirizzomailapp: "E‑mail associated with your app profile",
        numerotelefonicoapp: "Phone number associated with your app profile",

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
        accountTpl: "Indica l’azienda sul cui servizio urbano hai rilevato il problema. Se non sai quale azienda indicare, scegli l’opzione TPL FVG",
        panintro: "Il PAN (Primary Account Number) è il numero da 13 a 19 cifre stampato sulla tua carta di pagamento. Le prime 4 e le ultime 4 cifre servono a identificare la transazione",
        panvirtualeintro: "Se hai virtualizzato la tua carta in un wallet, entra nel wallet per visualizzare il PAN. Il PAN del wallet ha solo 4 cifre, sempre diverse da quelle della carta fisica",
        dataoraevento: "Indica la data e l’ora dell’operazione o del momento in cui hai rilevato il problema. Se non conosci l’orario esatto, indica quello approssimativo o il momento in cui ti sei accorto del problema",
        linea: "Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee urbane operate da Tpl Fvg. Se la segnalazione o l’evento non sono collegati a una linea, puoi lasciare questo campo in bianco",
        nvettura: "Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola non coincide mai con il numero di linea",
        numerotelefonicoapp: "Inserisci il numero di telefono che hai usato per attivare l’app o su cui l’app è installata, senza indicare il prefisso internazionale",
        ultimo: ""



      }
    }
  }
};