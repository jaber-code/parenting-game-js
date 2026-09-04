var Level_3_4 = {
			timerSpeed:0.03,

			LeftTunnelHand : null,
			RightTunnelHand : null,

			kamashaHand_1:null,
			kamashaHand_2:null,
			
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			
			btn_1_Pressed:false,
			btn_2_Pressed:false,
			btn_3_Pressed:false,
			
			gate_1:null,

			
			btn_1 : null,
			btn_2 : null,
			btn_3 : null,
			
			intervalId:0,
			timer:0,
			
			kamashaRotate:0,
			
			speed : 7,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0) + 100, "y":canvasHeight - 57};
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
					this.timer += 1;
					if( this.timer % 100 == 0 )
					{
						this.speed *= -1;
						
						if(child_3 && Level_3_4.is_Child_3_Jump)   
							child_3.SetLinearVelocity(  new b2Vec2(this.speed , 0)  );
						
						
						//alert(child_2 && Level_3_4.is_Child_2_Jump);
						if(child_2 && Level_3_4.is_Child_2_Jump)
							child_2.SetLinearVelocity(  new b2Vec2(0 , -15)  );
							
						//if(child_1 && Level_3_4.is_Child_1_Jump)
							//child_1.SetLinearVelocity(  new b2Vec2(this.speed , -4)  );
					}
					
					
					if(!Level_3_4.is_Child_1_Jump)
						if(this.timer % 20==0 && this.kamashaRotate<0.1)
						{
							this.kamashaRotate+=0.02;

						}
			},
			
			reset:function()
			{
				/*for (var i = 1; i < 99999; i++) {
					window.clearInterval(i);
					window.clearTimeout(i);
				}*/
				
				deleteCurrentLevel();
				clearInterval(this.intervalId);

				this.kamashaRotate = 0;
			
				numOfBalls = 3;
				sandLevel = 0;
				
				this.timer = 0;

				this.gate_1 = null;
				this.gate_2 = null;	
				this.gate_3 = null;	
				
				this.btn_1_Pressed = false;
				this.btn_2_Pressed = false;
				this.btn_3_Pressed = false;
								
				this.RightTunnelHand = null;
				this.LeftTunnelHand = null;
				
				this.kamashaHand_1 = null;
				this.kamashaHand_2 = null;
				this.intervalId = 0;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				timerCounter = this.timerSpeed;

				initGlobalVars();
				setTries(numOfBalls);
			},
			  startStage:function()
			  {
					var obj1 = null;
					var obj2 = null;
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();

//---LEFT MACHINE---
					//contaienr
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:3.4 , y:8.5 , width:0.4 ,height:4.7 });
					CreateObj({color:GREY_COLOR ,type: "static" , shape:"box" ,x:4.9 , y:8.5 , width:0.4 ,height:4.7 });
					CreateObj({color:GREY_COLOR ,type: "static" , shape:"box" ,x:4.3 , y:10.65 , width:1.5 ,height:0.4 });
					
					//this.gate_1 = createGate(3.4 , 5.95 , 2 , 0.4 , 0.4);
					
					this.gate_1 = CreateObj({density:80,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:3.4  , y:5.75, vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"circle" ,x:3.4, y:5.75 , radius:0.2 });
					createRevoluteJoint(this.gate_1 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
					
					//button
					this.btn_1 = CreateObj({name:"btn_1",color:null , type:"static" , shape:"box" , x:4.3 , y:10.97 , width:0.7 , height:0.7 });

					obj1 = creatFan( 4.3 , 3 , 2 , 0.4 ,true,8,8,200);
					//obj1.ApplyImpulse(new b2Vec2(3000, 0),new b2Vec2(2, 0));
					
//---RIGHT MACHINE---
				    CreateObj({color:GREY_COLOR ,type: "static" , shape:"box" ,x:21.5 , y:8.0 , width:4 ,height:0.4 });//upper stick
					CreateObj({color:GREY_COLOR ,type: "static" , shape:"box" ,x:21.5 , y:9.6 , width:4.1 ,height:0.4 });//bottom stick

					LoopOverObj(Level3_3.b3 , "#777777",20.9,9.8, 1/4.0,"static" , 10);//tower
					
					this.LeftTunnelHand = CreateObj({density:200,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:23.9  , y:8.1, vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
					obj1 = CreateObj({color:null,type: "static" , shape:"circle" ,x:19.2, y:8.1 , radius:0.2 });
					createRevoluteJoint(this.LeftTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
						
					this.RightTunnelHand = CreateObj({density:200,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:23.8  , y:8.1,  vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
					obj1 = CreateObj({color:null , type: "static" , shape:"circle" , x:23.8  , y:8.1 , radius:0.2 });
					createRevoluteJoint(this.RightTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
						
//---CENTER OBJECTS---

				//button
					this.btn_2  = CreateObj({name:"btn_2",color:null , type:"static" , shape:"box" , x:21.5 , y:7.6, width:0.7 , height:0.7 });

				//Center edge
					LoopOverObj(Level3_3.b4 , "#777777",8 ,10, 1/4.0, "static" , 10);
					
				//Bottom edge
					LoopOverObj(Level3_3.b5 , "#777777",9.9 ,15.0, 1/4.0, "static" , 10);
					LoopOverObj(Level3_3.b4 , "#777777",3.7 ,12.63, 1/4.0, "static" , 10);

				//Kamasha container
					this.btn_3 = CreateObj({name:"btn_3",color: null , type:"static" , shape:"box" , x:14.8 , y:4.5 , width:0.7 , height:0.7 });

					obj2 = CreateObj({color: "#777777" , type:"static" , shape:"box" , x:14.0 , y:4.5 , width:1.3 , height:1.1 });

				//Kamasha
					obj1 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "static" , shape:"circle" ,x:10  , y:4.5 , radius:0.35 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);

					CreateObj({density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "static" , shape:"box" ,x:10  , y:5.5, width:0.1 , height:2});
					
					obj1 = CreateObj({color:ORANGE_COLOR,type: "static" , shape:"circle" ,x:9.8  , y:6.5 , radius:0.35 });
					this.kamashaHand_1 = LoopOverObj(Level3_3.b15 ,null,9.8 ,6.5, 1/4.0, "dynamic" , 50,true);
					createRevoluteJoint(obj1 , this.kamashaHand_1 , new b2Vec2(-0.4,-0.4) , new b2Vec2(0,0) , false , 0 , 0);
						
					obj1 = CreateObj({density:10,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"circle" ,x:9.6  , y:6.5 , radius:0.35 });
					this.kamashaHand_2 = LoopOverObj(Level3_3.b14 , null,9.6 ,6.5, 1/4.0, "dynamic" , 50,true);
					createRevoluteJoint(obj1 , this.kamashaHand_2 , new b2Vec2(-1,-0.4) , new b2Vec2(0,0) , false , 0 , 0);
						
					//this.kamashaHand_1 = CreateObj({density:9999,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"box" ,x:10.6  , y:8.6 , width:0.4,height:0.4 });
					//this.kamashaHand_2 = CreateObj({density:9999,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"box" ,x:9.4  , y:8.6 , width:0.4,height:0.4 });

					obj2.ApplyImpulse(new b2Vec2(1500, 0),obj2.GetWorldCenter());

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:10.6  , y:7.2,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:4.6  , y:9.2,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:21.0 , y:9.2 ,radius:0.5,restitution:0,friction:0});
					
					child_1.SetLinearVelocity(  new b2Vec2(1 , 0)  );
					child_2.SetLinearVelocity(  new b2Vec2(1 , 0)  );
					child_3.SetLinearVelocity(  new b2Vec2(1 , 0)  );

					

			  },
			  canvasDraw: function()
			  {
					drawButton(this.btn_1,this.btn_1_Pressed , true , true );
					drawButton(this.btn_2,this.btn_2_Pressed , false , true );
					drawButton(this.btn_3,this.btn_3_Pressed , true , false );
			  },
			  canvasDrawForground: function()
			  {
					drawMe7bas(this.LeftTunnelHand.GetPosition());
					drawMe7bas(this.RightTunnelHand.GetPosition());
					drawMe7bas(this.gate_1.GetPosition());
							
					ctx.save();
						ctx.translate(9.5 * ScaleFactor, 6.1 * ScaleFactor);
						ctx.rotate(this.kamashaRotate);
						ctx.translate(-9.5 * ScaleFactor, -6.1 * ScaleFactor);

						DrawJSONObj(Level3_3.b14 , ORANGE_COLOR , 8.7 , 6.1 , 1/4);
					ctx.restore();
					
					ctx.save();
						ctx.translate(9.9 * ScaleFactor, 6.1 * ScaleFactor);
						ctx.rotate(-this.kamashaRotate);
						ctx.translate(-9.9 * ScaleFactor, -6.1 * ScaleFactor);

						DrawJSONObj(Level3_3.b15 , ORANGE_COLOR , 9.5 , 6.1 , 1/4);
					ctx.restore();
					
					if(this.kamashaHand_1)
						drawMe7bas(new b2Vec2( this.kamashaHand_1.GetPosition().x+0.37 ,  this.kamashaHand_1.GetPosition().y+0.4)     );
			  },
			  startCollide:function(contact)
			  {
				  var num = 0;
					if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("btn") != -1) )
					{
						   playSound("EyesLook");
						   num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("btn_",""));
					}
						   

					if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("btn") != -1) )
					{
						   num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("btn_",""));
						   playSound("EyesLook");
					}
						   
				    
					
					
					if( num != 0)
					{
						
						//alert(num);
						switch(num)
						{
							case 1:
								if(!this.btn_1_Pressed)
								{
									 this.gate_1.ApplyImpulse(new b2Vec2(0, -600),this.gate_1.GetWorldCenter());
									 
									 this.btn_1_Pressed = true;
									  
									  setTimeout(function(){
										  Level_3_4.is_Child_2_Jump = false;
									  },800)
								}
							break;
							case 2:
								if(!this.btn_2_Pressed)
								{
									 this.LeftTunnelHand.ApplyImpulse(new b2Vec2(1500, 0),this.LeftTunnelHand.GetWorldCenter());
									 this.RightTunnelHand.ApplyImpulse(new b2Vec2(-1500, 0),this.RightTunnelHand.GetWorldCenter());

									 this.btn_2_Pressed = true;
									  setTimeout(function(){
										   Level_3_4.is_Child_3_Jump = false;
									  },800)
								}
							break;
							case 3:
								if(!this.btn_3_Pressed)
								{
									destroyBody(this.kamashaHand_2,1000);
									destroyBody(this.kamashaHand_1,1000);
									 
									this.btn_3_Pressed = true;
									 
									setTimeout(function(){
										Level_3_4.is_Child_1_Jump = false;
									},800)
								}
							break;
						}
					}
					
			  },
			  checkIfWin: function()
			  {
					if(numOfBalls == 0)
					{
						setTimeout(Level_3_4.checkIfWin2 , 4400);
					}
			  },
			  checkIfWin2: function()
			  {
				  if(numOfBalls == 0)
				  {
				    var IsOnPossible_1 = false;
				    var IsOnPossible_2 = false;
				    var IsOnPossible_3 = false;
				    
					if(child_1)
					{
						if(Level_3_4.is_Child_1_Jump )
						{
							IsOnPossible_1 = true;
						}
				    }
					else
						IsOnPossible_1 = true;
					
					if(child_2)
					{
						if(Level_3_4.is_Child_2_Jump )
						{
							IsOnPossible_2 = true;
						}
					}
					else
						IsOnPossible_2 = true;
					
					
					if(child_3)
					{
						if(Level_3_4.is_Child_3_Jump )
						{
							IsOnPossible_3 = true;
						}
					}
					else
						IsOnPossible_3 = true;
					
					if(IsOnPossible_1 && IsOnPossible_2 && IsOnPossible_3)
					{
						endLevel();
					}
				  }
			  }
		}
		Level_3_4.startLevel();
		
		