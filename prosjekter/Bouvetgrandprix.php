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
</head>



<body>

    <div class="project-hero">
        <h1 id="project-name" class="title title--hero"></h1>
        <div id="project-tags" class="project-tags"></div>
    </div>

    <p id="project-lead" class="project-lead lead"></p>

    <div class="project-film">
        <div id="project-film"></div>
    </div>

    <div id="one-col--large" class="one-col one-col--large"></div>

    <div id="two-col" class="two-col"></div>

    <p id="body-text-one" class="project-body body"></p>

    <div id="one-col--medium" class="one-col one-col--medium"></div>

    <p id="body-text-two" class="project-body body"></p>

    <div class="one-col one-col--portrait">
        <div id="imgonecolportrait" class=""></div>
    </div>

    <div class="team">
        <h4 class="title title--medium center-text">Team</h4>
        <div id="project-team"></div>
    </div>

</body>









<script>
const projectname = 'Bouvetgrandprix';
console.log(projectname);

// inserts project name
let project_name = projects[projectname].name.toString();

document.getElementById("project-name").innerHTML = project_name;


// inserts project tags
const project_tags = projects[projectname].tags.map((tags, index) => {
    return `
        <span class="tag tag--gradient-bg">${tags}</span>
            `;
}).join('');

document.getElementById("project-tags").innerHTML = project_tags;



// inserts project lead text
let project_lead = projects[projectname].lead.toString();

document.getElementById("project-lead").innerHTML = project_lead;




// inserts project films
const filmurl = projects[projectname].film.map((i) => i.url.toString());
const filmtitle = projects[projectname].film.map((i) => i.title.toString());

const film = projects[projectname].film.map((film, index) => {

    return `<h3 class="title title--small center-text space-s">${film.title}</h3>
        <iframe src="${film.url}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>`;
}).join('');

document.getElementById("project-film").innerHTML = film;




// inserts large imgages
let imgonecollargeimgurl = projects[projectname].imgonecollarge.imgurl.toString();
let imgonecollargetext = projects[projectname].imgonecollarge.text.toString();
let imgonecollargealt = projects[projectname].imgonecollarge.alt.toString();
let projecturl = projects[projectname].url.toString();

let imgonecollarge = `<div class="one-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />
        </div>
        <div class="img-description body body--small">${imgonecollargetext}</div>`;


document.getElementById("one-col--large").innerHTML = imgonecollarge;




// inserts two column images
let imgtwocolumnimgoneimgurl = projects[projectname].imgtwocolumn.imgone.imgurl.toString();
let imgtwocolumnimgonealt = projects[projectname].imgtwocolumn.imgone.alt.toString();

let imgtwocolumnimgtwoimgurl = projects[projectname].imgtwocolumn.imgtwo.imgurl.toString();
let imgtwocolumnimgtwoalt = projects[projectname].imgtwocolumn.imgtwo.alt.toString();

let imgtwocolumn = `
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />
        </div>
        
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />
        </div>`;

document.getElementById("two-col").innerHTML = imgtwocolumn;




// inserts body text nr one
let bodytextone = projects[projectname].bodytextone.toString();

document.getElementById("body-text-one").innerHTML = bodytextone;



// inserts medium size images
const onecolmediumurl = projects[projectname].imgonecolmedium.map((i) => i.url.toString());
const onecolmediumtitle = projects[projectname].imgonecolmedium.map((i) => i.title.toString());
const onecolmediumalt = projects[projectname].imgonecolmedium.map((i) => i.alt.toString());
const onecolmediumtext = projects[projectname].imgonecolmedium.map((i) => i.text.toString());
const project_url = projects[projectname].url.toString();


const onecolmedium = projects[projectname].imgonecolmedium.map((imgonecolmedium, index) => {

    return ` <h3 class="title title--small center-text space-s">${imgonecolmedium.title}</h3>
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/${project_url}/${imgonecolmedium.url}" alt="${imgonecolmedium.alt}" />
        </div>
        <div class="img-description body body--small space-xl">${imgonecolmedium.text}</div>`;
}).join('');

document.getElementById("one-col--medium").innerHTML = onecolmedium;





// inserts body text two
let bodytexttwo = projects[projectname].bodytexttwo.toString();
document.getElementById("body-text-two").innerHTML = bodytexttwo;




// inserts portaite mode images
const imgonecolumnportraitimgurl = projects[projectname].imgportrait.map((i) => i.imgurl.toString());
const imgonecolumnportraittext = projects[projectname].imgportrait.map((i) => i.text.toString());
const imgonecolumnportraitalt = projects[projectname].imgportrait.map((i) => i.alt.toString());


const imgonecolportrait = projects[projectname].imgportrait.map((imgportrait, index) => {

    return `
        <img class="img-fit-original space-xl" src="/img/bouvetgrandprix/${imgportrait.imgurl}" alt="${imgportrait.alt}" />
        
            `;
}).join('');

document.getElementById("imgonecolportrait").innerHTML = imgonecolportrait;



// inserts project team
const project_team = projects[projectname].team.map((team, index) => {
    return `
        <span class="member body body--small">${team}</span>
            `;
}).join('');

document.getElementById("project-team").innerHTML = project_team;
</script>



</html>