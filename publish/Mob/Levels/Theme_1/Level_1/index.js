var Level_1_1 = {
			timerSpeed:0.04,

			goalRight  : null,
			goalLeft  : null,
			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-32-25};
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
				this.goalLeft  = null;
				this.goalRight  = null;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					// //CENTER EDGE
					//CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"box" , x:HomePos.x/ScaleFactor-8 , y:HomePos.y/ScaleFactor , width:12 , height:0.6});
					//CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:(canvasWidth/2.0)/ScaleFactor-1.9 , y:4.5 , radius:0.345});
					//CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:(canvasWidth/2.0)/ScaleFactor+1.9 , y:4.5 , radius:0.345});
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();	
					
					create2Edges((canvasWidth/2.0)/ScaleFactor-8.5 , 6 , 4 , 0.6 , 3 ,2, 0.28,false);
					create2Edges((canvasWidth/2.0)/ScaleFactor+7.7 , 7 , 4 , 0.6 , 3 ,2, 0.28,true);

					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'green',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-8 , y : HomePos.y/ScaleFactor,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor-8  , y : 5,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'#FF69B4',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor+7  , y : 5,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {

			  }
		}
		Level_1_1.startLevel();
		
		