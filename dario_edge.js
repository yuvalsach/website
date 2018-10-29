/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['actor, sans-serif']='<script src=\"http://use.edgefonts.net/actor:n4:all.js\"></script>';
    fonts['ubuntu, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu:n4,i4,n7,i7,n3,i3,n5,i5:all.js\"></script>';

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
                id: 'Dario',
                type: 'rect',
                rect: ['-2px', '524px','auto','auto','auto', 'auto']
            },
            {
                id: 'dariodemo',
                type: 'image',
                rect: ['232px', '2694px','400px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dariodemo.gif",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'Dario',
                symbolName: 'Dario',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_dariodemo}": [
                ["style", "left", '232px'],
                ["style", "top", '2694px']
            ],
            "${_darioPhones}": [
                ["style", "left", ''],
                ["style", "top", '']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(46,41,38,0.00)'],
                ["style", "width", '1366px'],
                ["style", "height", '4390px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Dario}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
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
                { id: "eid11", tween: [ "style", "${_Dario}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Dario": {
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
                    rect: ['0px', '95px', '1366px', '4241px', 'auto', 'auto'],
                    transform: [[], [], [], ['1', '1.02518']],
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(240,240,240,1.00)']
                },
                {
                    id: 'darioFrame',
                    type: 'image',
                    rect: ['0px', '41px', '1366px', '4352px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/darioFrame.jpg', '0px', '0px']
                },
                {
                    rect: ['254px', '296px', '309px', '77px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 18, 'rgba(0,0,0,0.60)', '300', 'none', 'normal'],
                    id: 'Text4',
                    text: 'UX/UI, icons design and animations for Dario\'s diabetes managment system.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['258px', '1387px', '288px', '27px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy',
                    text: 'Data Entry',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['256px', '2025px', '195px', '27px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(86,95,103,0.75)', '300', 'none', 'normal'],
                    id: 'Text5Copy5',
                    text: 'Carbs',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['374px', '2025px', '195px', '27px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(86,95,103,0.75)', '300', 'none', 'normal'],
                    id: 'Text5Copy6',
                    text: 'Insulin',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['563px', '2025px', '195px', '27px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 20, 'rgba(86,95,103,0.75)', '300', 'none', 'normal'],
                    id: 'Text5Copy7',
                    text: 'Calories',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['258px', '1064px', '482px', '86px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5',
                    text: 'Dario     is a state-of-the-art diabetes management platform that connects the user, caregiver and healthcare professional anywhere in the world. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['258px', '1157px', '482px', '86px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy3',
                    text: 'The goal of the product was to create an easy and accessible  way to measure glucose levels, while collecting the data and using it to gain insights regarding the patient’s reactions to changing conditions.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['258px', '1422px', '241px', '182px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy11',
                    text: 'Whether entering the data manually or automatically (using Dario’s glucometer), speed of measurement is highly important, leading us to build an experience in which the user can enter his data in a matter of seconds. <br>',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['803px', '1867px', '354px', '80px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy13',
                    text: 'Carbs, insulin and calories are extermely important to analyze and better understand the specific nature of the disease. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['803px', '1958px', '354px', '80px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy14',
                    text: 'Allowing the user to add his meals, physical activity, injected insulin units, and even his mood, makes it easier to recognize patterns and alert the user when needed.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['251px', '2145px', '354px', '211px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy15',
                    text: 'Manually entering this data on a daily basis is exhausting. That’s why we created a huge database of food and activities which the user can pick from (which will automatically calculate carbs and calorific values), create combos, and even add new and custom ones. Furthermore, the user can sync his data from other physical activity apps, such as Nike+, RunKeeper, and many more.<br> ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['255px', '3052px', '363px', '100px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy16',
                    text: 'The importance of the statistics and<br>measurements made it clear that large and <br>bold numeric typograpy will be the visual center of the entire app. ',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['255px', '3159px', '363px', '100px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy17',
                    text: 'Using a dominant, saturated, three colored palette (representing the three blood <br>glucose levels) adds the abillity to quickly understand current status, and easily read the highly detailed charts and trends.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['313px', '4150px', '740px', '75px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy18',
                    text: 'Users can access their data everywhere, and follow the behaviour of the disease <br>through different visualization methods. Data is always in sync between platforms, <br>giving physicians and caregivers the ability to stay up to date with the progress made. ',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['346px', '4237px', '686px', '37px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy19',
                    text: 'Real time, easily accessible information, all waiting at the user’s fingertips.',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['258px', '1629px', '220px', '77px', 'auto', 'auto'],
                    font: ['ubuntu, sans-serif', 16, 'rgba(86,95,103,1.00)', '300', 'none', 'normal'],
                    id: 'Text5Copy12',
                    text: 'The user is always a tap away from measuring his blood glucose level...',
                    align: 'left',
                    type: 'text'
                },
                {
                    id: 'darioTop',
                    type: 'image',
                    rect: ['1078px', '23px', '96px', '18px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/darioTop.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5Copy11}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '241px'],
                ["style", "top", '1422px'],
                ["style", "font-size", '16px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '182px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy15}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1.2px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '251px'],
                ["style", "width", '354px'],
                ["style", "top", '2145px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '211px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_Text5Copy6}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '374px'],
                ["style", "width", '195px'],
                ["style", "top", '2025px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_darioTop}": [
                ["style", "top", '23px'],
                ["style", "height", '18px'],
                ["style", "left", '1078px'],
                ["style", "width", '96px']
            ],
            "${_Text5Copy19}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1.2px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '300'],
                ["style", "left", '346px'],
                ["style", "width", '686px'],
                ["style", "top", '4237px'],
                ["style", "text-align", 'center'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '37px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["color", "color", 'rgba(86,95,103,1.00)']
            ],
            "${_Text5Copy3}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '482px'],
                ["style", "top", '1157px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy12}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '220px'],
                ["style", "top", '1629px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '77px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '4390px'],
                ["style", "width", '1366px']
            ],
            "${_Text4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,0.60)'],
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
            ],
            "${_Text5Copy5}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '256px'],
                ["style", "width", '195px'],
                ["style", "top", '2025px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Text5Copy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '288px'],
                ["style", "top", '1387px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Text5Copy7}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,0.75)'],
                ["style", "font-weight", '300'],
                ["style", "left", '563px'],
                ["style", "width", '195px'],
                ["style", "top", '2025px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Text5Copy14}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '803px'],
                ["style", "width", '354px'],
                ["style", "top", '1958px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '80px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '258px'],
                ["style", "width", '482px'],
                ["style", "top", '1064px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '86px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Bg}": [
                ["style", "top", '95px'],
                ["transform", "scaleY", '1.02518'],
                ["style", "height", '4241px'],
                ["color", "background-color", 'rgba(240,240,240,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_Text5Copy18}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1.2px'],
                ["transform", "scaleX", '1'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '313px'],
                ["style", "width", '740px'],
                ["style", "top", '4150px'],
                ["transform", "scaleY", '1'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '75px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy16}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1.2px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '255px'],
                ["style", "width", '363px'],
                ["style", "top", '3052px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy13}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '803px'],
                ["style", "width", '354px'],
                ["style", "top", '1867px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '80px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_darioFrame}": [
                ["style", "left", '0px'],
                ["style", "top", '41px']
            ],
            "${_Text5Copy17}": [
                ["style", "line-height", '23px'],
                ["style", "letter-spacing", '1.2px'],
                ["color", "color", 'rgba(86,95,103,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '255px'],
                ["style", "width", '363px'],
                ["style", "top", '3159px'],
                ["style", "font-size", '16px'],
                ["transform", "scaleY", '1'],
                ["style", "text-indent", '0px'],
                ["style", "height", '100px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
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
