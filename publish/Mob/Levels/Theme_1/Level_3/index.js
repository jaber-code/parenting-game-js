var Level_1_3 = {
			timerSpeed:0.04,
			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-310, "y":canvasHeight-60};
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
				      createTowerSeso(10,canvasHeight/ScaleFactor,2,2 , 3);
					  createTowerSeso(16,canvasHeight/ScaleFactor,2,5 , 3);
				      createTowerSeso(22,canvasHeight/ScaleFactor,2,3 , 3);

					  CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor , y:HomePos.y/ScaleFactor+2 , width:4.15, height:2});
					  
					  goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
	  
					  createSpikesBox((canvasWidth/2.0)/ScaleFactor+5 , 6 , 1);
					  
					  //CreateObj({density:10,color:'#777777',fixedAngle:true ,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+5 , y:6 , width:1 , height:1});
					  //CreateObj({density:10,color:'#777777',fixedAngle:true ,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor-7 , y:13 , width:1 , height:5.5});
					  
					  CreateObj({color:'#777777',type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor-12.6 , y:8 , width:0.5 , height:5});

					  s = creatFan((canvasWidth/2.0)/ScaleFactor-2.6 , 4 , 3.4 , 0.4 , false , 0 , 0 , 20, ORANGE_COLOR);

					  //Childs
					  var myImage = new Image();
					  myImage.src = 'images/Kid_1.png';
					  child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 11 , y :canvasHeight/ScaleFactor-4,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_2.png';
					  child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 17 , y :canvasHeight/ScaleFactor-6 ,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_3.png';
					  child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 23 , y :canvasHeight/ScaleFactor -4,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					if( contact.GetFixtureB().GetBody().details.name == "Parent" && (contact.GetFixtureA().GetBody().details.name == "seso"))
					{
						//alert( contact.GetFixtureA().GetBody().details.name );
						playSound("Hit_Plastic");
					}
			  },
			  
			  checkIfWin: function()
			  {

			  }
		}
		Level_1_3.startLevel();
		
		