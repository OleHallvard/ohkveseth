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
        <div id="project-tags" class="project-tags"></div>
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



    <div id="project-film" class="project-film"></div>


    <script>
    const filmurl = projects['Bouvetgrandprix'].film.map((i) => i.url.toString());
    const filmtitle = projects['Bouvetgrandprix'].film.map((i) => i.title.toString());

    const film = projects['Bouvetgrandprix'].film.map((film, index) => {

        return `<h3 class="title title--small center-text space-s">${film.title}</h3>
        <iframe src="${film.url}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>`;
    }).join('');

    document.getElementById("project-film").innerHTML = film;
    </script>



    <div id="one-col--large" class="one-col one-col--large"></div>

    <script>
    let imgonecollargeimgurl = projects['Bouvetgrandprix'].imgonecollarge.imgurl.toString();
    let imgonecollargetext = projects['Bouvetgrandprix'].imgonecollarge.text.toString();
    let imgonecollargealt = projects['Bouvetgrandprix'].imgonecollarge.alt.toString();
    let projecturl = projects['Bouvetgrandprix'].url.toString();

    let imgonecollarge = `<div class="one-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />
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
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />
        </div>
        
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />
        </div>`;

    document.getElementById("two-col").innerHTML = imgtwocolumn;
    </script>




    <p id="body-text-one" class="project-body body"></p>

    <script>
    let bodytextone = projects['Bouvetgrandprix'].bodytextone.toString();

    document.getElementById("body-text-one").innerHTML = bodytextone;
    </script>



    <div id="one-col--medium" class="one-col one-col--medium"></div>



    <script>
    const onecolmediumurl = projects['Bouvetgrandprix'].imgonecolmedium.map((i) => i.url.toString());
    const onecolmediumtitle = projects['Bouvetgrandprix'].imgonecolmedium.map((i) => i.title.toString());
    const onecolmediumalt = projects['Bouvetgrandprix'].imgonecolmedium.map((i) => i.alt.toString());
    const onecolmediumtext = projects['Bouvetgrandprix'].imgonecolmedium.map((i) => i.text.toString());

    console.log(onecolmediumtitle);
    console.log(onecolmediumalt);

    const onecolmedium = projects['Bouvetgrandprix'].imgonecolmedium.map((imgonecolmedium, index) => {

        return ` <h3 class="title title--small center-text space-s">${imgonecolmedium.title}</h3>
        <div class="one-col-content">
            <img class="img-fit-cover" src="${imgonecolmedium.url}" alt="${imgonecolmedium.alt}" />
        </div>
        <div class="img-description body body--small">${imgonecolmedium.text}</div>`;
    }).join('');

    document.getElementById("one-col--medium").innerHTML = onecolmedium;
    </script>













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
    const imgonecolumnportraitimgurl = projects['Bouvetgrandprix'].imgportrait.map((i) => i.imgurl.toString());
    const imgonecolumnportraittext = projects['Bouvetgrandprix'].imgportrait.map((i) => i.text.toString());
    const imgonecolumnportraitalt = projects['Bouvetgrandprix'].imgportrait.map((i) => i.alt.toString());


    const imgonecolportrait = projects['Bouvetgrandprix'].imgportrait.map((imgportrait, index) => {

        return `
        <img class="img-fit-original" src="/img/bouvetgrandprix/${imgportrait.imgurl}" alt="${imgportrait.alt}" />
        
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