var Level_4_5 = {
			timerSpeed:0.03,
			is_Btn_Pressed:false,

			timer:0,
			
			RightTunnelHand : null,
			LeftTunnelHand : null,
			
			btn : null,
			medfa3:null,
			
			TimeoutId:0,
			
			IsShotBomb:false,
			
			ArcLength:Math.PI * 2,
			
			startLevel: function() 
			{			
					numOfBalls = 1;
					HomePos = {"x": (canvasWidth/2.0) , "y":canvasHeight - 55};
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
					
					timerCounter = this.timerSpeed;
			},
			
			handleGameLogic:function()
			{
				
				if(!this.IsShotBomb)
				{
					this.timer++;
					
					if( this.timer % 148 == 0)
					{
						this.bomb();
					}
				}
					
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				clearTimeout(this.TimeoutId);

				this.is_Btn_Pressed = false;
			
				numOfBalls = 1;
				sandLevel = 0;
				
				this.timer=0;
				
				this.ArcLength = Math.PI * 2;
				this.IsShotBomb = false;
				
				timerCounter = this.timerSpeed;

				initGlobalVars();
				setTries(numOfBalls);
			},
			  startStage:function()
			  {
				    var MainPos = {"x":canvasWidth/2/ScaleFactor  ,"y":canvasHeight/2/ScaleFactor };
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor(true);
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPos.x+9  , y:MainPos.y+6.7,  vertices:[[0,0],[1.4,-3.5],[2.0,-3.5],[3.4,0]]});
					
					setTimeout(function(){
						
						CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPos.x+7.5  , y:MainPos.y+2,  width:0.4,height:0.4});
						
					},400);

					
					var circ = CreateObj({color:GREY_COLOR,type: "static" , shape:"circle" ,x:MainPos.x+10.7  , y:MainPos.y+3.4,  radius:0.42});
					this.medfa3 = CreateObj({categoryBits:0x0200,color:ORANGE_COLOR,type: "dynamic" , shape:"box" ,x:MainPos.x-7  , y:MainPos.y-1.5,  width: 1.0, height:2.2});
					createRevoluteJoint(circ , this.medfa3 , new b2Vec2(0,0) , new b2Vec2(0,-2.5) , false , 0 , 0);


					CreateObj({color:ORANGE_COLOR,type: "static" , shape:"circle" ,x:MainPos.x+10.7  , y:MainPos.y+3.3,  radius:1.1});
			
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPos.x , y:MainPos.y-4 , width:6.0,height:0.5 });
					
					CreateObj({name:"leftPlace",color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPos.x-2.0 , y:MainPos.y+1 , width:2.0,height:0.5 });
					CreateObj({name:"rightPlace",color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPos.x+2.0 , y:MainPos.y+1 , width:2.0,height:0.5 });

					this.btn = CreateObj({name:"btn",color:null , type:"static" , shape:"box" , x:MainPos.x , y:MainPos.y-4.3 , width:0.7 , height:0.7 });

					
					//CreateObj({name:"btn",color:'red' , type:"static" , shape:"box" , x:MainPos.x+7 , y:MainPos.y-3.5 , width:0.3 , height:0.3 });
					//CreateObj({name:"btn",color:'red' , type:"static" , shape:"box" , x:MainPos.x-7 , y:MainPos.y-3.5 , width:0.3 , height:0.3 });

					
					this.LeftTunnelHand = CreateObj({restitution:0,name:"zeft1",density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:MainPos.x-1  , y:MainPos.y+6.1, vertices:[[0,0],[0,-0.2],[5.3,-0.2],[5.3,0.2],[0,0.2]]});
					obj1 = CreateObj({color:'red',type: "static" , shape:"circle" ,x:MainPos.x+3.25 ,y:MainPos.y-4 , radius:0.2 });
					createRevoluteJoint(this.LeftTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
						
					this.RightTunnelHand = CreateObj({restitution:0,name:"zeft2",density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:MainPos.x-1  , y:MainPos.y+6.1,  vertices:[[0,0],[0,-0.2],[5.3,-0.2],[5.3,0.2],[0,0.2]]});
					obj1 = CreateObj({color:'red' , type: "static" , shape:"circle" , x:MainPos.x-3.3 , y:MainPos.y-4 , radius:0.2 });
					createRevoluteJoint(this.RightTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
					
					
					/*this.TimeoutId = setTimeout(function()
					{
						 if(currentTheme == 4 && levelSelected == 5)
						 {
							 
							    Level_4_5.IsShotBomb = true;
							 
								myImage = new Image();
								myImage.src = 'images/Kid_1.png';
								child_1 = CreateObj({name:'child_1' ,categoryBits:0x0002,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1  , y:Level_4_5.medfa3.GetPosition().y-1,radius:0.5,restitution:0,friction:0});

								myImage = new Image();
								myImage.src = 'images/Kid_2.png';
								child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1  , y:Level_4_5.medfa3.GetPosition().y-1,radius:0.5,restitution:0,friction:0});

								myImage = new Image();
								myImage.src = 'images/Kid_3.png';
								child_3 = CreateObj({name:'child_3',categoryBits:0x0006,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1 , y:Level_4_5.medfa3.GetPosition().y-1 ,radius:0.5,restitution:0,friction:0});
								

								child_1.ApplyForce(new b2Vec2(-5000, -4000),child_1.GetWorldCenter());
								child_2.ApplyForce(new b2Vec2(-6000, -3500),child_2.GetWorldCenter());
								child_3.ApplyForce(new b2Vec2(-6000, -3000),child_3.GetWorldCenter());
						}
						
					},2500);*/
			  },
			  canvasDraw: function()
			  {
					drawButton(this.btn,this.is_Btn_Pressed , false , true );

			  },
			  bomb : function()
			  {
				    Level_4_5.IsShotBomb = true;
							 
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0002,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1  , y:Level_4_5.medfa3.GetPosition().y-1,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1  , y:Level_4_5.medfa3.GetPosition().y-1,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0006,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0200),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:Level_4_5.medfa3.GetPosition().x-1 , y:Level_4_5.medfa3.GetPosition().y-1 ,radius:0.5,restitution:0,friction:0});
					

					child_1.ApplyForce(new b2Vec2(-5000, -4000),child_1.GetWorldCenter());
					child_2.ApplyForce(new b2Vec2(-6000, -3500),child_2.GetWorldCenter());
					child_3.ApplyForce(new b2Vec2(-6000, -3000),child_3.GetWorldCenter());
				  
			  },
			  canvasDrawForground: function()
			  {
					drawMe7bas(this.LeftTunnelHand.GetPosition());
					drawMe7bas(this.RightTunnelHand.GetPosition());
					
					
					ctx.fillStyle = ORANGE_COLOR;
					ctx.save();
						ctx.translate(this.medfa3.GetPosition().x * ScaleFactor, this.medfa3.GetPosition().y * ScaleFactor);
						ctx.rotate(this.medfa3.GetAngle());
						ctx.translate(-this.medfa3.GetPosition().x * ScaleFactor, -this.medfa3.GetPosition().y * ScaleFactor);
						
						ctx.fillRect(this.medfa3.GetPosition().x* ScaleFactor-15,this.medfa3.GetPosition().y * ScaleFactor-50, 30,30);
					ctx.restore();
					
					if(!this.IsShotBomb)
					{
						//alert(this.IsShotBomb)
						if(this.ArcLength > 0.1)
						{
							ctx.lineWidth = 13;
							this.ArcLength -= 0.045;
							ctx.strokeStyle = RED_COLOR;
							ctx.beginPath();
								ctx.arc(24*ScaleFactor,11*ScaleFactor+50,7,0,this.ArcLength);
								ctx.stroke();
							ctx.closePath();
						}
						
							
					}
					
					
					ctx.save();
						ctx.translate(this.medfa3.GetPosition().x * ScaleFactor, this.medfa3.GetPosition().y * ScaleFactor);
						ctx.rotate(this.medfa3.GetAngle());
						ctx.translate(-this.medfa3.GetPosition().x * ScaleFactor, -this.medfa3.GetPosition().y * ScaleFactor);
						
						ctx.fillRect(this.medfa3.GetPosition().x* ScaleFactor-15,this.medfa3.GetPosition().y * ScaleFactor-50, 30,30);
					ctx.restore();
					
					//this.medfa3
			  },
			  startCollide:function(contact)
			  {
				  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("btn") != -1))
				  {
					    this.closeCage();
					    this.is_Btn_Pressed = true;
				  }
				  else
				  if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("btn") != -1))
				  {
					  	this.closeCage();
					    this.is_Btn_Pressed = true;
				  }	
				  
				  //alert("collision:  "+contact.GetFixtureA().GetBody().details.name + "   " + contact.GetFixtureB().GetBody().details.name);

				  if( (contact.GetFixtureA().GetBody() == this.RightTunnelHand && contact.GetFixtureB().GetBody().details.name.indexOf("leftPlace") != -1))
				  {
						this.RightTunnelHand.SetLinearVelocity(new b2Vec2(0,0));
						//alert(2);
				  }	
					  
				  if( (contact.GetFixtureA().GetBody() == this.LeftTunnelHand && contact.GetFixtureB().GetBody().details.name.indexOf("rightPlace") != -1))
				  {
						this.LeftTunnelHand.SetLinearVelocity(new b2Vec2(0,0));
						//alert(1);
				  }	
							
			  },
			  checkIfWin: function()
			  {

			  },
			  closeCage: function()
			  {
				  //alert();
				  if(!this.is_Btn_Pressed)
				  {
					  this.LeftTunnelHand.ApplyImpulse(new b2Vec2(2000, 0),new b2Vec2(1,-5));
					  this.RightTunnelHand.ApplyImpulse(new b2Vec2(-2000, 0),new b2Vec2(1,-5));
					  
					  playSound("CartFall");
					   playSound("InGameButton");
				  }

			  } 
		}
		Level_4_5.startLevel();
		
		