var Level_5_5 = {
			timerSpeed:0.038,
			
			Door_1 : null,
			Door_2 : null,
			Door_3 : null,
			Door_4 : null,
			
			Key_1:null,
			Key_2:null,
			Key_3:null,
			
			Rope_1:null,
			Rope_2:null,
			Rope_3:null,
			
			alaga_1:null,
			alaga_2:null,
			alaga_3:null,
			
			timer:0,
			
			block_1:null,
			block_2:null,
			block_3:null,
			
			Key_1_Falled_Correct:false,
			Key_2_Falled_Correct:false,
			Key_3_Falled_Correct:false,
			
			Key_1_Falled_Wrong:false,
			Key_2_Falled_Wrong:false,
			Key_3_Falled_Wrong:false,
			

			Door_1_Block:null,
			Door_2_Block:null,
			Door_3_Block:null,


			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-180, "y":canvasHeight-55};
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
				
				if(this.timer % 70 == 0)
				{
					if(this.timer % 140 == 0)
					{
						if(!this.Key_1_Falled_Wrong && !this.Key_1_Falled_Correct)
							this.block_1 = CreateObj({name:"block_1",color:ORANGE_COLOR,type: "static" , shape:"box" ,x:5.7+4  , y:3.85 , width:2.3 , height:0.4 });
						
						if(!this.Key_2_Falled_Wrong && !this.Key_2_Falled_Correct)
							this.block_2 = CreateObj({name:"block_2",color:ORANGE_COLOR,type: "static" , shape:"box" ,x:10.7+4  , y:3.85 , width:2.3 , height:0.4 });
						
						if(!this.Key_3_Falled_Wrong && !this.Key_3_Falled_Correct)
							this.block_3 = CreateObj({name:"block_3",color:ORANGE_COLOR,type: "static" , shape:"box" ,x:15.7+4  , y:3.85 , width:2.3 , height:0.4 });
					}
					else
					{
						if(this.block_1 && !this.Key_1_Falled_Wrong && !this.Key_1_Falled_Correct)
						{
							//playSound("MouseOver");
							destroyBody(this.block_1 , 10);
						}
						
						if(this.block_2 && !this.Key_2_Falled_Wrong && !this.Key_2_Falled_Correct)
						{
							//playSound("MouseOver");
							destroyBody(this.block_2 , 10);
						}
							
						if(this.block_3 && !this.Key_3_Falled_Wrong && !this.Key_3_Falled_Correct)
						{
							//playSound("MouseOver");
							destroyBody(this.block_3 , 10);
						}	
					}
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				this.timer = 0;
				this.Key_1_Falled_Correct = false;
				this.Key_2_Falled_Correct = false;
				this.Key_3_Falled_Correct = false;
				
				this.Key_1_Falled_Wrong = false;
				this.Key_2_Falled_Wrong = false;
				this.Key_3_Falled_Wrong = false;

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				var obj1;
				
				goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
				CreateFloor(true);

				LoopOverObj(Level3_3.b11 , 'pink',5+4 ,6.5, 1/1.0, "static" , 10,true,0x0000,"place_1");
				LoopOverObj(Level3_3.b11 , 'green',10+4 ,6.5, 1/1.0, "static" , 10,true,0x0000,"place_2");
				LoopOverObj(Level3_3.b11 , '#00aadd',15+4 ,6.5, 1/1.0, "static" , 10,true,0x0000,"place_3");
				//LoopOverObj(Level3_3.b11 , GREY_COLOR,20 ,6.5, 1/1.0, "static" , 10);

				createDiagonalStick({"color":GREY_COLOR,"x":3.0,"y":8.1,"w":2,"h":0.4,"w2":2.5,"h2":1.5});
				createDiagonalStick({"color":GREY_COLOR,"x":-1,"y":5.4,"w":2,"h":0.4,"w2":2.5,"h2":1.5});
				createDiagonalStick({"color":GREY_COLOR,"x":32,"y":9,"w":11,"h":0.4,"w2":17,"h2":3,"isFlip":true});
				createDiagonalStick({"color":GREY_COLOR,"x":24,"y":7,"w":1.5,"h":0.4,"w2":2.0,"h2":1.5,"isFlip":true});
				createDiagonalStick({"color":GREY_COLOR,"x":18,"y":7,"w":1.5,"h":0.4,"w2":2.0,"h2":1.5,"isFlip":true});
				
				
				
				var KeyImg = new Image();
				KeyImg.src = "images/key_box.png";
				
				
				
				this.alaga_1 = CreateObj({type: "static" , shape:"circle" ,x:5.7+4  , y:-1 , radius:0.3 });
				this.Key_1 = CreateObj({image:KeyImg,name:"Key_1",density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:5.7+4  , y:1 , width:1.290 , height:1.290 });
				this.Rope_1 = createRevoluteJoint(this.alaga_1 , this.Key_1 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				this.alaga_2 = CreateObj({type: "static" , shape:"circle" ,x:10.7+4  , y:-1 , radius:0.3 });
				this.Key_2 = CreateObj({image:KeyImg,name:"Key_2",density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:10.7+4  , y:1 , width:1.290 , height:1.290 });
				this.Rope_2 = createRevoluteJoint(this.alaga_2 , this.Key_2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					
				this.alaga_3 = CreateObj({type: "static" , shape:"circle" ,x:15.7+4  , y:-1 , radius:0.3 });
				this.Key_3 = CreateObj({image:KeyImg,name:"Key_3",density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:15.7+4  , y:1 , width:1.290 , height:1.290 });
				this.Rope_3 = createRevoluteJoint(this.alaga_3 , this.Key_3 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					
				CreateObj({color:null, type: "static" , shape:"box" ,x:3.5  , y:8.2 , width:0.3,height:0.3 });
				
				this.Door_1_Block = CreateObj({color:null, type: "static" , shape:"box" ,x:3.3  , y:7 , width:0.3,height:0.3 });
				this.Door_2_Block = CreateObj({color:null, type: "static" , shape:"box" ,x:20.5  , y:8.5 , width:0.3,height:0.3 });
				this.Door_3_Block = CreateObj({color:null, type: "static" , shape:"box" ,x:14.5  , y:8.5 , width:0.3,height:0.3 });

				
				this.Door_1 = CreateObj({color:'pink',density:70,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:2.3  , y:4.7,  vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
				obj1 = CreateObj({color:GREY_COLOR , type: "static" , shape:"circle" , x:2.3 , y:7.0 , radius:0.2 });
				createRevoluteJoint(this.Door_1 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
				
				this.Door_2 = CreateObj({color:'green',density:70,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:21.5  , y:0.7,  vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
				obj1 = CreateObj({color:GREY_COLOR , type: "static" , shape:"circle" , x:21.5 , y:8.5 , radius:0.2 });
				createRevoluteJoint(this.Door_2 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
				
				this.Door_3 = CreateObj({color:'#00aadd',density:70,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:15.5  , y:4.7,  vertices:[[0,0],[0,-0.2],[1.8,-0.2],[1.8,0.2],[0,0.2]]});
				obj1 = CreateObj({color:GREY_COLOR , type: "static" , shape:"circle" , x:15.5 , y:8.5 , radius:0.2 });
				createRevoluteJoint(this.Door_3 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
									
								
				var myImage = new Image();
				myImage.src = 'images/Kid_1.png';
				child_1 = CreateObj({name:'child_1',maskBits:0xFFFF & ~0x0040 ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor-12 , y : 6,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_2.png';
				child_2 = CreateObj({name:'child_2',maskBits:0xFFFF & ~0x0040 ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+8.6  , y : 7,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_3.png';
				child_3 = CreateObj({name:'child_3',maskBits:0xFFFF & ~0x0040 ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor+3.5  , y : 7,radius:0.5,restitution:0,friction:0});
	
			  },
			  startCollide:function(contact)
			  {
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("Key") !=-1)  )
					  {
						  playSound("Hit_Theqel");
						  switch(contact.GetFixtureA().GetBody().details.name)
						  {
							  case "Key_1":
							  destroyBody(this.alaga_1 , 50);
						//world.DestroyJoint(this.alaga_1);
							  break;
							  case "Key_2":
							  destroyBody(this.alaga_2 , 50);
						//world.DestroyJoint(this.alaga_2);
							  break;
							  case "Key_3":
							  destroyBody(this.alaga_3 , 50);
						//world.DestroyJoint(this.alaga_3);
							  break;
						  }
					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name.indexOf("Key") != -1 && contact.GetFixtureA().GetBody().details.name.indexOf("block") != -1)  )
					  {
						  playSound("Hit_Theqel");
						  switch(contact.GetFixtureA().GetBody().details.name)
						  {
							  case "block_1":
									this.Key_1_Falled_Wrong = true;
							  break;
							  case "block_2":
							 		this.Key_2_Falled_Wrong = true;
							  break;
							  case "block_3":
							  		this.Key_3_Falled_Wrong = true;
							  break;
						  }
					  }
					  else
					  if((contact.GetFixtureA().GetBody().details.name.indexOf("Key") != -1 && contact.GetFixtureB().GetBody().details.name.indexOf("place") != -1)  )
					  {
						    
						  switch(contact.GetFixtureB().GetBody().details.name)
						  {
							  case "place_1":
									if(!this.Key_1_Falled_Correct)
									{
										this.Key_1_Falled_Correct = true;
										destroyBody(this.Door_1_Block , 400);
										
										playSound("MouseOver");
	
									}
									
									
							  break;
							  case "place_2":
							  
									if(!this.Key_2_Falled_Correct)
									{
										this.Key_2_Falled_Correct = true;
										destroyBody(this.Door_2_Block , 400);
										
										playSound("MouseOver");	
									}
									
							  break;
							  case "place_3":
							  
									if(!this.Key_3_Falled_Correct)
									{
										this.Key_3_Falled_Correct = true;
										destroyBody(this.Door_3_Block , 400);
										playSound("MouseOver");
									}
							  break;
						  }
					  }
					  
					  

			  },
			  
			  checkIfWin: function()
			  {
					
			  },
			  canvasDrawForground: function()
			  {
				 drawMe7bas(this.Door_1.GetPosition());
				 
				 drawMe7bas(this.Door_2.GetPosition());
				 
				 drawMe7bas(this.Door_3.GetPosition());


			  }
		}
		Level_5_5.startLevel();
		
		