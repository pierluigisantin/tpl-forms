


const resources = {
  it: {
    translation: {
      labels: {

        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE PRESENTA IL RECLAMO",
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

        comune: "Comune",

        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        mail: "E-mail",
        appcontactless: "Il problema che hai rilevato riguarda",
        appcontactlessOptions: ["--Seleziona--", "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)",
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus",
          "L’app Tpl Fvg",
          "L’app Glimble"
        ],
        appcontactlessOptionsShowHide: {
          "L’acquisto di biglietti tramite dispositivi contactless con carta di credito o carta di debito (bancomat)": {
            show: ["circuitocarta", "accountTpl", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet", "dataoraevento", "linea", "nvettura", "descrizione"],
            hide: ["tipoluogoproblemacontactless","numerotelefonicoapp","indirizzomailapp"]
          },
          "La convalida di biglietti cartacei con QR code tramite lettura ottica a bordo degli autobus": {
            show: [ "accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione", "tipoluogoproblemacontactless"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet","numerotelefonicoapp","indirizzomailapp"]
          },
          "L’app Tpl Fvg": {
            show: ["accountTpl", , "dataoraevento", "linea", "nvettura", "descrizione","numerotelefonicoapp","indirizzomailapp"],
            hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet"]
          },
          "L’app Glimble": {
            show: ["accountTpl", , "dataoraevento",  "descrizione","numerotelefonicoapp","indirizzomailapp"],
              hide: ["circuitocarta", "panintro", "panprime", "panultime", "panvirtualeintro", "panvirtuale", "wallet", "altrowallet","linea", "nvettura","tipoproblemacontactless"]
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
        descrizione: "Descrizione del problema ",
        tipoluogoproblemacontactless: "Il problema si è verificato su un solo autobus o si verifica sempre? ",
        tipoluogoproblemacontactlessOptions: ["--Seleziona--", "Su un solo autobus", "Sempre"],
        indirizzomailapp: "Indirizzo e-mail associato al profilo nell’app Tpl Fvg",
        numerotelefonicoapp: "Numero di telefono associato al profilo",
        ultimo: ""
      },
      tooltips: {

        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {


        ultimo: ""

      },
      tooltips: {

        ultimo: ""



      }
    }
  }
};