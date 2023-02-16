function keaClicked() {
    document.querySelector("#kea_sprite").classList.add("zoom-out");
}

function larbClicked() {
    document.querySelector("#larb_sprite").classList.add("larb-clicked");
}

document.querySelector("#kea_sprite").addEventListener("click", keaClicked);
document.querySelector("#larb_sprite").addEventListener("click", larbClicked);
// document.querySelector("#larb2_sprite").addEventListener("click", larbClicked);
// document.querySelector("#larb3_sprite").addEventListener("click", larbClicked);
// document.querySelector("#larb4_sprite").addEventListener("click", larbClicked);
