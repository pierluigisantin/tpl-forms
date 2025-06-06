
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica:"DATI ANAGRAFICI DELLA PERSONA CHE RICHIEDE IL RIMBORSO",
        introtiposoggetto:"bla bla bla bla",
        erroreCampoObbligatorio: "Devi compilare questo campo",
        valoreNonValidoDatalist: "Devi selezionare un valore dalla lista",
        seleziona: "--Seleziona--",
        tipoSoggetto: "Chi è il soggetto che presenta il rimborso",
        tipoSoggettoOptions: ["--Seleziona--", "Persona fisica", "Associazione o ente"
        ],
        ragionesociale:"Associazione o ente",
        nome:"Nome",
        cognome:"Cognome",
        datanascitadichiarante:"Data di nascita",
        cfdichiarante:"Codice fiscale del richiedente (obbligatorio per chi ne sia in possesso)",
        nazione:"Nazionalità",
        indirizzo:"Indirizzo di residenza (via, piazza, corso )",
        ncivico:"N° civico",
        comune:"Comune",
        citta:"Città",
        localita:"Località",  
        cap:"CAP",
        provincia:"Provincia",
        mail:"E-mail",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",
        datiintestatario:"DATI DELL’INTESTATARIO DELL’ABBONAMENTO",
        introdatiintestatario:"bla bla intestatario bla",
        nomeintestatario:"Nome",
        cognomeintestatario:"Cognome",
        datanascitaintestatario:"Data di nascita",
        cfintestatario:"Codice fiscale",
        nazioneintestatario:"Nazionalità",
        indirizzointestatario:"Indirizzo di residenza (via, piazza, corso, n° civico)",
        comuneintestatario:"Comune",
        cittaintestatario:"Città",
        localitaintestatario:"Località",
        capintestatario:"CAP",
        localitaintestatario:"Località",
        provinciaintestatario:"Provincia",
        datiabbonamento:"DATI DELL’ABBONAMENTO DI CUI SI CHIEDE IL RIMBORSO",
        accountTpl:"Azienda che ha emesso l’abbonamento",
        numerotesserinoidentificativo:"Numero di tesserino identificativo",
        numeroserialeabbonamento:"Numero seriale dell’abbonamento",
        dataemissione:"Data di emissione dell’abbonamento",
        importopagato:"Importo pagato",
        ibanrimborso:"IBAN del conto corrente dove eventualmente effettuare il rimborso",
        nomecognomeintestatarioiban:"Nome e cognome dell’intestatario del conto corrente dove effettuare il rimborso",
        comuneiban:"Comune o Stato estero di residenza dell’intestatario del conto corrente dove effettuare il rimborso",
        descrizione:"Motivare la richiesta di rimborso",
        introdescrizione:"Descrivi in modo sintetico il motivo per cui richiedi il rimborso dell’abbonamento. Al termine della compilazione di questo form, riceverai una notifica via e-mail di apertura del caso. Per completare la richiesta, ti chiediamo di rispondere all’e-mail allegando una copia dell’abbonamento acquistato, la copia fronte e retro di un documento d’identità valido di chi richiede il rimborso e altri eventuali documenti a supporto della richiesta. L’invio della copia dell’abbonamento e di un documento d’identità è obbligatorio per procedere con la valutazione del rimborso",
        invia:"Invia richiesta di rimborso",
        ultimo: ""
      
      },
      tooltips: {
        tipoSoggetto:"Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente",
        cfintestatario:"Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso",
        indirizzointestatario:"Nel caso in cui l’intestatario dell’abbonamento non sia residente in regione, indicare il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia",
        accountTpl:"Indica l’azienda emittente riportata sull’abbonamento",
          dataemissione:"Indica la data riportata sull’abbonamento",
        numerotesserinoidentificativo:"È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino",
        numeroserialeabbonamento:"Indica il numero seriale riportato sull’abbonamento",
        importopagato:"Indica l’importo riportato sull’abbonamento",
        ibanrimborso:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        nomecognomeintestatarioiban:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        comuneiban:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        
        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "You must fill this field",
        valoreNonValidoDatalist: "You must select a value from list",
        seleziona: "--Select--",
        tipoSoggetto: "Who is requesting the refund?",
        introtiposoggetto:"bla bla bla bla",
        tipoSoggettoOptions: ["--Select--", "Individual", "Association or organization"
        ],
        ragionesociale:"Association or organization",
        nome:"First name",
        cognome:"Last name",
        datanascitadichiarante:"Date of birth",
        cfdichiarante:"Codice fiscale del richiedente (obbligatorio per chi ne sia in possesso)",
        codiceFiscaleNonValido:"Codice fiscale non valido",
        nazione:"Nazionalità",
        indirizzo:"Indirizzo di residenza (via, piazza, corso, n° civico)",
        ncivico:"Street N°",
        comune:"Comune",
        citta:"Città",
        localita:"Località",  
        cap:"CAP",
        provincia:"Provincia",
        mail:"E-mail",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",
        datiintestatario:"DATI DELL’INTESTATARIO DELL’ABBONAMENTO",
        introdatiintestatario:"bla bla intestatario bla",
        nomeintestatario:"Nome",
        cognomeintestatario:"Cognome",
        datanascitaintestatario:"Data di nascita",
        cfintestatario:"Codice fiscale",
        nazioneintestatario:"Nazionalità",
        indirizzointestatario:"Indirizzo di residenza (via, piazza, corso, n° civico)",
        comuneintestatario:"Comune",
        cittaintestatario:"Città",
        localitaintestatario:"Località",
        capintestatario:"CAP",
        localitaintestatario:"Località",
        provinciaintestatario:"Provincia",
        datiabbonamento:"DATI DELL’ABBONAMENTO DI CUI SI CHIEDE IL RIMBORSO",
        accountTpl:"Azienda che ha emesso l’abbonamento",
        numerotesserinoidentificativo:"Numero di tesserino identificativo",
        numeroserialeabbonamento:"Numero seriale dell’abbonamento",
        dataemissione:"Data di emissione dell’abbonamento",
        importopagato:"Importo pagato",
        ibanrimborso:"IBAN del conto corrente dove eventualmente effettuare il rimborso",
        nomecognomeintestatarioiban:"Nome e cognome dell’intestatario del conto corrente dove effettuare il rimborso",
        comuneiban:"Comune o Stato estero di residenza dell’intestatario del conto corrente dove effettuare il rimborso",
        descrizione:"Motivare la richiesta di rimborso",
        introdescrizione:"Descrivi in modo sintetico il motivo per cui richiedi il rimborso dell’abbonamento. Al termine della compilazione di questo form, riceverai una notifica via e-mail di apertura del caso. Per completare la richiesta, ti chiediamo di rispondere all’e-mail allegando una copia dell’abbonamento acquistato, la copia fronte e retro di un documento d’identità valido di chi richiede il rimborso e altri eventuali documenti a supporto della richiesta. L’invio della copia dell’abbonamento e di un documento d’identità è obbligatorio per procedere con la valutazione del rimborso",
        invia:"Invia richiesta di rimborso",

        ultimo: ""

      },
      tooltips: {

        ultimo: ""



      }
    }
  }
};