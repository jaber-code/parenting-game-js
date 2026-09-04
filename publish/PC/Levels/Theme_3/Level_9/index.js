var Level_3_9= {
			timerSpeed:0.02,
			
			seso_1:null,
			arr_Circles:[],
			arr_Ropes:[null],
			arr_Kotal:[null],
			speed : -7,
			
			
			arr_Speeds:[8,9.5],


			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+320, "y":canvasHeight-57};
					RestrictedArea = {"x":0,"w":500,"y":0,"h":480,"op":0.06};

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
				
				this.arr_Ropes = [null];
				this.arr_Kotal = [null];
				this.arr_Circles=[];
				
				initGlobalVars();
				
				this.seso_1 = null;

				numOfBalls = 3;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function() 
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();

					CreateObj({ categoryBits: 0x0080,density:10,color:GREY_COLOR,fixedAngle:true,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-4  , y:0 , vertices:[[0,1],[40,1]] });

					this.seso_1 = this.createSeso(HomePos.x/ScaleFactor-14,canvasHeight/2/ScaleFactor-2,7.0,0.42);
				//	createDiagonalStick({x:HomePos.x/ScaleFactor-15,y:canvasHeight/2/ScaleFactor+6.9,w:6,h:2, w2:5.0 , h2:1.0,color:GREY_COLOR,isFlipVer:false});
					creatFan(HomePos.x/ScaleFactor-14,canvasHeight/2/ScaleFactor+2,6,0.4 , false , 0 , 0 , 300);
					
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" , x:canvasWidth/2/ScaleFactor-6.8 , y:canvasHeight/ScaleFactor-0.8 ,width:2.5,height:5});
					CreateObj({color:"pink",type:"dynamic" ,density:35,fixedAngle:true, shape:"box" , x:canvasWidth/2/ScaleFactor-7.2 , y:canvasHeight/ScaleFactor-11 ,width:1.8,height:1.8});
					
					
					obj1 = CreateObj({categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004),density:10,fixedAngle:true ,color:null,type: "dynamic" , shape:"circle" ,x:4  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004),density:50,color:'blue',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:4  , y:2 , width:1.2 , height:1.2});
				this.arr_Circles.push(obj1);

					obj1.SetLinearVelocity(new b2Vec2(3,0));
					this.arr_Ropes[1] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,2) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);

					
					
				    obj1 = CreateObj({categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002),density:10,fixedAngle:true ,color:null,type: "dynamic" , shape:"circle" ,x:0  , y:1 , radius:1 });
					obj2 = CreateObj({name:"kotla_2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002),density:50,color:'green',fixedAngle:true ,type: "dynamic" ,shape:"box" ,x:0  , y:2 , width:1.2 , height:1.2});
				this.arr_Circles.push(obj1);
				
					obj1.SetLinearVelocity(new b2Vec2(5,0));
					this.arr_Ropes[2] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,2) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
					


					for(var i=0;i<=26;i++)
					{
						createSpike(i*0.5 ,canvasHeight/ScaleFactor-1.3, "top");
					}

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0002 , maskBits:(0xFFFF & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-13 , y :HomePos.y/ScaleFactor-6,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004 , maskBits:(0xFFFF & ~0x0002 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-14  , y :HomePos.y/ScaleFactor-6,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0006 , maskBits:(0xFFFF & ~0x0002 & ~0x0004 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-15 , y : HomePos.y/ScaleFactor-6,radius:0.5,restitution:0,friction:0});
					
			  },
			  startCollide:function(contact)
			  {
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("kotla") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("kotla_",""));

							destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],0);
					  }
					  else
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("kotla") != -1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("kotla_",""));

							destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],0);
					  }
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					
			  },
			  canvasDrawForground: function()
			  {
					ctx.fillStyle = GREY_COLOR;
					ctx.beginPath();
						ctx.arc(this.seso_1.GetPosition().x*ScaleFactor,this.seso_1.GetPosition().y*ScaleFactor,13,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.fillStyle = ORANGE_COLOR;
					ctx.beginPath();
						ctx.arc(this.seso_1.GetPosition().x*ScaleFactor,this.seso_1.GetPosition().y*ScaleFactor,7,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.save();
						ctx.translate((this.seso_1.GetPosition().x * ScaleFactor+3.48) , this.seso_1.GetPosition().y * ScaleFactor);
						ctx.rotate(this.seso_1.GetAngle());
						ctx.translate(-(this.seso_1.GetPosition().x * ScaleFactor+3.48) , -this.seso_1.GetPosition().y * ScaleFactor);
						drawMe7bas( new b2Vec2(this.seso_1.GetPosition().x+3.48 , this.seso_1.GetPosition().y) ,true);
					ctx.restore();
					
					ctx.save();
						ctx.translate((this.seso_1.GetPosition().x * ScaleFactor-3.48) , this.seso_1.GetPosition().y * ScaleFactor);
						ctx.rotate(this.seso_1.GetAngle());
						ctx.translate(-(this.seso_1.GetPosition().x * ScaleFactor-3.48) , -this.seso_1.GetPosition().y * ScaleFactor);
						drawMe7bas( new b2Vec2(this.seso_1.GetPosition().x-3.48 , this.seso_1.GetPosition().y) ,true);
					ctx.restore();
			  },
			  createSeso:function(xPos,yPos,wid,hei)
			  {
					var shape_1 = {shape:"poly" , vertices:[ [-1.95,-0.8] , [1.95,-0.8] , [1.95,-0.4] , [-1.95,-0.4]]};//width
					var shape_2 = {shape:"poly" , vertices:[ [-0.24,-0.4] , [0.24,-0.4] , [0.24,0.2] , [-0.24,0.2]]};//height

					
					var kafe1 = CreateObj({density:300,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"complex" ,x:xPos+wid/2 , y:yPos-0.9  , Shapes:[shape_1,shape_2]});
					var kafe2 = CreateObj({density:300,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"complex" ,x:xPos-wid/2 , y:yPos-0.9  ,Shapes:[shape_1,shape_2]});
					
					
					shape_1 = {shape:"poly" , vertices:[ [-0.24,-0.0] , [0.24,-0.0] , [0.24,0.2] , [-0.24,0.2]]};
					shape_2 = {shape:"box" ,width:2.5,height:0.5};
					var bottomKafe1 = CreateObj({color:ORANGE_COLOR,fixedAngle:true , mass:0 , density:300.0 , type:"dynamic" , shape:"complex" , x:xPos+wid/2 , y:yPos+6 ,Shapes:[shape_1,shape_2]});
					createRevoluteJoint(bottomKafe1 , kafe1 , new b2Vec2(0,-4.7) , new b2Vec2(0,0) , false , 0 , 0 , RED_COLOR);
					
					
					shape_1 = {shape:"poly" , vertices:[ [-0.24,-0.0] , [0.24,-0.0] , [0.24,0.2] , [-0.24,0.2]]};
					shape_2 = {shape:"box" ,width:2.5,height:0.5};
					var bottomKafe2 = CreateObj({color:ORANGE_COLOR,fixedAngle:true , mass:0 , density:300.0 , type:"dynamic" , shape:"complex" , x:xPos-wid/2 , y:yPos+8 ,Shapes:[shape_1,shape_2]});
					createRevoluteJoint(bottomKafe2 , kafe2 , new b2Vec2(0,-7.6) , new b2Vec2(0,0) , false , 0 , 0 , RED_COLOR);

					
					var stick = CreateObj({color:ORANGE_COLOR,fixedAngle:false , mass:0 , density:200.0 , type:"dynamic" , shape:"box" , x:xPos , y:yPos ,width:wid,height:hei});
					var center = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:xPos , y:yPos  , width:0.4 , height:0.4});

					createRevoluteJoint(kafe1 , stick , new b2Vec2(0,0) , new b2Vec2(-wid/2,0));
					createRevoluteJoint(kafe2 , stick , new b2Vec2(0,0) , new b2Vec2(wid/2,0));
				
					createRevoluteJoint(center , stick , new b2Vec2(0,0) , new b2Vec2(0,0));
					return stick;

			  }
		}
		Level_3_9.startLevel();
		
		