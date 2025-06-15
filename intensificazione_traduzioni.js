
const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "Devi compilare questo campo",
        seleziona: "--Seleziona--",
        valoreNonValidoDatalist: "Devi selezionare un valore dalla lista",
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
        erroreCampoObbligatorio: "You must fill this field",
        seleziona: "--Select--",
        codiceFiscaleNonValido: "The fiscal/tax code entered is not valid",
        valoreNonValidoDatalist: "You must select a value from list",



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

        ultimo: ""



      }
    }
  }
};