const textdark="#000",textlight="#fff";let projects={Tine:{name:"Tine",url:"tine",frontpage:!0,shorttitle:"Digitalt planleggingsverktøy for idrettslag og foreninger.",thumbimg:"smartplanlegger-mobil.png",color:"#306AAD",textcolor:"#fff",aspect:"vertical",alignimg:"top",tags:["UI/UX","Animasjonsfilm"]},Imdi:{name:"Imdi",url:"imdi",frontpage:!0,shorttitle:"Animasjonsfilm om nytt digitalt verktøy for ansatte i Imdi.",thumbimg:"imdi_toppbilde.jpg",color:"#59BBC3",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Animasjonfilm"]},Nordea:{name:"Nordea",url:"nordea",frontpage:!0,shorttitle:"Redaksjonell nyhetsside om privatøkonomi.",thumbimg:"nordeanews-forside.png",color:"#1C26A5",textcolor:"#fff",aspect:"vertical",alignimg:"top",tags:["UI/UX"]},Bouvetgrandprix:{name:"Bouvet Grand Prix",url:"bouvetgrandprix",frontpage:!0,shorttitle:"Kampanjeside med bilspill.",thumbimg:"bouvet-grandprix-mobil.png",color:"#2B2E35",textcolor:"#fff",aspect:"vertical",alignimg:"top",tags:["UI/UX","Animasjon"],lead:"Da Bouvet i Oslo flyttet ved nyttår 2017, ga ikke det bare behov for å fortelle om vår nye adresse, det ga også en anledning til å fortelle noe om oss selv – på en avhengighetsskapende måte.",film:[{title:"Promofilm",url:"https://player.vimeo.com/video/225247842"},{title:"Promofilm",url:"https://player.vimeo.com/video/225247842"},{title:"Promofilm",url:"https://player.vimeo.com/video/225247842"}],bodytextone:"Det gjelder å utnytte de muligheter som byr seg, og vi valgte derfor også å kombinere ”flyttemeldingen” med en leken invitasjon til den aller første kundefesten i våre nye lokaler. I praksis betydde dette en e-post med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok på high score-listen vanket det også premie på festen som beste sjåfør.",bodytexttwo:"Lorem ipsum 2",imgtwocolumn:{imgone:{imgurl:"BGP_iPad_closeup_2.jpg",alt:"Alternativ tekst"},imgtwo:{imgurl:"BGP_iPad_closeup_.jpg",alt:"Alternativ tekst"}},imgonecolmedium:[{title:"Mediumbilde",url:"/img/main/olehallvard-profilbilde.jpeg",alt:"alt tekst",text:"bildetekst her"},{title:"Mediumbilde",url:"/img/main/olehallvard-profilbilde.jpeg",alt:"alt tekst",text:"bildetekst her"},{title:"Mediumbilde",url:"/img/main/olehallvard-profilbilde.jpeg",alt:"alt tekst",text:"bildetekst her"}],imgonecollarge:{imgurl:"BGP_Toppbilde.jpg",text:"Bildetekst her",alt:"Alternativ tekst"},imgportrait:[{imgurl:"BGP_Toppbilde.jpg",text:"Bildetekst her1",alt:"Alternativ tekst1"},{imgurl:"BGP_Toppbilde.jpg",text:"Bildetekst her2",alt:"Alternativ tekst2"},{imgurl:"BGP_Toppbilde.jpg",text:"Bildetekst her3",alt:"Alternativ tekst3"}],team:["Kristian Wille // Tech lead","Zulu // Frontend utvikler","Ole Hallvard Kveseth // UX/UI"]},Statnett:{name:"Statnett",url:"statnett",frontpage:!0,shorttitle:"Fagsystemer for elkraftingeniører.",thumbimg:"autodig-oppsummering-to.png",color:"#647382",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["UI/UX","Designsystem","Animasjon"],lead:"Casepresentasjon om arbeidet med Statnetts designsystem Power Grid.",filmone:"https://player.vimeo.com/video/225247842",filmtwo:"https://player.vimeo.com/video/225247842",bodytextone:"Lorem ipsum 1",bodytexttwo:"Lorem ipsum 2"},OBOS:{name:"OBOS",url:"obos",frontpage:!0,shorttitle:"Informasjonsside og film om forkjøprsrett.",thumbimg:"Obos-thumbnew.png",color:"#77C69E",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["UI/UX","Animasjon"]},Fjordland:{name:"Fjordland",url:"fjordland",frontpage:!0,shorttitle:"Webside med produktpresentasjon.",thumbimg:"fjordland-thumb.png",color:"#AE697A",textcolor:"#fff",aspect:"vertical",alignimg:"top",tags:["UI/UX"]},SNLA:{name:"SNLA",url:"snla",frontpage:!0,shorttitle:"Kampanje om Hjelp 113-appen.",thumbimg:"snla_thumb_love.png",color:"#3A5862",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Reklame","Animasjon"]},Flytoget:{name:"Flytoget",url:"flytoget",frontpage:!0,shorttitle:"Kampanjer for Flytoget.",thumbimg:"flytoget.jpg",color:"#304262",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["Reklame"]},Bouvetfilmen:{name:"Bouvet",url:"bouvetfilmen",frontpage:!0,shorttitle:"Profilfilm om selskapet.",thumbimg:"bouvetfilmen-thumb.jpg",color:"#F2A04E",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Animasjonsfilm"]},Norwegian:{name:"Norwegian",url:"norwegian",frontpage:!0,shorttitle:"Kampanjer for Norwegian.",thumbimg:"Norwegian.jpg",color:"#C2584C",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Reklame"]},StatensVegvesen:{name:"Statens Vegvesen",url:"statensvegvesen",frontpage:!0,shorttitle:"Reklamestunt for oppmerksomhet om bilbeltebruk.",thumbimg:"Fast&safe2.jpg",color:"#1F1E22",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Reklame"]},Ruter:{name:"Ruter",url:"ruter",frontpage:!0,shorttitle:"Kampanjer for Ruter.",thumbimg:"Ruter2.jpg",color:"#E67947",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Reklame"]},BlockWatne:{name:"Block Watne",url:"blockwatne",frontpage:!0,shorttitle:"Kampanje for Block Watne",thumbimg:"flyttutavbyen.jpg",color:"#B1A991",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Reklame","Animasjon"]},Millum:{name:"Millum",url:"millum",frontpage:!0,shorttitle:"Filmer om Millum sine produkter.",thumbimg:"Millum_forsidebilde_medium.jpg",color:"#DF754C",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["Animasjonsfilmer"]},Sparebank1:{name:"Sparebank 1",url:"sparebank1",frontpage:!0,shorttitle:"Kampanjer for Sparebank1.",thumbimg:"Sparebank1.jpg",color:"#65B3E3",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["Reklame","Animasjon"]},Kreftforeningen:{name:"Kreftforeningen",url:"kreftforeningen",frontpage:!1,shorttitle:"Julekampanje for Kreftforningen.",thumbimg:"Kreftforeningen.jpg",color:"#2B2E35",textcolor:"#fff",aspect:"horizontal",alignimg:"top",tags:["Reklame"]},Student:{name:"Studentarbeider",url:"studentarbeider",frontpage:!1,shorttitle:"Oppgaver som student.",thumbimg:"Ikea_stolleken_forsidebilde_small.jpg",color:"#2B2E35",textcolor:"#fff",aspect:"vertical",alignimg:"center",tags:["Reklame"]},Photoshoping:{name:"Bildebehandling",url:"photoshoping",frontpage:!0,shorttitle:"Utvalgte komposittbilder.",thumbimg:"Nike_Halloween_newedition_retusj_8.jpg",color:"#C6B3AA",textcolor:"#fff",aspect:"horizontal",alignimg:"center",tags:["Bildebehandling"]}};