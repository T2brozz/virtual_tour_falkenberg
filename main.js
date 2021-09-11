window.onload = function () {
    // to adjust  the cords for the image map after resizing the window
    $(".pnlm-load-button >p").innerHTML = "Rundgang <br> beginnen"

    window.addEventListener('resize', function () {
        imageMapResize();
    });
    $.fn.maphilight.defaults = {
        fill: true,
        fillColor: '000000',
        fillOpacity: 0.3,
        stroke: false,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: false
    }
}

function createCustomHotspot(hotSpotDiv, args) {
    let type = args[1];
    hotSpotDiv.classList.add('custom-tooltip');
    const imageDiv = document.createElement('img');
    imageDiv.setAttribute("width", 25);
    imageDiv.setAttribute("height", 25);
    if (type === "pic") {
        imageDiv.setAttribute("src", "pictures/icons/image.png")
    } else if (type === "vid") {
        imageDiv.setAttribute("src", "pictures/icons/video.png")
    }
    hotSpotDiv.appendChild(imageDiv);
}

let lightbox;
function openGallery(div, args) {
    lightbox = new GLightbox({
        elements: tourConfig.getConfig()["scenes"][tourConfig.getScene()]["hotSpots"][args]["gallery"]
    });
    lightbox.on('close', (_) => {
        lightbox.destroy()
        console.log(lightbox)
    });
    lightbox.open();
}

function createMap(slide, name) {
    let mapConfig = slide["slideConfig"]["map"]
    if (mapConfig !== undefined) {
        let mapName = name + String(slide["index"])
        let map = document.createElement("map")
        map.setAttribute("name", mapName)

        slide["slide"].querySelector(".gslide-media").appendChild(map)
        slide["slide"].querySelector(".gslide-media >img").setAttribute("usemap", "#" + mapName)
        slide["slide"].querySelector(".gslide-media >img").setAttribute("class", "map")

        for (let i = 0; i < mapConfig.length; i++) {
            let area = document.createElement("area")
            area.setAttribute("shape", mapConfig[i]["shape"])
            area.setAttribute("coords", mapConfig[i]["cords"])
            area.setAttribute("onclick", mapConfig[i]["customFunc"])
            area.setAttribute("title", "myId")
            map.appendChild(area)
        }
    }
}

function getBase64Image(imageSrc, coords, _callback) {
    // Create an empty canvas element
    let canvas = document.createElement("canvas");
    let img = new Image();
    img.src = imageSrc;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        //Image manipulation
        let markerPic = new Image();
        markerPic.src = "pictures/icons/here_i_am.png";
        markerPic.onload = function () {
            ctx.drawImage(markerPic, coords.x, coords.y);
            let imageBase64 = canvas.toDataURL("image/png");
            _callback(imageBase64);
        }
    }
}


function openMap(div, args) {
    let mapElements = tourConfig.getConfig()["default"]["map"]
    let floor = tourConfig.getConfig()["scenes"][tourConfig.getScene()]["floor"]
    let coords = tourConfig.getConfig()["scenes"][tourConfig.getScene()]["mapCoords"]
    getBase64Image(mapElements[floor]["href"], coords, function (manipulatedImage) {
        mapElements[floor]["href"] = manipulatedImage;
        lightbox = new GLightbox({
            zoomable: false,
            draggable: false,
            touchNavigation: false,
            keyboardNavigation: false,
            elements: tourConfig.getConfig()["default"]["map"]
        });
        lightbox.on('close', (_) => {
            lightbox.destroy()
        });
        lightbox.on("open", () => {
            $(".gnext").remove()
            $(".gprev").remove()
        })
        lightbox.on('slide_after_load', (slide) => {
            createMap(slide, "lightbox");
            $('.map').maphilight();
            imageMapResize()
            //$( ".gslide-media > map:nth-child(2) > area:nth-child(1)" ).tooltip({ show: { effect: "blind", duration: 800 } });
        });
        lightbox.openAt(floor);
    })
}
