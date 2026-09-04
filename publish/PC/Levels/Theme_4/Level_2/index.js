var Level_4_2 = {
			timerSpeed:0.04,
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			glass_Con:null,
			
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			
			speed : -13,

			timer:0,
			
			wheel_1:null,
			wheel_2:null,


			startLevel: function() 
			{			
					numOfBalls = 2;
					HomePos = {"x": (canvasWidth/2.0)+300, "y":canvasHeight-55};
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
				if( this.timer % 215 == 0 )
				{
					if(child_1 && Level_4_2.is_Child_1_Jump)
						child_1.SetLinearVelocity(  new b2Vec2(0, this.speed*0.9)  );
				}
				
				if( this.timer % 200 == 0 )
				{
					if(child_2 && Level_4_2.is_Child_2_Jump)
						child_2.SetLinearVelocity(  new b2Vec2(0 , this.speed*1.1)  );
				}
				
				if( this.timer % 230 == 0 )
				{
					if(child_3 && Level_4_2.is_Child_3_Jump)   
						child_3.SetLinearVelocity(  new b2Vec2(0 , this.speed*0.8)  );
				}
				
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.glass_1 = null;
				this.glass_2 = null;
				this.glass_3 = null;
				
				this.glass_Con = null;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				this.timer = 0;
				
				this.speed = -13,

				numOfBalls = 2;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					var MainPosX = canvasWidth/2/ScaleFactor;
					var MainPosY = canvasHeight/2/ScaleFactor;

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					
					
					var shape1 = { shape:"poly" , vertices:[[0,0],[4,0],[4,0.4],[0,0.4]] };
					var shape2 = { shape:"poly" , vertices:[[0,0],[0,-3],[0.4,-3],[0.4,0]] };
					var shape3 = { shape:"poly" , vertices:[[3.6,0],[3.6,-3],[4,-3],[4,0]] };

					this.qtar = CreateObj({name:'qtar',color:GREY_COLOR,categoryBits:0x0400,mass:0,density:8,restitution:0,friction:0,type:"dynamic" , shape:"complex" ,  x : MainPosX-5, y :14,Shapes:[shape1,shape2,shape3]}); 

					this.wheel_1 = CreateObj({name:'qtar',color:'#666666',categoryBits:0x0400,density:8,type:"dynamic" , shape:"circle" ,  x : MainPosX-5, y :14,radius:0.5}); 
					this.wheel_2 = CreateObj({name:'qtar',color:'#666666',categoryBits:0x0400,density:8,type:"dynamic" , shape:"circle" ,  x : MainPosX-5, y :14,radius:0.5}); 

					createRevoluteJoint(this.qtar , this.wheel_1 , new b2Vec2(0.6,0.9) , new b2Vec2(0,0));
					createRevoluteJoint(this.qtar , this.wheel_2 , new b2Vec2(3.6,0.9) , new b2Vec2(0,0));
					
					CreateObj({name:'con1',color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+4, y :canvasHeight/2/ScaleFactor+6.6,width:0.5,height:0.5}); 
					CreateObj({name:'con1',color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+6, y :MainPosY-3,width:0.5,height:8}); 

					CreateFloor(false);
					
					for(var i=0;i<=34;i++)
					{
						 createSpike(i*0.5 ,canvasHeight/ScaleFactor-1.3, "top" );
					}

					//this.qtar.SetLinearVelocity(new b2Vec2(-3,0));

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,categoryBits:0x0002 , maskBits:(0xFFFF & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX-4.0, y :MainPosY+5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,categoryBits:0x0004 , maskBits:(0xFFFF & ~0x0002 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX-3  , y :MainPosY+5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0006 , maskBits:(0xFFFF & ~0x0002 & ~0x0004 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX-2, y : MainPosY+5,radius:0.5,restitution:0,friction:0});
					
					setTimeout(function(){
						child_1.SetLinearVelocity(  new b2Vec2(0 , -12)  );
					},200);
					
					setTimeout(function(){
						child_2.SetLinearVelocity(  new b2Vec2(0 , -12)  );
					},800);
					
					setTimeout(function(){
						child_3.SetLinearVelocity(  new b2Vec2(0 ,-12)  );							
					},1300);
					
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureA().GetBody() == this.qtar && contact.GetFixtureB().GetBody().details.name.indexOf("Parent") != -1 )
					{
						this.is_Child_1_Jump = false;
						this.is_Child_2_Jump = false;
						this.is_Child_3_Jump = false;
						
						playSound("Hit");
					}
			  },
			  canvasDrawForground: function()
			  {
					    ctx.fillStyle = ORANGE_COLOR;
						ctx.beginPath();
							ctx.arc(	this.wheel_1.GetPosition().x*ScaleFactor	, 	this.wheel_1.GetPosition().y*ScaleFactor	,8, 	0	, 		Math.PI*2	);
							ctx.arc(	this.wheel_2.GetPosition().x*ScaleFactor	, 	this.wheel_2.GetPosition().y*ScaleFactor	,8, 	0	, 		Math.PI*2	);
						ctx.closePath();
						ctx.fill();
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_4_2.startLevel();
		
		