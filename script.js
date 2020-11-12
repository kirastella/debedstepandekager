let personer = document.getElementById("personer");
let personer2 = document.getElementById("personer2");
let personer3 = document.getElementById("personer3");

personer.addEventListener("change", function(){
   let ul = document.querySelector(".ingredienser");
   if (personer.value == 2){
       ul.innerHTML=`
       <li>1 æg</li>
       <li>200g hvedemel</li>
       <li>2 spsk sukker</li>
       <li>1tsk vaniljesukker</li>
       <li>2.5dl mælk</li>
       `
   }
   else if(personer.value == 4){
    ul.innerHTML=`
    <li>2 æg</li>
    <li>400g hvedemel</li>
    <li>4 spsk sukker</li>
    <li>2tsk vaniljesukker</li>
    <li>3.5dl mælk</li>
    `
   }
   else{
    ul.innerHTML=`
    <li>3 æg</li>
    <li>500g hvedemel</li>
    <li>6 spsk sukker</li>
    <li>3tsk vaniljesukker</li>
    <li>5.5dl mælk</li>
    `
   }
});
personer2.addEventListener("change", function(){
    let ul = document.querySelector(".ingredienser2");
    if (personer2.value == 2){
        ul.innerHTML=`
        <li>1 æg</li>
        <li>200g hvedemel</li>
        <li>2 spsk sukker</li>
        <li>1tsk vaniljesukker</li>
        <li>2.5dl mælk</li>
        <li>0.5 tsk bagepulver</li>
        `
    }
    else if(personer.value == 4){
     ul.innerHTML=`
     <li>2 æg</li>
     <li>400g hvedemel</li>
     <li>4 spsk sukker</li>
     <li>2tsk vaniljesukker</li>
     <li>3.5dl mælk</li>
     <li>1.5 tsk bagepulver</li>
     `
    }
    else{
     ul.innerHTML=`
     <li>3 æg</li>
     <li>500g hvedemel</li>
     <li>6 spsk sukker</li>
     <li>3tsk vaniljesukker</li>
     <li>5.5dl mælk</li>
     <li>2.5 tsk bagepulver</li>
     `
    }
 });
 personer3.addEventListener("change", function(){
    let ul = document.querySelector(".ingredienser3");
    if (personer3.value == 2){
        ul.innerHTML=`
        <li>2 æg</li>
        <li>250g hvedemel</li>
        <li>1/2 dl olivenolie</li>
        <li>1tsk salt</li>
        <li>2.5dl mælk</li>
        `
    }
    else if(personer.value == 4){
     ul.innerHTML=`
     <li>2 æg</li>
     <li>450g hvedemel</li>
     <li>1 dl olivenolie</li>
     <li>2tsk salt</li>
     <li>4.5dl mælk</li>
     `
    }
    else{
     ul.innerHTML=`
     <li>3 æg</li>
     <li>650g hvedemel</li>
     <li>1 dl olivenolie</li>
     <li>3tsk salt</li>
     <li>6.5dl mælk</li>
     `
    }
 });
      