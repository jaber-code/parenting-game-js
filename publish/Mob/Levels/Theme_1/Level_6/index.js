var Level_1_6 = {
			timerSpeed:0.04,
			
			bottomPos:0,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-320, "y":canvasHeight-58};
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
				goalLeft  = null;
				goalRight  = null;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					CreateFloor();
			
					var arr = [0, 0, 14, 11, 32, 21, 55, 29, 77, 31, 426, 31, 426, 48, -3, 50, -3, 2];
					CreateObj({name:"body3",density:10,color:'#777777',fixedAngle:false ,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-1 , y:9.2,vertices: indicesConvertor(arr)});
					
					var arr = [0, 0, 1, -12, 35, -42, 87, -43, 86, -32, 38, -31, 11, -7];
					CreateObj({name:"body3",color:GREY_COLOR,density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7, y:1.5,vertices: indicesConvertor(arr)});
					CreateObj({name:"body3",color:GREY_COLOR,density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7, y:4,vertices: indicesConvertor(arr)});
					CreateObj({name:"body3",color:GREY_COLOR,density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7 , y:6.5,vertices: indicesConvertor(arr)});
					
					CreateObj({name:"body3",color:GREY_COLOR,density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7 , y:10,vertices: indicesConvertor(arr)});
					
					CreateObj({name:"body3",color:GREY_COLOR,density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7 , y:12.5,vertices: indicesConvertor(arr)});
					CreateObj({name:"body3",color:GREY_COLOR, density:10,type: "static" , shape:"edge" , x:(canvasWidth/2.0)/ScaleFactor-7 , y:15,vertices: indicesConvertor(arr)});

					CreateObj({name:"body0",color:GREY_COLOR, density:5.0 , type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-6.85 , y:2.5 , width:0.3 , height:2.5});
					CreateObj({name:"body0",color:GREY_COLOR, density:5.0 , type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-6.85 , y:5 , width:0.3 , height:2.5});
					CreateObj({name:"body0",color:GREY_COLOR, density:5.0 , type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-6.85 , y:11 , width:0.3 , height:2.5});
					CreateObj({name:"body0",color:GREY_COLOR, density:5.0 , type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-6.85 , y:12.5 , width:0.3 , height:2.5});
					CreateObj({name:"body0",color:GREY_COLOR, density:5.0 , type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-6.85 , y:15 , width:0.3 , height:2.5});

					CreateObj({name:"body0",color:GREY_COLOR,type:"static" , shape:"box" , x:canvasPosition_X , y:10 , width:0.3 , height:20});

					//Childs
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor+2.7, y :9.5,radius:0.5,restitution:0,friction:0}); 
										
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor+6.5 , y :9.5 ,radius:0.5,restitution:0,friction:0});
				
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor+10 , y :9.5,radius:0.5,restitution:0,friction:0});
					
					
					this.bottomPos = child_3.GetPosition().y;
					//CreateObj({color:ORANGE_COLOR,type:"static" , shape:"box" , x:HomePos.x/ScaleFactor+4 , y:bottomPos+0.8 , width:0.4 , height:0.4});

					
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {
				 /* var child_1_Impposible = false;
				  var child_2_Impposible = false;
				  var child_3_Impposible = false;
				  
				  if(numOfBalls == 0)
				  {
					    if(child_1 == null || ( child_1.GetPosition().x > HomePos.x/ScaleFactor + 4))
						{
							child_1_Impposible = true;
						}
						
						if(child_2 == null || ( child_2.GetPosition().x > HomePos.x/ScaleFactor + 4))
						{
							child_2_Impposible = true;
						}
						
						if(child_3 == null || ( child_3.GetPosition().x > HomePos.x/ScaleFactor + 4))
						{
							child_3_Impposible = true;
						}
								
					
						if( child_1_Impposible && child_2_Impposible && child_3_Impposible )
						{
							endLevel();
						}
				  }*/
			  }
		}
		Level_1_6.startLevel();