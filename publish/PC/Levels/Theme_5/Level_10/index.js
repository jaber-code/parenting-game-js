var Level_5_10 = {
			timerSpeed:0.04,
			
			sofaImg:null,
			SofaPos:null,
			
			Hat_1_Img:null,
			Hat_2_Img:null,

			btn:null,
			
			IsBtnPressed:false,
			
			gate_1:null,
			gate_2:null,
			
			hatRemoval_1:null,
			hatRemoval_2:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
			
			
			Father_Enter:false,
			Mother_Enter:false,
			Hat_1_Enter:false,
			Hat_2_Enter:false,
			
			endTimerId:0,
			
			BGImage:null,
			
			Hat_1:null,
			Hat_2:null,
			
			DadObj:null,
			MomObj:null,

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
				
				this.IsBtnPressed = false;
				
				this.finishLevel = false;
				
				this.Father_Enter = false;
				this.Mother_Enter = false;
				this.Hat_1_Enter = false;
				this.Hat_2_Enter = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.sofaImg = new Image();
					this.sofaImg.src = "images/Sofa.png";
					
					this.BGImage = new Image();
					this.BGImage.src = 'images/Sky_flowting_Parantes.png';
					
					
					var MainPosX = (canvasWidth/2.0/ScaleFactor);
					var MainPosY = (canvasHeight/2.0/ScaleFactor);
					
					CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX+10, y:MainPosY+0 , width:5 , height:0.6 });
					CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX-10, y:MainPosY+0 , width:5 , height:0.6 });
	
				  	CreateObj( {color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX+7.5, y:MainPosY-0.3 , vertices:[ [0 , 0],[0 , 0.6],[-3.5 , 1.3] ] });
				  	CreateObj( {color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX-7.5, y:MainPosY-0.3 , vertices:flipArr([ [0 , 0],[0 , 0.6],[-3.5 , 1.3] ] ,true , false) });

					CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY-4 , width:4 , height:0.4 } );
					CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX+2, y:MainPosY-3.2 , width:0.4 , height:2 } );
					CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX-2, y:MainPosY-3.2 , width:0.4 , height:2 } );

					//btn
					this.btn = CreateObj( {name:"btn",color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY-4.35 , width:0.5 , height:0.5 } );
					
					/*this.gate_1 = CreateObj({density:2,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:MainPosX+4.6  , y:MainPosY+4.5, vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"circle" ,x:MainPosX+1.6, y:MainPosY-2.3 , radius:0.2 });
					createRevoluteJoint(this.gate_1 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
					*/
					    
					//CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX+0.4, y:MainPosY-1.5 , width:0.2 , height:0.2 } );
					
					
					this.hatRemoval_1 = CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX+1.0, y:MainPosY-3.9 , width:0.2 , height:0.2 } );
					this.hatRemoval_2 = CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX-1.0, y:MainPosY-3.9 , width:0.2 , height:0.2 } );
					
					this.Hat_1_Img = new Image();
					this.Hat_1_Img.src = "images/Dad_crown.png";
					this.Hat_1 = CreateObj( {name:"hat_1",fixedAngle:true,image:this.Hat_1_Img ,color:ORANGE_COLOR,type: "dynamic" , shape:"box" ,x:MainPosX+1.0, y:MainPosY-1.6 , width:1.2 , height:1.2 } );
					
					this.Hat_2_Img = new Image();
					this.Hat_2_Img.src = "images/Mom_crown.png";
					this.Hat_2 = CreateObj( {name:"hat_2",fixedAngle:true,image:this.Hat_2_Img ,color:ORANGE_COLOR,type: "dynamic" , shape:"box" ,x:MainPosX-1.0, y:MainPosY-1.6 , width:1.2 , height:1.2} );
					
					createRevoluteJoint(this.hatRemoval_1 , this.Hat_1 , new b2Vec2(0,1) , new b2Vec2(0,0) , false , 100 , 100,"green");
					createRevoluteJoint(this.hatRemoval_2 , this.Hat_2 , new b2Vec2(0,1) , new b2Vec2(0,0) , false , 100 , 100,"green");

					this.SofaPos = CreateObj( {name:'sofa', color:null,type: "static" , shape:"box" ,x:MainPosX+0.0, y:MainPosY+8.5 , width:3.5 , height:4.9 } );
					//CreateObj( {name:'sofa', color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+0.5+6 , width:3 , height:5 } );
					//CreateObj( {name:'sofa', color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY-1.0+6 , width:1 , height:4.5 } );
					SelectedParentImg.src = 'images/Player_Haert.png';
					
					this.DadObj = CreateObj({name:'Father',categoryBits:0x0200 ,image:DadImg,density:10,type:"dynamic", shape:"circle" ,  x : 22 , y :8,radius:0.6,restitution:0,friction:0});
					this.MomObj = CreateObj({name:'Mom',image:MomImg,maskBits:0xFFFF & ~0x0200 ,density:10,type:"dynamic", shape:"circle" ,  x : 4 , y :8,radius:0.6,restitution:0,friction:0});
					
				    CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+8.899 , width:10 , height:4.0 });
			  },
			  endCollide:function(contact)
			  {
				  if(contact.GetFixtureA().GetBody().details.name.indexOf("btn") != -1)
				  {
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("Parent") != -1 )
					   {
						    this.IsBtnPressed = true;
							
							destroyBody(this.hatRemoval_1 , 100); //
							destroyBody(this.hatRemoval_2 , 100); //
					   }
				  }
				  
				  if(contact.GetFixtureA().GetBody().details.name.indexOf("sofa") != -1)
				  {
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("Father") != -1 )
					   {
						    contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
						    this.Father_Enter = true;
							this.checkToEnd();
					   }
				  }
				 // else
				  if(contact.GetFixtureA().GetBody().details.name.indexOf("sofa") != -1)
				  {
					   if( contact.GetFixtureB().GetBody().details.name.indexOf("Mom") != -1 )
					   {
						    contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							this.Mother_Enter = true;
							this.checkToEnd();
					   }
				  }
				  
				  
				  if(contact.GetFixtureB().GetBody().details.name.indexOf("Mom") != -1 || contact.GetFixtureB().GetBody().details.name.indexOf("Father") != -1)
				  {
					   //alert(1);
					   if( contact.GetFixtureA().GetBody().details.name.indexOf("hat_1") != -1 )
					   {
						    //alert(2);
						    contact.GetFixtureA().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							this.Hat_1_Enter = true;
							this.checkToEnd();
					   }
					   else
					   if( contact.GetFixtureA().GetBody().details.name.indexOf("hat_2") != -1 )
					   {
						    //alert(4);
						    contact.GetFixtureA().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							this.Hat_2_Enter = true;
							
							this.checkToEnd();
					   }
				  }
				  
				 
			  },
			  
			  checkIfWin: function()
			  {
					if(!Level_5_10.finishLevel && numOfBalls == 0)
					{
						if( ( Math.abs( this.DadObj.m_linearVelocity.x) < 0.01 && !this.Father_Enter && Math.abs( this.DadObj.m_linearVelocity.y) < 0.01) || (Math.abs( this.MomObj.m_linearVelocity.x) < 0.01 && !this.Mother_Enter && Math.abs( this.MomObj.m_linearVelocity.y ) < 0.01) )
							endLevel();
					}
			  },
			  checkToEnd: function()
			  {
				    //alert(this.Hat_1_Enter);
					if(this.Hat_1_Enter && this.Hat_2_Enter && this.Father_Enter && this.Mother_Enter)
					{
						this.finishLevel = true;
						
						destroyBody(this.DadObj , 50);
						destroyBody(this.MomObj , 50);
						destroyBody(this.Hat_1  , 50);
						destroyBody(this.Hat_2  , 50);
						
						playSound("EndBonus");
						this.endTimerId = setTimeout(function(){
							numOfChildsEnter = 3;
							endLevel();
						},3000);
					}
			  },
			  canvasDraw: function()
			  {
				  	ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes

				    drawButton(this.btn , this.IsBtnPressed , false , true);

					ctx.drawImage(this.sofaImg, this.SofaPos.GetPosition().x * ScaleFactor-85, this.SofaPos.GetPosition().y * ScaleFactor-97, 1.0*174.0 , 1.0*52.0);
					//ctx.drawImage(MomImg, this.SofaPos.GetPosition().x * ScaleFactor-45, this.SofaPos.GetPosition().y * ScaleFactor-109, 0.6*60.0 , 0.6*60.0);
			  },
			  canvasDrawForground: function()
			  {				
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
					 
					 ctx.drawImage(DadImg, this.SofaPos.GetPosition().x * ScaleFactor-40, this.SofaPos.GetPosition().y * ScaleFactor-98, 0.6*60.0 , 0.6*60.0);
					 ctx.drawImage(MomImg, this.SofaPos.GetPosition().x * ScaleFactor+11, this.SofaPos.GetPosition().y * ScaleFactor-98, 0.6*60.0 , 0.6*60.0);
					 
					 ctx.drawImage(this.Hat_1_Img, this.SofaPos.GetPosition().x * ScaleFactor-40, this.SofaPos.GetPosition().y * ScaleFactor-125, 0.6*60.0 , 0.6*60.0);
					 ctx.drawImage(this.Hat_2_Img, this.SofaPos.GetPosition().x * ScaleFactor+11, this.SofaPos.GetPosition().y * ScaleFactor-125, 0.6*60.0 , 0.6*60.0);

				
					 ctx.save(); 
						  ctx.translate(this.SofaPos.GetPosition().x * ScaleFactor-12+10, this.SofaPos.GetPosition().y * ScaleFactor-155+10);
						  ctx.scale( this.heartSize, this.heartSize);

						  ctx.translate(-(this.SofaPos.GetPosition().x * ScaleFactor-12+10), -(this.SofaPos.GetPosition().y * ScaleFactor-155+10));
						
						  ctx.drawImage(hartImg, this.SofaPos.GetPosition().x * ScaleFactor-12, this.SofaPos.GetPosition().y * ScaleFactor-155, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }
		}
		Level_5_10.startLevel();