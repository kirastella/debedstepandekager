/*Angiv et classname på det element du vil have menuen i (husk punktum foran)*/
let dmClass = ".main-menu";
/*Angiv* menu-titel og url*/
let dmPages = [
    ["De Bedste Pandekager", "index.html"],
    ["Amerikanse Pandekager", "index.html"],
    ["Crepés", "index.html"],
    ["Om & Kontakt", "om.html"],
];
let dmParent = document.querySelector(dmClass);

if(dmParent != null){
    //console.log("Elementet eksisterer");
    dmGenerateMenu ();
}
else{
    alert("Fejl! menuen eksiterer ikke");
};

function dmGenerateMenu(){
    let dmHTML = `<ul class="main-menu">`;
    let dmUrl = window.location.pathname;
    let dmFileName = dmUrl.substring(dmUrl.lastIndexOf("/")+1);

    dmPages.forEach(function(element){
        let dmLinkClass = "";
        if(dmFileName == element[1]){
            dmLinkClass = "selected";
        }
        dmHTML += `           
            <li class="menu-items">
                <a href="${element[1]}" class="${menu-item}">${element[0]}</a>
            </li>
        `;
    });
    dmHTML += `</ul>`;

    dmParent.innerHTML = dmHTML;
}
