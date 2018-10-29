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
                id: 'Weavee',
                type: 'rect',
                rect: ['-2px', '524px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Weavee',
                symbolName: 'Weavee',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "width", '1366px'],
                ["style", "height", '4012px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Weavee}": [
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
                { id: "eid11", tween: [ "style", "${_Weavee}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Weavee": {
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
                    id: 'weavee',
                    type: 'image',
                    rect: ['0px', '777px', '1366px', '3235px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/weavee.jpg', '0px', '0px']
                },
                {
                    rect: ['435px', '229px', '270px', '77px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text4',
                    text: 'UX/UI, branding, icons design and animations for weavee\'s storytelling app.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['276px', '438px', '333px', '86px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5',
                    text: 'One of our experiments at MyHeritage is weavee, a storytelling app that lets you easily capture memories and share them with your family. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['276px', '538px', '322px', '86px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy2',
                    text: 'Thousands of amazing family photos,  videos and documents are uploaded by MyHeritage users on a daily basis.<br>An old census record, a forgotten letter, a photo from a recent vacation.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['276px', '659px', '322px', '46px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy4',
                    text: 'We just had to do something with all this incredible content... ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['260px', '1415px', '322px', '102px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy11',
                    text: 'Excited by the richness of our user’s <br>content, we decided to create a platform allowing users to easily turn those family moments into a digital postcard they can share and preserve.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['260px', '1534px', '338px', '23px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy8',
                    text: 'All it takes is 3 simple steps:',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['259px', '1562px', '338px', '23px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,0.75)', '400', 'none', 'normal'],
                    id: 'Text5Copy9',
                    text: 'Capture, Edit and Share.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['261px', '2436px', '255px', '23px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,0.75)', '400', 'none', 'normal'],
                    id: 'Text5Copy10',
                    text: 'Edit',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['283px', '2473px', '370px', '156px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy15',
                    text: 'Select your favorite photos and videos<br><br>Arrange  an interesting layout<br><br>Come up with a story title<br><br>Write it down...',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['893px', '2889px', '255px', '23px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,0.75)', '400', 'none', 'normal'],
                    id: 'Text5Copy13',
                    text: 'Wrapping it up',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['894px', '2923px', '322px', '84px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy12',
                    text: 'With the brand starting to evlove, we decided to give each story it’s own matching color, creating a colorful weave of the user’s moments.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['259px', '3511px', '255px', '23px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(255,255,255,0.75)', '400', 'none', 'normal'],
                    id: 'Text5Copy22',
                    text: 'Share the love',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['259px', '3543px', '424px', '146px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy21',
                    text: 'The story is now ready to be shared with family <br>and friends. Users can add likes and comments <br>to the story and share it on all platforms. <br>A discussion is being emerged, an opportunity <br>to hear different angles of the same moment.<br><br>This is the moment, when the story comes to life...  <br><br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['894px', '3013px', '322px', '67px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy14',
                    text: 'We wanted to keep the simplicity <br>of the edit screen, yet give each <br>story it’s own special feel. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['894px', '3084px', '322px', '67px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(255,255,255,0.70)', '300', 'none', 'normal'],
                    id: 'Text5Copy20',
                    text: 'Using a color sampler algorithm, <br>we pick the most dominant color in the selected photos, and use it to create a unique and elegant digital postcard.',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'weaveeTop',
                    type: 'image',
                    rect: ['258px', '10px', '1118px', '773px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/weaveeTop.png', '0px', '0px']
                },
                {
                    id: 'weaveeIntro',
                    type: 'image',
                    rect: ['753px', '78px', '300px', '400px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/weaveeIntro.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5Copy11}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '260px'],
                ["style", "width", '322px'],
                ["style", "top", '1415px'],
                ["style", "font-size", '16px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '102px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy15}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '283px'],
                ["style", "width", '370px'],
                ["style", "top", '2473px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '156px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy2}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '276px'],
                ["style", "width", '322px'],
                ["style", "top", '538px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy9}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.75)'],
                ["style", "font-weight", '400'],
                ["style", "left", '259px'],
                ["style", "width", '338px'],
                ["style", "top", '1562px'],
                ["style", "font-size", '20px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy20}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '894px'],
                ["style", "width", '322px'],
                ["style", "top", '3084px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '67px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '276px'],
                ["style", "width", '333px'],
                ["style", "top", '438px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy12}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '894px'],
                ["style", "width", '322px'],
                ["style", "top", '2923px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '84px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4012px'],
                ["style", "width", '1366px']
            ],
            "${_Text5Copy22}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.749)'],
                ["style", "font-weight", '400'],
                ["style", "left", '259px'],
                ["style", "width", '255px'],
                ["style", "top", '3511px'],
                ["transform", "scaleX", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Text4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '435px'],
                ["style", "font-size", '18px'],
                ["style", "top", '229px'],
                ["style", "width", '270px'],
                ["style", "word-spacing", '1px'],
                ["style", "text-indent", '0px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "height", '77px']
            ],
            "${_weaveeIntro}": [
                ["style", "left", '753px'],
                ["style", "top", '78px']
            ],
            "${_Text5Copy8}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1.8px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '260px'],
                ["style", "width", '338px'],
                ["style", "top", '1534px'],
                ["transform", "scaleX", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_weavee}": [
                ["style", "top", '777px'],
                ["style", "left", '0px'],
                ["style", "height", '3235px']
            ],
            "${_Text5Copy21}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '259px'],
                ["style", "width", '424px'],
                ["style", "top", '3543px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '146px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy10}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.749)'],
                ["style", "font-weight", '400'],
                ["style", "left", '261px'],
                ["style", "width", '255px'],
                ["style", "top", '2436px'],
                ["transform", "scaleX", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '20px']
            ],
            "${_weaveeTop}": [
                ["style", "top", '10px'],
                ["style", "height", '773px'],
                ["style", "left", '258px'],
                ["style", "width", '1118px']
            ],
            "${_Text5Copy14}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '894px'],
                ["style", "width", '322px'],
                ["style", "top", '3013px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '67px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy13}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.749)'],
                ["style", "font-weight", '400'],
                ["style", "left", '893px'],
                ["style", "width", '255px'],
                ["style", "top", '2889px'],
                ["style", "font-size", '20px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '23px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy4}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,0.70)'],
                ["style", "font-weight", '300'],
                ["style", "left", '276px'],
                ["style", "width", '322px'],
                ["style", "top", '659px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '46px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4Copy}": [
                ["style", "line-height", 'normal'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.6)'],
                ["style", "font-weight", '300'],
                ["style", "left", '254px'],
                ["style", "font-size", '18px'],
                ["style", "top", '296px'],
                ["style", "width", '309px'],
                ["style", "word-spacing", '1px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '77px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "font-style", 'normal']
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
