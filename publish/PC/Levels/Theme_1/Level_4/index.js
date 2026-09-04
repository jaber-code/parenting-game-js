var Level_1_4 = {
			timerSpeed:0.04,
			
			Icon_1_Img:null,
			Icon_2_Img:null,
			Icon_3_Img:null,

			startLevel: function() 
			{			
					numOfBalls = 6;
					HomePos = {"x": (canvasWidth/2.0)-260, "y":canvasHeight-250};
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


				numOfBalls = 6;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					this.Icon_1_Img = new Image();
					this.Icon_1_Img.src = "images/Icon_read.png";
					
					this.Icon_2_Img = new Image();
					this.Icon_2_Img.src = "images/Icon_TeethBrush.png";
					
					this.Icon_3_Img = new Image();
					this.Icon_3_Img.src = "images/Iocn_milk.png";
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();	
						
					CreateObj({density:10,color:'#777777',fixedAngle:true ,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-1.5 , y:HomePos.y/ScaleFactor+5.5 , width:7 , height:10});
					CreateObj({density:10,color:'#777777',fixedAngle:true ,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+1 , y:HomePos.y/ScaleFactor-7 , width:13 , height:0.4});

					var arr = [0, 0, 3, 11, 7, 20, 15, 32, 27, 42, 41, 48, 56, 51, 80, 52, 95, 49, 110, 43, 110, 228, 0, 228, 0, 1];
					
					CreateObj({name:'place_3',color:GREY_COLOR,type:"static" , shape:"edge" , vertices: indicesConvertor(arr) , x:HomePos.x/ScaleFactor+2 ,y:HomePos.y/ScaleFactor+1.4-1});
					
					CreateObj({name:'place_2',color:GREY_COLOR,type:"static" , shape:"edge" , vertices: indicesConvertor(arr) , x:HomePos.x/ScaleFactor+5.675 ,y:HomePos.y/ScaleFactor+2.9-1});

					CreateObj({name:'place_1',color:GREY_COLOR,type:"static" , shape:"edge" , vertices: indicesConvertor(arr) , x:HomePos.x/ScaleFactor+9.35 ,y:HomePos.y/ScaleFactor+4.4-1});

					//Childs
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : HomePos.x/ScaleFactor+4, y :7.9,radius:0.5,restitution:0,friction:0}); 
										
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x :HomePos.x/ScaleFactor+8.0 , y :9.9 ,radius:0.5,restitution:0,friction:0});
				
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : HomePos.x/ScaleFactor+11.5, y :11.9,radius:0.5,restitution:0,friction:0});
					
			  },
			  startCollide:function(contact)
			  {
				
			  },
			  
			  checkIfWin: function()
			  {		
						
			  },
			  canvasDrawForground: function()
			  {
					ctx.fillStyle = "#add8e6";
					ctx.beginPath();
						ctx.arc(250,320,22,0,2*Math.PI);
						ctx.arc(366,370,22,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					
					ctx.beginPath();
						ctx.arc(480,415,22,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					
					if(this.Icon_1_Img)
						ctx.drawImage(this.Icon_1_Img, 232 ,302, 90*0.4 , 93*0.4 );
					if(this.Icon_2_Img)
						ctx.drawImage(this.Icon_2_Img, 351 ,349.5, 90*0.4 , 93*0.4 );
					if(this.Icon_3_Img)
						ctx.drawImage(this.Icon_3_Img, 463 ,397, 90*0.4 , 93*0.4 );
			  },
			  createTowerSeso:function(xPos,yPos,wid,hei)
			  {
					var tower = CreateObj({name:"Tower1",color:'#777777',fixedAngle:false , mass:0 , density:1.0 , type:"static" , shape:"poly" , x:xPos , y:yPos ,vertices:[[-(wid/2),0],[-(wid/2),-hei],[0,-(hei+1)],[(wid/2),-hei],[(wid/2),0]]});
			
					var shape1 = { shape:"box" , width:4.6,height:0.3};
					var shape2 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.1],[-2.3+4.2,-0.8],[-1.9+4.2,-0.8],[-1.9+4.2,-0.1]]};
					//var shape3 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.2],[-1.9+4.2,-0.6],[-1.9+4.2,-0.2]]};
					var seso1 = CreateObj({name:"seso1",color:'#777777',fixedAngle:false , mass:0 , density:3.0 , type:"dynamic" , shape:"complex" , x:xPos , y:yPos ,Shapes:[shape1,shape2]});
					
					CreateObj({color:'rgba(0,0,0,1)',fixedAngle:false , mass:0 , density:0.0 , type:"static" , shape:"box" , x:xPos , y:(yPos - hei) , width:1,height:1});
					var rope = createRevoluteJoint(tower , seso1 , new b2Vec2(0,-(hei+1)) , new b2Vec2(0,0));
			  }
		}
		Level_1_4.startLevel();
		
		