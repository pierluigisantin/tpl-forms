const resources = {
  it: {
    translation: {
      labels: {
        legendanagrafica:"DATI ANAGRAFICI DELLA PERSONA CHE PRESENTA IL RECLAMO",
        valoreNonValidoDatalist:"Devi selezionare un valore valido dalla lista",
        erroreCampoObbligatorio: "Devi compilare questo campo",
        seleziona: "--Seleziona--",

        tipoSoggetto: "Chi è il soggetto che presenta il reclamo",
        tipoSoggettoOptions: ["--Seleziona--", "Privato cittadino", "Azienda", "Ente pubblico", "Associazione"],
        ragioneSociale: "Nome associazione, ente pubblico o azienda",
        nome: "Nome",
        cognome: "Cognome",
        nazione: "Nazione di residenza",
        ncivico:"Street N°",
        indirizzo: "Indirizzo di residenza o domicilio",

        comune: "Comune",

        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",
        mail: "E-mail",

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
        introdescrizione:"Descrivi l’evento o il problema in modo sintetico ma completo, fornendo tutte le informazioni utili per la ricostruzione dei fatti. Se il reclamo viene presentato da una persona diversa da chi ha subito il disservizio, indica anche i dati anagrafici di quest’ultimo. Se l’evento è avvenuto presso una biglietteria, una rivendita o in un altro contesto specifico, indicalo in questa descrizione. Se desideri allegare immagini, titoli di viaggio o altri documenti utili, potrai farlo rispondendo alla e-mail di notifica che riceverai dopo aver compilato questo form.",

        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
        privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it e accessibile tramite il link riportato qui sotto",
        consensofacoltativo:"CONSENSI FACOLTATIVI",
        indaginidemoscopiche:"Acconsento a essere contattato da Tpl Fvg, anche tramite e-mail, per partecipare a indagini demoscopiche o ricerche di mercato sul livello di soddisfazione e sull’utilizzo dei servizi di trasporto pubblico locale",
        attivitacommerciali:"Acconsento a ricevere comunicazioni relative a offerte commerciali, promozioni, agevolazioni o sconti su prodotti, servizi e attività di Tpl Fvg o delle aziende consorziate",
        analisipreferenze:"Acconsento all’analisi delle mie preferenze e abitudini di utilizzo del trasporto pubblico locale, anche mediante elaborazioni elettroniche, al fine di migliorare l’offerta, soddisfare specifiche esigenze, orientare la pianificazione del servizio e ricevere comunicazioni personalizzate da parte di Tpl Fvg o delle aziende consorziate",
        comunicazionepartner:"Acconsento a ricevere comunicazioni pubblicitarie, promozioni e informazioni commerciali relative a prodotti, servizi e attività di soggetti terzi, partner di Tpl Fvg o delle aziende consorziate",
        cessioneterzi:"Acconsento alla comunicazione dei miei dati personali a soggetti terzi per finalità commerciali e di marketing",



       invia:"Invia reclamo"




      },
      tooltips: {



        tipoSoggetto: "Indica se stai presentando un reclamo a titolo personale o se lo fai per conto di un’associazione, un’azienda o un ente pubblico.",

        numerotesserinoidentificativo:`<div>
              È il numero di sette cifre che identifica in modo univoco il cliente abbonato: si trova sia sul tesserino identificativo, sia sugli abbonamenti acquistati utilizzando quel tesserino.<br/>
              <img src="abbonamento_tipo.png" alt="Tesserino esempio"style="max-width: 100%; height: auto;"/>
            </div>`,

        accountTpl:"Seleziona l’azienda territorialmente competente. Se non sai quale azienda indicare, o se l’evento non è riconducibile a una singola azienda consorziata, scegli l’opzione TPL FVG.",
        servizio:"Indica il servizio a cui l’evento è collegato. Se l’evento non riguarda uno dei servizi indicati, o se l’evento non è direttamente riferibile a uno dei servizi in elenco, seleziona l’opzione ALTRI ASPETTI DEL SERVIZIO. Se non conosci il tipo di servizio, non compilare questo campo.",
        linea:"Questo campo si attiva dopo aver selezionato l’azienda di riferimento, da cui dipendono le linee proposte. Se come azienda di riferimento hai selezionato TPL FVG, l’elenco includerà tutte le linee operate da Tpl Fvg in Friuli Venezia Giulia e nelle aree confinanti. Se la segnalazione o l’evento non sono collegati a una linea, puoi lasciare questo campo in bianco.",
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
        valoreNonValidoDatalist:"You must selecta a value from list",
        erroreCampoObbligatorio: "You must fill in this field",
        seleziona: "--Select--",

        tipoSoggetto: "Who is submitting the complaint",
        tipoSoggettoOptions: ["--Select--", "Individual", "Company", "Public entity", "Association"],
        ragioneSociale: "Name of association, public entity or company",
        nome: "First Name",
        cognome: "Last Name",
        nazione: "Country",
        ncivico:"Street N°",
        indirizzo: "Residential or mailing address",

        comune: "Municipality",

        prefissotelefonico:"International Phone Prefix",
        numerotelefonico:"Mobile Phone Number",
        mail: "E-mail",

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
        introdescrizione:"Briefly but clearly describe the event or issue, providing all the information needed to reconstruct what happened. If the complaint is being submitted by someone other than the person who experienced the issue, please also include that person’s personal details. If the event took place at a ticket office, a sales point, or in another specific setting, mention it in your description. If you wish to attach images, travel tickets, or other relevant documents, you can do so by replying to the notification e-mail you will receive after completing this form.",

        consensoobbligatorio:"MANDATORY CONSENT",
        privacy: "I declare that I have read and understood the Tpl Fvg privacy policy, available on the website www.tplfvg.it and accessible via the link provided below",
        consensofacoltativo:"OPTIONAL CONSENTS",
        indaginidemoscopiche:"I consent to being contacted by Tpl Fvg, including via email, to participate in surveys or market research regarding customer satisfaction and the use of public transport services",
        attivitacommerciali:"I consent to receiving communications  regarding commercial offers, promotions, discounts, or special deals related to the products, services, and activities of Tpl Fvg or the member companies of the Tpl Fvg consortium",
        analisipreferenze:"I consent to the analysis of my preferences and habits in the use of public transport services, including through electronic processing, in order to improve the service offering, meet specific needs, support service planning, and receive personalized communications from Tpl Fvg or the member companies of the Tpl Fvg consortium",
        comunicazionepartner:"I consent to receiving advertising, promotional content, and commercial information regarding products, services, and activities of third-party entities, partners of Tpl Fvg or the member companies of the Tpl Fvg consortium",
        cessioneterzi:"I consent to the sharing of my personal data with third parties for commercial and marketing purpose",


       invia:"Submit complain"




      },
      tooltips: {



        tipoSoggetto: "Indicate whether you are submitting the complaint on your own behalf or on behalf of an association, a company, or a public institution",
        numerotesserinoidentificativo:"It is the seven-digit number that uniquely identifies the pass holder. It appears both on the Tpl Fvg identification card and on all passes purchased using that card",
        accountTpl:"Select the company responsible for the area concerned. If you are unsure which company to choose, or if the event is not clearly linked to one of the consortium’s companies, select the TPL FVG option",
        servizio:"Indicate the service related to the event. If the event does not concern any of the listed services, or cannot be clearly linked to one of them, select the OTHER ASPECTS OF THE SERVICE option. If you are unsure about the type of service, you may leave this field blank",
        linea: "This field becomes active after selecting the reference company. The available lines depend on the selected company. If you selected TPL FVG as the reference company, the list will include all lines operated by Tpl Fvg in Friuli Venezia Giulia and surrounding areas. If the event or report is not related to a specific line, you may leave this field blank",
        fermata: "If you consider it useful, indicate the stop where the event occurred. To view the list of stops, you must first select a line in the previous field. Only the stops served by the selected line will be displayed. If the stop is served by multiple lines, you may select any of them. If the report or event does not concern a specific stop, you can leave this field blank",
        dataoraevento:"Enter the date and time of the event. If the issue is not linked to a single episode - such as a malfunctioning device or an anomaly on the website or one of our apps - please indicate the date and time when you noticed the problem",
        frazioneevento:"If possible, indicate the locality where the event occurred. Knowing the exact place is often very important to carry out the necessary checks and respond more effectively",
        nvettura:"The fleet number of the bus is a three or four-digit identification code, usually visible both outside and inside the vehicle. The fleet number never matches the route number",
        descrizione:""
      }
    }
  }
};