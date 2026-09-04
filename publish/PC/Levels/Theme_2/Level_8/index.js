var Level_2_8= {
			timerSpeed:0.035,

			startLevel: function() 
			{			
					numOfBalls = 4;
					HomePos = {"x": (canvasWidth/2.0)+300, "y":canvasHeight-58};
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

				numOfBalls = 4;
				sandLevel = 0;	
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  
				  
				  
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();
			
					create2Edges(HomePos.x/ScaleFactor-15.9,  HomePos.y/ScaleFactor-3.8 ,1 , 0.4 , 3.4 ,1.8, 0.2);
					create2Edges(HomePos.x/ScaleFactor-8.5,  HomePos.y/ScaleFactor-1.9 ,1.0 , 0.4 , 4 ,0.5, 0.2);
					
					create2Edges(HomePos.x/ScaleFactor-8.2,  HomePos.y/ScaleFactor-5 ,1.5 , 0.4 , 4 ,2.0, 0.2);
					create2Edges(HomePos.x/ScaleFactor-10,  HomePos.y/ScaleFactor-10 ,5 , 0.4 , 6 ,3.3, 0.2);

					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-11.4 , y:HomePos.y/ScaleFactor-1.8 , width:2.0,height:0.4 });
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-20 , y:HomePos.y/ScaleFactor-4 , width:4,height:0.4 });
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-20 , y:HomePos.y/ScaleFactor-10 , width:4,height:0.4 });

					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-11.2 , y:HomePos.y/ScaleFactor-5 , width:1.5,height:0.4 });
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-16 , y:HomePos.y/ScaleFactor-10 , width:1.5,height:0.4 });
					
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-16 , y:HomePos.y/ScaleFactor-12 , width:1.5,height:0.4 });
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-17.2 , y:HomePos.y/ScaleFactor-2.9 , width:1.6,height:0.4 });
					CreateObj({color:'#777777',type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-9.6 , y:HomePos.y/ScaleFactor-0.85 , width:1.6,height:0.4 });

					var myImage = new Image();
					myImage.src = 'images/gift.png';
					CreateObj({name:"present",image:myImage,maskBits:(0xFFFF & ~0x0800),density:35,restitution:0,color:'#555555',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor-18.5 , y:HomePos.y/ScaleFactor-11 , width:1.0,height:1.0 });
					CreateObj({name:"present",image:myImage,maskBits:(0xFFFF & ~0x0800),density:35,restitution:0,color:'#555555',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor-11.0 , y:HomePos.y/ScaleFactor-7 , width:1.0,height:1.0 });
					CreateObj({name:"present",image:myImage,maskBits:(0xFFFF & ~0x0800),density:35,restitution:0,color:'#555555',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor-20.5 , y:HomePos.y/ScaleFactor-7 , width:1.0,height:1.0 });

					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-16.77,y:HomePos.y/ScaleFactor-3.1 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-17.17,y:HomePos.y/ScaleFactor-3.1 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-17.57,y:HomePos.y/ScaleFactor-3.1 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-17.97,y:HomePos.y/ScaleFactor-3.1 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-9.20,y:HomePos.y/ScaleFactor-1.01 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-9.60,y:HomePos.y/ScaleFactor-1.01 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-10.00,y:HomePos.y/ScaleFactor-1.01 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					CreateObj({name: "Border",color:RED_COLOR ,categoryBits: 0x0800,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-10.40,y:HomePos.y/ScaleFactor-1.01 , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
					
					
					//CreateObj({name:"shok",density:40,restitution:0,color:'#555555',fixedAngle:true ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor-10.8 , y:HomePos.y/ScaleFactor-3 , width:1.5,height:4.0 });

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-19 , y :HomePos.y/ScaleFactor-4,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-16.5  , y :HomePos.y/ScaleFactor-10,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-8.7 , y : HomePos.y/ScaleFactor-7,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureA().GetBody().details.name.indexOf("present") != -1 && contact.GetFixtureB().GetBody().details.name.indexOf("Parent") != -1)
					{
						playSound("Hit_1");
						
					}
			  },
			  
			  checkIfWin: function()
			  {

			  }
		}
		Level_2_8.startLevel();
		
		