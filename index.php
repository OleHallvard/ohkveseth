<!DOCTYPE html>

<html>

<head>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134318014-1"></script>
    <script src="/prosjekter/projects.js"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-134318014-1');
    </script>


    <meta charset="UTF-8">
    <title>Ole Hallvard</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <script src="js/smoothScroll.js"></script>
    <script src="/prosjekter/projects.js"></script>
    <meta name="viewport" content="width=device-width">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>

</head>

<body>

    <div class="hero-opener">
        <div class="gradient">
            <div class="name"><b>Ole Hallvard Kveseth</b></div>
            <div class="about">T-formet <b>designer</b> med fokus på <b>UX/UI</b></div>
        </div>
        <button id="myDIV" class="about-more-button">+ Les mer</button>

        <div class="content">

            <img src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" class="profil-picture" />
            <p class="about-text">Ole Hallvard (f. 1988) er UI/UX-designer med teft for gode og delikate
                brukeropplevelser.
                Han er
                opptatt av å ta
                vare på både hjertet og hjernen til brukerne. Hjernen som i å løse reelle brukerbehov som gir verdi både
                for brukeren og kunden. Og hjerte som at løsningen skal fremstå "delightful" for brukeren, og gjøre
                opplevelsen ekstra god og tiltalende.</p>

            <p class="about-text">Ole Hallvard ser det som svært viktig at løsningene han lager har tydelige mål, og
                bruker reell innsikt
                som springbrett til å skape en god og verdifull brukeropplevelse. Løsningene hans gjenspeiler fokus på
                brukervennlighet, bruk av etablerte prinsipper og konvensjoner, universell utforming, responsivt design,
                tett kontakt med brukerne, helhetlig og effektiv design (designsystem), og de ekstra visuelle finessene
                som gjør at løsningen står ut.</p>

            <p class="about-text">Han er svært opptatt av de håndverksmessige finessene, og har en sjelden dybde innen
                designfag. Med
                erfaring fra reklamebyrå har han i tillegg en stor kreativ verktøykasse, og har dermed gode kunnskaper
                om å lage animasjoner, bildebehandling, enkle illustrasjoner og kreativt design.</p>

            <p class="about-text">Ole Hallvard higer hele tiden etter å bli en enda bedre designer, og for å oppnå dette
                er han også
                opptatt av den tekniske front-end utviklingen. Både samarbeide tett med utviklere, men også lære seg mer
                innen dette fagfeltet selv. Ole Hallvard bidrar der han kan med egen kode helt ut i produksjon, for at
                designet skal skinne litt ekstra.</p>

            <p class="about-text">Ole Hallvard trives i tverrfaglige
                team, og jobber gjerne
                etter prinsipper for smidig utviklingsmetodikk i henhold til Lean-prinsipper om bygg-mål-lær, og
                scrum-metodikk.</p>


            <div class="divider-line"></div>
            <div class="title-medium">Kontakt</div>
            <p class="about-text">olehallvard@gmail.com</p>

            <div class="divider-line"></div>

            <div class="title-medium">Utmerkelser</div>
            <p class="about-text">
                Sølv – Max Marketing Mix 2018,
                Gull + bronse – Gullblyanten 2015,
                Gull – Gulltaggen 2015,
                Gull – Max Marketing Mix 2015,
                Gull + Bronse– Retailprisen 2015,
                Bronse – Eurobest 2015,
                Diplom – Gullsnitt 2014,
                2 x Bronse – London International Awards 2014,
                Sølv – Cristal Awards 2014,
                Diplom – Gullblyanten 2013<br>


            <div class="title-medium">Student</div>
            <p class="about-text">
                Gull - Max Marketing Mix 2012,
                Gullblyanten – Diplom 2012,
                Best YET Norge 2012 – Bronse,
                Gull - Max Marketing Mix 2011,
                Finalist – New York Festivals,
                Bronse, diplom x 2 – Gullkalven</p>

            <div class="divider-line"></div>


            <div class="title-medium">Arbeidserfaring</div>
            <p class="about-text">
                Bouvet,
                McCann,
                Kitchen,
                Try (praksis).
        </div>
    </div>
    </div>
    </div>
    </div>

    <script>
    var coll = document.getElementsByClassName("about-more-button");
    var i;



    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {

            var x = document.getElementById("myDIV");
            if (x.innerHTML === "- Skjul") {
                x.innerHTML = "+ Ler mer";
            } else {
                x.innerHTML = "- Skjul";
            }


            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    </script>


    <div id="ohk-projects" class="project-container"></div>
    <script>
    for (let project in projects) {

        if (projects[project].frontpage === true) {

            let projects_html = `

            <a href="/prosjekter/${projects[project].url}" class="project" style="background: ${projects[project].color};">
                
            <div class="project-screen project-screen--${projects[project].aspect}" style="background: style="background: ${projects[project].color};">
                <div class="project-screen-content project-screen-content--${projects[project].aspect}">
                    <div class="gloss gloss--${projects[project].aspect}"></div>
                   <img class="thumb" src="../img/${projects[project].url}/${projects[project].thumbimg}" alt="${projects[project].shorttile}"/>
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-padding">
                <div class="projects-facts" style="color: ${projects[project].textcolor};">
                    <h4 class="project-client">${projects[project].name}</h4>
                    <h5 class="project-title">${projects[project].shorttitle}</h5>
                </div>

                <div class="project-tags">
                    <span class="tag">UX/UI</span>
                    <span class="tag">Motion</span>
                </div>
                </div>

            </div>
        </a>              
`;

            document.getElementById("ohk-projects").innerHTML += projects_html;
        };
    };
    </script>
    </div>

</body>

</html>