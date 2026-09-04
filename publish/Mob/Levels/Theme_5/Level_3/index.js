var Level_5_3 = {
			timerSpeed:0.03,
			
			wheel_1 : null,
		    wheel_2 : null,
		    wheel_3 : null,
		  
		    box_1 : null,
		    box_2 : null,
		    box_3 : null,
		  
		    wheel_1XVel : 3,
		    wheel_2XVel : 4,
		    wheel_3XVel : 2,
		  
		    rope_1 : null,
		    rope_2 : null,
		    rope_3 : null,
			
			BGImage:null,


			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+290, "y":canvasHeight-30};
					RestrictedArea = {"x": 0, "y":290,"h":400,"w":800,"op":0.0};

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
				if(Math.abs(this.box_1.m_linearVelocity.x) < 2)
					this.wheel_1.SetLinearVelocity(new b2Vec2(this.wheel_1XVel,0));
				
				if(this.wheel_1.GetPosition().x < 7)
					this.wheel_1XVel = Math.abs(this.wheel_1XVel);
				if(this.wheel_1.GetPosition().x > 25)
					this.wheel_1XVel = -1*Math.abs(this.wheel_1XVel);
				
				
				if(Math.abs(this.box_2.m_linearVelocity.x) < 2)
					this.wheel_2.SetLinearVelocity(new b2Vec2(this.wheel_2XVel,0));
				
				if(this.wheel_2.GetPosition().x < 7)
					this.wheel_2XVel = Math.abs(this.wheel_2XVel);
				if(this.wheel_2.GetPosition().x > 25)
					this.wheel_2XVel = -1*Math.abs(this.wheel_2XVel);
				
				
				if(Math.abs(this.box_3.m_linearVelocity.x) < 2)
					this.wheel_3.SetLinearVelocity(new b2Vec2(this.wheel_3XVel,0));
				
				if(this.wheel_3.GetPosition().x < 7)
					this.wheel_3XVel = Math.abs(this.wheel_3XVel);
				if(this.wheel_3.GetPosition().x > 25)
					this.wheel_3XVel = -1*Math.abs(this.wheel_3XVel);
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();

		

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  
				this.BGImage = new Image();
				this.BGImage.src = 'images/BG_Floor_Night.png';
				
				
				//CreateFloor(false);
				goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					
					
					
				LoopOverObj( Level5_3.Story_1 , GREY_COLOR , 0 , 7.5 , 1 , "static" , 0 , false , 0x0000 ,"noth" );
				LoopOverObj( Level5_3.Story_2 , GREY_COLOR , 3 , 7.2 , 1 , "static" , 0 , false , 0x0000 ,"noth" );
				LoopOverObj( Level5_3.Story_3 , GREY_COLOR , 9.6 , 6.9 , 1 , "static" , 0 , false , 0x0000 ,"noth" );
				LoopOverObj( Level5_3.Story_4 , GREY_COLOR , 20 , 6.6 , 1 , "static" , 0 , false , 0x0000 ,"noth" );
				

				CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:10, y:HomePos.y/ScaleFactor-16  , width:35 , height:0.4,restitution:0,friction:0});

				
				var myImage = new Image();
				myImage.src = 'images/Good_icon_1.png';
				
				this.wheel_1 =CreateObj({name:"wheel1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0006),density:70,color:'red',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:6 , y:1 , radius:0.5});
				this.box_1 =CreateObj({image:myImage,name:"box1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0006),density:200,color:'green',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:6 , y:1 ,radius:0.6});
				this.rope_1 = createRevoluteJoint(this.wheel_1 , this.box_1 , new b2Vec2(0, 5)  , new b2Vec2(0, 0) , false,0,0,"#777777");

				this.wheel_1.SetLinearVelocity(new b2Vec2(this.wheel_1XVel,0));
	/////////////////
				
				myImage = new Image();
				myImage.src = 'images/Good_icon_2.png';
				
				this.wheel_2 =CreateObj({name:"wheel2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0006),density:70,color:'red',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:11, y:1 , radius:0.5});
				this.box_2 =CreateObj({image:myImage,name:"box2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0006),density:200,color:'blue',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:11 , y:1 , radius:0.6});
				this.rope_2 = createRevoluteJoint(this.wheel_2 , this.box_2 , new b2Vec2(0, 5)  , new b2Vec2(0, 0), false,0,0,"#777777");

				this.wheel_2.SetLinearVelocity(new b2Vec2(this.wheel_2XVel,0));
	/////////////////
				myImage = new Image();
				myImage.src = 'images/Good_icon_3.png';
				
				this.wheel_3 =CreateObj({name:"wheel3",categoryBits:0x0006,maskBits:(0xFFFF & ~0x0004 & ~0x0002),density:70,color:'red',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:17, y:1 , radius:0.5});
				this.box_3 =CreateObj({image:myImage,name:"box3",categoryBits:0x0006,maskBits:(0xFFFF & ~0x0004 & ~0x0002),density:200,color:'red',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:17 , y:1,radius:0.6});
				this.rope_3 = createRevoluteJoint(this.wheel_3 , this.box_3 , new b2Vec2(0, 5)  , new b2Vec2(0, 0), false,0,0,"#777777");

				this.wheel_3.SetLinearVelocity(new b2Vec2(this.wheel_3XVel,0));
			
				
				CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor-3.5, y:13.3  , width:0.3 , height:0.3});
				
				CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor-9.8, y:15.3  , width:0.3 , height:0.3});

				var myImage = new Image();
				myImage.src = 'images/Kid_1.png';
				child_1 = CreateObj({name:'child_1',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor-4 , y : 13,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_2.png';
				child_2 = CreateObj({name:'child_2',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+6  , y : 10,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_3.png';
				child_3 = CreateObj({name:'child_3',image:myImage,categoryBits:0x8000,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor-10  , y : 14,radius:0.5,restitution:0,friction:0});
	
			  },
			  startCollide:function(contact)
			  {
					if((contact.GetFixtureB().GetBody() == parentBody && (contact.GetFixtureA().GetBody() == this.box_1 || contact.GetFixtureA().GetBody() == this.box_2 || contact.GetFixtureA().GetBody() == this.box_3)))
					{				
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "1")
						{
							world.DestroyJoint(this.rope_1);
							destroyBody(this.wheel_1 , 100);
						}
						else
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "2")
						{
							world.DestroyJoint(this.rope_2);
							destroyBody(this.wheel_2 , 100);
						}
						else
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "3")
						{
							world.DestroyJoint(this.rope_3);
							destroyBody(this.wheel_3 , 100);
						}

					}
					else
					if((contact.GetFixtureA().GetBody() == parentBody && (contact.GetFixtureB().GetBody() == this.box_1 || contact.GetFixtureB().GetBody() == this.box_2 || contact.GetFixtureB().GetBody() == this.box_3)))
					{				
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "1")
						{
							world.DestroyJoint(this.rope_1);
							destroyBody(this.wheel_1 , 100);
						}
						else
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "2")
						{
							world.DestroyJoint(this.rope_2);
							destroyBody(this.wheel_2 , 100);
						}
						else
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "3")
						{
							world.DestroyJoint(this.rope_3);
							destroyBody(this.wheel_3 , 100);
						}
					}

			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 919 , 480 );


			  }
		}
		Level_5_3.startLevel();
		
		