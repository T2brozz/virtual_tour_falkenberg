window.onload = function () {
    $(".pnlm-load-button >p").innerHTML = "Rundgang <br> beginnen"

    // to adjust  the cords for the image map after resizing the window
    window.addEventListener('resize', function () {
        imageMapResize();
    });
    //highlight image map settings
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
    //creates Video or Image Hotspot Type = "pic" or "vid"
    let type = args[1];
    hotSpotDiv.classList.add('custom-tooltip'); //set class
    const imageDiv = document.createElement('img'); //create element
    imageDiv.setAttribute("width", 45); //size of image
    imageDiv.setAttribute("height", 45);
    if (type === "pic") {
        imageDiv.setAttribute("src", "pictures/icons/image.png") //set path
    } else if (type === "vid") {
        imageDiv.setAttribute("src", "pictures/icons/video.png") //set path
    }
    hotSpotDiv.appendChild(imageDiv); //add to html
}

let lightbox;

function openGallery(div, args) {
    /*Open Normal Gallery*/
    lightbox = new GLightbox({
        //get gallery from config and set it as elements
        elements: tourConfig.getConfig()["scenes"][tourConfig.getScene()]["hotSpots"][args]["gallery"]
    });
    lightbox.on('close', (_) => {
        //on close destroy it
        lightbox.destroy()
    });
    lightbox.open();
}

function createImageMap(slide, name) {
    // add Image map to image and append to html
    let mapConfig = slide["slideConfig"]["map"]
    if (mapConfig !== undefined) {
        //set name and set it as att
        let mapName = name + String(slide["index"])
        let map = document.createElement("map")
        map.setAttribute("name", mapName)

        //set class and add map element
        slide["slide"].querySelector(".gslide-media").appendChild(map)
        slide["slide"].querySelector(".gslide-media >img").setAttribute("usemap", "#" + mapName)
        slide["slide"].querySelector(".gslide-media >img").setAttribute("class", "map")

        //create area element and append it to map element for each area element in config
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
    // manipulate image to show coordinates
    let canvas = document.createElement("canvas");
    let img = new Image();
    let offset = 48 // size of here i am icon
    img.src = imageSrc;
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        //console.log(canvas.height,canvas.width)
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        //Image manipulation
        let markerPic = new Image(); //image of current position
        markerPic.src = "pictures/icons/here_i_am.png";
        markerPic.onload = function () {
            ctx.drawImage(markerPic, coords.x - offset / 2, coords.y - offset);  //offset so that coords are on the tip of the icon
            let imageBase64 = canvas.toDataURL("image/png"); //convert to base64
            _callback(imageBase64); // return image
        }
    }
}

function openMap(div, args) {
    //opens the map and creates image map and show where you currently are
    let mapElements = JSON.parse(JSON.stringify(tourConfig.getConfig()["default"]["map"])); // get element from the config file and copy it to avoid copy by reference
    let floor = tourConfig.getConfig()["scenes"][tourConfig.getScene()]["floor"] // get current floor
    let coords = tourConfig.getConfig()["scenes"][tourConfig.getScene()]["mapCoords"] // get current position
    getBase64Image(mapElements[floor]["href"], coords, function (manipulatedImage) { //manipulate image to show coordinates
        mapElements[floor]["href"] = manipulatedImage;
        lightbox = new GLightbox({ //light box settings
            zoomable: false,
            draggable: false,
            touchNavigation: false,
            keyboardNavigation: false,
            elements: mapElements
        });
        lightbox.on('close', (_) => {
            lightbox.destroy() //on close destroy it
        });
        lightbox.on("open", () => {
            $(".gnext").remove() // remove next and previous button
            $(".gprev").remove()
        })
        lightbox.on('slide_after_load', (slide) => {
            // after slide load or on slide change
            // create image map
            createImageMap(slide, "lightbox");
            $('.map').maphilight(); // activate highlight
            imageMapResize(); //resize image map to size of screen
        });
        lightbox.openAt(floor); // open map
    })
}

function mapLoadScene(scene) {
    // load scene and close lightbox
    tourConfig.loadScene(scene);
    lightbox.close()
}
