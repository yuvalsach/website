/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['ubuntu, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu:n4,i4,n7,i7,n3,i3,n5,i5:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Bg',
                type: 'rect',
                rect: ['0px', '0px','1400px','10000px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'BgBottom',
                type: 'rect',
                rect: ['0px', '10000px','1387px','8995px','auto', 'auto'],
                fill: ["rgba(46,41,38,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Start',
                type: 'rect',
                rect: ['0px', '61px','auto','auto','auto', 'auto'],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
            },
            {
                id: 'StartMobile',
                type: 'rect',
                rect: ['-10px', '-2px','auto','auto','auto', 'auto']
            },
            {
                id: 'Menu',
                type: 'rect',
                rect: ['30px', '0px','auto','auto','auto', 'auto'],
                opacity: 1
            },
            {
                id: 'startPoint',
                type: 'rect',
                rect: ['-3px', '-50px','74px','35px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'darioFrame',
                type: 'rect',
                rect: ['0px', '314px','1366px','4390px','auto', 'auto'],
                fill: ["rgba(185,181,178,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'myHeritageFrame',
                type: 'rect',
                rect: ['0px', '4704px','1366px','3013px','auto', 'auto'],
                fill: ["rgba(185,181,178,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'weaveeFrame',
                type: 'rect',
                rect: ['0px', '7717px','1366px','4012px','auto', 'auto'],
                fill: ["rgba(89,255,0,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'reshetFrame',
                type: 'rect',
                rect: ['0px', '11654px','1400px','2754px','auto', 'auto'],
                fill: ["rgba(46,41,38,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'discountFrameBg',
                type: 'rect',
                rect: ['0px', '17417px','1428px','5100px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'netafimFrame',
                type: 'rect',
                rect: ['0px', '14408px','1400px','3204px','auto', 'auto'],
                fill: ["rgba(123,167,211,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'discountFrame',
                type: 'rect',
                rect: ['0px', '17417px','1428px','5100px','auto', 'auto'],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'frames1Frame',
                type: 'rect',
                rect: ['0px', '22442px','auto','auto','auto', 'auto']
            },
            {
                id: 'bottomArrow',
                type: 'rect',
                rect: ['668px', '25276px','auto','auto','auto', 'auto']
            },
            {
                id: 'bottomArrowBtn',
                type: 'rect',
                rect: ['652px', '25275px','138px','37px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(46,41,38,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'frames1Frame',
                symbolName: 'frames1Frame',
                autoPlay: {

                }
            },
            {
                id: 'Menu',
                symbolName: 'Menu',
                autoPlay: {

                }
            },
            {
                id: 'Start',
                symbolName: 'Start',
                autoPlay: {

                }
            },
            {
                id: 'bottomArrow',
                symbolName: 'bottomArrow',
                autoPlay: {

                }
            },
            {
                id: 'StartMobile',
                symbolName: 'StartMobile',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Start}": [
                ["style", "top", '61px'],
                ["style", "left", '0px']
            ],
            "${_netafimFrame}": [
                ["color", "background-color", 'rgba(123,167,211,1.00)'],
                ["style", "height", '3204px'],
                ["style", "top", '14408px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_StartMobile}": [
                ["style", "top", '-2px'],
                ["style", "left", '-10px']
            ],
            "${_frames1Frame}": [
                ["style", "top", '22442px']
            ],
            "${_buzzillaCircle2}": [
                ["style", "top", '']
            ],
            "${_reshetFrame}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "height", '2754px'],
                ["style", "top", '11654px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_BgBottom}": [
                ["style", "top", '10000px'],
                ["style", "height", '8995px'],
                ["color", "background-color", 'rgba(46,41,38,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1387px']
            ],
            "${_Menu}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_weaveeFrame}": [
                ["color", "background-color", 'rgba(89,255,0,0.00)'],
                ["style", "height", '4012px'],
                ["style", "top", '7717px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_startPoint}": [
                ["style", "left", '-3px']
            ],
            "${_bottomArrow}": [
                ["style", "left", '668px'],
                ["style", "top", '25276px']
            ],
            "${_Bg}": [
                ["style", "top", '0px'],
                ["style", "height", '10000px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_bottomArrowBtn}": [
                ["style", "top", '25275px'],
                ["style", "left", '652px'],
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '138px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '600px'],
                ["style", "max-width", 'none'],
                ["style", "width", '1366px']
            ],
            "${_discountFrameBg}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '5100px'],
                ["style", "top", '17417px'],
                ["style", "left", '0px'],
                ["style", "width", '1428px']
            ],
            "${_discountFrame}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "height", '5100px'],
                ["style", "top", '17417px'],
                ["style", "left", '0px'],
                ["style", "width", '1428px']
            ],
            "${_darioFrame}": [
                ["color", "background-color", 'rgba(185,181,178,0.00)'],
                ["style", "height", '4390px'],
                ["style", "top", '314px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_myHeritageFrame}": [
                ["color", "background-color", 'rgba(185,181,178,0.00)'],
                ["style", "height", '3013px'],
                ["style", "top", '4704px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1340,
            autoPlay: true,
            timeline: [
                { id: "eid150", tween: [ "style", "${_Menu}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_Menu}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_buzzillaCircle2}", "top", '', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid271", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Start}', [] ], ""], position: 0 }            ]
        }
    }
},
"Menu": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['1.33542']],
                    boxShadow: ['', 0, 3, 5, 0, 'rgba(0,0,0,0.06)'],
                    type: 'rect',
                    id: 'BG2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-599px', '-1px', '2544px', '65px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'menuAnalog',
                    type: 'rect',
                    opacity: 1,
                    rect: ['850px', '18px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuDigital',
                    type: 'rect',
                    rect: ['420px', '18px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(177,177,177,0.50)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy',
                    text: '|',
                    align: 'left',
                    rect: ['250px', '17px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(177,177,177,0.50)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy2',
                    text: '|',
                    align: 'left',
                    rect: ['685px', '17px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(177,177,177,0.50)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy3',
                    text: '|',
                    align: 'left',
                    rect: ['1110px', '17px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['254px', '5px', '431px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'menuDigitalBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['691px', '5px', '418px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'menuAnalogBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'menuDigital',
                symbolName: 'menuDigital',
                autoPlay: {

               }
            },
            {
                id: 'menuAnalog',
                symbolName: 'menuAnalog',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_menuAnalogBtn}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '691px'],
                ["style", "top", '5px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '418px']
            ],
            "${_menuAnalog}": [
                ["style", "top", '18px'],
                ["style", "opacity", '1'],
                ["style", "left", '850px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '17px'],
                ["color", "color", 'rgba(177,177,177,0.50)'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '685px'],
                ["style", "font-weight", '300']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '17px'],
                ["color", "color", 'rgba(177,177,177,0.50)'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '1110px'],
                ["style", "font-weight", '300']
            ],
            "${_menuDigital}": [
                ["style", "left", '420px'],
                ["style", "top", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '1366px']
            ],
            "${_BG2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["transform", "scaleX", '1.33542'],
                ["style", "left", '-599px'],
                ["style", "width", '2544px'],
                ["style", "top", '-1px'],
                ["style", "height", '65px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.06)']
            ],
            "${_menuDigitalBtn}": [
                ["style", "top", '5px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '254px'],
                ["style", "width", '431px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '17px'],
                ["color", "color", 'rgba(177,177,177,0.50)'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '250px'],
                ["style", "font-weight", '300']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1340,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"netafimLoop": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'netafimLoop',
                    type: 'image',
                    rect: ['0px', '0px', '421px', '94px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimLoop.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_netafimLoop}": [
                ["style", "height", '94px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '421px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '421px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Buzzilla": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '562px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-2000px', '0px', '5500px', '445px', 'auto', 'auto'],
                    fill: ['rgba(153,204,51,1.00)']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(255,255,255,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'Animated a 60 seconds promotional \rvideo explaning Buzzilla’s brand \rmonitoring, social media analysis \rand research.',
                    align: 'left',
                    rect: ['281px', '171px', '250px', '124px', 'auto', 'auto']
                },
                {
                    id: 'buzzillaLogo',
                    type: 'image',
                    rect: ['275px', '59px', '157px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buzzillaLogo.png', '0px', '0px']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(255,255,255,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'What people are saying about \ryou is Buzzilla’s business!\r<br><br>',
                    align: 'left',
                    rect: ['281px', '109px', '230px', '45px', 'auto', 'auto']
                },
                {
                    id: 'buzzillaComputer',
                    type: 'image',
                    rect: ['620px', '-28px', '609px', '590px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buzzillaComputer.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'buzzillaLoad',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['646px', '-3px', '556px', '334px', 'auto', 'auto'],
                    fill: ['rgba(153,204,51,1.00)']
                },
                {
                    id: 'buzzillaAnimCover',
                    type: 'rect',
                    rect: ['646', '-3', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'buzzillaComputerLight',
                    type: 'image',
                    rect: ['1009px', '-3px', '193px', '243px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buzzillaComputerLight.png', '0px', '0px']
                },
                {
                    font: ['actor, sans-serif', 21, 'rgba(255,255,255,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'PLAY THE SAMPLES!',
                    align: 'left',
                    rect: ['281px', '299px', '271px', '30px', 'auto', 'auto']
                },
                {
                    id: 'buzzillaArrow',
                    type: 'image',
                    rect: ['492px', '262px', '73px', '53px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buzzillaArrow.png', '0px', '0px']
                },
                {
                    id: 'buzzillaCircle1',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['270', '331', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['270', '331', 'auto', 'auto', 'auto', 'auto'],
                    id: 'buzzillaCircle2',
                    opacity: 0.65,
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['270', '331', 'auto', 'auto', 'auto', 'auto'],
                    id: 'buzzillaCircle3',
                    opacity: 0.65,
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    type: 'rect',
                    rect: ['281px', '333px', '22px', '22px', 'auto', 'auto'],
                    id: 'buzzillaBtn1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    rect: ['311px', '333px', '22px', '22px', 'auto', 'auto'],
                    id: 'buzzillaBtn2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    rect: ['341px', '333px', '22px', '22px', 'auto', 'auto'],
                    id: 'buzzillaBtn3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'buzzillaCircle3',
                symbolName: 'buzzillaCircle'
            },
            {
                id: 'buzzillaCircle2',
                symbolName: 'buzzillaCircle'
            },
            {
                id: 'buzzillaCircle1',
                symbolName: 'buzzillaCircle'
            },
            {
                id: 'buzzillaAnimCover',
                symbolName: 'buzzillaAnimCover'
            }            ]
        },
    states: {
        "Base State": {
            "${_buzzillaCircle1}": [
                ["style", "top", '333px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '281px']
            ],
            "${_buzzillaBtn3}": [
                ["style", "top", '333px'],
                ["style", "left", '341px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_Text3}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '281px'],
                ["style", "width", '230px'],
                ["style", "top", '109px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '45px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5}": [
                ["style", "top", '299px'],
                ["style", "letter-spacing", '0px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-weight", '400'],
                ["style", "left", '281px'],
                ["style", "font-size", '21px']
            ],
            "${_buzzillaCircle3}": [
                ["style", "top", '333px'],
                ["style", "opacity", '0.65'],
                ["style", "left", '341px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '444px'],
                ["style", "width", '1400px']
            ],
            "${_buzzillaComputer}": [
                ["style", "left", '620px'],
                ["style", "top", '-28px']
            ],
            "${_buzzillaBtn1}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '333px']
            ],
            "${_buzzillaCircle2}": [
                ["style", "top", '333px'],
                ["style", "opacity", '0.65'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '311px']
            ],
            "${_buzzillaLogo}": [
                ["style", "left", '275px'],
                ["style", "top", '59px']
            ],
            "${_buzzillaComputerLight}": [
                ["style", "left", '1009px'],
                ["style", "top", '-3px']
            ],
            "${_buzzillaLoad}": [
                ["color", "background-color", 'rgba(153,204,51,1.00)'],
                ["style", "height", '334px'],
                ["style", "top", '-3px'],
                ["style", "left", '646px'],
                ["style", "width", '556px']
            ],
            "${_buzzillaBtn2}": [
                ["style", "top", '333px'],
                ["style", "left", '311px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_Text4}": [
                ["style", "top", '171px'],
                ["style", "left", '281px'],
                ["style", "width", '250px']
            ],
            "${_buzzillaArrow}": [
                ["style", "left", '492px'],
                ["style", "top", '262px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '562px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(153,204,51,1.00)'],
                ["style", "height", '445px'],
                ["style", "top", '0px'],
                ["style", "left", '-2000px'],
                ["style", "width", '5500px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "style", "${_buzzillaCircle2}", "left", '311px', { fromValue: '311px'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_buzzillaCircle3}", "left", '341px', { fromValue: '341px'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_buzzillaCircle2}", "top", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
                { id: "eid115", tween: [ "style", "${_buzzillaCircle1}", "top", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_buzzillaCircle3}", "top", '333px', { fromValue: '333px'}], position: 0, duration: 0 },
                { id: "eid116", tween: [ "style", "${_buzzillaCircle1}", "left", '281px', { fromValue: '281px'}], position: 0, duration: 0 },
                { id: "eid103", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaCircle1}', [] ], ""], position: 0 },
                { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaCircle3}', [] ], ""], position: 0 },
                { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaCircle2}', [] ], ""], position: 0 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaAnimCover}', [] ], ""], position: 0 }            ]
        }
    }
},
"Reshet": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-207px', '0px', '807px', '290px', 'auto', 'auto'],
                    fill: ['rgba(50,45,41,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Gradient',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '1400px', '2700px', 'auto', 'auto'],
                    fill: ['rgba(106,97,89,1.00)', [50, 33, 'true', 'farthest-corner', [['rgba(106,97,89,1.00)', 31], ['rgba(50,45,41,1.00)', 72]]]]
                },
                {
                    type: 'rect',
                    id: 'Pattern',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '2700px', 'auto', 'auto'],
                    fill: ['rgba(255,38,38,0.00)']
                },
                {
                    type: 'text',
                    rect: ['415px', '1136px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'green',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(165,216,0,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['446px', '1158px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'pink',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(255,8,110,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['414px', '1180px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy2',
                    text: 'yellow',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(255,201,19,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['276px', '1226px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy3',
                    text: 'black',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['348px', '1226px', '61px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy4',
                    text: 'white.',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['318px', '1226px', '31px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy5',
                    text: 'and',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    id: 'reshetArrow',
                    type: 'image',
                    rect: ['994px', '1407px', '40px', '77px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetArrow.png', '0px', '0px']
                },
                {
                    id: 'reshetLine',
                    type: 'image',
                    rect: ['216px', '624px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy',
                    type: 'image',
                    rect: ['216px', '964px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy2',
                    type: 'image',
                    rect: ['216px', '1309px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy3',
                    type: 'image',
                    rect: ['216px', '1888px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'reshet1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['275px', '54px', '118px', '61px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    id: 'reshet2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['842px', '-75px', '305px', '647px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    id: 'reshet3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['239px', '160px', '568px', '424px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    id: 'reshet4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['201px', '661px', '621px', '327px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    id: 'reshet5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['298px', '1500px', '796px', '321px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    id: 'reshet6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['41px', '1974px', '1150px', '851px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'text',
                    rect: ['862px', '723px', '278px', '225px', 'auto', 'auto'],
                    id: 'Text4',
                    text: 'Being based on the network\'s rich content, high quality imagery and video content was the core of the application. To maintain such a strong impact, bold iconography was required to colour up the more subtle and informative screens.',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['616px', '1030px', '83px', '218px', 'auto', 'auto'],
                    fill: ['rgba(165,216,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['716px', '1030px', '83px', '218px', 'auto', 'auto'],
                    fill: ['rgba(255,8,110,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['816px', '1030px', '83px', '218px', 'auto', 'auto'],
                    fill: ['rgba(255,201,19,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['916px', '1030px', '83px', '218px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2Copy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['1016px', '1030px', '83px', '218px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['274px', '1365px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy',
                    text: 'Draw!',
                    align: 'left',
                    font: ['actor, sans-serif', 21, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['879px', '2031px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy9',
                    text: 'Make my icon bigger!',
                    align: 'left',
                    font: ['actor, sans-serif', 21, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['974px', '1364px', '118px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy4',
                    text: 'Settings Icon',
                    align: 'left',
                    font: ['actor, sans-serif', 21, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['276px', '1397px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy2',
                    text: 'Skipping the obvious pen on paper stage, here is the basic breakdown of an icon design process',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['368px', '1765px', '195px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy5',
                    text: 'Form out the basic shapes',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['601px', '1765px', '195px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy6',
                    text: 'Apply colour theme <br>and basic details',
                    align: 'center',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['847px', '1765px', '195px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy7',
                    text: 'Refine, refine, refine...',
                    align: 'center',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['879px', '2068px', '230px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy8',
                    text: 'Pleased with the outcome, you move on to adjusting the icon into a dozen different sizes, fitting it to the different screen resolutions.<br>Each device and it\'s unique screen resolution.',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['879px', '2215px', '220px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy10',
                    text: 'Why do humans need so many different mobile devices?',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['403px', '93px', '438px', '27px', 'auto', 'auto'],
                    id: 'Text6',
                    text: 'Key designs and iconography for Reshet.TV',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['401px', '53px', '346px', '27px', 'auto', 'auto'],
                    id: 'Text6Copy',
                    text: 'RESHET.TV',
                    align: 'left',
                    font: ['actor, sans-serif', 32, 'rgba(221,220,219,1.00)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['277px', '1028px', '252px', '61px', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'As an application conversing with the entertainment world, shiny colours were a must.<br><br>',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['277px', '1114px', '245px', '114px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'started with a variation on the network\'s dominant        <br>added a complementary<br>on came the radiant<br>and the never failing to support<br>',
                    align: 'left',
                    font: ['actor, sans-serif', 16, 'rgba(197,194,189,1.00)', 'normal', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "height", '218px'],
                ["color", "background-color", 'rgba(165,216,0,1.00)'],
                ["style", "left", '616px'],
                ["style", "top", '1030px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '1158px'],
                ["color", "color", 'rgba(255,8,110,1.00)'],
                ["style", "left", '446px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy2}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '276px'],
                ["style", "width", '288px'],
                ["style", "top", '1397px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy9}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '879px'],
                ["style", "width", '288px'],
                ["style", "top", '2031px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '21px']
            ],
            "${_Text2}": [
                ["style", "top", '1136px'],
                ["color", "color", 'rgba(165,216,0,1.00)'],
                ["style", "left", '415px'],
                ["style", "font-size", '16px']
            ],
            "${_reshetLineCopy3}": [
                ["style", "top", '1888px'],
                ["style", "left", '216px']
            ],
            "${_Text4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", 'normal'],
                ["style", "left", '862px'],
                ["style", "font-size", '16px'],
                ["style", "top", '723px'],
                ["style", "text-indent", '0px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '278px']
            ],
            "${_reshetLine}": [
                ["style", "top", '624px'],
                ["style", "left", '216px']
            ],
            "${_Text5Copy5}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '368px'],
                ["style", "width", '195px'],
                ["style", "top", '1765px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '274px'],
                ["style", "width", '288px'],
                ["style", "top", '1365px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '21px']
            ],
            "${_reshet5}": [
                ["style", "top", '1500px'],
                ["style", "height", '321px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '298px'],
                ["style", "width", '796px']
            ],
            "${_Text5Copy8}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '879px'],
                ["style", "width", '230px'],
                ["style", "top", '2068px'],
                ["style", "text-align", 'left'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy10}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '879px'],
                ["style", "width", '220px'],
                ["style", "top", '2215px'],
                ["style", "text-align", 'left'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle2Copy4}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '1030px'],
                ["style", "left", '1016px'],
                ["style", "height", '218px']
            ],
            "${_Bg}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(50,45,41,1.00)'],
                ["style", "left", '-207px'],
                ["style", "width", '807px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "height", '218px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '916px'],
                ["style", "top", '1030px']
            ],
            "${_Text5Copy3}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(187,185,182,1)'],
                ["style", "left", '276px'],
                ["style", "width", '288px'],
                ["style", "top", '1396px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_reshet1}": [
                ["style", "top", '54px'],
                ["style", "height", '61px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '275px'],
                ["style", "width", '118px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '1180px'],
                ["color", "color", 'rgba(255,201,19,1.00)'],
                ["style", "left", '414px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle2Copy2}": [
                ["style", "top", '1030px'],
                ["style", "height", '218px'],
                ["style", "left", '816px'],
                ["color", "background-color", 'rgba(255,201,19,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '127px'],
                ["style", "width", '373px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '1226px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '276px'],
                ["style", "font-size", '16px']
            ],
            "${_reshet3}": [
                ["style", "top", '160px'],
                ["style", "height", '424px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '239px'],
                ["style", "width", '568px']
            ],
            "${_Pattern}": [
                ["color", "background-color", 'rgba(255,38,38,0.00)'],
                ["style", "height", '2700px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_reshetArrow}": [
                ["style", "left", '994px'],
                ["style", "top", '1407px']
            ],
            "${_Text5Copy7}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '847px'],
                ["style", "width", '195px'],
                ["style", "top", '1765px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_reshet6}": [
                ["style", "top", '1974px'],
                ["style", "height", '851px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '41px'],
                ["style", "width", '1150px']
            ],
            "${_Text}": [
                ["style", "line-height", '22px'],
                ["style", "font-size", '16px'],
                ["style", "top", '1114px'],
                ["style", "height", '114px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '277px'],
                ["style", "width", '245px']
            ],
            "${_reshet4}": [
                ["style", "top", '661px'],
                ["style", "height", '327px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '201px'],
                ["style", "width", '621px']
            ],
            "${_reshetLineCopy2}": [
                ["style", "top", '1309px'],
                ["style", "left", '216px']
            ],
            "${_reshet2}": [
                ["style", "top", '-75px'],
                ["style", "height", '647px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '842px'],
                ["style", "width", '305px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(255,8,110,1.00)'],
                ["style", "top", '1030px'],
                ["style", "left", '716px'],
                ["style", "height", '218px']
            ],
            "${_Text5Copy6}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '601px'],
                ["style", "width", '195px'],
                ["style", "top", '1765px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text6}": [
                ["style", "top", '93px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-size", '16px'],
                ["style", "word-spacing", '2px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '403px'],
                ["style", "width", '438px']
            ],
            "${_Text2Copy5}": [
                ["style", "top", '1226px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-size", '16px'],
                ["style", "left", '318px'],
                ["style", "width", '31px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '1226px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '16px'],
                ["style", "left", '348px'],
                ["style", "width", '61px']
            ],
            "${_Gradient}": [
                ["color", "background-color", 'rgba(106,97,89,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '2700px'],
                ["gradient", "background-image", [50,33,true,'farthest-corner',[['rgba(106,97,89,1.00)',31],['rgba(50,45,41,1.00)',72]]]],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '53px'],
                ["color", "color", 'rgba(221,220,219,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '401px'],
                ["style", "font-size", '32px']
            ],
            "${_reshetLineCopy}": [
                ["style", "top", '964px'],
                ["style", "left", '216px']
            ],
            "${_Text5Copy4}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "left", '974px'],
                ["style", "width", '118px'],
                ["style", "top", '1364px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '21px']
            ],
            "${_Text5}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '277px'],
                ["style", "width", '252px'],
                ["style", "top", '1028px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '61px'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Netafim": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '3132px', 'auto', 'auto'],
                    fill: ['rgba(123,167,211,1.00)']
                },
                {
                    id: 'netafimWorld',
                    type: 'image',
                    rect: ['0px', '2190px', '1400px', '942px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimWorld.jpg', '0px', '0px']
                },
                {
                    id: 'netafimTopBg',
                    type: 'image',
                    rect: ['0px', '0px', '1400px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimTopBg.jpg', '0px', '0px']
                },
                {
                    id: 'netafimLoop2',
                    type: 'rect',
                    rect: ['481px', '2666px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'netafimCircles',
                    type: 'image',
                    rect: ['258px', '965px', '871px', '306px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimCircles.jpg', '0px', '0px']
                },
                {
                    id: 'netafimComputer',
                    type: 'image',
                    rect: ['134px', '110px', '1227px', '403px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimComputer.jpg', '0px', '0px']
                },
                {
                    id: 'netafimLine',
                    type: 'image',
                    rect: ['23px', '719px', '1367px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimLine.png', '0px', '0px']
                },
                {
                    id: 'netafimLineCopy',
                    type: 'image',
                    rect: ['23px', '1463px', '1367px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimLine.png', '0px', '0px']
                },
                {
                    id: 'netafimLogo',
                    type: 'image',
                    rect: ['239px', '127px', '171px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimLogo.png', '0px', '0px']
                },
                {
                    id: 'netafimMap',
                    type: 'image',
                    rect: ['277px', '1756px', '832px', '434px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/netafimMap.jpg', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['268px', '528px', '335px', '34px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Netafim, world innovators in the agricultural field, wanted to create a site telling their unique story.<br><br>The company, formed in 1965, has grown to be the global leader in smart drip and micro-irrigation solutions.',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['269px', '842px', '335px', '34px', 'auto', 'auto'],
                    id: 'TextCopy7',
                    text: 'As a company that actually does make this world a better and greener place, a rich and colourful globe was a perfect match. ',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['347px', '1278px', '142px', '34px', 'auto', 'auto'],
                    id: 'TextCopy9',
                    text: 'Sketch the world...',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['584px', '1559px', '467px', '34px', 'auto', 'auto'],
                    id: 'TextCopy13',
                    text: 'The subsidiaries page was another excellent place to emphasize <br>Netafim’s goal to help the world grow more with less. <br>Implementing the site’s organic feel alongside that message, <br>created the visual display of netafim’s worldwide subsidiaires.<br>Even a generic component such as the common worldwide map <br>got it’s own special care. ',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['967px', '2240px', '114px', '34px', 'auto', 'auto'],
                    id: 'TextCopy14',
                    text: 'Here is the <br>full frame globe',
                    align: 'center',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['637px', '1278px', '142px', '34px', 'auto', 'auto'],
                    id: 'TextCopy10',
                    text: 'Plant some grass...',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['884px', '1279px', '220px', '34px', 'auto', 'auto'],
                    id: 'TextCopy11',
                    text: 'Plant flowers, and other crops, \rinstall water sprinklers, <br>\rbuild a house and a turbine, <br>\rdiscover a lake and live <br>\rhappily ever after',
                    align: 'center',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['712px', '842px', '335px', '34px', 'auto', 'auto'],
                    id: 'TextCopy8',
                    text: 'Each element was made with it’s own fitting \rtechnique. Some were made using imagery and blending them in, some were basic painting. ',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['712px', '526px', '408px', '35px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'As such, the purpose was to present the company’s legacy, pay tribute to the people of Netafim, and show Netafim’s influence on world agriculture. <br><br>\r\rEarly on, it was decided the site should have a\rstrong organic feel to it. Fields, crops, \rgreenhouses and basically everything green.',
                    align: 'left',
                    font: ['actor, sans-serif', [1, 'em'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['270px', '165px', '326px', '35px', 'auto', 'auto'],
                    opacity: 0.9,
                    id: 'TextCopy2',
                    text: 'Promotional Illustrations and design for Netafim\'s legacy website',
                    align: 'left',
                    font: ['actor, sans-serif', 18, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['268px', '809px', '195px', '35px', 'auto', 'auto'],
                    id: 'TextCopy5',
                    text: 'The making of ',
                    align: 'left',
                    font: ['actor, sans-serif', 28, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['269px', '1559px', '272px', '35px', 'auto', 'auto'],
                    id: 'TextCopy12',
                    text: 'Map of world crops',
                    align: 'left',
                    font: ['actor, sans-serif', 28, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['467px', '809px', '195px', '35px', 'auto', 'auto'],
                    id: 'TextCopy6',
                    text: 'The Globe',
                    align: 'left',
                    font: ['actor, sans-serif', 28, 'rgba(255,255,255,1.00)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['282px', '227px', '220px', '35px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'www.netafimlegacy.com',
                    align: 'left',
                    font: ['actor, sans-serif', 18, 'rgba(211,231,242,1.00)', '400', 'underline', 'normal']
                },
                {
                    type: 'rect',
                    rect: ['269px', '224px', '237px', '34px', 'auto', 'auto'],
                    id: 'netafimBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    type: 'text',
                    rect: ['270px', '229px', '30px', '35px', 'auto', 'auto'],
                    id: 'TextCopy4',
                    text: '&gt;',
                    align: 'left',
                    font: ['actor, sans-serif', 10, 'rgba(211,231,242,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            {
                id: 'netafimLoop2',
                symbolName: 'netafimLoop'
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy14}": [
                ["style", "line-height", '148%'],
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '967px'],
                ["style", "font-size", '1em'],
                ["style", "top", '2240px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0%'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '114px']
            ],
            "${_TextCopy11}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '884px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1279px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0%'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '220px']
            ],
            "${_Bg}": [
                ["color", "background-color", 'rgba(123,167,211,1.00)'],
                ["style", "height", '3132px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_netafimCircles}": [
                ["style", "top", '965px'],
                ["style", "left", '258px']
            ],
            "${_netafimLine}": [
                ["style", "top", '719px'],
                ["style", "left", '23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3204px'],
                ["style", "width", '1400px']
            ],
            "${_TextCopy13}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '584px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1559px'],
                ["style", "text-indent", '0%'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '467px']
            ],
            "${_TextCopy10}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '637px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1278px'],
                ["style", "text-indent", '0%'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '142px']
            ],
            "${_TextCopy6}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '467px'],
                ["style", "font-size", '28px'],
                ["style", "top", '809px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '195px']
            ],
            "${_netafimBtn}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '269px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '224px']
            ],
            "${_TextCopy4}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(211,231,242,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '270px'],
                ["style", "font-size", '10px'],
                ["style", "top", '229px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "width", '30px'],
                ["style", "word-spacing", '0px'],
                ["style", "text-decoration", 'none']
            ],
            "${_netafimLoop2}": [
                ["style", "left", '481px'],
                ["style", "top", '2616px']
            ],
            "${_TextCopy9}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '347px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1278px'],
                ["style", "text-indent", '0%'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '142px']
            ],
            "${_TextCopy5}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '268px'],
                ["style", "font-size", '28px'],
                ["style", "top", '809px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '195px']
            ],
            "${_TextCopy12}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '269px'],
                ["style", "font-size", '28px'],
                ["style", "top", '1559px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '272px']
            ],
            "${_netafimWorld}": [
                ["style", "left", '0px'],
                ["style", "top", '2190px']
            ],
            "${_netafimLineCopy}": [
                ["style", "top", '1463px'],
                ["style", "left", '23px']
            ],
            "${_netafimLogo}": [
                ["style", "top", '127px'],
                ["style", "left", '239px']
            ],
            "${_netafimMap}": [
                ["style", "left", '277px'],
                ["style", "top", '1756px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '842px'],
                ["style", "letter-spacing", '0em'],
                ["style", "word-spacing", '0em'],
                ["style", "text-indent", '0%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '712px'],
                ["style", "font-size", '1em']
            ],
            "${_Text}": [
                ["style", "top", '528px'],
                ["style", "letter-spacing", '0em'],
                ["style", "word-spacing", '0em'],
                ["style", "text-indent", '0%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '268px'],
                ["style", "font-size", '1em']
            ],
            "${_netafimComputer}": [
                ["style", "top", '110px'],
                ["style", "left", '134px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '842px'],
                ["style", "letter-spacing", '0em'],
                ["style", "left", '269px'],
                ["style", "text-indent", '0%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "word-spacing", '0em'],
                ["style", "font-size", '1em']
            ],
            "${_TextCopy3}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(211,231,242,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '282px'],
                ["style", "font-size", '18px'],
                ["style", "top", '227px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "word-spacing", '0px'],
                ["style", "text-decoration", 'underline'],
                ["style", "width", '220px']
            ],
            "${_TextCopy}": [
                ["style", "letter-spacing", '0em'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '712px'],
                ["style", "font-size", '1em'],
                ["style", "top", '526px'],
                ["style", "text-indent", '0%'],
                ["style", "height", '35px'],
                ["style", "word-spacing", '0em'],
                ["style", "width", '408px']
            ],
            "${_TextCopy2}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '270px'],
                ["style", "font-size", '18px'],
                ["style", "top", '165px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "opacity", '0.9'],
                ["style", "word-spacing", '2px'],
                ["style", "width", '326px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid83", tween: [ "style", "${_netafimLoop2}", "left", '481px', { fromValue: '481px'}], position: 0, duration: 0 },
                { id: "eid80", tween: [ "style", "${_netafimLoop2}", "top", '2616px', { fromValue: '2616px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Discount": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Bg',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '123px', '1400px', '5160px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'discountGoogle',
                    type: 'image',
                    rect: ['0px', '123px', '1400px', '898px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountGoogle.jpg', '0px', '0px']
                },
                {
                    id: 'discountLogo',
                    type: 'image',
                    rect: ['927px', '195px', '206px', '110px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountLogo.png', '0px', '0px']
                },
                {
                    id: 'discountOverlap',
                    type: 'image',
                    rect: ['276px', '0px', '206px', '123px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountOverlap.png', '0px', '0px']
                },
                {
                    id: 'discountTwoFigures',
                    type: 'image',
                    rect: ['268px', '2263px', '862px', '399px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountTwoFigures.jpg', '0px', '0px']
                },
                {
                    id: 'discountLine',
                    type: 'image',
                    rect: ['83px', '2731px', '1113px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountLine.jpg', '0px', '0px']
                },
                {
                    id: 'discountSketches',
                    type: 'image',
                    rect: ['253px', '818px', '964px', '1332px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountSketches.jpg', '0px', '0px']
                },
                {
                    id: 'discountCircle1',
                    type: 'image',
                    rect: ['695px', '2770px', '435px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountCircle1.jpg', '0px', '0px']
                },
                {
                    id: 'discountCircle2',
                    type: 'image',
                    rect: ['261px', '3066px', '435px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountCircle2.jpg', '0px', '0px']
                },
                {
                    id: 'discountCircle3',
                    type: 'image',
                    rect: ['696px', '3239px', '435px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountCircle3.jpg', '0px', '0px']
                },
                {
                    id: 'discountCircle4',
                    type: 'image',
                    rect: ['261px', '3533px', '435px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountCircle4.jpg', '0px', '0px']
                },
                {
                    id: 'discountCircle5',
                    type: 'image',
                    rect: ['697px', '3729px', '435px', '435px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountCircle5.jpg', '0px', '0px']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Bank Discount,',
                    align: 'left',
                    rect: ['931px', '350px', '151px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'So,',
                    align: 'left',
                    rect: ['932px', '541px', '151px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: ' Israel’s leading banks, wanted to accompany the release of their new mobile application with a list of do and don’ts explaining the importance of safe browsing and how to avoid personal data theft.',
                    align: 'left',
                    rect: ['932px', '375px', '197px', '159px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy2',
                    text: 'we decided on creating a serie of short clips presenting the possible risks and the suggested solutions. We decided to represent the “safety risks” as little creatures taking over your computer. ',
                    align: 'left',
                    rect: ['932px', '564px', '206px', '159px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy2',
                    text: 'Character Design it is!',
                    align: 'left',
                    rect: ['267px', '731px', '225px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy4',
                    text: 'Discount wanted the creature to have a \rcharacteristic coming from their well known logo. \rThe graphic smile shape was the way to go!',
                    align: 'left',
                    rect: ['268px', '758px', '353px', '76px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy4',
                    text: '...After a couple of dozens',
                    align: 'left',
                    rect: ['267px', '1384px', '269px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy6',
                    text: 'Final round...',
                    align: 'left',
                    rect: ['267px', '2157px', '225px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy6',
                    text: 'of these quick rough sketches, three of the \rdesigns moved on to the semi final.<br>\rBack to the digital world, vector time.',
                    align: 'left',
                    rect: ['268px', '1411px', '295px', '76px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy7',
                    text: 'The background',
                    align: 'left',
                    rect: ['267px', '2784px', '225px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy8',
                    text: 'The next stage was to set the background for the scenes. Common screens such as Window’s login screen, A microsoft Excel sheet, Google’s home page and other day to day screens were set to be the \rbackground for our mischievous creatures.<br><br>\r\rHere are a few shots of the monsters\rnot so blending in the sets.',
                    align: 'left',
                    rect: ['268px', '2811px', '295px', '76px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy8',
                    text: 'Animating!',
                    align: 'left',
                    rect: ['418px', '4129px', '225px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy9',
                    text: 'finally, the best part,<br>Here’s a sneak peak to a walk cycle test of the early figure sketch.<br><br>Awefully jolly this one...',
                    align: 'left',
                    rect: ['268px', '4129px', '295px', '76px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(37,127,75,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'TextCopy9',
                    text: 'Ok,',
                    align: 'left',
                    rect: ['267px', '4920px', '29px', '32px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy10',
                    text: 'Been talking too much.',
                    align: 'left',
                    rect: ['300px', '4922px', '295px', '14px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy11',
                    text: 'Here are sneak peaks of various projects <br>I have worked on for the past few years.',
                    align: 'left',
                    rect: ['268px', '4944px', '295px', '14px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy7',
                    text: 'Something about this design seemed to be working best. Maybe it was the length of the legs, which gave the figure a light and dynamic feel. The smile, which was the base of it all, popped out exactly how Discount wanted it to.<br><br>\r\rBut the limbs, ahhh, were too insect like, and that toaster shaped head needed some \rtweaking as well, so, on to the',
                    align: 'left',
                    rect: ['268px', '1841px', '211px', '76px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy3',
                    text: 'instead of a boring list',
                    align: 'left',
                    rect: ['962px', '544px', '197px', '18px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 14, 'rgba(37,127,75,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy',
                    text: 'one of',
                    align: 'left',
                    rect: ['1066px', '354px', '69px', '32px', 'auto', 'auto']
                },
                {
                    id: 'jollyFigure',
                    type: 'image',
                    rect: ['448px', '4304px', '458px', '464px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/jollyFigure.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_discountLogo}": [
                ["style", "left", '927px'],
                ["style", "top", '195px']
            ],
            "${_discountCircle4}": [
                ["style", "left", '261px'],
                ["style", "top", '3533px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '354px'],
                ["style", "letter-spacing", '1px'],
                ["style", "height", '32px'],
                ["style", "font-size", '14px'],
                ["style", "left", '1066px'],
                ["style", "width", '69px']
            ],
            "${_jollyFigure}": [
                ["style", "left", '448px'],
                ["style", "top", '4304px']
            ],
            "${_Text3Copy3}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '197px'],
                ["style", "height", '18px'],
                ["style", "top", '544px'],
                ["style", "left", '962px'],
                ["style", "font-size", '14px']
            ],
            "${_Text3Copy10}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-size", '14px'],
                ["style", "left", '300px'],
                ["style", "height", '14px'],
                ["style", "top", '4922px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '295px']
            ],
            "${_discountCircle1}": [
                ["style", "left", '695px'],
                ["style", "top", '2770px']
            ],
            "${_discountCircle3}": [
                ["style", "left", '696px'],
                ["style", "top", '3239px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '1384px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "width", '269px'],
                ["style", "left", '267px'],
                ["style", "font-size", '18px']
            ],
            "${_Text3Copy6}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '295px'],
                ["style", "left", '268px'],
                ["style", "height", '76px'],
                ["style", "top", '1411px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_discountCircle2}": [
                ["style", "left", '261px'],
                ["style", "top", '3066px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '4129px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "width", '225px'],
                ["style", "left", '418px'],
                ["style", "font-size", '18px']
            ],
            "${_TextCopy}": [
                ["style", "top", '541px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "width", '151px'],
                ["style", "left", '932px'],
                ["style", "font-size", '18px']
            ],
            "${_Text3Copy9}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-size", '14px'],
                ["style", "height", '76px'],
                ["style", "top", '4129px'],
                ["style", "left", '268px'],
                ["style", "width", '295px']
            ],
            "${_Bg}": [
                ["style", "top", '123px'],
                ["style", "height", '5160px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Text3Copy4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-size", '14px'],
                ["style", "left", '268px'],
                ["style", "height", '76px'],
                ["style", "top", '758px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '353px']
            ],
            "${_discountTwoFigures}": [
                ["style", "top", '2263px'],
                ["style", "left", '268px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '731px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-size", '18px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "word-spacing", '1px'],
                ["style", "left", '267px'],
                ["style", "width", '225px']
            ],
            "${_Text3Copy11}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '295px'],
                ["style", "left", '268px'],
                ["style", "height", '14px'],
                ["style", "top", '4944px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5000px'],
                ["style", "width", '1400px']
            ],
            "${_discountGoogle}": [
                ["style", "left", '0px'],
                ["style", "top", '123px']
            ],
            "${_Text3Copy8}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '295px'],
                ["style", "height", '76px'],
                ["style", "top", '2811px'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px']
            ],
            "${_Text3Copy2}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-size", '14px'],
                ["style", "top", '564px'],
                ["style", "left", '932px'],
                ["style", "width", '206px']
            ],
            "${_TextCopy9}": [
                ["style", "top", '4920px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '267px'],
                ["style", "width", '29px']
            ],
            "${_Text3}": [
                ["style", "top", '375px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '197px'],
                ["style", "line-height", '20px'],
                ["style", "left", '932px'],
                ["style", "font-size", '14px']
            ],
            "${_discountSketches}": [
                ["style", "left", '253px'],
                ["style", "top", '818px']
            ],
            "${_discountLine}": [
                ["style", "left", '83px'],
                ["style", "top", '2731px']
            ],
            "${_Text}": [
                ["style", "top", '350px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '931px'],
                ["style", "width", '151px']
            ],
            "${_discountCircle5}": [
                ["style", "left", '697px'],
                ["style", "top", '3729px']
            ],
            "${_Text3Copy7}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "width", '211px'],
                ["style", "height", '76px'],
                ["style", "top", '1841px'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '2157px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '267px'],
                ["style", "width", '225px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '2784px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-size", '18px'],
                ["style", "left", '267px'],
                ["style", "width", '225px']
            ],
            "${_discountOverlap}": [
                ["style", "left", '276px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"castUpSpeedbit": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '611px', '1400px', '1672px', 'auto', 'auto'],
                    fill: ['rgba(107,244,192,1.00)']
                },
                {
                    id: 'castUpSpeedbit',
                    type: 'image',
                    rect: ['0px', '0px', '1400px', '949px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/castUpSpeedbit.jpg', '0px', '0px']
                },
                {
                    id: 'speedBitFrames',
                    type: 'image',
                    rect: ['0px', '949px', '1400px', '1334px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/speedBitFrames.png', '0px', '0px']
                },
                {
                    font: ['actor, sans-serif', 18, 'rgba(53,100,74,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7',
                    text: 'Download Acceleration is stronger than ever!',
                    align: 'left',
                    rect: ['512px', '870px', '429px', '48px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(53,100,74,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'This 60 seconds promotional video, for Speedbit, had one purpose to it, <br>to let the world know, Download Acceleration is still alive!<br><br>',
                    align: 'left',
                    rect: ['512px', '761px', '687px', '48px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 32, 'rgba(255,255,255,1.00)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7Copy',
                    text: 'CastUP',
                    align: 'left',
                    rect: ['264px', '151px', '429px', '48px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    opacity: 0.8,
                    id: 'Text3Copy',
                    text: 'Brand illustrations and design for CastUp Media',
                    align: 'left',
                    rect: ['266px', '191px', '484px', '48px', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(53,100,74,1)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text8',
                    text: '<br>Storyboard, design and animation were all set to suit this nostalgic topic, <br>with strong graphical shapes and typography. Not only is it alive,',
                    align: 'left',
                    rect: ['512px', '793px', '504px', '38px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.8'],
                ["style", "left", '266px'],
                ["style", "width", '484px'],
                ["style", "top", '191px'],
                ["style", "height", '48px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_castUpSpeedbit}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text3}": [
                ["style", "top", '761px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-size", '16px'],
                ["style", "left", '512px'],
                ["color", "color", 'rgba(53,100,74,1.00)'],
                ["style", "height", '48px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '687px']
            ],
            "${_speedBitFrames}": [
                ["style", "top", '949px'],
                ["style", "left", '0px']
            ],
            "${_Text8}": [
                ["style", "top", '793px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '504px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2283px'],
                ["style", "width", '1400px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(107,244,192,1.00)'],
                ["style", "height", '1672px'],
                ["style", "top", '611px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Text7Copy}": [
                ["style", "top", '151px'],
                ["style", "letter-spacing", '0px'],
                ["style", "width", '429px'],
                ["style", "word-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '264px'],
                ["style", "font-size", '32px']
            ],
            "${_Text7}": [
                ["style", "top", '870px'],
                ["style", "font-size", '18px'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '429px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"buzzillaCircle": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Circle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,108,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Circle1}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(255,255,108,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: true,
            timeline: [
                { id: "eid202", tween: [ "color", "${_Circle1}", "background-color", 'rgba(255,255,191,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,108,1)'}], position: 0, duration: 125, easing: "easeInOutQuad" },
                { id: "eid203", tween: [ "color", "${_Circle1}", "background-color", 'rgba(255,255,108,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,191,1.00)'}], position: 125, duration: 125, easing: "easeInOutQuad" }            ]
        }
    }
},
"menuMe": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['actor, sans-serif', 24, 'rgba(132,132,132,1.00)', '400', 'none', ''],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto'],
                    type: 'text',
                    id: 'Text',
                    text: 'ME',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    transform: []
                },
                {
                    font: ['actor, sans-serif', 24, 'rgba(132,132,132,1.00)', '400', 'none', ''],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto'],
                    type: 'text',
                    id: 'TextCopy3',
                    text: 'ME',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    transform: []
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '-30px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "clip", [30,39,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "clip", [0,39,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1340,
            autoPlay: true,
            timeline: [
                { id: "eid144", tween: [ "style", "${_TextCopy3}", "top", '0px', { fromValue: '-30px'}], position: 1165, duration: 175, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "style", "${_Text}", "top", '30px', { fromValue: '0px'}], position: 1000, duration: 165, easing: "easeInOutQuad" },
                { id: "eid136", tween: [ "style", "${_Text}", "clip", [0,39,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,39,30,0]}], position: 1000, duration: 165, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_TextCopy3}", "clip", [0,39,30,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [30,39,30,0]}], position: 1165, duration: 175, easing: "easeOutQuad" }            ]
        }
    }
},
"Start": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['254px', '52px', '851px', '32px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Hi! I am Yuval Sach. ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 21, 'rgba(234,228,224,1)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['255px', '83px', '884px', '63px', 'auto', 'auto'],
                    id: 'TextCopy4',
                    text: 'I’ve been around designing things for the past twelve years, <br>standing on the meeting point of UX/UI, web and mobile design, animation, illustration and code.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 15, 'rgba(255,255,255,0.75)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['256px', '145px', '847px', '25px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'When you’re done seeing how I sold out to the big corporations, check out the analog section.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 15, 'rgba(255,255,255,0.75)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['256px', '184px', '756px', '25px', 'auto', 'auto'],
                    id: 'TextCopy2',
                    text: 'Anything you need, you can contact me  at ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 15, 'rgba(255,255,255,0.75)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['256px', '207px', '756px', '25px', 'auto', 'auto'],
                    opacity: 0.75,
                    id: 'TextMail',
                    text: 'Yuval.Sach@gmail.com',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,0.75)', '300', 'none', 'normal']
                },
                {
                    type: 'rect',
                    rect: ['247px', '207px', '251px', '25px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'mailBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(46,41,38,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mailBtn}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '207px'],
                ["style", "left", '247px'],
                ["style", "width", '251px']
            ],
            "${_Text}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(234,228,224,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '254px'],
                ["style", "width", '851px'],
                ["style", "top", '52px'],
                ["style", "height", '32px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "font-size", '21px']
            ],
            "${_TextCopy2}": [
                ["style", "line-height", '18px'],
                ["color", "color", 'rgba(255,255,255,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '256px'],
                ["style", "font-size", '15px'],
                ["style", "top", '184px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '756px']
            ],
            "${_TextCopy4}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(255,255,255,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '255px'],
                ["style", "width", '884px'],
                ["style", "top", '83px'],
                ["style", "height", '63px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '15px']
            ],
            "${_TextMail}": [
                ["style", "line-height", '25px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.75)'],
                ["style", "opacity", '0.75'],
                ["style", "left", '256px'],
                ["style", "font-size", '20px'],
                ["style", "top", '207px'],
                ["style", "width", '756px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-weight", '300']
            ],
            "${_TextCopy}": [
                ["style", "line-height", '18px'],
                ["color", "color", 'rgba(255,255,255,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '256px'],
                ["style", "width", '847px'],
                ["style", "top", '145px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '1366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"buzzillaAnimCover": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'buzzillaLoadCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '556px', '334px', 'auto', 'auto'],
                    fill: ['rgba(153,204,51,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '334px'],
                ["style", "width", '556px']
            ],
            "${_buzzillaLoadCopy}": [
                ["color", "background-color", 'rgba(255,8,110,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '334px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '556px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 373,
            autoPlay: true,
            timeline: [
                { id: "eid174", tween: [ "color", "${_buzzillaLoadCopy}", "background-color", 'rgba(153,204,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,8,110,1)'}], position: 0, duration: 12, easing: "easeInOutQuad" },
                { id: "eid171", tween: [ "style", "${_buzzillaLoadCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 17, easing: "easeInOutQuad" },
                { id: "eid169", tween: [ "style", "${_buzzillaLoadCopy}", "opacity", '0', { fromValue: '1'}], position: 17, duration: 356, easing: "easeInOutQuad" }            ]
        }
    }
},
"bottomArrow": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['4px', '1px', '35px', '33px', 'auto', 'auto'],
                    id: 'bottomArrow',
                    text: 'Thanks!',
                    align: 'center',
                    font: ['ubuntu, sans-serif', 22, 'rgba(185,181,178,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bottomArrow}": [
                ["style", "letter-spacing", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(185,181,178,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '4px'],
                ["style", "font-size", '22px'],
                ["style", "top", '1px'],
                ["transform", "scaleY", '1'],
                ["style", "width", '35px'],
                ["style", "height", '33px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 377,
            autoPlay: false,
            timeline: [
                { id: "eid216", tween: [ "style", "${_bottomArrow}", "top", '-9px', { fromValue: '1px'}], position: 0, duration: 377, easing: "easeInOutQuad" }            ]
        }
    }
},
"menuAnalog": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(140,140,140,1.00)', '300', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'ANALOG',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(140,140,140,1.00)', '300', 'none', ''],
                    type: 'text',
                    id: 'TextCopy3',
                    text: 'ANALOG',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "letter-spacing", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(140,140,140,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '-30px'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "clip", [30,100,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "letter-spacing", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(140,140,140,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '0px'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "clip", [0,100,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1340,
            autoPlay: true,
            timeline: [
                { id: "eid144", tween: [ "style", "${_TextCopy3}", "top", '0px', { fromValue: '-30px'}], position: 1165, duration: 175, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_TextCopy3}", "clip", [0,100,30,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [30,100,30,0]}], position: 1165, duration: 175, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "style", "${_Text}", "clip", [0,100,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,30,0]}], position: 1000, duration: 165, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "style", "${_Text}", "top", '30px', { fromValue: '0px'}], position: 1000, duration: 165, easing: "easeInOutQuad" }            ]
        }
    }
},
"MenuSmall": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1400px', '92px', 'auto', 'auto'],
                    boxShadow: ['', 0, 3, 5, 0, 'rgba(0,0,0,0.06)'],
                    id: 'BG2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    transform: [[0, 0], [], [], ['1.364', '1.364']],
                    id: 'menuMe',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['385px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['1.364', '1.364']],
                    id: 'menuAnalog',
                    opacity: 0.5,
                    type: 'rect',
                    rect: ['926px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuDigital',
                    type: 'rect',
                    transform: [[0, 0], [], [], ['1.364', '1.364']],
                    rect: ['642px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 24, 'rgba(177,177,177,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy',
                    text: '|',
                    align: 'left',
                    rect: ['271px', '34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 24, 'rgba(177,177,177,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: '|',
                    align: 'left',
                    rect: ['532px', '34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 24, 'rgba(177,177,177,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy2',
                    text: '|',
                    align: 'left',
                    rect: ['835px', '34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['actor, sans-serif', 24, 'rgba(177,177,177,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3Copy3',
                    text: '|',
                    align: 'left',
                    rect: ['1129px', '34px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['280px', '22px', '244px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'menuMeBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['559px', '22px', '244px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'menuDigitalBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['869px', '22px', '244px', '54px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'menuAnalogBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'menuMe',
                symbolName: 'menuMe'
            },
            {
                id: 'menuAnalog',
                symbolName: 'menuAnalog'
            },
            {
                id: 'menuDigital',
                symbolName: 'menuDigital2'
            }            ]
        },
    states: {
        "Base State": {
            "${_menuMe}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '1.36364'],
                ["transform", "scaleX", '1.36364'],
                ["style", "left", '385px'],
                ["style", "cursor", 'pointer']
            ],
            "${_menuAnalogBtn}": [
                ["style", "top", '22px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '869px'],
                ["style", "width", '244px']
            ],
            "${_menuAnalog}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '1.36364'],
                ["transform", "scaleX", '1.36364'],
                ["style", "opacity", '0.5'],
                ["style", "left", '926px']
            ],
            "${_Text3Copy2}": [
                ["color", "color", 'rgba(177,177,177,1.00)'],
                ["style", "left", '835px'],
                ["style", "top", '34px']
            ],
            "${_Text3Copy3}": [
                ["color", "color", 'rgba(177,177,177,1.00)'],
                ["style", "left", '1129px'],
                ["style", "top", '34px']
            ],
            "${_menuDigital}": [
                ["style", "top", '35px'],
                ["transform", "scaleY", '1.36364'],
                ["style", "left", '642px'],
                ["transform", "scaleX", '1.36364']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(177,177,177,1.00)'],
                ["style", "left", '532px'],
                ["style", "top", '34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '63px'],
                ["style", "width", '1400px']
            ],
            "${_BG2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px'],
                ["style", "top", '0px'],
                ["style", "height", '92px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.06)']
            ],
            "${_menuMeBtn}": [
                ["style", "top", '22px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '280px'],
                ["style", "width", '244px']
            ],
            "${_menuDigitalBtn}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '559px'],
                ["style", "top", '22px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '244px']
            ],
            "${_Text3Copy}": [
                ["color", "color", 'rgba(177,177,177,1.00)'],
                ["style", "left", '271px'],
                ["style", "top", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"menuDigital2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '98px', '22px', 'auto', 'auto'],
                    transform: [],
                    id: 'TextCopy2',
                    text: 'DIGITAL',
                    font: ['actor, sans-serif', 24, 'rgba(132,132,132,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '98px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '0px'],
                ["style", "width", '98px'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(132,132,132,1.00)'],
                ["transform", "scaleX", '1'],
                ["style", "height", '22px'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"menuDigital": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(40,40,40,1.00)', '300', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'DIGITAL',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 24, 'rgba(40,40,40,1.00)', '300', 'none', ''],
                    type: 'text',
                    id: 'TextCopy3',
                    text: 'DIGITAL',
                    clip: ['rect(0px 39pxpx 30pxpx 0px)'],
                    rect: ['0px', '0px', '39px', '30px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "letter-spacing", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(40,40,40,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '-30px'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "clip", [30,100,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "letter-spacing", '1px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(40,40,40,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "width", '39px'],
                ["style", "top", '0px'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '30px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "clip", [0,100,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '35px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1340,
            autoPlay: true,
            timeline: [
                { id: "eid144", tween: [ "style", "${_TextCopy3}", "top", '0px', { fromValue: '-30px'}], position: 1165, duration: 175, easing: "easeInOutQuad" },
                { id: "eid126", tween: [ "style", "${_Text}", "top", '30px', { fromValue: '0px'}], position: 1000, duration: 165, easing: "easeInOutQuad" },
                { id: "eid136", tween: [ "style", "${_Text}", "clip", [0,100,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,30,0]}], position: 1000, duration: 165, easing: "easeInOutQuad" },
                { id: "eid145", tween: [ "style", "${_TextCopy3}", "clip", [0,100,30,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [30,100,30,0]}], position: 1165, duration: 175, easing: "easeOutQuad" }            ]
        }
    }
},
"StartMobile": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '514px', 'auto', 'auto'],
                    fill: ['rgba(46,41,38,0.00)']
                },
                {
                    rect: ['277px', '43px', '851px', '112px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 32, 'rgba(234,228,224,1.00)', 'normal', 'none', 'normal'],
                    id: 'Text',
                    text: 'Hi! I am Yuval Sach. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['280px', '92px', '959px', '63px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 30, 'rgba(185,181,178,1.00)', 'normal', 'none', 'normal'],
                    id: 'TextCopy4',
                    text: 'I’ve been around designing things for the past twelve years, standing on the meeting point of UX/UI, web and mobile design, animation, illustration and code.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['282px', '203px', '860px', '25px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 30, 'rgba(185,181,178,1.00)', 'normal', 'none', 'normal'],
                    id: 'TextCopy',
                    text: 'When you’re done seeing how I sold out to the big corporations, check out the',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['670px', '235px', '552px', '25px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 30, 'rgba(234,228,224,1.00)', 'normal', 'none', 'normal'],
                    id: 'TextCopy5',
                    text: 'analog section.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['282px', '297px', '620px', '25px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 30, 'rgba(185,181,178,1.00)', 'normal', 'none', 'normal'],
                    id: 'TextCopy2',
                    text: 'Anything you need, you can contact me at ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['879px', '297px', '411px', '25px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 30, 'rgba(234,228,224,1.00)', 'normal', 'none', 'normal'],
                    id: 'TextCopy3',
                    text: 'Yuval.Sach@gmail.com',
                    align: 'left',
                    type: 'text'
                },
                {
                    transform: [[0, 0], [], [], ['1.622', '1.8']],
                    rect: ['931px', '294px', '217px', '31px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 1,
                    id: 'mailBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(46,41,38,0.00)']
                },
                {
                    transform: [[0, 0], [], [], ['1.622', '1.8']],
                    rect: ['694px', '235px', '153px', '30px', 'auto', 'auto'],
                    type: 'rect',
                    opacity: 1,
                    id: 'analogBtn',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(46,41,38,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy4}": [
                ["style", "line-height", '32px'],
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(185,181,178,1.00)'],
                ["style", "left", '280px'],
                ["style", "width", '959px'],
                ["style", "top", '92px'],
                ["transform", "skewY", '0deg'],
                ["style", "font-size", '30px'],
                ["style", "height", '63px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["transform", "scaleX", '1']
            ],
            "${_TextCopy3}": [
                ["style", "line-height", '24px'],
                ["color", "color", 'rgba(234,228,224,1.00)'],
                ["style", "left", '879px'],
                ["style", "width", '411px'],
                ["style", "top", '297px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-size", '30px']
            ],
            "${_TextCopy5}": [
                ["style", "line-height", '32px'],
                ["color", "color", 'rgba(234,228,224,1.00)'],
                ["style", "left", '670px'],
                ["style", "width", '552px'],
                ["style", "top", '235px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-size", '30px']
            ],
            "${_mailBtn}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["transform", "scaleX", '1.62151'],
                ["transform", "scaleY", '1.8'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '31px'],
                ["style", "top", '294px'],
                ["style", "left", '931px'],
                ["style", "width", '217px']
            ],
            "${_Text}": [
                ["style", "top", '43px'],
                ["style", "font-size", '32px'],
                ["color", "color", 'rgba(234,228,224,1.00)'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '277px'],
                ["style", "width", '851px']
            ],
            "${_TextCopy2}": [
                ["style", "line-height", '24px'],
                ["color", "color", 'rgba(185,181,178,1.00)'],
                ["style", "left", '282px'],
                ["style", "width", '620px'],
                ["style", "top", '297px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-size", '30px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "height", '514px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_analogBtn}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "height", '30px'],
                ["transform", "scaleY", '1.8'],
                ["style", "left", '694px'],
                ["transform", "scaleX", '1.62151'],
                ["style", "top", '235px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '153px']
            ],
            "${_TextCopy}": [
                ["style", "line-height", '32px'],
                ["color", "color", 'rgba(185,181,178,1.00)'],
                ["style", "left", '282px'],
                ["style", "width", '860px'],
                ["style", "top", '203px'],
                ["style", "font-size", '30px'],
                ["style", "height", '25px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["transform", "scaleX", '1']
            ],
            "${symbolSelector}": [
                ["style", "height", '514px'],
                ["style", "width", '1400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"frames1Frame": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'frames1Frame',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '2715px', 'auto', 'auto'],
                    fill: ['rgba(46,41,38,0.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy6',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '108px', '1400px', '504px', 'auto', 'auto'],
                    fill: ['rgba(6,17,39,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '612px', '1400px', '751px', 'auto', 'auto'],
                    fill: ['rgba(99,232,155,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '1363px', '1400px', '408px', 'auto', 'auto'],
                    fill: ['rgba(250,166,39,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '1771px', '1400px', '499px', 'auto', 'auto'],
                    fill: ['rgba(252,250,244,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '2270px', '1400px', '445px', 'auto', 'auto'],
                    fill: ['rgba(153,204,51,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '108px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy4}": [
                ["style", "top", '1363px'],
                ["style", "height", '408px'],
                ["color", "background-color", 'rgba(250,166,39,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '108px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy6}": [
                ["style", "height", '504px'],
                ["color", "background-color", 'rgba(6,17,39,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(153,204,51,1.00)'],
                ["style", "height", '445px'],
                ["style", "top", '2270px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '1771px'],
                ["style", "height", '499px'],
                ["color", "background-color", 'rgba(252,250,244,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_frames1Frame}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "height", '2715px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3400px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy5}": [
                ["style", "top", '612px'],
                ["style", "height", '751px'],
                ["color", "background-color", 'rgba(99,232,155,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"frames2Frame": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'frames2Frame',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1400px', '4059px', 'auto', 'auto'],
                    fill: ['rgba(46,41,38,0.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '1400px', '841px', 'auto', 'auto'],
                    fill: ['rgba(43,40,87,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '841px', '1402px', '1174px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '2014px', '1400px', '588px', 'auto', 'auto'],
                    fill: ['rgba(185,213,225,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '2602px', '1400px', '640px', 'auto', 'auto'],
                    fill: ['rgba(106,39,110,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '3242px', '1400px', '817px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(185,213,225,1.00)'],
                ["style", "height", '588px'],
                ["style", "top", '2014px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(106,39,110,1.00)'],
                ["style", "height", '640px'],
                ["style", "top", '2602px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4059px'],
                ["style", "width", '1400px']
            ],
            "${_frames2Frame}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "height", '4059px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Rectangle}": [
                ["style", "top", '3242px'],
                ["style", "height", '817px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '841px'],
                ["style", "height", '1174px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1402px']
            ],
            "${_RectangleCopy4}": [
                ["style", "height", '841px'],
                ["color", "background-color", 'rgba(43,40,87,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-601539441");
