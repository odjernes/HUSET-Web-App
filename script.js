let template = document.querySelector("#eventsTemplate").content;
let page = 1;
let lookingForData = false;


function fetchStardustEvents() {
    let urlParams = new URLSearchParams(window.location.search);

    let catId = urlParams.get("category");
    let endpoint = "http://odjernes.dk/kea/2semester/wordpressintroduction/wp-json/wp/v2/stardust_events?_embed&per_page=8&page="+page

    if (catId) {
        endpoint = "http://odjernes.dk/kea/2semester/wordpressintroduction/wp-json/wp/v2/stardust_events?_embed&per_page=8&page=" +page+ "&categories="+catId
    }

    fetch(endpoint)
        .then(e => e.json())
        .then(showEvents)
}



function showEvents(data) {
    console.log(page);
    console.log(data);
    data.forEach(showSingleEvent)
}


function showSingleEvent(anEvent) {
    console.log(anEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url);

    let clone = template.cloneNode(true);


    clone.querySelector("img").setAttribute("src", anEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url)

    //clone.querySelector(".price span").textContent = anEvent.acf.price;

    clone.querySelector(".date").textContent = anEvent.acf.date_;

    clone.querySelector("h2").textContent = anEvent.title.rendered;

    clone.querySelector('a.readMore').href = "subpage.html?id=" + anEvent.id;

    let eventList = document.querySelector("#eventList");

    eventList.appendChild(clone);

}


fetchStardustEvents();


//load more images

setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    page++;
    fetchStardustEvents();
  }
}, 1000)

function bottomVisible() {
  const scrollY = Math.round(window.scrollY)
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}
