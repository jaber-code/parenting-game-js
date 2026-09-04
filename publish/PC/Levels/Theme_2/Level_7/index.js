var Level_2_7= {
			timerSpeed:0.04,
			
			seso_1:null,
			seso_2:null,


			startLevel: function() 
			{			
					numOfBalls = 1;
					HomePos = {"x": (canvasWidth/2.0)+320, "y":canvasHeight-32};
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
				
				this.seso_1 = null;
				this.seso_2 = null;

				numOfBalls = 1;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					
					//CreateFloor();
					
					this.seso_1 = this.createSeso(HomePos.x/ScaleFactor-18,HomePos.y/ScaleFactor-7.5,5.0,0.42);
					this.seso_2 = this.createSeso(HomePos.x/ScaleFactor-8,HomePos.y/ScaleFactor-7.5,5.0,0.42); 
					
					creatFan(HomePos.x/ScaleFactor-13.1,canvasHeight/ScaleFactor-10.8,6,0.4);
					creatFan(HomePos.x/ScaleFactor-4.2,HomePos.y/ScaleFactor-5.2 ,2.0,0.4,true , -45 , 25 , 400, ORANGE_COLOR);
					
					var wheel =CreateObj({name:"wheel",density:30,restitution:0.83,color:ORANGE_COLOR,fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:HomePos.x/ScaleFactor-13.1 , y:HomePos.y/ScaleFactor-10 , radius:0.5});

					create2Edges(HomePos.x/ScaleFactor-2.8 , canvasHeight/ScaleFactor-4.6 , 1.5 , 0.4 , 1.0 ,0.8, 0.2);
					
					
					var arr =[0, 0, -466, 2, -515, -17, -548, -42, -577, -82, -607, -138, -618, -180, -620, -225, -620, -268, -648, -269, -648, 28, 0, 28];
					CreateObj({color:'#777777',isStroke:false,type:"static" , shape:"edge" , vertices: indicesConvertor(arr) , x:HomePos.x/ScaleFactor-3,y:HomePos.y/ScaleFactor});


					var cage = this.createCage(HomePos.x/ScaleFactor-9,5,false,30);
					var cBox = CreateObj({color:'#777777',fixedAngle:false ,type: "static" , x:HomePos.x/ScaleFactor-9,y:5,shape:"circle" ,radius:0.1});
					createRevoluteJoint(cage , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0) );
					
					cage = this.createCage(HomePos.x/ScaleFactor-21,5,true,30);
					cBox = CreateObj({color:'#777777',fixedAngle:false ,type: "static" , x:HomePos.x/ScaleFactor-21,y:5,shape:"circle" ,radius:0.1});
					createRevoluteJoint(cage , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0) );
					
					//CreateObj({name:"box1",density:1,color:'#777777',fixedAngle:true ,type:"static" , shape:"circle" ,x:HomePos.x/ScaleFactor-21.6 , y:5 ,radius:0.3});
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-9 , y :4.2,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006  ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-21  , y :4.2,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-14.1 , y : HomePos.y/ScaleFactor,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					
			  },
			  canvasDrawForground: function()
			  {
					ctx.fillStyle = GREY_COLOR;
					ctx.beginPath();
						ctx.arc(this.seso_1.GetPosition().x*ScaleFactor,this.seso_1.GetPosition().y*ScaleFactor,13,0,2*Math.PI);
						ctx.arc(this.seso_2.GetPosition().x*ScaleFactor,this.seso_2.GetPosition().y*ScaleFactor,13,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.fillStyle = ORANGE_COLOR;
					ctx.beginPath();
						ctx.arc(this.seso_1.GetPosition().x*ScaleFactor,this.seso_1.GetPosition().y*ScaleFactor,7,0,2*Math.PI);
						ctx.arc(this.seso_2.GetPosition().x*ScaleFactor,this.seso_2.GetPosition().y*ScaleFactor,7,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
			  },
			  createSeso:function(xPos,yPos,wid,hei)
			  {
					var shape_1 = {shape:"poly" , vertices:[ [-0.95,-0.8] , [0.95,-0.8] , [0.95,-0.4] , [-0.95,-0.4]]};//width
					var shape_2 = {shape:"poly" , vertices:[ [-0.24,-0.4] , [0.24,-0.4] , [0.24,0.2] , [-0.24,0.2]]};//height

					var kafe1 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"complex" ,x:xPos+wid/2 , y:yPos-0.9  , Shapes:[shape_1,shape_2]});
					var kafe2 = CreateObj({density:10,color:GREY_COLOR,fixedAngle:true ,type: "dynamic" , shape:"complex" ,x:xPos-wid/2 , y:yPos-0.9  ,Shapes:[shape_1,shape_2]});

					var stick = CreateObj({color:ORANGE_COLOR,fixedAngle:false , mass:0 , density:4.0 , type:"dynamic" , shape:"box" , x:xPos , y:yPos ,width:wid,height:hei});
					var center = CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:xPos , y:yPos  , width:0.4 , height:0.4});

					createRevoluteJoint(kafe1 , stick , new b2Vec2(0,0) , new b2Vec2(-wid/2,0));
					createRevoluteJoint(kafe2 , stick , new b2Vec2(0,0) , new b2Vec2(wid/2,0));
				
					createRevoluteJoint(center , stick , new b2Vec2(0,0) , new b2Vec2(0,0));
					return stick;

			  },
			  createCage : function(xPos,yPos,flipped , din, IsFixedAngle)
			  {
					if(!flipped)
					{
							//var arr = [-31.5, 25.5, -31.5, 15.5, 31.5, -25.5, 31.5, -14.5];
							var shape1 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"box" , width:1.9,height:0.4};
							var shape2 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: [[-0.95,-1.6],[-0.55,-1.6],[-0.55,0],[-0.95,0]] };
							//var shape3 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: displaceArr( indicesConvertor(arr),0.15,-2.0)};
							var shape3 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: [[-0.95,-2],[0.7,-2],[0.7,-1.6],[-0.95,-1.6]]};

							//var shape4 = {isStroke:true,density:200,fixedAngle:true ,type:"kin" , shape:"poly" , vertices: displaceArr( [[0,0],[0.4,0.4],[0,0.4]],6,-2.0)};
							return co = CreateObj({color:ORANGE_COLOR,isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3]});
					}
					else
					{
							//var arr = [-31.5, 25.5, -31.5, 15.5, 31.5, -25.5, 31.5, -14.5];
							var shape1 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"box" , width:1.9,height:0.4};
							var shape2 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: flipArr([[-0.95,-1.6],[-0.55,-1.6],[-0.55,0],[-0.95,0]],true, false) };
							//var shape3 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: flipArr(displaceArr( indicesConvertor(arr),0.15,-2.0),true, false)};
							var shape3 = {color:"red",isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" , shape:"poly" , vertices: flipArr([[-0.95,-2],[0.7,-2],[0.7,-1.6],[-0.95,-1.6]],true,false)};

							//var shape4 = {isStroke:true,density:200,fixedAngle:true ,type:"kin" , shape:"poly" , vertices: displaceArr( [[0,0],[0.4,0.4],[0,0.4]],6,-2.0)};
							return co = CreateObj({color:ORANGE_COLOR,isStroke:true,density:din,fixedAngle:IsFixedAngle ,type:"kin" ,x:xPos,y:yPos, shape:"complex",Shapes:[shape1,shape2,shape3]});
					}
			  }
		}
		Level_2_7.startLevel();
		
		