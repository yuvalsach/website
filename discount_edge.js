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
                id: 'Discount',
                type: 'rect',
                rect: ['0px', '6212px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Discount',
                symbolName: 'Discount',
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
                ["style", "height", '5100px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Discount}": [
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
                    rect: ['0px', '123px', '1400px', '5160px', 'auto', 'auto'],
                    id: 'Bg',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['276px', '0px', '206px', '123px', 'auto', 'auto'],
                    id: 'discount1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['0px', '123px', '1400px', '898px', 'auto', 'auto'],
                    id: 'discount2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['927px', '195px', '206px', '110px', 'auto', 'auto'],
                    id: 'discount3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['253px', '818px', '964px', '1332px', 'auto', 'auto'],
                    id: 'discount4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['268px', '2263px', '862px', '399px', 'auto', 'auto'],
                    id: 'discount5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    id: 'discountLine',
                    type: 'image',
                    rect: ['83px', '2731px', '1113px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/discountLine.jpg', '0px', '0px']
                },
                {
                    rect: ['695px', '2770px', '435px', '435px', 'auto', 'auto'],
                    id: 'discount6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['261px', '3066px', '435px', '435px', 'auto', 'auto'],
                    id: 'discount7',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['696px', '3239px', '435px', '435px', 'auto', 'auto'],
                    id: 'discount8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['261px', '3533px', '435px', '435px', 'auto', 'auto'],
                    id: 'discount9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['697px', '3729px', '435px', '435px', 'auto', 'auto'],
                    id: 'discount10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['448px', '4304px', '458px', '464px', 'auto', 'auto'],
                    id: 'discount11',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['931px', '350px', '151px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'Text',
                    text: 'Bank Discount,',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['932px', '571px', '151px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy',
                    text: 'So,',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['932px', '375px', '197px', '159px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3',
                    text: ' Israel’s leading banks, wanted to accompany the release of their new mobile application with a list of do and don’ts explaining the importance of safe browsing and how to avoid personal data theft.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['932px', '594px', '206px', '159px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy2',
                    text: 'we decided on creating a serie of short clips presenting the possible risks and the suggested solutions. We decided to represent the “safety risks” as little creatures taking over your computer. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['267px', '731px', '225px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy2',
                    text: 'Character Design it is!',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '758px', '353px', '76px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy4',
                    text: 'Discount wanted the creature to have a \rcharacteristic coming from their well known logo. \rThe graphic smile shape was the way to go!',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['267px', '1384px', '269px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy4',
                    text: '...After a couple of dozens',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['267px', '2176px', '225px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy6',
                    text: 'Final round...',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '1411px', '295px', '76px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy6',
                    text: 'of these quick rough sketches, three of the \rdesigns moved on to the semi final.<br>\rBack to the digital world, vector time.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['267px', '2784px', '225px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy7',
                    text: 'The background',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '2811px', '295px', '76px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy8',
                    text: 'The next stage was to set the background for the scenes. Common screens such as Window’s login screen, A microsoft Excel sheet, Google’s home page and other day to day screens were set to be the \rbackground for our mischievous creatures.<br><br>\r\rHere are a few shots of the monsters\rnot so blending in the sets.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['426px', '4129px', '225px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy8',
                    text: 'Animating!',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '4129px', '295px', '76px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy9',
                    text: 'finally, the best part,<br>Here’s a squick walk cycle test of the early figure sketch.<br><br>Awefully jolly this one...',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['267px', '4920px', '29px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(37,127,75,1.00)', '300', 'none', 'normal'],
                    id: 'TextCopy9',
                    text: 'Ok,',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['300px', '4922px', '295px', '14px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy10',
                    text: 'Been talking too much.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '4944px', '295px', '14px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy11',
                    text: 'Here are sneak peaks of various projects I have worked on for the past few years.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['268px', '1841px', '211px', '76px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy7',
                    text: 'Something about this design seemed to be working best. Maybe it was the length of the legs, which gave the figure a light and dynamic feel. The smile, which was the base of it all, popped out exactly how Discount wanted it to.<br><br>\r\rBut the limbs, ahhh, were too insect like, and that toaster shaped head needed some \rtweaking as well, so, on to the',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['962px', '574px', '197px', '18px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy3',
                    text: 'instead of a boring list',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['1066px', '354px', '69px', '32px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 14, 'rgba(37,127,75,1)', '300', 'none', 'normal'],
                    id: 'Text3Copy',
                    text: 'one of',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_discountLine}": [
                ["style", "left", '83px'],
                ["style", "top", '2731px']
            ],
            "${_TextCopy9}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '29px'],
                ["style", "top", '4920px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${_Text3Copy}": [
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '1066px'],
                ["style", "width", '69px'],
                ["style", "top", '354px'],
                ["style", "height", '32px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_discount3}": [
                ["style", "top", '195px'],
                ["style", "height", '110px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '927px'],
                ["style", "width", '206px']
            ],
            "${_Text3Copy3}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '962px'],
                ["style", "font-size", '14px'],
                ["style", "top", '574px'],
                ["style", "height", '18px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '197px']
            ],
            "${_Text3Copy7}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px'],
                ["style", "top", '1841px'],
                ["style", "height", '76px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '211px']
            ],
            "${_TextCopy4}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "font-size", '18px'],
                ["style", "top", '1384px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '269px']
            ],
            "${_Text3Copy6}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "width", '295px'],
                ["style", "top", '1411px'],
                ["style", "height", '76px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_TextCopy8}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '426px'],
                ["style", "font-size", '18px'],
                ["style", "top", '4129px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '225px']
            ],
            "${_TextCopy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '932px'],
                ["style", "font-size", '18px'],
                ["style", "top", '571px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '151px']
            ],
            "${_discount10}": [
                ["style", "top", '3729px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '697px'],
                ["style", "width", '435px']
            ],
            "${_Text3Copy8}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px'],
                ["style", "top", '2811px'],
                ["style", "height", '76px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '295px']
            ],
            "${_Bg}": [
                ["style", "top", '123px'],
                ["style", "height", '5160px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_Text3}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '932px'],
                ["style", "font-size", '14px'],
                ["style", "top", '375px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '197px']
            ],
            "${_discount7}": [
                ["style", "top", '3066px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '261px'],
                ["style", "width", '435px']
            ],
            "${_discount1}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["style", "left", '276px'],
                ["style", "width", '206px']
            ],
            "${_Text3Copy11}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "width", '295px'],
                ["style", "top", '4944px'],
                ["style", "height", '14px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_Text3Copy9}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "width", '295px'],
                ["style", "top", '4129px'],
                ["style", "height", '76px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_discount5}": [
                ["style", "top", '2263px'],
                ["style", "height", '399px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '268px'],
                ["style", "width", '862px']
            ],
            "${_discount11}": [
                ["style", "top", '4304px'],
                ["style", "height", '464px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '448px'],
                ["style", "width", '458px']
            ],
            "${_Text3Copy4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px'],
                ["style", "top", '758px'],
                ["style", "height", '76px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '353px']
            ],
            "${_TextCopy7}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '225px'],
                ["style", "top", '2784px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${_discount8}": [
                ["style", "top", '3239px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '696px'],
                ["style", "width", '435px']
            ],
            "${_Text3Copy2}": [
                ["style", "line-height", '20px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '932px'],
                ["style", "width", '206px'],
                ["style", "top", '594px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '14px']
            ],
            "${_discount9}": [
                ["style", "top", '3533px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '261px'],
                ["style", "width", '435px']
            ],
            "${_Text3Copy10}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "left", '300px'],
                ["style", "font-size", '14px'],
                ["style", "top", '4922px'],
                ["style", "height", '14px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '295px']
            ],
            "${_TextCopy2}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '225px'],
                ["style", "top", '731px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${_discount6}": [
                ["style", "top", '2770px'],
                ["style", "height", '435px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '695px'],
                ["style", "width", '435px']
            ],
            "${_Text}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '931px'],
                ["style", "width", '151px'],
                ["style", "top", '350px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5000px'],
                ["style", "width", '1400px']
            ],
            "${_discount4}": [
                ["style", "top", '818px'],
                ["style", "height", '1332px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '253px'],
                ["style", "width", '964px']
            ],
            "${_TextCopy6}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(37,127,75,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '225px'],
                ["style", "top", '2176px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '18px']
            ],
            "${_discount2}": [
                ["style", "top", '123px'],
                ["style", "height", '898px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
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
})(jQuery, AdobeEdge, "EDGE-13316667");
