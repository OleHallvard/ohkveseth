let project_name=projects[projectname].name.toString();document.getElementById("project-name").innerHTML=project_name;const project_tags=projects[projectname].tags.map(((t,e)=>`\n        <span class="tag tag--large tag--gradient-bg">${t}</span>\n            `)).join("");document.getElementById("project-tags").innerHTML=project_tags;let project_lead=projects[projectname]?.lead.toString();document.getElementById("project-lead").innerHTML=project_lead;let imgonecollargeimgurl=projects[projectname].imgonecollarge?.imgurl.toString(),imgonecollargetext=projects[projectname].imgonecollarge?.text.toString(),imgonecollargealt=projects[projectname].imgonecollarge?.alt.toString(),projecturl=projects[projectname].url?.toString();if(void 0!==imgonecollargeimgurl){let t=`<div class="one-col one-col--large one-col-content space-site">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />\n            <div class="img-description body body--x-small">${imgonecollargetext}</div>\n            </div>\n        `;document.getElementById("project-items").innerHTML+=t}const filmurl=projects[projectname].film?.map((t=>t.url.toString())),filmtitle=projects[projectname].film?.map((t=>t.title.toString()));if(void 0!==filmurl){const t=projects[projectname].film?.map(((t,e)=>`<h3 class="title title--small center-text space-s">${t.title}</h3>\n        <div class="video-wrapper space-xl">\n        <iframe src="${t.url}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe></div>`)).join(""),e=`<div class="project-container">\n        <div class="film-container" id="project-film">${t}</div>\n    </div>`;document.getElementById("project-items").innerHTML+=e}let imgtwocolumnimgoneimgurl=projects[projectname].imgtwocolumn?.imgone.imgurl.toString(),imgtwocolumnimgonealt=projects[projectname].imgtwocolumn?.imgone.alt.toString(),imgtwocolumnimgtwoimgurl=projects[projectname].imgtwocolumn?.imgtwo.imgurl.toString(),imgtwocolumnimgtwoalt=projects[projectname].imgtwocolumn?.imgtwo.alt.toString();if(void 0!==imgtwocolumnimgoneimgurl){let t=`<div class="two-col space-site">\n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />\n        </div>\n        \n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />\n        </div></div>`;document.getElementById("project-items").innerHTML+=t}let bodytextone=projects[projectname]?.bodytextone?.toString();if(void 0!==bodytextone){const t=`<p id="body-text-one" class="project-body body space-site">${bodytextone}</p>`;document.getElementById("project-items").innerHTML+=t}const onecolmediumurl=projects[projectname].imgonecolmedium?.map((t=>t.url.toString())),onecolmediumtitle=projects[projectname].imgonecolmedium?.map((t=>t.title.toString())),onecolmediumalt=projects[projectname].imgonecolmedium?.map((t=>t.alt.toString())),onecolmediumtext=projects[projectname].imgonecolmedium?.map((t=>t.text.toString())),project_url=projects[projectname]?.url.toString();if(void 0!==onecolmediumurl){const t=projects[projectname].imgonecolmedium.map(((t,e)=>` <div class="one-col one-col--medium space-site"><h3 class="title title--small center-text space-s">${t.title}</h3>\n        <div class="one-col-content">\n            <img class="img-fit-cover" src="/img/${project_url}/${t.url}" alt="${t.alt}" />\n        </div>\n        <div class="img-description body body--x-small">${t.text}</div></div>`)).join("");document.getElementById("project-items").innerHTML+=t}let bodytexttwo=projects[projectname]?.bodytexttwo?.toString();if(void 0!==bodytexttwo){let t=`<p id="body-text-two" class="project-body body space-site">${bodytexttwo}</p>`;document.getElementById("project-items").innerHTML+=t}const imgonecolumnportraitimgurl=projects[projectname].imgportrait?.map((t=>t.imgurl.toString())),imgonecolumnportraittext=projects[projectname].imgportrait?.map((t=>t.text.toString())),imgonecolumnportraitalt=projects[projectname].imgportrait?.map((t=>t.alt.toString()));if(void 0!==imgonecolumnportraitimgurl){const t=`<div class="one-col one-col--portrait space-site">\n        <div id="imgonecolportrait">${projects[projectname].imgportrait.map(((t,e)=>`\n        <img class="img-fit-original space-xl" src="/img/${projecturl}/${t.imgurl}" alt="${t.alt}" /><div class="img-description body body--x-small">${t.text}</div>\n        \n            `)).join("")}</div>\n    </div>`;document.getElementById("project-items").innerHTML+=t}const ismultipleteammember=projects[projectname].team;if(ismultipleteammember!==["singel"]){const t=`\n<div class="team">\n        <h4 class="title title--small center-text">Team</h4>\n        <div id="project-team">${projects[projectname].team.map(((t,e)=>`\n        <span class="member body body--x-small">${t}</span>\n            `)).join("")}</div>\n    </div>\n`;document.getElementById("project-items").innerHTML+=t}const numberofprojects=Object.keys(projects).length;var numberoflinks=4;const otherHTML=[];let otherProjectLinks;for(var i=0;i<numberoflinks;i++){let t=Math.random()*(numberofprojects-10+1)<<0,e=Object.keys(projects)[t];console.log(e);let o=projects[e].name.toString();let i=`\n\n    <a href="/prosjekter/${projects[e].url.toString()}.php" class="other-link">\n        <div class="other-items">\n            <div class="other-name">${o}</div>\n            <div class="tags-wrapper">\n            ${projects[e].tags.map(((t,e)=>`\n        <div class="tag tag--large tag--gradient-bg">${t}</div>\n            `)).join("")}\n            </div>\n        </div>\n    </a>`;otherHTML.push(i)}let htmloutput=otherHTML.join("");const otherProjectsToWatch=`\n    <div class="other-projects space-site">\n        <h4 class="title title--x-small center-text space-l">Se også</h4>\n        ${htmloutput}\n    </div>\n\n    `;document.getElementById("project-items").innerHTML+=otherProjectsToWatch;