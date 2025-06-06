
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
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",

        invia:"Invia richiesta di rimborso",
        ultimo: ""
      
      },
      tooltips: {
        tipoSoggetto:"Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente",
        cfintestatario:"Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso",
        indirizzointestatario:"Nel caso in cui l’intestatario dell’abbonamento non sia residente in regione, indicare il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia",
        
        accountTpl:`<div>
            Indica l'azienda emittente riportata sull abbonamento<br/>
            <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
          dataemissione:`</div>
            Indica la data riportata sull’abbonamento<br/>
        <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
        </div>`,
                numerotesserinoidentificativo:`</div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino<br/>
              <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
       </div>`,
        numeroserialeabbonamento:`</div>
          Indica il numero seriale riportato sull’abbonamento<br/>
          <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        importopagato:`</div>
        Indica l’importo riportato sull’abbonamento<br/>
<img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
</div>`, 
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
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",

        invia:"Invia richiesta di rimborso",

        ultimo: ""

      },
      tooltips: {

        tipoSoggetto:"Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente",
          cfintestatario:"Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso",
          indirizzointestatario:"Nel caso in cui l’intestatario dell’abbonamento non sia residente in regione, indicare il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia",

          accountTpl:`<div>
              Indica l'azienda emittente riportata sull abbonamento<br/>
              <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
            </div>`,
            dataemissione:`</div>
              Indica la data riportata sull’abbonamento<br/>
          <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
                  numerotesserinoidentificativo:`</div>
                È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino<br/>
                <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
         </div>`,
          numeroserialeabbonamento:`</div>
            Indica il numero seriale riportato sull’abbonamento<br/>
            <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
            </div>`,
          importopagato:`</div>
          Indica l’importo riportato sull’abbonamento<br/>
        <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
        </div>`, 
          ibanrimborso:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
          nomecognomeintestatarioiban:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",
          comuneiban:"Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria",


        
        ultimo: ""



      }
    }
  }
};