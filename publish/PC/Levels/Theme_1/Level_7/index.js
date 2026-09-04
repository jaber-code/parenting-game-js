var Level_1_7 = {
			timerSpeed:0.04,

			startLevel: function() 
			{			
					numOfBalls = 4;
					HomePos = {"x": (canvasWidth/2.0)-120, "y":canvasHeight-58};
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
					var angle = 0;
					var arr = [[]];
					for (var i = 0; i <= 45; i++) 
					{
						arr[i] = [0];
						arr[i][0] = 7.7 * Math.cos(angle/360+15) + 14;
						arr[i][1] = 7 * Math.sin(angle/360+15) + 7;

						angle += 45;
					}
					
					var edge = CreateObj({color:"#777777",lineThickness:4,  isStroke:true,density:100,type:"static" ,x:0,y:0, shape:"edge" , vertices: arr});

					CreateObj({name:'circ',color:"#777777",type:"static" ,maskBits:(~0xFFFF), shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor-3, y :5.0,radius:0.5,restitution:0,friction:0}); 
					CreateObj({name:'circ',color:"#777777",type:"static" ,shape:"circle" ,maskBits:(~0xFFFF),  x : (canvasWidth/2.0)/ScaleFactor+4.6, y :5.0,radius:0.5,restitution:0,friction:0}); 

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
						
					CreateFloor();
					var ww = 0.9;
					var hh = 0.4;
					
					var anc1 = new b2Vec2(1.2, 0);

					
					var b1 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor+1.0 , y:HomePos.y/ScaleFactor-6 +1,vertices:[[-0.2,0.5],[0.2,-0.5],[0.6,-0.5],[0.2,0.5]]});
					
					//var b1 =CreateObj({name:"dd",density:1,color:'red',fixedAngle:false ,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+1.0 , y:HomePos.y/ScaleFactor-6 , width:ww,height:hh});   
					var b2 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+4.5 , y:HomePos.y/ScaleFactor-6+1 , width:ww,height:hh});
					createRevoluteJoint(b2 , b1 , new b2Vec2(-1.2, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);

					var b3 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+4.65, y:HomePos.y/ScaleFactor-6 +1, width:ww,height:hh});
					createRevoluteJoint(b2 , b3 , new b2Vec2(1.3, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);
					
					var b4 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+4.8 , y:HomePos.y/ScaleFactor-6+1 , width:ww,height:hh});
					createRevoluteJoint(b3 , b4 , new b2Vec2(1.4, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);

					var b5 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+4.95 , y:HomePos.y/ScaleFactor-6 +1, width:ww,height:hh});
					createRevoluteJoint(b4 , b5 , new b2Vec2(1.5, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);

					var b6 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+5.1, y:HomePos.y/ScaleFactor-6 +1, width:ww,height:hh});
					createRevoluteJoint(b5 , b6 , new b2Vec2(1.4, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);
					
					var b7 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+5.25 , y:HomePos.y/ScaleFactor-5+1 , width:ww,height:hh});
					createRevoluteJoint(b6 , b7 , new b2Vec2(1.3, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);
					
					
					var b8 =CreateObj({name:"dd",density:1,color:ORANGE_COLOR,fixedAngle:false ,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor+9 , y:HomePos.y/ScaleFactor-6+1 , vertices:[[0.2,-0.5],[0.6,0.5],[0.2,0.5],[-0.2,-0.5]]});
					//var b8 =CreateObj({name:"dd",density:1,color:'red',fixedAngle:false ,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+9 , y:HomePos.y/ScaleFactor-6 , width:ww,height:hh});    vertices:[[-0.2,-0.5],[0.2,0.5],[0.6,0.5],[0.2,-0.5]]});
					createRevoluteJoint(b7 , b8 , new b2Vec2(0.7, 0)  , new b2Vec2(0, 0),false , 0,0,ORANGE_COLOR);

					//Childs
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor-0, y :5.5,radius:0.5,restitution:0,friction:0}); 
										
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor-0, y :5.5 ,radius:0.5,restitution:0,friction:0});
				
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor-0 , y :5.5,radius:0.5,restitution:0,friction:0});				

			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {
					if(numOfBalls == 0)
					{
						var IsChild_1_Impossible = false;
						var IsChild_2_Impossible = false;
						var IsChild_3_Impossible = false;
						
						for(var i=1;i <= 3;i++)
						{
							velocitiesSum = 0;
							if(window["child_"+i] != null)
							{
								velocitiesSum += window["child_"+i].m_linearVelocity.x;
								velocitiesSum += window["child_"+i].m_linearVelocity.y;
								
								//alert(i+":   "+Math.abs(velocitiesSum));
								if( Math.abs(velocitiesSum) < 0.6)
								{
									
									switch(i)
									{
										case 1:
											IsChild_1_Impossible = true;
										break;
										case 2:
											IsChild_2_Impossible = true;
										break;
										case 3:
											IsChild_3_Impossible = true;
										break;
									}
								}
							}
							else
							{
								switch(i)
								{
									case 1:
										IsChild_1_Impossible = true;
									break;
									case 2:
										IsChild_2_Impossible = true;
									break;
									case 3:
										IsChild_3_Impossible = true;
									break;
								}
								//window["IsChild_"+i+"_Impossible"] = true;
								
							}
						}
						
						//alert(IsChild_1_Impossible && IsChild_2_Impossible && IsChild_3_Impossible);
						
						if(IsChild_1_Impossible && IsChild_2_Impossible && IsChild_3_Impossible)
						{
							endLevel();
							return;
						}
					}
			  }
		}
		Level_1_7.startLevel();
		
		