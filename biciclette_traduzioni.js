
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

        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Ho letto e compreso l'informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e <a href=\"https://tplfvg.it/it/azienda/mia-privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">accessibile tramite questo link</a>.",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Partecipazione a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
        attivitacommerciali: "Comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
        comunicazionepartner: "Informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg.",
        cessioneterzi: "Comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",
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

        consensoobbligatorio: "MANDATORY CONSENT",
        privacy: "I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and <a href=\"https://tplfvg.it/it/azienda/mia-privacy/\" target=\"_blank\" rel=\"noopener noreferrer\">accessible via this link</a>.",
        consensofacoltativo: "OPTIONAL CONSENTS",
        indaginidemoscopiche: "Taking part in surveys or market research on local public transport services.",
        attivitacommerciali: "Information about offers and discounts on the services of Tpl Fvg and its consortium companies.",
        comunicazionepartner: "Commercial information about products or services of third parties that are partners of Tpl Fvg.",
        cessioneterzi: "Sharing of my personal data with third parties for commercial and marketing purposes.",

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