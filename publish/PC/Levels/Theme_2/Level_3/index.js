var Level_2_3= {
			timerSpeed:0.04,
			hint:"Eye contact",
			Eye1 : null,
			Eye2 : null,
			door_1 : null,
			door_2 : null,
			openDoor : false,
	  
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-57};
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
				if(this.Eye1.GetPosition().y > HomePos.y/ScaleFactor-8 )
					this.Eye1.SetLinearVelocity(new b2Vec2(0,-0.9));
						  
				if(this.Eye1.GetPosition().y < HomePos.y/ScaleFactor-13)
					this.Eye1.SetLinearVelocity(new b2Vec2(0,0.9));
					
				if(this.Eye2.GetPosition().y > HomePos.y/ScaleFactor-8 )
					this.Eye2.SetLinearVelocity(new b2Vec2(0,-0.9));
						  
				if(this.Eye2.GetPosition().y < HomePos.y/ScaleFactor-13)
					this.Eye2.SetLinearVelocity(new b2Vec2(0,0.9));
					
					
				if( Math.abs(this.Eye1.GetPosition().y - this.Eye2.GetPosition().y) < 0.8)
				{
					if(!this.openDoor)
					{
						var temp = this.Eye1.m_linearVelocity.y;
						this.Eye1.SetLinearVelocity(new b2Vec2(0,temp + -1*(temp/Math.abs(temp)) * 0.5 ));
						
						temp = this.Eye2.m_linearVelocity.y;
						this.Eye2.SetLinearVelocity(new b2Vec2(0,temp + -1*(temp/Math.abs(temp)) * 0.5 ));
					
						this.door_1.SetLinearVelocity(new b2Vec2(1.3,0.0));
						this.door_2.SetLinearVelocity(new b2Vec2(-1.3,0.0));

						this.openDoor = true;
						
						
						playSound("EyesLook");
					}
				}
				else
				{
					if(this.openDoor)
					{
						var temp = this.Eye1.m_linearVelocity.y;
						this.Eye1.SetLinearVelocity(new b2Vec2(0,temp + 1*(temp/Math.abs(temp)) * 0.5 ));
						
						temp = this.Eye2.m_linearVelocity.y;
						this.Eye2.SetLinearVelocity(new b2Vec2(0,temp + 1*(temp/Math.abs(temp)) * 0.5 ));
						
						this.door_1.SetLinearVelocity(new b2Vec2(-1.3,0.0));
						this.door_2.SetLinearVelocity(new b2Vec2(1.3,0.0));

						this.openDoor = false;
					}
					
					if(this.door_1.GetPosition().x <= this.door_1.details.x)
						this.door_1.SetLinearVelocity(new b2Vec2(-0.03,0.0));
					
					if(this.door_2.GetPosition().x >= this.door_2.details.x)
						this.door_2.SetLinearVelocity(new b2Vec2(0.03,0.0));
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				numOfBalls = 3;
				sandLevel = 0;
				
				this.openDoor = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"box" , x:HomePos.x/ScaleFactor-8, y:9.4 , width:12 , height:0.5});
					CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"box" , x:HomePos.x/ScaleFactor+8, y:9.4 , width:12 , height:0.5});
					
					this.door_1 = CreateObj({name:"door_1",density:9999,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor+1.56, y:9.9, width:3 , height:0.5});
					this.door_2 = CreateObj({name:"door_2",density:9999,color:ORANGE_COLOR,fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor-1.56, y:9.9, width:3 , height:0.5});
					
					this.door_1.SetLinearVelocity(new b2Vec2(-0.03,0));
					this.door_2.SetLinearVelocity(new b2Vec2(0.03,0));
					
					//door_1.SetLinearVelocity(new b2Vec2(0,0));
					//door_2.SetLinearVelocity(new b2Vec2(0,0));
					
					CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"box" , x:HomePos.x/ScaleFactor-6, y:5 , width:4 , height:0.7});
					CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:HomePos.x/ScaleFactor-7.9 , y:5 , radius:0.345});
					CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:HomePos.x/ScaleFactor-3.9 , y:5 , radius:0.345});
					
					///LEFT EDGE
					/*var tempArr = [35, -26, -35, 47, -34, 24, 35, -47];
					var shape1 = { shape:"poly" , vertices: indicesConvertor(tempArr)};
					
					tempArr = [48.5, -10, 48.5, 10, -48.5, 9, -48.5, -10];
					var shape2 = { shape:"poly" , vertices: indicesConvertor(tempArr , 83 , -36.5)}; 
					CreateObj({name:"body4",density:10,color:'#777777',fixedAngle:false ,type: "static" , shape:"complex" , x:HomePos.x/ScaleFactor+3 , y:6, Shapes:[shape1,shape2]});
					CreateObj({name:"body4",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:HomePos.x/ScaleFactor+6.4, y:4.78 , radius:0.325});
*/
					create2Edges(HomePos.x/ScaleFactor+7.2 , 5 , 4 , 0.6, 3 ,2, 0.29,true);
					
					myImage = new Image();
					myImage.src = 'images/Eye_1.png';			
					this.Eye1 = CreateObj({image:myImage,name:"Eye1",density:9999,color:'red',fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor+1.5, y:1.7, width:1.2 , height:1.2}); 	

					myImage = new Image();
					myImage.src = 'images/Eye_2.png';			
					this.Eye2 = CreateObj({image:myImage,name:"Eye2",density:9999,color:'green',fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor-1.5, y:4.7, width:1.2 , height:1.2});

					this.Eye1.SetLinearVelocity(new b2Vec2(0,-0.9));
					this.Eye2.SetLinearVelocity(new b2Vec2(0,0.9));

					//goal = CreateObj({name:"Goal",density:10,color:'white',fixedAngle:false ,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor , y:15 , vertices:  [[-1.6,-1.0],[0,-3.5],[1.6,-1.0] ,[1.6,1],[-1.6,1]]});

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();
			
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-6 , y : 4,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-7  , y : 8,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+6  , y : 4,radius:0.5,restitution:0,friction:0});
	 
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					ctx.fillStyle = ORANGE_COLOR;
					ctx.beginPath();
						ctx.arc(this.door_1.GetPosition().x*ScaleFactor+27,this.door_1.GetPosition().y*ScaleFactor-7,8,0,2*Math.PI);
						ctx.arc(this.door_2.GetPosition().x*ScaleFactor-27,this.door_2.GetPosition().y*ScaleFactor-7,8,0,2*Math.PI);

					ctx.closePath();
					ctx.fill();
					
					
				  if(this.openDoor)
				    drawHeart(0.9 , 1 , this.Eye2.GetPosition().x*ScaleFactor+30 , (this.Eye1.GetPosition().y+this.Eye2.GetPosition().y)/2 *ScaleFactor -10);
			  },
			  IsWrongPlace:function(ballPosX , ballPosY)
			  {
					var box_x = cage.GetPosition().x ;
					var box_y = cage.GetPosition().y ;
					  
					if(ballPosX < (canvasWidth/2)/ScaleFactor+2)
					{
						//alert(true);
						return true;
						
					}
					else
					{
						//alert(false);
						return false;
						
					}
			  }
		}
		Level_2_3.startLevel();
		
		