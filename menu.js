fetch("http://odjernes.dk/kea/2semester/wordpressintroduction/wp-json/wp/v2/categories").then(e => e.json()).then(buildMenu)

let urlParams = new URLSearchParams(window.location.search);
let catId = urlParams.get("category");


function buildMenu(data) {
    let parentElem = document.querySelector(".catMenu ul");

    data.forEach(item => {
        console.log(item);
        if (item.count > 0) {
            let li = document.createElement("li");

            let a = document.createElement("a");
            a.textContent = item.name;
            a.href = "index.html?category=" + item.id;

            li.appendChild(a);
            parentElem.appendChild(li);

            if(item.id == catId){
                li.style.background = "lightgrey";
                li.style.border = "2px", "lightgrey";
            }
        }

    })

    if(catId == 6){
        console.log("only category six");

        //var x = document.getElementByClassName("catMenu");
        //x[0].style.background="red";
        //document.querySelectorAll("li").classList.add("highlight");
        //document.querySelectorAll("a[href='index.html?category=6']").classList.add("highlight");

    }
    else if(catId == 22){
        console.log("only category tweentytwo")
    }
    else if(catId == 21){
        console.log("only category tweentyone")
    }

}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello");
    //var x = document.getElementsByTagName("li");
    //x[0].style.background = "red";

})
