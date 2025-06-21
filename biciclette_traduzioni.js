
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI DEL RICHIEDENTE",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        seleziona: "--Seleziona--",
        nome: "Nome",
          cognome: "Cognome",
        mail: "E-mail",
          email_confirm_label:"Confirm e-mail",
          email_invalid: "Please check the e-mail address.",
          email_mismatch: "Please check the e-mail address.",

        tiposervizio :"Servizio",
        tiposerviziooptions: ["--Seleziona--", "Andata", "Andata e ritorno"],  
        tiposerviziooptionsShowHide: {
            "Andata": {
            show: [ "linea_andata","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione"],
            hide: ["linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione" ]
          },
          "Andata e ritorno": {
            show: ["linea_andata","andata_partenza_dataora","andata_luogo_partenza","andata_luogo_destinazione","linea_ritorno","ritorno_partenza_dataora","ritorno_luogo_partenza","ritorno_luogo_destinazione"  ],
            hide: [ ]
          }
        },

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


        ultimo: ""

      },
      tooltips: {

        ultimo: ""



      }
    }
  }
};