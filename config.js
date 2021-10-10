let tourConfig = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "Floors/d_0",
        "sceneFadeDuration": 1000,
        "autoLoad": false,
        "showFullscreenCtrl": false,
        "compass": false,
        "basePath": "pictures/",
        "hfov": 120,
        "map": [
            {
                'href': 'pictures/Maps/Floor0.png',
                'type': 'image',

                "map": [
                    {
                        shape: "rect",
                        cords: "75,762,223,859",
                        customFunc: 'mapLoadScene("Rooms/wat")'
                    }, {
                        shape: "rect",
                        cords: "541,763,690,862",
                        customFunc: 'mapLoadScene("Rooms/kueche")'
                    }, {
                        shape: "rect",
                        cords: "947,768,1125,858",
                        customFunc: 'mapLoadScene("Rooms/014")'
                    }, {
                        shape: "poly",
                        cords: "415,711,413,544,320,542,320,575,248,576,245,715",
                        customFunc: 'mapLoadScene("Rooms/mensa")'
                    }, {
                        shape: "rect",
                        cords: "771,433,1135,599",
                        customFunc: 'mapLoadScene("Rooms/aula")'
                    }, {
                        shape: "rect",
                        cords: "324,440,410,538",
                        customFunc: 'mapLoadScene("Rooms/033")'
                    }, {
                        shape: "rect",
                        cords: "539,435,631,535",
                        customFunc: 'mapLoadScene("Rooms/035")'
                    }, {
                        shape: "rect",
                        cords: "538,321,634,426",
                        customFunc: 'mapLoadScene("Rooms/037")'
                    }, {
                        shape: "rect",
                        cords: "325,334,412,431",
                        customFunc: 'mapLoadScene("Rooms/036")'
                    }, {
                        shape: "rect",
                        cords: "537,192,634,315",
                        customFunc: 'mapLoadScene("Rooms/039")'
                    }, {
                        shape: "rect",
                        cords: "324,249,468,325",
                        customFunc: 'mapLoadScene("Rooms/038")'
                    }, {
                        shape: "poly",
                        cords: "768,496,766,645,984,645,984,600,1064,600,1064,717,1028,717,1027,763,541,762,168,762,169,719,411,718,417,374,469,373,468,188,533,192,534,545,641,542,643,496",
                        customFunc: 'mapLoadScene("Floor/f_0_1")'
                    }, {
                        shape: "rect",
                        cords: "64,370,182,426",
                        customFunc: 'lightbox.goToSlide(4)'
                    }, {
                        shape: "rect",
                        cords: "64,310,184,366",
                        customFunc: 'lightbox.goToSlide(0)'
                    }, {
                        shape: "rect",
                        cords: "64,252,184,306",
                        customFunc: 'lightbox.goToSlide(1)'
                    }, {
                        shape: "rect",
                        cords: "64,192,182,247",
                        customFunc: 'lightbox.goToSlide(2)'
                    }, {
                        shape: "rect",
                        cords: "64,131,184,188",
                        customFunc: 'lightbox.goToSlide(3)'
                    }, {
                        shape: "rect",
                        cords: "64,57,182,112",
                        customFunc: 'lightbox.goToSlide(5)'
                    },]
            },
            {
                'href': 'pictures/Maps/Floor1.png',
                'type': 'image',

                "map": [
                    {
                        shape: "rect",
                        cords: "951,823,1122,896",
                        customFunc: 'mapLoadScene("Rooms/114")'
                    }, {
                        shape: "rect",
                        cords: "455,477,558,600",
                        customFunc: 'mapLoadScene("Rooms/117")'
                    }, {
                        shape: "rect",
                        cords: "456,349,556,465",
                        customFunc: 'mapLoadScene("Rooms/118")'
                    }, {
                        shape: "rect",
                        cords: "455,216,557,342",
                        customFunc: 'mapLoadScene("Rooms/119")'
                    }, {
                        shape: "rect",
                        cords: "454,37,557,207",
                        customFunc: 'mapLoadScene("Rooms/120")'
                    }, {
                        shape: "rect",
                        cords: "234,348,339,467",
                        customFunc: 'mapLoadScene("Rooms/122")'
                    }, {
                        shape: "rect",
                        cords: "235,476,339,600",
                        customFunc: 'mapLoadScene("Rooms/121")'
                    }, {
                        shape: "poly",
                        cords: "152,754,451,753,450,714,495,715,496,752,776,753,775,716,1028,715,1026,755,993,755,991,818,153,813",
                        customFunc: 'mapLoadScene("Floors/f_1_1")'
                    }, {
                        shape: "poly",
                        cords: "342,123,449,125,448,750,342,749",
                        customFunc: 'mapLoadScene("Floors/f_1_4")'
                    },{
                        shape: "rect",
                        cords: "48,380,168,434",
                        customFunc: 'lightbox.goToSlide(4)'
                    }, {
                        shape: "rect",
                        cords: "48,318,168,375",
                        customFunc: 'lightbox.goToSlide(0)'
                    }, {
                        shape: "rect",
                        cords: "48,261,168,316",
                        customFunc: 'lightbox.goToSlide(1)'
                    }, {
                        shape: "rect",
                        cords: "48,202,168,256",
                        customFunc: 'lightbox.goToSlide(2)'
                    }, {
                        shape: "rect",
                        cords: "48,140,168,198",
                        customFunc: 'lightbox.goToSlide(3)'
                    }, {
                        shape: "rect",
                        cords: "48,66,168,122",
                        customFunc: 'lightbox.goToSlide(5)'
                    }
                ]
            },
            {
                'href': 'pictures/Maps/Floor2.png',
                'type': 'image',

                "map": [{
                    shape: "rect",
                    cords: "486,424,600,546",
                    customFunc: 'lightbox.close()'
                }]
            },
            {
                'href': 'pictures/Maps/Floor3.png',
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
        "Floors/d_0": {
            "title": "Floors/d_0",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -1.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_0.jpg",
            "hotSpots": [
                {
                    "pitch": -5.254496410296202,
                    "yaw": -176.52289476288365,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_1"
                }
            ]
        },
        "Floors/d_1": {
            "title": "Floors/d_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.2,
            "horizonPitch": -2.6,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_1.jpg",
            "hotSpots": []
        },
        "Floors/d_2": {
            "title": "Floors/d_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.4,
            "horizonPitch": -3.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_2.jpg",
            "hotSpots": []
        },
        "Floors/d_3": {
            "title": "Floors/d_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.4,
            "horizonPitch": -2,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_3.jpg",
            "hotSpots": []
        },
        "Floors/d_4": {
            "title": "Floors/d_4",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.6,
            "horizonPitch": -1.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_4.jpg",
            "hotSpots": []
        },
        "Floors/d_5": {
            "title": "Floors/d_5",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 3,
            "horizonPitch": -3,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_5.jpg",
            "hotSpots": []
        },
        "Floors/d_6": {
            "title": "Floors/d_6",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 3.2,
            "horizonPitch": -3.4,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_6.jpg",
            "hotSpots": []
        },
        "Floors/d_7": {
            "title": "Floors/d_7",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": -0.6,
            "horizonPitch": -2.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_7.jpg",
            "hotSpots": []
        },
        "Floors/d_8": {
            "title": "Floors/d_8",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -1.6,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_8.jpg",
            "hotSpots": []
        },
        "Floors/d_9": {
            "title": "Floors/d_9",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.4,
            "horizonPitch": -2.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/d_9.jpg",
            "hotSpots": []
        },
        "Floors/f_0_1": {
            "title": "Floors/f_0_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.2,
            "horizonPitch": -2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_1.jpg",
            "hotSpots": [
                {
                    "pitch": -3.5610375649919437,
                    "yaw": 7.623816098384168,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/d_0",
                    "div": {}
                },
                {
                    "pitch": -5.227215002276095,
                    "yaw": 88.93675817969006,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/aula",
                    "div": {}
                },
                {
                    "pitch": -5.580518297932096,
                    "yaw": 154.04013965492732,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_8",
                    "div": {}
                },
                {
                    "pitch": -6.573907252726893,
                    "yaw": -156.30876484789945,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_6",
                    "div": {}
                },
                {
                    "pitch": -9.185784814132953,
                    "yaw": -74.44039916938186,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_2",
                    "div": {}
                }
            ]
        },
        "Floors/f_0_2": {
            "title": "Floors/f_0_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 3,
            "horizonPitch": -3,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_2.jpg",
            "hotSpots": [
                {
                    "pitch": -5.791159915880498,
                    "yaw": 57.96801647212931,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_3"
                },
                {
                    "pitch": -11.879545087796021,
                    "yaw": -119.46652941498525,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_1"
                }
            ]
        },
        "Floors/f_0_3": {
            "title": "Floors/f_0_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -2.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_3.jpg",
            "hotSpots": [
                {
                    "pitch": -1.6430897767356518,
                    "yaw": -16.740100500025846,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4"
                },
                {
                    "pitch": -2.9157198325224343,
                    "yaw": -71.74161595217703,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/mensa"
                },
                {
                    "pitch": -4.513206298766035,
                    "yaw": 54.47956818106684,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_2"
                },
                {
                    "pitch": -5.203879330145532,
                    "yaw": 172.1425288097048,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0-5_1"
                }
            ]
        },
        "Floors/f_0_4": {
            "title": "Floors/f_0_4",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.8,
            "horizonPitch": -2.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_4.jpg",
            "hotSpots": [
                {
                    "pitch": -2.807814949798199,
                    "yaw": -171.6478012354196,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_3"
                },
                {
                    "pitch": -3.387401483677313,
                    "yaw": 10.573646687004725,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_5"
                },
                {
                    "pitch": -4.720563605399239,
                    "yaw": -35.651025261985865,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/036"
                },
                {
                    "pitch": -5.872649604909123,
                    "yaw": 136.40881043150398,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/035"
                },
                {
                    "pitch": -6.250775641529689,
                    "yaw": -112.01488140963477,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/033"
                },
                {
                    "pitch": -6.322195790533147,
                    "yaw": 34.996862918823126,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/037"
                }
            ]
        },
        "Floors/f_0_5": {
            "title": "Floors/f_0_5",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -1.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_5.jpg",
            "hotSpots": [
                {
                    "pitch": -1.0062115552144295,
                    "yaw": 56.86987199725081,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4"
                },
                {
                    "pitch": -5.504550513805963,
                    "yaw": -86.59434646545054,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/039"
                },
                {
                    "pitch": -7.736702932532714,
                    "yaw": -158.47428954125496,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/038"
                }
            ]
        },
        "Floors/f_0_6": {
            "title": "Floors/f_0_6",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -1.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_6.jpg",
            "hotSpots": [
                {
                    "pitch": -0.837008130294354,
                    "yaw": -1.4643715454835728,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_7"
                },
                {
                    "pitch": -2.0740474828779947,
                    "yaw": 84.807515248188,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_1"
                },
                {
                    "pitch": -2.6738322814001094,
                    "yaw": 179.93174961754255,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_10"
                },
                {
                    "pitch": -0.12504788073309037,
                    "yaw": -13.55141736592816,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/kueche"
                }
            ]
        },
        "Floors/f_0_7": {
            "title": "Floors/f_0_7",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -2.8,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_7.jpg",
            "hotSpots": [
                {
                    "pitch": -2.2637368884079376,
                    "yaw": -65.56641195408645,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_6"
                },
                {
                    "pitch": -3.8250252899058705,
                    "yaw": 101.47883017064976,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/wat"
                }
            ]
        },
        "Floors/f_0_8": {
            "title": "Floors/f_0_8",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0,
            "horizonPitch": -1.4,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_8.jpg",
            "hotSpots": [
                {
                    "pitch": -3.8151683704968953,
                    "yaw": 75.69514541380869,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_1"
                },
                {
                    "pitch": -4.306440726956694,
                    "yaw": -76.97901508960399,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_10"
                },
                {
                    "pitch": -6.795492324768283,
                    "yaw": -126.20063510837343,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_9"
                }
            ]
        },
        "Floors/f_0_9": {
            "title": "Floors/f_0_9",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.2,
            "horizonPitch": -3.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_9.jpg",
            "hotSpots": [
                {
                    "pitch": -5.734964716007951,
                    "yaw": 116.07302515683625,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/aula"
                },
                {
                    "pitch": -13.083902123092637,
                    "yaw": 22.63704362143835,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_8"
                }
            ]
        },
        "Floors/f_0_10": {
            "title": "Floors/f_0_10",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.8,
            "horizonPitch": -1.4,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0_10.jpg",
            "hotSpots": [
                {
                    "pitch": -2.4156179489098193,
                    "yaw": -74.38701172712206,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/014"
                },
                {
                    "pitch": -2.896716314423129,
                    "yaw": 87.34780563112122,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_6"
                },
                {
                    "pitch": -4.598922282377274,
                    "yaw": 145.73867078162374,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_8"
                }
            ]
        },
        "Floors/f_0-5_1": {
            "title": "Floors/f_0-5_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.2,
            "horizonPitch": -2.4,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_0-5_1.jpg",
            "hotSpots": [
                {
                    "pitch": 8.635641977548044,
                    "yaw": -66.35869488938852,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_1"
                },
                {
                    "pitch": -27.14360145901973,
                    "yaw": -95.16628571261441,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_3"
                }
            ]
        },
        "Floors/f_1_1": {
            "title": "Floors/f_1_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.2,
            "horizonPitch": -3.4,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1_1.jpg",
            "hotSpots": [
                {
                    "pitch": -3.6097707774957404,
                    "yaw": 32.479037842485695,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_2"
                },
                {
                    "pitch": 0.6686598837955868,
                    "yaw": -149.83394856604264,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_3"
                },
                {
                    "pitch": 0.07556564654502118,
                    "yaw": 117.29964391030478,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_4"
                },
                {
                    "pitch": -4.889737925303409,
                    "yaw": -57.089755461205016,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1-5_1"
                },
                {
                    "pitch": -26.649093358408397,
                    "yaw": -82.31900696146937,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0-5_1"
                }
            ]
        },
        "Floors/f_1_2": {
            "title": "Floors/f_1_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0,
            "horizonPitch": -2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1_2.jpg",
            "hotSpots": [
                {
                    "pitch": -2.4807423283907095,
                    "yaw": -177.86053145964456,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_1"
                }
            ]
        },
        "Floors/f_1_3": {
            "title": "Floors/f_1_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -3.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1_3.jpg",
            "hotSpots": [
                {
                    "pitch": 0.06271578764969599,
                    "yaw": -176.66551905243205,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_1"
                },
                {
                    "pitch": -3.6626569896507952,
                    "yaw": 13.349574242098583,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/114"
                }
            ]
        },
        "Floors/f_1_4": {
            "title": "Floors/f_1_4",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.6,
            "horizonPitch": -1.6,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1_4.jpg",
            "hotSpots": [
                {
                    "pitch": 1.9331073681969992,
                    "yaw": -118.97716066804435,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_1"
                },
                {
                    "pitch": -1.067332770971005,
                    "yaw": 60.80720225419748,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_5"
                },
                {
                    "pitch": -6.996473766890134,
                    "yaw": -174.12283435043992,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/117"
                },
                {
                    "pitch": -3.3177842284890673,
                    "yaw": 5.519910065178692,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/121"
                },
                {
                    "pitch": -3.525001264630215,
                    "yaw": 83.44283848691327,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/118"
                }
            ]
        },
        "Floors/f_1_5": {
            "title": "Floors/f_1_5",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.2,
            "horizonPitch": -1,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1_5.jpg",
            "hotSpots": [
                {
                    "pitch": -1.5273001617956605,
                    "yaw": -50.00723195398757,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_4"
                },
                {
                    "pitch": -2.9255480787305164,
                    "yaw": 140.29540186008023,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/120"
                },
                {
                    "pitch": -6.157853791336754,
                    "yaw": 156.67879826855454,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/119"
                },
                {
                    "pitch": -4.1831751336392085,
                    "yaw": 45.03465062379314,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/122"
                }
            ]
        },
        "Floors/f_1-5_1": {
            "title": "Floors/f_1-5_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -3.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_1-5_1.jpg",
            "hotSpots": [
                {
                    "pitch": -21.916355527654616,
                    "yaw": 174.57479193551205,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_1"
                },
                {
                    "pitch": 6.881100994490684,
                    "yaw": -165.63075448796081,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_1"
                }
            ]
        },
        "Floors/f_2_1": {
            "title": "Floors/f_2_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -1.4,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_2_1.jpg",
            "hotSpots": [
                {
                    "pitch": -25.207619966835566,
                    "yaw": -61.35858246784636,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1-5_1"
                },
                {
                    "pitch": -0.6983103643163311,
                    "yaw": 47.61322536371358,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_2"
                },
                {
                    "pitch": -2.6968146154547927,
                    "yaw": -134.64958533229265,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_3"
                },
                {
                    "pitch": -3.0441345405330162,
                    "yaw": -31.69252872233875,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2-5_1"
                }
            ]
        },
        "Floors/f_2_2": {
            "title": "Floors/f_2_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.4,
            "horizonPitch": -2.6,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_2_2.jpg",
            "hotSpots": [
                {
                    "pitch": -2.936777455076026,
                    "yaw": -178.27081363500054,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_1"
                }
            ]
        },
        "Floors/f_2_3": {
            "title": "Floors/f_2_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.4,
            "horizonPitch": -1.8,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_2_3.jpg",
            "hotSpots": [
                {
                    "pitch": -0.7890728751972038,
                    "yaw": -14.989204890195538,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_4"
                },
                {
                    "pitch": -2.5798611919018963,
                    "yaw": 177.29224418466345,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_1"
                },
                {
                    "pitch": -3.0301702397747463,
                    "yaw": 4.830239194686158,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/212"
                }
            ]
        },
        "Floors/f_2_4": {
            "title": "Floors/f_2_4",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -2.8,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_2_4.jpg",
            "hotSpots": [
                {
                    "pitch": -3.454462223561654,
                    "yaw": -80.66150677016714,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_3"
                }
            ]
        },
        "Floors/f_2-5_1": {
            "title": "Floors/f_2-5_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": -0.2,
            "horizonPitch": -1,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_2-5_1.jpg",
            "hotSpots": [
                {
                    "pitch": -24.18393328390414,
                    "yaw": 1.7243535801433154,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_1"
                },
                {
                    "pitch": 6.657395794094583,
                    "yaw": 24.916872886658666,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_1"
                }
            ]
        },
        "Floors/f_3_1": {
            "title": "Floors/f_3_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.8,
            "horizonPitch": -2.4,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_3_1.jpg",
            "hotSpots": [
                {
                    "pitch": -3.2550625604442196,
                    "yaw": -179.09591072414048,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_2"
                },
                {
                    "pitch": -25.96794273429211,
                    "yaw": 75.4710533933403,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2-5_1"
                },
                {
                    "pitch": -1.8379749868038733,
                    "yaw": 0.6198275389156152,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_3"
                }
            ]
        },
        "Floors/f_3_2": {
            "title": "Floors/f_3_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.6,
            "horizonPitch": -1.6,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_3_2.jpg",
            "hotSpots": [
                {
                    "pitch": -4.29634356716282,
                    "yaw": 160.8042788562982,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/303"
                },
                {
                    "pitch": -2.8948679972816524,
                    "yaw": 19.85013992002871,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/305"
                },
                {
                    "pitch": -1.217562728707691,
                    "yaw": -4.401727906553219,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_1"
                }
            ]
        },
        "Floors/f_3_3": {
            "title": "Floors/f_3_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -1.8,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Floors/f_3_3.jpg",
            "hotSpots": [
                {
                    "pitch": -2.9021739490136484,
                    "yaw": -135.1517173985934,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/309"
                },
                {
                    "pitch": -1.980220697378364,
                    "yaw": 24.098578483169376,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Rooms/306"
                },
                {
                    "pitch": -3.7556976365108112,
                    "yaw": 36.739193000783416,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_1"
                }
            ]
        },
        "Rooms/t_1": {
            "title": "Rooms/t_1",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -1.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_1.jpg",
            "hotSpots": []
        },
        "Rooms/t_2": {
            "title": "Rooms/t_2",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -3.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_2.jpg",
            "hotSpots": []
        },
        "Rooms/t_3": {
            "title": "Rooms/t_3",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.4,
            "horizonPitch": -2.4,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_3.jpg",
            "hotSpots": []
        },
        "Rooms/t_4_m": {
            "title": "Rooms/t_4_m",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.4,
            "horizonPitch": -3.2,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_4_m.jpg",
            "hotSpots": []
        },
        "Rooms/t_5_w": {
            "title": "Rooms/t_5_w",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.4,
            "horizonPitch": -1.8,
            "floor": 4,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_5_w.jpg",
            "hotSpots": []
        },
        "Rooms/t_6": {
            "title": "Rooms/t_6",
            "pitch": 0,
            "yaw": 0,
            "type": "equirectangular",
            "horizonRoll": 0.4,
            "horizonPitch": -2.4,
            "floor": 4,
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/t_6.jpg",
            "hotSpots": []
        },
        "Rooms/kueche": {
            "title": "Rooms/kueche",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -2.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/kueche.jpg",
            "hotSpots": [
                {
                    "pitch": -7.449592931333768,
                    "yaw": -63.58481364933982,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_6",
                    "div": {}
                }
            ]
        },
        "Rooms/mensa": {
            "title": "Rooms/mensa",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.8,
            "horizonPitch": -0.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/mensa.jpg",
            "hotSpots": [
                {
                    "pitch": -1.399537024224248,
                    "yaw": 35.70589854620414,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_3"
                }
            ]
        },
        "Rooms/aula": {
            "title": "Rooms/aula",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0,
            "horizonPitch": -2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/aula.jpg",
            "hotSpots": [
                {
                    "pitch": -2.278171921925825,
                    "yaw": -80.60982109499628,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_1"
                },
                {
                    "pitch": -3.935353058453467,
                    "yaw": 175.2632770470131,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_9"
                }
            ]
        },
        "Rooms/wat": {
            "title": "Rooms/wat",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.6,
            "horizonPitch": -1.8,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/wat.jpg",
            "hotSpots": [
                {
                    "pitch": -6.970543378581099,
                    "yaw": -178.33512056066127,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_7"
                }
            ]
        },
        "Rooms/036": {
            "title": "Rooms/036",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.6,
            "horizonPitch": -1.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/036.jpg",
            "hotSpots": [
                {
                    "pitch": -6.705466673407278,
                    "yaw": -123.59116192423818,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4"
                }
            ]
        },
        "Rooms/014": {
            "title": "Rooms/014",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -1.6,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/014.jpg",
            "hotSpots": [
                {
                    "pitch": -4.088438279789786,
                    "yaw": 75.65566068952535,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_10"
                }
            ]
        },
        "Rooms/033": {
            "title": "Rooms/033",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.8,
            "horizonPitch": -2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/033.jpg",
            "hotSpots": [
                {
                    "pitch": -6.748916099095821,
                    "yaw": 73.51585417253455,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4"
                }
            ]
        },
        "Rooms/035": {
            "title": "Rooms/035",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2,
            "horizonPitch": -2.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/035.jpg",
            "hotSpots": [
                {
                    "pitch": -6.543825746337936,
                    "yaw": 91.5005922469677,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4"
                }
            ]
        },
        "Rooms/037": {
            "title": "Rooms/037",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0.6,
            "horizonPitch": -2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/037.jpg",
            "hotSpots": [
                {
                    "pitch": -9.313200779804921,
                    "yaw": 158.26084591795808,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_4",
                    "div": {}
                },
                {
                    "pitch": -1.897761117148367,
                    "yaw": -179.28675398765864,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R037_1.jpg",
                            "type": "image"
                        }
                    ],
                    "div": {}
                }
            ]
        },
        "Rooms/038": {
            "title": "Rooms/038",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2,
            "horizonPitch": -2.4,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/038.jpg",
            "hotSpots": [
                {
                    "pitch": -2.8314605229107466,
                    "yaw": -173.1209594347937,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_5"
                }
            ]
        },
        "Rooms/039": {
            "title": "Rooms/039",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.2,
            "horizonPitch": -1.2,
            "floor": 0,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/039.jpg",
            "hotSpots": [
                {
                    "pitch": 1.521095165865451,
                    "yaw": -178.37530696850683,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R039_1.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": 0.016168534959140946,
                    "yaw": -117.1984342730508,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R039_2.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": -6.018754351427564,
                    "yaw": 103.66114656445711,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_0_5"
                }
            ]
        },
        "Rooms/114": {
            "title": "Rooms/114",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -2.4,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/114.jpg",
            "hotSpots": [
                {
                    "pitch": -1.5069050842907705,
                    "yaw": 147.0801637520783,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_3"
                }
            ]
        },
        "Rooms/117": {
            "title": "Rooms/117",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.4,
            "horizonPitch": -3,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/117.jpg",
            "hotSpots": [
                {
                    "pitch": -3.7627981126665055,
                    "yaw": 130.49418398152307,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_4"
                }
            ]
        },
        "Rooms/118": {
            "title": "Rooms/118",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1,
            "horizonPitch": -3.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/118.jpg",
            "hotSpots": [
                {
                    "pitch": 0.4681323880037502,
                    "yaw": 53.89374544700934,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R118_2.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": -4.303223849231032,
                    "yaw": 20.824559696145457,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_4"
                },
                {
                    "pitch": 1.2910869806471368,
                    "yaw": 86.949536556417,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R118_1.jpg",
                            "type": "image"
                        }
                    ]
                }
            ]
        },
        "Rooms/119": {
            "title": "Rooms/119",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0,
            "horizonPitch": -3,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/119.jpg",
            "hotSpots": [
                {
                    "pitch": 1.0217395518796915,
                    "yaw": 16.942768488137744,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R119_1.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": -4.895157925691938,
                    "yaw": -18.2032506152176,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_5"
                }
            ]
        },
        "Rooms/120": {
            "title": "Rooms/120",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.4,
            "horizonPitch": -2.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/120.jpg",
            "hotSpots": [
                {
                    "pitch": 5.862540143428731,
                    "yaw": -169.36198427854504,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R120_1.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": -6.149387713610973,
                    "yaw": 134.4118326264857,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_5"
                },
                {
                    "pitch": 3.309168115129615,
                    "yaw": -144.96573860733668,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R120_2.jpg",
                            "type": "image"
                        }
                    ]
                }
            ]
        },
        "Rooms/121": {
            "title": "Rooms/121",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.6,
            "horizonPitch": -2.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/121.jpg",
            "hotSpots": [
                {
                    "pitch": 2.665240627059956,
                    "yaw": -153.0462983783294,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R121_1.jpg",
                            "type": "image"
                        }
                    ]
                },
                {
                    "pitch": -6.5770407732584815,
                    "yaw": 80.88796452052975,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_4"
                },
                {
                    "pitch": -5.366608870823887,
                    "yaw": -163.11604572568268,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 1,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R121_2.jpg",
                            "type": "image"
                        }
                    ]
                }
            ]
        },
        "Rooms/122": {
            "title": "Rooms/122",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.8,
            "horizonPitch": -2.2,
            "floor": 1,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/122.jpg",
            "hotSpots": [
                {
                    "pitch": -4.52634939314971,
                    "yaw": -7.8144016127862415,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_1_5"
                }
            ]
        },
        "Rooms/212": {
            "title": "Rooms/212",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": -1,
            "horizonPitch": -2.2,
            "floor": 2,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/212.jpg",
            "hotSpots": [
                {
                    "pitch": -7.068222202304275,
                    "yaw": -23.589471089762128,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_2_3"
                }
            ]
        },
        "Rooms/303": {
            "title": "Rooms/303",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.2,
            "horizonPitch": -3.8,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/303.jpg",
            "hotSpots": [
                {
                    "pitch": -2.0787074728254695,
                    "yaw": 138.30647389934927,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_2"
                }
            ]
        },
        "Rooms/305": {
            "title": "Rooms/305",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 2.2,
            "horizonPitch": -1.6,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/305.jpg",
            "hotSpots": [
                {
                    "pitch": -2.22159419516447,
                    "yaw": -62.28398404012529,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_2"
                }
            ]
        },
        "Rooms/309": {
            "title": "Rooms/309",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 0,
            "horizonPitch": -1.4,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/309.jpg",
            "hotSpots": [
                {
                    "pitch": -3.2137373818291373,
                    "yaw": -74.29676390141333,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_3"
                },
                {
                    "pitch": -1.1884648850204789,
                    "yaw": 45.10755137386866,
                    "cssClass": "custom-hotspot",
                    "createTooltipArgs": ["", "pic"],
                    "createTooltipFunc": createCustomHotspot,
                    "clickHandlerFunc": openGallery,
                    "clickHandlerArgs": 0,
                    "gallery": [
                        {
                            "href": "pictures/CloseUps/R309_1.jpg",
                            "type": "image"
                        }
                    ]
                }
            ]
        },
        "Rooms/306": {
            "title": "Rooms/306",
            "pitch": 0,
            "yaw": 0,
            "horizonRoll": 1.8,
            "horizonPitch": -1.6,
            "floor": 3,
            "type": "equirectangular",
            "mapCoords": {
                "x": 0,
                "y": 0
            },
            "panorama": "Rooms/306.jpg",
            "hotSpots": [
                {
                    "pitch": -3.9901163271683124,
                    "yaw": 75.62082679906985,
                    "targetPitch": "same",
                    "targetYaw": "same",
                    "type": "scene",
                    "text": "",
                    "sceneId": "Floors/f_3_3"
                }
            ]
        }
    }
});


