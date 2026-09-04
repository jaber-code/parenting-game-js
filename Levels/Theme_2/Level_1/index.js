var Level_2_1 = {
			timerSpeed:0.04,
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-37};
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
				  //Pink
					CreateObj({name:"body0",color:'#e55ea2', type:"static" , shape:"box" , x:HomePos.x/ScaleFactor+2.8 , y:HomePos.y/ScaleFactor-6 , width:10 , height:0.4});
					CreateObj({name:"body0",color:'#e55ea2', type:"static" , shape:"circle" , x:HomePos.x/ScaleFactor+7-9.2 , y:HomePos.y/ScaleFactor-6 , radius:0.27});
					//CreateObj({name:"body0",color:'#777777',fixedAngle:false , mass:0 , density:5.0 , type:"static" , shape:"circle" , x:HomePos.x/ScaleFactor+7+1.8, y:HomePos.y/ScaleFactor-6 , radius:0.2});
					
					//goal = CreateObj({name:"Goal",density:10,color:'white',fixedAngle:false ,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor , y:15 , vertices:  [[-1.6,-1.0],[0,-3.5],[1.6,-1.0] ,[1.6,1],[-1.6,1]]});
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);

					drawCirclePath(HomePos.x/ScaleFactor-4.3 ,HomePos.y/ScaleFactor-12 ,1.7 ,1.7 ,21,3,"#777777");
					//drawCirclePath(HomePos.x/ScaleFactor+4 ,HomePos.y/ScaleFactor-12 ,1.5 ,1.5 ,22,4,"#777777");
					drawCirclePath(HomePos.x/ScaleFactor+9.3 ,HomePos.y/ScaleFactor-5.6 ,1.7 ,1.7 ,22,5.0,"#777777");
					drawCirclePath(HomePos.x/ScaleFactor-3.8 ,HomePos.y/ScaleFactor-3.6 ,1.8 ,1.8 ,16,1.3,"#777777");
					
					//drawCirclePath(HomePos.x/ScaleFactor+2 ,HomePos.y/ScaleFactor-2.6 ,2.7 ,2.7 ,22,5.0,"#777777");   //0, 0, 3, 41, 10, 59, 21, 72, 35, 82, 57, 89, 106, 90 //0, 0, 6, 41, 25, 72, 59, 89, 104, 90, 114, 89//    0, 0, 3, 26, 7, 43, 14, 54, 29, 69, 44, 77, 124, 77
					
					drawCirclePath(HomePos.x/ScaleFactor-10 ,HomePos.y/ScaleFactor-8 ,2.6 ,2.6 ,26,1.2,"#2277ff");
		 
					//CreateObj({name:"body0",color:GREEN_COLOR, type:"static" , shape:"box" , x:HomePos.x/ScaleFactor-2.5 , y:5.0 , width:10 , height:0.4});

					drawCirclePath(HomePos.x/ScaleFactor+1.9 ,5.0 ,4.8 ,1.5 ,15,7.48,GREEN_COLOR);

					
					//CreateObj({color:"#22dd33",isStroke:true,type:"static" , x:HomePos.x/ScaleFactor-2.5 , y:5.0 ,lineThickness:8, shape:"edge" , vertices: indicesConvertor([0, 0, 18, 21, 44, 36, 79, 48, 178, 48])});
					
					/*
					var shape1 = { shape:"poly" , vertices: flipArr([[0,0],[0.5,0],[0.5,1.5],[0,1.5]],false , false)};    
					var shape2 = { shape:"poly" , vertices: flipArr([[0,1.5],[0.5,1.5],[1.5,2.0],[1.5,2.5]] ,false , false)}; 
					var shape3 = { shape:"poly" , vertices: flipArr([[1.5,2.0],[3.5,2.0],[3.5,2.5],[1.5,2.5]] ,false , false)};
					*/
					
					//0, 0, 15, 40, 46, 69, 124, 69
					//CreateObj({density:10,color:'green',fixedAngle:false ,type: "static" , shape:"complex" ,x:HomePos.x/ScaleFactor-2 , y:5 , Shapes:  [shape1,shape2,shape3]});  

					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+2 , y : 5.5,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor-10  , y : 9,radius:0.5,restitution:0,friction:0});
					
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor+6  , y : 6,radius:0.5,restitution:0,friction:0});
	 
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {

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
		Level_2_1.startLevel();
		
		