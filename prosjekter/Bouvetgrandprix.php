<!DOCTYPE html>

<html>

<head>
    <title>Ole Hallvard</title>

    <meta charset="UTF-8">

    <link rel="stylesheet" href="../css/project.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <meta name="viewport" content="width=device-width">

    <script src="/prosjekter/projects.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
</head>



<body>

    <div class="project-hero">
        <h1 id="project-name" class="title title--hero"></h1>
        <div id="project-tags" class="project-tags">
        </div>
    </div>

    <script>
    let project_name = projects['Bouvetgrandprix'].name.toString();

    document.getElementById("project-name").innerHTML = project_name;



    const project_tags = projects['Bouvetgrandprix'].tags.map((tags, index) => {
        return `
        <span class="tag tag--gradient-bg">${tags}</span>
            `;
    }).join('');

    document.getElementById("project-tags").innerHTML = project_tags;
    </script>




    <p id="project-lead" class="project-lead lead"></p>

    <script>
    let project_lead = projects['Bouvetgrandprix'].lead.toString();

    document.getElementById("project-lead").innerHTML = project_lead;
    </script>






    <div id="project-filmone" class="project-film"></div>


    <script>
    let filmtitle = projects['Bouvetgrandprix'].filmone.title.toString();
    let filmurl = projects['Bouvetgrandprix'].filmone.filmurl.toString();

    let filmone = `<h3 class="title title--small center-text space-s">${filmtitle}</h3>
        <iframe src="${filmurl}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>`;

    document.getElementById("project-filmone").innerHTML = filmone;
    </script>





    <div id="one-col--large" class="one-col one-col--large"></div>

    <script>
    let imgonecollargeimgurl = projects['Bouvetgrandprix'].imgonecollarge.imgurl.toString();
    let imgonecollargetext = projects['Bouvetgrandprix'].imgonecollarge.text.toString();
    let imgonecollargealt = projects['Bouvetgrandprix'].imgonecollarge.alt.toString();

    let imgonecollarge = `<div class="one-col-content">
            <img class="img-fit-cover" src="${imgonecollargeimgurl}" alt="${imgonecollargealt}" />
        </div>
        <div class="img-description body body--small">${imgonecollargetext}</div>`;


    document.getElementById("one-col--large").innerHTML = imgonecollarge;
    </script>






    <div id="two-col" class="two-col"></div>


    <script>
    let imgtwocolumnimgoneimgurl = projects['Bouvetgrandprix'].imgtwocolumn.imgone.imgurl.toString();
    let imgtwocolumnimgonealt = projects['Bouvetgrandprix'].imgtwocolumn.imgone.alt.toString();

    let imgtwocolumnimgtwoimgurl = projects['Bouvetgrandprix'].imgtwocolumn.imgtwo.imgurl.toString();
    let imgtwocolumnimgtwoalt = projects['Bouvetgrandprix'].imgtwocolumn.imgtwo.alt.toString();

    let imgtwocolumn = `
        <div class="two-col-content">
            <img class="img-fit-cover" src="${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />
        </div>
        
        <div class="two-col-content">
            <img class="img-fit-cover" src="${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />
        </div>`;

    document.getElementById("two-col").innerHTML = imgtwocolumn;
    </script>








    <p id="body-text-one" class="project-body body"></p>

    <script>
    let bodytextone = projects['Bouvetgrandprix'].bodytextone.toString();

    document.getElementById("body-text-one").innerHTML = bodytextone;
    </script>

    <div class="one-col one-col--medium">
        <h3 class="title title--small center-text space-s">Overskrift</h3>
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/main/olehallvard-profilbilde.jpeg" alt="profilbilde" />
        </div>
        <div class="img-description body body--small">Bilde tatt fra arrangement</div>
    </div>




    <p id="body-text-two" class="project-body body"></p>

    <script>
    let bodytexttwo = projects['Bouvetgrandprix'].bodytexttwo.toString();

    document.getElementById("body-text-two").innerHTML = bodytexttwo;
    </script>








    <div class="one-col one-col--portrait">
        <div id="imgonecolportrait" class="">

        </div>

    </div>


    <script>
    const imgonecolportrait = projects['Bouvetgrandprix'].imgportrait.map((imgportrait, index) => {
        return `
        <img class="img-fit-original" src="${imgportrait}" alt="profilbilde" />
        
            `;
    }).join('');

    document.getElementById("imgonecolportrait").innerHTML = imgonecolportrait;
    </script>







    <div class="team">
        <h4 class="title title--medium center-text">Team</h4>
        <div id="project-team"></div>
    </div>

    <script>
    const project_team = projects['Bouvetgrandprix'].team.map((team, index) => {
        return `
        <span class="member body body--small">${team}</span>
            `;
    }).join('');

    document.getElementById("project-team").innerHTML = project_team;
    </script>



</body>

</html>