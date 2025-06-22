
const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica: "DATI ANAGRAFICI DELLA PERSONA CHE RICHIEDE IL RIMBORSO",
        introtiposoggetto: "Inserisci i dati della persona che richiede il rimborso, ovvero il titolare dell’abbonamento se questo è maggiorenne oppure un genitore, un tutore o un’associazione se l’abbonamento è intestato a un minorenne o se è stato acquistato da un’organizzazione.",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        seleziona: "--Seleziona--",
        tipoSoggetto: "Chi è il soggetto richiedente",
        tipoSoggettoOptions: ["--Seleziona--", "Persona fisica", "Associazione o ente"
        ],
        ragionesociale: "Nome associazione o ente",
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
        indirizzointestatario: "Indirizzo di residenza",
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
        tipoSoggetto: "Indica se stai richiedendo il rimborso a titolo personale o se lo fai a nome di un’associazione o di un ente.",
        nome: "Anche se la richiesta di rimborso è fatta a nome di un'associazione o di un ente, è necessario indicare i dati del referente che compila questo modulo.",
        cognome: "Anche se la richiesta di rimborso è fatta a nome di un'associazione o di un ente, è necessario indicare i dati del referente che compila questo modulo.",

        indirizzo: "Inserisci un indirizzo presso cui desideri ricevere eventuali comunicazioni via posta ordinaria.",
          comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
          prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        
        cfintestatario: "Indica il codice fiscale riportato sull’abbonamento: se l’abbonamento è stato acquistato da una emettitrice automatica e non riporta i dati dell’abbonato, non se ne può in nessun caso richiedere il rimborso.",
        indirizzointestatario: "Indica l’indirizzo di residenza dell’intestatario dell’abbonamento, comprensivo di via, numero civico e località. Se la persona non è residente in Friuli Venezia Giulia, indica il luogo dove la persona risiede o ha risieduto durante la permanenza in Friuli Venezia Giulia.",

        accountTpl: `<div>
            Indica l'azienda che ha emesso l'abbonamento, come riportato sul documento stesso.<br/><br/>
            <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        dataemissione: `</div>
            Indica la data di emissione riportata sull’abbonamento.<br/><br/>
        <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
        </div>`,
        numerotesserinoidentificativo: `</div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino.<br/><br/>
              <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
       </div>`,
        numeroserialeabbonamento: `</div>
          Indica il numero seriale riportato sull’abbonamento.<br/><br/>
          <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
          </div>`,
        importopagato: `</div>
        Indica l’importo effettivamente pagato riportato sull’abbonamento.<br/><br/>
<img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
</div>`,
        ibanrimborso: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria.",
        nomecognomeintestatarioiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria.",
        comuneiban: "Questa informazione è necessaria solo nel caso in cui l’abbonamento sia stato acquistato online dal sito https://abbonamentionline.tplfvg.it e sia stato pagato con MyBank o BancomatPay, oppure nel caso in cui sia stato acquistato presso una biglietteria aziendale o una rivendita e se ne richieda il rimborso tramite bonifico. Per tutti gli altri casi, i canali di rimborso ti saranno comunicati all’esito dell’istruttoria.",

        ultimo: ""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica: "PERSONAL DETAILS OF THE PERSON REQUESTING THE REIMBURSEMENT",
        introtiposoggetto: "Enter the details of the person submitting the reimbursement request: this may be the pass holder if of legal age, or a parent, legal guardian or organization if the pass was issued to a minor or purchased by a third party.",
        erroreCampoObbligatorio: "",
        valoreNonValidoDatalist: "Select an option from the list.",
        seleziona: "--Select--",
        tipoSoggetto: "Who is requesting the refund",
        tipoSoggettoOptions: ["--Select--", "Individual", "Association or organization"],
        ragionesociale: "Name of the association or organization",
        nome: "First name",
        cognome: "Last name",
        datanascitadichiarante: "Date of birth",
        cfdichiarante: "Italian tax code of the applicant (required if available)",
        nazione: "Country of residence",
        indirizzo: "Residential or domicile address",
        ncivico: "Street number",
        comune: "Municipality",
        citta: "City",
        localita: "Local area",
        cap: "Postal code",
        provincia: "Province / Region / State",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile number",
        mail: "E-mail",
        email_confirm_label: "Repeat e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",
        datiintestatario: "PASS HOLDER’S DETAILS",
        introdatiintestatario: "Complete this section only if the pass holder is a minor or someone other than the person requesting the reimbursement. Otherwise, you may leave it blank.",
        nomeintestatario: "First name",
        cognomeintestatario: "Last name",
        datanascitaintestatario: "Date of birth",
        cfintestatario: "Italian tax code",
        nazioneintestatario: "Country of residence",
        indirizzointestatario: "Residential address",
        indirizzointestatario: "Residential address",
        comuneintestatario: "Municipality",
        cittaintestatario: "City",
        localitaintestatario: "District",
        capintestatario: "Postal code",
        provinciaintestatario: "Province",
        datiabbonamento: "PASS DETAILS FOR WHICH THE REFUND IS REQUESTED",
        accountTpl: "Company that issued the pass",
        numerotesserinoidentificativo: "Personal pass ID number",
        numeroserialeabbonamento: "Subscription serial number",
        tipoabbonamento: "Type of pass",
        tipoabbonamentoOptions: [
          "--Select--",
          "Biweekly",
          "Monthly",
          "Half-yearly",
          "Discounted school pass for FVG residents",
          "Standard school pass (10 months)",
          "Annual (12 months)",
          "Discounted pass for persons with disabilities"
        ],
        canalediacquisto: "Purchase channel",
        canalediacquistoOptions: [
          "--Select--",
          "Company ticket office",
          "External retailer",
          "Online (Tpl Fvg website)",
          "Dropticket",
          "Other"
        ],
        dataemissione: "Pass issue date",
        importopagato: "Amount paid",
        ibanrimborso: "IBAN of the bank account to which the refund should be made, if applicable",
        nomecognomeintestatarioiban: "Name and surname of the bank account holder receiving the refund",
        comuneiban: "Municipality or foreign country of residence of the bank account holder receiving the refund",
        descrizione: "Reason for the refund request",
        introdescrizione: "Briefly explain why you are requesting a refund. Once completed, you will receive a confirmation e-mail. To complete the request, reply to the e-mail by attaching: a copy of the purchased pass, a front and back copy of the applicant’s identity document and, if you consider it useful, any additional documents. The copy of the pass and of the identity document are mandatory for refund evaluation.",

        
        consensoobbligatorio: "MANDATORY CONSENT",
          privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
          consensofacoltativo: "OPTIONAL CONSENTS",
          indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
          attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
          analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
          comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
          cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",

        invia: "Submit the form",
      

},
  tooltips: {
    tipoSoggetto: "Specify whether you are requesting the reimbursement as an individual or on behalf of an association or organization.",
    nome: "Even if the reimbursement request is submitted on behalf of an association or organization, you must enter the details of the person filling out this form.",
    cognome: "Even if the reimbursement request is submitted on behalf of an association or organization, you must enter the details of the person filling out this form.",

    indirizzo: "Enter an address where you wish to receive any communications by regular mail.",
      comune: "Select a municipality and its corresponding postal code from the dropdown menu.",
      prefissotelefonico: "Select the international dialing code from the list. The default value is +39",
    
    cfintestatario: "Enter the Italian tax code shown on the pass. If the pass was purchased from a self-service machine and does not include the holder’s personal data, reimbursement cannot be requested under any circumstances.",
    indirizzointestatario: "Enter the residential address of the pass holder, including street name, street number, and locality. If the person is not a resident of Friuli Venezia Giulia, enter the place where they currently live or lived during their stay in Friuli Venezia Giulia.",

    accountTpl: `<div>
      Enter the name of the company that issued the pass, as shown on the document.<br/><br/>
      <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
    </div>`,

    dataemissione: `</div>
      Enter the issue date as shown on the pass.<br/><br/>
      <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
    </div>`,

    numerotesserinoidentificativo: `</div>
      This is the seven-digit number that uniquely identifies the subscriber. It appears on both the personal ID card and on passes purchased using that card.<br/><br/>
      <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
    </div>`,

    numeroserialeabbonamento: `</div>
      Enter the serial number as shown on the pass.<br/><br/>
      <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
    </div>`,

    importopagato: `</div>
      Enter the actual amount paid as shown on the pass.<br/><br/>
      <img src="immagine_tooltip_abbonamenti.png" style="max-width: 100%; height: auto;"/>
    </div>`,

    ibanrimborso: "This information is required only if the pass was purchased online from https://abbonamentionline.tplfvg.it and paid using MyBank or BancomatPay, or if it was purchased from a company ticket office or authorized retailer and reimbursement is requested via bank transfer. For all other cases, reimbursement instructions will be provided after the request is reviewed.",

    nomecognomeintestatarioiban: "This information is required only if the pass was purchased online from https://abbonamentionline.tplfvg.it and paid using MyBank or BancomatPay, or if it was purchased from a company ticket office or authorized retailer and reimbursement is requested via bank transfer. For all other cases, reimbursement instructions will be provided after the request is reviewed.",

    comuneiban: "This information is required only if the pass was purchased online from https://abbonamentionline.tplfvg.it and paid using MyBank or BancomatPay, or if it was purchased from a company ticket office or authorized retailer and reimbursement is requested via bank transfer. For all other cases, reimbursement instructions will be provided after the request is reviewed."
}
}
}
};