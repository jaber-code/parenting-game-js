var Level_4_9 = {
			timerSpeed:0.04,

			timer:0,
			wheel_1 : null,
			wheel_2 : null,
			wheel_3 : null,
			
			cage_1 : null,
			cage_2 : null,
			cage_3 : null,
			
			rope_1 : null,
			rope_2 : null,
			rope_3 : null,
			
			cart_1_moved:false,
			cart_2_moved:false,
			cart_3_moved:false,
			
			speed_1:5,
			speed_2:5,
			speed_3:5,
			
			img_1:null,
			img_3:null,
			img_2:null,
			
			arr_childs_FirstPos_Y:[0,0,0,0],

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+0, "y":canvasHeight-57};
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
				
					if(  this.timer % 110 == 0 )
					{
						if(!this.cart_1_moved)
						{
							this.speed_1 *= -1;
							this.wheel_1.SetLinearVelocity(new b2Vec2(this.speed_1,0.0));	
						}
					}
					
					if(  this.timer % 120 == 0 )
					{
						if(!this.cart_2_moved)
						{
							this.speed_2 *= -1;
							this.wheel_2.SetLinearVelocity(new b2Vec2(this.speed_2,0.0));
						}						
					}
					
					if( this.timer % 130 == 0 )
					{
						if(!this.cart_3_moved)
						{
							this.speed_3 *= -1;
							this.wheel_3.SetLinearVelocity(new b2Vec2(this.speed_3,0.0));
						}						
					}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.cart_1_moved = false;
				this.cart_2_moved = false;
				this.cart_3_moved = false;
				
				this.timer = 0;

				numOfBalls = 3;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {  
				    this.img_1 = new Image();
				    this.img_1.src = "images/Kid_1_IconCol.png";
					
				    this.img_2 = new Image();
				    this.img_2.src = "images/Kid_2_IconCol.png";
					
					this.img_3 = new Image();
				    this.img_3.src = "images/Kid_3_IconCol.png";
					
					 
					var MainPosX = (canvasWidth/2.0)/ScaleFactor;
					var MainPosY = (canvasHeight/2.0)/ScaleFactor;
					
					CreateFloor(false);
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);


					drawCirclePath(HomePos.x/ScaleFactor-7.5 ,HomePos.y/ScaleFactor-10.0 ,3 ,1.0 ,20,6.66,GREY_COLOR,"",2.5);
					drawCirclePath(HomePos.x/ScaleFactor+7.5 ,HomePos.y/ScaleFactor-13.0 ,3 ,1.0 ,20,6.66,GREY_COLOR,"",2.5);
					drawCirclePath(HomePos.x/ScaleFactor+7.5 ,HomePos.y/ScaleFactor-5.7 ,3 ,1.0 ,20,6.66,GREY_COLOR,"",2.5);


					CreateObj({categoryBits:0x0002 ,maskBits:(0xFFFF & ~0x0020),color:GREY_COLOR,lineThickness:2.5,isStroke:true,type:"static" , shape:"edge" , vertices: [ [HomePos.x/ScaleFactor-4.8 , HomePos.y/ScaleFactor-9.55]  , [HomePos.x/ScaleFactor-1 , HomePos.y/ScaleFactor-5] ]});
					CreateObj({categoryBits:0x0002 ,maskBits:(0xFFFF & ~0x0020),color:GREY_COLOR,lineThickness:2.5,isStroke:true,type:"static" , shape:"edge" , vertices: [ [HomePos.x/ScaleFactor+4.7 ,HomePos.y/ScaleFactor-12.7] , [HomePos.x/ScaleFactor+1 ,HomePos.y/ScaleFactor-6.5] ]});
					CreateObj({categoryBits:0x0002 ,maskBits:(0xFFFF & ~0x0020),color:GREY_COLOR,lineThickness:2.5,isStroke:true,type:"static" , shape:"edge" , vertices: [ [HomePos.x/ScaleFactor+4.7 , HomePos.y/ScaleFactor-5.4]  , [HomePos.x/ScaleFactor+2 ,HomePos.y/ScaleFactor-2.7] ]});

					
					this.wheel_1 = CreateObj({name:"wheel_1",categoryBits:0x0020,density:60,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:7 , y:5.6 , radius:0.5});
					this.cage_1 = this.createCage(6,5.6,true,25 ,0x0020 ,(0xFFFF & ~0x0002)  , true);
					this.rope_1 = createRevoluteJoint(this.wheel_1 , this.cage_1 , new b2Vec2(0, 4.5)  , new b2Vec2(0, 0) , false,0,0,null);
					

					this.wheel_2 = CreateObj({name:"wheel_2",categoryBits:0x0020,maskBits:(0xFFFF),density:60,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:20 , y:2.1 , radius:0.5});
					this.cage_2 = this.createCage(20,2.1,false,25 ,0x0020 ,(0xFFFF & ~0x0002)  , true);
					this.rope_2 = createRevoluteJoint(this.wheel_2 , this.cage_2 , new b2Vec2(0, 4.5)  , new b2Vec2(0, 0) , false,0,0,null);
					

					this.wheel_3 = CreateObj({name:"wheel_3",categoryBits:0x0020,maskBits:(0xFFFF),density:60,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:20 , y:9.4, radius:0.5});
					this.cage_3 = this.createCage(20,9.4,false,25 ,0x0020 ,(0xFFFF & ~0x0002)  , true);
					this.rope_3 = createRevoluteJoint(this.wheel_3 , this.cage_3 , new b2Vec2(0, 4.5)  , new b2Vec2(0, 0) , false,0,0,null);
					
					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 7.0, y: 5.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 20, y: 2.2,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:null,density:10,type:"dynamic" , shape:"circle"  , x : 20,  y: 9.8,radius:0.5,restitution:0,friction:0});	
					
					setTimeout(function(){
						
						Level_4_9.arr_childs_FirstPos_Y[1] = child_1.GetPosition().y;
						Level_4_9.arr_childs_FirstPos_Y[2] = child_2.GetPosition().y;
						Level_4_9.arr_childs_FirstPos_Y[3] = child_3.GetPosition().y;
							
					},1500)
			  },
			  startCollide:function(contact)
			  {
				  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name == "child_1") )
				  {
					    this.cart_1_moved = true;
						this.wheel_1.SetLinearVelocity(new b2Vec2(7,0.0));	
				  }
				  else
				  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name == "child_2") )
				  {
					    this.cart_2_moved = true;
						this.wheel_2.SetLinearVelocity(new b2Vec2(-7,0.0));	
				  }
				  else
				  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name == "child_3") )
				  {
					  	this.cart_3_moved = true;
						this.wheel_3.SetLinearVelocity(new b2Vec2(-7,0.0));	
				  }
				  
				  
				  if( (contact.GetFixtureB().GetBody().details.name == "wheel_1" && contact.GetFixtureA().GetBody().details.name == "Goal") )
				  {
					  	destroyBody(contact.GetFixtureB().GetBody() , 100);
						destroyBody(this.cage_1 , 100);
				  }
				  else
				  if( (contact.GetFixtureB().GetBody().details.name == "wheel_2" && contact.GetFixtureA().GetBody().details.name == "Goal") )
				  {
					  	destroyBody(contact.GetFixtureB().GetBody() , 100);
						destroyBody(this.cage_2 , 100);
				  }
				  else
				  if( (contact.GetFixtureB().GetBody().details.name == "wheel_3" && contact.GetFixtureA().GetBody().details.name == "Goal") )
				  {
					  	destroyBody(contact.GetFixtureB().GetBody() , 100);
						destroyBody(this.cage_3 , 100);
				  }
					  

			  },
			  canvasDrawForground: function()
			  {
					if(this.wheel_1 && child_1)
						ctx.drawImage(this.img_1, this.wheel_1.GetPosition().x*ScaleFactor-70,this.wheel_1.GetPosition().y*ScaleFactor+50 , 117*0.5,118*0.5);
					
					if(this.wheel_2 && child_2)
						ctx.drawImage(this.img_2, this.wheel_2.GetPosition().x*ScaleFactor+20,this.wheel_2.GetPosition().y*ScaleFactor+50 , 117*0.5,118*0.5);
					
					if(this.wheel_3 && child_3)
						ctx.drawImage(this.img_3, this.wheel_3.GetPosition().x*ScaleFactor+20,this.wheel_3.GetPosition().y*ScaleFactor+50 , 117*0.5,118*0.5);

			  },
			  canvasDraw: function()   
			  {
				
			  },
			  createCage:function(xPos,yPos,flipped , din, cBits,MaskBs)
			  {
					if(!flipped)
					{
							var arr = [-33, -5, 33, -5, 33, 5, -33, 5];
							var shape1 = {isStroke:true,density:din,type:"dynamic" , shape:"poly" , vertices: displaceArr( indicesConvertor(arr),0,0)};
							
							arr = [-5.5, 32, -5.5, -32, 5.5, -32, 5.5, 32];
							var shape2 = {isStroke:true,density:din,type:"dynamic" , shape:"poly" , vertices: displaceArr( indicesConvertor(arr),-1.2,-0.9)};
							
							arr = [-5.5, 17.5, -5.5, -17.5, 5.5, -17.5, 5.5, 17.5];
							var shape3 = {isStroke:true,density:din,type:"dynamic" , shape:"poly" , vertices: displaceArr( indicesConvertor(arr),1.2,-0.42)};
							
							arr = [-32.5, 18, 16, -33, 16, -17, -32.5, 33];
							var shape4 = {isStroke:true,density:din,type:"dynamic" , shape:"poly" , vertices: displaceArr( indicesConvertor(arr),-0.3,-2.6)};
							
							//var shape4 = {isStroke:true,density:200,fixedAngle:true ,type:"kin" , shape:"poly" , vertices: displaceArr( [[0,0],[0.4,0.4],[0,0.4]],6,-2.0)};
							return  CreateObj({color:"#777777",categoryBits:cBits,maskBits:MaskBs,isStroke:true,density:din,fixedAngle:true ,type:"kin" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3,shape4]});
					}
					else
					{
							var arr = [-33, -5, 33, -5, 33, 5, -33, 5];
							var shape1 = {color:"red",isStroke:true,density:din,fixedAngle:false ,type:"dynamic" , shape:"poly" , vertices: flipArr(displaceArr( indicesConvertor(arr),0,0),true,false )};
							
							arr = [-5.5, 32, -5.5, -32, 5.5, -32, 5.5, 32];
							var shape2 = {color:"red",isStroke:true,density:din,fixedAngle:false ,type:"dynamic" , shape:"poly" , vertices: flipArr(displaceArr( indicesConvertor(arr),-1.2,-0.9),true,false )};
							
							arr = [-5.5, 17.5, -5.5, -17.5, 5.5, -17.5, 5.5, 17.5];
							var shape3 = {color:"red",isStroke:true,density:din,fixedAngle:false ,type:"dynamic" , shape:"poly" , vertices: flipArr(displaceArr( indicesConvertor(arr),1.2,-0.42),true,false )};
							
							arr = [-32.5, 18, 16, -33, 16, -17, -32.5, 33];
							var shape4 = {color:"red",isStroke:true,density:din,fixedAngle:false ,type:"dynamic" , shape:"poly" , vertices: flipArr(displaceArr( indicesConvertor(arr),-0.3,-2.6),true,false )};
							
							//var shape4 = {isStroke:true,density:200,fixedAngle:true ,type:"kin" , shape:"poly" , vertices: displaceArr( [[0,0],[0.4,0.4],[0,0.4]],6,-2.0)};
							return  CreateObj({color:"#777777",categoryBits:cBits,maskBits:MaskBs,isStroke:true,density:din,fixedAngle:true ,type:"kin" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3,shape4]});
					}
			  },
			  checkIfWin: function()
			  {
					if(numOfBalls == 0)
				    {
						
					    var Is_1_Imp = false;
						var Is_2_Imp = false;
						var Is_3_Imp = false;
						
						if( child_1 )
						{
							if(!this.cart_1_moved)
								Is_1_Imp = true;
							else 
								if(child_1.GetPosition().y < this.arr_childs_FirstPos_Y[1] + 0.2)
								{
									Is_1_Imp = true;	
								}
								
								//alert(child_1.GetPosition().y +"     "+ this.arr_childs_FirstPos_Y[1]);
						}
						else
							Is_1_Imp = true;
						
						if( child_2 )
						{
							if(!this.cart_2_moved)
								Is_2_Imp = true;
							else 
								if(child_2.GetPosition().y <this.arr_childs_FirstPos_Y[2]+0.2)
								{
									Is_2_Imp = true;
								}
								
								//alert(child_2.GetPosition().y +"     "+ this.arr_childs_FirstPos_Y[2]);
						}
						else
							Is_2_Imp = true;
						
						if( child_3 )
						{
							if(!this.cart_3_moved)
								Is_3_Imp = true;
							else 
								if(child_3.GetPosition().y <this.arr_childs_FirstPos_Y[3]+0.2)
								{
									Is_3_Imp = true;	
								}
								
								//alert(child_3.GetPosition().y +"     "+ this.arr_childs_FirstPos_Y[3]);
						}
						else
							Is_3_Imp = true;
						
					//	alert(Is_1_Imp + "    " +Is_2_Imp+ "    " +Is_3_Imp);
						
						if(Is_1_Imp && Is_2_Imp && Is_3_Imp)
							endLevel();
				    }
			  }
		}
		Level_4_9.startLevel();
		
		