
    // insert project name    

    let project_name = projects['Bouvetgrandprix'].name.toString();

    document.getElementById("project-name").innerHTML = project_name;


    // insert project tafs

    const project_tags = projects['Bouvetgrandprix'].tags.map((tags, index) => {
        return `
        <span class="tag tag--gradient-bg">${tags}</span>
            `;
    }).join('');

    document.getElementById("project-tags").innerHTML = project_tags;



    // inset lead text

    let project_lead = projects['Bouvetgrandprix'].lead.toString();

    document.getElementById("project-lead").innerHTML = project_lead;






    // insert films

    let filmtitle = projects['Bouvetgrandprix'].filmone.title.toString();
    let filmurl = projects['Bouvetgrandprix'].filmone.filmurl.toString();

    let filmone = `<h3 class="title title--small center-text space-s">${filmtitle}</h3>
        <iframe src="${filmurl}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>`;

    document.getElementById("project-filmone").innerHTML = filmone;




    // insert two colum images
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



    // insert body text 1
    let bodytextone = projects['Bouvetgrandprix'].bodytextone.toString();

    document.getElementById("body-text-one").innerHTML = bodytextone;
 
    // insert body text 2
    let bodytexttwo = projects['Bouvetgrandprix'].bodytexttwo.toString();

    document.getElementById("body-text-two").innerHTML = bodytexttwo;
  



// insert images one colum portrait
    const imgonecolumnportraitimgurl = projects['Bouvetgrandprix'].imgportrait[1].imgurl.toString();
    const imgonecolumnportraittext = projects['Bouvetgrandprix'].imgportrait[1].text.toString();
    const imgonecolumnportraitalt = projects['Bouvetgrandprix'].imgportrait[1].alt.toString();

    const imgonecolportrait = projects['Bouvetgrandprix'].imgportrait.text.map((imgportrait, index) => {

        return `
        <img class="img-fit-original" src="/img/bouvetgrandprix/${imgurl}" alt="${alt}" />
        
            `;
    }).join('');

    document.getElementById("imgonecolportrait").innerHTML = imgonecolportrait;



    // insert team members
    const project_team = projects['Bouvetgrandprix'].team.map((team, index) => {
        return `
        <span class="member body body--small">${team}</span>
            `;
    }).join('');

    document.getElementById("project-team").innerHTML = project_team;
