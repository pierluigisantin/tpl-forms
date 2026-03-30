
     const resources = {
  it: {
    translation: {
      labels: {

        erroreCampoObbligatorio: "",
        seleziona: "--Seleziona--",
        codiceFiscaleNonValido:"Il codice fiscale inserito non è valido.",
        noseiminore:"Il ricorso non può essere presentato da una persona minorenne.",
        valoreNonValidoDatalist: "Seleziona un'opzione dall’elenco.",
        legendanagrafica:"Dati della persona che presenta il ricorso<br>(persona sanzionata o persona delegata, se il sanzionato è maggiorenne; genitore o tutore legale se il sanzionato è minorenne)",
        nome:"Nome",
        cognome:"Cognome",
        cfdichiarante:"Codice fiscale ",
        datanascitadichiarante:"Data di nascita",
        tipoSoggetto:"In qualità di",
        tipoSoggettoOptions: ["--Seleziona--", "Persona sanzionata", "Genitore o tutore della persona sanzionata", "Ente o associazione in rappresentanza della persona sanzionata","Persona incaricata o consulente legale"],
        ragioneSociale:"Ente o associazione",
        nazione:"Nazione di residenza",
        comune:"Comune",
        indirizzo:"Indirizzo di residenza o domicilio",
        ncivico:"Numero civico",
        nomecassettalettere:"Nome indicato sulla cassetta delle lettere",
        citta:"Città",
        localita:"Località",
        cap:"CAP",
        provincia:"Provincia / Regione / Stato",
        mail:"E-mail",
        email_confirm_label:"Ripeti e-mail",
        email_invalid:"Verifica l’indirizzo e-mail",
          email_mismatch: "Verifica l’indirizzo e-mail",
        prefissotelefonico:"Prefisso telefonico internazionale",
        numerotelefonico:"Numero di cellulare",


        legendadatisazionato:"Dati della persona sanzionata",
        introdatisanzionato:"Compila questa sezione solo se la persona sanzionata è diversa da chi presenta il ricorso. Se si tratta della stessa persona, puoi lasciare questa sezione in bianco.",
        nomesulverbale:"Nome",
        cognomesulverbale:"Cognome",
        datanascitasulverbale:"Data di nascita",
        cfsulverbale:"Codice fiscale",


        legendainfoevento:"Dati sulla sanzione",
        accounttpl:"Azienda che ha emesso la sanzione",
        numeroverbale:"Numero di verbale",
        dataoraevento:"Data e ora della sanzione",
        linea:"Linea",
        nvettura:"Numero di matricola dell’autobus",
        tipoluogo:"La sanzione è stata emessa",
        tipoluogoOptions: ["--Seleziona--", "a bordo", "a terra", "non lo so"],       
        comuneevento:"Comune dove la sanzione è stata emessa",
        panprime4cifre:"Prime 4 cifre del PAN della carta bancaria",
          panultime4cifre:"Ultime 4 cifre del PAN della carta bancaria",
          panvirtuale:"PAN virtuale (4 cifre) del wallet digitale"  ,
        descrizione:"Scritto difensivo",
        introdescrizione:"Spiega in modo chiaro e completo perché la sanzione viene contestata. Tpl Fvg e le aziende consorziate effettueranno tutte le verifiche necessarie per ricostruire quanto successo. Presenta ricorso solo se ci sono motivazioni oggettive e documentabili a supporto della richiesta. Se il ricorso viene respinto, potrà essere richiesto il pagamento della sanzione nella misura massima di 210,00 euro, oltre al costo del biglietto e alle eventuali spese di procedimento. <a href='https://tplfvg.it/it/sanzioni/normesanzioni' target='_blank' rel='noopener noreferrer'>Fai clic qui per maggiori informazioni.</a>",
        avvertenzaprimadiinvio:"Dopo l’invio del modulo riceverai una e-mail di conferma. Per completare il ricorso, rispondi all'e-mail allegando: 1) copia del verbale (se disponibile); 2) copia fronte e retro del documento d’identità della persona sanzionata (o del genitore/tutore se la persona sanzionata è minorenne); 3) altri documenti utili all’istruttoria.",
        consensoobbligatorio:"CONSENSO OBBLIGATORIO",
          privacy: "Dichiaro di aver letto e compreso l’informativa sulla privacy di Tpl Fvg, disponibile sul sito www.tplfvg.it.",
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
        nazione: "Indica il Paese di residenza: digita le prime lettere e poi seleziona il nome corretto dall’elenco proposto. Il campo è preimpostato su ITALIA.",
          comune: "Seleziona il Comune e il relativo CAP: digita le prime lettere e scegli la voce corretta dall’elenco proposto.",
          prefissotelefonico:"Seleziona il prefisso internazionale tra quelli disponibili nel menù. Il campo è preimpostato sul prefisso +39",
        
        indirizzo:"Indica l’indirizzo di residenza o domicilio a cui inviare eventuali comunicazioni via posta ordinaria.",
        nomecassettalettere:"Indica il nome o la dicitura riportati sulla cassetta delle lettere, per evitare che eventuali comunicazioni inviate per posta ordinaria vengano restituite al mittente.",
        numeroverbale:`<div> 
        Indica il numero di verbale. <br><br>
        <img src="immagine_tooltip_sanzioni.png" style="max-width: 70%; height: auto;"/>        
        </div>`,
        dataoraevento:`<div> 
          Indica la data e l’ora di emissione del verbale. <br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 70%; height: auto;"/>        
          </div>`,
        linea:`<div> 
          Questo campo si attiva dopo aver selezionato l’azienda che ha emesso la sanzione, da cui dipendono le linee proposte. La linea è di solito rilevabile dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 70%; height: auto;"/>        
          </div>`,
        nvettura:`<div>
          Il numero di matricola dell’autobus è un codice identificativo composto da tre o quattro cifre, generalmente visibile sia all’esterno sia all’interno del mezzo. Il numero di matricola (che non coincide mai con il numero di linea) è di solito rilevabile dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 70%; height: auto;"/>        
          </div>`,          
        comuneevento:`<div>       
          Il comune dove la sanzione è stata emessa è di solito rilevabile dal verbale.<br><br>
          <img src="immagine_tooltip_sanzioni.png" style="max-width: 70%; height: auto;"/>        
          </div>`,  
        panprime4cifre:`Se il biglietto è stato acquistato con una carta bancaria sui dispositivi contactless di bordo, ma gli agenti verificatori non hanno potuto rilevare l’acquisto, indica le prime 4 cifre del PAN della carta con cui è stato effettuato il pagamento. Il PAN (Primary Account Number) è il numero riportato sulla carta di pagamento, in genere composto da 16 a 19 cifre. Le prime 4 e le ultime 4 cifre consentono di identificare e verificare la transazione.<br>             <img src="pan_carta_credito.png" style="max-width: 70%; height: auto;"/>    `,
          
        panultime4cifre:`Se il biglietto è stato acquistato con una carta bancaria sui dispositivi contactless di bordo, ma gli agenti verificatori non hanno potuto rilevare l’acquisto, indica le ultime 4 cifre del PAN della carta con cui è stato effettuato il pagamento. Il PAN (Primary Account Number) è il numero riportato sulla carta di pagamento, in genere composto da 16 a 19 cifre. Le prime 4 e le ultime 4 cifre consentono di identificare e verificare la transazione.<br>             <img src="pan_carta_credito.png" style="max-width: 70%; height: auto;"/>    `,
        
          panvirtuale:`Se il biglietto è stato acquistato con un wallet digitale (come Google Pay o Apple Pay) sui dispositivi contactless di bordo, ma gli agenti verificatori non hanno potuto rilevare l’acquisto, indica il PAN virtuale associato al wallet utilizzato per il pagamento. Il PAN virtuale è diverso da quello della carta fisica ed è composto da 4 cifre. Per visualizzarlo, accedi all’app di pagamento..<br> <img src="wallet.png" style="max-width: 70%; height: auto;"/>  `  ,
        
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
        noseiminore:"The sanction appeal cannot be submitted by a minor",
        valoreNonValidoDatalist: "Select an option from the list.",
        legendanagrafica: "DETAILS OF THE PERSON SUBMITTING THE APPEAL (FINED PERSON IF OF AGE, OR PARENT/GUARDIAN IF MINOR)",
        nome: "First name",
        cognome: "Last name",
        cfdichiarante: "Italian tax code ",
        datanascitadichiarante: "Date of birth",
        tipoSoggetto: "Acting as",
        tipoSoggettoOptions: [
          "--Select--",
          "Fined person",
          "Parent or guardian of the fined person",
          "Entity or association representing the fined person",
          "Representative or legal counsel"
        ],
        ragioneSociale: "Entity or association",
        nazione: "Country of residence",
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
        email_invalid: "Please check the e-mail address.",
        email_mismatch: "Please check the e-mail address.",
        prefissotelefonico: "International dialing code",
        numerotelefonico: "Mobile phone number",

        legendadatisazionato: "DETAILS OF THE FINED PERSON",
        introdatisanzionato: "Complete this section only if the fined person is different from the person submitting the appeal. If it is the same person, you can leave this section blank.",
        nomesulverbale: "First name",
        cognomesulverbale: "Last name",
        datanascitasulverbale: "Date of birth",
        cfsulverbale: "Italian tax code",

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
  },
       sl: {
         translation: {
           labels: {
             erroreCampoObbligatorio: "",
             seleziona: "--Izberite--",
             codiceFiscaleNonValido: "Vnesena italijanska davčna številka ni veljavna.",
             noseiminore: "Pritožbe ne more vložiti mladoletna oseba.",
             valoreNonValidoDatalist: "Izberite možnost s seznama.",
             legendanagrafica: "Podatki osebe, ki vlaga pritožbo<br>(kaznovana oseba ali pooblaščena oseba, če je kaznovani polnoleten; starš ali zakoniti skrbnik, če je kaznovani mladoleten)",
             nome: "Ime",
             cognome: "Priimek",
             cfdichiarante: "Davčna številka ",
             datanascitadichiarante: "Datum rojstva",
             tipoSoggetto: "V vlogi",
             tipoSoggettoOptions: [
               "--Izberite--",
               "Kaznovana oseba",
               "Starš ali skrbnik kaznovane osebe",
               "Pravna oseba ali združenje v zastopanju kaznovane osebe",
               "Pooblaščena oseba ali pravni svetovalec"
             ],
             ragioneSociale: "Pravna oseba ali združenje",
             nazione: "Država stalnega bivališča",
             comune: "Občina",
             indirizzo: "Naslov stalnega ali začasnega bivališča",
             ncivico: "Hišna številka",
             nomecassettalettere: "Ime na poštnem nabiralniku",
             citta: "Mesto",
             localita: "Kraj",
             cap: "Poštna številka",
             provincia: "Pokrajina / Regija / Država",
             mail: "E-pošta",
             email_confirm_label: "Ponovi e-pošto",
             email_invalid: "Preverite e-poštni naslov",
             email_mismatch: "Preverite e-poštni naslov",
             prefissotelefonico: "Mednarodna klicna koda",
             numerotelefonico: "Številka mobilnega telefona",

             legendadatisazionato: "Podatki kaznovane osebe",
             introdatisanzionato: "Izpolnite ta razdelek le, če je kaznovana oseba različna od osebe, ki vlaga pritožbo. Če gre za isto osebo, lahko ta razdelek pustite praznega.",
             nomesulverbale: "Ime",
             cognomesulverbale: "Priimek",
             datanascitasulverbale: "Datum rojstva",
             cfsulverbale: "Davčna številka",

             legendainfoevento: "Podatki o sankciji",
             accounttpl: "Podjetje, ki je izdalo sankcijo",
             numeroverbale: "Številka zapisnika",
             dataoraevento: "Datum in ura sankcije",
             linea: "Linija",
             nvettura: "Matična številka avtobusa",
             tipoluogo: "Sankcija je bila izdana",
             tipoluogoOptions: ["--Izberite--", "na krovu", "na postajališču", "ne vem"],
             comuneevento: "Občina, kjer je bila sankcija izdana",
             panprime4cifre: "Prve 4 cifre PAN",
             panultime4cifre: "Zadnje 4 cifre PAN",
             panvirtuale: "Plačilo z digitalnimi denarnicami",
             descrizione: "Pritožbena vloga",
             introdescrizione: "Jasno in izčrpno razložite, zakaj izpodbijate sankcijo. Tpl Fvg in konzorcijska podjetja bodo izvedla vse potrebne preveritve za rekonstrukcijo dogajanja. Pritožbo vložite le, če obstajajo objektivni in dokumentirani razlogi. Če je pritožba zavrnjena, bo morda zahtevano plačilo sankcije v višini do 210,00 EUR, skupaj s ceno vozovnice in morebitnimi procesnimi stroški. <a href='https://tplfvg.it/it/sanzioni/normesanzioni' target='_blank' rel='noopener noreferrer'>Kliknite tukaj za več informacij.</a>",
             avvertenzaprimadiinvio: "Po oddaji obrazca boste prejeli potrditveno e-pošto. Za dokončanje pritožbe odgovorite na to e-pošto in priložite: 1) kopijo zapisnika (če je na voljo); 2) kopijo sprednje in zadnje strani osebnega dokumenta kaznovane osebe (ali starša/skrbnika, če je kaznovana oseba mladoletna); 3) druge dokumente, koristne za obravnavo.",
             consensoobbligatorio: "OBVEZNO SOGLASJE",
             privacy: "Izjavljam, da sem prebral/-a in razumel/-a obvestilo o zasebnosti Tpl Fvg, dostopno na spletnem mestu www.tplfvg.it.",
             consensofacoltativo: "NEOBVEZNA SOGLASJA",
             indaginidemoscopiche: "Soglašam, da me Tpl Fvg kontaktira za sodelovanje v anketah ali tržnih raziskavah o storitvi javnega lokalnega prevoza.",
             attivitacommerciali: "Soglašam s prejemanjem sporočil o ponudbah in ugodnostih za storitve Tpl Fvg in konzorcijskih podjetij.",
             analisipreferenze: "Soglašam z analizo mojih preferenc in navad pri uporabi javnega lokalnega prevoza, vključno z elektronsko obdelavo, z namenom izboljšanja ponudbe in prejemanja prilagojenih sporočil Tpl Fvg.",
             comunicazionepartner: "Soglašam s prejemanjem oglaševalskih sporočil in komercialnih informacij o izdelkih ali storitvah tretjih oseb, partnerjev Tpl Fvg ali konzorcijskih podjetij.",
             cessioneterzi: "Soglašam s posredovanjem mojih osebnih podatkov tretjim osebam v komercialne in trženjske namene.",

             invia: "Pošlji",

             ultimo: ""
           },
           tooltips: {
             nome: "",
             nazione: "Navedite državo stalnega bivališča: vtipkajte prve črke in nato izberite pravilno ime s predlaganega seznama. Polje je privzeto nastavljeno na ITALIJA.",
             comune: "Izberite občino in ustrezno poštno številko: vtipkajte prve črke in izberite pravilni vnos s predlaganega seznama.",
             prefissotelefonico: "Izberite mednarodno klicno kodo med razpoložljivimi v meniju. Polje je privzeto nastavljeno na predpono +39.",
             indirizzo: "Navedite naslov stalnega ali začasnega bivališča, na katerega naj bodo poslana morebitna pisma.",
             nomecassettalettere: "Navedite ime ali napis na poštnem nabiralniku, da morebitna pisma ne bi bila vrnjena pošiljatelju.",
             numeroverbale: `<div>
               Navedite številko zapisnika. <br><br>
               <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>
               </div>`,
             dataoraevento: `<div>
               Navedite datum in uro izdaje zapisnika. <br><br>
               <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>
               </div>`,
             linea: `<div>
               To polje se aktivira po izbiri podjetja, ki je izdalo sankcijo, od katerega so odvisne predlagane linije. Linija je običajno razvidna iz zapisnika.<br><br>
               <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>
               </div>`,
             nvettura: `<div>
               Matična številka avtobusa je identifikacijska koda, sestavljena iz treh ali štirih številk, ki je običajno vidna tako zunaj kot znotraj vozila. Matična številka (ki se nikoli ne ujema s številko linije) je običajno razvidna iz zapisnika.<br><br>
               <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>
               </div>`,
             comuneevento: `<div>
               Občina, kjer je bila sankcija izdana, je običajno razvidna iz zapisnika.<br><br>
               <img src="immagine_tooltip_sanzioni.png" style="max-width: 100%; height: auto;"/>
               </div>`,
             panprime4cifre: `(Prve 4 cifre PAN) Če je bila vozovnica kupljena z bančno kartico na brezkontaktnih napravah na krovu, vendar inšpektorji nakupa niso zaznali, navedite prve 4 cifre PAN (Primary Account Number). PAN je številka, navedena na plačilni kartici. Prve 4 in zadnje 4 cifre omogočajo identifikacijo in preverjanje transakcije.<br>             <img src="pan_carta_credito.png" style="max-width: 100%; height: auto;"/>    `,
             panultime4cifre: `(Zadnje 4 cifre PAN) Če je bila vozovnica kupljena z bančno kartico na brezkontaktnih napravah na krovu, vendar inšpektorji nakupa niso zaznali, navedite zadnje 4 cifre PAN (Primary Account Number). PAN je številka, navedena na plačilni kartici. Prve 4 in zadnje 4 cifre omogočajo identifikacijo in preverjanje transakcije.<br>             <img src="pan_carta_credito.png" style="max-width: 100%; height: auto;"/>    `,
             panvirtuale: `(Plačilo z digitalnimi denarnicami) Če je bila vozovnica kupljena na brezkontaktnih napravah na krovu z digitalno denarnico (kot sta Google Pay ali Apple Pay), vendar inšpektorji nakupa niso zaznali, odprite denarnico in poiščite virtualni PAN. Virtualni PAN je sestavljen iz 4 številk, ki se razlikujejo od tistih na fizični kartici.<br>             <img src="wallet.png" style="max-width: 100%; height: auto;"/>  `,
             ultimo: ""
           }
         }
       }
};