var floormap = new GLightbox({
    elements: [
        {
            'href': 'pictures/CloseUps/room34/2.jpg',
            'type': 'image',
            "zoomable": false,
            "map": [{
                shape: "rect",
                cords: "24,685,853,1496",
                customFunc: 'floormap.close();tourConfig.loadScene("floor01")'
            }]
        },
        {
            'href': 'pictures/CloseUps/room34/1.jpg',
            'type': 'image',
            "zoomable": false

        },
        {
            'href': 'pictures/CloseUps/room34/1.jpg',
            'type': 'image',
            "zoomable": false

        },
    ],
    draggable: false,

});


floormap.on("open", () => {
    document.querySelector(".gnext").remove()
    document.querySelector(".gprev").remove()
})
floormap.on('slide_after_load', (slide) => {
    imageMapResize()
    createMap(slide, "floormap");
    manipulateImage(slide)
});

