var Level_2_9 = {
			timerSpeed:0.04,

			rope_1 : null,
			rope_2 : null,
			rope_3 : null,
			  
			num_1 : 3.75,
			num_2 : 4,
			num_3 : 3.5,

			wheel_1 : null,
			wheel_2 : null,
			wheel_3 : null,
			
			cage_1 : null,
			cage_2 : null,
			cage_3 : null,
			
			
			is_Rope_1_Broken:false,
			is_Rope_2_Broken:false,
			is_Rope_3_Broken:false,
			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-57};
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
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.is_Rope_1_Broken = false;
				this.is_Rope_2_Broken = false;
				this.is_Rope_3_Broken = false;
				
				this.num_1 = 3.75,
				this.num_2 = 4,
				this.num_3 = 3.5,

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			handleGameLogic:function()
			{
					if(this.wheel_1.GetPosition().x > canvasWidth/ScaleFactor)
						this.num_1 = -1*Math.abs(this.num_1);
					else
					if(this.wheel_1.GetPosition().x < 0)
						this.num_1 = Math.abs(this.num_1);
					
					if(Math.abs(this.wheel_1.m_linearVelocity.x) < 3.5)
						this.wheel_1.SetLinearVelocity(new b2Vec2(this.num_1,0.0));
					
					
					if(this.wheel_2.GetPosition().x > canvasWidth/ScaleFactor)
						this.num_2 = -1*Math.abs(this.num_2);
					else
					if(this.wheel_2.GetPosition().x < 0)
						this.num_2 = Math.abs(this.num_2);
					
					if(Math.abs(this.wheel_2.m_linearVelocity.x) < 3.5)
						this.wheel_2.SetLinearVelocity(new b2Vec2(this.num_2,0.0));
					
					
					if(this.wheel_3.GetPosition().x > canvasWidth/ScaleFactor)
						this.num_3 = -1*Math.abs(this.num_3);
					else
					if(this.wheel_3.GetPosition().x < 0)
						this.num_3 = Math.abs(this.num_3);
					
					if(Math.abs(this.wheel_3.m_linearVelocity.x) < 3.5)
						this.wheel_3.SetLinearVelocity(new b2Vec2(this.num_3,0.0));
			},
			
			  startStage:function()
			  {
					goal = CreateObj({categoryBits:0x0800,name:"Goal",density:10,color:'rgba(0,0,0,0)',fixedAngle:false ,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor , y:HomePos.y/ScaleFactor , vertices:  [[-1.6,-1.0],[0,-3.5],[1.6,-1.0] ,[1.6,1],[-1.6,1]] });
					CreateObj({categoryBits:0x0800,density:10,color:'#777777',fixedAngle:true ,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor , y:HomePos.y/ScaleFactor+2.05 , width:4 , height:3});

					//CreateFloor();
					drawCirclePath(HomePos.x/ScaleFactor-0,HomePos.y/ScaleFactor-24 ,25 ,12 ,60, 22, "#777777");
					
					this.wheel_1 = CreateObj({name:"wheel_1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0008),density:25,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor-14 , y:HomePos.y/ScaleFactor-14 , radius:1.0});
					this.cage_1 = this.createCage(HomePos.x/ScaleFactor-14,HomePos.y/ScaleFactor-14,false,25 ,0x0002 ,(0xFFFF & ~0x0004 & ~0x0008 & ~0x0001 & ~0x0010 &~0x0800)  , true);
					this.rope_1 = createRevoluteJoint(this.wheel_1 , this.cage_1 , new b2Vec2(0, 6)  , new b2Vec2(0, 0) , false,0,0,null);
					
					this.wheel_2 = CreateObj({name:"wheel_2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0008),density:25,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor-2 , y:HomePos.y/ScaleFactor-11.1 , radius:1.0});
					this.cage_2 = this.createCage(HomePos.x/ScaleFactor-2,HomePos.y/ScaleFactor-11.1,false,25 ,0x0004 ,(0xFFFF & ~0x0002 & ~0x0008 & ~0x0020 & ~0x0010 &~0x0800)  , true);
					this.rope_2 = createRevoluteJoint(this.wheel_2 , this.cage_2 , new b2Vec2(0, 6)  , new b2Vec2(0, 0), false,0,0,null);
					
					this.wheel_3 = CreateObj({name:"wheel_3",categoryBits:0x0008,maskBits:(0xFFFF & ~0x0004 & ~0x0002),density:25,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+12 , y:HomePos.y/ScaleFactor-13 , radius:1.0});
					this.cage_3 = this.createCage(HomePos.x/ScaleFactor+12,HomePos.y/ScaleFactor-13,false,25 ,0x0008 ,(0xFFFF & ~0x0004 & ~0x0002 & ~0x0020 & ~0x0001 &~0x0800)  , true);
					this.rope_3 = createRevoluteJoint(this.wheel_3 , this.cage_3 , new b2Vec2(0, 6)  , new b2Vec2(0, 0), false,0,0,null);

					//window["wheel_"+1].SetLinearVelocity(new b2Vec2(window["num_"+1],5.5));
					//window["wheel_"+2].SetLinearVelocity(new b2Vec2(window["num_"+2],0.0));
					//window["wheel_"+3].SetLinearVelocity(new b2Vec2(window["num_"+3],0.0));
					// // // CreateObj({color:"#777777",lineThickness:4,isStroke:true,density:0,type:"static" ,restitution:0,friction:0, shape:"edge",x:0,y:6 , vertices: [[0,-5],[canvasWidth/ScaleFactor,-5]]});
					
					/*for(var i=0;i<=55;i++)
					{
						createSpike(i*0.5 ,HomePos.y/ScaleFactor+0.56, "top" );
					}*/
					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0020,maskBits:(0xFFFF & ~0x0004 & ~0x0008& ~0x0001 & ~0x0010) ,image:myImage ,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-14  , y :HomePos.y/ScaleFactor-13.0,radius:0.5,restitution:0,friction:0});
					
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0001,maskBits:(0xFFFF & ~0x0002 & ~0x0008& ~0x0020 & ~0x0010) ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-2.0  , y :HomePos.y/ScaleFactor-10.0,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0010,maskBits:(0xFFFF & ~0x0004 & ~0x0002& ~0x0020 & ~0x0001) ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+12.5 , y : HomePos.y/ScaleFactor-11.6,radius:0.5,restitution:0,friction:0});
	  
			  },
			  startCollide:function(contact)
			  {
				  if(contact.GetFixtureA().GetBody().details.name == "Parent" || contact.GetFixtureB().GetBody().details.name == "Parent")
				  {
						if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) || (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
						{
							var childNum = (contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) ? contact.GetFixtureB().GetBody().details.name.replace("child_","") : contact.GetFixtureA().GetBody().details.name.replace("child_","");
							
							if(childNum == 1)
							{
								world.DestroyJoint(this.rope_1);
								
								this.is_Rope_1_Broken = true;
								//this.rope_1 = null;
								
								
							}
							else
							if(childNum == 2)
							{
								world.DestroyJoint(this.rope_2);
								
								this.is_Rope_2_Broken = true;
								//this.rope_2 = null;
							}
							else
							if(childNum == 3)
							{
								world.DestroyJoint(this.rope_3);
								
								this.is_Rope_3_Broken = true;
								//this.rope_3 = null;
							}
							playSound("CartFall");

							numOfHearts = 1;
							startHeartParticles(parentBody.GetPosition().x , parentBody.GetPosition().y);
						}
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
							if(!this.is_Rope_1_Broken)
								Is_1_Imp = true;
						}
						else
							Is_1_Imp = true;
						
						if( child_2 )
						{
							if(!this.is_Rope_2_Broken)
								Is_2_Imp = true;
						}
						else
							Is_2_Imp = true;
						
						if( child_3 )
						{
							if(!this.is_Rope_3_Broken)
								Is_3_Imp = true;
						}
						else
							Is_3_Imp = true;
						
						if(Is_1_Imp && Is_2_Imp && Is_3_Imp)
							endLevel();
				    }
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
							return  CreateObj({color:"#777777",categoryBits:cBits,maskBits:MaskBs,isStroke:true,density:din,fixedAngle:true ,type:"dynamic" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3,shape4]});
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
							return  CreateObj({color:"#777777",categoryBits:cBits,maskBits:MaskBs,isStroke:true,density:din,fixedAngle:true ,type:"dynamic" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3,shape4]});
					}
			  }
			  ,
			  canvasDrawForground: function()
			  {
					if(this.cage_1)
					{
						this.drawCircleJoint(this.cage_1.GetPosition().x * ScaleFactor , this.cage_1.GetPosition().y * ScaleFactor);
					}	
					
					if(this.cage_2)
					{
						this.drawCircleJoint(this.cage_2.GetPosition().x * ScaleFactor , this.cage_2.GetPosition().y * ScaleFactor);
					}
					
					if(this.cage_3)
					{
						this.drawCircleJoint(this.cage_3.GetPosition().x * ScaleFactor , this.cage_3.GetPosition().y * ScaleFactor);
					}
			  },
			  drawCircleJoint:function(xPos,yPos)
			  {
					ctx.strokeStyle = ORANGE_COLOR;
					ctx.beginPath();
					
					ctx.moveTo(xPos , yPos-98);
					ctx.lineTo(xPos , yPos-170);
					
					ctx.closePath();
					ctx.stroke();
					
					ctx.fillStyle = GREY_COLOR;
					ctx.beginPath();
						ctx.arc(xPos,yPos-98,14,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.fillStyle = ORANGE_COLOR;
					ctx.beginPath();
						ctx.arc(xPos,yPos-98,10,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.fillStyle = GREY_COLOR;
					ctx.beginPath();
						ctx.arc(xPos,yPos-98,3.5,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
			  }
		}
		Level_2_9.startLevel();