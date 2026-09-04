var Level_3_1 = {
			timerSpeed:0.02,

			arr_Ropes:[null,null,null,null],
			startPos:{"x": (canvasWidth/2.0)+100, "y":canvasHeight-38},

			IsStick_1_In:false,
			IsStick_2_In:false,
			IsStick_3_In:false,
			IsStick_4_In:false,
			IsStick_5_In:false,
			
			startLevel: function() 
			{			
					numOfBalls = 7;
					HomePos = {"x": (canvasWidth/2.0)+100, "y":canvasHeight-57};
					
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

				numOfBalls = 7;
				sandLevel = 0;

				this.IsStick_1_In = false;
				this.IsStick_2_In = false;
				this.IsStick_3_In = false;	
				this.IsStick_4_In = false;
				this.IsStick_5_In = false;					
				
				this.arr_Ropes=[null,null,null,null];
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();
					var arr = [-26, -20.5, -26, -34.5, 26, 21.5, 26, 34.5];
					
					var arr1 = [[0.0,0],[0,-0.4],[2,-0.4],[2,0]]; // strigt 
					var arr2 = [[2,0],[2,0.38],[0.4,0.38],[0.13,0]];
					var arr3 = [[2,0],[2.5,0.3],[0.4,0.3],[0,0]];  
					var arr4 = [-16.5, -25, 21.5, 16, 16.5, 25, -21.5, -16];


					var obj1 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-13 , y:this.startPos.y/ScaleFactor-8 , vertices:indicesConvertor(arr4) });
					var obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:this.startPos.x/ScaleFactor-13 , y:this.startPos.y/ScaleFactor-8 , vertices:indicesConvertor(arr4) });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
				
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-9.6  , y:this.startPos.y/ScaleFactor-6.3 , vertices:indicesConvertor(arr) });
					obj2 = CreateObj({density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:this.startPos.x/ScaleFactor-9.6  , y:this.startPos.y/ScaleFactor-6.3 , vertices:indicesConvertor(arr) });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor-11 , y:this.startPos.y/ScaleFactor-10  , width:0.4,height:0.4 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:this.startPos.x/ScaleFactor-11 , y:this.startPos.y/ScaleFactor-10  , width:0.4,height:0.4 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor-7.4  , y:this.startPos.y/ScaleFactor-4.3  , width:0.4,height:0.4 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:this.startPos.x/ScaleFactor-7.5  , y:this.startPos.y/ScaleFactor-4.3  , width:0.4,height:0.4 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-4.3  , y:this.startPos.y/ScaleFactor-4.8  , vertices:arr3 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:this.startPos.x/ScaleFactor-4.3  , y:this.startPos.y/ScaleFactor-4.8  , vertices:arr3 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor+2.9  , y:this.startPos.y/ScaleFactor-6.2 , vertices:flipArr( indicesConvertor(arr) ,true,false)});
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:this.startPos.x/ScaleFactor+2.9  , y:this.startPos.y/ScaleFactor-6.2 , vertices:flipArr( indicesConvertor(arr) ,true,false)});
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-4.6  , y:this.startPos.y/ScaleFactor-8 , vertices:indicesConvertor(arr)});
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"poly" ,x:this.startPos.x/ScaleFactor-4.6  , y:this.startPos.y/ScaleFactor-8 , vertices:indicesConvertor(arr)});
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor+7  , y:this.startPos.y/ScaleFactor-10 , width:0.4,height:0.4 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:this.startPos.x/ScaleFactor+7  , y:this.startPos.y/ScaleFactor-10 , width:0.4,height:0.4 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor+4  , y:this.startPos.y/ScaleFactor-5 , width:0.4,height:0.4 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:this.startPos.x/ScaleFactor+4 , y:this.startPos.y/ScaleFactor-5 , width:0.4,height:0.4 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
				    obj1 = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor-9  , y:this.startPos.y/ScaleFactor-11.3 , width:0.4,height:0.4 });
					obj2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:this.startPos.x/ScaleFactor-9  , y:this.startPos.y/ScaleFactor-11.3 , width:0.4,height:0.4 });
					createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					
					//Sticks  eecc11
				    CreateObj({name:"Stick_1",density:100,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"poly" ,x:this.startPos.x/ScaleFactor-12.6  , y:this.startPos.y/ScaleFactor-4  , vertices:flipArr(arr2 ,false ,true )});
					CreateObj({maskBits:~(0xFFFF) , color:'rgba(210,180,20,0.4)',type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-12.6  , y:this.startPos.y/ScaleFactor-7.0  , vertices:arr2});

					CreateObj({name:"Stick_2",density:100,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"box" ,x:this.startPos.x/ScaleFactor-7.5  , y:this.startPos.y/ScaleFactor-8.9  , width:2.2,height:0.39 });
					CreateObj({maskBits:~(0xFFFF) ,color:'rgba(210,180,20,0.4)',type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor-7.5  , y:this.startPos.y/ScaleFactor-4.7  , width:2.2,height:0.39 });

					arr2 = [[2,0],[2,0.31],[0.4,0.31],[0,0]];
					CreateObj({name:"Stick_3",density:100,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"poly" ,x:this.startPos.x/ScaleFactor-3.9  , y:this.startPos.y/ScaleFactor-3  , vertices:flipArr(arr2 ,true ,true )});
					CreateObj({maskBits:~(0xFFFF) ,color:'rgba(210,180,20,0.4)',type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor-3.9  , y:this.startPos.y/ScaleFactor-4.5  , vertices:arr2});

					CreateObj({name:"Stick_4",density:100,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"box" ,x:this.startPos.x/ScaleFactor+0  , y:this.startPos.y/ScaleFactor-10 , width:1.7,height:0.39 });
					// CreateObj({maskBits:~(0xFFFF) ,color:'rgba(210,180,20,0.4)',type: "static" , shape:"box" ,x:this.startPos.x/ScaleFactor+0  , y:this.startPos.y/ScaleFactor-10 , width:1.7,height:0.39 });

					CreateObj({name:"Stick_5",density:100,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"poly" ,x:this.startPos.x/ScaleFactor+6.5  , y:this.startPos.y/ScaleFactor-7.9  , vertices:flipArr(indicesConvertor(arr) ,false ,true )});
					CreateObj({maskBits:~(0xFFFF) ,color:'rgba(210,180,20,0.4)',type: "static" , shape:"poly" ,x:this.startPos.x/ScaleFactor+4.5  , y:this.startPos.y/ScaleFactor-7.9  , vertices:flipArr(indicesConvertor(arr) ,false ,true )});

					
					for(var i=0;i<=55;i++)
					{
						createSpike(i*0.5 ,this.startPos.y/ScaleFactor-0.1, "top" );
					}
					
					
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor+4.58 , y:this.startPos.y/ScaleFactor-12.87 , width:2.12 , height:0.3});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor-4.92 , y:this.startPos.y/ScaleFactor-12.87 , width:2.12 , height:0.3});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor-12.42 , y:this.startPos.y/ScaleFactor-12.87 , width:2.12 , height:0.3});

					this.glass_1 = LoopOverObj(Level2_6.Curved_glass , null , this.startPos.x/ScaleFactor+3.5 , this.startPos.y/ScaleFactor-13 ,0.6 , "static");
					this.glass_2 = LoopOverObj(Level2_6.Curved_glass , null , this.startPos.x/ScaleFactor-6 , this.startPos.y/ScaleFactor-13 ,0.6 , "static");
					this.glass_3 = LoopOverObj(Level2_6.Curved_glass , null , this.startPos.x/ScaleFactor-13.5 , this.startPos.y/ScaleFactor-13  ,0.6 , "static");
					
					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:this.startPos.x/ScaleFactor+4.5  , y:this.startPos.y/ScaleFactor-12,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:this.startPos.x/ScaleFactor-5  , y:this.startPos.y/ScaleFactor-12,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:this.startPos.x/ScaleFactor-12.5  , y:this.startPos.y/ScaleFactor-12 ,radius:0.5,restitution:0,friction:0});

			  },
			  canvasDraw: function()
			  {
				    //console.log(this.glass_1);
					if( this.glass_1 != null)
					{
						ctx.drawImage(glassImg, this.glass_1.GetPosition().x*ScaleFactor , this.glass_1.GetPosition().y*ScaleFactor, 107*0.6,105*0.6);
					}

					if( this.glass_2 != null)
					{
						ctx.drawImage(glassImg, this.glass_2.GetPosition().x*ScaleFactor , this.glass_2.GetPosition().y*ScaleFactor, 107*0.6,105*0.6);
					}
	
					if( this.glass_3 != null)
					{
						ctx.drawImage(glassImg, this.glass_3.GetPosition().x*ScaleFactor , this.glass_3.GetPosition().y*ScaleFactor, 107*0.6,105*0.6);
					}
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureA().GetBody().details.name.indexOf("Stick") != -1)
					{
						if(contact.GetFixtureB().GetBody().details.name != "Parent")
						{
								//alert("000");
								contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0,0) );
								// // // // //playSound("Hit_1");
								if(contact.GetFixtureA().GetBody().details.name == "Stick_1")
								{
									//alert("111");
									this.IsStick_1_In = true;
								}
								else
								if(contact.GetFixtureA().GetBody().details.name == "Stick_2")
								{
									//alert("222");
									this.IsStick_2_In = true;
								}
								else
								if(contact.GetFixtureA().GetBody().details.name == "Stick_3")
								{
									//alert("333");
									this.IsStick_3_In = true;
								}
								else
								if(contact.GetFixtureA().GetBody().details.name == "Stick_4")
								{
									//alert("444");
									this.IsStick_4_In = true;
								}
								else
								if(contact.GetFixtureA().GetBody().details.name == "Stick_5")
								{
									//alert("555");
									this.IsStick_5_In = true;
								}
						}
					}
					
					if(contact.GetFixtureA().GetBody().details.name.indexOf("Stick") != -1)
					{
						if(contact.GetFixtureB().GetBody().details.name == "child_1")
						{
							if(this.glass_1)
							{
									destroyBody(this.glass_1 , 100);
									this.glass_1 = null;
									startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
									
									playSound("Glass");
							}
						}
						else
						if(contact.GetFixtureB().GetBody().details.name == "child_2")
						{
							if(this.glass_2)
							{
									destroyBody(this.glass_2 , 100);
									this.glass_2 = null;
									startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
									
									playSound("Glass");
							}
						}
						else
						if(contact.GetFixtureB().GetBody().details.name == "child_3")
						{
							if(this.glass_3)
							{
									destroyBody(this.glass_3 , 100);
									this.glass_3 = null;
									startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
									
									playSound("Glass");
							}
						}
					}
					
					
					if(contact.GetFixtureB().GetBody()  == parentBody )
					{	
						if(contact.GetFixtureA().GetBody() == this.glass_1)
						{
							destroyBody(this.glass_1 , 100);
							this.glass_1 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_2)
						{
							destroyBody(this.glass_2 , 100);
							this.glass_2 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_3)
						{
							destroyBody(this.glass_3 , 100);
							this.glass_3 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
					}
					
					/*if(contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("eqt3") != -1)
					{
						var num = Number(  contact.GetFixtureA().GetBody().details.name.replace("eqt3_","")  );

						world.DestroyJoint(this.arr_Ropes[num]);
					}*/
			  },
			  endCollide:function(contact , impulse)
			  {
					if(contact.GetFixtureA().GetBody().details.name.indexOf("Stick") != -1)
					{
						if(contact.GetFixtureB().GetBody().details.name == "Parent" || contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1)
						{
							if(contact.GetFixtureA().GetBody().details.name == "Stick_1")
							{
								//alert(this.IsStick_1_In);
								if(this.IsStick_1_In)
								{
									
									contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
								}
							}
							else
							if(contact.GetFixtureA().GetBody().details.name == "Stick_2")
							{
								//alert(this.IsStick_2_In);
								if(this.IsStick_2_In)
								{
									
									contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
								}
							}
							else
							if(contact.GetFixtureA().GetBody().details.name == "Stick_3")
							{
								//alert(this.IsStick_3_In);
								if(this.IsStick_3_In)
								{
									
									contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
								}
							}
							else
							if(contact.GetFixtureA().GetBody().details.name == "Stick_4")
							{
								//alert(this.IsStick_4_In);
								if(this.IsStick_4_In)
								{
									
									contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
								}
							}
							else
							if(contact.GetFixtureA().GetBody().details.name == "Stick_5")
							{
								//alert(this.IsStick_5_In);
								if(this.IsStick_5_In)
								{
									
									contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
								}
							}
								
								
							
							//setTimeout(function(){
							var x = contact.GetFixtureA().GetBody().m_linearVelocity.x;
							var y = contact.GetFixtureA().GetBody().m_linearVelocity.y;

							if( Math.abs(x) > Math.abs(y) )
							   y = 0;
							else
							if( Math.abs(y) >= Math.abs(x))
							   x = 0;
								
							//},500)    
							
							//alert(x + "    " + y);
							console.log(contact.GetFixtureA().GetBody());
							contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(x , y) );
							
						}
						
					}	
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_3_1.startLevel();
		
		