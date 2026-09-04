var Level_2_11 = {
			timerSpeed:0.04,
			
			sofaImg:null,
			SofaPos:null,
			
			BGImage:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
			
			endTimerId:0,

			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = null;
					RestrictedArea = null;

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
				
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				clearTimeout(this.endTimerId);

				numOfBalls = 3;
				sandLevel = 0;

				this.finishLevel = false;
				
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					SelectedParentImg.src = 'images/Player_Haert.png';
			  
				    this.sofaImg = new Image();
					this.sofaImg.src = "images/Sofa.png";
					
					this.BGImage = new Image();
					this.BGImage.src = 'images/Sky_flowting_Parantes.png';
					
					var MainPosX = (canvasWidth/2.0/ScaleFactor);
					var MainPosY = (canvasHeight/2.0/ScaleFactor);
					
				  	LoopOverObj( LevelB_4.m1 , ORANGE_COLOR , MainPosX-1 -2, MainPosY-4 , 1 , "static"  );
					LoopOverObj( LevelB_4.m2 , ORANGE_COLOR , MainPosX-5 -2, MainPosY-7 , 1 , "static"  );
					LoopOverObj( LevelB_4.m3 , ORANGE_COLOR , MainPosX-4.8 -2, MainPosY-0 , 1 , "static"  );
					LoopOverObj( LevelB_4.m4 , ORANGE_COLOR , MainPosX-6.8 -2, MainPosY+1 , 1 , "static"  );
					LoopOverObj( LevelB_4.m5 , ORANGE_COLOR , MainPosX-12.5 -2, MainPosY+1 , 1 , "static"  );
					LoopOverObj( LevelB_4.m6 , ORANGE_COLOR , MainPosX-11.0 -2, MainPosY-3.4 , 1 , "static"  );
					LoopOverObj( LevelB_4.m7 , ORANGE_COLOR , MainPosX-14.7 -2, MainPosY-3.8 , 1 , "static"  );
					LoopOverObj( LevelB_4.m8 , ORANGE_COLOR , MainPosX-14.3 -2, MainPosY-7.0 , 1 , "static"  );
					
					LoopOverObj( LevelB_4.m8 , ORANGE_COLOR , MainPosX-11.45, MainPosY+0.55 , 1 , "static"  );

					CreateObj( { color:ORANGE_COLOR,type: "static" , shape:"box" ,x:MainPosX-4.2, y:MainPosY+0.2 , width:4 , height:0.4 } );
					
					var temp = CreateObj( {name:'sofa', color:null,type: "static" , shape:"box" ,x:MainPosX+0.6, y:MainPosY+8.5 , width:4.5 , height:5 } );
					
					this.SofaPos = temp.GetPosition();
					//CreateObj( {name:'sofa', color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+0.5+6 , width:3 , height:5 } );
					//CreateObj( {name:'sofa', color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY-1.0+6 , width:1 , height:4.5 } );

					if(gender == "Father")
						child_1 = CreateObj({name:'other',image:DadImg,color:'blue',density:10,type:"dynamic", shape:"circle" ,  x : 17 , y :3,radius:0.6,restitution:0,friction:0});
					else
						child_1 = CreateObj({name:'other',image:MomImg,color:'blue',density:10,type:"dynamic", shape:"circle" ,  x : 17 , y :3,radius:0.6,restitution:0,friction:0});

					
				    CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+8.899 , width:10 , height:4.0 });
			  },
			  startCollide:function(contact)
			  {
				  if(contact.GetFixtureA().GetBody().details.name.indexOf("sofa") != -1)
				  {
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("other") != -1 )
					   {
						  // alert(12);
						   if(!Level_2_11.finishLevel)
						   {
								contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
								Level_2_11.finishLevel = true;
								
								destroyBody(contact.GetFixtureB().GetBody(),50);
				   
								numOfChildsEnter = 3;
								playSound("EndBonus");
								this.endTimerId =  setTimeout(endLevel,2000);
					       }
					   }
				  }
			  },
			  checkIfWin: function()
			  {
					if(!this.finishLevel && numOfBalls == 0 && Math.abs(child_1.m_linearVelocity.x) < 0.05 && Math.abs(child_1.m_linearVelocity.y) < 0.05 )
					{
						endLevel();
					}
			  },
			  canvasDraw: function()
			  {
				  	ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes
					ctx.drawImage(this.sofaImg, this.SofaPos.x * ScaleFactor-85, this.SofaPos.y * ScaleFactor-97, 1.0*174.0 , 1.0*52.0);
			  },
			  canvasDrawForground: function()
			  {
				    if(this.finishLevel)
					   this.winLevel();
				
					if(gender == "Father")
						ctx.drawImage(MomImg, this.SofaPos.x * ScaleFactor-38, this.SofaPos.y * ScaleFactor-100, 0.55*60.0 , 0.55*60.0);
					else
						ctx.drawImage(DadImg, this.SofaPos.x * ScaleFactor-38, this.SofaPos.y * ScaleFactor-100, 0.55*60.0 , 0.55*60.0);

			  },
			  winLevel: function()
			  {
					 if(this.heartSize > 1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize <0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc;
					 
					 if(gender == "Father")
						 ctx.drawImage(DadImg, this.SofaPos.x * ScaleFactor+3, this.SofaPos.y * ScaleFactor-100, 0.59*60.0 , 0.59*60.0);
					 else
						 ctx.drawImage(MomImg, this.SofaPos.x * ScaleFactor+3, this.SofaPos.y * ScaleFactor-100, 0.59*60.0 , 0.59*60.0);

					 ctx.save(); 
						ctx.translate(this.SofaPos.x * ScaleFactor-17+10, this.SofaPos.y * ScaleFactor-130+10);
						ctx.scale( this.heartSize, this.heartSize);

						ctx.translate(-(this.SofaPos.x * ScaleFactor-17+10), -(this.SofaPos.y * ScaleFactor-130+10));
						
						ctx.drawImage(hartImg, this.SofaPos.x * ScaleFactor-17, this.SofaPos.y * ScaleFactor-130, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }
		}
		Level_2_11.startLevel();