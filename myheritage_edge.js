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
                id: 'MyHeritage',
                type: 'rect',
                rect: ['-2px', '524px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'MyHeritage',
                symbolName: 'MyHeritage',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3013px'],
                ["style", "width", '1366px']
            ],
            "${_MyHeritage}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_darioPhones}": [
                ["style", "left", ''],
                ["style", "top", '']
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
                { id: "eid11", tween: [ "style", "${_MyHeritage}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"MyHeritage": {
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
                    rect: ['0px', '0px', '1366px', '3010px', 'auto', 'auto'],
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(237,230,215,1.00)']
                },
                {
                    id: 'myHeritageTablet',
                    type: 'image',
                    rect: ['441px', '1908px', '492px', '730px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/myHeritageTablet.jpg', '0px', '0px']
                },
                {
                    id: 'myHeritageSnippet',
                    type: 'image',
                    rect: ['258', '2053px', '189px', '186px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/myHeritageSnippet.jpg', '0px', '0px']
                },
                {
                    id: 'MyHeritageTop',
                    type: 'image',
                    rect: ['0px', '0px', '1366px', '1725px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MyHeritageTop.jpg', '0px', '0px']
                },
                {
                    font: ['ubuntu, sans-serif', 20, 'rgba(0,0,0,0.60)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'UX/UI revamp of MyHeritage\'s <br>web &amp; client products',
                    align: 'left',
                    rect: ['254px', '207px', '365px', '77px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(0,0,0,0.75)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5',
                    text: 'For the past year I have been working as the lead product designer on re-building the company’s web and client products, making geneology reachable, interactive, part of the 21st century...<br><br>',
                    align: 'left',
                    rect: ['257px', '862px', '545px', '86px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(0,0,0,0.75)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5Copy4',
                    text: 'MyHeritage, a leading israeli start-up, has made it’s vision to make it easier for people around the world to use the power of the Internet to discover their heritage and strengthen their bonds with family and friends. ',
                    align: 'left',
                    rect: ['258px', '740px', '482px', '86px', 'auto', 'auto']
                },
                {
                    font: ['ubuntu, sans-serif', 16, 'rgba(0,0,0,0.75)', '300', 'none', 'normal'],
                    type: 'text',
                    id: 'Text5Copy8',
                    text: 'Unfortunately, these are only a few snippets, since most of the work is confidential and in progress, as we keep on exploring and experimenting...',
                    align: 'center',
                    rect: ['464px', '2670px', '440px', '86px', 'auto', 'auto']
                },
                {
                    id: 'MyHeritageTreeAnimation',
                    type: 'image',
                    rect: ['218px', '310px', '312px', '312px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/MyHeritageTreeAnimation.gif', '0px', '0px']
                },
                {
                    id: 'myHeritageTreeCover',
                    type: 'image',
                    rect: ['211px', '307px', '325px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/myHeritageTreeCover.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Bg}": [
                ["style", "top", '0px'],
                ["style", "height", '3010px'],
                ["color", "background-color", 'rgba(237,230,215,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_myHeritageSnippet}": [
                ["style", "top", '2053px']
            ],
            "${_MyHeritageTop}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5Copy8}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.749)'],
                ["style", "font-weight", '300'],
                ["style", "left", '464px'],
                ["style", "width", '440px'],
                ["style", "top", '2670px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_myHeritageTreeCover}": [
                ["style", "top", '307px'],
                ["style", "left", '211px']
            ],
            "${_Text4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.60)'],
                ["style", "font-weight", '300'],
                ["style", "left", '254px'],
                ["style", "font-size", '20px'],
                ["style", "top", '207px'],
                ["style", "font-style", 'normal'],
                ["style", "text-decoration", 'none'],
                ["style", "text-indent", '0px'],
                ["style", "height", '77px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '365px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3013px'],
                ["style", "width", '1366px']
            ],
            "${_Text5}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '257px'],
                ["style", "width", '545px'],
                ["style", "top", '862px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_myHeritageTablet}": [
                ["style", "left", '441px'],
                ["style", "top", '1908px']
            ],
            "${_Text5Copy4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.749)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '482px'],
                ["style", "top", '740px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_MyHeritageTreeAnimation}": [
                ["style", "left", '218px'],
                ["style", "top", '310px']
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
})(jQuery, AdobeEdge, "EDGE-12703497");
