var Level_4_8 = {
			timerSpeed:0.04,

			speed : -13,

			timer:0,
			
			sliderImgClip:null,
			sliderImgBG:null,
			sliderImg:null,
			
			slider_Y_Pos:0,
			slider_H: 0,
			
			increaser:2.5,
			
			SliderObj:0,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+300, "y":canvasHeight-104};
					RestrictedArea = {"x": (canvasWidth/2.0), "y":0,"w":400 , "h":480,"op":0.1};

					if(world)
					{
						this.reset();
						setupDebugDraw();
						this.startStage();
						resumeGame();
					}
					else
					{
						if(!isBox2dInitialized)
							initBox2dEnv();
						
						this.startStage();
					} 
			},
			
			handleGameLogic:function()
			{
				    if( this.SliderObj.GetPosition().y < 9.0 )
				    {
						this.SliderObj.SetLinearVelocity(new b2Vec2(0 , 4));
				    }
					else
					if( this.SliderObj.GetPosition().y > 17 )
					{
						this.SliderObj.SetLinearVelocity(new b2Vec2(0 , -4));
					}
			},
			
			reset:function()
			{
					deleteCurrentLevel();
					
					initGlobalVars();
					
					this.glass_Con = null;

					this.slider_Y_Pos = 0;
					this.slider_H = 0;
					
					this.increaser=2.5;
					this.SliderObj=0;
			
					this.timer = 0;

					numOfBalls = 3;
					sandLevel = 0;
					setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.sliderImgClip = new Image();
				    this.sliderImgClip.src = "images/SliderBlock.png";
					
					this.sliderImgBG = new Image();
				    this.sliderImgBG.src = "images/SliderBlockBG.png";
					
					this.sliderImg = new Image();
				    this.sliderImg.src = "images/slider.png";
					

					var MainPosX = (canvasWidth/2.0)/ScaleFactor;
					var MainPosY = (canvasHeight/2.0)/ScaleFactor;
					
					this.SliderObj = CreateObj({density:999 ,color:GREY_COLOR,type: "kin" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+1.5 , y:9.0 , width:3.5 , height:11});
					this.SliderObj.SetLinearVelocity(new b2Vec2(0 , 4));
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor-13 , y:MainPosY +1.48+0 , width:7.0 , height:0.37});
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+7.24, y:MainPosY +7.5 , width:15.0 , height:2.5});

					//CreateFloor(false);

					LoopOverObj( Level4_8.slider1 , GREY_COLOR , MainPosX + 0   , MainPosY +2.2, 1 , "static" , 0 , true , 0 ,"noth" );
					LoopOverObj( Level4_8.Slider2 , GREY_COLOR , MainPosX - 9.5 , MainPosY +0.5+0 , 1 , "static" , 0 , true , 0 ,"noth" );
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : MainPosX-5, y :MainPosY-0,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : MainPosX-8.3  , y :MainPosY-0,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : MainPosX-11, y : MainPosY-0,radius:0.5,restitution:0,friction:0});	
					
			  },
			  startCollide:function(contact)
			  {
			
			  },
			  canvasDrawForground: function()
			  {
					this.slider_Y_Pos = this.SliderObj.GetPosition().y * ScaleFactor-165;
					this.slider_H = this.SliderObj.GetPosition().y * ScaleFactor - 116-165;
					
					
					//var x = 0.5;
					//alert(this.slider_Y_Pos);
				  	//this.slider_Y_Pos += this.increaser;		
					//this.slider_H += this.increaser;
					
					
					ctx.drawImage(this.sliderImgBG, 0, (canvasHeight/2.0)-250, 92 , 326, (canvasWidth/2.0) , (canvasHeight/2.0)-134, 92 , 326);
// // // //ctx.drawImage(this.sliderImgClip, 0, (canvasHeight/2.0)-250, 92 , this.slider_H, (canvasWidth/2.0) , this.slider_Y_Pos, 92 , 326); 
					ctx.drawImage(this.sliderImgClip, 0,this.slider_H, 92 , 326, (canvasWidth/2.0) , this.slider_Y_Pos, 92 , 326);   
				
					ctx.drawImage(this.sliderImg, (canvasWidth/2.0)-23 , this.slider_Y_Pos-24, 137 , 54);
			  },
			  canvasDraw: function()
			  {
				
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_4_8.startLevel();