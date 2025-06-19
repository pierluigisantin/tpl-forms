
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE RICHIEDE IL RIMBORSO",
        introtiposoggetto: "Inserisci i dati della persona che richiede il rimborso (il titolare dell’abbonamento se maggiorenne oppure un genitore, un tutore o un’associazione se l’abbonamento è intestato a un minorenne o se è stato acquistato da un’organizzazione.",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        seleziona: "--Seleziona--",
        tipoSoggetto: "Chi è il soggetto richiedente",
        tipoSoggettoOptions: ["--Seleziona--", "Persona fisica", "Associazione o ente"
        ],
        ragionesociale: "Associazione o ente",
        nome: "Nome",
        cognome: "Cognome",
        datanascitadichiarante: "Data di nascita",
        cfdichiarante: "Codice fiscale del richiedente (obbligatorio per chi ne sia in possesso)",
        nazione: "Nazione di residenza",
        indirizzo: "Indirizzo di residenza o domicilio",
          ncivico:"Numero civico",
          comune: "Comune",
          citta:"città",
          localita:"Località o frazione",
          cap:"cap",
          provincia:"Provincia / Regione / Stato",
            prefissotelefonico:"Prefisso telefonico internazionale",
          numerotelefonico:"Numero di cellulare",
          mail: "E-mail",
          email_confirm_label:"ripeti e-mail",
        email_invalid:"Verifica l’indirizzo e-mail.",
          email_mismatch: "Verifica l’indirizzo e-mail.",
        datiintestatario: "DATI DELL’INTESTATARIO DELL’ABBONAMENTO",
        introdatiintestatario: "Compila questa sezione solo se l’intestatario dell’abbonamento è minorenne oppure è una persona diversa da chi richiede il rimborso. Se coincide con il richiedente, puoi lasciarla in bianco.",
        nomeintestatario: "Nome",
        cognomeintestatario: "Cognome",
        datanascitaintestatario: "Data di nascita",
        cfintestatario: "Codice fiscale",
        nazioneintestatario: "Nazione di residenza",
        indirizzointestatario: "Indirizzo di residenza (via, piazza, corso, n° civico)",
        comuneintestatario: "Comune",
        cittaintestatario: "Città",
        localitaintestatario: "Località",
        capintestatario: "CAP",
        localitaintestatario: "Località",
        provinciaintestatario: "Provincia",
        datiabbonamento: "DATI DELL’ABBONAMENTO DI CUI SI CHIEDE IL RIMBORSO",
        accountTpl: "Azienda che ha emesso l’abbonamento",
        numerotesserinoidentificativo: "Numero di tesserino identificativo",
        numeroserialeabbonamento: "Numero seriale dell’abbonamento",

        tipoabbonamento: "Tipo di abbonamento",
        tipoabbonamentoOptions: ["--Seleziona--", "Quindicinale", "Mensile", "Semestrale", "Scolastico agevolato per studenti residenti in FVG", "Scolastico ordinario (10 mesi)", "Annuale (12 mesi)", "Agevolato per persone con disabilità"],
        canalediacquisto: "Canale di acquisto",
        canalediacquistoOptions: ["--Seleziona--", "Biglietteria aziendale", "Rivendita esterna", "Online (sito web Tpl Fvg)", "Dropticket", "Altro"],


        dataemissione: "Data di emissione dell’abbonamento",
        importopagato: "Importo pagato",
        ibanrimborso: "IBAN del conto corrente dove eventualmente effettuare il rimborso",
        nomecognomeintestatarioiban: "Nome e cognome dell’intestatario del conto corrente dove effettuare il rimborso",
        comuneiban: "Comune o Stato estero di residenza dell’intestatario del conto corrente dove effettuare il rimborso",
        descrizione: "Motivare la richiesta di rimborso",
        introdescrizione: "Descrivi brevemente il motivo per cui richiedi il rimborso. Al termine della compilazione riceverai una notifica via e-mail. Per completare la richiesta, rispondi all'e-mail allegando: la copia dell’abbonamento acquistato, la copia fronte e retro di un documento d’identità del richiedente e, se lo ritieni utile, eventuali altri documenti. La copia dell’abbonamento e del documento d’identità sono obbligatorie per la valutazione del rimborso.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",

        invia: "Invia",
        ultimo: ""

      },
      tooltips: {
        tipoSoggetto: "Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente",
        cfintestatario: "Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso",
        indirizzointestatario: "Nel caso in cui l’intestatario dell’abbonamento non sia residente in regione, indicare il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia",

        accountTpl: `<div>
            Indica l'azienda emittente riportata sull abbonamento<br/>
            <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        dataemissione: `</div>
            Indica la data riportata sull’abbonamento<br/>
        <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
        </div>`,
        numerotesserinoidentificativo: `</div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino<br/>
              <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
       </div>`,
        numeroserialeabbonamento: `</div>
          Indica il numero seriale riportato sull’abbonamento<br/>
          <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        importopagato: `</div>
        Indica l’importo riportato sull’abbonamento<br/>
<img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
</div>`,
        ibanrimborso: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        nomecognomeintestatarioiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        comuneiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",

        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Select an option from the list.",
        seleziona: "--Select--",
        tipoSoggetto: "Who is requesting the refund?",
        introtiposoggetto: "bla bla bla bla",
        tipoSoggettoOptions: ["--Select--", "Individual", "Association or organization"
        ],
        ragionesociale: "Association or organization",
        nome: "First name",
        cognome: "Last name",
        datanascitadichiarante: "Date of birth",
        cfdichiarante: "Codice fiscale del richiedente (obbligatorio per chi ne sia in possesso)",
        codiceFiscaleNonValido: "Codice fiscale non valido",
        nazione: "Nazionalità",
        indirizzo: "Indirizzo di residenza (via, piazza, corso, n° civico)",
        ncivico: "Street N°",
        comune: "Comune",
        citta: "Città",
        localita: "Località",
        cap: "CAP",
        provincia: "Provincia",
        mail: "E-mail",
        email_invalid: "Please check the email address.",
        email_mismatch: "Please check the email address.",    
        prefissotelefonico: "Prefisso telefonico internazionale",
        numerotelefonico: "Numero di cellulare",
        datiintestatario: "DATI DELL’INTESTATARIO DELL’ABBONAMENTO",
        introdatiintestatario: "bla bla intestatario bla",
        nomeintestatario: "Nome",
        cognomeintestatario: "Cognome",
        datanascitaintestatario: "Data di nascita",
        cfintestatario: "Codice fiscale",
        nazioneintestatario: "Nazionalità",
        indirizzointestatario: "Indirizzo di residenza (via, piazza, corso, n° civico)",
        comuneintestatario: "Comune",
        cittaintestatario: "Città",
        localitaintestatario: "Località",
        capintestatario: "CAP",
        localitaintestatario: "Località",
        provinciaintestatario: "Provincia",
        datiabbonamento: "DATI DELL’ABBONAMENTO DI CUI SI CHIEDE IL RIMBORSO",
        accountTpl: "Azienda che ha emesso l’abbonamento",
        numerotesserinoidentificativo: "Numero di tesserino identificativo",

        tipoabbonamento: "Tipo di abbonamento",
        tipoabbonamentoOptions: ["--Seleziona--", "Quindicinale", "Mensile", "Semestrale", "Scolastico agevolato per studenti residenti in FVG", "Scolastico ordinario (10 mesi)", "Annuale (12 mesi)", "Agevolato per persone con disabilità o invalidità"],
        canalediacquisto: "Canale di acquisto",
        canalediacquistoOptions: ["--Seleziona--", "Biglietteria aziendale", "Rivendita esterna", "Online (sito web Tpl Fvg)"],

        numeroserialeabbonamento: "Numero seriale dell’abbonamento",
        dataemissione: "Data di emissione dell’abbonamento",
        importopagato: "Importo pagato",
        ibanrimborso: "IBAN del conto corrente dove eventualmente effettuare il rimborso",
        nomecognomeintestatarioiban: "Nome e cognome dell’intestatario del conto corrente dove effettuare il rimborso",
        comuneiban: "Comune o Stato estero di residenza dell’intestatario del conto corrente dove effettuare il rimborso",
        descrizione: "Motivare la richiesta di rimborso",
        introdescrizione: "Descrivi in modo sintetico il motivo per cui richiedi il rimborso dell’abbonamento. Al termine della compilazione di questo form, riceverai una notifica via e-mail di apertura del caso. Per completare la richiesta, ti chiediamo di rispondere all’e-mail allegando una copia dell’abbonamento acquistato, la copia fronte e retro di un documento d’identità valido di chi richiede il rimborso e altri eventuali documenti a supporto della richiesta. L’invio della copia dell’abbonamento e di un documento d’identità è obbligatorio per procedere con la valutazione del rimborso",
        consensoobbligatorio: "MANDATORY CONSENT",
          privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
          consensofacoltativo: "OPTIONAL CONSENTS",
          indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
          attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
          analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
          comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
          cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",

        invia: "Submit the form",

        ultimo: ""

      },
      tooltips: {

        tipoSoggetto: "Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente",
        cfintestatario: "Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso",
        indirizzointestatario: "Nel caso in cui l’intestatario dell’abbonamento non sia residente in regione, indicare il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia",

        accountTpl: `<div>
              Indica l'azienda emittente riportata sull abbonamento<br/>
              <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
            </div>`,
        dataemissione: `</div>
              Indica la data riportata sull’abbonamento<br/>
          <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        numerotesserinoidentificativo: `</div>
                È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino<br/>
                <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
         </div>`,
        numeroserialeabbonamento: `</div>
            Indica il numero seriale riportato sull’abbonamento<br/>
            <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
            </div>`,
        importopagato: `</div>
          Indica l’importo riportato sull’abbonamento<br/>
        <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
        </div>`,
        ibanrimborso: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        nomecognomeintestatarioiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
        comuneiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",



        ultimo: ""



      }
    }
  }
};