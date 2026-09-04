var Level_5_4 = {
			timerSpeed:0.03,
			
			arr_Circles:[],
			arr_Ropes:[null],
			arr_Kotal:[null],
			
			arr_Speeds:[1.4,1.5,1.55,1.6,1.7,1.3],
		
			machine_1 : null,
			machine_2 : null,
			machine_3 : null,
			
			machine_1_in : false,
			machine_2_in : false,
			machine_3_in : false,

			child_1_Moved:false,
			child_2_Moved:false,
			child_3_Moved:false,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+290, "y":canvasHeight-57};
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
				this.timer += 1;
				
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
				
				
				if(this.machine_1_in && !this.child_1_Moved)
				{
				    //alert(1);
					child_1.SetLinearVelocity(new b2Vec2(7, 0));
					this.child_1_Moved = true;
				}
				
				if(this.machine_2_in && !this.child_2_Moved)
				{
				    //alert(1);
					child_2.SetLinearVelocity(new b2Vec2(7, 0));
					this.child_2_Moved = true;
				}
				
				if(this.machine_3_in && !this.child_3_Moved)
				{
				    //alert(1);
					child_3.SetLinearVelocity(new b2Vec2(3, 0));
					this.child_3_Moved = true;
				}

			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				this.arr_Circles = [];
				this.arr_Ropes = [null];
				this.arr_Kotal = [null];
				
				this.machine_1_in = false;
				this.machine_2_in = false;
				this.machine_3_in = false;
				
				this.child_1_Moved = false;
				this.child_2_Moved = false;
				this.child_3_Moved = false;

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  var ActiveImg = new Image();
				  ActiveImg.src = 'images/lamp_full.png';
										
				  var NotActiveImg = new Image();
				  NotActiveImg.src = 'images/lamp_cracked.png';
		
				  var obj1;
				  var obj2;
				
				  CreateObj({categoryBits:0x0200, color:GREY_COLOR,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-1  , y:0 , vertices:[[0,1],[30,1]] });

				  CreateFloor(false);
				  goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
				  
				  
				  drawCirclePath(5.18 , 5.2 ,0.90 ,0.8 ,20,6.5, GREY_COLOR);
				  drawCirclePath(11.68 , 10.2 ,0.90 ,0.8 ,20,6.5, GREY_COLOR);
				  drawCirclePath(16.68 , 6.8 ,0.90 ,0.8 ,20,6.5, GREY_COLOR);

								  
				  this.machine_1 = LoopOverObj( Level5_3.Kid_Place , GREY_COLOR , 3.5 , 5.0 , 1 , "static" , 0 , false , 0x0400 ,"noth" );
				  this.machine_2 = LoopOverObj( Level5_3.Kid_Place , GREY_COLOR , 10 , 10 , 1 , "static" , 0 , false , 0x0400 ,"noth" );
				  this.machine_3 = LoopOverObj( Level5_3.Kid_Place , GREY_COLOR , 15 , 6.6 , 1 , "static" , 0 , false , 0x0400 ,"noth" );
				
				  obj1 = CreateObj({color:null,categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0080),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:0  , y:0 , radius:1 });
				  obj2 = CreateObj({image:ActiveImg,name:"active_1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0080),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:0  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[1] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  obj1 = CreateObj({color:null,categoryBits:0x000f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020 & ~0x0080),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:9  , y:0 , radius:1 });
				  obj2 = CreateObj({image:ActiveImg,name:"active_2",categoryBits:0x000f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020 & ~0x0080),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:9  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[2] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  obj1 = CreateObj({color:null,categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0080),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:6  , y:0 , radius:1 });
				  obj2 = CreateObj({image:ActiveImg,name:"active_3",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0080),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:6  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[3] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  obj1 = CreateObj({color:null,categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x000f & ~0x0020 & ~0x0080),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:3  , y:0 , radius:1 });
				  obj2 = CreateObj({image:NotActiveImg,name:"kotla_4",categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x000f & ~0x0020 & ~0x0080),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:3  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[4] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  obj1 = CreateObj({color:null,categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0002 & ~0x0080),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:15  , y:0 , radius:1 });
				  obj2 = CreateObj({image:NotActiveImg,name:"kotla_5",categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0002 & ~0x0080),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:15  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[5] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  obj1 = CreateObj({color:null,categoryBits:0x0080,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0002 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:12  , y:0, radius:1 });
				  obj2 = CreateObj({image:NotActiveImg,name:"kotla_6",categoryBits:0x0080,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x000f & ~0x0020 & ~0x0002 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:12  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[6] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);


				  CreateObj({color:null,categoryBits:0x2000,name:"place_1",type: "static" , shape:"circle" ,x:this.machine_1.GetPosition().x+1.6 , y:this.machine_1.GetPosition().y+0.9 , radius:0.1 });
				  CreateObj({color:null,categoryBits:0x2000,name:"place_2",type: "static" , shape:"circle" ,x:this.machine_2.GetPosition().x+1.6 , y:this.machine_2.GetPosition().y+0.9 , radius:0.1 });
				  CreateObj({color:null,categoryBits:0x2000,name:"place_3",type: "static" , shape:"circle" ,x:this.machine_3.GetPosition().x+1.6 , y:this.machine_3.GetPosition().y+0.9 , radius:0.1 });
					
					


							
				  var myImage = new Image();
				  myImage.src = 'images/Kid_1.png';
				  child_1 = CreateObj({name:'child_1',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x :this.machine_1.GetPosition().x + 4.3 , y : this.machine_1.GetPosition().y+0.8,radius:0.5,restitution:0,friction:0});
				
				  var myImage = new Image();
				  myImage.src = 'images/Kid_2.png';
				  child_2 = CreateObj({name:'child_2',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x :this.machine_2.GetPosition().x + 4.3  , y : this.machine_2.GetPosition().y+0.8,radius:0.5,restitution:0,friction:0});
				
				  var myImage = new Image();
				  myImage.src = 'images/Kid_3.png';
				  child_3 = CreateObj({name:'child_3',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x :this.machine_3.GetPosition().x + 4.3  , y : this.machine_3.GetPosition().y+0.8,radius:0.5,restitution:0,friction:0});
	
				  child_1.SetLinearVelocity(new b2Vec2(-0.05, 1));
				  child_2.SetLinearVelocity(new b2Vec2(-0.05, 1));
				  child_3.SetLinearVelocity(new b2Vec2(-0.05, 1));
			  },
			  startCollide:function(contact)
			  {
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("kotla") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("kotla_",""));

							playSound("Hit_Theqel");
							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("kotla") != -1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("kotla_",""));
playSound("Hit_Theqel");
							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("active") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("active_",""));
playSound("Hit_Theqel");
							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("active") != -1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("active_",""));
playSound("Hit_Theqel");
							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if((contact.GetFixtureA().GetBody().details.name.indexOf("active") !=-1 && contact.GetFixtureB().GetBody().details.name.indexOf("place") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("place_",""));

							destroyBody(contact.GetFixtureB().GetBody(),0);
							//alert(num);

							playSound("MouseOver");
							switch(num)
							{
								case 1:
									//alert(num);
									this.machine_1_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));
									
								break;
								case 2:
									//alert(num);

									this.machine_2_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));
								break;
								case 3:
									//alert(num);

									this.machine_3_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));

								break;
							}
					  }
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					var pos_X = this.machine_1.GetPosition().x * ScaleFactor;
					var pos_Y = this.machine_1.GetPosition().y * ScaleFactor;
					
					ctx.fillStyle = ORANGE_COLOR;
					if(!this.machine_1_in)
					{
						ctx.fillRect(pos_X+130-25 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95-25 , pos_Y+20 , 40 , 10);
					}
					else
					{
						ctx.fillRect(pos_X+130 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95 , pos_Y+20 , 40 , 10);
					}
					
					pos_X = this.machine_2.GetPosition().x * ScaleFactor;
					pos_Y = this.machine_2.GetPosition().y * ScaleFactor;
					if(!this.machine_2_in)
					{
						ctx.fillRect(pos_X+130-25 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95-25 , pos_Y+20 , 40 , 10);
					}
					else
					{
						ctx.fillRect(pos_X+130 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95 , pos_Y+20 , 40 , 10);
					}
					
					pos_X = this.machine_3.GetPosition().x * ScaleFactor;
					pos_Y = this.machine_3.GetPosition().y * ScaleFactor;
					if(!this.machine_3_in)
					{
						ctx.fillRect(pos_X+130-25 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95-25 , pos_Y+20 , 40 , 10);
					}
					else
					{
						ctx.fillRect(pos_X+130 , pos_Y , 10 , 50);
						ctx.fillRect(pos_X+95 , pos_Y+20 , 40 , 10);
					}
					
			  }
		}
		Level_5_4.startLevel();
		
		