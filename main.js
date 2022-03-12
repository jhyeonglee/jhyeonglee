
let underline = document.getElementById("underline");
let menus = document.querySelectorAll("nav:first-child a");

let verticalUnderLine = document.getElementById("vertical_underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");


menus.forEach((menu)=>
    menu.addEventListener("click",(e)=>indicate(e))
);
verticalMenus.forEach((menu)=>
    menu.addEventListener("click",(e)=>verticalLine(e))
);



//
function indicate(e){
    console.log("!");
    underline.style.left = e.currentTarget.offsetLeft+"px";
    underline.style.width = e.currentTarget.offsetWidth+"px";
    underline.style.top = e.currentTarget.offsetTop + 
                            e.currentTarget.offsetHeight+"px";
}

function verticalLine(e){
    console.log("?");
    verticalUnderLine.style.left = e.currentTarget.offsetLeft+"px";
    verticalUnderLine.style.width = e.currentTarget.offsetWidth+"px";
    verticalUnderLine.style.top = e.currentTarget.offsetTop + 
                            e.currentTarget.offsetHeight+"px";
}