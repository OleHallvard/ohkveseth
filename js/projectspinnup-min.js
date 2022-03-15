let project_name=projects[projectname].name.toString();document.getElementById("project-name").innerHTML=project_name;const project_tags=projects[projectname].tags.map(((e,t)=>`\n        <span class="tag tag--large tag--gradient-bg">${e}</span>\n            `)).join("");document.getElementById("project-tags").innerHTML=project_tags;let project_lead=projects[projectname]?.lead.toString();document.getElementById("project-lead").innerHTML=project_lead;let imgonecollargeimgurl=projects[projectname].imgonecollarge?.imgurl.toString(),imgonecollargetext=projects[projectname].imgonecollarge?.text.toString(),imgonecollargealt=projects[projectname].imgonecollarge?.alt.toString(),projecturl=projects[projectname].url?.toString();if(void 0!==imgonecollargeimgurl){let e=`<div class="one-col one-col--large one-col-content space-site">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />\n            <div class="img-description body body--x-small">${imgonecollargetext}</div>\n            </div>\n        `;document.getElementById("project-items").innerHTML+=e}const filmurl=projects[projectname].film?.map((e=>e.url.toString())),filmtitle=projects[projectname].film?.map((e=>e.title.toString()));if(void 0!==filmurl){const e=projects[projectname].film?.map(((e,t)=>`<h3 class="title title--small center-text space-s">${e.title}</h3>\n        <div class="video-wrapper space-xl">\n        <iframe src="${e.url}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe></div>`)).join(""),t=`<div class="project-container">\n        <div class="film-container" id="project-film">${e}</div>\n    </div>`;document.getElementById("project-items").innerHTML+=t}let imgtwocolumnimgoneimgurl=projects[projectname].imgtwocolumn?.imgone.imgurl.toString(),imgtwocolumnimgonealt=projects[projectname].imgtwocolumn?.imgone.alt.toString(),imgtwocolumnimgtwoimgurl=projects[projectname].imgtwocolumn?.imgtwo.imgurl.toString(),imgtwocolumnimgtwoalt=projects[projectname].imgtwocolumn?.imgtwo.alt.toString();if(void 0!==imgtwocolumnimgoneimgurl){let e=`<div class="two-col space-site">\n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />\n        </div>\n        \n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />\n        </div></div>`;document.getElementById("project-items").innerHTML+=e}let bodytextone=projects[projectname]?.bodytextone?.toString();if(void 0!==bodytextone){const e=`<p id="body-text-one" class="project-body body space-site">${bodytextone}</p>`;document.getElementById("project-items").innerHTML+=e}const onecolmediumurl=projects[projectname].imgonecolmedium?.map((e=>e.url.toString())),onecolmediumtitle=projects[projectname].imgonecolmedium?.map((e=>e.title.toString())),onecolmediumalt=projects[projectname].imgonecolmedium?.map((e=>e.alt.toString())),onecolmediumtext=projects[projectname].imgonecolmedium?.map((e=>e.text.toString())),project_url=projects[projectname]?.url.toString();if(void 0!==onecolmediumurl){const e=projects[projectname].imgonecolmedium.map(((e,t)=>` <div class="one-col one-col--medium space-site"><h3 class="title title--small center-text space-s">${e.title}</h3>\n        <div class="one-col-content">\n            <img class="img-fit-cover" src="/img/${project_url}/${e.url}" alt="${e.alt}" />\n        </div>\n        <div class="img-description body body--x-small">${e.text}</div></div>`)).join("");document.getElementById("project-items").innerHTML+=e}let bodytexttwo=projects[projectname]?.bodytexttwo?.toString();if(void 0!==bodytexttwo){let e=`<p id="body-text-two" class="project-body body space-site">${bodytexttwo}</p>`;document.getElementById("project-items").innerHTML+=e}const imgonecolumnportraitimgurl=projects[projectname].imgportrait?.map((e=>e.imgurl.toString())),imgonecolumnportraittext=projects[projectname].imgportrait?.map((e=>e.text.toString())),imgonecolumnportraitalt=projects[projectname].imgportrait?.map((e=>e.alt.toString()));if(void 0!==imgonecolumnportraitimgurl){const e=`<div class="one-col one-col--portrait space-site">\n        <div id="imgonecolportrait">${projects[projectname].imgportrait.map(((e,t)=>`\n        <img class="img-fit-original space-xl" src="/img/${projecturl}/${e.imgurl}" alt="${e.alt}" /><div class="img-description body body--x-small">${e.text}</div>\n        \n            `)).join("")}</div>\n    </div>`;document.getElementById("project-items").innerHTML+=e}const ismultipleteammember=projects[projectname].team;if(ismultipleteammember!==["singel"]){const e=`\n<div class="team">\n        <h4 class="title title--small center-text">Team</h4>\n        <div id="project-team">${projects[projectname].team.map(((e,t)=>`\n        <span class="member body body--x-small">${e}</span>\n            `)).join("")}</div>\n    </div>\n`;document.getElementById("project-items").innerHTML+=e}const numberofprojects=Object.keys(projects).length-1,otherHTML=[];let otherProjectLinks,randomtall,defireutvalgte=[],links=0,heading=!0;for(;links<5;){randomtall=Math.random()*(numberofprojects+1)<<0,!1===defireutvalgte.includes(randomtall)&&(defireutvalgte.push(randomtall),links++,4===links&&generateLinks())}function generateLinks(){defireutvalgte.forEach((e=>{let t=Object.keys(projects)[e];console.log(t);let o=projects[t].name.toString();let i=`\n\n<a href="/prosjekter/${projects[t].url.toString()}.php" class="other-link">\n  <div class="other-items">\n      <div class="other-name">${o}</div>\n      <div class="tags-wrapper">\n      ${projects[t].tags.map(((e,t)=>`\n  <div class="tag tag--small tag--gradient-bg">${e}</div>\n      `)).join("")}\n      </div>\n  </div>\n</a>`;otherHTML.push(i);let n=otherHTML.join("");!0===heading&&(heading=!1,document.getElementById("project-items").innerHTML+='\n    <div class="other-projects space-site">\n    <h4 class="title title--x-small center-text space-l">Andre prosjekter</h4>\n    <div id="project-items-links"></div>\n  </div>\n  ');const r=`${n}`;document.getElementById("project-items-links").innerHTML=r}))}