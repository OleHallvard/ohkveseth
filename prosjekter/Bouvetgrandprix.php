<!DOCTYPE html>

<html>

<head>
    <title>Ole Hallvard</title>

    <meta charset="UTF-8">


    <link rel="stylesheet" href="../css/project.css">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <link rel="shortcut icon" type="image/png" href="/img/bouvet-mal/bouvet-facicon.png">

    <meta name="viewport" content="width=device-width">

    <script src="/prosjekter/projects.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
</head>



<body>








    <div class="project-hero">
        <h1 class="title title--hero">Statnett</h1>
        <div class="project-tags">
            <span class="tag tag--gradient-bg">${tags}</span>
            <span class="tag tag--gradient-bg">${tags}</span>
            <span class="tag tag--gradient-bg">${tags}</span>
        </div>
    </div>

    <p class="project-lead lead">Det gjelder å utnytte de muligheter som byr seg, og vi valgte derfor også å kombinere
        ”flyttemeldingen” med
        en leken invitasjon til den aller første kundefesten i våre nye lokaler. I praksis betydde dette en e-post
        med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et
        egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok
        på high score-listen vanket det også premie på festen som beste sjåfør. Se hvor raskt du selv kan kjøre til
        kontoret vårt!</p>

    <div class="one-col one-col--large">
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
        <div class="img-description body body--small">Bilde tatt fra arrangement</div>
    </div>

    <div class=" two-col">
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
    </div>

    <p class="project-body body">Det gjelder å utnytte de muligheter som byr seg, og vi valgte derfor også å
        kombinere
        ”flyttemeldingen” med
        en leken invitasjon til den aller første kundefesten i våre nye lokaler. I praksis betydde dette en e-post
        med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et
        egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok
        på high score-listen vanket det også premie på festen som beste sjåfør. Se hvor raskt du selv kan kjøre til
        kontoret vårt!</p>

    <div class="one-col one-col--medium">
        <h3 class="title title--small center-text space-s">Overskrift</h3>
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
        <div class="img-description body body--small">Bilde tatt fra arrangement</div>
    </div>




    <p class="project-body body">Det gjelder å utnytte de muligheter som byr seg, og vi valgte derfor også å
        kombinere
        ”flyttemeldingen” med
        en leken invitasjon til den aller første kundefesten i våre nye lokaler. I praksis betydde dette en e-post
        med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et
        egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok
        på high score-listen vanket det også premie på festen som beste sjåfør. Se hvor raskt du selv kan kjøre til
        kontoret vårPortrait</p>

    <div class="one-col one-col--portrait">
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
    </div>

    <div class="team">

        <h4 class="title title--medium center-text">Team</h4>
        <span class="member body body--small">Frode Kolstad // Grafisk designer</span>
        <span class="member body body--small">Marc Garcia // UX designer</span>
    </div>
    <div id="ohk-projects" class="project-container"></div>

    <script>
    for (let project in projects) {

        let tags =
            projects[project].tags.map((tags, index) => {
                return `
            <span class="tag">${tags}</span>
    `;
            }).join('');



        if (projects[project].frontpage === true) {

            let projects_html = `

            <a href="/prosjekter/${projects[project].url}" class="project" style="background: ${projects[project].color};">
                
            <div class="project-screen project-screen--${projects[project].aspect}" style="background: style="background: ${projects[project].color};">
                <div class="project-screen-content project-screen-content--${projects[project].aspect}">
                    <div class="gloss gloss--${projects[project].aspect}"></div>
                   <img class="thumb thumb--${projects[project].alignimg}" src="../img/${projects[project].url}/${projects[project].thumbimg}" alt="${projects[project].shorttile}"/>
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-padding">
                <div class="projects-facts" style="color: ${projects[project].textcolor};">
                    <h4 class="project-client">${projects[project].name}</h4>
                    <h5 class="project-title">${projects[project].shorttitle}</h5>
                </div>

                <div class="project-tags">
                ${tags}
                </div>
                </div>

            </div>
        </a>              
`;

            document.getElementById("ohk-projects").innerHTML += projects_html;
        };
    };
    </script>





















    <!--  










    <div class="toppbilde-wrapper">

        <img id="toppbilde" src="/bouvet-referanser/img/grandprix/BGP_Toppbilde.jpg" alt="Grand Prix forsidebilde">


        <div class="vektor-container">

            <svg x="0" y="0" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="white">
                <path d="

     
       		M 
      		 0,0,
     		 27,13.5,
       		 100, 2
 
       		L 
       		100, 20 
       		0,20
      

      		  Z" />
            </svg>
        </div>


    </div>















    <div class="intro">


        <h1>Bouvet Grand Prix</h1>

        <h2>En fartsfylt festinvitasjon til våre nye lokaler. </h2>

    </div>








    </div>








    <div class="content-film-container">





        <div class="content-film-container">


            <div class="video-wrapper">
                <div class="video-container-breddeformat">
                  
                    <iframe src="https://player.vimeo.com/video/225247842" width="640" height="360" frameborder="0"
                        webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
            </div>


        </div>






        <p>Det gjelder å utnytte de muligheter som byr seg, og vi valgte derfor også å kombinere ”flyttemeldingen” med
            en leken invitasjon til den aller første kundefesten i våre nye lokaler. I praksis betydde dette en e-post
            med en festinvitasjon – og med en mulighet til å råkjøre veien fra våre gamle lokaler til de nye i et
            egenutviklet bilspill. Spillet var basert på basert på Google/MapBox veivisningstjeneste, og kom du høyt nok
            på high score-listen vanket det også premie på festen som beste sjåfør. Se hvor raskt du selv kan kjøre til
            kontoret vårt! <a href="http://grandprix.bouvet.no/">Spill her</a> eller skriv inn grandprix.bouvet.no.</p>
        




        <div class="wrap">

      
            <a class="knapp-filformater2"
                href="/bouvet-referanser/img/grandprix/Bouvet Grand Prix Case – 130717_Final_HQS.mp4" download> Last
                ned</a>

            <div class="beskrivelse">
                <h5>Casefilm Bouvet Grand Prix</h5>
            </div>

        </div>








    </div>




                    -->






</body>

</html>