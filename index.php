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



    <div id="ohk-projects" class="project-container"></div>

    <script>
    for (let project in projects) {

        if (projects[project].frontpage === true) {

            let projects_html = `

            <a href="/prosjekter/${projects[project].url}" class="project">
                
            <div class="project-screen">
                <div class="project-screen-content">
                    <!--<img class="thumb" src="../img/${projects[project].url}/${projects[project].thumbimg}" alt="${projects[project].shorttile}"/>-->
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-padding">
                <div class="projects-facts">
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