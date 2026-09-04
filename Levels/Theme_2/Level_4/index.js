var Level_2_4= {
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
				  
				  playSound("BoxesFall");
					//goal = CreateObj({name:"Goal",density:10,color:'white',fixedAngle:false ,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor , y:15 , vertices:  [[-1.6,-1.0],[0,-3.5],[1.6,-1.0] ,[1.6,1],[-1.6,1]]});
			
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
	
					var arr_BoxesPos = [{x:HomePos.x/ScaleFactor-8,y:HomePos.y/ScaleFactor-11} ,
										{x:HomePos.x/ScaleFactor,y:HomePos.y/ScaleFactor-11.5} ,
										{x:HomePos.x/ScaleFactor+7,y:HomePos.y/ScaleFactor-11} ,
										{x:HomePos.x/ScaleFactor+5,y:HomePos.y/ScaleFactor-7} ,
										{x:HomePos.x/ScaleFactor+8,y:HomePos.y/ScaleFactor-4} ,
										{x:HomePos.x/ScaleFactor-5,y:HomePos.y/ScaleFactor-4} ,
										{x:HomePos.x/ScaleFactor-6.5,y:HomePos.y/ScaleFactor-8} ,
										{x:HomePos.x/ScaleFactor-10,y:HomePos.y/ScaleFactor-6}];
										

					for(var i=0;i<arr_BoxesPos.length;i++)
					{
						if(i<arr_BoxesPos.length-1)
							CreateObj({name:"body0",color:'#777777', mass:0 , density:5.0 , type:"static" , shape:"box" , x:arr_BoxesPos[i].x , y:arr_BoxesPos[i].y , width:3 , height:0.4});
						
						CreateObj({name:"yellowBox",categoryBits:0x8000,color:'#eecc11', mass:0 , density:5.0 , type:"dynamic" , shape:"box" , x:arr_BoxesPos[i].x , y:arr_BoxesPos[i].y-1.9 , width:1.2 , height:1.2});
					}
					create2Edges(arr_BoxesPos[arr_BoxesPos.length-1].x , arr_BoxesPos[arr_BoxesPos.length-1].y , 3 , 0.4 , 2 ,1.5 ,0.2);
					
					var rect = CreateObj({density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor-1.2,y:HomePos.y/ScaleFactor-7.0 , width:5.5 , height:0.35});
					var cBox = CreateObj({density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , x:HomePos.x/ScaleFactor-0.6,y:HomePos.y/ScaleFactor-7.0,shape:"circle" ,radius:0.16});
					s1 = createRevoluteJoint(rect , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0) , true, -60, 70);
					rect.ApplyForce(new b2Vec2(0, -2000),new b2Vec2(3, 0));
					
					
					rect = CreateObj({density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+3.2,y:HomePos.y/ScaleFactor-2.0 , width:3 , height:0.35});
					cBox = CreateObj({density:400,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , x:HomePos.x/ScaleFactor+4.5,y:HomePos.y/ScaleFactor-4.0,shape:"circle" ,radius:0.16});
					s1 = createRevoluteJoint(rect , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0) , true, 30, 30);
					rect.ApplyForce(new b2Vec2(0, 200),new b2Vec2(1, 0));
	
					var arrChildsPos = [];
					while(arrChildsPos.length <3)
					{
						p = Math.round( Math.random() * (arr_BoxesPos.length-1) );
						
						arrChildsPos.push(arr_BoxesPos[p]);
						arr_BoxesPos.splice(p,1);
					}
					
					
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',maskBits:(0xFFFF & ~0x8000) ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : arrChildsPos[0].x , y :arrChildsPos[0].y,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',maskBits:(0xFFFF & ~0x8000) ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : arrChildsPos[1].x  , y :arrChildsPos[1].y,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x8000),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : arrChildsPos[2].x  , y : arrChildsPos[2].y,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {

			  }
		}
		Level_2_4.startLevel();
		
		