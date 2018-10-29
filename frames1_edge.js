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
                id: 'castUpSpeedbit',
                type: 'rect',
                rect: ['0px', '11237px','auto','auto','auto', 'auto']
            },
            {
                id: 'Buzzilla',
                type: 'rect',
                rect: ['0px', '13507px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Buzzilla',
                symbolName: 'Buzzilla',
                autoPlay: {

                }
            },
            {
                id: 'castUpSpeedbit',
                symbolName: 'castUpSpeedbit',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '1400px'],
                ["style", "height", '2850px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Buzzilla}": [
                ["style", "left", '0px'],
                ["style", "top", '2270px']
            ],
            "${_castUpSpeedbit}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                    rect: ['0px', '0px', '556px', '334px', 'auto', 'auto'],
                    id: 'buzzillaLoadCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(153,204,51,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_buzzillaLoadCopy}": [
                ["color", "background-color", 'rgba(255,8,110,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '334px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '556px']
            ],
            "${symbolSelector}": [
                ["style", "height", '334px'],
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
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,1)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'Animated a 60 seconds promotional \rvideo explaning Buzzilla’s brand \rmonitoring, social media analysis \rand research.',
                    align: 'left',
                    rect: ['281px', '173px', '250px', '124px', 'auto', 'auto']
                },
                {
                    id: 'buzzillaLogo',
                    type: 'image',
                    rect: ['275px', '59px', '157px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buzzillaLogo.png', '0px', '0px']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,1)', '300', 'none', 'normal'],
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
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,1)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'PLAY THE SAMPLES!',
                    align: 'left',
                    rect: ['281px', '300px', '271px', '30px', 'auto', 'auto']
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
                symbolName: 'buzzillaCircle',
                autoPlay: {

               }
            },
            {
                id: 'buzzillaCircle2',
                symbolName: 'buzzillaCircle',
                autoPlay: {

               }
            },
            {
                id: 'buzzillaCircle1',
                symbolName: 'buzzillaCircle',
                autoPlay: {

               }
            },
            {
                id: 'buzzillaAnimCover',
                symbolName: 'buzzillaAnimCover',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '562px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_buzzillaBtn3}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '333px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '341px']
            ],
            "${_Text3}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", '300'],
                ["style", "left", '281px'],
                ["style", "width", '230px'],
                ["style", "top", '109px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '45px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5}": [
                ["style", "top", '300px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '281px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '20px']
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
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '333px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '311px']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(153,204,51,1.00)'],
                ["style", "height", '445px'],
                ["style", "top", '0px'],
                ["style", "left", '-2000px'],
                ["style", "width", '5500px']
            ],
            "${_buzzillaCircle1}": [
                ["style", "top", '333px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '281px']
            ],
            "${_buzzillaArrow}": [
                ["style", "left", '492px'],
                ["style", "top", '262px']
            ],
            "${_Text4}": [
                ["style", "top", '173px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "left", '281px'],
                ["style", "width", '250px']
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
                { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaCircle2}', [] ], ""], position: 0 },
                { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaCircle3}', [] ], ""], position: 0 },
                { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_buzzillaAnimCover}', [] ], ""], position: 0 }            ]
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
"Comverse": {
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
                    rect: ['0px', '0px', '1400px', '906px', 'auto', 'auto'],
                    id: 'Bg',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'comverseContent2',
                    type: 'image',
                    rect: ['0', '206px', '1400px', '700px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/comverseContent.jpg', '0px', '0px']
                },
                {
                    id: 'comverseLogo',
                    type: 'image',
                    rect: ['268px', '118px', '206px', '73px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/comverseLogo.jpg', '0px', '0px']
                },
                {
                    font: ['actor, sans-serif', 16, 'rgba(122,122,122,1.00)', 'normal', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Design and animation for<br>Comverse\'s Handset division',
                    align: 'left',
                    rect: ['271px', '203px', '243px', '63px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_comverseContent2}": [
                ["style", "top", '206px']
            ],
            "${_Text}": [
                ["style", "top", '203px'],
                ["style", "line-height", '19px'],
                ["style", "left", '271px'],
                ["color", "color", 'rgba(122,122,122,1.00)']
            ],
            "${_Bg}": [
                ["style", "top", '0px'],
                ["style", "height", '906px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_comverseLogo}": [
                ["style", "left", '268px'],
                ["style", "top", '118px']
            ],
            "${symbolSelector}": [
                ["style", "height", '906px'],
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
                    id: 'speedBitFrames2',
                    type: 'image',
                    rect: ['0', '949px', '1400px', '1334px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/speedBitFrames.jpg', '0px', '0px']
                },
                {
                    font: ['ubuntu, sans-serif', 18, 'rgba(53,100,74,1)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7',
                    text: 'Download Acceleration is stronger than ever!',
                    align: 'left',
                    rect: ['512px', '869px', '429px', '48px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(53,100,74,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'This 60 seconds promotional video, for Speedbit, had one purpose to it, <br>to let the world know, Download Acceleration is still alive!<br><br>',
                    align: 'left',
                    rect: ['512px', '759px', '687px', '48px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 32, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text7Copy',
                    text: 'CastUP',
                    align: 'left',
                    rect: ['264px', '151px', '429px', '48px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    text: 'Brand illustrations and design for CastUp Media',
                    id: 'Text3Copy',
                    opacity: 0.8,
                    align: 'left',
                    rect: ['266px', '191px', '484px', '48px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(53,100,74,1)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text8',
                    text: '<br>Storyboard, design and animation were all set to suit this nostalgic topic, with strong graphical shapes and typography. Not only is it alive,',
                    align: 'left',
                    rect: ['512px', '787px', '504px', '38px', 'auto', 'auto']
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
                ["style", "font-weight", '300'],
                ["style", "height", '48px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_castUpSpeedbit}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text3}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(53,100,74,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '512px'],
                ["style", "font-size", '16px'],
                ["style", "top", '759px'],
                ["style", "height", '48px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '687px']
            ],
            "${_Text8}": [
                ["style", "top", '787px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '504px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2283px'],
                ["style", "width", '1400px']
            ],
            "${_Text7}": [
                ["style", "top", '869px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "width", '429px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(107,244,192,1.00)'],
                ["style", "height", '1672px'],
                ["style", "top", '611px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Text7Copy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '264px'],
                ["style", "width", '429px'],
                ["style", "top", '151px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '32px']
            ],
            "${_speedBitFrames2}": [
                ["style", "top", '949px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13581645");
