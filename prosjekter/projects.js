const textdark = "#000";
const textlight = "#fff";

let projects = {
  Suss: {
    name: "Suss",
    url: "suss",
    frontpage: true,
    shorttitle: "Nettbutikken Suss sushi.",
    thumbimg: "suss-thumb.png",
    color: "#5151ff",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "center",
    tags: ["UI/UX", "Front-end", "Animasjon"],
    lead: "Suss er mitt lille hobbyprosjekt. Suss er en nettbutikk hvor konseptet er – 'Sett sammen din kombo', en enklere måte å handle sushi. Mitt mål med prosjektet var å lære meg mer om front-end utvikling, og designsystem, i tilegg har jeg laget alle animasjonene, og tatt alle bildene på siden. Du kan gå til <a href='https://www.susshi.no' target='_blank'>susshi.no</a> for å teste siden, og send gjerne inn en bestilling for gøy. Bestillingen havner i min mailboks, men sushi får du nok ikke ;)",
    film: [
      {
        title: "Konseptfilm",
        url: "https://player.vimeo.com/video/516911009",
      },
    ],
    bodytextone:
      "Konseptet 'sett sammen din kombo' er tenkt som en enklere måte å handle sushi når man er flere som handler sammen feks. du og kjæresten, eller med venner. Suss lar deg legge til antall personer som skal handle, deretter kan du legge til sushibiter til hver enkelt person, slik at man til slutt får hver sin personlige eske. På denne måten slipper man surr rundt matbordet, og man kan enkelt følge med på sin bestilling: antall og hvilke biter og drikke.",
    bodytexttwo: "",

    imgtwocolumn: {
      imgone: {
        imgurl: "suss-lansering.png",
        alt: "Lanseringsbilde",
      },
      imgtwo: {
        imgurl: "suss-lansering-to.png",
        alt: "Lanseringsbilde to",
      },
    },

    imgonecolmedium: [
      {
        title: "",
        url: "suss-headerimage.png",
        alt: "Bilde av sushiesker",
        text: "",
      },
    ],

    imgonecollarge: {
      imgurl: "suss-hero.png",
      text: "Logo-konsept for Suss.",
      alt: "Bilde av Suss-logo.",
    },
    imgportrait: [
      {
        imgurl: "suss-thumb.png",
        text: "Forsiden av sushi.no.",
        alt: "Forsiden av sushi.no.",
      },
      {
        imgurl: "statistikk.png",
        text: "Sjekk når det er kortest leveringstid.",
        alt: "Side med statistikk",
      },
      {
        imgurl: "kart.png",
        text: "Finn din nærmeste pickup point.",
        alt: "Finn din nærmeste pickup point.",
      },
      {
        imgurl: "rate.png",
        text: "Fornøyd med opplevelsen?",
        alt: "Fornøyd med opplevelsen?",
      },
      {
        imgurl: "oppsummert.png",
        text: "Enkel oppsummering per person.",
        alt: "Enkel oppsummering per person.",
      },
      {
        imgurl: "suss-some-concept-settsammen.jpg",
        text: "Promoteringsbilde.",
        alt: "Promoteringsbilde.",
      },
      {
        imgurl: "suss-some-concept-dineskerosa.jpg",
        text: "",
        alt: "",
      },
      {
        imgurl: "suss-some-concept-dineskegul.jpg",
        text: "",
        alt: "",
      },
      {
        imgurl: "suss-some-concept--eskeopen-settsammen-mprodukter.jpg",
        text: "",
        alt: "",
      },
      {
        imgurl: "suss-some-product-lakssashimi.jpg",
        text: "",
        alt: "",
      },
      {
        imgurl: "suss-some-product-tigerollmaki.jpg",
        text: "",
        alt: "",
      },
    ],
    team: ["Ole Hallvard // UI/UX, Animasjon, front-end"],
  },
  Imdi: {
    name: "IMDi",
    url: "imdi",
    frontpage: true,
    shorttitle: "Animasjonsfilm om nytt digitalt verktøy for ansatte i Imdi.",
    thumbimg: "imdi_toppbilde.jpg",
    color: "#59BBC3",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Animasjonfilm"],
    lead: "Animasjonsfilm for Integrerings og mangfoldsdirektoratet som forteller om deres nye digitale verktøy for ansatte i Imdi.",
    film: [
      {
        title: "Film",
        url: "https://player.vimeo.com/video/377254014",
      },
    ],
    bodytextone:
      "Animasjonsfilm i forbindelse med intern lansering av det nye systemet IMDinett mottak, som forenkler hverdagen til mottaksansatte rundt om i landet og IMDi, og forhåpentligvis gir flyktninger et godt sted å bo. Se film for å lære mer :-) ",
    bodytexttwo: "",

    imgtwocolumn: {
      imgone: {
        imgurl: "bilde1.png",
        alt: "Bilde fra filmen",
      },
      imgtwo: {
        imgurl: "bilde3.png",
        alt: "Bilde fra filmen",
      },
    },

    imgonecolmedium: [
      {
        title: "",
        url: "bilde2.png",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde4.png",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde5.png",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde6.png",
        alt: "Bilde fra filmen",
        text: "Bilder fra filmen.",
      },
    ],

    imgonecollarge: {
      imgurl: "imdi_toppbildebouvet.jpg",
      text: "God stemning",
      alt: "Imdi illustrasjonskarakterer som ser ut som trekanter",
    },
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ole Hallvard // Design og animasjon",
    ],
  },
  Nordea: {
    name: "Nordea",
    url: "nordea",
    frontpage: true,
    shorttitle: "Redaksjonell nyhetsside om privatøkonomi.",
    thumbimg: "nordeanews-forside.png",
    color: "#1C26A5",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "top",
    tags: ["UI/UX"],
    lead: "Nordea er den største banken i norden. Med mer enn 10 millioner kunder og 30.000 medarbeidere. Nordea har et bredt spekteret av produkter, tjenester og løsninger innenfor bank, kapitalforvaltning og forsikring. Nordea “News” er en nyhetshub hvor egne journalister og gjestebloggere deler siste nytt innen diverse teamer innenfor økonomi. Siden har til hensikt å lære det norske folk om økonomi, og være en trafikkøkende aktivitet til egne nettsider, nordea.no. Få noen smarte økonomitips på: nordeanews.no",
    imgonecolmedium: [
      {
        title: "Bilder fra nettsiden",
        url: "Nordea_Mockup1.jpg",
        alt: "Bilde fra nettsiden",
        text: "Bilde av forsiden.",
      },
      {
        title: "",
        url: "Nordea_Mockup2.jpg",
        alt: "Bilde fra nettsiden",
        text: "",
      },
      {
        title: "",
        url: "Nordea_Mockup4.jpg",
        alt: "Bilde fra nettsiden på mobil.",
        text: "Bilde fra nettsiden på mobil.",
      },
      {
        title: "",
        url: "Nordea_Mockup3.jpg",
        alt: "Bilde fra nettsiden",
        text: "",
      },
    ],
    team: [
      "Zulfeekar 'Zulu' Cheriyampurath // Tech lead",
      "Vilje M. Mohn // Prosjektledelse",
      "Ole Hallvard Kveseth // UX/UI",
    ],
  },
  Bouvetgrandprix: {
    name: "Bouvet Grand Prix",
    url: "bouvetgrandprix",
    frontpage: true,
    shorttitle: "Kampanjeside med bilspill.",
    thumbimg: "bouvet-grandprix-mobil.png",
    color: "#2B2E35",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "top",
    tags: ["UI/UX", "Animasjon"],
    lead: "Da Bouvet i Oslo flyttet til nye lokaler vinteren 2017, ga det oss en mulighet til å videreformidle vår nye adresse på en artig måte. Ja, faktisk måtte du finne frem til adressen selv i bilspillet, Bouvet Grand Prix. Start streken var ved våre gamle lokaler, målstreken, vår nye adresse. Klar, ferdig, kjør!",

    film: [
      {
        title: "Konseptfilm",
        url: "https://player.vimeo.com/video/225247842",
      },
    ],

    bodytextone:
      "Vi sendte ut lenken til spillet sammen med en digital invitasjon til innflytningsfesten. I praksis betydde dette en e-post med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok på high score-listen vanket det også premie på festen som beste sjåfør.",
    bodytexttwo: "",

    imgtwocolumn: {
      imgone: {
        imgurl: "BGP_iPad_closeup_2.jpg",
        alt: "Alternativ tekst",
      },
      imgtwo: {
        imgurl: "BGP_iPad_closeup_.jpg",
        alt: "Alternativ tekst",
      },
    },

    imgonecolmedium: [
      {
        title: "",
        url: "BGP_Macbooksscreen_english.jpg",
        alt: "alt tekst",
        text: "",
      },
      {
        title: "",
        url: "BGPiphonemapenglish.jpg",
        alt: "alt tekst",
        text: "",
      },
      {
        title: "",
        url: "BGP_Poster_facebook.jpg",
        alt: "alt tekst",
        text: "Plakater som hangt på kontoret",
      },
      {
        title: "",
        url: "BGP_bottle.jpg",
        alt: "alt tekst",
        text: "Vi satt frem unike Bouvet Grand Prix prosecco i hver etasje for å promotere spillet internt.",
      },
    ],

    imgonecollarge: {
      imgurl: "BGP_Toppbilde.jpg",
      text: "Bilde av landingssiden",
      alt: "Bilde av landingssiden",
    },
    team: [
      "Kristian Wille // Tech lead",
      "Zulu // Frontend utvikler",
      "Ole Hallvard Kveseth // UX/UI",
    ],
  },
  Tine: {
    name: "Tine",
    url: "tine",
    frontpage: true,
    shorttitle: "Digitalt planleggingsverktøy for idrettslag og foreninger.",
    thumbimg: "smartplanlegger-mobil.png",
    color: "#306AAD",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "top",
    tags: ["UI/UX", "Animasjonsfilm"],
    lead: "Smart Planlegger er en del av TINE sitt sponsorat konsept “Smart Idrettsmat”. Konseptet retter seg mot klubber og organsisasjoner som skal arrangere små og mellomstore arrangementer rundt om i Norge, som feks fotballcuper, skistevner, korps og speiderleier, etc. ",
    film: [
      {
        title: "Konseptfilm",
        url: "https://player.vimeo.com/video/292788111",
      },
      /*{
        title: "Promoteringsfilm",
        url: "https://player.vimeo.com/video/294946611",
      },*/
    ],
    bodytextone:
      "Oppgaven gikk ut på å se på interaksjonsdesignet, og designe det grafiske brukergrensesnittet og innholdselementer til smartplanlegger.no. Arbeidet innebar også å lage illustrasjoner og animasjonsfilm til bruk på siden og i sosiale medier.",

    /*imgtwocolumn: {
      imgone: {
        imgurl: "Tine_SI_Bilde2_M.jpg",
        alt: "Bilde fra filmen.",
      },
      imgtwo: {
        imgurl: "Tine_SI_Bilde1_M.jpg",
        alt: "Bilde fra filmen.",
      },
    },
    */

    imgonecolmedium: [
      /*{
        title: "Forsiden av smartplanlegger.no",
        url: "Smartplanlegger-mockups-v2.png",
        alt: "Forsiden av smartplanlegger.no",
        text: "Desktopversjonen av nettsiden.",
      },*/
      {
        title: "",
        url: "Smartplanlegger-mockups2.png",
        alt: "Bilde fra nettsiden på mobil ",
        text: "",
      },
      {
        title: "",
        url: "Smartplanlegger-mockups.png",
        alt: "Bilde fra nettsiden på mobil og tablet.",
        text: "",
      },
      {
        title: "",
        url: "Smartplanlegger-mockups-v2-2.png",
        alt: "Bilde av nettsiden",
        text: "Bilder av nettsiden.",
      },
      {
        title: "",
        url: "bilde1.jpg",
        alt: "Bilde fra filmen.",
        text: "Bilder hentet fra filmen.",
      },
      {
        title: "",
        url: "bilde2.jpg",
        alt: "Bilde fra filmen.",
        text: "Bilder hentet fra filmen.",
      },
      {
        title: "",
        url: "bilde3.jpg",
        alt: "Bilde fra filmen.",
        text: "Bilder hentet fra filmen.",
      },
      {
        title: "",
        url: "bilde4.jpg",
        alt: "Bilde fra filmen.",
        text: "Bilder hentet fra filmen.",
      },
      {
        title: "",
        url: "bilde5.jpg",
        alt: "Bilde fra filmen.",
        text: "Bilder hentet fra filmen.",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ole Hallvard // Illustrasjoner og animasjon",
      "Linda Sunde // Animasjon",
      "Astrid Storkås // Illustrasjoner",
    ],
  },
  Statnett: {
    name: "Statnett",
    url: "statnett",
    frontpage: true,
    shorttitle: "Fagsystemer for elkraftingeniører.",
    thumbimg: "autodig-oppsummering-to.png",
    color: "#647382",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["UI/UX", "Designsystem", "Animasjon"],
    lead: "I Statnett samlet vi alle teamene og lagde et felles designsystem som brukes på tvers av Statnetts fagsystemer. Under kan du se en kort film som forteller om arbeidet.",
    film: [
      {
        title: "Casefilm",
        url: "https://player.vimeo.com/video/665628604",
      },
      {
        title: "Demo fra Figma",
        url: "https://player.vimeo.com/video/671851808",
      },
    ],
    team: [
      "Frode Kolstad // Grafisk designer",
      "Marc Garcia // UX Designer",
      "Ole Hallvard Kveseth // UX/UI",
      "+ bidragsytere team Statnett",
      "Kristian Wille // Front-end",
      "Alex // Front-end",
    ],
  },
  Pqportal: {
    name: "PQ Portal",
    url: "pqportal",
    frontpage: false,
    shorttitle: "PQ Portal",
    thumbimg: "autodig-oppsummering-to.png",
    color: "#647382",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Film", "Statnett"],
    lead: "PQ Portal, kraftbransjens løsning for leveringskvalitet i kraftsystemet. Se statistikk om hendelser, feil, rapportering, i tillegg til statistikk og målinger innenfor spenningskvalitet.",
    film: [
      {
        title: "Film om PQ Portal",
        url: "https://player.vimeo.com/video/767249676",
      },
    ],
    team: ["Volt"],
  },
  OBOS: {
    name: "OBOS",
    url: "obos",
    frontpage: true,
    shorttitle: "Informasjonsside og film om forkjøprsrett.",
    thumbimg: "Obos-thumbnew.png",
    color: "#77C69E",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["UI/UX", "Animasjonsfilm"],
    lead: "Forkjøpsrett er OBOS sin beste medlemsfordel. Ja, kanskje rett og slett verdens beste OBOS fordel. OBOS ønsket en egen side på obos.no som gikk i dybden på deres viktigste medlemsfordel Forkjøpsrett. Siden forteller om medlemsfordelen med illustrasjoner, film, søkeordsoptimalisert tekst, og bruk av OBOS sitt designsystem. Filmen har vi også produsert, og jeg har også laget animasjonene.",
    imgonecollarge: {
      imgurl: "Obos-mockup.png",
      text: "Nettside om OBOS fordelen Forkjøprsrett.",
      alt: "Nettside om OBOS fordelen Forkjøprsrett.",
    },
    imgonecolmedium: [
      {
        title: "Bilder fra nettsiden",
        url: "obos-s-1.png",
        alt: "Bilde fra nettsiden",
        text: "Bilde av nettsiden.",
      },
      {
        title: "",
        url: "obos-s-2.png",
        alt: "Bilde fra nettsiden",
        text: "",
      },
      {
        title: "",
        url: "obos-s-3.png",
        alt: "Bilde fra nettsiden.",
        text: "",
      },
      {
        title: "",
        url: "obos-forkjøp-forsbilde.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
    ],
    film: [
      {
        title: "Film om forkjøpsrett",
        url: "https://player.vimeo.com/video/294938753",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ole Hallvard Kveseth // UX/UI & animasjon",
    ],
  },
  Fjordland: {
    name: "Fjordland",
    url: "fjordland",
    frontpage: true,
    shorttitle: "Webside med produktpresentasjon.",
    thumbimg: "fjordland-thumb.png",
    color: "#AE697A",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "top",
    tags: ["UI/UX"],
    team: "singel",
    lead: "Fjordland AS er en merkevarebedrift som utvikler, selger og markedsfører merkevarene Fjordland, Bremykt, Brelett, Yoplait og KOS. Prosjektet omhandlet å lage nye nettsider for hovedmerke Fjordland. Fjordland sitt nettsted skal være et hjem for en mengde produkter, oppskrifter og et sted for å lære mer om Fjordland. Den tekniske løsningen er bygd på Enonic XP, og skal forenkle redaktørrollen internt. Det er viktig at brukerne har enkel tilgang til produktene for å finne nyttig informasjon om allergener og tilbredning, i tillegg til å friste til handel.",
    imgonecollarge: {
      imgurl: "Fjordland-mockups-front.png",
      text: "Bilde bra nettsiden til Fjordland.",
      alt: "Bilde fra fjordland.no.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "fjordland-screen.png",
        alt: "Bilde fra nettsiden",
        text: "",
      },
    ],
    team: ["Trond Erling Hundal // Utvikler", "Ole Hallvard Kveseth // UX/UI"],
  },
  SNLA: {
    name: "SNLA",
    url: "snla",
    frontpage: true,
    shorttitle: "Kampanje om Hjelp 113-appen.",
    thumbimg: "snla_thumb_love.png",
    color: "#3A5862",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Reklame", "Animasjon"],
    lead: "Hjelp 113-appen er laget av Stiftelsen Norsk Luftambulanse (SNLA) og gjør det enklere for redningspersonell å nå raskere ut. Det redder liv – og å laste ned appen er dermed jevngodt med livreddende arbeid.",
    bodytextone:
      "Vi gikk «all-in» i én Facebook-post til SNLAs følgere og helteerklærte alle som lastet ned eller spredte info om appen. Ja, ikke bare det – vi ga dem hver sin digitale fortjenestemedalje for sin digitale heltedåd. Det var en anerkjennelse som ble satt pris på. Posten ga 5809 direkte delinger og 3389 kommentarer med delinger, og totalt ga kampanjen 19 000 likes og nådde over 1,2 millioner mennesker! Vi oppnådde 220 000 nye nedlastninger og passerte dermed millionen totalt. SNLA fikk også 106 000 GDPR-samtykker og 5000 nye følgere.",
    imgonecollarge: {
      imgurl: "Snla_forsidebilde.png",
      text: "Utklipp fra Facebook-poster i kampanjeperioden.",
      alt: "Utklipp fra Facebook-poster i kampanjeperioden.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "Snla_forsidebilde1_love.png",
        alt: "Kampanjebilde",
        text: "",
      },
    ],
    film: [
      {
        title: "Casepresentasjon",
        url: "https://player.vimeo.com/video/294466951",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Astrid Storkås // Innholdsprodusent",
      "Ole Hallvard Kveseth // UX/UI",
    ],
  },
  Flytoget: {
    name: "Flytoget",
    url: "flytoget",
    frontpage: true,
    shorttitle: "Kampanjer for Flytoget.",
    thumbimg: "flytoget.jpg",
    color: "#304262",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Reklame"],
    lead: "Kort og greit tar Flytoget deg raskest til og fra Oslo Lufthavn. Dette forteller Flytoget med gjevne mellomrom gjennom hele året, gjerne opp i mot aktualiteter ifh til sesong eller hva som skjer i nyhetsbildet. Under ser du noen av løsningene jeg har vært innvolvert i.",
    imgonecollarge: {
      imgurl: "flytoget.jpg",
      text: "Bilde til kampanje.",
      alt: "Bilde til kampanje.",
    },

    imgportrait: [
      {
        imgurl: "FraRunes_Behance_Flytoget.jpg",
        text: "Nyttårs-annonse",
        alt: "Nyttårs-annonse.",
      },
      {
        imgurl: "Flytoget_Behindthescenes.gif",
        text: "Behind the scenes.",
        alt: "Behind the scenes",
      },
      {
        imgurl: "Gullsnitt.jpg",
        text: "Bilde vant pris i fotokonkurransen Gullsnitt 2014.",
        alt: "Bilde vant pris i fotokonkurransen Gullsnitt 2014.",
      },
      {
        imgurl: "FLYT0056_230x297_Amagasinet_nettside.jpg",
        text: "Påskekampanje",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "Flytoget_skisse_oh2.jpg",
        text: "Skisse.",
        alt: "Skisse.",
      },
      {
        imgurl: "IMG_3368.JPG",
        text: "",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "IMG_3360.JPG",
        text: "",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "Flytoget_Maraton_.jpg",
        text: "Kampanje ifb med Oslo Maraton.",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "IMG_3910.JPG",
        text: "",
        alt: "Annonse i avisa",
      },
      {
        imgurl: "FLYT0074_16aar_m55.jpg",
        text: "16 år kampanje",
        alt: "16 år kampanje",
      },
      {
        imgurl: "FLYT0074_16aar_m552.jpg",
        text: "16 år kampanje",
        alt: "16 år kampanje",
      },
    ],
    team: [
      "Fredrik Omre // Tekstforfatter",
      "Karl Bryhn // Illustratør",
      "Ole Hallvard Kveseth // Art Director",
    ],
  },
  Bouvetfilmen: {
    name: "Bouvet",
    url: "bouvetfilmen",
    frontpage: true,
    shorttitle: "Profilfilm om selskapet.",
    thumbimg: "bouvetfilmen-thumb.jpg",
    color: "#F2A04E",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Animasjonsfilm"],
    lead: "Vi forandrer, fornyer og forbedrer, digitaliserer og bygger samfunnet igjennom utallige prosjekter. Vi er masse folk, med stort mangfold, med åpne sinn og åpne armer, vi er Bouvet. En film om Bouvet.",
    imgonecollarge: {
      imgurl: "bouvetfilmen-colosseum-forside-l.jpg",
      text: "Filmen ble blant annet fremvist på kundearrangement i storsalen på Colosseum kino.",
      alt: "Filmen ble blant annet fremvist på kundearrangement i storsalen på Colosseum kino.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "bilde1.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde2.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde3.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde4.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde5.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde6.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde7.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bilde8.jpg",
        alt: "Bilde fra filmen",
        text: "",
      },
      {
        title: "",
        url: "bouvetfilmen-colosseum2.jpg",
        alt: "Bilde fra kundearrangement i Colosseum kino.",
        text: "",
      },
    ],
    film: [
      {
        title: "Bouvet profilfilm",
        url: "https://player.vimeo.com/video/292803574",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ole Hallvard Kveseth // Animasjon",
    ],
  },
  Norwegian: {
    name: "Norwegian",
    url: "norwegian",
    frontpage: true,
    shorttitle: "Kampanjer for Norwegian.",
    thumbimg: "Norwegian.jpg",
    color: "#C2584C",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Reklame"],
    lead: "Norwegian flyr til mange destinasjoner både innland og utland. Jeg var en del av teamet som utviklet reklamekonsepter for Norwegian. Under ser du noen av løsningene jeg har vært innvolvert i.",
    imgonecollarge: {
      imgurl: "Norwegian.jpg",
      text: "",
      alt: "Bilde fra kampanje.",
    },
    imgportrait: [
      {
        imgurl: "flystol.jpg",
        text: "Businesskampanje",
        alt: "Annonse for norwegian",
      },
      {
        imgurl: "flystol_trykk.jpg",
        text: "På trykk i avisa.",
        alt: "Bilde av annonsen i avisa.",
      },
      {
        imgurl: "NORW_sol&bad_SE&HOR_192x260mm_paraply.jpg",
        text: "Høstkampanje",
        alt: "Høstkampanje",
      },
      {
        imgurl: "NORW_sol&bad_SE&HOR_192x260mm.jpg",
        text: "",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "paraply_hovedkontor.jpg",
        text: "Bilde av annonse hengende på hovedkontoret til Norwegian.",
        alt: "Bilde av annonse hengende på hovedkontoret til Norwegian.",
      },
      {
        imgurl: "paraply.jpg",
        text: "",
        alt: "Bilde av annonse.",
      },
      {
        imgurl: "Bildeavnorwegian_boards.jpg",
        text: "",
        alt: "Bilde av annonse.",
      },
    ],
    imgonecolmedium: [
      {
        title: "",
        url: "Norwegian_webbanner.png",
        alt: "Bilder fra kampanjen på nett",
        text: "",
      },
      {
        title: "Storby kampanje",
        url: "steg1.jpg",
        alt: "Banner i kampanje",
        text: "Digital storby banner i tre steg..",
      },
      {
        title: "",
        url: "steg2.jpg",
        alt: "Banner i kampanje",
        text: "Digital storby banner i tre steg..",
      },
      {
        title: "",
        url: "steg3.jpg",
        alt: "Banner i kampanje",
        text: "Digital storby banner i tre steg..",
      },
      {
        title: "Plakat til flyplasser.",
        url: "Flyplassbanner_Rygge.jpg",
        alt: "Plakat på flyplasser.",
        text: "Digital storby banner i tre steg..",
      },
    ],
    film: [
      {
        title: "Webbanner i aviser",
        url: "https://player.vimeo.com/video/267281127",
      },
    ],
    team: [
      "Rikke Sofie Jacobsen // Tekstforfatter",
      "Mads Hiorth Rønne // Tekstforfatter",
      "Ole Hallvard Kveseth // Art Direction",
    ],
  },
  Statensvegvesen: {
    name: "Statens Vegvesen",
    url: "statensvegvesen",
    frontpage: true,
    shorttitle: "Reklamestunt for oppmerksomhet om bilbeltebruk.",
    thumbimg: "Fast&safe2.jpg",
    color: "#1F1E22",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Reklame"],
    lead: "Drivers who don´t use seat belts are often young, immature and inexperienced. We wanted to find a forum which put our message about using seat belts into a relevant context for this group. We decided to coup the premiere of the high testosterone film, Fast & Furious 6. A film event our target group most surely would attend.",
    imgonecollarge: {
      imgurl: "Bilde6_medium.png",
      text: "I forbindelse med å få funge til å bruke bilbelte, monterte vi setebelter på kinosetene ifb med filmen Fast & Furious.",
      alt: "Bilde fra gjennomføringen av stuntet fra kinosalen.",
    },
    imgonecolmedium: [
      {
        title: "Bilder fra stuntet",
        url: "bilde1.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde2.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde3.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde4.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde5.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde6.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde7.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde11.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde12.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde14.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde15.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde16.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
      {
        title: "",
        url: "bilde17.png",
        alt: "Bilde fra stuntet",
        text: "",
      },
    ],
    film: [
      {
        title: "Film om stuntet",
        url: "https://player.vimeo.com/video/254757804",
      },
    ],
    imgportrait: [
      {
        imgurl: "facebook_Screen.png",
        text: "Skjermbilde fra Facebook-posten",
        alt: "Kommentarer fra Facebook-posten",
      },
      {
        imgurl: "facebook-post.png",
        text: "Skjermbilde fra Facebook-posten",
        alt: "Kommentarer fra Facebook-posten",
      },
      {
        imgurl: "statensvegvesen_kommentarer_.jpg",
        text: "Skjermbilde fra Facebook-posten",
        alt: "Kommentarer fra Facebook-posten",
      },
      {
        imgurl: "Fastnsafe_Eurobest.jpg",
        text: "Stuntet vant både internasjonale og nasjonale utmerkelser: London International Awards - Bronze x2, Eurobest - Shortlist, Cristal Festival 2013 - Silver, Diplom (Stunt/Event) - Gullblyanten 2013.",
        alt: "Kommentarer fra Facebook-posten",
      },
    ],
    utmerkelser: [
      "London International Awards - Bronze x2",
      "Eurobest - Shortlist",
      "GCristal Festival 2013 - Silver",
      "Diplom (Stunt/Event) - Gullblyanten 2013",
    ],
    team: [
      "Øystein Vik // Art Director",
      "Ole Hallvard Kveseth // Art Director",
      "Bendik Romstad // Tekstforfatter",
    ],
  },
  Ruter: {
    name: "Ruter",
    url: "ruter",
    frontpage: true,
    shorttitle: "Kampanjer for Ruter.",
    thumbimg: "Ruter2.jpg",
    color: "#E67947",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Reklame"],
    lead: "Ruter er et felles administrasjonsselskap for kollektivtrafikken i Oslo og Akershus. Ruter står i dag for over halvparten av landets kollektivtransport. Med buss, trikk og T-bane tar de deg både til jobb, og fritidsaktiviteter. Under ser du noen av løsningene jeg har vært innvolvert i.",
    imgonecollarge: {
      imgurl: "Ruter_forsidebilde.jpg",
      text: "Sommerkampanjen: Uspesifisert.",
      alt: "Bilde fra kampanjen.",
    },
    film: [
      {
        title: "Sommerkampanje",
        url: "https://player.vimeo.com/video/141105276",
      },
      {
        title: "Web-banner",
        url: "https://player.vimeo.com/video/267122849",
      },
    ],
    imgonecolmedium: [
      {
        title: "",
        url: "Screenshot_banner.jpg",
        alt: "Bilder fra kampanjen",
        text: "",
      },
      {
        title: "",
        url: "Screenshotweb.jpg",
        alt: "Banner i kampanje",
        text: "Some-banner på Facebook.",
      },
    ],
    imgportrait: [
      {
        imgurl: "IMG_3429.jpg",
        text: "Vi fikk spesiallaget en kake til kampanjen.",
        alt: "Vi fikk spesiallaget en kake til kampanjen.",
      },
      {
        imgurl: "IMG_3430.jpg",
        text: "Vi fikk spesiallaget en kake til kampanjen.",
        alt: "Vi fikk spesiallaget en kake til kampanjen.",
      },
      {
        imgurl: "IMG_3439.jpg",
        text: "Vi fikk spesiallaget en kake til kampanjen.",
        alt: "Vi fikk spesiallaget en kake til kampanjen.",
      },
      {
        imgurl: "RUTE0035_Ukeplakat_325x480_NY.jpg",
        text: "",
        alt: "Annonse",
      },
      {
        imgurl: "IMG_3444.jpg",
        text: "",
        alt: "Annonse",
      },
      {
        imgurl: "RUTE0020_ukeplakater_325x480_6-2-1_web.jpg",
        text: "Kampanje.",
        alt: "Kampanje.",
      },
      {
        imgurl: "RUTE0020_ukeplakater_325x480_6-2-2_web.jpg",
        text: "",
        alt: "Annonse",
      },
      {
        imgurl: "IMG_3332.jpg",
        text: "",
        alt: "Annonse",
      },
    ],

    utmerkelser: [
      "Gull + bronse – Gullblyanten 2015",
      "Gull – Gulltaggen 2015",
      "Gull – Max Marketing Mix 2015",
      "Gull + Bronse– Retailprisen 2015",
    ],
    team: [
      "Øistein Markus Holm // Tekstforfatter",
      "Ole Hallvard Kveseth // Art Director",
      "Ingrid Lea // Art Director",
      "Thale Høy-Pettersen // Art Director",
      "Torny Hesle // Art Director",
    ],
  },
  BlockWatne: {
    name: "Block Watne",
    url: "blockwatne",
    frontpage: true,
    shorttitle: "Kampanje for Block Watne",
    thumbimg: "flyttutavbyen.jpg",
    color: "#B1A991",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Reklame", "Animasjon"],
    lead: "Block Watne er en av Norges største boligbyggere og tilbyr boliger over hele Sør-Norge, fra Grimstad helt nord til Steinkjer. De fleste boligene er plassert noe utenfor bysentraene – hvor det er mer plass og bedre luft, men hvor det fremdeles er kort vei til alt du behøver i hverdagen. Dette er attraktivt for veldig mange byboere – ikke minst barnefamilier – men ikke alle er klar over hva du faktisk kan få for pengene. Block Watne ønsket derfor våren 2016 å oppfordre til å flytte ut av den skitne, trange byen til et bedre liv utenfor sentrum. Målsettingen var salg av boliger samt endre holdningen til at det er bra å bo utenfor byen. I et marked hvor Block Watnes konkurrenter bruker store summer på markedsføring, ble det også avgjørende å kunne å gjøre noe annerledes, utenfor den ”vanlige” boligannonsens form og stil.",
    bodytextone:
      "Alle ”ser etter noe” ved en bolig – enten det er muligheten til å nyte kafélivet eller det er muligheten til å la barna leke fritt. Men hva om boligen faktisk så ut som det ”vi ser etter”. Ser du etter barnevennlige boliger? Så finn en så barnevennlig bolig at den ser ut som en leke! Ved slik å kombinere kjente ”byggetekniske grep” med en helt egen lekenhet skaptes en stor kontrast til bransjens generiske og fotografiske salgsuttrykk, og gjorde det helt klart at de virkelig barnevennlige boligene, de virkelig sentrale boligene og den virkelig åpne beliggenheten, finner du utenfor bykjernen.",
    imgonecollarge: {
      imgurl: "BW_Topbilde_.jpg",
      text: "Bilde fra kampanjen.",
      alt: "Bilde fra kampanjen.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "SoMe_Mockup.png",
        alt: "Film for sosiale medier",
        text: "",
      },
      {
        title: "",
        url: "Webbanner_Kaffe.png",
        alt: "Web-banner i kampanje",
        text: "Web-banner på Finn.no.",
      },
    ],
    film: [
      {
        title: "Kampanjefilm",
        url: "https://player.vimeo.com/video/208267568",
      },
      {
        title: "Digitale boards",
        url: "https://player.vimeo.com/video/179198213",
      },
    ],
    imgportrait: [
      {
        imgurl: "Annonse_Bamse.png",
        text: "Bamse",
        alt: "Bamse",
      },
      {
        imgurl: "Annonse_Hund.png",
        text: "Hund",
        alt: "Hund",
      },
      {
        imgurl: "Annonse_Kaffe.png",
        text: "Kaffe",
        alt: "Kaffe",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Håvard Wibye Nærdal // Art Direction/Illustrasjon",
      "Ole Hallvard Kveseth // Art Direction",
    ],
  },
  Millum: {
    name: "Millum",
    url: "millum",
    frontpage: true,
    shorttitle: "Filmer om Millum sine produkter.",
    thumbimg: "Millum_forsidebilde_medium.jpg",
    color: "#DF754C",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Animasjonsfilmer"],
    lead: "En god handel satt i system - for hotell, restaurant og storhusholdning. Millum er bindeleddet mellom kjøper og selger i Storhusholdningsbransjen og i offentlig sektor. Millum sine innkjøpsportaler handles varer for over 7,2 milliarder i året. Våre løsninger spenner fra rene innkjøps- og leverandørportaler med integrerte fakturaløsninger, til nøkkelferdige netthandelsløsninger, spesialløsninger for inn og utgående fakturaer og dessuten håndtering av all meldingstrafikk gjennom PEPPOL. Millum hjelper deg ganske enkelt å effektivisere ordreprosesser, frigjøre tid og, gjennom det, øke inntjeningen. Vi har laget en serie av filmer om de ulike produktene, her kan du se to av dem.",
    imgonecollarge: {
      imgurl: "Millum_forsidebilde_stor.jpg",
      text: "Illustrasjoner fra filmene.",
      alt: "Illustrasjoner fra filmene.",
    },
    imgonecolmedium: [
      {
        title: "Bilder fra filmene",
        url: "Millum_Arbeidere2.jpg",
        alt: "Bilde fra filmene",
        text: "",
      },
      {
        title: "",
        url: "Millum_Handshake.jpg",
        alt: "Bilde fra filmene",
        text: "",
      },
      {
        title: "",
        url: "Millum_lastebil.jpg",
        alt: "Bilde fra filmene",
        text: "",
      },
      {
        title: "",
        url: "Millum_Uniformer.jpg",
        alt: "Bilde fra filmene",
        text: "",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ole Hallvard Kveseth // Animasjon",
      "Astrid Storkås // Illustrasjoner",
    ],

    film: [
      {
        title: "Millum Procurement",
        url: "https://player.vimeo.com/video/273356449",
      },
      {
        title: "Millum Trade",
        url: "https://player.vimeo.com/video/275492462",
      },
      {
        title: "Millum Commerce",
        url: "https://player.vimeo.com/video/294945526",
      },
    ],
  },
  Sparebank1: {
    name: "Sparebank 1",
    url: "sparebank1",
    frontpage: true,
    shorttitle: "Kampanjer for Sparebank1.",
    thumbimg: "Sparebank1.jpg",
    color: "#65B3E3",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Reklame", "Animasjon"],
    lead: "Sparebank 1 tilbyr banktjenester og forsikringer, og har 14 banker med 300 kontorer over hele landet. Jeg var innvolvert i to prosjekter i 2012/13.",
    imgonecollarge: {
      imgurl: "Bilde1_.jpeg",
      text: "Bilde fra filmen",
      alt: "Bilde fra filmen.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "Bilde2.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sparebank1.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
    ],
    team: [
      "Rikke Sofie Jacobsen // Tekstforfatter",
      "Mads Hiorth Rønne // Tekstforfatter",
      "Ole Hallvard Kveseth // Art Direction",
      "Gimpville // Animasjon",
    ],
    film: [
      {
        title: "Film om E-faktura",
        url: "https://player.vimeo.com/video/86245634",
      },
    ],
  },
  Sparebank1stunt: {
    name: "Sparebank 1",
    url: "sparebank1stunt",
    frontpage: false,
    shorttitle: "Utendørskampanje for Sparebank1",
    thumbimg: "SB1_Bankkortforbarn_.jpg",
    color: "#65B3E3",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Reklame"],
    lead: "En liten utendørsaktivitet for å promotere for bankkort for barn.",
    imgonecollarge: {
      imgurl: "Sp1_bilde5.jpg",
      text: "Bilde fra kampanjen",
      alt: "Bilde fra kampanjen.",
    },
    imgonecolmedium: [
      {
        title: "",
        url: "SB1_Bankkortforbarn_.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde2.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde3.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde4.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde5.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde6.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde7.2.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde8.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde9.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde10.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
      {
        title: "",
        url: "Sp1_bilde11.jpg",
        alt: "Bilde fra filmen.",
        text: "",
      },
    ],
    team: [
      "Rikke Sofie Jacobsen // Tekstforfatter",
      "Mads Hiorth Rønne // Tekstforfatter",
      "Ole Hallvard Kveseth // Art Direction",
    ],
    film: [
      {
        title: "Ta steget opp i de voksnes verden",
        url: "https://player.vimeo.com/video/86242439",
      },
    ],
  },
  Kreftforeningen: {
    name: "Kreftforeningen",
    url: "kreftforeningen",
    frontpage: false,
    shorttitle: "Julekampanje for Kreftforningen.",
    thumbimg: "Kreftforeningen.jpg",
    color: "#2B2E35",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "top",
    tags: ["Reklame"],
    lead: "Julekampanje for Kreftforeningen julen 2016. Ideen bak Kreftforeningens juleaksjon er enkel; For hver gave Kreftforeningen får inn på kreftforeningen.no/jul, henges det opp en stjerne til en som tilbringe julen på sykehus. Forskning nytter. Oppmuntring også! Kampanjen Stjerner gir håp har nå blitt en juletradisjon og suksess de siste 4 årene.",
    imgonecollarge: {
      imgurl: "bha_V7A1685_OHjustert_forlenget.jpg",
      text: "",
      alt: "Bilde fra kampanjen.",
    },
    film: [
      {
        title: "Julekampanje for Kreftforeningen",
        url: "https://player.vimeo.com/video/273208449",
      },
    ],
    imgonecolmedium: [
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-1.jpg",
        alt: "Bilde fra kampanjen.",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-2.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-3.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-4.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-5.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-6.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-7.jpg",
        alt: "",
        text: "",
      },
      {
        title: "",
        url: "Kreftforeningen_Jul2016_Presentationboard-8.jpg",
        alt: "",
        text: "",
      },
    ],
    team: [
      "Ole-Henrik Larssen // Tekstforfatter",
      "Ingrid Leren Wathne // Tekstforfatter",
      "Einar Nonstad // Art Direction",
      "Ole Hallvard Kveseth // Art Direction",
    ],
  },
  Student: {
    name: "Studentarbeider",
    url: "studentarbeider",
    frontpage: false,
    shorttitle: "Oppgaver som student.",
    thumbimg: "Ikea_stolleken_forsidebilde_small.jpg",
    color: "#2B2E35",
    textcolor: textlight,
    aspect: "vertical",
    alignimg: "center",
    tags: ["Reklame"],
    team: "singel",
  },
  Photoshoping: {
    name: "Bildebehandling",
    url: "photoshoping",
    frontpage: true,
    shorttitle: "Utvalgte komposittbilder.",
    thumbimg: "Nike_Halloween_newedition_retusj_8.jpg",
    color: "#C6B3AA",
    textcolor: textlight,
    aspect: "horizontal",
    alignimg: "center",
    tags: ["Bildebehandling"],
    team: "singel",
    lead: "På denne siden har jeg samlet noen utvalgte bilder jeg har retusjert.",
    imgonecollarge: {
      imgurl: "Nike_halloween_forsidebilde.jpg",
      text: "Retusjert bilde",
      alt: "Retusjert bilde.",
    },
    film: [
      {
        title: "Behind the scenes Mercedes, hobbyprosjekt.",
        url: "https://player.vimeo.com/video/173644166",
      },
      {
        title: "Zuccs Winterwonderland behind the scenes",
        url: "https://player.vimeo.com/video/141340765",
      },
    ],
    imgportrait: [
      {
        imgurl: "mcflyin.jpg",
        text: "Fast food, just for birds",
        alt: "Fast food, just for birds",
      },
      {
        imgurl: "rubeekscube.jpg",
        text: "",
        alt: "",
      },
      {
        imgurl: "Forbot_grå.jpg",
        text: "Et bilde sammensatt med utgangspunkt av knvier og gafler.",
        alt: "Et bilde sammensatt med utgangspunkt av knvier og gafler.",
      },
      {
        imgurl: "Zuccs_Winter_Wonderland_.jpg",
        text: "Bilde av Mats Zuccarello i vinterland.",
        alt: "Bilde av Mats Zuccarello i vinterland.",
      },
      {
        imgurl: "Rastløs_Ethusholdningsliv_Plakater_Fabian.jpg",
        text: "Plakat til teaterstykke",
        alt: "Plakat til teaterstykke",
      },
      {
        imgurl: "Rastløs_Ethusholdningsliv_Plakater_Johan.jpg",
        text: "Plakat til teaterstykke",
        alt: "Plakat til teaterstykke",
      },
      {
        imgurl: "Cevita_flaskeappelsin_behance.jpg",
        text: "Appelsin i flaske.",
        alt: "Appelsin i flaske.",
      },
    ],
    team: ["Ole Hallvard Kveseth // Foto"],
  },
};
