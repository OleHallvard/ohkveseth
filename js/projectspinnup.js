// Legg inn prosjektnavnet som variabel nederst i htmln
//const projectname = 'insertprojectname';

// inserts project name
let project_name = projects[projectname].name.toString();

document.getElementById("project-name").innerHTML = project_name;

// inserts project tags
const project_tags = projects[projectname].tags
  .map((tags, index) => {
    return `
        <span class="tag tag--large tag--gradient-bg">${tags}</span>
            `;
  })
  .join("");

document.getElementById("project-tags").innerHTML = project_tags;

// inserts project lead text
let project_lead = projects[projectname]?.lead.toString();

document.getElementById("project-lead").innerHTML = project_lead;

// inserts large images

let imgonecollargeimgurl =
  projects[projectname].imgonecollarge?.imgurl.toString();
let imgonecollargetext = projects[projectname].imgonecollarge?.text.toString();
let imgonecollargealt = projects[projectname].imgonecollarge?.alt.toString();
let projecturl = projects[projectname].url?.toString();

if (imgonecollargeimgurl !== undefined) {
  let imgonecollarge = `<div class="one-col one-col--large one-col-content space-site">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />
            <div class="img-description body body--x-small">${imgonecollargetext}</div>
            </div>
        `;
  document.getElementById("project-items").innerHTML += imgonecollarge;
}

// inserts project films
const filmurl = projects[projectname].film?.map((i) => i.url.toString());
const filmtitle = projects[projectname].film?.map((i) => i.title.toString());

if (filmurl !== undefined) {
  const film = projects[projectname].film
    ?.map((film, index) => {
      return `<h3 class="title title--small center-text space-s">${film.title}</h3>
        <div class="video-wrapper space-xl">
        <iframe src="${film.url}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe></div>`;
    })
    .join("");

  const filmhtml = `<div class="project-container">
        <div class="film-container" id="project-film">${film}</div>
    </div>`;

  document.getElementById("project-items").innerHTML += filmhtml;
}

// inserts two column images
let imgtwocolumnimgoneimgurl =
  projects[projectname].imgtwocolumn?.imgone.imgurl.toString();
let imgtwocolumnimgonealt =
  projects[projectname].imgtwocolumn?.imgone.alt.toString();

let imgtwocolumnimgtwoimgurl =
  projects[projectname].imgtwocolumn?.imgtwo.imgurl.toString();
let imgtwocolumnimgtwoalt =
  projects[projectname].imgtwocolumn?.imgtwo.alt.toString();

if (imgtwocolumnimgoneimgurl !== undefined) {
  let imgtwocolumn = `<div class="two-col space-site">
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />
        </div>
        
        <div class="two-col-content">
            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />
        </div></div>`;

  document.getElementById("project-items").innerHTML += imgtwocolumn;
}

// inserts body text nr one
let bodytextone = projects[projectname]?.bodytextone?.toString();

if (bodytextone !== undefined) {
  const bodytextonehtml = `<p id="body-text-one" class="project-body body space-site">${bodytextone}</p>`;
  document.getElementById("project-items").innerHTML += bodytextonehtml;
}

// inserts medium size images
const onecolmediumurl = projects[projectname].imgonecolmedium?.map((i) =>
  i.url.toString()
);
const onecolmediumtitle = projects[projectname].imgonecolmedium?.map((i) =>
  i.title.toString()
);
const onecolmediumalt = projects[projectname].imgonecolmedium?.map((i) =>
  i.alt.toString()
);
const onecolmediumtext = projects[projectname].imgonecolmedium?.map((i) =>
  i.text.toString()
);
const project_url = projects[projectname]?.url.toString();

if (onecolmediumurl !== undefined) {
  const onecolmedium = projects[projectname].imgonecolmedium
    .map((imgonecolmedium, index) => {
      return ` <div class="one-col one-col--medium space-site"><h3 class="title title--small center-text space-s">${imgonecolmedium.title}</h3>
        <div class="one-col-content">
            <img class="img-fit-cover" src="/img/${project_url}/${imgonecolmedium.url}" alt="${imgonecolmedium.alt}" />
        </div>
        <div class="img-description body body--x-small">${imgonecolmedium.text}</div></div>`;
    })
    .join("");

  document.getElementById("project-items").innerHTML += onecolmedium;
}

// inserts body text two
let bodytexttwo = projects[projectname]?.bodytexttwo?.toString();

if (bodytexttwo !== undefined) {
  let bodytexttwohmtl = `<p id="body-text-two" class="project-body body space-site">${bodytexttwo}</p>`;

  document.getElementById("project-items").innerHTML += bodytexttwohmtl;
}

// inserts portaite mode images
const imgonecolumnportraitimgurl = projects[projectname].imgportrait?.map((i) =>
  i.imgurl.toString()
);
const imgonecolumnportraittext = projects[projectname].imgportrait?.map((i) =>
  i.text.toString()
);
const imgonecolumnportraitalt = projects[projectname].imgportrait?.map((i) =>
  i.alt.toString()
);

if (imgonecolumnportraitimgurl !== undefined) {
  const imgonecolportrait = projects[projectname].imgportrait
    .map((imgportrait, index) => {
      return `
        <img class="img-fit-original space-xl" src="/img/${projecturl}/${imgportrait.imgurl}" alt="${imgportrait.alt}" /><div class="img-description body body--x-small">${imgportrait.text}</div>
        
            `;
    })
    .join("");

  const imgonecolportraithtml = `<div class="one-col one-col--portrait space-site">
        <div id="imgonecolportrait">${imgonecolportrait}</div>
    </div>`;
  document.getElementById("project-items").innerHTML += imgonecolportraithtml;
}

// inserts project team
const ismultipleteammember = projects[projectname].team;

if (ismultipleteammember !== ["singel"]) {
  const project_team = projects[projectname].team
    .map((team, index) => {
      return `
        <span class="member body body--x-small">${team}</span>
            `;
    })
    .join("");

  const teammembershtml = `
<div class="team">
        <h4 class="title title--small center-text">Team</h4>
        <div id="project-team">${project_team}</div>
    </div>
`;
  document.getElementById("project-items").innerHTML += teammembershtml;
}

// inserts other links
const numberofprojects = Object.keys(projects).length - 1; // minus for pga starter på 0.

const otherHTML = [];
let otherProjectLinks;
let defireutvalgte = [];
let randomtall;
let links = 0;
let heading = true;

while (links < 5) {
  // Finner et tall
  randomtall = (Math.random() * (numberofprojects + 1)) << 0;

  let isitthere = defireutvalgte.includes(randomtall);

  //console.log("defireutvalgte:" + defireutvalgte);

  if (isitthere === false) {
    defireutvalgte.push(randomtall);
    links++;

    if (links === 4) {
      generateLinks();
    }
  }
}

function generateLinks() {
  defireutvalgte.forEach((element) => {
    let projectselected = Object.keys(projects)[element];

    console.log(projectselected);

    let project_name_other = projects[projectselected].name.toString();
    let project_url_other = projects[projectselected].url.toString();
    const project_tags_other = projects[projectselected].tags
      .map((tags, index) => {
        return `
  <div class="tag tag--small tag--gradient-bg">${tags}</div>
      `;
      })
      .join("");

    let otherProjectLinks = `

<a href="/prosjekter/${project_url_other}.php" class="other-link">
  <div class="other-items">
      <div class="other-name">${project_name_other}</div>
      <div class="tags-wrapper">
      ${project_tags_other}
      </div>
  </div>
</a>`;

    otherHTML.push(otherProjectLinks);

    let htmloutput = otherHTML.join(""); // for å fjerne komma

    const otherProjectsToWatch = `
    <div class="other-projects space-site">
    <h4 class="title title--x-small center-text space-l">Se også</h4>
    <div id="project-items-links"></div>
  </div>
  `;

    if (heading === true) {
      heading = false;
      document.getElementById("project-items").innerHTML +=
        otherProjectsToWatch;
    }

    const projectsLinks = `${htmloutput}`;

    document.getElementById("project-items-links").innerHTML = projectsLinks;
  });

  return;
}
