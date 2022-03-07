const textdark = "#000";
const textlight = "#fff";

let projects = {
 
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
        film: [{
            title: "Konseptfilm", 
            url: "https://player.vimeo.com/video/292788111"
        },
        {
            title: "Promoteringsfilm", 
            url: "https://player.vimeo.com/video/294946611"
        }],
        bodytextone: "Oppgaven gikk ut på å se på interaksjonsdesignet, og designe det grafiske brukergrensesnittet og innholdselementer til smartplanlegger.no. Arbeidet innebar også å lage illustrasjoner og animasjonsfilm til bruk på siden og i sosiale medier.",

        imgtwocolumn: {
            imgone: {
                imgurl: "Tine_SI_Bilde2_M.jpg",
                alt: "Bilde fra filmen."
            },
            imgtwo: {
                imgurl: "Tine_SI_Bilde1_M.jpg",
                alt: "Bilde fra filmen."
            }
        },
     
        imgonecolmedium: [
        {
            title: "Forsiden av smartplanlegger.no", 
            url: "Smartplanlegger-mockups-v2.png",
            alt: "Forsiden av smartplanlegger.no",
            text: "Desktopversjonen av nettsiden."
        },
        {
            title: "", 
            url: "Smartplanlegger-mockups2.png",
            alt: "Bilde fra nettsiden på mobil ",
            text: ""
        },
        {
            title: "", 
            url: "Smartplanlegger-mockups.png",
            alt: "Bilde fra nettsiden på mobil og tablet.",
            text: ""
        },
        {
            title: "", 
            url: "Smartplanlegger-mockups-v2-2.png",
            alt: "Bilde av nettsiden",
            text: "Bilder av nettsiden."
        },
        {
            title: "", 
            url: "bilde1.jpg",
            alt: "Bilde fra filmen.",
            text: "Bilder hentet fra filmen."
        },
        {
            title: "", 
            url: "bilde2.jpg",
            alt: "Bilde fra filmen.",
            text: "Bilder hentet fra filmen."
        },
        {
            title: "", 
            url: "bilde3.jpg",
            alt: "Bilde fra filmen.",
            text: "Bilder hentet fra filmen."
        },
        {
            title: "", 
            url: "bilde4.jpg",
            alt: "Bilde fra filmen.",
            text: "Bilder hentet fra filmen."
        },
        {
            title: "", 
            url: "bilde5.jpg",
            alt: "Bilde fra filmen.",
            text: "Bilder hentet fra filmen."
        }],
        team: ["Ole-Henrik Larssen // Tekstforfatter", "Ole Hallvard // Illustrasjoner og animasjon", "Linda Sunde // Animasjon", "Astrid Storkås // Illustrasjoner"]
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
        film: [{
            title: "Film", 
            url: "https://player.vimeo.com/video/377254014"
        }],
        bodytextone: "Animasjonsfilm i forbindelse med intern lansering av det nye systemet IMDinett mottak, som forenkler hverdagen til mottaksansatte rundt om i landet og IMDi, og forhåpentligvis gir flyktninger et godt sted å bo. Se film for å lære mer :-) ",
        bodytexttwo: "",

        imgtwocolumn: {
            imgone: {
                imgurl: "bilde1.png",
                alt: "Bilde fra filmen"
            },
            imgtwo: {
                imgurl: "bilde3.png",
                alt: "Bilde fra filmen"
            }
        },
     
        imgonecolmedium: [
        {
            title: "", 
            url: "bilde2.png",
            alt: "Bilde fra filmen",
            text: ""
        },
        {
            title: "", 
            url: "bilde4.png",
            alt: "Bilde fra filmen",
            text: ""
        },
        {
            title: "", 
            url: "bilde5.png",
            alt: "Bilde fra filmen",
            text: ""
        },
        {
            title: "", 
            url: "bilde6.png",
            alt: "Bilde fra filmen",
            text: "Bilder fra filmen."
        }],
 
        imgonecollarge: {
            imgurl: "imdi_toppbildebouvet.jpg",
            text: "God stemning",
            alt: "Imdi illustrasjonskarakterer som ser ut som trekanter"
        },
        team: ["Ole-Henrik Larssen // Tekstforfatter", "Ole Hallvard // Design og animasjon"]
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
        lead:"Nordea er den største banken i norden. Med mer enn 10 millioner kunder og 30.000 medarbeidere. Nordea har et bredt spekteret av produkter, tjenester og løsninger innenfor bank, kapitalforvaltning og forsikring. Nordea “News” er en nyhetshub hvor egne journalister og gjestebloggere deler siste nytt innen diverse teamer innenfor økonomi. Siden har til hensikt å lære det norske folk om økonomi, og være en trafikkøkende aktivitet til egne nettsider, nordea.no. Få noen smarte økonomitips på: nordeanews.no",
        imgonecolmedium: [
            {
                title: "Bilder fra nettsiden", 
                url: "Nordea_Mockup1.jpg",
                alt: "Bilde fra nettsiden",
                text: "Bilde av forsiden."
            },
            {
                title: "", 
                url: "Nordea_Mockup2.jpg",
                alt: "Bilde fra nettsiden",
                text: ""
            },
            {
                title: "", 
                url: "Nordea_Mockup4.jpg",
                alt: "Bilde fra nettsiden på mobil.",
                text: "Bilde fra nettsiden på mobil."
            },
            {
                title: "", 
                url: "Nordea_Mockup3.jpg",
                alt: "Bilde fra nettsiden",
                text: ""
            }],
        team: ["Zulfeekar 'Zulu' Cheriyampurath // Tech lead", "Vilje M. Mohn // Prosjektledelse", "Ole Hallvard Kveseth // UX/UI"]
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
    
        film: [{
            title: "Konseptfilm", 
            url: "https://player.vimeo.com/video/225247842"
        }],


        bodytextone: "Vi sendte ut lenken til spillet sammen med en digital invitasjon til innflytningsfesten. I praksis betydde dette en e-post med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok på high score-listen vanket det også premie på festen som beste sjåfør.",
        bodytexttwo: "",

        imgtwocolumn: {
            imgone: {
                imgurl: "BGP_iPad_closeup_2.jpg",
                alt: "Alternativ tekst"
            },
            imgtwo: {
                imgurl: "BGP_iPad_closeup_.jpg",
                alt: "Alternativ tekst"
            }
        },
     
        imgonecolmedium: [
        {
            title: "", 
            url: "BGP_Macbooksscreen_english.jpg",
            alt: "alt tekst",
            text: ""
        },
        {
            title: "", 
            url: "BGPiphonemapenglish.jpg",
            alt: "alt tekst",
            text: ""
        },
        {
            title: "", 
            url: "BGP_Poster_facebook.jpg",
            alt: "alt tekst",
            text: "Plakater som hangt på kontoret"
        },
        {
            title: "", 
            url: "BGP_bottle.jpg",
            alt: "alt tekst",
            text: "Vi satt frem unike Bouvet Grand Prix prosecco i hver etasje for å promotere spillet internt."
        }],
 
        imgonecollarge: {
            imgurl: "BGP_Toppbilde.jpg",
            text: "Bilde av landingssiden",
            alt: "Bilde av landingssiden"
        },
        
        imgportrait: [{
            imgurl: "",
            text: "Bildetekst her1",
            alt: "Alternativ tekst1"
        },
        {
            imgurl: "",
            text: "Bildetekst her2",
            alt: "Alternativ tekst2"
        }],

        team: ["Kristian Wille // Tech lead", "Zulu // Frontend utvikler", "Ole Hallvard Kveseth // UX/UI"]

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
        film: [{
            title: "Casefilm", 
            url: "https://player.vimeo.com/video/665628604"
        },
        {
            title: "Demo fra Figma", 
            url: "https://player.vimeo.com/video/671851808"
        }
        ],
        team: ["Frode Kolstad // Grafisk designer", "Marc Garcia // UX Designer", "Ole Hallvard Kveseth // UX/UI"]
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
        lead:"Forkjøpsrett er OBOS sin beste medlemsfordel. Ja, kanskje rett og slett verdens beste OBOS fordel. OBOS ønsket en egen side på obos.no som gikk i dybden på deres viktigste medlemsfordel Forkjøpsrett. Siden forteller om medlemsfordelen med illustrasjoner, film, søkeordsoptimalisert tekst, og bruk av OBOS sitt designsystem. Filmen har vi også produsert, og jeg har også laget animasjonene.",
        imgonecollarge: {
            imgurl: "Obos-mockup.png",
            text: "Nettside om OBOS fordelen Forkjøprsrett.",
            alt: "Nettside om OBOS fordelen Forkjøprsrett."
        },
        imgonecolmedium: [
            {
                title: "Bilder fra nettsiden", 
                url: "obos-s-1.png",
                alt: "Bilde fra nettsiden",
                text: "Bilde av nettsiden."
            },
            {
                title: "", 
                url: "obos-s-2.png",
                alt: "Bilde fra nettsiden",
                text: ""
            },
            {
                title: "", 
                url: "obos-s-3.png",
                alt: "Bilde fra nettsiden.",
                text: ""
            },
            {
                title: "", 
                url: "obos-forkjøp-forsbilde.jpg",
                alt: "Bilde fra filmen",
                text: ""
            }],
            film: [{
                title: "Film om forkjøpsrett", 
                url: "https://player.vimeo.com/video/294938753"
            }
            ],
        team: ["Ole-Henrik Larssen // Tekstforfatter", "Ole Hallvard Kveseth // UX/UI & animasjon"]
    
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
        team: 'singel',
        lead: "Fjordland AS er en merkevarebedrift som utvikler, selger og markedsfører merkevarene Fjordland, Bremykt, Brelett, Yoplait og KOS. Prosjektet omhandlet å lage nye nettsider for hovedmerke Fjordland. Fjordland sitt nettsted skal være et hjem for en mengde produkter, oppskrifter og et sted for å lære mer om Fjordland. Den tekniske løsningen er bygd på Enonic XP, og skal forenkle redaktørrollen internt. Det er viktig at brukerne har enkel tilgang til produktene for å finne nyttig informasjon om allergener og tilbredning, i tillegg til å friste til handel.",
        imgonecollarge: {
            imgurl: "Fjordland-mockups-front.png",
            text: "Bilde bra nettsiden til Fjordland.",
            alt: "Bilde fra fjordland.no."
        },
        imgonecolmedium: [
            {
                title: "", 
                url: "fjordland-screen.png",
                alt: "Bilde fra nettsiden",
                text: ""
            }],
            team: ["Trond Erling Hundal // Utvikler", "Ole Hallvard Kveseth // UX/UI"]
            
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
        lead:"Hjelp 113-appen er laget av Stiftelsen Norsk Luftambulanse (SNLA) og gjør det enklere for redningspersonell å nå raskere ut. Det redder liv – og å laste ned appen er dermed jevngodt med livreddende arbeid.",
        bodytextone: "Vi gikk «all-in» i én Facebook-post til SNLAs følgere og helteerklærte alle som lastet ned eller spredte info om appen. Ja, ikke bare det – vi ga dem hver sin digitale fortjenestemedalje for sin digitale heltedåd. Det var en anerkjennelse som ble satt pris på. Posten ga 5809 direkte delinger og 3389 kommentarer med delinger, og totalt ga kampanjen 19 000 likes og nådde over 1,2 millioner mennesker! Vi oppnådde 220 000 nye nedlastninger og passerte dermed millionen totalt. SNLA fikk også 106 000 GDPR-samtykker og 5000 nye følgere.",
        imgonecollarge: {
            imgurl: "Snla_forsidebilde.png",
            text: "Utklipp fra Facebook-poster i kampanjeperioden.",
            alt: "Utklipp fra Facebook-poster i kampanjeperioden."
        },
        imgonecolmedium: [
            {
                title: "", 
                url: "Snla_forsidebilde1_love.png",
                alt: "Kampanjebilde",
                text: ""
            }],
            film: [{
                title: "Casepresentasjon", 
                url: "https://player.vimeo.com/video/294466951"
            }
            ],
            team: ["Ole-Henrik Larssen // Tekstforfatter", "Astrid Storkås // Innholdsprodusent", "Ole Hallvard Kveseth // UX/UI"]
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
        tags: ["Reklame"]
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
        tags: ["Animasjonsfilm"]
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
        tags: ["Reklame"]
    },
    StatensVegvesen: {
        name: "Statens Vegvesen",
        url: "statensvegvesen",
        frontpage: true,
        shorttitle: "Reklamestunt for oppmerksomhet om bilbeltebruk.",
        thumbimg: "Fast&safe2.jpg",
        color: "#1F1E22",
        textcolor: textlight,
        aspect: "horizontal",
        alignimg: "center",
        tags: ["Reklame"]
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
        tags: ["Reklame"]
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
        tags: ["Reklame", "Animasjon"]
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
        film: [{
            title: "Konseptfilm", 
            url: "https://player.vimeo.com/video/225247842"
        },
        {
            title: "Promofilm", 
            url: "https://player.vimeo.com/video/225247842"
        },
        {
            title: "Promofilm", 
            url: "https://player.vimeo.com/video/225247842"
        }],
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
        tags: ["Reklame", "Animasjon"]
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
        tags: ["Reklame"]
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
        team: 'singel'
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
        team: 'singel'
    }
};
  
  
