/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         document.ontouchmove = function(e) {e.preventDefault()};
         document.ontouchstart = function(e) {e.preventDefault()};
         document.ontouchend = function(e) {e.preventDefault()};
         
         mouseX = 0, mouseY = 0, isMouseDown = false, firstMX = 0,firstMY = 0,isLevelEnd = false;
			timeStep = 1/60;
			ScaleFactor = 30.0;

		   zoomScale = 1;
		   TheScore = 0;

		   Is_Sound_Muted = false;
		   isFileLoaded = false;
		   IS_SMART_PHONE = false;

         ////////////// START RESIZE FUNCTIONS:
         	$(window).on('resize', function ()
         	{
					 //scaleStage();

				/*	 var transformMatrix = StageRef.css("-webkit-transform") || StageRef.css("-moz-transform") || StageRef.css("-ms-transform") || StageRef.css("-o-transform") || StageRef.css("transform");

				    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
  					 matches = transformMatrix.match(matrixRegex);



				    zoomScale = parseFloat(matches[1]);   
*/
				    //zoomScale = 1;


				    canvasPosition_X = sym.getSymbol("sym_Game").$("game").offset().left;
				    canvasPosition_Y = sym.getSymbol("sym_Game").$("game").offset().top;
         	});

		/*	function changeScale(obj ,value)
			{
				obj.css('transform', 'scale(' + value + ')');
				obj.css('-o-transform', 'scale(' + value + ')');
				obj.css('-ms-transform', 'scale(' + value + ')');
				obj.css('-webkit-transform', 'scale(' + value + ')');
				obj.css('-moz-transform', 'scale(' + value + ')');
			}*/


         	function centerObjHor(obj) 
         	{
         		obj.css({'left':obj.parent().width()/2 - obj.width()/2});
         	}

         	function centerObjVer(obj)
         	{
         		obj.css({'top':obj.parent().height()/2 - obj.height()/2});
         	}
////////////// END RESIZE FUNCTIONS
         	arr_ThemesNames = ["" , "كيف تعمل العائلة" , "تلبية احتياجات ابنائنا" , "بناء الشخصية ووضع حدود وضوابط" , "مساعدة ابنائنا في انتقاء الخيار الصحيح" ,"تمرير القيم والعادات"];
            arr_ThemesColors = ["" , "#cc3333" , "#cccc33" , "#33cc33" , "#3333cc" ,"#cc33cc" ,"#4c1f36"];

            timerId = 0;

            currentTheme = 1;
            levelSelected = 1;

			muteSound = "";
            //LastLevelOpen = 8;

            arr_LastLevelOpen = [0,0,0,0,0,0];
				//arr_LastLevelOpen = [0,9,9,9,9,9];
            gameState = "MainMenu"; //LevelSelect - Game 

            NUM_OF_THEMES = 5;
         	NUM_OF_LEVELS = 9;

         	gender = "Father";

         	gamePath = "Levels/Theme_"+currentTheme+"/Level_"+levelSelected+"/index.html";
         	IS_SMART_PHONE = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

         	GlobalFunctionString = "";

				isSoundOn = true;
				isThemeMoved = false;

				canvas = document.createElement('canvas');
         	canvas.id  = "canvas";
         	canvas.width = sym.getSymbol("sym_Game").$("game").width();
         	canvas.height = sym.getSymbol("sym_Game").$("game").height();
         	canvas.style.position = "absolute";
         	canvas.style.border   = "none";

         	sym.getSymbol("sym_Game").$("game").append(canvas);

         	canvasPosition_X = sym.getSymbol("sym_Game").$("game").offset().left;
         	canvasPosition_Y = sym.getSymbol("sym_Game").$("game").offset().top;

         	canvasWidth = canvas.width;
         	canvasHeight = canvas.height;

         	$("#canvas").css({"left":0,"top":0});
            ctx = canvas.getContext("2d");	

            StarsAniIntervalId = 0;

				StageRef = $("#Stage");
            $(window).resize();
         	init();
         	function init()
         	{
					 //
					 $("div").css({"-webkit-touch-callout":"none"});
					 $("div").css({"-webkit-user-select":"none"});
					 $("div").css({"-khtml-user-select:":"none"});
					 $("div").css({"-webkit-touch-callout:":"none"});
					 $("div").css({"-moz-user-select:":"none"});
					 $("div").css({"user-select:":"none"});

					 $(document.body).css({"background": "url('images/BG_PATTERN.png')"});

					 //document.body.style.backgroundImage = img;
					 bindingButtons();
					 initAudios();

					 sym.getSymbol("sym_MainMenu").getSymbol("sym_IntroAni").$("AniFrame").html('<iframe id="aniFrame" width="800" height="480" scrolling="no" frameborder="0" src="Animations/Introduction.html" ></iframe>');
					 FacebookIntegration();

					 TheScore = GetScoreFromCookies();

					 setGlobalScoreText(TheScore);

					/* bindLevel(1,10);
					 bindLevel(1,11);

					 bindLevel(2,10);
					 bindLevel(2,11);

					 bindLevel(3,10);
					 bindLevel(3,11);

					 bindLevel(4,10);
					 bindLevel(4,11);

					 bindLevel(5,10);*/



					 var level;
					 var theme;
					 for(theme = 1;theme <= NUM_OF_THEMES;theme++)
					 {
						  if(IS_SMART_PHONE)
								  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).$("Lock").bind("touchend",showLockHint10);
						  else
								  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).$("Lock").bind("click",showLockHint10);

						  if(theme < NUM_OF_THEMES)
						  {
								  if(IS_SMART_PHONE)
										  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).$("Lock").bind("touchend",showLockHint11);
								  else
										  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).$("Lock").bind("click",showLockHint11);
						  }
						  else
						  {
								 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).$("sym_Level_"+11).css({"display":"none"});
						  }

						  for(level = 1;level <= NUM_OF_LEVELS;level++)
						  {
								if(getCookie("L_"+theme+"_"+level) != "0")
								{
									arr_LastLevelOpen[theme]++;
									sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+level).getSymbol("sym_Hearts").stop("lbl_"+getCookie("L_"+theme+"_"+level));

									checkToOpenBonus(theme);
								}
								else
								{
									if(level < NUM_OF_LEVELS)
									{
										arr_LastLevelOpen[theme]++;
									}
									else
									{
										if(theme < NUM_OF_THEMES)
											arr_LastLevelOpen[theme+1] = 1;
									}
									checkToOpenBonus(theme);
									theme = NUM_OF_THEMES+1;
									break;
								}
						  }
					 }

					 ///// ADD LOCK POPUP EVENTS
					 for(theme = 1;theme <= NUM_OF_THEMES;theme++)
					 {
						  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).getSymbol("Lock").stop("lbl_Bonus");
						  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).getSymbol("Lock").stop("lbl_Bonus");

						  if(IS_SMART_PHONE)
								sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).$("Lock").bind("touchend",showLockHint10);
						  else
								sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+10).$("Lock").bind("click",showLockHint10);

						  if(theme < NUM_OF_THEMES)
						  {
								  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).getSymbol("Lock").stop("lbl_Bonus");
								  sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).getSymbol("Lock").stop("lbl_Bonus");

								  if(IS_SMART_PHONE)
										sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).$("Lock").bind("touchend",showLockHint11);
								  else
										sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+11).$("Lock").bind("click",showLockHint11);
						  }
						  else
						  {
								 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).$("sym_Level_"+11).css({"display":"none"});
						  }
					 }
         	}

			function goFullScreen(element)
			{
					// go full-screen
					if (element.requestFullscreen) 
					{
						element.requestFullscreen();
					} 
					else 
					if (element.webkitRequestFullscreen) 
					{
						element.webkitRequestFullscreen();
					} 
					else 
					if (element.mozRequestFullScreen) 
					{
						element.mozRequestFullScreen();
					} 
					else 
					if (element.msRequestFullscreen) 
					{
						element.msRequestFullscreen();
					}
			}


         	activateChild = function(childNum)
         	{
					sym.getSymbol("sym_Game").getSymbol("sym_ChildsEnter").getSymbol("sym_Child"+childNum).stop("lbl_On");
         	}

         	deActivateAllChilds = function()
         	{
					sym.getSymbol("sym_Game").getSymbol("sym_ChildsEnter").getSymbol("sym_Child"+1).stop("lbl_Off");
					sym.getSymbol("sym_Game").getSymbol("sym_ChildsEnter").getSymbol("sym_Child"+2).stop("lbl_Off");
					sym.getSymbol("sym_Game").getSymbol("sym_ChildsEnter").getSymbol("sym_Child"+3).stop("lbl_Off");

         	}


         	function showLockHint10()
         	{
					sym.getSymbol("sym_MainMenu").$("sym_HintToUnlock").css({"display":"block"})
					sym.getSymbol("sym_MainMenu").getSymbol("sym_HintToUnlock").stop("lbl_10");
         	}

         	function showLockHint11()
         	{
					sym.getSymbol("sym_MainMenu").$("sym_HintToUnlock").css({"display":"block"})
					sym.getSymbol("sym_MainMenu").getSymbol("sym_HintToUnlock").stop("lbl_11");
         	}

				function getNumOfHearts(themeNum)
				{
					 var sum = 0;
					 for(var i=1 ; i <= arr_LastLevelOpen[themeNum] ; i++)
					 {
						  sum += parseInt( getCookie("L_"+themeNum+"_"+i) );
					 }

					 return sum;
				}

				function checkToOpenBonus(themeNum)
				{
					 var sum = getNumOfHearts(themeNum);
					 if(sum >= 8)
					 {
						   if(parseInt( getCookie("L_"+themeNum+"_"+10) ) != 0)
								sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+themeNum).getSymbol("sym_Level_"+10).getSymbol("sym_Hearts").stop("lbl_"+getCookie("L_"+themeNum+"_"+10));

							bindLevel(themeNum,10);

							if(sum >= 12)
							{
								bindLevel(themeNum,11);

								if(themeNum != 5 && parseInt( getCookie("L_"+themeNum+"_"+11) ) != 0)
									sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+themeNum).getSymbol("sym_Level_"+11).getSymbol("sym_Hearts").stop("lbl_"+getCookie("L_"+themeNum+"_"+11));
							}
					 }
				}

				function bindLevel(theme , levelNum)
				{
					// alert("open level: " + theme + "_" + levelNum);
					 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+levelNum).$("Lock").css({"display":"none"});

					 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).$("sym_Level_"+levelNum).unbind();
					 if(IS_SMART_PHONE)
						 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).$("sym_Level_"+levelNum).bind("touchend",{id:levelNum},function(e){StartLevel(e.data.id)});
					 else
						 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).$("sym_Level_"+levelNum).bind("click",{id:levelNum},function(e){StartLevel(e.data.id)});

					 if(levelNum > 9)
					 {
					  		sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+theme).getSymbol("sym_Level_"+levelNum).getSymbol("sym_Hart").stop("lbl_On");
					 }
				}


				function startIntroMusic(event)
				{
						if(gameState != "Game")
						{
							if( event.src.indexOf("Loop6") != -1 )
								playSound("LoopMM",300);
						}
						else
						{
							if( event.src.indexOf("Loop1") != -1 )
								playSound("Loop",300);
						}
				}

				ChangeBG = function(str)
				{
					sym.getSymbol("sym_Game").getSymbol("sym_BG").stop(str);
				}

				WinLevel = function(score)
				{
					playSound("LevelComplete");
					playExpAni();
					showEndMenu(true);
					sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("txt_EarnedScore").html("x"+0);

					for(var i=1;i<=3;i++)
					{
						sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").getSymbol("sym_Star"+i).stop(0);
					}
					setTimeout(function(){WinEffects(score)},800)
				}

         	LoseLevel = function()
         	{
					showEndMenu(false);

					playSound("Lose");
         	}

         	function setGlobalScoreText(score)    
         	{
         		  sym.getSymbol("sym_Game").getSymbol("sym_Score").$("Text2").html(score);
					  sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("txt_Score").html(score);
					  sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("txt_Score").html(score);
         	}

				function playHintAni()
         	{
					sym.getSymbol("sym_Game").$("sym_Hint").css({"display":"block","opacity":"0.2"});
					sym.getSymbol("sym_Game").getSymbol("sym_Hint").$("txtHint").html(eval("AllJSON.Theme_"+currentTheme+"_Levels["+levelSelected+"]"));

					sym.getSymbol("sym_Game").$("sym_Hint").animate({"opacity":"1"},800,function()
					{
							 sym.getSymbol("sym_Game").$("sym_Hint").animate({"opacity":"0.2"},1000,function()
							 {
									sym.getSymbol("sym_Game").$("sym_Hint").css({"display":"none"});
							 });
					});
         	}

         	function playExpAni()
         	{
					sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("sym_Explanation").css({"display":"block","opacity":"0.2"}); 
					sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").getSymbol("sym_Explanation").$("t").html(eval("AllJSON.Theme_"+currentTheme+"_Explanations["+levelSelected+"]"));

					sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("sym_Explanation").animate({"opacity":"1"},1200,function()
					{
						/*	 sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("sym_Explanation").animate({"opacity":"0.2"},1500,function()
							 {
									sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("sym_Explanation").css({"display":"none"});
							 });*/
					});
         	}

         	function WinEffects(score)
         	{
					AnimateStars(score);
					AnimateScore(score);

					TheScore += (50*score);

					setGlobalScoreText(TheScore);
					SaveScoreToCookies(TheScore);


					//SaveScoreToFB(TheScore);

					//alert(currentTheme + "     " + levelSelected);
					//alert(getCookie("L_"+currentTheme+"_"+levelSelected));
					if(parseInt( getCookie("L_"+currentTheme+"_"+levelSelected) ) < score)
					{
						setCookie("L_"+currentTheme+"_"+levelSelected, score,1000); 
						sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+currentTheme).getSymbol("sym_Level_"+levelSelected).getSymbol("sym_Hearts").stop("lbl_"+score);
					}

					checkToOpenBonus(currentTheme);	

					//alert("levelSelected= "+levelSelected + " arr_LastLevelOpen[currentTheme]=  " +arr_LastLevelOpen[currentTheme]);
					if(levelSelected == arr_LastLevelOpen[currentTheme] && levelSelected <= NUM_OF_LEVELS)
					{
						if(levelSelected == NUM_OF_LEVELS)
						{
							if(currentTheme <NUM_OF_THEMES)
							{
								arr_LastLevelOpen[currentTheme+1] = 1;
								bindLevel(currentTheme+1 , 1);

							}

						}
						arr_LastLevelOpen[currentTheme]++;
						bindLevel(currentTheme , arr_LastLevelOpen[currentTheme]);
					}

					//alert(arr_LastLevelOpen);
         	}

			function AnimateScore(num)
         	{
					var score = num*50;
					curScore = 0;

					playSound("Score2",num*2-2);
					var id = setInterval(function(){
							if(curScore < score)
							{
									curScore+=1;
									sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("txt_EarnedScore").html("x"+curScore);
							}
							else
							{
									//setTimeout(stopAudio,400);
									//stopAudio();
									clearInterval(id);
							}
					},16)
         	}

         	function AnimateStars(num)
         	{
					var curStar = 1;
					StarsAniIntervalId = setInterval(function()
					{
						if(curStar <= num && curStar <= 3)
						{
							 playSound("Star"+curStar);

							 sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").getSymbol("sym_Star"+curStar).play("lbl_On");
							 curStar++;
						}
						else
							 clearInterval(StarsAniIntervalId);

					},600)
         	}
         ////
         	function showEndMenu(isWin)
         	{
         		 stopTimer();

         		 sym.getSymbol("sym_Game").$("sym_HelpImage").css({"display":"none"});  
         		 sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"block"});

				 stopSound();

         		 if(isWin)
         		 {
						//playSound("Win");

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").stop("lbl_Win");
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").play("lbl_Show");
         		 }
         		 else
         		 {
						//playSound("Lose");

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").stop("lbl_Lose");
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").play("lbl_Show");
         		 }
         	}

         	function runHelp()
         	{
						playSound("ClickTut");
         		   sym.getSymbol("sym_Game").$("sym_HelpImage").css({"display":"block"});                  //HelpImg_1_1
						sym.getSymbol("sym_Game").getSymbol("sym_HelpImage").$("img").html("<img src='images/HelpImages/HelpImg_"+currentTheme+"_"+levelSelected+".png'>");
         	}

         	function bindingButtons()
         	{
         		if(IS_SMART_PHONE)
         		{
         				sym.getSymbol("sym_MainMenu").$("btn_Start").bind('touchend', GoToGenderMenu);
         				sym.getSymbol("sym_MainMenu").$("btn_FB").bind('touchend', LoginToFacebook);

         				sym.getSymbol("sym_MainMenu").$("btn_NextTheme").bind("touchend",function(){GlobalFunctionString.nextTheme()});
         				sym.getSymbol("sym_MainMenu").$("btn_BackTheme").bind("touchend",function(){GlobalFunctionString.prevTheme()});
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Pause").bind("touchend",pauseGameUI);
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Home").bind("touchend",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Replay").bind("touchend",replay);
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_LevelSelect").bind("touchend",returnToLevelSelect);

							sym.getSymbol("sym_Game").$("btn_Help").bind("touchend",runHelp);

							sym.getSymbol("sym_Game").$("btn_Mute").bind("touchend",function(){muteSound()});
							sym.getSymbol("sym_MainMenu").$("btn_Mute").bind("touchend",function(){muteSound()});

         				sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").$("btn_Father").bind("touchend",SelectFatherGender);
         				sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").$("btn_Mother").bind("touchend",SelectMotherGender);

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Replay").bind("touchend",replay);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Home").bind("touchend",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_LevelSelect").bind("touchend",returnToLevelSelect);
							sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_NextLevel").bind("touchend",nextLevel);
							sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Share").bind("touchend",postScoreToFacebook);

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_Replay").bind("touchend",replay);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_Home").bind("touchend",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_LevelSelect").bind("touchend",returnToLevelSelect);
         		}
         		else
         		{
         				sym.getSymbol("sym_MainMenu").$("btn_Start").bind('click', GoToGenderMenu);
         				sym.getSymbol("sym_MainMenu").$("btn_FB").bind('click', LoginToFacebook);

         				sym.getSymbol("sym_MainMenu").$("btn_NextTheme").bind("click",function(){GlobalFunctionString.nextTheme()});
         				sym.getSymbol("sym_MainMenu").$("btn_BackTheme").bind("click",function(){GlobalFunctionString.prevTheme()});
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Pause").bind("click",pauseGameUI);
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Home").bind("click",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_Replay").bind("click",replay);
         			   sym.getSymbol("sym_Game").getSymbol("sym_Pause").$("btn_LevelSelect").bind("click",returnToLevelSelect);

							sym.getSymbol("sym_Game").$("btn_Help").bind("click",runHelp);

							sym.getSymbol("sym_Game").$("btn_Mute").bind("click",function(){muteSound()});
							sym.getSymbol("sym_MainMenu").$("btn_Mute").bind("click",function(){muteSound()});

         				sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").$("btn_Father").bind("click",SelectFatherGender);
         				sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").$("btn_Mother").bind("click",SelectMotherGender);

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Replay").bind("click",replay);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Home").bind("click",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_LevelSelect").bind("click",returnToLevelSelect);
							sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_NextLevel").bind("click",nextLevel);
							sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").$("btn_Share").bind("click",postScoreToFacebook);

         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_Replay").bind("click",replay);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_Home").bind("click",returnToHomeMenu);
         				sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_LoseMenu").$("btn_LevelSelect").bind("click",returnToLevelSelect);
         		}
         		sym.getSymbol("sym_MainMenu").getSymbol("btn_BackTheme").stop("lbl_Inactive");
         	}

         	function shareToFacebook()
         	{
					 //alert("enter shareToFacebook");
					 ShareScore();
         	}

         	function postScoreToFacebook()
         	{
					  PostScore(TheScore);
         	}

         	muteSound = function()
         	{
					if(Is_Sound_Muted)
					{
						 sym.getSymbol("sym_Game").getSymbol("btn_Mute").stop("lbl_On");
						 sym.getSymbol("sym_MainMenu").getSymbol("btn_Mute").stop("lbl_On");

						 createjs.Sound.muted = false;
						 Is_Sound_Muted = false;
					}
					else
					{
						 sym.getSymbol("sym_Game").getSymbol("btn_Mute").stop("lbl_Off");
						 sym.getSymbol("sym_MainMenu").getSymbol("btn_Mute").stop("lbl_Off");

						 createjs.Sound.muted = true;
						 Is_Sound_Muted = true;
					}
         	}

         	function nextLevel()
         	{
					  playSound("Click");
					  if(levelSelected == NUM_OF_LEVELS)
					  {
							  levelSelected = 10;
							  sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});								
							  StartLevel(levelSelected);
					  }
					  else
					  if(levelSelected == NUM_OF_LEVELS+1)// bonus 1 (10)
					  {
							  if(parseInt( getNumOfHearts(currentTheme) ) >= 12)
							  {
									  levelSelected = 11;
									  sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});								
									  StartLevel(levelSelected);
							  }
							  else
							  {
									  if(currentTheme < NUM_OF_THEMES)
									  {
											 levelSelected = 1;
											 GlobalFunctionString.nextTheme();

											 sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});								
											 StartLevel(levelSelected);
									  }
							  }
					  }
					  else
					  if(levelSelected == NUM_OF_LEVELS+2)//bonus 2(11)
					  {
							 if(currentTheme < NUM_OF_THEMES)
							 {
									levelSelected = 1;
									GlobalFunctionString.nextTheme();

									sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});								
									StartLevel(levelSelected);
							 }
					  }
					  else
					  if(levelSelected < arr_LastLevelOpen[currentTheme])
					  {
							levelSelected++;

							sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});								
							StartLevel(levelSelected);
					  }
         	}

         	function GoToGenderMenu()
         	{
					playSound("Click");
					sym.getSymbol("sym_MainMenu").stop("lbl_GenderBox");

			//		goFullScreen(document.documentElement);
         	}

			function SelectMotherGender()
			{
				   //playSound("Click");
					sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").getSymbol("btn_Father").stop(0);
					sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").getSymbol("btn_Mother").stop("lbl_Selected");
					gender = "Mother";

					SelectedParentImg.src = 'images/Mom.png';
					OtherParentImg.src = 'images/Dad.png';

					HomeImg.src = 'images/Home_dad.png';

					sym.getSymbol("sym_Game").getSymbol("sym_BallsCount").stop("lbl_Mom");

			//changeFacebookButtonState(true);
					GoToLevelSelect();
			}

			function SelectFatherGender()
			{
					// playSound("Click");
					sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").getSymbol("btn_Mother").stop(0);
					sym.getSymbol("sym_MainMenu").getSymbol("sym_SelectGender").getSymbol("btn_Father").stop("lbl_Selected");
					gender = "Father";

					SelectedParentImg.src = 'images/Dad.png';
					OtherParentImg.src = 'images/Mom.png';

					HomeImg.src = 'images/Home_mom.png';

					sym.getSymbol("sym_Game").getSymbol("sym_BallsCount").stop("lbl_Dad");
					GoToLevelSelect();
			}

			incScore = function(val)
			{
				 //get player global score
				 //inc score by val

				 //sym.getSymbol("sym_Game").getSymbol("sym_Score").$("Text2").html(num);
			}

			setTries = function(num)
			{
				//if()
				sym.getSymbol("sym_Game").getSymbol("sym_BallsCount").getSymbol("sym_Trials").$("Text2").html("x "+num);
			}

         	isGamePaused = false;
         	function pauseGameUI()
         	{
					playSound("Click");
         		if(isGamePaused)
         		{
         			sym.getSymbol("sym_Game").getSymbol("sym_Pause").playReverse("lbl_Close");
         			sym.getSymbol("sym_Game").getSymbol("sym_Pause").getSymbol("sym_ToggleImage").stop("lbl_Resume");

						resumeGame();

         			isGamePaused = false;
         			startTimer();
         		}  
         		else  
         		{  
         			sym.getSymbol("sym_Game").getSymbol("sym_Pause").play("lbl_Open");
         			sym.getSymbol("sym_Game").getSymbol("sym_Pause").getSymbol("sym_ToggleImage").stop("lbl_Pause");

						pauseGame();

         			isGamePaused = true;
         			stopTimer();
         		}
         	}

         	function returnToHomeMenu()
         	{
         	   clearInterval(StarsAniIntervalId);

         		sym.getSymbol("sym_MainMenu").getSymbol("sym_IntroAni").$("AniFrame").html('<iframe id="aniFrame"  width="100%" height="100%" scrolling="no" frameborder="0" src="Animations/Introduction.html" ></iframe>');

         	 	stopSound();
					playSound("Click");

					playSound("LoopMM",300);

         		//pauseGame();
         		gameState = "MainMenu";
         		sym.$("sym_MainMenu").css({"display":"block"});
         		sym.getSymbol("sym_MainMenu").stop("lbl_Main");
         		sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});
         		//sym.getSymbol("sym_Game").$("game").html('');

         		isGamePaused = false;
         	}

         	function returnToLevelSelect()
         	{
         	    clearInterval(StarsAniIntervalId);
					 startThemeAnimation(currentTheme);

					 stopSound();
					 playSound("Click");
					 playSound("LoopMM",300);

					 gameState = "LevelSelect";
         	    sym.$("sym_MainMenu").css({"display":"block"});

         	    sym.getSymbol("sym_MainMenu").stop("lbl_LevelSelect");
         	    sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});

					 isGamePaused = false;
         	}

         	function replay()
         	{
				//	playSound("Click");

         		sym.getSymbol("sym_Game").$("sym_EndMenu").css({"display":"none"});

         		sym.getSymbol("sym_Game").getSymbol("sym_Pause").stop("lbl_Open");
         		isGamePaused = false;
         		// //pauseGame();
         		loadGame();
         	}

         	function GoToLevelSelect()
         	{
					 sym.getSymbol("sym_MainMenu").getSymbol("sym_IntroAni").$("AniFrame").html("");

					 playSound("Click");

					 startThemeAnimation(currentTheme);
         		 gameState = "LevelSelect";

         		 sym.getSymbol("sym_MainMenu").stop("lbl_LevelSelect");
         		 initLevels();
         	}

         	function initLevels()
         	{
					sym.getSymbol("sym_MainMenu").$("themeTxt").html(arr_ThemesNames[currentTheme]);
					for(var t=1;t <= NUM_OF_THEMES;t++)
					{
						for(var l=1;l <= NUM_OF_LEVELS;l++)
						{
								 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+t).getSymbol("sym_Level_"+l).$("txt").text(l);
								 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+t).getSymbol("sym_Level_"+l).$("color").css({"background-color":arr_ThemesColors[t]});

								 if(l > arr_LastLevelOpen[t])
								 {
										//sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+t).getSymbol("sym_Level_"+l).$("Lock").css({"display":"block"});
								 }
								 else
								 {
										bindLevel(t , l);
								 }
						}	

						sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+t).getSymbol("sym_Level_"+10).$("color").css({"background-color":arr_ThemesColors[t]});

						if(t != 5)
							sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").getSymbol("sym_Levels_T"+t).getSymbol("sym_Level_"+11).$("color").css({"background-color":arr_ThemesColors[t]});
					}
         	}

         	function StartLevel(levelNum)
         	{
         		gameState = "Game";

         		levelSelected = levelNum;
         		gamePath = "Levels/Theme_"+currentTheme+"/Level_"+levelSelected+"/index.js";

					loadGame();

         		sym.$("sym_MainMenu").css({"display":"none"});
         		sym.getSymbol("sym_Game").getSymbol("sym_Pause").stop("lbl_Open");
         		playHintAni();
			  }

         	function loadGame()
         	{
				//goFullScreen(document.documentElement);

				//goFullScreen(Stage);

				clearInterval(StarsAniIntervalId);

				deActivateAllChilds();   

				if(currentTheme == 1 && levelSelected == 1)
				{
					if(  getCookie("IFirstTime") == "0"  )
					{
						runHelp();
						setCookie("IFirstTime", "1",1000); 
					}

				}

				stopSound();
				if(currentTheme == 5 && (levelSelected == 2 || levelSelected == 3) )
				{
					 sym.getSymbol("sym_Game").getSymbol("sym_Score").stop("lbl_White");
					 sym.getSymbol("sym_Game").getSymbol("sym_BallsCount").getSymbol("sym_Trials").stop("lbl_White");
				}
				else
				{
					 sym.getSymbol("sym_Game").getSymbol("sym_Score").stop("lbl_Black");
					 sym.getSymbol("sym_Game").getSymbol("sym_BallsCount").getSymbol("sym_Trials").stop("lbl_Black");
				}

				if(gender == "Mother")
				{
					 SelectedParentImg.src = MomImg.src;
					 OtherParentImg.src = DadImg.src;
				}
				else
				{
					 SelectedParentImg.src = DadImg.src;
					 OtherParentImg.src = MomImg.src;
				}

				playSound("Loop",300);

				if(document.getElementById(currentTheme+"_"+levelSelected))
				{
					$(window["Level_"+currentTheme+"_"+levelSelected].startLevel());
				}
				else
				{
					var script = document.createElement("script");
					script.setAttribute("type", "text/javascript");
					script.setAttribute("src", gamePath);
					script.id = currentTheme+"_"+levelSelected;
					document.getElementsByTagName("head")[0].appendChild(script);
				}

				playSound("Click");
				sym.getSymbol("sym_Game").getSymbol("sym_Pause").getSymbol("sym_ToggleImage").stop("lbl_Resume");
				sym.getSymbol("sym_MainMenu").getSymbol("sym_Animation").$("canvasAni").html('');
				sandLevel = 0;

         		stopTimer();
         		startTimer();
         		count = 0;

         		sym.getSymbol("sym_Game").$("txt").html(eval("AllJSON.Theme_"+currentTheme+"_Levels["+levelSelected+"]"));
         	}

				//////////////////////////////////
         	function startThemeAnimation(themeNum)
         	{
					sym.getSymbol("sym_MainMenu").getSymbol("sym_Animation").$("canvasAni").html('<iframe id="aniFrame"  width="100%" height="100%" scrolling="no" frameborder="0" src="Animations/Theme'+themeNum+'.html" ></iframe>');
         	}

         	String.prototype.nextTheme = function()
         	{
         			if(currentTheme < NUM_OF_THEMES && !isThemeMoved)  //sym_Themes
         			{
								playSound("Swipe");
         					if(currentTheme == 1)
         						sym.getSymbol("sym_MainMenu").getSymbol("btn_BackTheme").stop("lbl_Active");

         					var distanceToAnimate = parseInt(sym.getSymbol("sym_MainMenu").$("sym_Themes").width());
         					//animate current and hide it
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).animate({"left":"+="+distanceToAnimate+"px"},600);
         					hideScene(currentTheme);

         					currentTheme++;
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Navigation").stop("lbl_"+(currentTheme));

         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Animation").stop("lbl_"+currentTheme);

         					//initLevels(currentTheme);
								sym.getSymbol("sym_MainMenu").$("themeTxt").html(arr_ThemesNames[currentTheme]);

         					//show next and reposition it and animate it
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).css({"opacity":"1"});
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).css({"left": -1 * distanceToAnimate});
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).animate({"left":0},600);

         					if(currentTheme == NUM_OF_THEMES)
         						sym.getSymbol("sym_MainMenu").getSymbol("btn_NextTheme").stop("lbl_Inactive");
         					//$(window).resize();

         					startThemeAnimation(currentTheme);
         			}
         	}

         	function hideScene(sNum)
         	{					
					isThemeMoved = true;		
         			setTimeout(function()
         			{
         				 isThemeMoved = false;	
         				 sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+sNum).css({"opacity":"0"});
         			},500);
         	}

         	String.prototype.prevTheme = function()
         	{
         			if(currentTheme > 1 && !isThemeMoved)
         			{
							playSound("Swipe");

         					if(currentTheme == NUM_OF_THEMES)
         						sym.getSymbol("sym_MainMenu").getSymbol("btn_NextTheme").stop("lbl_Active");

         					var distanceToAnimate = parseInt(sym.getSymbol("sym_MainMenu").$("sym_Themes").width());

         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).animate({"left":"-="+distanceToAnimate+"px"},500);
         					hideScene(currentTheme);

         					currentTheme--;
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Navigation").stop("lbl_"+(currentTheme));

         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Animation").stop("lbl_"+currentTheme);

         					//initLevels(currentTheme);
         					sym.getSymbol("sym_MainMenu").$("themeTxt").html(arr_ThemesNames[currentTheme]);

         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).css({"opacity":"1"});
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).css({"left":distanceToAnimate });
         					sym.getSymbol("sym_MainMenu").getSymbol("sym_Themes").$("sym_Levels_T"+currentTheme).animate({"left":0},500);

         					if(currentTheme == 1)
         						sym.getSymbol("sym_MainMenu").getSymbol("btn_BackTheme").stop("lbl_Inactive");
         					//$(window).resize();	

         					startThemeAnimation(currentTheme);
         			}
         	}

         	sandLevel = 0;
         	function stopTimer()
         	{
         		clearInterval(timerId);
         	}

         	function startTimer()
         	{
				//sym.getSymbol("sym_Game").getSymbol("sym_Timer").$("txt").html();
         		startTime = +new Date().getTime();

         		//clearInterval(timerId);
         		//timerId=0;

         	   //	timerId = setInterval(timerComputation,100);//end interval
         	}//end start timer
				//timerCounter = 0.035;
         	timerComputation = function(timerCounter)
         	{
				if(!timerCounter)
					return;
         			sandLevel+=timerCounter;

         			if(sandLevel >= 50)
							endLevel();

         			//sym.getSymbol("sym_Game").getSymbol("sym_Timer").$("txt").html(text_M2+''+text_M1+':'+text_S2+''+text_S1);

         			sym.getSymbol("sym_Game").getSymbol("sym_Timer").$("timerRect").css({"height":50-sandLevel});
         	}

			loops1 = null;
			loops2 = null;
			function initAudios() 
			{
				 var audioPath = "sounds/";
				 var sounds = [{
							src:"CombinedSfx.mp3", data: {
								audioSprite: [
									  {id:"Click", startTime:0, duration:700},

									  {id:"Star1", startTime:4900, duration: 1000},
									  {id:"Star2", startTime:3050, duration: 1300},
									  {id:"Star3", startTime:1350, duration: 1300},

									  {id:"Glass", startTime:7148, duration: 1000},

									  {id:"ClickTut", startTime:9146, duration: 700},
									  {id:"Hit_Theqel", startTime:10100, duration: 800},

									  {id:"Hit_Plastic", startTime:11050, duration: 550},
									  {id:"MouseOver", startTime:12054, duration: 600},

									  {id:"Lose", startTime:13000, duration: 1400},
									  {id:"LevelComplete", startTime:14501, duration: 800},

									  {id:"Hit_Lego", startTime:15739, duration: 500},
									  {id:"EnterHome", startTime:16915, duration:900},

									  {id:"EyesLook", startTime:18625, duration:900},
									  {id:"Score", startTime:19999, duration:500},

									  {id:"Hammer", startTime:21044, duration:600},
									  {id:"CartFall", startTime:22000, duration:1700},

									  {id:"InGameButton", startTime:24097, duration:1000},
									  {id:"BoxesFall", startTime:25195, duration:900},

									  {id:"Hit_1", startTime:26328, duration:900},
									  {id:"Swipe", startTime:5993, duration: 490},

									  {id:"Score2", startTime:27650, duration: 400},
									  {id:"Dead", startTime:28972, duration: 700},

									  {id:"EndBonus", startTime:30450, duration: 820},
									  {id:"EnterHome2", startTime:32170, duration: 1100}


									  //{id:"Loop", startTime:27511, duration: 21600},
									  //{id:"LoopMM", startTime:247026, duration: 50000}
							]},
					  }];



				createjs.Sound.addEventListener("fileload", startIntroMusic);

				createjs.Sound.registerSounds(sounds, audioPath);
				createjs.Sound.registerSound(audioPath+"Loop6.mp3", "LoopMM");

				createjs.Sound.registerSound(audioPath+"Loop1.mp3", "Loop1");
				createjs.Sound.registerSound(audioPath+"Loop2.mp3", "Loop2");
				createjs.Sound.registerSound(audioPath+"Loop3.mp3", "Loop3");
				createjs.Sound.registerSound(audioPath+"Loop4.mp3", "Loop4");
				createjs.Sound.registerSound(audioPath+"Loop5.mp3", "Loop5");

				playSound = function(name,loops)
				{
						//if(!Is_Sound_Muted)
						//{
								if(loops)
								{
									if(name == "LoopMM")
									{
										//createjs.Sound.off("fileload", startIntroMusic, this);
										//alert("play mm loop");
										if(loops1 == null)
										{
											loops1 = createjs.Sound.play(name,{loop:loops});
										}
										else
										{

											loops1.stop();

											loops1.play({loop:loops});

											isFileLoaded = true;
										}

										StartLoobMM();
									}
									else
									if(name == "Loop")
									{
										//alert(currentTheme);
										switch(currentTheme)
										{
											case 1:
												name = "Loop1";
											break;
											case 2:
												name = "Loop2";
											break;
											case 3:
												name = "Loop3";
											break;
											case 4:
												name = "Loop4";
											break;
											case 5:
												name = "Loop5";
											break;	
										}

										if(loops2)
											loops2.stop();

										//if(loops2 == null)
											loops2 = createjs.Sound.play(name,{loop:loops});
										//else
										//{

										//	loops2.play({loop:loops});

										//}

											StartLoobIG();
									}
									else
										createjs.Sound.play(name,{loop:loops});


									//loops1.volume = 1;
								}
								else
								{
									createjs.Sound.play(name);

								}
						//}
				}

				stopSound = function()
				{
					//createjs.Sound.stop();
				}


				function StartLoobMM()
				{
					var vol = 0;
					if(loops1)
						loops1.volume = vol;

					if(loops2)
						loops2.volume = 0.7;

					var intId = setInterval(function()      //gameState = "MainMenu"; //LevelSelect - Game 
					{
						vol+=0.1;

						if(!Is_Sound_Muted)
						{
							if(loops2  && loops2.volume > 0.7-vol )
								loops2.volume = 0.7-vol;

							if(loops1)
								loops1.volume = vol;
						}
						else
						{
							if(loops1)
								loops1.volume = 0.7;

							if(loops2)
								loops2.volume = 0;

							clearInterval(intId);
						}

						if(0.7-vol <= 0)
						{
							//loops2.stop();
							clearInterval(intId);
						}
					},150)
				}

				function StartLoobIG()
				{
					var vol = 0;
					if(loops2)
						loops2.volume = vol;


					var intId = setInterval(function()      //gameState = "MainMenu"; //LevelSelect - Game 
					{
						vol+=0.1;

						if(!Is_Sound_Muted)
						{
							if(loops1 && loops1.volume > 0.7-vol )
								loops1.volume = 0.7-vol;

							if(loops2)
								loops2.volume = vol;
						}
						else
						{
							if(loops1)
								loops1.volume = 0;

							if(loops2)
								loops2.volume = 0.7;

							clearInterval(intId);
						}


						if(0.7-vol <= 0)
						{
							//loops1.stop();
							clearInterval(intId);
						}
					},150)
				}
         }

////////// FACEBOOK FUNCTIONS ///////////
        function FacebookIntegration()
		{
					window.fbAsyncInit = function() {
						FB.init({
						  appId      : '1538290383136675',
						  xfbml      : true,
						  version    : 'v2.5'
						});

						LogoutFromFacebook();
					};

				  (function(d, s, id)
				  {
						 var js, fjs = d.getElementsByTagName(s)[0];
						 if (d.getElementById(id)) 
						 {
							  return;
						 }
						 js = d.createElement(s); 
						 js.id = id;
						 js.src = "//connect.facebook.net/en_US/sdk.js";
						 fjs.parentNode.insertBefore(js, fjs);



					}(document, 'script', 'facebook-jssdk'));
		}

         function SaveScoreToFB(scoreP)
         {
					//fb
					FB.getLoginStatus(function(response) 
					{
						  if (response.status === 'connected') 
						  {
								 FB.api('/me/scores', 'post', { score: scoreP }, function(response) {
									  if (!response || response.error) 
									  {
										  // alert('Error occured');
									  } 
									  else 
									  {
										  // alert('success');
									  }
								 });
						  } 
						  else 
						  if (response.status === 'not_authorized') 
						  {
								//the user is logged in to Facebook, 
								//but has not authenticated your app
						  } 
						  else 
						  {
								//the user isn't logged in to Facebook.
						  }
					 });
         }

		 function ShareScore()
         {
				 FB.ui(
				 {
					  method: 'share',
					  href: 'http://www.mediaplusdemos.com/demos/ParentingGame/'
				 }, function(response){

						console.log(response);

				 });
         }

		 function LogoutFromFacebook()
		 {
					FB.getLoginStatus(function(response) 
					{
						  if (response.status === 'connected') 
						  {
							   console.log("logged in & authenticated");
							   FB.logout(function(response) 
							   {
							       console.log('User logout');	
							       console.log(response);
							   });
						  } 
					});
		 }


		 function LoginToFacebook()
         {
					FB.getLoginStatus(function(response) 
					{
						  if (response.status === 'connected') 
						  {
							   console.log("logged in & authenticated");
							   FB.logout(function(response) 
							   {
							       console.log('User logout');	
							       console.log(response);
							   });
						  } 
						  else 
						  if (response.status === 'not_authorized') 
						  {
								console.log("not_authorized");
								FB.login(function(response) 
								{
										if (response.authResponse) 
										{
											  changeFacebookButtonState(true);
											  console.log('User login');	
										} 
										else 
										{
											  console.log('User cancelled login');	
										}
								 }, {scope:'email,publish_actions'});
						  } 
						  else 
						  {
								console.log("isn't logged in");
								FB.login(function(response) 
								{
										if (response.authResponse) 
										{
											 changeFacebookButtonState(true);
											 console.log('User login');	
										} 
										else 
										{
											 console.log('User cancelled login');	
										}
								 }, {scope:'email,publish_actions'});
						  }
					}); 
         }

         function changeFacebookButtonState(IsLoggedIn)   
         {
					sym.getSymbol("sym_MainMenu").getSymbol("btn_FB").getSymbol("LOGINSYM").stop(IsLoggedIn ? "lbl_On" : "lbl_Off");   
					sym.getSymbol("sym_Game").getSymbol("sym_EndMenu").getSymbol("sym_WinMenu").getSymbol("btn_Share").getSymbol("SHARESYM").stop(IsLoggedIn ? "lbl_On" : "lbl_Off");
         }

			function PostScore(scoreP)
			{
				var body = ' لقد حصلت على '+scoreP +' نقطة في لعبة عائلتي، العبها الاّن ونافسني!  \n http://www.ourfamilylife.net/ailaty/';
				FB.getLoginStatus(function(response) 
				{
					  if (response.status === 'connected') 
					  {
							 console.log("logged in & authenticated");
							 FB.api('/me/feed', 'post', { message: body }, function(response) 
							 {  
								  if (!response || response.error) 
								  {
										console.log('Error occured   ' + response.error);
										console.log(response.error);
								  } 
								  else 
								  {
										sym.getSymbol("sym_Game").$("sym_FBFB").css({"display":"block"});
										console.log('Post ID: ' + response.id);	 
								  }  
							 });
					  } 
					  else 
					  if (response.status === 'not_authorized') 
					  {
							console.log("not_authorized");
							FB.login(function(response) 
							{
									if (response.authResponse) 
									{
									changeFacebookButtonState(true)  ;
										 FB.api('/me/feed', 'post', { message: body }, function(response) 
										 {  
											  if (!response || response.error) 
											  {
													console.log('Error occured   ' + response.error);
											  } 
											  else 
											  {
													sym.getSymbol("sym_Game").$("sym_FBFB").css({"display":"block"});
													console.log('Post ID: ' + response.id);	 
											  }  
										 });
									} 
									else 
									{
										 console.log('User cancelled login');	
									}
							 }, {scope:'email,publish_actions'});
					  } 
					  else 
					  {
							console.log("isn't logged in");
							FB.login(function(response) 
							{
									if (response.authResponse) 
									{
										 changeFacebookButtonState(true)  ;
										 FB.api('/me/feed', 'post', { message: body }, function(response) 
										 {  
											  if (!response || response.error) 
											  {
													console.log('Error occured   ' + response.error);
											  } 
											  else 
											  {
													sym.getSymbol("sym_Game").$("sym_FBFB").css({"display":"block"});
													console.log('Post ID: ' + response.id);	 
											  }  
										 });
									} 
									else 
									{
										 console.log('User cancelled login');	
									}
							 }, {scope:'email,publish_actions'});
					  }
				}); 
         }

         function hideFBPopUp()
         {
				 sym.getSymbol("sym_Game").$("sym_FBFB").css({"display":"none"});
         }

////////// COOKIES FUNCTIONS ///////////
		   function SaveScoreToCookies(scoreP)
         {
				setCookie("score", scoreP,1000); 	

         }

		   function GetScoreFromCookies()
         {
				TheScore = getCookie("score");
				return Number(TheScore);
         }

		 function setCookie(cname, cvalue, exdays) 
		 {
			 var d = new Date();
			 d.setTime(d.getTime() + (exdays*24*60*60*1000));
			 var expires = "expires="+d.toUTCString();
			 document.cookie = cname + "=" + cvalue + "; " + expires;
		 }


		 function getCookie(cname) 
		 {
			var name = cname + "=";
			var ca = document.cookie.split(';');

			for(var i=0; i<ca.length; i++) 
			{
				var c = ca[i];
				while (c.charAt(0) == ' ') 
					c = c.substring(1);


				if (c.indexOf(name) == 0) 
				{
					return c.substring(name.length , c.length);

				}
			}
			return "0";
		}

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_MainMenu'
   (function(symbolName) {   
      

      Symbol.bindElementAction(compId, symbolName, "${sym_Themes}", "swipeleft", function(sym, e) {
         GlobalFunctionString.prevTheme();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Themes}", "swiperight", function(sym, e) {
         GlobalFunctionString.nextTheme();
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_Info}", "click", function(sym, e) {
         window.open("http://www.alphaegypt.org/ailaty");//ailaty

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Info}", "touchend", function(sym, e) {
         window.open("http://www.alphaegypt.org/ailaty");//ailaty

      });
      //Edge binding end

   })("sym_MainMenu");
   //Edge symbol end:'sym_MainMenu'

   //=========================================================
   
   //Edge symbol: 'btn_Start'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("btn_Start");
   //Edge symbol end:'btn_Start'

   //=========================================================
   
   //Edge symbol: 'sym_Game'
   (function(symbolName) {   
   
   })("sym_Game");
   //Edge symbol end:'sym_Game'

   //=========================================================
   
   //Edge symbol: 'sym_Levels'
   (function(symbolName) {   
   
   })("sym_Levels");
   //Edge symbol end:'sym_Levels'

   //=========================================================
   
   //Edge symbol: 'sym_Levels_1'
   (function(symbolName) {   
   
   })("sym_Themes");
   //Edge symbol end:'sym_Themes'

   //=========================================================
   
   //Edge symbol: 'sym_Theme'
   (function(symbolName) {   
   
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop("lbl_Over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end
	  Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end
	  Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end
	  Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end
	  Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end
	  Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 153, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 366, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 731, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_Hart}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Lock}", "click", function(sym, e) {
         sym.play("lbl_ClickLocked");
         playSound("ClickOnLock");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Lock}", "touchend", function(sym, e) {
         sym.play("lbl_ClickLocked");
         playSound("ClickOnLock");

      });
      //Edge binding end

   })("sym_Theme");
   //Edge symbol end:'sym_Theme'

   //=========================================================
   
   //Edge symbol: 'btn_Start_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("btn_Settings");
   //Edge symbol end:'btn_Settings'

   //=========================================================
   
   //Edge symbol: 'btn_BackTheme'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("btn_BackTheme");
   //Edge symbol end:'btn_BackTheme'

   //=========================================================
   
   //Edge symbol: 'btn_BackTheme_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("btn_NextTheme");
   //Edge symbol end:'btn_NextTheme'

   //=========================================================
   
   //Edge symbol: 'sym_Timer'
   (function(symbolName) {   
   
   })("sym_Timer");
   //Edge symbol end:'sym_Timer'

   //=========================================================
   
   //Edge symbol: 'sym_Pause'
   (function(symbolName) {   
   
   })("sym_Pause");
   //Edge symbol end:'sym_Pause'

   //=========================================================
   
   //Edge symbol: 'btn_Replay'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy2}", "mouseleave", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

   })("btn_Replay");
   //Edge symbol end:'btn_Replay'

   //=========================================================
   
   //Edge symbol: 'btn_Replay_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rect}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

   })("btn_Home");
   //Edge symbol end:'btn_Home'

   //=========================================================
   
   //Edge symbol: 'sym_EndMenu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_Info}", "click", function(sym, e) {
         window.open("http://www.alphaegypt.org/ailaty");//ailaty

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Info}", "touchend", function(sym, e) {
         window.open("http://www.alphaegypt.org/ailaty");//ailaty

      });
      //Edge binding end

   })("sym_EndMenu");
   //Edge symbol end:'sym_EndMenu'

   //=========================================================
   
   //Edge symbol: 'btn_Replay_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rectCopy}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      })("btn_Share");
   //Edge symbol end:'btn_Share'

   //=========================================================
   
   //Edge symbol: 'sym_Animation'
   (function(symbolName) {   
   
   })("sym_Animation");
   //Edge symbol end:'sym_Animation'

   //=========================================================
   
   //Edge symbol: 'btn_Home_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      })("btn_LevelSelect");
   //Edge symbol end:'btn_LevelSelect'

   //=========================================================
   
   //Edge symbol: 'sym_ToggleImage'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.stop("lbl_Resume");

      });
      //Edge binding end

   })("sym_ToggleImage");
   //Edge symbol end:'sym_ToggleImage'

   //=========================================================
   
   //Edge symbol: 'sym_LoseMenu'
   (function(symbolName) {   
   
   })("sym_LoseMenu");
   //Edge symbol end:'sym_LoseMenu'

   //=========================================================
   
   //Edge symbol: 'sym_LoseMenu_1'
   (function(symbolName) {   
   
   })("sym_WinMenu");
   //Edge symbol end:'sym_WinMenu'

   //=========================================================
   
   //Edge symbol: 'btn_LevelSelect_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      })("btn_NextLevel");
   //Edge symbol end:'btn_NextLevel'

   //=========================================================
   
   //Edge symbol: 'sym_SelectGender'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${x-01}", "click", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${x-01}", "touchend", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
      //Edge binding end

   })("sym_SelectGender");
   //Edge symbol end:'sym_SelectGender'

   //=========================================================
   
   //Edge symbol: 'btn_Father'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");
         

      });
      //Edge binding end

   })("btn_Father");
   //Edge symbol end:'btn_Father'

   //=========================================================
   
   //Edge symbol: 'btn_Mother'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 141, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 354, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "mousedown", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "touchstart", function(sym, e) {
         sym.play("lbl_Down");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "mouseup", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "touchend", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "mouseenter", function(sym, e) {
         sym.play("lbl_Over");
         playSound("MouseOver");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "mouseleave", function(sym, e) {
         sym.playReverse("lbl_Idle");

      });
      //Edge binding end

   })("btn_Mother");
   //Edge symbol end:'btn_Mother'

   //=========================================================
   
   //Edge symbol: 'sym_Star'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 678, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

   })("sym_Star");
   //Edge symbol end:'sym_Star'

   //=========================================================
   
   //Edge symbol: 'sym_Navigation'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("sym_Navigation");
   //Edge symbol end:'sym_Navigation'

   //=========================================================
   
   //Edge symbol: 'sym_IntroAni'
   (function(symbolName) {   
   
   })("sym_IntroAni");
   //Edge symbol end:'sym_IntroAni'

   //=========================================================
   
   //Edge symbol: 'sym_BallsCount'
   (function(symbolName) {   
   
   })("sym_BallsCount");
   //Edge symbol end:'sym_BallsCount'

   //=========================================================
   
   //Edge symbol: 'sym_Score'
   (function(symbolName) {   
   
   })("sym_Score");
   //Edge symbol end:'sym_Score'

   //=========================================================
   
   //Edge symbol: 'sym_Hint'
   (function(symbolName) {   
   
   })("sym_Hint");
   //Edge symbol end:'sym_Hint'

   //=========================================================
   
   //Edge symbol: 'sym_Explanation'
   (function(symbolName) {   
   
   })("sym_Explanation");
   //Edge symbol end:'sym_Explanation'

   //=========================================================
   
   //Edge symbol: 'sym_BG'
   (function(symbolName) {   
   
   })("sym_BG");
   //Edge symbol end:'sym_BG'

   //=========================================================
   
   //Edge symbol: 'btn_Help'
   (function(symbolName) {   
   
   })("btn_Help");
   //Edge symbol end:'btn_Help'

   //=========================================================
   
   //Edge symbol: 'sym_HelpImage'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "click", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});
          playSound("ClickTut");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "touchend", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});
          playSound("ClickTut");

      });
      //Edge binding end

   })("sym_HelpImage");
   //Edge symbol end:'sym_HelpImage'

   //=========================================================
   
   //Edge symbol: 'btn_Close'
   (function(symbolName) {   
   
   })("btn_Close");
   //Edge symbol end:'btn_Close'

   //=========================================================
   
   //Edge symbol: 'sym_Trials'
   (function(symbolName) {   
   
   })("sym_Trials");
   //Edge symbol end:'sym_Trials'

   //=========================================================
   
   //Edge symbol: 'btn_Mute'
   (function(symbolName) {   
   
   })("btn_Mute");
   //Edge symbol end:'btn_Mute'

   //=========================================================
   
   //Edge symbol: 'sym_Hart'
   (function(symbolName) {   
   
   })("sym_Hart");
   //Edge symbol end:'sym_Hart'

   //=========================================================
   
   //Edge symbol: 'sym_Hearts'
   (function(symbolName) {   
   
   })("sym_Hearts");
   //Edge symbol end:'sym_Hearts'

   //=========================================================
   
   //Edge symbol: 'sym_Explanation_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "click", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "touchend", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
      //Edge binding end

      })("sym_Explanation_1");
   //Edge symbol end:'sym_Explanation_1'

   //=========================================================
   
   //Edge symbol: 'sym_Explanation_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "click", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_Close}", "touchend", function(sym, e) {
         sym.getSymbolElement().css({"display":"none"});

      });
         //Edge binding end

         })("sym_Explanation_2");
   //Edge symbol end:'sym_Explanation_2'

   //=========================================================
   
   //Edge symbol: 'sym_ChildsEnter'
   (function(symbolName) {   
   
   })("sym_ChildsEnter");
   //Edge symbol end:'sym_ChildsEnter'

   //=========================================================
   
   //Edge symbol: 'sym_Child1'
   (function(symbolName) {   
   
   })("sym_Child1");
   //Edge symbol end:'sym_Child1'

   //=========================================================
   
   //Edge symbol: 'sym_Child2'
   (function(symbolName) {   
   
   })("sym_Child2");
   //Edge symbol end:'sym_Child2'

   //=========================================================
   
   //Edge symbol: 'sym_Child3'
   (function(symbolName) {   
   
   })("sym_Child3");
   //Edge symbol end:'sym_Child3'

   //=========================================================
   
   //Edge symbol: 'btn_Info'
   (function(symbolName) {   
   
   })("btn_Info");
   //Edge symbol end:'btn_Info'

   //=========================================================
   
   //Edge symbol: 'Lock'
   (function(symbolName) {   
   
   })("Lock");
   //Edge symbol end:'Lock'

   //=========================================================
   
   //Edge symbol: 'LOGINSYM'
   (function(symbolName) {   
   
   })("LOGINSYM");
   //Edge symbol end:'LOGINSYM'

   //=========================================================
   
   //Edge symbol: 'SHARESYM'
   (function(symbolName) {   
   
   })("SHARESYM");
   //Edge symbol end:'SHARESYM'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4729542");