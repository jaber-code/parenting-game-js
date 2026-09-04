
var Level_3_3 = {
			timerSpeed:0.02,
			
			arr_Circles:[],
			arr_Ropes:[null],
			arr_Kotal:[null],
			
			arr_Speeds:[1.4,1.5,1.55,1.6,1.7],
			
			block_1:null,
			block_2:null,
			
			LeftTunnelHand : null,
			RightTunnelHand : null,
			door_1_Lock:null,
			
			raffas_1:null,
			raffas_2:null,
			
			kamashaHand_1:null,
			kamashaHand_2:null,
			
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			kamashaRotate:0,
			
			leftDoor:null,
			
			intervalId:0,
			timeroutId:0,
			
			timer:0,
			
			Image_1:null,
			Image_2:null,
			Image_3:null,
			
			speed : -7,

			startLevel: function() 
			{			
					this.currentTime = new Date();
					numOfBalls = 4;
					HomePos = {"x": (canvasWidth/2.0) + 75, "y":canvasHeight - 57};
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
					////alert(Level_3_3.is_Child_3_Jump);
					//if(child_1 && Level_3_3.is_Child_1_Jump)
					////child_1.SetLinearVelocity(  new b2Vec2(this.speed*2 , this.speed*2)  );
					
					if(child_3 && Level_3_3.is_Child_3_Jump)   
						child_3.SetLinearVelocity(  new b2Vec2(-Math.abs(this.speed) , 0)  );
					
					if(child_2 && Level_3_3.is_Child_2_Jump)
						child_2.SetLinearVelocity(  new b2Vec2(0 , this.speed*2)  );
				}
				
				for(var i=0;i<this.arr_Circles.length;i++)
				{
					if(this.arr_Circles[i].GetPosition().x > canvasWidth/ScaleFactor-2)
						this.arr_Speeds[i] = -1*Math.abs(this.arr_Speeds[i]);
					else
					if(this.arr_Circles[i].GetPosition().x < 0+2)
						this.arr_Speeds[i] = Math.abs(this.arr_Speeds[i]);
					
					if(Math.abs(this.arr_Circles[i].m_linearVelocity.x) < 1.5)
						this.arr_Circles[i].SetLinearVelocity(new b2Vec2(this.arr_Speeds[i],0.0));		
				}
				
				if(!Level_3_3.is_Child_1_Jump)
					if( this.kamashaRotate < 0.1 )//this.timer % 1==0 &&
					{
						this.kamashaRotate += 0.002;

					}
			},
			
			reset:function()
			{
				/*for (var i = 1; i < 99999; i++) {
					window.clearInterval(i);
					window.clearTimeout(i);
				}*/
				deleteCurrentLevel();
				
				clearInterval(Level_3_3.intervalId);
				this.intervalId = 0;
				
				clearTimeout(Level_3_3.timeroutId);
				this.timeroutId = 0;

				this.kamashaRotate = 0;
				numOfBalls = 4;
				sandLevel = 0;	
				this.arr_Circles = [];
				this.arr_Ropes = [null];
				this.arr_Kotal = [null];
				
				this.RightTunnelHand = null;
				this.LeftTunnelHand = null;
				this.door_1_Lock = null;
				this.raffas_1 = null;
				this.raffas_2 = null;
				
				this.kamashaHand_1 = null;
				this.kamashaHand_2 = null;
				this.intervalId = 0;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				this.timer = 0;
				
				timerCounter = this.timerSpeed;

				initGlobalVars();
				setTries(numOfBalls);
			},
			  startStage:function()
			  {
			    this.Image_1 = new Image();
			    this.Image_1.src = "images/Puneshment_icon_1.png";
			 
			    this.Image_2 = new Image();
			    this.Image_2.src = "images/Puneshment_icon_2.png";
			 
			    this.Image_3 = new Image();
			    this.Image_3.src = "images/Puneshment_icon_3.png";
				  
				var obj1 = null;
				var obj2 = null;
					
				goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);	
				CreateFloor();
//---TOP LINE---
				CreateObj({ categoryBits: 0x0080,density:10,color:GREY_COLOR,fixedAngle:true,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-4  , y:0 , vertices:[[0,1],[40,1]] });

//---RIGHT MACHINE---
				this.LeftTunnelHand = CreateObj({density:100,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:18.5  , y:5.4, vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
				obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"circle" ,x:18.5 , y:8.4 , radius:0.2 });
				createRevoluteJoint(this.LeftTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
					
				this.RightTunnelHand = CreateObj({density:100,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:23.4  , y:12.4,  vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
				obj1 = CreateObj({color:GREY_COLOR , type: "static" , shape:"circle" , x:23.2 , y:8.4 , radius:0.2 });
				createRevoluteJoint(this.RightTunnelHand , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");

				LoopOverObj(Level3_3.b2 , GREY_COLOR,18.4,6.4, 1/4.0, "static" , 10);
				LoopOverObj(Level3_3.b3 , GREY_COLOR,20,10, 1/4.0,"static" , 10);
				
				CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:20.8 , y:10,width:4.1,height:0.4});
					
//---LEFT MACHINE---
				this.leftDoor = CreateObj({density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:4.5  , y:12.1, vertices:[[0,-0.1],[2,-0.1],[2,0.3],[0,0.3]]});
				this.door_1_Lock = CreateObj({type: "static" ,shape:"circle" ,x:6.2  , y:12.6 , radius:0.2 });
				obj1 = CreateObj({density:2,color:null,type: "static" , shape:"circle" ,x:4.5  , y:12.1 , radius:0.35 });
				createRevoluteJoint(this.leftDoor , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0,null);
					
				LoopOverObj(Level3_3.b1 , GREY_COLOR ,4.2 ,5.7,1/4.0, "static" , 10);//big box
				this.raffas_1 = CreateObj({density:2 , color:ORANGE_COLOR , fixedAngle:true , type: "static" , shape:"box" , x:5.4 , y:10.6,width:1.8,height:0.5});
				this.raffas_2 = LoopOverObj(Level3_3.b27 , ORANGE_COLOR,5.2 ,10.7, 1/4.0, "static" , 10,true);

//---CENTER OBJECTS---
			//Bottom edge 1
				LoopOverObj(Level3_3.b4 , GREY_COLOR,8 ,10, 1/4.0, "static" , 10);
				
					
			//Bottom edge 2
				LoopOverObj(Level3_3.b5 , GREY_COLOR,9.9 ,15.0, 1/4.0, "static" , 10);
				LoopOverObj(Level3_3.b4 , GREY_COLOR,3.7 ,12.63, 1/4.0, "static" , 10);

					
			//Rect container
				obj2 = LoopOverObj(Level3_3.b11 , GREY_COLOR,13.5 ,10, 1/1.0, "static" , 10);
				obj2 = CreateObj({color:null,type: "static" , shape:"circle" ,x:13.1  , y:8 , radius:0.1 });
				
			//Kamasha
				obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"circle" ,x:9.8  , y:4.5 , radius:0.3 });
				CreateObj({color:ORANGE_COLOR,type: "static" , shape:"circle" ,x:9.8  , y:4.5 , radius:0.52 });

				createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,-10) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				CreateObj({color:ORANGE_COLOR,fixedAngle:true ,type: "static" , shape:"box" ,x:9.8  , y:5.5, width:0.1 , height:2});
						
					
				obj1 = CreateObj({color:ORANGE_COLOR,type: "static" , shape:"circle" ,x:9.8  , y:6.5 , radius:0.35 });
				this.kamashaHand_1 = LoopOverObj(Level3_3.b15 ,null,9.8 ,6.5, 1/4.0, "dynamic" , 50,true);
				createRevoluteJoint(obj1 , this.kamashaHand_1 , new b2Vec2(-0.4,-0.4) , new b2Vec2(0,0) , false , 0 , 0);
					
				obj1 = CreateObj({density:10,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"circle" ,x:9.6  , y:6.5 , radius:0.35 });
				this.kamashaHand_2 = LoopOverObj(Level3_3.b14 , null,9.6 ,6.5, 1/4.0, "dynamic" , 50,true);
				createRevoluteJoint(obj1 , this.kamashaHand_2 , new b2Vec2(-1,-0.4) , new b2Vec2(0,0) , false , 0 , 0);
					
				//this.kamashaHand_1 = CreateObj({color:ORANGE_COLOR,type: "static" , shape:"box" ,x:10.6  , y:8.6 , width:0.4,height:0.4 });
				//this.kamashaHand_2 = CreateObj({color:ORANGE_COLOR,type: "static" , shape:"box" ,x:9.7  , y:8.6 , width:0.4,height:0.4 });
					
				//obj2.ApplyImpulse(new b2Vec2(1200, 0),obj2.GetWorldCenter());
				
//---FALLING OBJECTS---
			//Mothallath
					obj1 = CreateObj({categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:4  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:4  , y:1 , vertices:[ [0,0] , [0.6,0] , [0,1] , [-0.6,0] ]});
				this.arr_Circles.push(obj1);
				this.arr_Kotal.push(obj2);

					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[1] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);

			//Circle 
				    obj1 = CreateObj({categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x000f & ~0x0020),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:8  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x000f & ~0x0020),density:10,color:null,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:8  , y:0.6 , radius:0.7 });
				this.arr_Circles.push(obj1);
				this.arr_Kotal.push(obj2);
				
					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[2] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					
			//Box
					obj1 = CreateObj({categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x000f & ~0x0020),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:15  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_3",categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x000f & ~0x0020),density:10,color:'#72bcd4',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:15  , y:0.6 , width:0.9 , height:1.9 });
				this.arr_Circles.push(obj1);
				this.arr_Kotal.push(obj2);

					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[3] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					
				 
				 
			//Fifth poly shape
					obj1 = CreateObj({categoryBits:0x000f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:18  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_4",categoryBits:0x000f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020),density:10,color:null,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:4  , y:1 , vertices: [ [0 , 0] , [0.75 , 0.4] , [0.75 , 1.2] , [0 , 1.6] , [-0.75 , 1.2] , [-0.75 , 0.4] ]});
				this.arr_Circles.push(obj1);
				this.arr_Kotal.push(obj2);

					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[4] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					
			//Mostateel
					obj1 = CreateObj({categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0002),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:21  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_5",categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0002),density:10,color:null,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:15  , y:0.6 , width:1.3 , height:1.5 });
				this.arr_Circles.push(obj1);
				this.arr_Kotal.push(obj2);

					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[5] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					

					CreateObj({color:null,categoryBits:0x0080,name:"place_4",density:10,type: "dynamic" , shape:"circle" ,x:4.9  , y:6 , radius:0.1 });
					CreateObj({color:null,categoryBits:0x0080,name:"place_5",density:10,type: "dynamic" ,shape:"circle" ,x:14.5  , y:7 , radius:0.1 });
					CreateObj({color:null,categoryBits:0x0080,name:"place_2",density:10,type: "dynamic" , shape:"circle" ,x:20  , y:6 , radius:0.1 });


					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0006,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0040),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:10.6  , y:7.2,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0006 & ~0x0040),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:4.6  , y:9.2,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0002,maskBits:(0xFFFF & ~0x0006 & ~0x0004 & ~0x0040),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:19.5 , y:9.2 ,radius:0.5,restitution:0,friction:0});
					
					child_3.SetLinearVelocity(  new b2Vec2(2 , 0)  );
					child_2.SetLinearVelocity(  new b2Vec2(2 , 0)  );
					child_1.SetLinearVelocity(  new b2Vec2(2 , 0)  );
					

			  },

			  canvasDrawForground: function()
			  {
				    drawMe7bas(this.LeftTunnelHand.GetPosition());
					drawMe7bas(this.RightTunnelHand.GetPosition());
					drawMe7bas(this.leftDoor.GetPosition());
					
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

					
					ctx.drawImage(this.Image_3, this.arr_Kotal[4].GetPosition().x*ScaleFactor-25 , this.arr_Kotal[4].GetPosition().y*ScaleFactor ,103*0.5 ,102*0.5);
					ctx.drawImage(this.Image_1, this.arr_Kotal[2].GetPosition().x*ScaleFactor-25 , this.arr_Kotal[2].GetPosition().y*ScaleFactor -26,103*0.5 ,102*0.5);
					ctx.drawImage(this.Image_2, this.arr_Kotal[5].GetPosition().x*ScaleFactor-25 , this.arr_Kotal[5].GetPosition().y*ScaleFactor -26,103*0.5 ,102*0.5);
			  },

			  startCollide:function(contact)
			  {
					  if(  (contact.GetFixtureA().GetBody().details.name.indexOf("kotla") != -1)  )
					  {
						  this.checkIfWin();
						  
					  }
				  
				  
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("kotla") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("kotla_",""));
							
							if(this.arr_Ropes[num])
							{
									world.DestroyJoint(this.arr_Ropes[num]);
									this.arr_Ropes[num] = null;
									
									playSound("BoxesFall");
									
									//destroyBody(this.arr_Ropes[num],10);
									destroyBody(this.arr_Circles[num-1],10);
									
									//this.checkIfWin();
									
							}
					  }
					  else
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("kotla") != -1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("kotla_",""));

							if(this.arr_Ropes[num])
							{
									world.DestroyJoint(this.arr_Ropes[num]);
									this.arr_Ropes[num] = null;
									
									playSound("BoxesFall");
									
									//destroyBody(this.arr_Ropes[num],10);
									destroyBody(this.arr_Circles[num-1],10);
									
									//this.checkIfWin();
							}
					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name.indexOf("kotla") !=-1 && contact.GetFixtureA().GetBody().details.name.indexOf("place") !=-1)  )
					  {
						    //this.checkIfWin();
							
							var num1 = parseInt(contact.GetFixtureA().GetBody().details.name.replace("kotla_",""));
							var num2 = parseInt(contact.GetFixtureB().GetBody().details.name.replace("place_",""));

							destroyBody(contact.GetFixtureB().GetBody(),10);
							if(num1 == num2)
							{
								 playSound("MouseOver");
								switch(num1)
								{
									case 2:
										 this.LeftTunnelHand.ApplyImpulse(new b2Vec2(-900, 0),new b2Vec2(1 , 2));
										 
										
										 setTimeout(function(){
											Level_3_3.is_Child_3_Jump = false;
										 },1200)
									break;
									case 4:
										destroyBody( this.door_1_Lock , 10 );
										
										destroyBody( this.raffas_1 , 800 );
										destroyBody( this.raffas_2 , 800 );
										
										setTimeout(function(){
											Level_3_3.is_Child_2_Jump = false;
											startGlassParticle(this.raffas_1.GetPosition().x , this.raffas_1.GetPosition().y , "orange");
											playSound("Hit");
											
										},800)

									break;
									case 5:
										destroyBody(this.kamashaHand_2,800);
										destroyBody(this.kamashaHand_1,800);

										Level_3_3.is_Child_1_Jump = false;
									break;
								}
							}
					  }
					  else
					  if( (contact.GetFixtureB().GetBody().details.name.indexOf("place") !=-1 && contact.GetFixtureA().GetBody().details.name.indexOf("kotla") != -1) )
					  {
							var num1 = parseInt(contact.GetFixtureA().GetBody().details.name.replace("kotla_",""));
							var num2 = parseInt(contact.GetFixtureB().GetBody().details.name.replace("place_",""));
							
							destroyBody(contact.GetFixtureB().GetBody(),10);

							if(num1 == num2)
							{
								 playSound("MouseOver");
								switch(num1)
								{
									case 2:   
	
										 this.LeftTunnelHand.ApplyImpulse(new b2Vec2(-900, 0),new b2Vec2(1 , 2));

										 setTimeout(function(){
											Level_3_3.is_Child_3_Jump = false;
										 },1200)
									break;
									case 4:
								
										destroyBody(this.door_1_Lock,10);
										destroyBody(this.raffas_1,200);
										destroyBody(this.raffas_2,200);
										
										startGlassParticle(this.raffas_1.GetPosition().x , this.raffas_1.GetPosition().y , "orange");
										playSound("Hit");

										setTimeout(function(){
											Level_3_3.is_Child_2_Jump = false;
											
											
										},800)

									break;
									case 5:
										destroyBody(this.kamashaHand_2,1200);
										destroyBody(this.kamashaHand_1,1200);

										
										Level_3_3.is_Child_1_Jump = false;
										
									
									break;
								}
							}
					  }
					
			  },
			  checkIfWin: function()
			  {
				    var IsImPossible_1 = false;
				    var IsImPossible_2 = false;
				    var IsImPossible_3 = false;
				    
					if(child_1)
					{
						if(Level_3_3.is_Child_1_Jump && this.arr_Ropes[5] == null)
						{
							IsImPossible_1 = true;
						}
					}
					else
					{
						IsImPossible_1 = true;
					}
					
					if(child_2)
					{
						if(Level_3_3.is_Child_2_Jump && this.arr_Ropes[4] == null)
						{
							IsImPossible_2 = true;
						}
					}
					else
					{
						IsImPossible_2 = true;
					}
					
					if(child_3)
					{
						if(Level_3_3.is_Child_3_Jump && this.arr_Ropes[2] == null)
						{
							IsImPossible_3 = true;
						}
					}
					else
					{
						IsImPossible_3 = true;
					}
					
					//alert(IsImPossible_1 + "    " +IsImPossible_2+ "    " +IsImPossible_3);
					
					if(IsImPossible_1 && IsImPossible_2 && IsImPossible_3)
					{
						clearTimeout(Level_3_3.timeroutId);
						Level_3_3.timeroutId = setTimeout(Level_3_3.endIt,3000);   
					}
			  },
			  endIt: function()
			  {
				    if(child_1)
					{
						if(Level_3_3.is_Child_1_Jump && Level_3_3.arr_Ropes[5] == null)
						{
							IsImPossible_1 = true;
						}
					}
					else
					{
						IsImPossible_1 = true;
					}
					
					if(child_2)
					{
						if(Level_3_3.is_Child_2_Jump && Level_3_3.arr_Ropes[4] == null)
						{
							IsImPossible_2 = true;
						}
					}
					else
					{
						IsImPossible_2 = true;
					}
					
					if(child_3)
					{
						if(Level_3_3.is_Child_3_Jump && Level_3_3.arr_Ropes[2] == null)
						{
							IsImPossible_3 = true;
						}
					}
					else
					{
						IsImPossible_3 = true;
					}
					
					//alert("last=    "+IsImPossible_1 + "    " +IsImPossible_2+ "    " +IsImPossible_3);
					
					if(IsImPossible_1 && IsImPossible_2 && IsImPossible_3)
					{
						endLevel();  
					}
					
					
				    
			  }
		}
		Level_3_3.startLevel();