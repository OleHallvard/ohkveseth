let project_name=projects.Bouvetgrandprix.name.toString();document.getElementById("project-name").innerHTML=project_name;const project_tags=projects.Bouvetgrandprix.tags.map(((t,o)=>`\n        <span class="tag tag--gradient-bg">${t}</span>\n            `)).join("");document.getElementById("project-tags").innerHTML=project_tags;let project_lead=projects.Bouvetgrandprix.lead.toString();document.getElementById("project-lead").innerHTML=project_lead;let filmtitle=projects.Bouvetgrandprix.filmone.title.toString(),filmurl=projects.Bouvetgrandprix.filmone.filmurl.toString(),filmone=`<h3 class="title title--small center-text space-s">${filmtitle}</h3>\n        <iframe src="${filmurl}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen\n            allowfullscreen></iframe>`;document.getElementById("project-filmone").innerHTML=filmone;let imgonecollargeimgurl=projects.Bouvetgrandprix.imgonecollarge.imgurl.toString(),imgonecollargetext=projects.Bouvetgrandprix.imgonecollarge.text.toString(),imgonecollargealt=projects.Bouvetgrandprix.imgonecollarge.alt.toString(),projecturl=projects.Bouvetgrandprix.url.toString(),imgonecollarge=`<div class="one-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgonecollargeimgurl}" alt="${imgonecollargealt}" />\n        </div>\n        <div class="img-description body body--small">${imgonecollargetext}</div>`;document.getElementById("one-col--large").innerHTML=imgonecollarge;let imgtwocolumnimgoneimgurl=projects.Bouvetgrandprix.imgtwocolumn.imgone.imgurl.toString(),imgtwocolumnimgonealt=projects.Bouvetgrandprix.imgtwocolumn.imgone.alt.toString(),imgtwocolumnimgtwoimgurl=projects.Bouvetgrandprix.imgtwocolumn.imgtwo.imgurl.toString(),imgtwocolumnimgtwoalt=projects.Bouvetgrandprix.imgtwocolumn.imgtwo.alt.toString(),imgtwocolumn=`\n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgoneimgurl}" alt="${imgtwocolumnimgonealt}" />\n        </div>\n        \n        <div class="two-col-content">\n            <img class="img-fit-cover" src="/img/${projecturl}/${imgtwocolumnimgtwoimgurl}" alt="${imgtwocolumnimgtwoalt}" />\n        </div>`;document.getElementById("two-col").innerHTML=imgtwocolumn;let bodytextone=projects.Bouvetgrandprix.bodytextone.toString();document.getElementById("body-text-one").innerHTML=bodytextone;let bodytexttwo=projects.Bouvetgrandprix.bodytexttwo.toString();document.getElementById("body-text-two").innerHTML=bodytexttwo;const imgonecolumnportraitimgurl=projects.Bouvetgrandprix.imgportrait[1].imgurl.toString(),imgonecolumnportraittext=projects.Bouvetgrandprix.imgportrait[1].text.toString(),imgonecolumnportraitalt=projects.Bouvetgrandprix.imgportrait[1].alt.toString(),imgonecolportrait=projects.Bouvetgrandprix.imgportrait.text.map(((t,o)=>`\n        <img class="img-fit-original" src="/img/bouvetgrandprix/${imgurl}" alt="${alt}" />\n        \n            `)).join("");document.getElementById("imgonecolportrait").innerHTML=imgonecolportrait;const project_team=projects.Bouvetgrandprix.team.map(((t,o)=>`\n        <span class="member body body--small">${t}</span>\n            `)).join("");document.getElementById("project-team").innerHTML=project_team;