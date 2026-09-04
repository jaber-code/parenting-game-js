var Level_2_10 = {
			timerSpeed:0.03,

			asa_1:null,
			asa_2:null,
			asa_3:null,
			
			BedImg:null,
			BasePos:null,
			
			Imge_1:null,
			Imge_2:null,
			Imge_3:null,
			
			BGImage:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
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
				if(this.asa_1)
				{
					if ( this.asa_1.GetPosition().x > 20)
						this.asa_1.SetLinearVelocity( new b2Vec2(-3 , 0) );
					else
					if ( this.asa_1.GetPosition().x < 2)
						this.asa_1.SetLinearVelocity( new b2Vec2(3 , 0) );
				}
				
				if(this.asa_2)
				{
					if ( this.asa_2.GetPosition().x > 20)
						this.asa_2.SetLinearVelocity( new b2Vec2(-4 , 0) );
					
					if ( this.asa_2.GetPosition().x < 2)
						this.asa_2.SetLinearVelocity( new b2Vec2(4 , 0) );
				}
				
				if(this.asa_3)
				{
					if ( this.asa_3.GetPosition().x > 20)
						this.asa_3.SetLinearVelocity( new b2Vec2(-4.5 , 0) );
					
					if ( this.asa_3.GetPosition().x < 2)
						this.asa_3.SetLinearVelocity( new b2Vec2(4.5, 0) );
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				
				clearTimeout(this.endTimerId);
				
				this.finishLevel = false;


				numOfBalls = 1;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  
				  this.BedImg = new Image();
				  this.BedImg.src = "images/Bed.png";
				  
				  this.BGImage = new Image();
				  this.BGImage.src = 'images/Sky_flowting_Parantes.png';
				  
				  
				  
				  this.Imge_1 = new Image();
				  this.Imge_1.src = "images/Case.png";
				  
				  this.Imge_2 = new Image();
				  if(gender == "Father")
					  this.Imge_2.src = "images/Other_Man.png";    
				  else
					  this.Imge_2.src = "images/Other_Woman.png";
				  
				  this.Imge_3 = new Image();
				  this.Imge_3.src = "images/TV.png";
				  

				  
				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				  
				  
				  CreateObj({color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX +4.5  , y: 3.5 , width: 4 ,height: 0.4 });
				 
				  if(gender == "Father")
					  child_1 = CreateObj({name:'other',image:DadImg,density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +4.5 , y :2.5 , radius:0.55,restitution:0,friction:0});
				  else
					  child_1 = CreateObj({name:'other',image:MomImg,density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +4.5 , y :2.5 , radius:0.55,restitution:0,friction:0});

				  
				  this.asa_1 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX-8  , y:5.5 , width:4 ,height:0.4 });
				  this.asa_2 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX-1  , y:7.5 , width:4 ,height:0.4 });
				  this.asa_3 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX+7  , y:9.5 , width:4 ,height:0.4 });

				  this.asa_1.SetLinearVelocity(  new b2Vec2(-3 , 0)  );
				  this.asa_2.SetLinearVelocity(  new b2Vec2(-4 , 0)  );
				  this.asa_3.SetLinearVelocity(  new b2Vec2(-4.5, 0)  );
				  
				  //  CreateObj({categoryBits:0x0200, color:GREY_COLOR,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-1  , y:0 , vertices:[[0,1],[30,1]] });

				  //  CreateObj( { color:ORANGE_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+4.6 , width:0.2 , height:4 } );
				  //  CreateObj( { color:ORANGE_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+3.6 , width:5 , height:0.4 } );
				  
				  CreateObj( { name:"bed" ,color:null,type: "static",shape:"box" ,x:MainPosX, y:MainPosY+5.5 , width:7 , height:2.0 } );
				  var temp = CreateObj({ color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+7.8 , width:10 , height:4.0 });

				  this.BasePos = temp.GetPosition();
				  
				  
				  SelectedParentImg.src = 'images/Player_Haert.png';

			  },
			  endCollide:function(contact,impulse)
			  {
					  if( (contact.GetFixtureB().GetBody().details.name == "other" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   
						   this.finishLevel = true;
						   numOfChildsEnter = 3;
						   
						   destroyBody(contact.GetFixtureB().GetBody(),50);

						   playSound("EndBonus");
						   setTimeout(endLevel,2000);
						   
					  }
					  else
					  if( (contact.GetFixtureB().GetBody().details.name == "other" && contact.GetFixtureA().GetBody() == this.asa_1) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   
						   setTimeout(endLevel,1000);
					  }
					  else
					  if( (contact.GetFixtureB().GetBody().details.name == "other" && contact.GetFixtureA().GetBody() == this.asa_2) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   
						   setTimeout(endLevel,1000);
					  }
					  else
					  if( (contact.GetFixtureB().GetBody().details.name == "other" && contact.GetFixtureA().GetBody() == this.asa_3) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   
						   this.endTimerId =  setTimeout(endLevel,1000);
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

					//Imge_1     this.asa_1
					ctx.drawImage(this.Imge_1, this.asa_1.GetPosition().x * ScaleFactor-60, this.asa_1.GetPosition().y * ScaleFactor-55, 67*1.0,56*1.0);
					ctx.drawImage(this.Imge_2, this.asa_2.GetPosition().x * ScaleFactor-60, this.asa_2.GetPosition().y * ScaleFactor-55, 67*1.0,56*1.0);
					ctx.drawImage(this.Imge_3, this.asa_3.GetPosition().x * ScaleFactor-60, this.asa_3.GetPosition().y * ScaleFactor-55, 67*1.0,56*1.0);

					ctx.drawImage(this.BedImg, this.BasePos.x * ScaleFactor-112, this.BasePos.y * ScaleFactor-160, 170*1.3,79*1.3);
			  },
			  canvasDrawForground: function()
			  {
				  if(this.finishLevel)
					 this.winLevel();
				
				  if(gender == "Father")
					 ctx.drawImage(MomImg, this.BasePos.x * ScaleFactor-40, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);
				  else
					 ctx.drawImage(DadImg, this.BasePos.x * ScaleFactor-40, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);

					 
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
						 ctx.drawImage(DadImg, this.BasePos.x * ScaleFactor+0, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);
					  else
						 ctx.drawImage(MomImg, this.BasePos.x * ScaleFactor+0, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);

				
					 ctx.save(); 
						ctx.translate(this.BasePos.x * ScaleFactor-17+10, this.BasePos.y * ScaleFactor-160+10);
						ctx.scale( this.heartSize, this.heartSize);

						ctx.translate(-(this.BasePos.x * ScaleFactor-17+10), -(this.BasePos.y * ScaleFactor-160+10));
						
						ctx.drawImage(hartImg, this.BasePos.x * ScaleFactor-17, this.BasePos.y * ScaleFactor-160, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }

		}
		Level_2_10.startLevel();