var Level_1_2 = {
			timerSpeed:0.04,

			rope  : null,
			cage  : null,
			circle  : null,
			wheel : null,
			IsParentEnter : false,

			startLevel: function() 
			{			
					numOfBalls = 1;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-32};
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
				if(!isLevelEnd)
				{
					if(this.cage.GetPosition().x * ScaleFactor >= canvasWidth - 100)
						endLevel();
							
					if(this.cage.GetPosition().y * ScaleFactor >= canvasHeight )
						endLevel();
					
					//this.circle.m_xf.position.x = this.wheel.m_xf.position.x - 0.55;
					//this.circle.m_xf.position.y = this.wheel.m_xf.position.y + 1.1;
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();


				numOfBalls = 1;
				sandLevel = 0;	
				this.rope  = null;
				this.cage  = null;
				this.wheel = null;	
				this.circle = null;				
				this.IsParentEnter = false;
				
				setTries(numOfBalls);

			},
			
			  startStage:function()
			  {
					//cage CONTAINER

					
					var shape1 = { shape:"poly" , vertices: [[0 , 0] , [0.3 , 0] , [0.3 , 4.5] , [0 , 4.5]]};
					var shape2 = { shape:"poly" , vertices: [[0.3 , 0] , [4.5   , 0] , [4 , 0.3] , [0.3, 0.3]]};
					var shape3 = { shape:"poly" , vertices: [[0.3 , 4.2] , [4.5   , 4.2] , [4.5 , 4.5] , [0.3, 4.5]]};
					var shape4 = { shape:"poly" , vertices: [[4.2 , 2.8] , [4.5 , 2.8] , [4.5 , 4.5] , [4.2, 4.5]]};
					var shape5 = {color:'#777777', shape:"poly" , vertices: [[1.3 , -2] , [1.6 , -2] , [1.6 , 0] , [1.3, 0]]};
					//var shape6 = { shape:"poly" , vertices: [[1.3 , -2] , [1.6 , -2] , [1.6 , 0] , [1.3, 0]]};

					//this.circle = CreateObj({density:500,color:ORANGE_COLOR,type:"static" , shape:"circle" , x : 2, y :2,radius:0.5});

					//CreateObj({density:500,color:ORANGE_COLOR,type:"dynamic" , shape:"circle" , x : 2, y :2,radius:0.8});
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					this.cage = CreateObj({density:10,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"complex" , x:1.5 , y:7, Shapes:[shape1, shape2, shape3, shape4, shape5]});
					//goal.SetLinearVelocity(new b2Vec2(1,0.1));
					

										
					this.wheel = CreateObj({color:null,density:500,type:"dynamic" , shape:"circle" , x : 2, y :2,radius:1.1});

					//CENTER EDGE
					var edge = CreateObj({color:'#777777',restitution:0,friction:0,fixedAngle:false , mass:0 , density:0 , type:"static" , shape:"poly" , vertices: [[-1*(canvasWidth/ScaleFactor)/2,-1],[(canvasWidth/ScaleFactor)/2,3],[(canvasWidth/ScaleFactor)/2,3.3],[-1*(canvasWidth/ScaleFactor)/2,-0.7]] , x:(canvasWidth/ScaleFactor)/2 , y:3});
					
					//console.log(this.circle);
					//Childs
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 3 , y :7 ,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 3 , y :7 ,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 3 , y :7 ,radius:0.5,restitution:0,friction:0});
					
					this.rope = createRevoluteJoint(this.cage , this.wheel , new b2Vec2(2,-3.2) , new b2Vec2(0,0),false,0,0);
			  },
			  startCollide:function(contact)
			  {
					if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) || (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
					{
						if(this.rope)
						{
							playSound("CartFall");
								world.DestroyJoint(this.rope);
								this.rope = null;
						}
					}
			  },
			  canvasDrawForground: function()
			  {
				    if(this.wheel)
					{
							ctx.strokeStyle = GREY_COLOR;
							
							ctx.lineWidth = 1.5;
							
							ctx.beginPath();
							for(var i=0;i<14;i++)
							{
								ctx.moveTo(-22+this.wheel.GetPosition().x*ScaleFactor ,  40+this.wheel.GetPosition().y * ScaleFactor +i*4);
								ctx.lineTo(-22+this.wheel.GetPosition().x*ScaleFactor + 12,  40+this.wheel.GetPosition().y * ScaleFactor+i*4+5);
								ctx.stroke();
							}
							ctx.closePath();
							ctx.stroke();
							
							ctx.fillStyle = ORANGE_COLOR;
							ctx.beginPath();
								ctx.arc(this.wheel.GetPosition().x*ScaleFactor-16,this.wheel.GetPosition().y*ScaleFactor+25,16,0,2*Math.PI);
							ctx.closePath();
							ctx.fill();
						  
							
							ctx.fillStyle = GREY_COLOR;
							ctx.beginPath();
								ctx.arc(this.wheel.GetPosition().x*ScaleFactor-16,this.wheel.GetPosition().y*ScaleFactor+25,8,0,2*Math.PI);
							ctx.closePath();
							ctx.fill();
					}
					
					
			  },
			  checkIfWin: function()
			  {
					
			  }
		}
		Level_1_2.startLevel();