var Level_4_10 = {
			timerSpeed:0.045,
			
			Imge_1:null,
			
			ParentBot:null,
			
			BGImage:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
			
			endTimerId:0,
			
			MomObj:null,
			DadObj:null,


			startLevel: function() 
			{			
					numOfBalls = 5;
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

				numOfBalls = 5;
				sandLevel = 0;	
				
				this.finishLevel = false;

				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  SelectedParentImg.src = 'images/Player_Haert.png';
				  
				  this.Imge_1 = new Image();
				  this.Imge_1.src = "images/Chat_box_1.png";
				  
				  this.BGImage = new Image();
					this.BGImage.src = 'images/Sky_flowting_Parantes.png';

				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				
				  CreateObj({"color":GREY_COLOR ,type:"static", shape:"poly" ,x :MainPosX  , y :MainPosY+7.8 ,vertices:[ [0 , 0],[16 , -10],[16 , 0] ]});
			
				  CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+7.8 , width:10 , height:4.0 });
				  
				  if(gender == "Father")
				  {
					  this.ParentBot = CreateObj({name:'Dad', image:DadImg, density:600,type:"dynamic", shape:"circle" ,x :MainPosX -3 , y :12 , radius:0.55,restitution:0,friction:0});
					  this.MomObj = CreateObj({name:'Mom', image:MomImg, density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +13.0 , y :5 , radius:0.55,restitution:0,friction:0});
				  }
				  else
				  {
					  this.ParentBot = CreateObj({name:'Mom', image:DadImg,density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +13.0 , y :5 , radius:0.55,restitution:0,friction:0});
					  this.MomObj = CreateObj({name:'Dad', image:MomImg,density:600,type:"dynamic", shape:"circle" ,x :MainPosX -3 , y :12 , radius:0.55,restitution:0,friction:0});
				  }
						
				  CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX+0, y:MainPosY-1 , width:0.4 , height:15 });
				  CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX+3.0, y:MainPosY-1 , width:0.4 , height:15 });
				  CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX+6, y:MainPosY-1 , width:0.4 , height:15 });
				  CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX+9, y:MainPosY-1 , width:0.4 , height:15 });
				  CreateObj( {name:"Glass",color:GLASS_COLOR,type: "static" , shape:"box" ,x:MainPosX+12, y:MainPosY-1 , width:0.4 , height:15 });

				  CreateObj( { name:"bed" ,color:GREY_COLOR,type: "static",shape:"box" ,x:MainPosX-1.8, y:MainPosY+6 , width:0.9 , height:0.5 } );
			  },
			  startCollide:function(contact)
			  {
					  if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1) )
					  {
						  startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
						  
						  destroyBody(contact.GetFixtureA().GetBody() , 100); //  
							
						  playSound("Glass");
					  }  
			  },
			  endCollide:function(contact,impulse)
			  {
					  /*if( (contact.GetFixtureB().GetBody().details.name == "Mom" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						 	contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
							
							 setTimeout(function(){
							   numOfChildsEnter = 3;
							   endLevel();
						   },1000);
					  }  
					  else*/
					  if( (contact.GetFixtureB().GetBody().details.name == "Mom" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						  //alert(1);
						  if(!this.finishLevel)
						  {
						 	contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
							
							destroyBody(this.MomObj , 60);
							destroyBody(this.ParentBot , 60);

							
							this.finishLevel = true;
							
							
							setTimeout(function(){
								
								numOfChildsEnter = 3;

							},1000);

							playSound("EndBonus");
							this.endTimerId = setTimeout(endLevel,2000);
						}
					  }  
			  },
			  
			  checkIfWin: function()
			  {
					if(!this.finishLevel && numOfBalls == 0 && Math.abs(this.MomObj.m_linearVelocity.x) < 0.02 && Math.abs(this.MomObj.m_linearVelocity.y) < 0.02 )
					{
						endLevel();
						
					}
			  },
			  canvasDraw: function()
			  {
				  ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes

			  },
			  canvasDrawForground: function()
			  {
				  if(gender == "Father")
					  ctx.drawImage(this.Imge_1, this.ParentBot.GetPosition().x * ScaleFactor+5, this.ParentBot.GetPosition().y * ScaleFactor-60, 45*1.0,45*1.0);
				  else
					  ctx.drawImage(this.Imge_1, this.MomObj.GetPosition().x * ScaleFactor+5, this.MomObj.GetPosition().y * ScaleFactor-60, 45*1.0,45*1.0);

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
					 {
						  ctx.drawImage(DadImg, this.ParentBot.GetPosition().x * ScaleFactor-32, this.ParentBot.GetPosition().y * ScaleFactor-20, 0.6*60.0 , 0.6*60.0);
						  ctx.drawImage(MomImg, this.ParentBot.GetPosition().x * ScaleFactor+11, this.ParentBot.GetPosition().y * ScaleFactor-20, 0.6*60.0 , 0.6*60.0);
						  
						  ctx.save(); 
							  ctx.translate(this.ParentBot.GetPosition().x * ScaleFactor-9+10, this.ParentBot.GetPosition().y * ScaleFactor-53+10);
							  ctx.scale( this.heartSize, this.heartSize);

							  ctx.translate(-(this.ParentBot.GetPosition().x * ScaleFactor-9+10), -(this.ParentBot.GetPosition().y * ScaleFactor-53+10));
							
							  ctx.drawImage(hartImg, this.ParentBot.GetPosition().x * ScaleFactor-9, this.ParentBot.GetPosition().y * ScaleFactor-53, 0.59*60 , 0.59*60);
						  ctx.restore(); 
					 }
					 else
					 {
						  ctx.drawImage(DadImg, this.MomObj.GetPosition().x * ScaleFactor-32, this.MomObj.GetPosition().y * ScaleFactor-20, 0.6*60.0 , 0.6*60.0);
						  ctx.drawImage(MomImg, this.MomObj.GetPosition().x * ScaleFactor+11, this.MomObj.GetPosition().y * ScaleFactor-20, 0.6*60.0 , 0.6*60.0);
						  
						  ctx.save(); 
							  ctx.translate(this.MomObj.GetPosition().x * ScaleFactor-9+10, this.MomObj.GetPosition().y * ScaleFactor-53+10);
							  ctx.scale( this.heartSize, this.heartSize);

							  ctx.translate(-(this.MomObj.GetPosition().x * ScaleFactor-9+10), -(this.MomObj.GetPosition().y * ScaleFactor-53+10));
							
							  ctx.drawImage(hartImg, this.MomObj.GetPosition().x * ScaleFactor-9, this.MomObj.GetPosition().y * ScaleFactor-53, 0.59*60 , 0.59*60);
						 ctx.restore(); 
					 }
				
					 
			  }
		}
		Level_4_10.startLevel();