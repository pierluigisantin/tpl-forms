
     const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "Devi compilare questo campo",
        seleziona: "--Seleziona--",
        codiceFiscaleNonValido:"Il codice fiscale inserito non è valido",
        valoreNonValidoDatalist: "Devi selezionare un valore dalla lista",
        legendanagrafica:"DATI ANAGRAFICI DELLA PERSONA CHE PRESENTA IL RICORSO (PERSONA SANZIONATA SE MAGGIORENNE, OPPURE GENITORE O TUTORE SE MINORENNE)",
        nome:"Nome",
        cognome:"Cognome",
        cfdichiarante:"Codice fiscale (obbligatorio per chi ne sia in possesso)",
        datanascitadichiarante:"Data di nascita",
        tipoSoggetto:"In qualità di",
        tipoSoggettoOptions: ["--Seleziona--", "Persona sanzionata", "Genitore o tutore della persona sanzionata", "Ente o associazione in rappresentanza della persona sanzionata"],
        ragioneSociale:"Ente o associazione",
        nazione:"Nazionalità",
        comune:"Comune",
        indirizzo:"Indirizzo di residenza per l’eventuale invio di documentazione cartacea",
        ncivico:"Numero civico",
        nomecassettalettere:"Nome indicato sulla cassetta delle lettere",
        citta:"Città",
        localita:"Località",
        cap:"CAP",
        provincia:"Provincia",
        mail:"E-mail",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",


        legendadatisazionato:"DATI ANAGRAFICI DELLA PERSONA SANZIONATA ",
        introdatisanzionato:"bla bla persona sanz",
        nomesulverbale:"Nome",
        cognomesulverbale:"Cognome",
        datanascitasulverbale:"Data di nascita",
        cfsulverbale:"Codice fiscale (obbligatorio per chi ne sia in possesso)",


        legendainfoevento:"DATI SULLA SANZIONE",
        accounttpl:"Azienda che ha emesso la sanzione",
        numeroverbale:"Numero del verbale",
        dataoraevento:"Data e ora della sanzione",
        linea:"Nome della linea",
        nvettura:"Numero di matricola dell’autobus",
        tipoluogo:"La sanzione è stata emessa",
        tipoluogoOptions: ["--Seleziona--", "A bordo", "A terra", "Non lo so"],       
        comuneevento:"Comune dove la sanzione è stata emessa",
        descrizione:"Scritto difensivo",
        introdescrizione:"Spiega i motivi per cui contesti la sanzione, in modo sintetico ma completo. Tpl Fvg e le aziende consorziate effettueranno tutte le verifiche necessarie per ricostruire l’evento, analizzando gli orari di convalida, i tracciati satellitari degli autobus, i dati dei dispositivi contapasseggeri, gli orari in cui i controlli sono stati effettuati e i verbali redatti dagli agenti verificatori. Inoltre, ai sensi dell’articolo 48 del decreto-legge 24 aprile 2017, n. 50, potranno essere utilizzate anche le immagini registrate dai sistemi di videosorveglianza installati a bordo dei mezzi. Prima di presentare ricorso, assicurati che vi siano motivazioni oggettive e documentabili a sostegno della contestazione: la perdita del titolo di viaggio, per esempio, o la mancata convalida per dimenticanza non costituiscono motivi sufficienti per accogliere un ricorso. Nel caso in cui il ricorso venga respinto, potrà essere richiesto al trasgressore il pagamento della sanzione nella misura massima di 210 euro, oltre al prezzo del biglietto e alle eventuali spese di procedimento",
        avvertenzaprimadiinvio:"Dopo aver completato la compilazione del form, riceverai una notifica di apertura del caso via e-mail. Sarà necessario rispondere a tale e-mail allegando:1)	copia del verbale della sanzione (se disponibile);2)	copia fronte e retro di un documento d’identità della persona sanzionata, se questa è maggiorenne, oppure di un genitore o di un tutore legale se la persona sanzionata è minorenne; 3)	altri documenti utili all’istruttoria",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",

        invia:"Invia ricorso",

        ultimo:""
      },
      tooltips: {
        nome:"",
        indirizzo:"Indicare l’indirizzo completo, comprensivo del numero civico",
        numeroverbale:`<div> 
        Numero del verbale <br>
        <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
        </div>`,
        dataoraevento:`<div> 
          Indicare la data e l’ora di emissione del verbale <br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        linea:`<div> 
          Questo campo si attiva dopo aver selezionato l’azienda che ha emesso la sanzione, da cui dipendono le linee proposte. La linea è generalmente rilevabile anche dal verbale<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        nvettura:`<div>
          Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola (che non coincide mai con il numero di linea) è generalmente rilevabile anche dal verbale<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,          
        comuneevento:`<div>       
          Il comune dove la sanzione è stata emessa è rilevabile anche dal verbale<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,  
        ultimo:""
      }
    }
  },
  en: {
    translation: {
      labels: {
        erroreCampoObbligatorio: "You must fill this field",
        seleziona: "--Select--",
        codiceFiscaleNonValido:"The fiscal/tax code entered is not valid",
        valoreNonValidoDatalist: "You must select a value from list",
        legendanagrafica:"PERSONAL DETAILS OF THE PERSON SUBMITTING THE APPEAL (FINED PERSON IF OF LEGAL AGE, OR PARENT/LEGAL GUARDIAN IF THE FINED PERSON IS A MINOR)",
        nome:"Name",
        cognome:"Last name",
        cfdichiarante:"Fiscal/Tax code (mandatory if available)",
        datanascitadichiarante:"Date of birth",
        tipoSoggetto:"Acting as",
        tipoSoggettoOptions: ["--Select--", "Fined person", "Parent or legal guardian of the fined person", "Entity or association representing the fined person"],
        ragioneSociale:"Entity or association ",
        nazione:"Country",
        comune:"Municipality",
        indirizzo:"Residential address for possible postal correspondence",
        ncivico:"Street n°",
        nomecassettalettere:"Name as it appears on the mailbox",
        citta:"City ",
        localita:"Locality",
        cap:"Postal code",
        provincia:"Province or district",
        mail:"E-mail",
        prefissotelefonico:"International phone prefix ",
        numerotelefonico:"Mobile phone number",


        legendadatisazionato:"PERSONAL DETAILS OF THE FINED PERSON",
        introdatisanzionato:"bla bla persona sanz",
        nomesulverbale:"First name",
        cognomesulverbale:"Last name",
        datanascitasulverbale:"Date of birth",
        cfsulverbale:"Fiscal/Tax code (mandatory if available)",


        legendainfoevento:"FINE DETAILS",
        accounttpl:"Company that issued the fine ",
        numeroverbale:"Fine report number",        
        dataoraevento:"Date and time of the fine",
        linea:"Line name",
        nvettura:"Bus fleet number",
        tipoluogo:"The fine was issued",
        tipoluogoOptions: ["--Select--", "On board", "On the ground", "I don't know"],       
        comuneevento:"Municipality where the fine was issued",
        descrizione:"Defense statement",
        introdescrizione:"Briefly but clearly explain the reasons why you are challenging the penalty. Tpl Fvg and its consortium companies will carry out all necessary checks, including analysis of ticket validation times, GPS tracking data of the buses, passenger counting device data, inspection times, and reports completed by the inspection staff. In addition, pursuant to Article 48 of Decree-Law no. 50 of 24 April 2017, footage recorded by onboard video surveillance systems may also be used. Before submitting an appeal, please ensure that you have objective and verifiable reasons to support your claim: for example, loss of a travel pass or failure to validate due to forgetfulness are not considered sufficient grounds for accepting an appeal. If the appeal is rejected, the offender may be required to pay the full penalty of up to €210, in addition to the ticket price and any applicable administrative fees",
        avvertenzaprimadiinvio:"After completing the form, you will receive an e-mail confirming the opening of your case. You must reply to that e-mail and attach the following documents:1)	a copy of the penalty notice (if available);2)	a front and back copy of the ID document of the person fined, if they are of legal age, or of a parent or legal guardian if the person fined is a minor;3)	any other documents relevant to the review process.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
          consensofacoltativo:"CONSENSI FACOLTATIVI",
          indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
          attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
          analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
          comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
          cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",

        invia:"Contest a fine",

        ultimo:""

      },
      tooltips: {
        indirizzo:"Please enter the full address, including the street number",
        numeroverbale:`<div> 
        Numero di verbale <br>
        <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
        </div>`,
        dataoraevento:`<div> 
          Enter the date and time the penalty notice was issued, as indicated on the notice <br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        linea:`<div> 
          This field is activated after selecting the company that issued the fine. The line is usually indicated in the fine report as well<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,
        nvettura:`<div>
          The bus fleet number is a unique identification code made up of three or four digits, usually visible both on the outside and inside of the vehicle. The fleet number (which is never the same as the line number) is usually also indicated in the fine report<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,          
        comuneevento:`<div>       
          The municipality where the fine was issued is usually indicated in the fine report as well<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>        
          </div>`,  
        ultimo:""



      }
    }
  }
};