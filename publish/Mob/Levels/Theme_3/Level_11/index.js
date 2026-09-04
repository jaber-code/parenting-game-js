var Level_3_11 = {
			timerSpeed:0.045,
			
			Imge_1:null,
			ParentBot:null,
			BGImage:null,
						
						
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
			
			Glass_1 : null,
			Glass_2 : null,
			Glass_3 : null,
			
			endTimerId:0,
			
			
			glassImg:null,
			
			arrPos:[],

			startLevel: function() 
			{			
					numOfBalls = 4;
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
				
				this.arrPos = [];

								
				numOfBalls = 4;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  SelectedParentImg.src = 'images/Player_Haert.png';
				  
				  
				   this.glassImg = new Image();
				  this.glassImg.src = 'images/Bow_3.png';
				  
				  
				  this.Imge_1 = new Image();
				  this.Imge_1.src = "images/Chat_box_1.png";
				  
				  this.BGImage = new Image();
				  this.BGImage.src = 'images/Sky_flowting_Parantes.png';

				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				
				  creatFan(MainPosX + 2.9,6,2.8,0.4,true , 110 , 110 , 500, RED_COLOR);
				  creatFan(MainPosX - 2.5,6,2.8,0.4,true , 110 , 110 , 500, RED_COLOR);
			
				  CreateObj( {color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX + 7  , y: 5.5 , width: 4 ,height: 0.4 } );
				  CreateObj( {color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX, y:MainPosY + 7.8 , width:10 , height:4.0 } );
				  
				  this.Glass_1 = LoopOverObj( LevelB_6.Curved_glass , null , MainPosX-1.9 , MainPosY+2.6 , 0.6 , "static" , 0 , true , null ,"Glass_3",null );
				  this.Glass_2 = LoopOverObj( LevelB_6.Curved_glass , null , MainPosX-2.99 , MainPosY+1.2 , 0.9 , "static" , 0 , true , null ,"Glass_2",null );
				  this.Glass_3 = LoopOverObj( LevelB_6.Curved_glass , null , MainPosX-4.1 , MainPosY-0.5 , 1.2 , "static" , 0 , true , null ,"Glass_1",null );
				  
				
				  this.arrPos = [ this.Glass_1.GetPosition() , this.Glass_2.GetPosition() , this.Glass_3.GetPosition() ];
				  
				  //CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+3.0 , width:8 , height:0.4 });
				  //CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+2 , width:8 , height:0.4 });
				  //CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+1.0 , width:8 , height:0.4 });

				  //CreateObj({name:'Mom', image:MomImg, density:600,type:"dynamic", shape:"circle" ,x :MainPosX +1 , y :12 , radius:0.55,restitution:0,friction:0});
				  
				  if(gender == "Father")
					  child_1 =  CreateObj({name:'Father', image:DadImg, density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +6.3 , y :5 , radius:0.55,restitution:0,friction:0});
				  else
					  child_1 =  CreateObj({name:'Father', image:MomImg, density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +6.3 , y :5 , radius:0.55,restitution:0,friction:0});

					
					
				  this.ParentBot = CreateObj( { name:"bed" ,color:GREY_COLOR,type: "static",shape:"box" ,x:MainPosX-0, y:MainPosY+6 , width:4 , height:0.5 } );
			  },
			  startCollide:function(contact)
			  {
					  if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1) )
					  {
						  startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
						  
						  destroyBody( contact.GetFixtureA().GetBody() , 100); //  
							
						  playSound("Glass");
						  
						  
						  switch(contact.GetFixtureA().GetBody().details.name)
						  {
							  case "Glass_1":
								  this.Glass_1 = null;
							  break;
							  case "Glass_2":
								  this.Glass_2 = null;
							  break;
							  case "Glass_3":
								  this.Glass_3 = null;
							  break;
						  }
					  }  
			  },
			  endCollide:function(contact,impulse)
			  {
					/*if( (contact.GetFixtureB().GetBody().details.name == "Mom" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
							
						   setTimeout(function()
						   {
							   numOfChildsEnter = 3;
							   endLevel();
						   },1000);
					  }  
					  else*/
					  
					  if( (contact.GetFixtureB().GetBody().details.name == "Father" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						 	contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
							
							destroyBody(contact.GetFixtureB().GetBody(),50);

							this.finishLevel = true;
							numOfChildsEnter = 3;
							playSound("EndBonus");
							this.endTimerId = setTimeout(endLevel,2000);
					  }  
			  },
			  
			  checkIfWin: function()
			  {
					if(!this.finishLevel && numOfBalls == 0 && Math.abs(child_1.m_linearVelocity.x) < 0.02 && Math.abs(child_1.m_linearVelocity.y) < 0.02 )
					{
						endLevel();
						
					}
			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes
					
					if(this.Glass_1)
					{
						ctx.drawImage(this.glassImg, this.arrPos[0].x * ScaleFactor - 62, this.arrPos[0].y * ScaleFactor-90, 108*2.4 , 106 *2.4);  //Sky_flowting_Parantes     this.glassImg
					}
					
					if(this.Glass_2)
					{
						ctx.drawImage(this.glassImg, this.arrPos[1].x * ScaleFactor - 5, this.arrPos[1].y * ScaleFactor-4, 108*1.9 , 106 *1.9);  //Sky_flowting_Parantes     this.glassImg
					}
					
					if(this.Glass_3)
					{
						ctx.drawImage(this.glassImg, this.arrPos[2].x * ScaleFactor + 69, this.arrPos[2].y * ScaleFactor+90, 108*1.16 , 106 *1.16);  //Sky_flowting_Parantes     this.glassImg
					}

			  },
			  canvasDrawForground: function()
			  {
				    //alert(this.arrPos[0].x * ScaleFactor);
				    
					
					ctx.drawImage(this.Imge_1, this.ParentBot.GetPosition().x * ScaleFactor-5, this.ParentBot.GetPosition().y * ScaleFactor-80, 45*1.0,45*1.0);
					
					 if(gender == "Father")
						ctx.drawImage(MomImg, this.ParentBot.GetPosition().x * ScaleFactor-32, this.ParentBot.GetPosition().y * ScaleFactor-43, 0.6*60.0 , 0.6*60.0);
				     else
						ctx.drawImage(DadImg, this.ParentBot.GetPosition().x * ScaleFactor-32, this.ParentBot.GetPosition().y * ScaleFactor-43, 0.6*60.0 , 0.6*60.0);

				
				
					if(this.finishLevel)
					   this.winLevel();
			  },
			  winLevel: function()
			  {
					 if(this.heartSize > 1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize < 0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc; 
					 
					 if(gender == "Father")
						ctx.drawImage(DadImg, this.ParentBot.GetPosition().x * ScaleFactor+11, this.ParentBot.GetPosition().y * ScaleFactor-43, 0.6*60.0 , 0.6*60.0);
					 else
						ctx.drawImage(MomImg, this.ParentBot.GetPosition().x * ScaleFactor+11, this.ParentBot.GetPosition().y * ScaleFactor-43, 0.6*60.0 , 0.6*60.0);

											
					 ctx.save(); 
						  ctx.translate(this.ParentBot.GetPosition().x * ScaleFactor-9+10, this.ParentBot.GetPosition().y * ScaleFactor-75+10);
						  ctx.scale( this.heartSize, this.heartSize);

						  ctx.translate(-(this.ParentBot.GetPosition().x * ScaleFactor-9+10), -(this.ParentBot.GetPosition().y * ScaleFactor-75+10));
						
						  ctx.drawImage(hartImg, this.ParentBot.GetPosition().x * ScaleFactor-9, this.ParentBot.GetPosition().y * ScaleFactor-75, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }
		}
		Level_3_11.startLevel();