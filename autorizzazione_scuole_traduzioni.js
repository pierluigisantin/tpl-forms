const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica:"DATI ANAGRAFICI DELLA PERSONA CHE PRESENTA IL RECLAMO",
        valoreNonValidoDatalist:"Seleziona un'opzione dall’elenco.",
        erroreCampoObbligatorio: "",
        seleziona: "--Seleziona--",

        tipoSoggetto: "Chi è il soggetto che presenta il reclamo",
        tipoSoggettoOptions: ["--Seleziona--", "Privato cittadino", "Azienda", "Ente pubblico", "Associazione"],
        ragioneSociale: "Nome associazione, ente pubblico o azienda",
        nome: "Nome",
        cognome: "Cognome",
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
        abbonatosino:"Abbonato",
        numerotesserinoidentificativo: `Numero di tesserino identificativo Tpl Fvg (se il reclamante ne è titolare)`,


        legendainfoevento:"INFORMAZIONI SULL’EVENTO",
        accountTpl: "Azienda di riferimento",
        servizio: "Tipo di servizio",
        dataoraevento: "Data e ora dell'evento",
        tipoluogo:"L’evento si è verificato",
        tipoluogoOptions: ["--Seleziona--", "A bordo", "A terra (fermate, capolinea, autostazioni)", "In una rivendita o in una biglietteria", "Altro o non pertinente"],

        comuneevento:"Comune dove l’evento si è verificato",
        frazioneevento:"Località o frazione dove l’evento si è verificato",


        linea: "Linea eventualmente interessata",
        fermata: "Fermata dove l’evento si è verificato",
        direzione: "Direzione (indicare il capolinea o l’approdo di destinazione)",
        nvettura: "Numero di matricola dell’autobus",



        descrizione: "Descrizione dell'evento",
        introdescrizione:"Descrivi l’evento o il problema in modo sintetico ma completo, includendo tutte le informazioni utili per ricostruire quanto successo. Se presenti il reclamo per conto di un’altra persona, indica anche i dati di quest'ultima. Potrai allegare immagini, titoli di viaggio o altri documenti rispondendo all’e-mail di conferma che riceverai dopo aver inviato questo modulo.",

        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto.",
        consensofacoltativo:"CONSENSI FACOLTATIVI",
        indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg per partecipare a indagini demoscopiche o ricerche di mercato sul servizio di trasporto pubblico locale.",
        attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte e agevolazioni sui servizi di Tpl Fvg e delle aziende consorziate.",
        analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta e ricevere comunicazioni personalizzate da parte di Tpl Fvg.",
        comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie e informazioni commerciali relative a prodotti o servizi di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate.",
        cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing.",
        
        camporiservatotplfvg:"Campo riservato agli operatori Tpl Fvg",
       invia:"Invia"




      },
      tooltips: {



        tipoSoggetto: "Indica se stai presentando un reclamo a titolo personale o se lo fai per conto di un’associazione, un’azienda o un ente pubblico.",
        nome: "Anche se il reclamo è presentato per conto di un ente, un'associazione o un'azienda, è necessario indicare i dati del referente che compila questo modulo.",
        cognome: "Anche se il reclamo è presentato per conto di un ente, un'associazione o un'azienda, è necessario indicare i dati del referente che compila questo modulo.",
        nazione: "Scrivi il nome del tuo Paese di residenza: è sufficiente digitare le prime lettere e poi selezionare il nome corretto dall’elenco proposto. Il campo è impostato di default su ITALIA.",
        indirizzo: "Inserisci un indirizzo presso cui desideri ricevere eventuali comunicazioni via posta ordinaria.",
        comune: "Seleziona un Comune e il relativo CAP tra quelli disponibili nel menù.",
        prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è impostato di default sul prefisso +39",
        numerotesserinoidentificativo:`<div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo sia sugli abbonamenti acquistati utilizzando quel tesserino.<br/><br/>
              <img src="immagine_tooltip_tesserino.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
            </div>`,

        accountTpl:"Seleziona l’azienda territorialmente competente. Se non sai quale azienda indicare, o se l’evento non è riconducibile a una singola azienda consorziata, scegli l’opzione TPL FVG.",
        servizio:"Indica il servizio a cui l’evento è collegato. Se l’evento non riguarda uno dei servizi indicati, o se l’evento non è direttamente riferibile a uno dei servizi in elenco, seleziona l’opzione ALTRI ASPETTI DEL SERVIZIO. Se non conosci il tipo di servizio, non compilare questo campo.",
        linea:"Questo campo si attiva dopo aver selezionato l’azienda consorziata di riferimento, da cui dipendono le linee disponibili. Se la segnalazione o l’evento non sono collegati a una linea, puoi lasciare questo campo in bianco.",
        fermata:"Indica, se lo ritieni utile, la fermata dove l’evento si è verificato. Per visualizzare l’elenco delle fermate, devi prima selezionare una linea nel campo precedente. Ti saranno mostrate solo le fermate servite dalla linea indicata. Se la fermata è servita da più linee, puoi selezionare una qualsiasi delle linee in transito. Se la segnalazione o l’evento non riguardano una fermata specifica, puoi lasciare questo campo in bianco.",
        dataoraevento:"Indica la data e l’ora dell’evento. Se il problema non è legato a un singolo episodio, come nel caso di un dispositivo che non funziona o di un’anomalia al sito o a una delle nostre app, inserisci la data e l’ora in cui hai rilevato il problema.",
        frazioneevento:"Se possibile, indica la località o la frazione in cui il fatto è avvenuto. Spesso è molto importante conoscere il luogo in cui l’evento si è verificato, per poter effettuare i necessari controlli e intervenire in modo più efficace.",
        nvettura:"Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola non coincide mai con il numero di linea.",
        descrizione:""
      }
    }
  },
  en: {
    translation: {
      labels: {
        legendanagrafica:"PERSONAL DETAILS OF THE PERSON SUBMITTING THE COMPLAINT",
        valoreNonValidoDatalist:"Select an option from the list.",
        erroreCampoObbligatorio: "",
        seleziona: "--Select--",

        tipoSoggetto: "Who is submitting the complaint",
        tipoSoggettoOptions: ["--Select--", "Individual", "Company", "Public entity", "Association"],
        ragioneSociale: "Name of association, public entity or company",
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
        prefissotelefonico: "International dialing code",
        numerotelefonico:"Mobile Phone Number",
        mail: "E-mail",
        email_confirm_label:"Confirm e-mail",
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",

        abbonatosino:"Pass holder",
        numerotesserinoidentificativo:"Tpl Fvg Identification card number (if the complainant holds one)",


        legendainfoevento:"EVENT INFORMATION",
        accountTpl: "Reference Company",
        servizio: "Type of service",
        dataoraevento: "Date and Time of the Event",
        tipoluogo:"Where did the event occur?",
        tipoluogoOptions: ["--Select--", "Onboard", "On the ground", "At a ticket office or authorized reseller", "Other or not applicable"],

        comuneevento:"Municipality where the event occurred",
        frazioneevento:"Locality or hamlet where the event occurred",


        linea: "Line involved",
        fermata: "Bus Stop where the event occurred",
        direzione: "Direction (specify the terminal or landing destination)",
        nvettura: "Bus fleet number",



        descrizione: "Description of the event",
        introdescrizione:"Briefly but clearly describe the event or issue, including all the information needed to understand what happened. If you are submitting the complaint on behalf of someone else, please include their details as well. You will be able to attach images, tickets, or other relevant documents by replying to the confirmation e-mail you will receive after submitting this form.",

        consensoobbligatorio: "MANDATORY CONSENT",
        privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link below.",
        consensofacoltativo: "OPTIONAL CONSENTS",
        indaginidemoscopiche: "I agree to be contacted by Tpl Fvg to take part in surveys or market research about local public transport services.",
        attivitacommerciali: "I agree to receive information about offers and discounts on services provided by Tpl Fvg and the companies that are part of the consortium.",
        analisipreferenze: "I agree to the analysis of my preferences and habits in using local public transport, including electronic processing, to improve the service and receive personalised messages from Tpl Fvg.",
        comunicazionepartner: "I agree to receive advertising and commercial information about products or services from third parties, partners of Tpl Fvg or of the consortium companies.",
        cessioneterzi: "I agree to the sharing of my personal data with third parties for commercial and marketing purposes.",

        camporiservatotplfvg:"Reserved for TPL Fvg operators",
        invia:"Submit the form",




      },
      tooltips: {



        tipoSoggetto: "Indicate whether you are submitting the complaint on your own behalf or on behalf of an association, a company, or a public body.",
        nome: "Even if the complaint is submitted on behalf of a body, an association, or a company, you must provide the details of the contact person filling out this form.",
        cognome: "Even if the complaint is submitted on behalf of a body, an association, or a company, you must provide the details of the contact person filling out this form.",
        nazione: "Enter the name of your country of residence: just type the first few letters and then select the correct name from the suggested list. The default value is ITALY.",
        indirizzo: "Enter an address where you wish to receive any communications by regular mail.",
        comune: "Select a municipality and its corresponding postal code from the dropdown menu.",
        prefissotelefonico: "Select the international dialing code from the list. The default value is +39",
        numerotesserinoidentificativo: `<div>
          This is the seven-digit number that uniquely identifies the pass holder. It can be found both on the ID card and on the passes purchased using that card.<br/><br/>
          <img src="immagine_tooltip_tesserino.png" alt="Sample ID card" style="max-width: 100%; height: auto;"/>
        </div>`,

        accountTpl: "Select the company responsible for the area. If you are unsure which company to choose, or if the event is not attributable to a single consortium company, select the TPL FVG option.",
        servizio: "Specify the service the event is related to. If it does not concern any of the listed services, or cannot be directly attributed to one of them, select the OTHER ASPECTS OF THE SERVICE option. If you do not know the type of service, you can leave this field blank.",
        linea: "This field becomes active after selecting the relevant company, as the list of available lines depends on that choice. If you select TPL FVG as the company, the list will include all routes operated by Tpl Fvg in Friuli Venezia Giulia and neighbouring areas. If the event or report is not related to a specific route, you may leave this field blank.",
        fermata: "Indicate the bus stop where the event occurred, if you think it is useful. To see the list of stops, you must first select a route in the previous field. Only stops served by the selected route will be shown. If the stop is served by several routes, you may select any of them. If the report or event does not involve a specific stop, you may leave this field blank.",
        dataoraevento: "Indicate the date and time of the event. If the problem is not linked to a single episode (for example, a malfunctioning device or an issue with our website or app), enter the date and time when you noticed the issue.",
        frazioneevento: "If possible, indicate the locality or hamlet where the event occurred. Knowing the exact place is often very important to carry out the necessary checks and respond more effectively.",
        nvettura: "The vehicle number is a three- or four-digit identification code, usually visible both inside and outside the bus. This number is different from the route number.",
        descrizione:""
      }
    }
  }
};