const burger = document.getElementById("burger-menu");
const links = document.getElementById("link-list");
burger.addEventListener("click", function() {

    
    if(burger.className == "burger") {
        burger.className += "-click";
        links.className +="-click";
    }

    else {
        burger.className = "burger";
        links.className = "links";
    }
});


