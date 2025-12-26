const gallery = [
    { src: "Marina beach.png ", caption: " Marina beach" },
    { src: "Defender.png", caption: "Defender " },
    { src: "Meenakshi Amman kovil.png", caption: "Meenakshi Amman kovil" },
    { src: " Sri rangam temple.png", caption: " Sri Rangam Temple" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}
