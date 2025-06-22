
const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "",
        seleziona: "--Seleziona--",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        legendaorganizzazione:"DATI DELL’ORGANIZZAZIONE CHE RICHIEDE L’INTENSIFICAZIONE DEL SERVIZIO ",
        tipoSoggetto: "Chi richiede l’intensificazione ",
        tiposoggettoOptions: ["--Seleziona--",
          "Scuola, università o istituto di formazione",
          "Ente pubblico (non formativo)",
          "Associazione",
          "Azienda"
        ],
        ragioneSociale:"Denominazione dell’organizzazione ",
        nazione:"Sede dell’organizzazione",
        indirizzo:"Indirizzo dell’organizzazione",
        ncivico:"Numero civico",
        comune:"Comune",
        citta:"Città",
        localita:"Località o frazione",
        cap:"CAP",
        provincia:"Provincia / Regione / Stato",
        mailorganizzazione:"E-mail dell’organizzazione",
        email_confirm_label:"Ripeti e-mail",
        email_invalid:"Verifica l’indirizzo e-mail.",
          email_mismatch: "Verifica l’indirizzo e-mail.",
        numerotelefonicoorganizzazione:"Numero di telefono dell’organizzazione",
        prefissoorganizzazione:"Prefisso telefonico internazionale",
        
        legendareferente:"DATI DEL REFERENTE DELL’ORGANIZZAZIONE",
        nome:"Nome",
        cognome:"Cognome",
        mail:"E-mail",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di telefono del referente",
        legendaserviziorichiesto:"SERVIZIO RICHIESTO",
        tipointensificazione:"Tipo di servizio richiesto",
        tipointensificazioneOptions:["--Seleziona--","Uscita didattica o gita scolastica",
                                    "Intensificazione per eventi sul territorio"],
        tipointensificazioneOptionsShowHide: {
            "Uscita didattica o gita scolastica": {
            show: [ "linea_andata","npartecipanti","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"],
            hide: ["nomeevento","sedeevento","datainizioevento","datafineevento" ]
          },
          "Intensificazione per eventi sul territorio": {
            show: ["npartecipanti", "nomeevento","sedeevento","datainizioevento","datafineevento"  ],
            hide: [ "linea_andata",,"andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"]
          }
        },
        accounttpl:"Territorio/azienda di riferimento",
        npartecipanti:"Numero di partecipanti previsto",
        linea_andata:"Percorso di andata",
        andata_partenza_dataora:"Data e ora di partenza (andata)",
        andata_luogo_partenza:"Luogo di partenza (andata)",
        andata_luogo_destinazione:"Destinazione (andata)",
        linea_ritorno:"Percorso di ritorno",
        ritorno_partenza_dataora:"Data e ora di partenza (ritorno)",
        ritorno_luogo_partenza:"Luogo di partenza (ritorno)",
        ritorno_luogo_destinazione:"Destinazione (ritorno)",
        nomeevento:"Nome dell'evento",
        sedeevento:"Sede dell'evento",
        datainizioevento:"Data di inizio evento",
        datafineevento:"Data di fine evento",
        descrizione:"Descrizione",
        introdescrizione:"Inserisci eventuali ulteriori dettagli per verificare la disponibilità del servizio.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",

        invia:"Invia",

        ultimo: ""
      },
      tooltips: {

          comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
            prefissoorganizzazione:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        accounttpl:"Indica l’azienda di competenza per il servizio richiesto. Se non sai quale azienda indicare, scegli l’opzione TPL FVG.",
        npartecipanti:"Se non conosci ancora il numero esatto di partecipanti, indica una stima verosimile. Specifica anche, se già noto, il numero di persone con disabilità motoria che utilizzano una sedia a rotelle. ",
        linea_andata:"Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipende l’elenco delle linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, ti verranno mostrate tutte le linee gestite da Tpl Fvg. Se non conosci la linea che copre la direttrice di tuo interesse, puoi lasciare questo campo vuoto. Se la richiesta di intensificazione riguarda più linee, indica quella prevalente.",
        linea_ritorno:"Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipende l’elenco delle linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, ti verranno mostrate tutte le linee gestite da Tpl Fvg. Se non conosci la linea che copre la direttrice di tuo interesse, puoi lasciare questo campo vuoto. Se la richiesta di intensificazione riguarda più linee, indica quella prevalente.",

        andata_luogo_partenza:"Indica il luogo da dove intendi partire. Esempi: stazione ferroviaria di Pordenone / piazza Oberdan, Trieste / autostazione di Udine.",
          andata_luogo_destinazione:"Indica la destinazione del viaggio. Esempi: Castello di Miramare, Trieste / Castello di Gorizia / Gallerie del Tiepolo, Udine.",
          ritorno_luogo_partenza:"Indica il luogo di partenza del viaggio di ritorno.",
          ritorno_luogo_destinazione:"Indica la destinazione del viaggio di ritorno.",


        
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "",
        seleziona: "--Select--",
        codiceFiscaleNonValido: "The entered Italian tax code is not valid.",
        valoreNonValidoDatalist: "Select an option from the list.",

        
        legendaorganizzazione: "DATA OF THE ORGANIZATION REQUESTING SERVICE INTENSIFICATION",
        tipoSoggetto: "Who is requesting the service intensification",
        tiposoggettoOptions: ["--Select--",
          "School, university, or training institute",
          "Public authority (not related to education)",
          "Association",
          "Company"
        ],
        ragioneSociale: "Name of the organization",
        nazione: "Country of the organization’s headquarters",
        indirizzo: "Address of the organization",
        ncivico: "Street number",
        comune: "Municipality",
        citta: "City",
        localita: "Locality or hamlet",
        cap: "Postal code",
        provincia: "Province / Region / State",
        mailorganizzazione: "Organization’s e-mail address",
        email_confirm_label: "Repeat e-mail address",

        numerotelefonicoorganizzazione: "Telephone number of the organization",
        prefissoorganizzazione: "International dialling code",

          legendareferente: "CONTACT PERSON DETAILS",
          nome: "First name",
          cognome: "Last name",
          mail: "E-mail",
          prefissotelefonico: "International dialling code",
          numerotelefonico: "Contact person's telephone number",
          legendaserviziorichiesto: "REQUESTED SERVICE",
          tipointensificazione: "Type of requested service",
          tipointensificazioneOptions: ["--Select--", "Educational outing or school trip", "Service intensification for local events"],
      
          tipointensificazioneOptionsShowHide: {
              "Educational outing or school trip": {
              show: [ "linea_andata","npartecipanti","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"],
              hide: ["nomeevento","sedeevento","datainizioevento","datafineevento" ]
            },
            "Service intensification for local events": {
              show: ["npartecipanti", "nomeevento","sedeevento","datainizioevento","datafineevento"  ],
              hide: [ "linea_andata","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"]
            }
          },
        accounttpl: "Reference area/company",
        npartecipanti: "Expected number of participants",
        linea_andata: "Outbound route",
        andata_partenza_dataora: "Departure date and time (outbound)",
        andata_luogo_partenza: "Departure location (outbound)",
        andata_luogo_destinazione: "Destination (outbound)",
        linea_ritorno: "Return route",
        ritorno_partenza_dataora: "Departure date and time (return)",
        ritorno_luogo_partenza: "Departure location (return)",
        ritorno_luogo_destinazione: "Destination (return)",
        nomeevento: "Event name",
        sedeevento: "Event venue",
        datainizioevento: "Event start date",
        datafineevento: "Event end date",
        descrizione: "Description",
        introdescrizione: "Enter any additional details to help us check service availability.",

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
            comune: "Select a municipality and its corresponding postal code from the available options in the menu.",
            prefissoorganizzazione: "Select the international dialling code from the menu. The default value is set to +39.",
            prefissotelefonico: "Select the international dialling code from the menu. The default value is set to +39.",
            accounttpl: "Specify the company responsible for the requested service. If you are unsure which company to select, choose the TPL FVG option.",
            npartecipanti: "If you do not yet know the exact number of participants, provide a reasonable estimate. If already known, also specify the number of people with motor disabilities who use a wheelchair.",
            linea_andata: "This field becomes active after selecting the reference company, which determines the list of available routes. If you select TPL FVG as the reference company, all routes operated by Tpl Fvg will be shown. If you do not know the route that serves your area of interest, you may leave this field blank. If the service intensification request involves multiple routes, indicate the main one.",
            linea_ritorno: "This field becomes active after selecting the reference company, which determines the list of available routes. If you select TPL FVG as the reference company, all routes operated by Tpl Fvg will be shown. If you do not know the route that serves your area of interest, you may leave this field blank. If the service intensification request involves multiple routes, indicate the main one.",
            andata_luogo_partenza: "Specify the departure location. Examples: Pordenone railway station / Piazza Oberdan, Trieste / Udine bus terminal.",
            andata_luogo_destinazione: "Specify the destination of the outbound journey. Examples: Miramare Castle, Trieste / Gorizia Castle / Tiepolo Galleries, Udine.",
            ritorno_luogo_partenza: "Specify the departure location for the return journey.",
            ritorno_luogo_destinazione: "Specify the destination for the return journey.",

        ultimo: ""



      }
    }
  }
};