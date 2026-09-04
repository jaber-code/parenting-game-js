/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Hacen_Vanilla_1': '<link rel=\"stylesheet\" type=\"text/css\" href=\"Fonts/fonts.css\"> ',
            'GE_Dinar_Two_Medium': '<link rel=\"stylesheet\" type=\"text/css\" href=\"Fonts/fonts.css\"> ',
            'AGA-Rasheeq-Regular': '<link rel=\"stylesheet\" type=\"text/css\" href=\"Fonts/fonts.css\">'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"rubish.js",
            js+"Box2dWeb-2.1.a.3.min.js",
            "http://code.createjs.com/soundjs-0.6.1.min.js",
            "Json/TH_3_L_3.js",
            "Json/TH_3_L_7.js",
            "Json/TH_3_L_8.js",
            js+"LevelsHints.js",
            "Json/TH_2_L_6.js",
            "Json/Th_4_L_1.js",
            "Json/Th_4_L_6.js",
            "Json/Th_4_L_8.js",
            "Json/TH_5_L_3.js",
            "Json/TH_5_L_7.js",
            "Json/TH_5_L_6.js",
            "Json/TH_1_L_8.js",
            "Json/TH_B_L_4.js",
            "Json/TH_B_L_6.js",
            "Json/TH_B_L_8.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sym_Game',
                            symbolName: 'sym_Game',
                            type: 'rect',
                            rect: ['53px', '0px', '800px', '480px', 'auto', 'auto']
                        },
                        {
                            id: 'sym_MainMenu',
                            symbolName: 'sym_MainMenu',
                            type: 'rect',
                            rect: ['-2px', '0', '900px', '480px', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['3px', 'auto', '77px', '28px', 'auto', '65px'],
                            cursor: 'default',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">FPS:&nbsp;</p>",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '480px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_MainMenu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'BG_PATTERN',
                            rect: ['-82px', '-42px', '1063px', '563px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BG_PATTERN.png', '0px', '0px']
                        },
                        {
                            rect: ['108px', '10px', '661px', '450px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(94,94,94,0.07)', 'solid'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-583px', '-819px', '2125px', '2130px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'Family_Title2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Family_Title.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            display: 'block',
                            symbolName: 'sym_IntroAni',
                            rect: ['50px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'sym_IntroAni'
                        },
                        {
                            type: 'rect',
                            rect: ['275px', '383px', '145px', '58px', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'btn_Start',
                            cursor: 'pointer',
                            id: 'btn_Start'
                        },
                        {
                            type: 'rect',
                            rect: ['479px', '383px', '145px', '58px', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'btn_Settings',
                            cursor: 'pointer',
                            id: 'btn_FB'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_Navigation',
                            rect: ['340px', '425px', '220px', '28', 'auto', 'auto'],
                            id: 'sym_Navigation'
                        },
                        {
                            type: 'text',
                            id: 'themeTxt',
                            textStyle: ['', '', '', '', 'capitalize'],
                            rect: ['411px', '30px', '366px', '69px', 'auto', 'auto'],
                            display: 'none',
                            align: 'center',
                            font: ['GE_Dinar_Two_Medium', [30, 'px'], 'rgba(81,81,81,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​اسم الثيم</p>'
                        },
                        {
                            type: 'rect',
                            transform: [[], [], [], ['0.55', '0.55']],
                            display: 'none',
                            symbolName: 'sym_Animation',
                            rect: ['281px', '-2px', '640px', '480px', 'auto', 'auto'],
                            id: 'sym_Animation'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_Themes',
                            rect: ['118px', '0px', '300px', '480px', 'auto', 'auto'],
                            id: 'sym_Themes'
                        },
                        {
                            type: 'rect',
                            rect: ['auto', '215px', '65px', '70px', '49px', 'auto'],
                            display: 'none',
                            symbolName: 'btn_BackTheme',
                            cursor: 'pointer',
                            id: 'btn_BackTheme'
                        },
                        {
                            type: 'rect',
                            rect: ['51px', '215px', '65px', '70px', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'btn_NextTheme',
                            cursor: 'pointer',
                            id: 'btn_NextTheme'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_SelectGender',
                            rect: ['240px', '92px', '419', '308', 'auto', 'auto'],
                            id: 'sym_SelectGender'
                        },
                        {
                            type: 'rect',
                            id: 'btn_Mute',
                            symbolName: 'btn_Mute',
                            cursor: 'pointer',
                            rect: ['51px', '10px', '49', '46', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_Explanation_2',
                            rect: ['149px', '200px', null, null, 'auto', 'auto'],
                            id: 'sym_HintToUnlock'
                        },
                        {
                            type: 'rect',
                            rect: ['723px', '418px', '41', '41', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'btn_Info',
                            cursor: 'pointer',
                            id: 'btn_Info'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '900px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Main": 0,
                        "lbl_GenderBox": 250,
                        "lbl_LevelSelect": 500
                    },
                    data: [
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_Themes}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_Themes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid450",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Family_Title2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid600",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn_Info}",
                            'none',
                            'block'
                        ],
                        [
                            "eid591",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_HintToUnlock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid462",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn_BackTheme}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${themeTxt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            500,
                            0,
                            "linear",
                            "${themeTxt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            250,
                            0,
                            "linear",
                            "${sym_SelectGender}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_SelectGender}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_Start}",
                            'block',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn_Start}",
                            'block',
                            'none'
                        ],
                        [
                            "eid392",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_Navigation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_FB}",
                            'block',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn_FB}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_Animation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_Animation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid447",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_IntroAni}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn_NextTheme}",
                            'none',
                            'block'
                        ],
                        [
                            "eid187",
                            "display",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn_Start": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-288px', '-109px', '721px', '277px', 'auto', 'auto'],
                            id: 'Btn_Play_Off',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Play_Off.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '3px', '145px', '53px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.935', '0.935']],
                            id: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid324",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Btn_Play_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid328",
                            "scaleY",
                            250,
                            94,
                            "linear",
                            "${Btn_Play_Off}",
                            '0.22',
                            '0.19'
                        ],
                        [
                            "eid323",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Btn_Play_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid327",
                            "scaleX",
                            250,
                            94,
                            "linear",
                            "${Btn_Play_Off}",
                            '0.22',
                            '0.19'
                        ]
                    ]
                }
            },
            "sym_Game": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '780px', '460px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(94,94,94,0.07)', 'solid'],
                            display: 'block',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'sym_BG',
                            symbolName: 'sym_BG',
                            rect: ['0', '0', '796', '475', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            id: 'game',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_Help',
                            symbolName: 'btn_Help',
                            cursor: 'pointer',
                            rect: ['744px', '6px', '50px', '50px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_BallsCount',
                            symbolName: 'sym_BallsCount',
                            rect: ['116px', '9px', '113px', '44px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Score',
                            symbolName: 'sym_Score',
                            rect: ['573px', '11px', '130px', '40px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_HelpImage',
                            rect: ['0', '0', '800', '480', 'auto', 'auto'],
                            id: 'sym_HelpImage'
                        },
                        {
                            type: 'rect',
                            id: 'sym_ChildsEnter',
                            symbolName: 'sym_ChildsEnter',
                            rect: ['240', '20', '82', '22', 'auto', 'auto']
                        },
                        {
                            rect: ['517px', '442px', '279px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRect2',
                            opacity: '0.5',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['515px', '446px', '273px', '32px', 'auto', 'auto'],
                            align: 'right',
                            id: 'txt',
                            text: '<p style=\"margin: 0px;\">اسم المرحلة</p>',
                            cursor: 'default',
                            font: ['GE_Dinar_Two_Medium', [21, 'px'], 'rgba(255,255,255,0.85)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['365px', '1px', '66px', '59', 'auto', 'auto'],
                            type: 'rect',
                            id: 'sym_Timer',
                            symbolName: 'sym_Timer',
                            opacity: '1',
                            transform: [[], [], [], ['0.8', '0.8']]
                        },
                        {
                            type: 'rect',
                            id: 'sym_Pause',
                            symbolName: 'sym_Pause',
                            rect: ['6px', '6px', '50px', '50px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_EndMenu',
                            rect: ['1px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'sym_EndMenu'
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'sym_Hint',
                            rect: ['248px', '190px', '303', '99', 'auto', 'auto'],
                            id: 'sym_Hint'
                        },
                        {
                            type: 'rect',
                            id: 'btn_Mute',
                            symbolName: 'btn_Mute',
                            cursor: 'pointer',
                            rect: ['0px', '431px', '49', '46', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_Explanation_1',
                            rect: ['92px', '204px', null, null, 'auto', 'auto'],
                            id: 'sym_FBFB'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_EndMenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid536",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_Hint}",
                            'none',
                            'none'
                        ],
                        [
                            "eid546",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_HelpImage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid592",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_FBFB}",
                            'none',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Levels": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sym_Level_1',
                            symbolName: 'sym_Theme',
                            rect: ['22px', '47px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_2',
                            symbolName: 'sym_Theme',
                            rect: ['120px', '47px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_3',
                            symbolName: 'sym_Theme',
                            rect: ['217px', '47px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_4',
                            symbolName: 'sym_Theme',
                            rect: ['22px', '155px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_5',
                            symbolName: 'sym_Theme',
                            rect: ['120px', '155px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_6',
                            symbolName: 'sym_Theme',
                            rect: ['217px', '155px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_7',
                            symbolName: 'sym_Theme',
                            rect: ['22px', '264px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_8',
                            symbolName: 'sym_Theme',
                            rect: ['120px', '264px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_9',
                            symbolName: 'sym_Theme',
                            rect: ['217px', '264px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_10',
                            symbolName: 'sym_Theme',
                            rect: ['22px', '367px', '62px', '62px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Level_11',
                            symbolName: 'sym_Theme',
                            rect: ['119px', '367px', '62px', '62px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Themes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sym_Levels_T1',
                            symbolName: 'sym_Levels',
                            rect: ['0px', '-1px', '300px', '480px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Levels_T2',
                            symbolName: 'sym_Levels',
                            rect: ['866px', '-1px', '300px', '480px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Levels_T3',
                            symbolName: 'sym_Levels',
                            rect: ['870px', '-1px', '300px', '480px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Levels_T4',
                            symbolName: 'sym_Levels',
                            rect: ['870px', '-1px', '300px', '480px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Levels_T5',
                            symbolName: 'sym_Levels',
                            rect: ['870px', '-1px', '300px', '480px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Levels_T6',
                            symbolName: 'sym_Levels',
                            rect: ['870px', '-1px', '300px', '480px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '300px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Theme": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'color',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0.1, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0.1, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            transform: [[], [], [], ['1.05', '1.05']],
                            fill: ['rgba(255,86,86,0.86)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '14px', '62px', '39px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">1​</p>',
                            id: 'txt',
                            textStyle: ['', '', '', '', 'capitalize'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['0px', '0px', '62px', '62px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.23)']
                        },
                        {
                            type: 'text',
                            id: 'txtLock',
                            text: '<p style=\"margin: 0px;\">1​</p>',
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(100,100,100,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '1',
                            display: 'none',
                            rect: ['-1px', '18px', '70px', '39px', 'auto', 'auto'],
                            align: 'center',
                            textStyle: ['', '', '', '', 'capitalize']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Hart',
                            symbolName: 'sym_Hart',
                            rect: ['5', '13', '51', '42', 'auto', 'auto']
                        },
                        {
                            rect: ['0', '-16', '63', '79', 'auto', 'auto'],
                            id: 'Lock',
                            symbolName: 'Lock',
                            type: 'rect',
                            transform: [[], [], [], ['1.07', '1.07']]
                        },
                        {
                            type: 'rect',
                            id: 'sym_Hearts',
                            symbolName: 'sym_Hearts',
                            rect: ['0', '63', '62', '14', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 731,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 12,
                        "lbl_Idle": 139,
                        "lbl_Down": 262,
                        "lbl_ClickLocked": 500
                    },
                    data: [
                        [
                            "eid608",
                            "scaleY",
                            500,
                            92,
                            "linear",
                            "${Lock}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid610",
                            "scaleY",
                            592,
                            115,
                            "linear",
                            "${Lock}",
                            '1.07',
                            '1'
                        ],
                        [
                            "eid348",
                            "scaleY",
                            12,
                            127,
                            "linear",
                            "${color}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid354",
                            "scaleY",
                            262,
                            104,
                            "linear",
                            "${color}",
                            '1.05',
                            '0.96'
                        ],
                        [
                            "eid236",
                            "display",
                            12,
                            0,
                            "linear",
                            "${txtLock}",
                            'none',
                            'none'
                        ],
                        [
                            "eid347",
                            "scaleX",
                            12,
                            127,
                            "linear",
                            "${color}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid353",
                            "scaleX",
                            262,
                            104,
                            "linear",
                            "${color}",
                            '1.05',
                            '0.96'
                        ],
                        [
                            "eid607",
                            "scaleX",
                            500,
                            92,
                            "linear",
                            "${Lock}",
                            '1',
                            '1.07'
                        ],
                        [
                            "eid609",
                            "scaleX",
                            592,
                            115,
                            "linear",
                            "${Lock}",
                            '1.07',
                            '1'
                        ]
                    ]
                }
            },
            "btn_Settings": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '1', '143', '55', 'auto', 'auto'],
                            id: 'LOGINSYM',
                            symbolName: 'LOGINSYM',
                            type: 'rect',
                            transform: [[], [], [], ['0.99', '0.99']]
                        },
                        {
                            rect: ['1px', '2px', '144px', '56px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(148,148,148,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '144px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid628",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${LOGINSYM}",
                            '0.99',
                            '1.12999'
                        ],
                        [
                            "eid629",
                            "scaleY",
                            250,
                            94,
                            "linear",
                            "${LOGINSYM}",
                            '1.12999',
                            '0.99'
                        ],
                        [
                            "eid626",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${LOGINSYM}",
                            '0.99',
                            '1.12999'
                        ],
                        [
                            "eid627",
                            "scaleX",
                            250,
                            94,
                            "linear",
                            "${LOGINSYM}",
                            '1.12999',
                            '0.99'
                        ]
                    ]
                }
            },
            "btn_BackTheme": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.3', '0.3']],
                            rect: ['-40px', '-44px', '142px', '159px', 'auto', 'auto'],
                            id: 'Btn_Next',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Next.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Active": 0,
                        "lbl_Inactive": 500
                    },
                    data: [
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Btn_Next}",
                            '1',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Btn_Next}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_NextTheme": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-42px', '-45px', '142px', '159px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'Btn_Back',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Back.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Active": 0,
                        "lbl_Inactive": 500
                    },
                    data: [
                        [
                            "eid180",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Btn_Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Btn_Back}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym_Timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['2px', '5px', '61px', '52px', 'auto', 'auto'],
                            borderRadius: ['13px 13px', '13px 13px', '13px 13px', '13px 13px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'text',
                            id: 'txt',
                            text: '<p style=\"margin: 0px;\">​00:00<span style=\"color: rgb(0, 0, 0);\">​</span></p>',
                            cursor: 'default',
                            rect: ['0px', '9px', '124px', '48px', 'auto', 'auto'],
                            display: 'none',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [36, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'capitalize']
                        },
                        {
                            type: 'rect',
                            id: 'timerRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['12px', 'auto', '41px', '50px', 'auto', '3px'],
                            fill: ['rgba(235,200,14,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Timer',
                            rect: ['-69px', '-71px', '203px', '203px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.3', '0.3']],
                            fill: ['rgba(0,0,0,0)', 'images/Timer.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '59px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid436",
                            "display",
                            0,
                            0,
                            "linear",
                            "${txt}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "sym_Pause": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '107px', '45px', '45px', 'auto', 'auto'],
                            symbolName: 'btn_LevelSelect',
                            id: 'btn_LevelSelect',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['54px', '0px', '50px', '50px', 'auto', 'auto'],
                            symbolName: 'btn_Replay',
                            id: 'btn_Replay',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '54px', '45px', '45px', 'auto', 'auto'],
                            symbolName: 'btn_Home',
                            id: 'btn_Home',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'sym_ToggleImage',
                            symbolName: 'sym_ToggleImage',
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'btn_Pause',
                            stroke: [0, 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 164,
                    autoPlay: false,
                    labels: {
                        "lbl_Open": 0,
                        "lbl_Close": 164
                    },
                    data: [
                        [
                            "eid306",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${btn_LevelSelect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            164,
                            "linear",
                            "${btn_Replay}",
                            '0px',
                            '54px'
                        ],
                        [
                            "eid307",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${btn_Replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "top",
                            0,
                            164,
                            "linear",
                            "${btn_LevelSelect}",
                            '0px',
                            '107px'
                        ],
                        [
                            "eid308",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${btn_Home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "top",
                            0,
                            164,
                            "linear",
                            "${btn_Home}",
                            '0px',
                            '54px'
                        ]
                    ]
                }
            },
            "btn_Replay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '-90px', '225px', '225px', 'auto', 'auto'],
                            id: 'Btn_Replay_Off',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Replay_Off.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '-1px', '47px', '48px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.935', '0.935']],
                            id: 'rectCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid515",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid553",
                            "scaleX",
                            250,
                            0,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.22',
                            '0.22'
                        ],
                        [
                            "eid551",
                            "scaleX",
                            309,
                            45,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.22',
                            '0.2'
                        ],
                        [
                            "eid516",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid554",
                            "scaleY",
                            250,
                            0,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.22',
                            '0.22'
                        ],
                        [
                            "eid552",
                            "scaleY",
                            309,
                            45,
                            "linear",
                            "${Btn_Replay_Off}",
                            '0.22',
                            '0.2'
                        ]
                    ]
                }
            },
            "btn_Home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '-90px', '225px', '225px', 'auto', 'auto'],
                            id: 'Btn_Home_Off',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Home_Off.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-2px', '48px', '48px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.935', '0.935']],
                            id: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid498",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Btn_Home_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid502",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${Btn_Home_Off}",
                            '0.22',
                            '0.19'
                        ],
                        [
                            "eid499",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Btn_Home_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid504",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${Btn_Home_Off}",
                            '0.22',
                            '0.19'
                        ]
                    ]
                }
            },
            "sym_EndMenu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'sym_LoseMenu',
                            rect: ['0', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'sym_WinMenu'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'sym_WinMenu',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'sym_LoseMenu'
                        },
                        {
                            type: 'rect',
                            rect: ['749px', '10px', '41', '41', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'btn_Info',
                            cursor: 'pointer',
                            id: 'btn_Info'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Lose": 0,
                        "lbl_Win": 500
                    },
                    data: [
                        [
                            "eid169",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_WinMenu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sym_LoseMenu}",
                            'block',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sym_LoseMenu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid611",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_Info}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "btn_Share": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '45', '45', 'auto', 'auto'],
                            id: 'SHARESYM',
                            symbolName: 'SHARESYM',
                            type: 'rect',
                            transform: [[], [], [], ['0.95', '0.95']]
                        },
                        {
                            rect: ['-2px', '-2px', '48px', '48px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.935', '0.935']],
                            id: 'rectCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid633",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${SHARESYM}",
                            '0.95',
                            '1.14999'
                        ],
                        [
                            "eid634",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${SHARESYM}",
                            '1.14999',
                            '0.95'
                        ],
                        [
                            "eid635",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${SHARESYM}",
                            '0.95',
                            '1.14999'
                        ],
                        [
                            "eid636",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${SHARESYM}",
                            '1.14999',
                            '0.95'
                        ]
                    ]
                }
            },
            "sym_Animation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'canvasAni',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-10px', '-10px', '640px', '480px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '640px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_LevelSelect": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '-90px', '225px', '225px', 'auto', 'auto'],
                            id: 'Btn_Levels_Off',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Levels_Off.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid523",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Btn_Levels_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid527",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${Btn_Levels_Off}",
                            '0.22',
                            '0.19'
                        ],
                        [
                            "eid524",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Btn_Levels_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid528",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${Btn_Levels_Off}",
                            '0.22',
                            '0.19'
                        ]
                    ]
                }
            },
            "sym_ToggleImage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.26', '0.26']],
                            display: 'none',
                            rect: ['-73px', '-73px', '196px', '196px', 'auto', 'auto'],
                            id: 'Btn_Pause_Off',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Pause_Off.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.22', '0.22']],
                            display: 'block',
                            rect: ['-88px', '-88px', '225px', '225px', 'auto', 'auto'],
                            id: 'Btn_Resume_Off',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Resume_Off.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Pause": 0,
                        "lbl_Resume": 500
                    },
                    data: [
                        [
                            "eid189",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Btn_Pause_Off}",
                            'none',
                            'none'
                        ],
                        [
                            "eid190",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_Pause_Off}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Btn_Resume_Off}",
                            'block',
                            'block'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_Resume_Off}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sym_LoseMenu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '860px', '500px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.86)']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'btn_Home',
                            symbolName: 'btn_Home',
                            cursor: 'pointer',
                            rect: ['235px', '400px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'btn_LevelSelect',
                            symbolName: 'btn_LevelSelect',
                            cursor: 'pointer',
                            rect: ['432px', '400px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'btn_Replay',
                            symbolName: 'btn_Replay',
                            cursor: 'pointer',
                            rect: ['367px', '399px', '45px', '45px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'btn_Share',
                            symbolName: 'btn_Share',
                            cursor: 'pointer',
                            rect: ['301px', '400px', '45px', '45px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'txt_EarnedScore',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['253px', '343px', '137px', '48px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'capitalize'],
                            font: ['Hacen_Vanilla_1', [23, 'px'], 'rgba(94,94,94,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">X 0</p><p style=\"margin: 0px;\">​</p>'
                        },
                        {
                            type: 'text',
                            id: 'txt_Score',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['377px', '343px', '178px', '48px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'capitalize'],
                            font: ['Hacen_Vanilla_1', [23, 'px'], 'rgba(94,94,94,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'right',
                            text: '<p style=\"margin: 0px;\">0​</p>'
                        },
                        {
                            type: 'text',
                            id: 'txt_ScoreCopy',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['558px', '339px', '145px', '48px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'capitalize'],
                            font: ['GE_Dinar_Two_Medium', [28, 'px'], 'rgba(94,94,94,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​:نقاطك</p>'
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'btn_NextLevel',
                            symbolName: 'btn_NextLevel',
                            cursor: 'pointer',
                            rect: ['498px', '400px', '45px', '45px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star1',
                            symbolName: 'sym_Star',
                            opacity: '0',
                            rect: ['177px', '70px', '140', '133', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star2',
                            symbolName: 'sym_Star',
                            opacity: '0',
                            rect: ['320px', '32px', '140', '133', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star3',
                            symbolName: 'sym_Star',
                            opacity: '0',
                            rect: ['463px', '70px', '140', '133', 'auto', 'auto']
                        },
                        {
                            rect: ['126px', '264px', '190px', '190px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.25', '0.25']],
                            id: 'Coin_Icon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Coin_Icon.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Explanation',
                            symbolName: 'sym_Explanation',
                            rect: ['90px', '205px', '600px', '89', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Show": 0,
                        "lbl_Hide": 500
                    },
                    data: [
                        [
                            "eid204",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid310",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_EarnedScore}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_Share}",
                            '0',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_Home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_LevelSelect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_NextLevel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_Replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_ScoreCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_Score}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid433",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Coin_Icon}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "sym_WinMenu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '800px', '480px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.8627)']
                        },
                        {
                            type: 'rect',
                            rect: ['311px', '381px', null, null, 'auto', 'auto'],
                            id: 'btn_Home',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'btn_Home'
                        },
                        {
                            type: 'rect',
                            rect: ['445px', '381px', null, null, 'auto', 'auto'],
                            id: 'btn_LevelSelect',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'btn_LevelSelect'
                        },
                        {
                            type: 'rect',
                            rect: ['378px', '381px', null, null, 'auto', 'auto'],
                            id: 'btn_Replay',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'btn_Replay'
                        },
                        {
                            type: 'text',
                            id: 'txt_EarnedScore',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['369px', '227px', '121px', '66px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​x 0</p><p style=\"margin: 0px;\">​</p>',
                            align: 'center',
                            font: ['Hacen_Vanilla_1', [35, 'px'], 'rgba(87,87,87,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'capitalize']
                        },
                        {
                            type: 'text',
                            id: 'txt_Score',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['69px', '306px', '313px', '48px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            align: 'right',
                            font: ['Hacen_Vanilla_1', [37, 'px'], 'rgba(87,87,87,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'capitalize']
                        },
                        {
                            type: 'text',
                            id: 'txt_ScoreCopy2',
                            opacity: '0',
                            cursor: 'default',
                            rect: ['405px', '307px', '324px', '48px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​:نقاطك</p>',
                            align: 'left',
                            font: ['GE_Dinar_Two_Medium', [37, 'px'], 'rgba(87,87,87,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'capitalize']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star1',
                            symbolName: 'sym_Star',
                            rect: ['189px', '64px', '140', '133', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star2',
                            symbolName: 'sym_Star',
                            rect: ['331px', '22px', '140', '133', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'rect',
                            id: 'sym_Star3',
                            symbolName: 'sym_Star',
                            rect: ['469px', '64px', '140', '133', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            transform: [[], [], [], ['0.25', '0.25']],
                            rect: ['271px', '156px', '190px', '190px', 'auto', 'auto'],
                            id: 'Coin_Icon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Coin_Icon.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Show": 0,
                        "lbl_Hide": 500
                    },
                    data: [
                        [
                            "eid219",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_EarnedScore}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_ScoreCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid435",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Coin_Icon2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid220",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_Home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid312",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_LevelSelect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${btn_Replay}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${sym_Star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_Score}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "btn_NextLevel": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['-90px', '-90px', '225px', '225px', 'auto', 'auto'],
                            id: 'Btn_Nxet_Level_Off',
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Nxet_Level_Off.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '45px', '44px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(148,148,148,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid529",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Btn_Nxet_Level_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid530",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${Btn_Nxet_Level_Off}",
                            '0.22',
                            '0.19'
                        ],
                        [
                            "eid531",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Btn_Nxet_Level_Off}",
                            '0.2',
                            '0.22'
                        ],
                        [
                            "eid532",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${Btn_Nxet_Level_Off}",
                            '0.22',
                            '0.19'
                        ]
                    ]
                }
            },
            "sym_SelectGender": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-265px', '-94px', '960px', '500px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['-629px', '-462px', '1677px', '1231px', 'auto', 'auto'],
                            id: 'Chose_Box',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Chose_Box.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '22px', '419px', '50px', 'auto', 'auto'],
                            font: ['GE_Dinar_Two_Medium', [35, 'px'], 'rgba(128,128,128,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​هل انت؟<span style=\"color: rgb(124, 124, 124);\">​</span></p>',
                            cursor: 'default',
                            type: 'text'
                        },
                        {
                            rect: ['209px', '185px', '155px', '50px', 'auto', 'auto'],
                            font: ['GE_Dinar_Two_Medium', [35, 'px'], 'rgba(128,128,128,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'center',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​أم</p>',
                            cursor: 'default',
                            type: 'text'
                        },
                        {
                            rect: ['55px', '185px', '155px', '50px', 'auto', 'auto'],
                            font: ['GE_Dinar_Two_Medium', [35, 'px'], 'rgba(128,128,128,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'center',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​أب</p>',
                            cursor: 'default',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'btn_Father',
                            symbolName: 'btn_Father',
                            cursor: 'pointer',
                            rect: ['95', '98px', '74', '74', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_Mother',
                            symbolName: 'btn_Mother',
                            cursor: 'pointer',
                            rect: ['248', '98px', '74', '74', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'x-01',
                            rect: ['398px', '-19px', '41px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/x-01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '419px', '308px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_Father": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-22px', '-22px', '120px', '120px', 'auto', 'auto'],
                            id: 'Dad',
                            transform: [[], [], [], ['0.6', '0.6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Dad.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '75px', '75px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '74px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid466",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Dad}",
                            '0.6',
                            '0.7'
                        ],
                        [
                            "eid470",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${Dad}",
                            '0.7',
                            '0.6'
                        ],
                        [
                            "eid467",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Dad}",
                            '0.6',
                            '0.7'
                        ],
                        [
                            "eid471",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${Dad}",
                            '0.7',
                            '0.6'
                        ]
                    ]
                }
            },
            "btn_Mother": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-22px', '-23px', '120px', '120px', 'auto', 'auto'],
                            id: 'Mom',
                            transform: [[], [], [], ['0.6', '0.6']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Mom.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '75px', '75px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '74px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: false,
                    labels: {
                        "lbl_Over": 0,
                        "lbl_Idle": 127,
                        "lbl_Down": 250
                    },
                    data: [
                        [
                            "eid474",
                            "scaleX",
                            0,
                            127,
                            "linear",
                            "${Mom}",
                            '0.6',
                            '0.7'
                        ],
                        [
                            "eid478",
                            "scaleX",
                            250,
                            104,
                            "linear",
                            "${Mom}",
                            '0.7',
                            '0.6'
                        ],
                        [
                            "eid475",
                            "scaleY",
                            0,
                            127,
                            "linear",
                            "${Mom}",
                            '0.6',
                            '0.7'
                        ],
                        [
                            "eid479",
                            "scaleY",
                            250,
                            104,
                            "linear",
                            "${Mom}",
                            '0.7',
                            '0.6'
                        ]
                    ]
                }
            },
            "sym_Star": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-173px', '-137px', '485px', '404px', 'auto', 'auto'],
                            id: 'Hart_off',
                            transform: [[], [], [], ['0.27', '0.27']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Hart_off.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.2', '1.45']],
                            rect: ['-173px', '-135px', '485px', '404px', 'auto', 'auto'],
                            id: 'Hart_On',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Hart_On.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '133px']
                        }
                    }
                },
                timeline: {
                    duration: 678.08697349733,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 315
                    },
                    data: [
                        [
                            "eid430",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0.2',
                            '0.2'
                        ],
                        [
                            "eid439",
                            "scaleX",
                            315,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0.2',
                            '1.45'
                        ],
                        [
                            "eid427",
                            "scaleX",
                            369,
                            250,
                            "linear",
                            "${Hart_On}",
                            '1.45',
                            '0.28'
                        ],
                        [
                            "eid421",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0',
                            '0'
                        ],
                        [
                            "eid422",
                            "opacity",
                            369,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0',
                            '1'
                        ],
                        [
                            "eid431",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0.19999',
                            '0.19999'
                        ],
                        [
                            "eid440",
                            "scaleY",
                            315,
                            0,
                            "linear",
                            "${Hart_On}",
                            '0.19999',
                            '1.45'
                        ],
                        [
                            "eid428",
                            "scaleY",
                            369,
                            250,
                            "linear",
                            "${Hart_On}",
                            '1.45',
                            '0.27998'
                        ]
                    ]
                }
            },
            "sym_Navigation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['27px', '0px', '167px', '28px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32']],
                            id: 'Rectangle2',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['13px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(144,144,144,1.00)']
                        },
                        {
                            rect: ['58px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(144,144,144,1.00)']
                        },
                        {
                            rect: ['103px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(144,144,144,1.00)']
                        },
                        {
                            rect: ['148px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy5',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(144,144,144,1.00)']
                        },
                        {
                            rect: ['193px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy6',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(144,144,144,1.00)']
                        },
                        {
                            rect: ['13px', '7px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,231,0,0.90)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "lbl_1": 0,
                        "lbl_2": 500,
                        "lbl_3": 1000,
                        "lbl_4": 1500,
                        "lbl_5": 2000
                    },
                    data: [
                        [
                            "eid387",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '193px',
                            '193px'
                        ],
                        [
                            "eid388",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '193px',
                            '148px'
                        ],
                        [
                            "eid389",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '142px',
                            '103px'
                        ],
                        [
                            "eid390",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '97px',
                            '58px'
                        ],
                        [
                            "eid391",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '54px',
                            '13px'
                        ]
                    ]
                }
            },
            "sym_IntroAni": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'AniFrame',
                            stroke: [10, 'rgba(94,94,94,0.00)', 'none'],
                            rect: ['-16px', '-15px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(197,94,94,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_BallsCount": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['2px', '0px', '114px', '44px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            transform: [[], [], [], ['0.32', '0.32']],
                            rect: ['-39px', '-39px', '120px', '120px', 'auto', 'auto'],
                            display: 'block',
                            id: 'Mom2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Mom.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            rect: ['-39px', '-37px', '120px', '120px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Dad2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Dad.png', '0px', '0px']
                        },
                        {
                            rect: ['43', '4', '38', '38', 'auto', 'auto'],
                            id: 'sym_Trials',
                            symbolName: 'sym_Trials',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '116px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Mom": 0,
                        "lbl_Dad": 500
                    },
                    data: [
                        [
                            "eid480",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Mom2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid481",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Mom2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid482",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Dad2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Score": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.7', '0.7']],
                            id: 'Coin_Icon',
                            type: 'image',
                            rect: ['-7px', '-7px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Coin_Icon.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'default',
                            font: ['Hacen_Vanilla_1', [21, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['41px', '3px', '117px', '35px', 'auto', 'auto'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​0</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Black": 0,
                        "lbl_White": 500
                    },
                    data: [
                        [
                            "eid550",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid549",
                            "color",
                            500,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(255,255,255,1)'
                        ]
                    ]
                }
            },
            "sym_Hint": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Hint_Popup2',
                            rect: ['-48px', '-12px', '400px', '118px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            fill: ['rgba(0,0,0,0)', 'images/Hint_Popup2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['2px', '26px', '300px', '50px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​اسم المرحلة</p>',
                            id: 'txtHint',
                            opacity: '1',
                            align: 'center',
                            font: ['GE_Dinar_Two_Medium', [21, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '303px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Explanation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0.65']],
                            id: 'Hint_Popup2',
                            type: 'image',
                            rect: ['0px', '-37px', '600px', '177px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Hint_Popup.png', '0px', '0px']
                        },
                        {
                            font: ['GE_Dinar_Two_Medium', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 't',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: AGA-Rasheeq-Regular;\">​شكراً، تمت المشاركة بنجاح</span></p>',
                            align: 'center',
                            rect: ['4px', '27px', '594px', '56px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_BG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '796px', '475px', 'auto', 'auto'],
                            id: 'BG_Sky',
                            fill: ['rgba(0,0,0,0)', 'images/BG_Sky.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['-62px', '-2px', '919px', '480px', 'auto', 'auto'],
                            id: 'BG_Floor',
                            fill: ['rgba(0,0,0,0)', 'images/BG_Floor.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '796px', '475px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Floor": 0,
                        "lbl_Sky": 500
                    },
                    data: [
                        [
                            "eid543",
                            "display",
                            0,
                            0,
                            "linear",
                            "${BG_Floor}",
                            'block',
                            'block'
                        ],
                        [
                            "eid544",
                            "display",
                            500,
                            0,
                            "linear",
                            "${BG_Floor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid545",
                            "display",
                            500,
                            0,
                            "linear",
                            "${BG_Sky}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn_Help": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Btn_Tuto',
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Tuto.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_HelpImage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '66px', '584px', '347px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'img',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_Close',
                            symbolName: 'btn_Close',
                            cursor: 'pointer',
                            rect: ['667px', '42px', '50', '48', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_Close": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'x-01',
                            rect: ['4px', '3px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/x-01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Trials": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'default',
                            font: ['Hacen_Vanilla_1', [23, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['4px', '4px', '64px', '33px', 'auto', 'auto'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​x 3</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '64px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Black": 0,
                        "lbl_White": 500
                    },
                    data: [
                        [
                            "eid548",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid547",
                            "color",
                            500,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            },
            "btn_Mute": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4px', '3px', '41px', '41px', 'auto', 'auto'],
                            id: 'Btn_sound_on',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_sound_on.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '3px', '41px', '41px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Btn_sound_off',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_sound_off.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '49px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_On": 0,
                        "lbl_Off": 500
                    },
                    data: [
                        [
                            "eid612",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_sound_off}",
                            'none',
                            'block'
                        ],
                        [
                            "eid560",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Btn_sound_on}",
                            'block',
                            'block'
                        ],
                        [
                            "eid561",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_sound_on}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sym_Hart": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '-3px', '48px', '45px', 'auto', 'auto'],
                            id: 'White_Heart',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/White_Heart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 118,
                        "lbl_On": 500
                    },
                    data: [
                        [
                            "eid579",
                            "display",
                            500,
                            0,
                            "linear",
                            "${White_Heart}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Hearts": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '15px', '14px', 'auto', 'auto'],
                            id: 'Full_Heart1',
                            fill: ['rgba(0,0,0,0)', 'images/Full_Heart.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['23px', '5px', '15px', '14px', 'auto', 'auto'],
                            id: 'Full_Heart2',
                            fill: ['rgba(0,0,0,0)', 'images/Full_Heart.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['47px', '0px', '15px', '14px', 'auto', 'auto'],
                            id: 'Full_Heart3',
                            fill: ['rgba(0,0,0,0)', 'images/Full_Heart.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '15px', '14px', 'auto', 'auto'],
                            id: 'Empty_Heart1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Empty_Heart.png', '0px', '0px']
                        },
                        {
                            rect: ['23px', '5px', '15px', '14px', 'auto', 'auto'],
                            id: 'Empty_Heart2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Empty_Heart.png', '0px', '0px']
                        },
                        {
                            rect: ['47px', '0px', '15px', '14px', 'auto', 'auto'],
                            id: 'Empty_Heart3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Empty_Heart.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '14px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    labels: {
                        "lbl_0": 0,
                        "lbl_1": 250,
                        "lbl_2": 500,
                        "lbl_3": 750
                    },
                    data: [
                        [
                            "eid574",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Full_Heart2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid577",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Full_Heart2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid573",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Full_Heart3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid578",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Full_Heart3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid575",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Full_Heart1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid576",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Full_Heart1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Explanation_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-37px', '600px', '177px', 'auto', 'auto'],
                            id: 'Hint_Popup2',
                            transform: [[], [], [], ['1', '0.65']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Hint_Popup.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '21px', '594px', '56px', 'auto', 'auto'],
                            font: ['GE_Dinar_Two_Medium', [29, 'px'], 'rgba(59,59,59,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 't',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: AGA-Rasheeq-Regular;\">​شكراً، تمت المشاركة بنجاح</span></p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'btn_Close',
                            symbolName: 'btn_Close',
                            cursor: 'pointer',
                            rect: ['573px', '-27px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Explanation_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0.65']],
                            id: 'Hint_Popup2',
                            type: 'image',
                            rect: ['0px', '-37px', '600px', '177px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Hint_Popup.png', '0px', '0px']
                        },
                        {
                            font: ['GE_Dinar_Two_Medium', [29, 'px'], 'rgba(59,59,59,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            display: 'block',
                            id: 't',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: AGA-Rasheeq-Regular;\">​حتى تتمكن من فتح القفل، عليك تجميع ثمانية قلوب</span></p>',
                            align: 'center',
                            rect: ['4px', '21px', '594px', '56px', 'auto', 'auto']
                        },
                        {
                            font: ['GE_Dinar_Two_Medium', [29, 'px'], 'rgba(59,59,59,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            display: 'none',
                            id: 'tCopy',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: AGA-Rasheeq-Regular;\">​حتى تتمكن من فتح القفل، عليك تجميع اثنى عشر قلباً</span></p>',
                            align: 'center',
                            rect: ['4px', '21px', '594px', '56px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_Close',
                            symbolName: 'btn_Close',
                            cursor: 'pointer',
                            rect: ['573px', '-27px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_10": 0,
                        "lbl_11": 500
                    },
                    data: [
                        [
                            "eid588",
                            "display",
                            0,
                            0,
                            "linear",
                            "${t}",
                            'block',
                            'block'
                        ],
                        [
                            "eid589",
                            "display",
                            500,
                            0,
                            "linear",
                            "${t}",
                            'block',
                            'none'
                        ],
                        [
                            "eid590",
                            "display",
                            500,
                            0,
                            "linear",
                            "${tCopy}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_ChildsEnter": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sym_Child1',
                            symbolName: 'sym_Child1',
                            rect: ['-1', '-1', '24', '24', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Child2',
                            symbolName: 'sym_Child2',
                            rect: ['29', '-1', '24', '24', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'sym_Child3',
                            symbolName: 'sym_Child3',
                            rect: ['59', '-1', '24', '24', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "sym_Child1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            id: 'Kid_1Copy',
                            opacity: '0.3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            id: 'Kid_1',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 250
                    },
                    data: [
                        [
                            "eid593",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Kid_1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Child2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Kid_2Copy',
                            opacity: '0.3',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            id: 'Kid_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 500
                    },
                    data: [
                        [
                            "eid597",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Kid_2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid594",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Kid_2}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "sym_Child3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Kid_3Copy',
                            opacity: '0.3',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '24px', '24px', 'auto', 'auto'],
                            id: 'Kid_3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Kid_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 500
                    },
                    data: [
                        [
                            "eid595",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Kid_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid598",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Kid_3Copy}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "btn_Info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Btn_Info',
                            rect: ['0px', '0px', '41px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Info.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Lock": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.49', '0.49']],
                            display: 'none',
                            rect: ['-33px', '-41px', '128px', '161px', 'auto', 'auto'],
                            id: 'Level_Close_bounce2',
                            fill: ['rgba(0,0,0,0)', 'images/Level_Close_bounce2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.82', '0.82']],
                            display: 'block',
                            rect: ['-7px', '-9px', '77px', '97px', 'auto', 'auto'],
                            id: 'Level_Close',
                            fill: ['rgba(0,0,0,0)', 'images/Level_Close.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '79px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Normal": 0,
                        "lbl_Bonus": 500
                    },
                    data: [
                        [
                            "eid603",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Level_Close_bounce2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid602",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Level_Close}",
                            'block',
                            'block'
                        ],
                        [
                            "eid604",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Level_Close}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "LOGINSYM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-306px', '-117px', '755px', '290px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.19', '0.19']],
                            id: 'imageeee',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/BTN_LOGINFB.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-1px', '151px', '58px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.97', '0.97']],
                            id: 'FB_AR_YELLOW',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/FB_AR_YELLOW.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 250
                    },
                    data: [
                        [
                            "eid625",
                            "display",
                            250,
                            0,
                            "linear",
                            "${imageeee}",
                            'none',
                            'block'
                        ],
                        [
                            "eid640",
                            "display",
                            0,
                            0,
                            "linear",
                            "${FB_AR_YELLOW}",
                            'block',
                            'block'
                        ],
                        [
                            "eid641",
                            "display",
                            250,
                            0,
                            "linear",
                            "${FB_AR_YELLOW}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "SHARESYM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            type: 'image',
                            id: 'Btn_Share2_OffCopy',
                            display: 'none',
                            rect: ['-90px', '-90px', '225px', '225px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Share2_Off.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                            id: 'Btn_Share2_Off_1',
                            fill: ['rgba(0,0,0,0)', 'images/Btn_Share2_Off_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '45px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "lbl_Off": 0,
                        "lbl_On": 500
                    },
                    data: [
                        [
                            "eid632",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_Share2_OffCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid642",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Btn_Share2_Off_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid643",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Btn_Share2_Off_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-4729542");
