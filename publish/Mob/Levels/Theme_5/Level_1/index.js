var Level_5_1 = {
			timerSpeed:0.04,
			
			dotPos:{"x":0,"y":0},
			
			khashabe:null,
			
			startLevel: function() 
			{			
					numOfBalls =3;
					HomePos = {"x": (canvasWidth/2.0)-260, "y":canvasHeight-55};
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
				goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
				CreateFloor(true);

				CreateObj({color:GREY_COLOR, type: "static" , shape:"box" ,x:canvasWidth/2/ScaleFactor+9  , y:7.5 , width:9,height:0.4 });

				var a = CreateObj({color:null,type: "static" , shape:"circle" ,x:canvasWidth/2/ScaleFactor-2  , y:canvasHeight/2/ScaleFactor-4 , radius:0.4 });
				this.khashabe = CreateObj({color:ORANGE_COLOR,density:70,fixedAngle:false, type: "dynamic" , shape:"box" ,x:canvasWidth/2/ScaleFactor-2  , y:10 , width:7,height:0.4 });

				createRevoluteJoint(a , this.khashabe , new b2Vec2(0,0) , new b2Vec2(0,-6.5) , false , 0 ,0, null);
				
				
				CreateObj({color:GREY_COLOR, type: "static" , shape:"box" ,x:canvasWidth/2/ScaleFactor-12.5  , y:9 , width:0.4,height:5 });
								
								
				this.dotPos.x = a.GetPosition().x;
				this.dotPos.y = a.GetPosition().y;
				
				createSpikesBox(canvasWidth/2/ScaleFactor-2 , canvasHeight/2/ScaleFactor-1 , 1);
				createSpikesBox(canvasWidth/2/ScaleFactor-3-2 , canvasHeight/2/ScaleFactor-4 , 1);
				createSpikesBox(canvasWidth/2/ScaleFactor+3-2 , canvasHeight/2/ScaleFactor-4 , 1);
				
				this.khashabe.ApplyImpulse(new b2Vec2(1500, 0),new b2Vec2(0, 0));
				
				
				var myImage = new Image();
				myImage.src = 'images/Kid_1.png';
				child_1 = CreateObj({name:'child_1',image:myImage,density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+11 , y : 5,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_2.png';
				child_2 = CreateObj({name:'child_2',image:myImage,density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+5  , y : 5,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_3.png';
				child_3 = CreateObj({name:'child_3',image:myImage,density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor+8  , y : 5,radius:0.5,restitution:0,friction:0});
	
			  },
			  startCollide:function(contact)
			  {
				  

			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					drawMe7bas(new b2Vec2(this.dotPos.x,this.dotPos.y));
					 
					ctx.save();
					ctx.translate(this.dotPos.x * ScaleFactor, this.dotPos.y * ScaleFactor);
					ctx.rotate(this.khashabe.GetAngle());
					ctx.translate(-this.dotPos.x * ScaleFactor, -this.dotPos.y * ScaleFactor);
						 
						ctx.strokeStyle = GREY_COLOR;
						ctx.beginPath();
							ctx.moveTo(this.dotPos.x * ScaleFactor , this.dotPos.y * ScaleFactor);
							ctx.lineTo(this.dotPos.x * ScaleFactor+100 , this.dotPos.y * ScaleFactor + 195);
							
							ctx.moveTo(this.dotPos.x * ScaleFactor , this.dotPos.y * ScaleFactor);
							ctx.lineTo(this.dotPos.x * ScaleFactor-100 , this.dotPos.y * ScaleFactor + 195);
						ctx.closePath();
						ctx.stroke();
						
					ctx.restore();

			  }
		}
		Level_5_1.startLevel();
		
		