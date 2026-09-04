var Level_1_10 = {
			timerSpeed:0.04,
			
			cakeImg:null,
			CakePos:null,
			
			BGImage:null,
			
			finishLevel:false,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			endTimerId:0,
			
			startLevel: function() 
			{			
					numOfBalls = 1;
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
				
				this.finishLevel = false;

				numOfBalls = 1;
				sandLevel = 0;	
				
				this.heartSize = 0.4;
				this.heartSizeInc = 0.04;
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    cakeImg = new Image();
					cakeImg.src = 'images/Cake.png';
					
					this.BGImage = new Image();
					this.BGImage.src = 'images/Sky_flowting_Parantes.png';
					
					var MainPosX = (canvasWidth/2.0/ScaleFactor);
					var MainPosY = (canvasHeight/2.0/ScaleFactor);
					
				  	CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:9 , y:5 , width:5 , height:0.4} );
				  	CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:17, y:5 , width:5 , height:0.4} );
					
					creatFan(11,7,3.5,0.4,true , 110 , 110 , 500, 'red');
					creatFan(15,7,3.5,0.4,true ,-110 , 110 , 500, 'red');
					
					CreateObj( { color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+2.2+6 , width:10 , height:3 } );
					
					this.CakePos = CreateObj( {name:'cake', color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+2.0+6 , width:4.0 , height:5 } );
					CreateObj( {name:'cake', color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+0.5+6 , width:3 , height:5 } );
					CreateObj( {name:'cake', color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY-1.0+6 , width:1 , height:4.5 } );

					SelectedParentImg.src = 'images/Player_Haert.png';
					
					if(gender == "Father")
						child_1 = CreateObj({name:'other',image:MomImg,color:'blue',density:10,type:"dynamic", shape:"circle" ,  x : 9 , y :3,radius:0.55,restitution:0,friction:0});
					else
					    child_1 = CreateObj({name:'other',image:DadImg,color:'blue',density:10,type:"dynamic", shape:"circle" ,  x : 9 , y :3,radius:0.55,restitution:0,friction:0});

					
					var myImage = new Image();
					myImage.src = 'images/Mother_In_law.png';
					child_2 = CreateObj({name:'7mat',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 16.5 , y :3 ,radius:0.55,restitution:0,friction:0});
					
					
					CreateObj( {name: "winColl",color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX , y:MainPosY+2.9 , width:1.6 , height:0.4} );

				    //CreateFloor(true);
			  },
			  endCollide:function(contact)
			  {
				  if(contact.GetFixtureA().GetBody().details.name.indexOf("winColl") != -1)
				  {
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("7mat") != -1 )
					   {
							endLevel();
					   }
					   else
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("other") != -1 )
					   {
						    contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							destroyBody(contact.GetFixtureB().GetBody() , 50); //
							
							this.finishLevel = true;
							playSound("EndBonus");
							
						    this.endTimerId = setTimeout(function()
							{
								numOfChildsEnter = 3;
								endLevel();
							},2000);
					   }
				  }
			  },
			  
			  checkIfWin: function()
			  {
					//alert(child_1.m_linearVelocity.x);
					if(!this.finishLevel && numOfBalls == 0 && Math.abs(child_1.m_linearVelocity.x) < 0.02 && Math.abs(child_1.m_linearVelocity.y) < 0.02 )
					{
						endLevel();
						
					}
			  },
			  canvasDraw: function()
			  {
					ctx.drawImage( this.BGImage, 0 , 0, 800 , 480 );  
			  },
			  canvasDrawForground: function()
			  {
					ctx.drawImage(cakeImg, this.CakePos.GetPosition().x * ScaleFactor-57, this.CakePos.GetPosition().y * ScaleFactor-161, 115*1.0,123*1.0);
					
					if(gender == "Father")
						ctx.drawImage(DadImg, this.CakePos.GetPosition().x * ScaleFactor-32, this.CakePos.GetPosition().y * ScaleFactor-191, 0.59*60.0 , 0.59*60.0);
					else
						ctx.drawImage(MomImg, this.CakePos.GetPosition().x * ScaleFactor-32, this.CakePos.GetPosition().y * ScaleFactor-191, 0.59*60.0 , 0.59*60.0);

					if(this.finishLevel)
						this.winLevel();
			  },
			  winLevel: function()
			  {
					 if(this.heartSize >1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize <0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc;
					 
					 if(gender == "Father")
						ctx.drawImage(MomImg, this.CakePos.GetPosition().x * ScaleFactor-5, this.CakePos.GetPosition().y * ScaleFactor-191, 0.59*60.0 , 0.59*60.0);
					else
					 	ctx.drawImage(DadImg, this.CakePos.GetPosition().x * ScaleFactor-5, this.CakePos.GetPosition().y * ScaleFactor-191, 0.59*60.0 , 0.59*60.0);

				
					 ctx.save(); 
						ctx.translate(this.CakePos.GetPosition().x * ScaleFactor-19+10, this.CakePos.GetPosition().y * ScaleFactor-220+10);
						ctx.scale( this.heartSize, this.heartSize);

						ctx.translate(-(this.CakePos.GetPosition().x * ScaleFactor-19+10), -(this.CakePos.GetPosition().y * ScaleFactor-220+10));
						
						ctx.drawImage(hartImg, this.CakePos.GetPosition().x * ScaleFactor-19, this.CakePos.GetPosition().y * ScaleFactor-220, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }
		}
		Level_1_10.startLevel();