
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE SEGNALA IL PROBLEMA",
        erroreCampoObbligatorio: "Devi compilare questo campo",
        valoreNonValidoDatalist: "Devi selezionare un valore dalla lista",
        seleziona: "--Seleziona--",
        nome: "Nome",
        cognome: "Cognome",
        nazione: "Nazionalità",
        indirizzo: "Indirizzo di residenza (via, piazza, corso)",
        ncivico: "N° civico",
        comune: "Comune",
        citta: "Città",
        localita: "Località",
        cap: "CAP",
        provincia: "Provincia",
        mail: "E-mail",
        abbonatosino: "Abbonato",
        numerotesserinoidentificativo: "Numero di tesserino identificativo Tpl Fvg (se ne sei titolare)",

        legendadaticontatto: "INFORMAZIONI SUL CONTATTO",
        prefissotelefonico: "Prefisso telefonico internazionale del numero d cui si è contattato il call center",
        numerotelefonico: "Numero di telefono da cui si è contattato il call center",
        dataoraevento: "Data e ora in cui il contatto è avvenuto",
        accounttpl: "A quale azienda si riferiva la tua chiamata?",
        tipoproblema: "Quale problema hai riscontrato?",
        tipoproblemaOptions: ["--Seleziona--",
          "Tempi di attesa troppo lunghi",
          "Non sono riuscito a parlare con un operatore",
          "La chiamata è stata interrotta prima della conclusione",
          "L’operatore non mi ha fornito assistenza o non ha saputo rispondere alla mia richiesta",
          "L’operatore mi ha dato una risposta sbagliata o incompleta",
          "L’operatore è stato scortese o poco professionale",
          "Altro"
        ],
        descrizione: "Descrizione dell'evento",
        introdescrizione: "Descrivi il problema in modo sintetico ma completo, fornendo tutte le informazioni utili per la ricostruzione della chiamata. Se desideri allegare immagini, titoli di viaggio o altri documenti utili, potrai farlo rispondendo alla e-mail di notifica che riceverai dopo aver compilato questo form.",
        invia: "Invia segnalazione",
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
        dataoraevento: "Se non ricordi con esattezza la data e l’ora del contatto, indica un dato approssimativo: ci aiuterà a risalire alla chiamata",
        accounttpl: "Indica l’azienda a cui era riferita la tua chiamata: se non la conosci, o se la chiamata riguardava servizi non riconducibili a una singola azienda consorziata, seleziona l’opzione TPL FVG",
        numerotesserinoidentificativo: `<div>
          È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo, sia sugli abbonamenti acquistati utilizzando quel tesserino.<br/>
          <img src="abbonamento_tipo.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
        </div>`,
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "PERSONAL DETAILS OF THE PERSON REPORTING THE ISSUE",
        valoreNonValidoDatalist: "You must selecta a value from list",
        erroreCampoObbligatorio: "You must fill this field",
        seleziona: "--Select--",
        nome: "First Name",
        cognome: "Last Name",
        nazione: "Country",
        indirizzo: "Address (street, square, avenue) ",
        ncivico: "Street N°",
        comune: "Municipality",
        citta: "City",
        localita: "Locality",
        cap: "Zip Code",
        provincia: "Province",
        mail: "E-mail",
        abbonatosino: "Pass holder",
        numerotesserinoidentificativo: "Tpl Fvg identification card number (if the complainant holds one)",

        legendadaticontatto: "CONTACT INFORMATION",
        prefissotelefonico: "International telephone prefix of the number used to contact the call center",
        numerotelefonico: "Phone number used to contact the call center ",
        dataoraevento: "Date and time of contact",
        accounttpl: "Which company was your call regarding?",


        tipoproblema: "What problem did you encounter?",
        tipoproblemaOptions: ["--Select--",
          "Waiting times were too long",
          "I was unable to speak with an operator",
          "The call was disconnected before it was completed",
          "The operator did not assist me or was unable to answer my request",
          "The operator gave me an incorrect or incomplete response",
          "The operator was rude or unprofessional",
          "Other"
        ],
        descrizione: "Description of the event",
        introdescrizione: "Please describe the issue briefly but thoroughly, providing all information useful for reconstructing the call. If you wish to attach images, travel tickets, or other relevant documents, you can do so by replying directly to the notification e-mail you will receive after submitting this form.",
        consensoobbligatorio: "CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
        consensofacoltativo: "CONSENSI FACOLTATIVI",
        indaginidemoscopiche: "Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
        attivitacommerciali: "Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
        analisipreferenze: "Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
        comunicazionepartner: "Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
        cessioneterzi: "Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",

        invia: "Report issue",

        ultimo: ""

      },
      tooltips: {
        dataoraevento: "If you don’t remember the exact date and time of the contact, please provide an approximate one: it will help us trace the call.",
        accounttpl: "Select the company your call referred to. If you're not sure, or if the call concerned services not attributable to a specific consortium company, select the TPL FVG option",
        numerotesserinoidentificativo: `<div>
          It is the seven-digit number that uniquely identifies the subscriber: you can find it both on the identification card and on the subscriptions purchased using that card.<br/>
          <img src="abbonamento_tipo.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
        </div>`,
        ultimo: ""



      }
    }
  }
};