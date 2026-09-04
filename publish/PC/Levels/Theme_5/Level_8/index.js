var Level_5_8= {
			timerSpeed:0.04,

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
		  
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-300, "y":canvasHeight-260};
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
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
			
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor +13, y:HomePos.y/ScaleFactor-9  , width:35 , height:0.4,restitution:0,friction:0});

					createTowerSeso((canvasWidth/2)/ScaleFactor-4,canvasHeight/ScaleFactor,2,5.5 , 120);
					createTowerSeso((canvasWidth/2)/ScaleFactor+3,canvasHeight/ScaleFactor,2,4.0 , 120); 
					createTowerSeso((canvasWidth/2)/ScaleFactor+10,canvasHeight/ScaleFactor,2,3.5 , 120);
					  
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor , y:HomePos.y/ScaleFactor+5.0  , width:4 , height:8});
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-3 , y:HomePos.y/ScaleFactor-4.0  , width:0.4 , height:6});

					  
			
					var myImage = new Image();
					myImage.src = 'images/Pray_icon_1.png';
					
					this.wheel_1 =CreateObj({name:"wheel1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0006),density:70,color:'red',fixedAngle:false ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+4.5 , y:HomePos.y/ScaleFactor-0 , radius:0.5});
					this.box_1 =CreateObj({image:myImage,name:"box1",categoryBits:0x0002,maskBits:(0xFFFF & ~0x0004 & ~0x0006),density:200,color:'green',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+4.5 , y:HomePos.y/ScaleFactor-8 ,radius:1});
					this.rope_1 = createRevoluteJoint(this.wheel_1 , this.box_1 , new b2Vec2(0, 5)  , new b2Vec2(0, 0) , false,0,0,"#777777");

					this.wheel_1.SetLinearVelocity(new b2Vec2(this.wheel_1XVel,0));
		/////////////////
					
					myImage = new Image();
					myImage.src = 'images/Pray_icon_2.png';
					
					this.wheel_2 =CreateObj({name:"wheel2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0006),density:70,color:'red',fixedAngle:false ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+10.5 , y:HomePos.y/ScaleFactor-0 , radius:0.5});
					this.box_2 =CreateObj({image:myImage,name:"box2",categoryBits:0x0004,maskBits:(0xFFFF & ~0x0002 & ~0x0006),density:200,color:'blue',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+10.5 , y:HomePos.y/ScaleFactor-8 , radius:1});
					this.rope_2 = createRevoluteJoint(this.wheel_2 , this.box_2 , new b2Vec2(0, 5)  , new b2Vec2(0, 0), false,0,0,"#777777");

					this.wheel_2.SetLinearVelocity(new b2Vec2(this.wheel_2XVel,0));
		/////////////////
					myImage = new Image();
					myImage.src = 'images/Pray_icon_3.png';
					
					this.wheel_3 =CreateObj({name:"wheel3",categoryBits:0x0006,maskBits:(0xFFFF & ~0x0004 & ~0x0002),density:70,color:'red',fixedAngle:false ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+15.5 , y:HomePos.y/ScaleFactor-0 , radius:0.5});
					this.box_3 =CreateObj({image:myImage,name:"box3",categoryBits:0x0006,maskBits:(0xFFFF & ~0x0004 & ~0x0002),density:200,color:'red',fixedAngle:true ,type:"dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor+15.5 , y:HomePos.y/ScaleFactor-8 ,radius:1});
					this.rope_3 = createRevoluteJoint(this.wheel_3 , this.box_3 , new b2Vec2(0, 5)  , new b2Vec2(0, 0), false,0,0,"#777777");

					this.wheel_3.SetLinearVelocity(new b2Vec2(this.wheel_3XVel,0));
					

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x000a),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x :(canvasWidth/2)/ScaleFactor-2 , y :canvasHeight/ScaleFactor-6.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x000a),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2)/ScaleFactor+4  , y :canvasHeight/ScaleFactor-5.2,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x000a),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2)/ScaleFactor+11 , y : canvasHeight/ScaleFactor-6,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					if((contact.GetFixtureB().GetBody() == parentBody && (contact.GetFixtureA().GetBody() == this.box_1 || contact.GetFixtureA().GetBody() == this.box_2 || contact.GetFixtureA().GetBody() == this.box_3)))
					{				
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "1")
							world.DestroyJoint(this.rope_1);
						else
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "2")
							world.DestroyJoint(this.rope_2);
						else
						if(contact.GetFixtureA().GetBody().details.name.replace("box","") == "3")
							world.DestroyJoint(this.rope_3);
						
						
						playSound("Hit_Theqel");

					}
					else
					if((contact.GetFixtureA().GetBody() == parentBody && (contact.GetFixtureB().GetBody() == this.box_1 || contact.GetFixtureB().GetBody() == this.box_2 || contact.GetFixtureB().GetBody() == this.box_3)))
					{				
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "1")
							world.DestroyJoint(this.rope_1);
						else
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "2")
							world.DestroyJoint(this.rope_2);
						else
						if(contact.GetFixtureB().GetBody().details.name.replace("box","") == "3")
							world.DestroyJoint(this.rope_3);
						
							playSound("Hit_Theqel");
					}
					else
					if( contact.GetFixtureB().GetBody().details.name.indexOf("box") != -1 && (contact.GetFixtureA().GetBody().details.name == "seso"))
					{
						//alert( contact.GetFixtureA().GetBody().details.name );
						playSound("Hit_Plastic");
					}
			  },
			  
			  checkIfWin: function()
			  {

			  }
			  
		}
		Level_5_8.startLevel();
		
		