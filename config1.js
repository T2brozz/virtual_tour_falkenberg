let tourConfig = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "room22",
        "sceneFadeDuration": 1000,
        "autoLoad": false,
        "showFullscreenCtrl": false,
        "compass": false,
        "hfov": 120,
        "map": [
            {
                'href': '',
                'type': 'image',

                "map": [{
                    shape: "rect",
                    cords: "486,424,600,546",
                    customFunc: 'lightbox.close()'
                }]
            },
        ],

    },
    "scenes": {
        "room22": {
            "title": "Raum 22",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": -1,
            "horizonPitch": -2,
            "type": "equirectangular",
            "panorama": "pictures/Rooms/20210816_091218_491.jpg",
            "floor":0,
            "mapCoords":{x:390,y:500},
            "hotSpots": [
                {
                    "pitch": 3.2005919055407266,
                    "yaw": 45.93948172887542,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "floor12"
                },
                {
                    "pitch": -3.9638097091073696,
                    "yaw": -128.51598531357888,
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": createCustomHotspot,
                    "createTooltipArgs": ["", "pic"],
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            'href': 'pictures/CloseUps/room22/4.jpg',
                            'type': 'image',
                        },
                        {
                            'href': 'pictures/CloseUps/room22/4.jpg',
                            'type': 'image',
                        },
                    ]
                }, {
                    "pitch": 2.9638097091073696,
                    "yaw": -128.51598531357888,
                    "cssClass": "custom-hotspot",
                    "createTooltipFunc": createCustomHotspot,
                    "createTooltipArgs": ["", "vid"],
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            'href': 'pictures/CloseUps/room22/4.jpg',
                            'type': 'image',
                        },
                        {
                            'href': 'pictures/CloseUps/room22/4.jpg',
                            'type': 'image',
                        },
                    ]
                },{
                    "pitch": 7.9638097091073696,
                    "yaw": -128.51598531357888,
                    "type":"info"
                },

            ]
        },

    }
});


