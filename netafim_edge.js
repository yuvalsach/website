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
                id: 'Netafim',
                type: 'rect',
                rect: ['0px', '3203px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Netafim',
                symbolName: 'Netafim',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3204px'],
                ["style", "width", '1400px']
            ],
            "${_Netafim}": [
                ["style", "left", '0px'],
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
                    rect: ['0px', '-1px', '1400px', '3132px', 'auto', 'auto'],
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,1.00)']
                },
                {
                    rect: ['0px', '2190px', '1400px', '942px', 'auto', 'auto'],
                    id: 'netafim7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    id: 'netafimLoop2',
                    type: 'rect',
                    rect: ['481px', '2666px', 'auto', 'auto', 'auto', 'auto']
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
                    rect: ['277px', '1756px', '832px', '434px', 'auto', 'auto'],
                    id: 'netafim5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    rect: ['258px', '965px', '871px', '306px', 'auto', 'auto'],
                    id: 'netafim4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    rect: ['0px', '0px', '1400px', '435px', 'auto', 'auto'],
                    id: 'netafim3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    rect: ['134px', '110px', '1227px', '403px', 'auto', 'auto'],
                    id: 'netafim2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    rect: ['239px', '127px', '171px', '45px', 'auto', 'auto'],
                    id: 'netafim1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(123,167,211,0.00)']
                },
                {
                    type: 'text',
                    rect: ['268px', '528px', '335px', '34px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Netafim, world innovators in the agricultural field, wanted to create a site telling their unique story.<br><br>The company, formed in 1965, has grown to be the global leader in smart drip and micro-irrigation solutions.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['269px', '842px', '335px', '34px', 'auto', 'auto'],
                    id: 'TextCopy7',
                    text: 'As a company that actually does make this world a better and greener place, a rich and colourful globe was a perfect match. ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['337px', '1278px', '159px', '34px', 'auto', 'auto'],
                    id: 'TextCopy9',
                    text: 'Sketch the world...',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['584px', '1559px', '467px', '34px', 'auto', 'auto'],
                    id: 'TextCopy13',
                    text: 'The subsidiaries page was another excellent place to emphasize Netafim’s goal to help the world grow more with less. Implementing the site’s organic feel alongside that message, created the visual display of netafim’s worldwide subsidiaires.<br>Even a generic component such as the common worldwide map got it’s own special care. ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['967px', '2240px', '137px', '34px', 'auto', 'auto'],
                    id: 'TextCopy14',
                    text: 'Here is the <br>full frame globe',
                    align: 'center',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['624px', '1278px', '159px', '34px', 'auto', 'auto'],
                    id: 'TextCopy10',
                    text: 'Plant some grass...',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['871px', '1278px', '236px', '34px', 'auto', 'auto'],
                    id: 'TextCopy11',
                    text: 'Plant flowers, and other crops, install water sprinklers, build a house and a turbine, discover a lake and live happily ever after...',
                    align: 'center',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['712px', '842px', '335px', '34px', 'auto', 'auto'],
                    id: 'TextCopy8',
                    text: 'Each element was made with it’s own fitting \rtechnique. Some were made using imagery and blending them in, some were basic painting. ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['712px', '526px', '408px', '35px', 'auto', 'auto'],
                    id: 'TextCopy',
                    text: 'As such, the purpose was to present the company’s legacy, pay tribute to the people of Netafim, and show Netafim’s influence on world agriculture. <br><br>\r\rEarly on, it was decided the site should have a\rstrong organic feel to it. Fields, crops, \rgreenhouses and basically everything green.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', [1, 'em'], 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['270px', '165px', '326px', '35px', 'auto', 'auto'],
                    align: 'left',
                    id: 'TextCopy2',
                    text: 'Promotional Illustrations and design for Netafim\'s legacy website',
                    opacity: 0.9,
                    font: ['ubuntu, sans-serif', 18, 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['268px', '809px', '195px', '35px', 'auto', 'auto'],
                    id: 'TextCopy5',
                    text: 'The making of ',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 28, 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['269px', '1559px', '272px', '35px', 'auto', 'auto'],
                    id: 'TextCopy12',
                    text: 'Map of world crops',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 28, 'rgba(255,255,255,0.95)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['467px', '809px', '195px', '35px', 'auto', 'auto'],
                    id: 'TextCopy6',
                    text: 'The Globe',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 28, 'rgba(255,255,255,0.95)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['282px', '227px', '220px', '35px', 'auto', 'auto'],
                    id: 'TextCopy3',
                    text: 'www.netafimlegacy.com',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 18, 'rgba(211,231,242,1.00)', '300', 'underline', 'normal']
                },
                {
                    rect: ['269px', '224px', '237px', '34px', 'auto', 'auto'],
                    type: 'rect',
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
                    font: ['ubuntu, sans-serif', 10, 'rgba(211,231,242,1.00)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            {
                id: 'netafimLoop2',
                symbolName: 'netafimLoop',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_TextCopy14}": [
                ["style", "line-height", '148%'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '967px'],
                ["style", "font-size", '1em'],
                ["style", "top", '2240px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '137px']
            ],
            "${_TextCopy13}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '584px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1559px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '467px']
            ],
            "${_Bg}": [
                ["color", "background-color", 'rgba(123,167,211,1.00)'],
                ["style", "height", '3132px'],
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_netafim3}": [
                ["style", "top", '0px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_netafimLine}": [
                ["style", "top", '719px'],
                ["style", "left", '23px']
            ],
            "${_netafim5}": [
                ["style", "top", '1756px'],
                ["style", "height", '434px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '277px'],
                ["style", "width", '832px']
            ],
            "${_TextCopy2}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '270px'],
                ["style", "font-size", '18px'],
                ["style", "top", '165px'],
                ["style", "opacity", '0.9'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '326px']
            ],
            "${_TextCopy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '712px'],
                ["style", "font-size", '1em'],
                ["style", "top", '526px'],
                ["style", "text-indent", '0%'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '408px']
            ],
            "${_TextCopy10}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '624px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1278px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '159px']
            ],
            "${_netafim7}": [
                ["style", "top", '2190px'],
                ["style", "height", '942px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
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
                ["style", "width", '30px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "text-decoration", 'none']
            ],
            "${_netafimLoop2}": [
                ["style", "top", '2619px'],
                ["transform", "scaleY", '0.99525'],
                ["style", "left", '482px'],
                ["transform", "scaleX", '0.99525']
            ],
            "${_TextCopy9}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '337px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1278px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '159px']
            ],
            "${_TextCopy5}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "font-size", '28px'],
                ["style", "top", '809px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '195px']
            ],
            "${_TextCopy12}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '269px'],
                ["style", "font-size", '28px'],
                ["style", "top", '1559px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '272px']
            ],
            "${_netafim4}": [
                ["style", "top", '965px'],
                ["style", "height", '306px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '258px'],
                ["style", "width", '871px']
            ],
            "${_netafimLineCopy}": [
                ["style", "top", '1463px'],
                ["style", "left", '23px']
            ],
            "${_netafim1}": [
                ["style", "top", '127px'],
                ["style", "height", '45px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '239px'],
                ["style", "width", '171px']
            ],
            "${_TextCopy3}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(211,231,242,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '282px'],
                ["style", "font-size", '18px'],
                ["style", "top", '227px'],
                ["style", "word-spacing", '1px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "text-decoration", 'underline'],
                ["style", "width", '220px']
            ],
            "${_TextCopy8}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '712px'],
                ["style", "font-size", '1em'],
                ["style", "top", '842px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px']
            ],
            "${_Text}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "font-size", '1em'],
                ["style", "top", '528px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px']
            ],
            "${_TextCopy11}": [
                ["style", "line-height", '130%'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '871px'],
                ["style", "font-size", '1em'],
                ["style", "top", '1278px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '236px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3204px'],
                ["style", "width", '1400px']
            ],
            "${_netafim2}": [
                ["style", "top", '110px'],
                ["style", "height", '403px'],
                ["color", "background-color", 'rgba(123,167,211,0.00)'],
                ["style", "left", '134px'],
                ["style", "width", '1227px']
            ],
            "${_TextCopy7}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '300'],
                ["style", "left", '269px'],
                ["style", "font-size", '1em'],
                ["style", "top", '842px'],
                ["style", "text-indent", '0%'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px']
            ],
            "${_TextCopy6}": [
                ["style", "line-height", '24px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.95)'],
                ["style", "font-weight", '500'],
                ["style", "left", '467px'],
                ["style", "font-size", '28px'],
                ["style", "top", '809px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '35px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '195px']
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
                { id: "eid18", tween: [ "transform", "${_netafimLoop2}", "scaleX", '0.99525', { fromValue: '0.99525'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "transform", "${_netafimLoop2}", "scaleY", '0.99525', { fromValue: '0.99525'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_netafimLoop2}", "top", '2619px', { fromValue: '2619px'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_netafimLoop2}", "left", '482px', { fromValue: '482px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-13121668");
