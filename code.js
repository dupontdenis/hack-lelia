document.querySelector("button").addEventListener("click",
    (_) => document.querySelector("p").classList.add("top"),
    false);
document.querySelector("p").addEventListener("webkitTransitionEnd",
    function (e) {
        document.body.innerHTML = `<img src="https://photos.lci.fr/images/613/344/vador-1-680895-0@1x.jpeg" >`
    }
    , false);