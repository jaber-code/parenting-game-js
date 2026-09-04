var Level_4_11 = {
			timerSpeed:0.01,
			
			arr_Circles:[],
			arr_Ropes:[null],
			arr_Kotal:[null],
			
			arr_Speeds:[1.4,1.5,1.55,1.6,1.7,1.3],
			
			BedImg:null,
			BasePos:null,
			
			BGImage:null,
			H_IMAGE_OP_ZERO:null,
			
			
			finishLevel: false,
			
			circle_1_in: false,
			circle_2_in: false,
			circle_3_in: false,
			circle_4_in: false,
			circle_5_in: false,
			
			endTimerId:0,
			
			heartSize:0.4,
			heartSizeInc:0.03,
			
			intId:0,
			
			fullHeart:false,

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
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				clearTimeout(Level_4_11.endTimerId);
				clearInterval(Level_4_11.intId);
				this.intId = 0;
				
				this.timer = 0;
				
				for(var i=0;i < this.arr_Speeds.length ; i++)
				{
					this.arr_Speeds[i] = Math.abs(this.arr_Speeds[i]);					
				}
				
				this.arr_Ropes = [null];
				this.arr_Kotal = [null];
				this.arr_Circles = [];
				
				this.circle_1_in = false;
				this.circle_2_in = false;
				this.circle_3_in = false;
				this.circle_4_in = false;
				this.circle_5_in = false;
				
				this.fullHeart = false;
				this.finishLevel = false;

				numOfBalls = 5;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  SelectedParentImg.src = 'images/Player_Haert.png';

				  this.BedImg = new Image();
				  this.BedImg.src = "images/Lovers_Haert_Parts.png";
				  
				  
				  this.H_IMAGE_OP_ZERO = new Image();
				  this.H_IMAGE_OP_ZERO.src = "images/Lovers_Haertop0.png";
				  
				  
				  
				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				  
				  
				  this.BGImage = new Image();
				  this.BGImage.src = 'images/Sky_flowting_Parantes.png';
				  
				  var obj1; 
				  var obj2; 
				
				
				  /*CreateObj({categoryBits:0x0800,color:null , type:"static" , shape:"box" , x:MainPosX , y:MainPosY-0.5, width:1.1 , height:3 });
				  
				  CreateObj({categoryBits:0x0800,color:null , type:"static" , shape:"box" , x:MainPosX-1.5, y:MainPosY-3.4, width:1.3 , height:0.5 });
				  CreateObj({categoryBits:0x0800,color:null , type:"static" , shape:"box" , x:MainPosX+1.5, y:MainPosY-3.4, width:1.3 , height:0.5 });

				  
				  CreateObj({categoryBits:0x0800,color:null , type:"static" , shape:"box" , x:MainPosX+0.9, y:MainPosY-2.9, width:0.3 , height:0.3 });
				  CreateObj({categoryBits:0x0800,color:null , type:"static" , shape:"box" , x:MainPosX-0.9, y:MainPosY-2.9, width:0.3 , height:0.3 });*/

				  LoopOverObj( LevelB_8.H_1 , null , MainPosX -2, MainPosY-0.7 , 1 , "static"  );
				  LoopOverObj( LevelB_8.H_2 , null , MainPosX -3, MainPosY-3.8 , 1 , "static"  );

				  LoopOverObj( LevelB_8.H_3 , null , MainPosX -3.1, MainPosY-2.0 , 1 , "static"  );

				  LoopOverObj( LevelB_8.H_4 , null , MainPosX +0.4, MainPosY-3.8 , 1 , "static"  );
				  LoopOverObj( LevelB_8.H_5 , null , MainPosX +0.6, MainPosY-2.0 , 1 , "static"  );

				  
				  CreateObj({categoryBits:0x0800, color:null,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-1  , y:0 , vertices:[[0,1],[30,1]] });

				  CreateObj({categoryBits:0x0800,color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX+1.4, y:MainPosY-1.6 , vertices: [ [0 , 0],[8.0 , -1.5],[8.0, -0.95]  ]});
				  CreateObj({categoryBits:0x0800,color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX-1.4, y:MainPosY-1.6 , vertices: flipArr( [[0 , 0],[8.0 , -1.5],[8.0, -0.95]] ,true , false) });

				  CreateObj({categoryBits:0x0800,color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX+1.4, y:MainPosY+0.0 , vertices: [ [0 , 0],[10.5 , -1.5],[10.5, -0.95]]});
				  CreateObj({categoryBits:0x0800,color:GREY_COLOR,type: "static" , shape:"poly" ,x:MainPosX-1.4, y:MainPosY+0.0 , vertices: flipArr( [[0 , 0],[10.5 , -1.5],[10.5, -0.95]] ,true , false) });
			
				  CreateObj({categoryBits:0x0800,name:"place_1",color: null,type: "static" , shape:"circle" ,x:MainPosX+0.9  , y:MainPosY-0.4 , radius:0.07 });
				  CreateObj({categoryBits:0x0800,name:"place_2",color: null,type: "static" , shape:"circle" ,x:MainPosX-0.9  , y:MainPosY-0.4 , radius:0.07 });
				  CreateObj({categoryBits:0x0800,name:"place_3",color: null,type: "static" , shape:"circle" ,x:MainPosX+1  , y:MainPosY-1.85, radius:0.07 });
				  CreateObj({categoryBits:0x0800,name:"place_4",color: null,type: "static" , shape:"circle" ,x:MainPosX-1  , y:MainPosY-1.85, radius:0.07 });
				  CreateObj({categoryBits:0x0800,name:"place_5",color: null,type: "static" , shape:"circle" ,x:MainPosX-0  , y:MainPosY+0.6 , radius:0.07 });


				  CreateObj({categoryBits:0x0800, name:"Border",color:'#999999',type:"static" , shape:"box" , x:(10) , y:17 , width:50 , height:1.4});

							
				  var img = new Image();
				  img.src = "images/B8_1.png";			
								
				  obj1 = CreateObj({color:null,categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0200f & ~0x0020 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:0  , y:0 , radius:1 });
				  obj2 = CreateObj({image:img,name:"circle_1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0200f & ~0x0020 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:0  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[1] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  img = new Image();
				  img.src = "images/B8_2.png";
				  
				  obj1 = CreateObj({color:null,categoryBits:0x0200f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:9  , y:0 , radius:1 });
				  obj2 = CreateObj({image:img,name:"circle_2",categoryBits:0x0200f,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0002 & ~0x0020 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:9  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[2] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  img = new Image();
				  img.src = "images/B8_3.png";
				  
				  obj1 = CreateObj({color:null,categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x0200f & ~0x0020 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:6  , y:0 , radius:1 });
				  obj2 = CreateObj({image:img,name:"circle_3",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008 & ~0x0200f & ~0x0020 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:6  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[3] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				  img = new Image();
				  img.src = "images/B8_4.png";
				  
				  obj1 = CreateObj({color:null,categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x0200f & ~0x0020 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:3  , y:0 , radius:1 });
				  obj2 = CreateObj({image:img,name:"circle_4",categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002 & ~0x0200f & ~0x0020 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:3  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[4] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
				
				  img = new Image();
				  img.src = "images/B8_5.png";
				  
				  obj1 = CreateObj({color:null,categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0200f & ~0x0002 ),density:10,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:15  , y:0 , radius:1 });
				  obj2 = CreateObj({image:img,name:"circle_5",categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008 & ~0x0200f & ~0x0002 ),density:10,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:15  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  obj1.SetLinearVelocity(new b2Vec2(4,0));
				  this.arr_Ropes[5] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				

				  //CreateObj( { color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+5.5 , width:7 , height:2.0 } );
				  var temp = CreateObj({ color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+7.8 , width:10 , height:4.0 });
				  this.BasePos = temp.GetPosition();
				  
				  
				  this.intId = setInterval(Level_4_11.checkIfWin , 4000);
			  },
			  startCollide:function(contact)
			  {
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("circle") !=-1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("circle_",""));
							destroyBody(this.arr_Circles[num-1],50);
					  }
					  else
					  if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("circle") !=-1) )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("circle_",""));
							destroyBody(this.arr_Circles[num-1],50);
					  }
					  
					  
					  if((contact.GetFixtureA().GetBody().details.name.indexOf("circle") !=-1 && contact.GetFixtureB().GetBody().details.name.indexOf("place") != -1)  )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("place_",""));

							destroyBody(contact.GetFixtureB().GetBody(),0);
							//alert(num);

							switch(num)
							{
								case 1:
									this.circle_1_in = true;									
								break;
								case 2:
									this.circle_2_in = true;
								break;
								case 3:
									this.circle_3_in = true;
								break;
								case 4:
									this.circle_4_in = true;
								break;
								case 5:
									this.circle_5_in = true;
								break;
							}
							
							
							
							this.checkIfEnd();
					  }
			  },
			  
			  checkIfWin: function()
			  {
				  //alert("checkIfWin");
				  if(Level_4_11.finishLevel)
					  return;
				  
				  
				  
				  var shouldEnd = true;
				  
				  
				  
				  if(Level_4_11.arr_Kotal)
				  {
					  for(var i=1 ; i<Level_4_11.arr_Kotal.length ; i++)
					  {
						  if(Math.abs( Level_4_11.arr_Kotal[i].m_linearVelocity.x ) > 0.1 || Math.abs( Level_4_11.arr_Kotal[i].m_linearVelocity.y > 0.1 ) )
						  {
							  //alert(Level_4_11.arr_Kotal[i].m_linearVelocity.x);
							  shouldEnd = false
						  }
						  else
						  console.log(Level_4_11.arr_Kotal[i].m_linearVelocity.x);
					  }
				  }
				  
				  if(shouldEnd)
				  {
					 // clearTimeout(Level_4_11.endTimerId);
					  
					  
					  clearInterval(Level_4_11.intId);
					  this.intId = 0;
					  
					  
					  endLevel();
					  
					  
				  }
				  
			  },
			  checkIfEnd: function()
			  {
					if(this.circle_1_in && this.circle_2_in && this.circle_3_in && this.circle_4_in && this.circle_5_in)
					{
						this.BedImg.src = "images/Lovers_Haert.png";

						this.finishLevel = true;
						this.fullHeart = true;	
						
						playSound("EndBonus");
						
						this.endTimerId = setTimeout(function(){
							
							if(Level_4_11.fullHeart)
							{
								numOfChildsEnter = 3;
								endLevel();
							}
						},2000)
					}
					else
					{
						
						
					}
			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes

			  },
			  canvasDrawForground: function()
			  {
				 /* if( this.fullHeart )
				  {
					  	ctx.drawImage(this.BedImg, this.BasePos.x * ScaleFactor-38, this.BasePos.y * ScaleFactor-150, 181*0.4,150*0.4);
				  }*/
				  
				  
				  ctx.drawImage(this.H_IMAGE_OP_ZERO, this.BasePos.x * ScaleFactor-90, this.BasePos.y * ScaleFactor-341, 181*1.0,150*1.0);

				  ctx.drawImage(MomImg, this.BasePos.x * ScaleFactor - 45, this.BasePos.y * ScaleFactor - 96, 0.6*60.0 , 0.6*60.0);
				  ctx.drawImage(DadImg, this.BasePos.x * ScaleFactor + 15, this.BasePos.y * ScaleFactor - 96, 0.6*60.0 , 0.6*60.0);
				  
				  if(this.finishLevel)
					   this.winLevel();
				  // else
				  ctx.drawImage(this.BedImg, this.BasePos.x * ScaleFactor-90, this.BasePos.y * ScaleFactor-341, 181*1.0,150*1.0);

			  },
			  winLevel: function()
			  {
					 if(this.heartSize > 1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize < 0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc;     
					 
					 ctx.save(); 
						  ctx.translate(this.BasePos.x * ScaleFactor-13+10, this.BasePos.y * ScaleFactor-120+10);
						  ctx.scale( this.heartSize, this.heartSize);

						  ctx.translate(-(this.BasePos.x * ScaleFactor-13+10), -(this.BasePos.y * ScaleFactor-120+10));
						
						  ctx.drawImage(hartImg, this.BasePos.x * ScaleFactor-13, this.BasePos.y * ScaleFactor-120, 0.59*60 , 0.59*60);
					 ctx.restore(); 
					 
					 
					/* ctx.save(); 
						  ctx.translate(this.BasePos.x * ScaleFactor-90+50, this.BasePos.y * ScaleFactor-341+50);
						  ctx.scale( this.heartSize*1.4, this.heartSize*1.4);

						  ctx.translate(-(this.BasePos.x * ScaleFactor-90+50), -(this.BasePos.y * ScaleFactor-341+50));
						
						  ctx.drawImage(this.BedImg, this.BasePos.x * ScaleFactor-90, this.BasePos.y * ScaleFactor-341, 181*1.0,150*1.0);
					 ctx.restore(); */
			  }
		}
		Level_4_11.startLevel();