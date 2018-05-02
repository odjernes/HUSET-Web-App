console.log("I'm subscript");

let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);

fetch("http://odjernes.dk/kea/2semester/wordpressintroduction/wp-json/wp/v2/stardust_events/" + id + "?_embed").then(e => e.json()).then(showSinglePost);


function showSinglePost(aPost) {
    console.log(aPost);

    document.querySelector(".subTitle").innerHTML = aPost.title.rendered;
    document.querySelector(".subPageImg").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url)

    document.querySelector(".price span").textContent = aPost.acf.price;
    document.querySelector(".time").textContent = aPost.acf.time;
    document.querySelector(".descript").innerHTML = aPost.content.rendered;

    if (aPost.acf.artists) {
        document.querySelector(".artists span").textContent = aPost.acf.artists;
    } else {
        document.querySelector(".artists").remove();
    }

    if (aPost.acf.host) {
        document.querySelector(".host a").href = aPost.acf.host;
        document.querySelector(".host a").textContent = aPost.acf.host;
    } else {
        document.querySelector(".host").remove();
    }


}
