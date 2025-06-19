
     const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "",
        seleziona: "--Seleziona--",
        codiceFiscaleNonValido:"Il codice fiscale inserito non è valido.",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        legendanagrafica:"DATI DELLA PERSONA CHE PRESENTA IL RICORSO (PERSONA SANZIONATA SE MAGGIORENNE, OPPURE GENITORE O TUTORE SE MINORENNE)",
        nome:"Nome",
        cognome:"Cognome",
        cfdichiarante:"Codice fiscale (obbligatorio per chi ne sia in possesso)",
        datanascitadichiarante:"Data di nascita",
        tipoSoggetto:"In qualità di",
        tipoSoggettoOptions: ["--Seleziona--", "Persona sanzionata", "Genitore o tutore della persona sanzionata", "Ente o associazione in rappresentanza della persona sanzionata"],
        ragioneSociale:"Ente o associazione",
        nazione:"Nazionalità",
        comune:"Comune",
        indirizzo:"Indirizzo di residenza o domicilio",
        ncivico:"Numero civico",
        nomecassettalettere:"Nome indicato sulla cassetta delle lettere",
        citta:"Città",
        localita:"Località",
        cap:"CAP",
        provincia:"Provincia / Regione / Stato",
        mail:"E-mail",
        email_confirm_label:"ripeti e-mail",
        email_invalid:"Verifica l’indirizzo e-mail.",
          email_mismatch: "Verifica l’indirizzo e-mail.",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",


        legendadatisazionato:"DATI DELLA PERSONA SANZIONATA ",
        introdatisanzionato:"Compila questa sezione solo se la persona sanzionata è diversa da chi presenta il ricorso. Se si tratta della stessa persona, puoi lasciare questa sezione in bianco.",
        nomesulverbale:"Nome",
        cognomesulverbale:"Cognome",
        datanascitasulverbale:"Data di nascita",
        cfsulverbale:"Codice fiscale (obbligatorio per chi ne sia in possesso)",


        legendainfoevento:"DATI SULLA SANZIONE",
        accounttpl:"Azienda che ha emesso la sanzione",
        numeroverbale:"Numero di verbale",
        dataoraevento:"Data e ora della sanzione",
        linea:"Linea",
        nvettura:"Numero di matricola dell’autobus",
        tipoluogo:"La sanzione è stata emessa",
        tipoluogoOptions: ["--Seleziona--", "A bordo", "A terra", "Non lo so"],       
        comuneevento:"Comune dove la sanzione è stata emessa",
        descrizione:"Scritto difensivo",
        introdescrizione:"Spiega in modo chiaro e completo perché contesti la sanzione. Tpl Fvg e le aziende consorziate effettueranno tutte le verifiche necessarie per ricostruire l’evento: orari di convalida, tracciati satellitari, dati dei dispositivi contapasseggeri, orari dei controlli, verbali e immagini registrate a bordo dei bus. Presenta ricorso solo se ci sono motivazioni oggettive e documentabili: la perdita del titolo di viaggio o la mancata convalida per dimenticanza non bastano per accogliere un ricorso. In caso di rigetto, potrà essere richiesto il pagamento della sanzione fino a 210 euro, oltre al biglietto e alle eventuali spese di procedimento.",
        avvertenzaprimadiinvio:"Dopo l’invio del modulo riceverai una e-mail di conferma. Per completare il ricorso, rispondi allegando: 1) copia del verbale (se disponibile); 2) copia fronte e retro del documento d’identità della persona sanzionata (o del genitore/tutore se la persona sanzionata è minorenne); 3) altri documenti utili all’istruttoria.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",

        invia:"Invia",

        ultimo:""
      },
      tooltips: {
        nome:"",
        nazione: "Scrivi il nome del tuo Paese di residenza: è sufficiente digitare le prime lettere e poi selezionare il nome corretto dall’elenco proposto. Il campo è impostato di default su ITALIA.",
          comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
          prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        
        indirizzo:"Indica l’indirizzo di residenza o domicilio a cui inviare eventuali comunicazioni via posta ordinaria.",
        nomecassettalettere:"Indica il nome o la dicitura riportati sulla cassetta delle lettere, per evitare che eventuali comunicazioni inviate per posta ordinaria vengano restituite al mittente.",
        numeroverbale:`<div> 
        Indica il numero di verbale. <br><br>
        <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
        </div>`,
        dataoraevento:`<div> 
          Indica la data e l’ora di emissione del verbale. <br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        linea:`<div> 
          Questo campo si attiva dopo aver selezionato l’azienda che ha emesso la sanzione, da cui dipendono le linee proposte. La linea è di solito rilevabile dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        nvettura:`<div>
          Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola (che non coincide mai con il numero di linea) è di solito rilevabile dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,          
        comuneevento:`<div>       
          Il comune dove la sanzione è stata emessa è rilevabile anche dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,  
        ultimo:""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "",
        seleziona: "--Select--",
        codiceFiscaleNonValido:"The entered Italian tax code is not valid.",
        valoreNonValidoDatalist: "Select an option from the list.",
        legendanagrafica: "DETAILS OF THE PERSON SUBMITTING THE APPEAL (FINED PERSON IF OF AGE, OR PARENT/GUARDIAN IF MINOR)",
        nome: "First name",
        cognome: "Last name",
        cfdichiarante: "Italian tax code (required if available)",
        datanascitadichiarante: "Date of birth",
        tipoSoggetto: "Acting as",
        tipoSoggettoOptions: [
          "--Select--",
          "Fined person",
          "Parent or guardian of the fined person",
          "Entity or association representing the fined person"
        ],
        ragioneSociale: "Entity or association",
        nazione: "Nationality",
        comune: "Municipality",
        indirizzo: "Residential or mailing address",
        ncivico: "Street number",
        nomecassettalettere: "Name displayed on the mailbox",
        citta: "City",
        localita: "Local area or district",
        cap: "Postal code",
        provincia: "Province / Region / State",
        mail: "E-mail",
        email_confirm_label: "Repeat email",
        email_invalid: "Please check the email address.",
        email_mismatch: "Please check the email address.",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile phone number",

        legendadatisazionato: "DETAILS OF THE FINED PERSON",
        introdatisanzionato: "Complete this section only if the fined person is different from the person submitting the appeal. If it is the same person, you can leave this section blank.",
        nomesulverbale: "First name",
        cognomesulverbale: "Last name",
        datanascitasulverbale: "Date of birth",
        cfsulverbale: "Italian tax code (required if available)",

        legendainfoevento: "DETAILS OF THE FINE",
        accounttpl: "Company that issued the fine",
        numeroverbale: "Report number",
        dataoraevento: "Date and time of the fine",
        linea: "Line",
        nvettura: "Bus fleet number",
        tipoluogo: "The fine was issued",
        tipoluogoOptions: [
          "--Select--",
          "On board",
          "At the stop",
          "I don't know"
        ],
        comuneevento: "Municipality where the fine was issued",
        descrizione: "Statement of explanation",
        introdescrizione: "Clearly and fully explain why you are contesting the fine. Tpl Fvg and the consortium companies will carry out all necessary checks to reconstruct the event: validation times, GPS tracking, passenger counting devices, inspection times, reports, and video footage recorded on board the buses. Submit an appeal only if there are objective and documentable reasons: losing your travel ticket or forgetting to validate it is not sufficient to have an appeal accepted. If the appeal is rejected, a fine of up to €210 may be charged, in addition to the ticket cost and any processing fees.",
        avvertenzaprimadiinvio: "After submitting the form, you will receive a confirmation e-mail. To complete your appeal, reply to that e-mail with: 1) a copy of the report (if available); 2) a copy of the front and back of the ID of the fined person (or of the parent/guardian if the fined person is a minor); 3) any other documents useful for the assessment.",

        
        consensoobbligatorio: "MANDATORY CONSENT",
          privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
          consensofacoltativo: "OPTIONAL CONSENTS",
          indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
          attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
          analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
          comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
          cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",

        invia:"Submit the form",

        ultimo:""

      },
      tooltips: {
        nazione: "Enter the name of your country of residence: just type the first few letters and then select the correct name from the suggested list. The default value is ITALY.",
          comune: "Select a municipality and its corresponding postal code from the dropdown menu.",
          prefissotelefonico: "Select the international dialing code from the list. The default value is +39",
                
        indirizzo: "Enter the residential or mailing address where any communications by regular mail should be sent.",
nomecassettalettere: "Enter the name or wording shown on the mailbox, to prevent communications sent by regular mail from being returned to sender.",
numeroverbale: `<div> 
Enter the fine report number.<br><br>
<img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
</div>`,
dataoraevento: `<div> 
Enter the date and time when the fine was issued.<br><br>
<img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
</div>`,
linea: `<div> 
This field is activated after selecting the company that issued the fine, which determines the available lines. The line is usually indicated on the report.<br><br>
<img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
</div>`,
nvettura: `<div>
The bus fleet number is a 3- or 4- digit code used to identify the vehicle. It is usually visible both inside and outside the bus. The fleet number (which is never the same as the line number) is usually indicated on the report.<br><br>
<img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
</div>`,          
comuneevento: `<div>       
The municipality where the fine was issued is also usually indicated on the report.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,  
        ultimo:""



      }
    }
  }
};