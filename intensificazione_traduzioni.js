
const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "Devi compilare questo campo",
        seleziona: "--Seleziona--",
        tiposoggetto: "Chi richiede l’intensificazione ",
        tiposoggettoOptions: ["--Seleziona--",
          "Scuola, università o istituto di formazione",
          "Ente pubblico (non formativo)",
          "Associazione",
          "Azienda"
        ],
        ragioneSociale:"Denominazione dell’organizzazione ",
        nazione:"Sede dell’organizzazione",

        valoreNonValidoDatalist: "Devi selezionare un valore dalla lista",

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
        erroreCampoObbligatorio: "You must fill this field",
        seleziona: "--Select--",
        codiceFiscaleNonValido: "The fiscal/tax code entered is not valid",
        valoreNonValidoDatalist: "You must select a value from list",

        ultimo: ""

      },
      tooltips: {

        ultimo: ""



      }
    }
  }
};