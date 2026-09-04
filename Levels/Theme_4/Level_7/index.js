var Level_4_7 = {
			timerSpeed:0.04,
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			glass_Con:null,
			
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			
			speed : -4,

			timer:0,
			
			Image_1:null,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-310, "y":canvasHeight-58};
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
				this.timer++;
				if( this.timer % 100 == 0 )
				{
					//this.speed *= -1;
					if(child_1 && Level_4_7.is_Child_1_Jump)
						child_1.SetLinearVelocity(  new b2Vec2(this.speed/2, this.speed*1)  );
					
					if(child_3 && Level_4_7.is_Child_3_Jump)   
						child_3.SetLinearVelocity(  new b2Vec2(-this.speed/4 , this.speed*1)  );
					
					if(child_2 && Level_4_7.is_Child_2_Jump)
						child_2.SetLinearVelocity(  new b2Vec2(this.speed/2 , this.speed*1)  );
				}
				
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.glass_1 = null;
				this.glass_2 = null;
				this.glass_3 = null;
				
				this.glass_Con = null;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				this.timer = 0;
				
				this.speed = -4,

				numOfBalls = 3;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  
				    this.Image_1 = new Image();
					this.Image_1.src = "images/glass_block.png";
				
				
					var MainPosX = canvasWidth/2/ScaleFactor;
					var MainPosY = canvasHeight/2/ScaleFactor;

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					CreateFloor();
					
					
					createDiagonalStick({x:MainPosX-14,y:MainPosY+6.8,w:15,h:0.37, w2:15.0 , h2:7.0,color:GREY_COLOR,isFlipVer:true});

					createDiagonalStick({x:MainPosX+7,y:MainPosY-1.1,w:5,h:0.37, w2:3.0 , h2:1.5,color:GREY_COLOR,isFlipVer:true});
					
					createDiagonalStick({x:MainPosX+9.5,y:MainPosY-3.6,w:5,h:0.37, w2:3.0 , h2:1.5,color:GREY_COLOR,isFlipVer:true});

					
					createSpikesBox(MainPosX-9 , MainPosY-3 , 1);
					createSpikesBox(MainPosX-5 , MainPosY-3 , 1);
					createSpikesBox(MainPosX-1 , MainPosY-3 , 1);
					
					var cen = CreateObj({color:GREY_COLOR,type:"static" ,shape:"box" , x:MainPosX+12.1, y:MainPosY+3.7 ,width:0.4,height:15});

				  //var stick1 = CreateObj({color:ORANGE_COLOR,type:"dynamic" ,shape:"box" , x:MainPosX+5.7, y:MainPosY+3.0 ,width:6.5,height:0.4});
					var stick1 = CreateObj({color:ORANGE_COLOR,type:"dynamic" ,shape:"poly" , x:MainPosX+5.7, y:MainPosY+3.0 ,vertices:[ [0,0] , [3.5,0] , [3.5,0.4] , [0,0.4]]});

					createRevoluteJoint(stick1 , cen , new b2Vec2(3.4, 0) , new b2Vec2(0, 0), false ,  0 ,  0,null);
					
					var stick2 = CreateObj({color:ORANGE_COLOR,type:"dynamic" ,shape:"box" , x:MainPosX+6.5, y:MainPosY-1.5 ,width:0.4,height:7.5});
					createRevoluteJoint(stick2 , stick1 , new b2Vec2(0, 3.6) , new b2Vec2(0, 0), false ,  0 ,  0,null);
					

					this.glass_1 = CreateObj({color:GLASS_COLOR,type:"static" ,shape:"box" , x:MainPosX+9.1, y:MainPosY+5.8 ,width:0.4,height:3});
					this.glass_2 = CreateObj({color:GLASS_COLOR,type:"static" ,shape:"box" , x:MainPosX+10.1, y:MainPosY+5.8 ,width:0.4,height:3});
					this.glass_3 = CreateObj({color:GLASS_COLOR,type:"static" ,shape:"box" , x:MainPosX+11.1, y:MainPosY+5.8 ,width:0.4,height:3});

				//	LoopOverObj(Level3_3.b11 , GREY_COLOR,13.5 ,10, 1/1.0, "static" , 10);
					this.glass_Con = LoopOverObj(Level4_1.glass_block , null, MainPosX+9.2 , MainPosY-7.8 ,0.9 , "dynamic",50);
					
					
					CreateObj({color:ORANGE_COLOR,type:"static" ,shape:"box" , x:MainPosX+10.0, y:MainPosY+2.1 ,width:0.4,height:0.4});
					/*setTimeout(function()
				    {
					  
						destroyBody(box , 100);
						
					},2100);*/

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0002 , maskBits:(0xFFFF & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX+9.5, y :MainPosY-7.6,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004 , maskBits:(0xFFFF & ~0x0002 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX+9.5  , y :MainPosY-7.6,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0006 , maskBits:(0xFFFF & ~0x0002 & ~0x0004 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX+9.5 , y : MainPosY-7.6,radius:0.5,restitution:0,friction:0});
					
					
					child_3.SetLinearVelocity(  new b2Vec2(1 , 1)  );
					child_2.SetLinearVelocity(  new b2Vec2(1 , 1)  );
					child_1.SetLinearVelocity(  new b2Vec2(1 , 1)  );
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureB().GetBody().details.name == "Parent")// && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1)
					{	
						if(contact.GetFixtureA().GetBody() == this.glass_1)
						{
							this.is_Child_1_Jump = false;
							this.is_Child_2_Jump = false;
							this.is_Child_3_Jump = false;
							
							destroyBody(this.glass_1 , 100);
							this.glass_1 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_2)
						{
							this.is_Child_1_Jump = false;
							this.is_Child_2_Jump = false;
							this.is_Child_3_Jump = false;
							
							destroyBody(this.glass_2 , 100);
							this.glass_2 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_3)
						{
							this.is_Child_1_Jump = false;
							this.is_Child_2_Jump = false;
							this.is_Child_3_Jump = false;
							
							destroyBody(this.glass_3 , 100);
							this.glass_3 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						
						if(contact.GetFixtureA().GetBody() == this.glass_Con)
						{
							this.speed *= 5;
							this.timer = 99;
							
							destroyBody(this.glass_Con , 100);
							this.glass_Con = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
					}
					else
						if(contact.GetFixtureB().GetBody() == goal && contact.GetFixtureA().GetBody() == this.glass_Con)
						{
							this.is_Child_1_Jump = false;
							this.is_Child_2_Jump = false;
							this.is_Child_3_Jump = false;
							
							destroyBody(this.glass_Con , 100);
							this.glass_Con = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
			  },
			  canvasDrawForground: function()
			  {
				  
				  if(this.glass_Con)
				  {
					  
					  ctx.save();
						ctx.translate(this.glass_Con.GetPosition().x * ScaleFactor, this.glass_Con.GetPosition().y * ScaleFactor);
						ctx.rotate(this.glass_Con.GetAngle());
						ctx.translate(-this.glass_Con.GetPosition().x * ScaleFactor, -this.glass_Con.GetPosition().y * ScaleFactor);

					    ctx.drawImage(this.Image_1, this.glass_Con.GetPosition().x*ScaleFactor , this.glass_Con.GetPosition().y*ScaleFactor, 107*0.85 , 107*0.9 );
					ctx.restore();
				  }
				    //console.log(this.glass_1);
					/*if( this.glass_1 != null)
					{
						ctx.drawImage(this.qMarkImg, child_1.GetPosition().x*ScaleFactor+1 , child_1.GetPosition().y*ScaleFactor-48, 64*0.3 , 93*0.3 );
						ctx.drawImage(glassImg, this.glass_1.GetPosition().x*ScaleFactor , this.glass_1.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_1 != null)
						ctx.drawImage(this.Kid_1_IconImg, child_1.GetPosition().x*ScaleFactor+1 , child_1.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);
					
					
					if( this.glass_2 != null)
					{
						ctx.drawImage(this.qMarkImg, child_2.GetPosition().x*ScaleFactor+1 , child_2.GetPosition().y*ScaleFactor-48, 64*0.3 , 93*0.3 );
						ctx.drawImage(glassImg, this.glass_2.GetPosition().x*ScaleFactor , this.glass_2.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_2 != null)
						ctx.drawImage(this.Kid_2_IconImg, child_2.GetPosition().x*ScaleFactor+1 , child_2.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);
					
					
					if( this.glass_3 != null)
					{
						ctx.drawImage(this.qMarkImg, child_3.GetPosition().x*ScaleFactor+1 , child_3.GetPosition().y*ScaleFactor-48, 64*0.3 ,93*0.3 );
						ctx.drawImage(glassImg, this.glass_3.GetPosition().x*ScaleFactor , this.glass_3.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_3 != null)
						ctx.drawImage(this.Kid_3_IconImg, child_3.GetPosition().x*ScaleFactor+1 , child_3.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);*/

			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_4_7.startLevel();
		
		