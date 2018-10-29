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
                id: 'Reshet',
                type: 'rect',
                rect: ['-2px', '524px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Reshet',
                symbolName: 'Reshet',
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
                ["style", "height", '2775px'],
                ["style", "width", '1366px']
            ],
            "${_Reshet}": [
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
                { id: "eid8", tween: [ "style", "${_Reshet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
                    rect: ['0px', '75px', '1366px', '2700px', 'auto', 'auto'],
                    id: 'Bg',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(50,45,41,1.00)']
                },
                {
                    rect: ['0px', '75px', '1366px', '2700px', 'auto', 'auto'],
                    id: 'Gradient',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(106,97,89,1.00)', [50, 33, 'true', 'farthest-corner', [['rgba(106,97,89,1.00)', 31], ['rgba(50,45,41,1.00)', 72]]]]
                },
                {
                    rect: ['1px', '75px', '1400px', '15px', 'auto', 'auto'],
                    id: 'Top',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(50,45,41,0.00)', [270, [['rgba(0,0,0,0.20)', 0], ['rgba(0,0,0,0.00)', 100]]]]
                },
                {
                    rect: ['0px', '75px', '1400px', '2700px', 'auto', 'auto'],
                    id: 'Pattern',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,38,38,0.00)']
                },
                {
                    type: 'text',
                    rect: ['470px', '1212px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'green',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(165,216,0,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['468px', '1236px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'pink',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,74,149,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['438px', '1257px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy2',
                    text: 'yellow',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,201,19,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['335px', '1302px', '159px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy3',
                    text: 'black',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['415px', '1301px', '61px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy4',
                    text: 'white.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['382px', '1301px', '31px', '15px', 'auto', 'auto'],
                    id: 'Text2Copy5',
                    text: 'and',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    id: 'reshetArrow',
                    type: 'image',
                    rect: ['984px', '1482px', '40px', '77px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetArrow.png', '0px', '0px']
                },
                {
                    id: 'reshetLine',
                    type: 'image',
                    rect: ['206px', '699px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy',
                    type: 'image',
                    rect: ['206px', '1039px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy2',
                    type: 'image',
                    rect: ['206px', '1384px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    id: 'reshetLineCopy3',
                    type: 'image',
                    rect: ['206px', '1963px', '987px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/reshetLine.png', '0px', '0px']
                },
                {
                    rect: ['265px', '129px', '118px', '61px', 'auto', 'auto'],
                    id: 'reshet1',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['832px', '0px', '305px', '647px', 'auto', 'auto'],
                    id: 'reshet2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['229px', '235px', '568px', '424px', 'auto', 'auto'],
                    id: 'reshet3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['191px', '736px', '621px', '327px', 'auto', 'auto'],
                    id: 'reshet4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['288px', '1575px', '796px', '321px', 'auto', 'auto'],
                    id: 'reshet5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['31px', '2049px', '1150px', '851px', 'auto', 'auto'],
                    id: 'reshet6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'text',
                    rect: ['852px', '798px', '278px', '225px', 'auto', 'auto'],
                    id: 'Text4',
                    text: 'Being based on the network\'s rich content, high quality imagery and video content was the core of the application. To maintain such a strong impact, bold iconography was required to colour up the more subtle and informative screens.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    rect: ['606px', '1105px', '83px', '218px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(165,216,0,1.00)']
                },
                {
                    rect: ['706px', '1105px', '83px', '218px', 'auto', 'auto'],
                    id: 'Rectangle2Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,8,110,1.00)']
                },
                {
                    rect: ['806px', '1105px', '83px', '218px', 'auto', 'auto'],
                    id: 'Rectangle2Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,201,19,1.00)']
                },
                {
                    rect: ['906px', '1105px', '83px', '218px', 'auto', 'auto'],
                    id: 'Rectangle2Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    rect: ['1006px', '1105px', '83px', '218px', 'auto', 'auto'],
                    id: 'Rectangle2Copy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'text',
                    rect: ['264px', '1440px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy',
                    text: 'Draw!',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 21, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['869px', '2106px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy9',
                    text: 'Make my icon bigger!',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 21, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['964px', '1439px', '118px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy4',
                    text: 'Settings Icon',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 21, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['266px', '1472px', '288px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy2',
                    text: 'Skipping the obvious pen on paper stage, here is the basic breakdown of an icon design process',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['334px', '1840px', '218px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy5',
                    text: 'Form out the basic shapes',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['595px', '1840px', '195px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy6',
                    text: 'Apply colour theme <br>and basic details',
                    align: 'center',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['841px', '1840px', '195px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy7',
                    text: 'Refine, refine, refine...',
                    align: 'center',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['869px', '2143px', '245px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy8',
                    text: 'Pleased with the outcome, you move on to adjusting the icon into a dozen different sizes, fitting it to the different screen resolutions.<br>Each device and it\'s unique screen resolution.',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['869px', '2290px', '236px', '27px', 'auto', 'auto'],
                    id: 'Text5Copy10',
                    text: 'Why do humans need so many different mobile devices?',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['393px', '168px', '438px', '27px', 'auto', 'auto'],
                    id: 'Text6',
                    text: 'Key designs and iconography for Reshet.TV',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['391px', '128px', '346px', '27px', 'auto', 'auto'],
                    id: 'Text6Copy',
                    text: 'RESHET.TV',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 32, 'rgba(221,220,219,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['267px', '1103px', '252px', '61px', 'auto', 'auto'],
                    id: 'Text5',
                    text: 'As an application conversing with the entertainment world, shiny colours were a must.<br><br>',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['267px', '1189px', '245px', '114px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'started with a variation on the network\'s dominant        <br>added a complementary<br>on came the radiant<br>and the never failing to support<br>',
                    align: 'left',
                    font: ['ubuntu, sans-serif', 16, 'rgba(197,194,189,1.00)', '300', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '1105px'],
                ["style", "height", '218px'],
                ["style", "left", '606px'],
                ["color", "background-color", 'rgba(165,216,0,1.00)']
            ],
            "${_Text2Copy}": [
                ["style", "top", '1236px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["color", "color", 'rgba(255,74,149,1.00)'],
                ["style", "left", '468px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy2}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '266px'],
                ["style", "width", '288px'],
                ["style", "top", '1472px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy9}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '869px'],
                ["style", "width", '288px'],
                ["style", "top", '2106px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '21px']
            ],
            "${_Text2}": [
                ["style", "top", '1212px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["color", "color", 'rgba(165,216,0,1.00)'],
                ["style", "left", '470px'],
                ["style", "font-size", '16px']
            ],
            "${_reshetLineCopy3}": [
                ["style", "top", '1963px'],
                ["style", "left", '206px']
            ],
            "${_Text4}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '852px'],
                ["style", "font-size", '16px'],
                ["style", "top", '798px'],
                ["style", "text-indent", '0px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "width", '278px']
            ],
            "${_reshetLine}": [
                ["style", "top", '699px'],
                ["style", "left", '206px']
            ],
            "${_Text5Copy5}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '334px'],
                ["style", "width", '218px'],
                ["style", "top", '1840px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '264px'],
                ["style", "width", '288px'],
                ["style", "top", '1440px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '21px']
            ],
            "${_reshet5}": [
                ["style", "top", '1575px'],
                ["style", "height", '321px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '288px'],
                ["style", "width", '796px']
            ],
            "${_Text5Copy8}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '869px'],
                ["style", "width", '245px'],
                ["style", "top", '2143px'],
                ["style", "text-align", 'left'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy10}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '869px'],
                ["style", "width", '236px'],
                ["style", "top", '2290px'],
                ["style", "text-align", 'left'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle2Copy4}": [
                ["style", "height", '218px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '1006px'],
                ["style", "top", '1105px']
            ],
            "${_Gradient}": [
                ["color", "background-color", 'rgba(106,97,89,1.00)'],
                ["style", "top", '75px'],
                ["style", "height", '2700px'],
                ["gradient", "background-image", [50,33,true,'farthest-corner',[['rgba(106,97,89,1.00)',31],['rgba(50,45,41,1.00)',72]]]],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_Rectangle2Copy3}": [
                ["style", "top", '1105px'],
                ["style", "height", '218px'],
                ["style", "left", '906px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
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
                ["style", "top", '129px'],
                ["style", "height", '61px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '265px'],
                ["style", "width", '118px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '1257px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["color", "color", 'rgba(255,201,19,1.00)'],
                ["style", "left", '438px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '1302px'],
                ["style", "letter-spacing", '1px'],
                ["style", "font-weight", '300'],
                ["style", "word-spacing", '1px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '335px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle2Copy2}": [
                ["color", "background-color", 'rgba(255,201,19,1.00)'],
                ["style", "top", '1105px'],
                ["style", "left", '806px'],
                ["style", "height", '218px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2708px'],
                ["style", "width", '1366px']
            ],
            "${_Pattern}": [
                ["color", "background-color", 'rgba(255,38,38,0.00)'],
                ["style", "height", '2700px'],
                ["style", "top", '75px'],
                ["style", "left", '0px'],
                ["style", "width", '1400px']
            ],
            "${_reshet3}": [
                ["style", "top", '235px'],
                ["style", "height", '424px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '229px'],
                ["style", "width", '568px']
            ],
            "${_reshetArrow}": [
                ["style", "left", '984px'],
                ["style", "top", '1482px']
            ],
            "${_Text5Copy7}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '841px'],
                ["style", "width", '195px'],
                ["style", "top", '1840px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_reshet6}": [
                ["style", "top", '2049px'],
                ["style", "height", '851px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '31px'],
                ["style", "width", '1150px']
            ],
            "${_Text}": [
                ["style", "line-height", '22px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '245px'],
                ["style", "top", '1189px'],
                ["style", "height", '114px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text5Copy6}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '595px'],
                ["style", "width", '195px'],
                ["style", "top", '1840px'],
                ["style", "text-align", 'center'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_reshet4}": [
                ["style", "top", '736px'],
                ["style", "height", '327px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '191px'],
                ["style", "width", '621px']
            ],
            "${_reshet2}": [
                ["style", "top", '0px'],
                ["style", "height", '647px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '832px'],
                ["style", "width", '305px']
            ],
            "${_Bg}": [
                ["style", "top", '75px'],
                ["style", "height", '2700px'],
                ["color", "background-color", 'rgba(50,45,41,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_Rectangle2Copy}": [
                ["style", "height", '218px'],
                ["color", "background-color", 'rgba(255,8,110,1.00)'],
                ["style", "left", '706px'],
                ["style", "top", '1105px']
            ],
            "${_reshetLineCopy2}": [
                ["style", "top", '1384px'],
                ["style", "left", '206px']
            ],
            "${_Text6}": [
                ["style", "letter-spacing", '0px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '393px'],
                ["style", "width", '438px'],
                ["style", "top", '168px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '2px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy5}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '382px'],
                ["style", "width", '31px'],
                ["style", "top", '1301px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Text2Copy4}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '415px'],
                ["style", "width", '61px'],
                ["style", "top", '1301px'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '16px']
            ],
            "${_Top}": [
                ["color", "background-color", 'rgba(50,45,41,0.00)'],
                ["gradient", "background-image", [270,[['rgba(0,0,0,0.20)',0],['rgba(0,0,0,0.00)',100]]]],
                ["style", "height", '15px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '128px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["color", "color", 'rgba(221,220,219,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '391px'],
                ["style", "font-size", '32px']
            ],
            "${_reshetLineCopy}": [
                ["style", "top", '1039px'],
                ["style", "left", '206px']
            ],
            "${_Text5Copy4}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '964px'],
                ["style", "width", '118px'],
                ["style", "top", '1439px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '27px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
                ["style", "font-size", '21px']
            ],
            "${_Text5}": [
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(197,194,189,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '267px'],
                ["style", "width", '252px'],
                ["style", "top", '1103px'],
                ["style", "text-indent", '0px'],
                ["style", "height", '61px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "word-spacing", '1px'],
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
