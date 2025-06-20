
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
        localita:"Località",
        cap:"CAP",
        provincia:"Provincia",
        mailorganizzazione:"E-mail dell’organizzazione",
        email_confirm_label:"Conferma la mail",
        email_invalid:"Verifica l’indirizzo e-mail.",
          email_mismatch: "Verifica l’indirizzo e-mail.",
        numerotelefonicoorganizzazione:"Numero di telefono dell’organizzazione",
        prefissoorganizzazione:"Prefisso telefonico internazionale organizzazione",
        
        legendareferente:"DATI DEL REFERENTE DELL’ORGANIZZAZIONE",
        nome:"Nome",
        cognome:"Cognome",
        mail:"Email",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di telefono",
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
        accounttpl:"Territorio e azienda di riferimento",
        npartecipanti:"Numero di partecipanti previsto",
        linea_andata:"Linea di andata",
        andata_partenza_dataora:"Data e ora di partenza dell'andata",
        andata_luogo_partenza:"Luogo di partenza dell'andata",
        andata_luogo_destinazione:"Luogo di destinazione dell'andata",
        linea_ritorno:"Linea di ritorno",
        ritorno_partenza_dataora:"Data e ora di partenza del ritorno",
        ritorno_luogo_partenza:"Luogo di partenza del ritorno",
        ritorno_luogo_destinazione:"Luogo di destinazione del ritorno",
        nomeevento:"Nome dell'evento",
        sedeevento:"Sede dell'evento",
        datainizioevento:"Data di inizio dell'evento",
        datafineevento:"Data di fine dell'evento",
        descrizione:"Descrizione",
        introdescrizione:"Inserisci eventuali ulteriori dettagli per verificare la disponibilità del servizio",
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
        accounttpl:"Indica il territorio e l’azienda di competenza. Se non sai quale azienda indicare, scegli l’opzione TPL FVG",
        npartecipanti:"Se ancora non conosci il numero esatto di partecipanti, indica una stima. Se presenti, indicare il numero di partecipanti con disabilità motoria in sedia a rotelle ",
        linea_andata:"Questo campo si attiva dopo aver selezionato l’area geografica e l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee operate da Tpl Fvg. Se non conosci la linea che opera lungo la direttrice di tuo interesse, puoi lasciare questo campo in bianco",
        linea_ritorno:"Questo campo si attiva dopo aver selezionato l’area geografica e l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee operate da Tpl Fvg. Se non conosci la linea che opera lungo la direttrice di tuo interesse, puoi lasciare questo campo in bianco",
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



          legendaorganizzazione:"",
          tipoSoggetto: "",
          tiposoggettoOptions: ["--Seleziona--",
            "Scuola, università o istituto di formazione",
            "Ente pubblico (non formativo)",
            "Associazione",
            "Azienda"
          ],
          ragioneSociale:"",
          nazione:"",
          indirizzo:"",
          ncivico:"",
          comune:"",
          citta:"",
          localita:"",
          cap:"",
          provincia:"",
          mailorganizzazione:"",
          email_confirm_label:"Confirm mail",

          numerotelefonicoorganizzazione:"",
          prefissoorganizzazione:"",

          legendareferente:"",
          nome:"",
          cognome:"",
          mail:"",
          email_invalid: "Please check the e-mail address.",
          email_mismatch: "Please check the e-mail address.",
          prefissotelefonico:"",
          numerotelefonico:"",
          legendaserviziorichiesto:"",
          tipointensificazione:"",
        tipointensificazioneOptions: [
          "--Select--",
          "Educational outing or school trip",
          "Increased service for local events"
        ],
          tipointensificazioneOptionsShowHide: {
              "Educational outing or school trip": {
              show: [ "linea_andata","npartecipanti","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"],
              hide: ["nomeevento","sedeevento","datainizioevento","datafineevento" ]
            },
            "Increased service for local events": {
              show: ["npartecipanti", "nomeevento","sedeevento","datainizioevento","datafineevento"  ],
              hide: [ "linea_andata",,"andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"]
            }
          },
          accounttpl:"",
          npartecipanti:"",
          linea_andata:"",
          andata_partenza_dataora:"",
          andata_luogo_partenza:"",
          andata_luogo_destinazione:"",
          linea_ritorno:"",
          ritorno_partenza_dataora:"",
          ritorno_luogo_partenza:"",
          ritorno_luogo_destinazione:"",
          nomeevento:"",
          sedeevento:"",
          datainizioevento:"",
          datafineevento:"",
          descrizione:"",

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

        ultimo: ""



      }
    }
  }
};