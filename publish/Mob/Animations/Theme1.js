(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/whistle.mp3", id:"whistle"}
	]
};



// symbols:



(lib.UpperLip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52AFE2").s().p("AhkAxQgLgNAEgTQADgRAPgNQARgOAWAAIAmgFQAMgCAYgHIAggKIAcgKQAQgDAHAPQAKAYgbAeQgkAohEANQgYAFgYAAIgCAAQgZAAgLgOg");
	this.shape.setTransform(11,6.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,12.7);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D469").s().p("AAmhxQBUgwBIgKQiqAvh8CYQhABNgdBDQA/i9Cohgg");
	this.shape.setTransform(-27.5,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AhDgBQAggRAkAAQAkAAAfAPIgKAUQgbgMgeAAQgeAAgcAOg");
	this.shape_1.setTransform(-1.5,-10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AhvBwQgugvAAhBQAAhAAugvQAvguBAAAQBBAAAvAuQAuAvAABAQAABBguAvQgvAuhBAAQhAAAgvgugAheheQgnAoAAA2QAAA3AnAoQAoAnA2AAQA3AAAognQAngoAAg3QAAg2gngoQgogng3AAQg2AAgoAng");
	this.shape_2.setTransform(17.6,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AhvBwQgvgvAAhBQAAhAAvgvQAvguBAAAQBBAAAvAuQAuAvAABAQAABBguAvQgvAuhBAAQhAAAgvgugAheheQgnAoAAA2QAAA3AnAoQAoAnA2AAQA4AAAngnQAogoAAg3QAAg2gogoQgngng4AAQg2AAgoAng");
	this.shape_3.setTransform(-20.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8EC74C").s().p("AlhFiQiTiSAAjQQAAjOCTiTQCTiTDOAAQDQAACSCTQCTCTAADOQAADQiTCSQiSCTjQAAQjOAAiTiTg");
	this.shape_4.setTransform(-1.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAhUIAACp");
	this.shape_5.setTransform(25.2,35.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,100.3,100.3);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D469").s().p("AAmhxQBUgwBIgKQiqAvh8CYQhABNgdBDQA/i9Cohgg");
	this.shape.setTransform(-27.5,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AhDgBQAggRAkAAQAkAAAfAPIgKAUQgbgMgeAAQgeAAgcAOg");
	this.shape_1.setTransform(-1.5,-10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AhvBwQgugvAAhBQAAhAAugvQAvguBAAAQBBAAAvAuQAuAvAABAQAABBguAvQgvAuhBAAQhAAAgvgugAheheQgnAoAAA2QAAA3AnAoQAoAnA2AAQA3AAAognQAngoAAg3QAAg2gngoQgogng3AAQg2AAgoAng");
	this.shape_2.setTransform(17.6,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292929").s().p("AhvBwQgvgvAAhBQAAhAAvgvQAvguBAAAQBBAAAvAuQAuAvAABAQAABBguAvQgvAuhBAAQhAAAgvgugAheheQgnAoAAA2QAAA3AnAoQAoAnA2AAQA4AAAngnQAogoAAg3QAAg2gogoQgngng4AAQg2AAgoAng");
	this.shape_3.setTransform(-20.6,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8EC74C").s().p("AlhFiQiTiSAAjQQAAjOCTiTQCTiTDOAAQDQAACSCTQCTCTAADOQAADQiTCSQiSCTjQAAQjOAAiTiTg");
	this.shape_4.setTransform(-1.3,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAhUIAACp");
	this.shape_5.setTransform(25.2,35.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,100.3,100.3);


(lib.shadow1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("AoOBVQjZgjgBgyQABgfBYgZQAygPBPgNQDbgjEzgBQE0ABDaAjQApAGAiAIQCPAfABAnQAAAyjbAjQjaAkk0AAQkzAAjbgkg");
	this.shape.setTransform(74.5,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149,24.2);


(lib.MusicalNote2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2E2C").s().p("AhjDoQgVgDgPgNQgRgOAAgUQgCgXAPgWQAPgUAWgKQAVgMAagDQAZgCAWAJQAPAFAEgcQADiEABioQAAgHAJgCQAIgBADAHIAPAaQAIAQAJAIQAIALASAUQAUAUAHAKIARAYQAJAOACANQANAigRApQgIAJgFgIQgFgHACgHQABgbgGgPQgIgigVgVQgNgPgIgGQgOgMgMAFQgIAGgBAMIAAAUIgCDsQgBAog2AeQgfASgdAAQgKAAgKgCg");
	this.shape.setTransform(15.4,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,47);


(lib.Mom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7B8D1").s().p("AA4ipQB/hHBrgPQj9BGi8DjQheBygsBkQBekZD7iQg");
	this.shape.setTransform(34.4,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF467E").s().p("AgkgfQAUAYAiAMQASAIAOACQgWAJhNAIg");
	this.shape_1.setTransform(90.2,101.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF467E").s().p("AgxAPIAggKQAigMAUgYIANA/QhNgIgWgJg");
	this.shape_2.setTransform(57.5,101.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF467E").s().p("AhOAoQg5gFgUgDIgkgFIgjgGIgggIIg5gOIgZgJIgngPIghgPIAiANIAnAOIA0ANQAKADAUAEIAhAHIAiAGIAkAEQAUAEA4ADIAUABICHgDICSgWIAhgHIAegEIA0gOIBLgWIhKAaIg0AOIgeAHIggAIIhHAOIhMAJIh1ADIgngBg");
	this.shape_3.setTransform(75.7,101.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF467E").s().p("Ag1AsQgggJghgcQgkghgUgRIgJgIQClAjDKggIgOAMIgfAhQgTATgPAJQgbARgpAHQgSADgRAAQgbAAgcgIgAC4gwIAAAAIAAAAg");
	this.shape_4.setTransform(73,110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF467E").s().p("AgwA2Qg+gDgugJIgBgDQAcgwANgRQAVgcAjAAQAkAAAYAXQAbgXAjAAQAkAAAWAbQAPARAWAxIAAAEQhTAMhOAAIgsgBg");
	this.shape_5.setTransform(73.6,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F280A6").s().p("AkeKnQiEg4hmhmQhmhmg4iEQg6iJAAiWQAAiUA6iJQA4iFBmhmQBmhmCEg4QCJg6CVAAQCVAACJA6QCFA4BmBmQBmBmA4CFQA6CJAACUQAACWg6CJQg4CEhmBmQhmBmiFA4QiJA6iVAAQiVAAiJg6g");
	this.shape_6.setTransform(73.8,70.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.3,147.6,147.5);


(lib.LowerLip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52AFE2").s().p("ABKBXIgPgKQgjgZg7AHIgOABQgWAAgRgYQgPgWgFgcQgEggAKgUQAMgYAaAAQAdAAAYAIQAeAKAdAUQATANAQAWQAPATAIAXQAHAUgGAUQgGAVgKAEIgFABQgFAAgHgEg");
	this.shape.setTransform(11.1,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,18.3);


(lib.Hearts = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F48374").s().p("AlYGVQlfkfg6jmQgbhIAAhJQAAijBzhyQByhzCiAAQChAABzBzQBwBxABCeQABieBxhxQByhzCiAAQCiAAByBzQBzByAACjQAABIgcBJIAAABQg6DlleEfQiyCRinBkQimhkiyiRg");
	this.shape.setTransform(78.1,65);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156.3,130);


(lib.Girl = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF467E").s().p("AgFBNIgUgEQgRgCgCADQADgHAAgLQAAgWgRgSQgGgHgJgDIATgfQAUgiASgMQAQgMATAIQAPAHALAQQAYAhADAZQAHAmgWAUQgRAPgaAAQgKAAgJgCg");
	this.shape.setTransform(39.5,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF467E").s().p("AgtAxQgSgTgMglQgFgTADgQQADgJAHgHQAHgIAJgDQAVgHAlAGIAlAFQgDAKACAJQAEAYARAOQAIAGAHACQgDgBgIANIgKATQgTAjgeAHIgJABQgWAAgXgZg");
	this.shape_1.setTransform(20.2,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF467E").s().p("AgOAvQgTgHgJgSIgBgCQgJgSAHgRQAGgTATgJQASgJARAHQATAGAJASIABACQAIASgGARQgHATgSAJQgKAFgLAAQgGAAgIgCg");
	this.shape_2.setTransform(29.8,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7B8D1").s().p("AAlhwQBUgvBIgKQipAvh8CWQg/BMgdBCQA/i6Cmhgg");
	this.shape_3.setTransform(26.7,32.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F280A6").s().p("AlaF6QiRiSAAjOQAAhHAVhHQgegTAAgjQAAgZASgSQARgSAagBQgkggAAgwQAAgtAgggQAgggAtAAQAKAAAPADQACgsAfgeQAggeAsAAQAaAAAWALQAWALAQAUQASgTAaAAQASAAAOAJQAPAJAIAPQAagDAZAAQDOAACRCRQCSCSAADMQAADOiSCSQiRCRjOAAQjMAAiSiRg");
	this.shape_4.setTransform(50.2,56.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3.9,100.4,104.8);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5E4F9").s().p("ACDB2QgsAMgqAXIghAVQhhhiiOAiQhGASg0AlQg/hAhwAZQg4ANgrAaQBDivCkg8QBRgeBEAGQBZhVBWAOQArAHAZAXQBrhEBjA3QAxAcAcAqQCeg7BrCRQA2BJAWBVQhegrhZAVQgcAHgXAMIgSALQhlhciMAkg");
	this.shape.setTransform(62.4,17.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,34.8);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5E4F9").s().p("Agdg+QAPgrAPgVQAigGASAEQg9A4gbBqQgOA2gBArQgJhtAehUg");
	this.shape.setTransform(5.4,13.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,26.3);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5E4F9").s().p("AAkApQgUhmg9g4IAngMQAOAXAPAtQAdBVgIBqQACgngKgyg");
	this.shape.setTransform(4.6,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,26.1);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5E4F9").s().p("AgIgTQgIhEgJg2QAEACASAMQAGgHAXgKQgSAXgCCZQAAA6ABA3QgEhAgLhkg");
	this.shape.setTransform(2.7,14.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,29.1);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5E4F9").s().p("AC7LKQghgIgogEQhQgHgfAXIAAAGIgDgDIgCADIAAgGQgfgXhQAHIhJAMQiaAbh4guQgmgPgdgUIgXgRQguh1hqgPQg1gHgsAQQBXhkA2neQAbjwAJjcQCJjaDyAOQCEAIBvA/QBxg/CDgIQDygOCIDaQAKDcAbDwQA3HeBWBkQgsgQg1AHQhqAPguB1QgeAdg8AXQhMAdhaAAQg0AAg4gKg");
	this.shape_1.setTransform(80,72.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160.1,144.9);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5E4F9").s().p("AhHG+QA4hcAvmuQAYjXANjGQAMDWgoGTQgUDKgVCgQgUgIgzgkg");
	this.shape_1.setTransform(7.3,49.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,98.1);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5E4F9").s().p("AgoCAQgpmTAMjWQAODGAYDXQAvGuA4BcQgzAkgUAIQgViggUjKg");
	this.shape_1.setTransform(7.3,49.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,98.1);


(lib.DadSide = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FC7F3").s().p("AA5ipQB+hIBsgPQj+BHi8DjQg8BIgtBPIgiBAQBfkbD8iPg");
	this.shape.setTransform(35.3,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AgDBxQgagCgigFQhRgNglgNQgkgMgNgVQgIgNgBgPQgBgRAIgIIANgNIAGgEQgEAGgCAJQgCAIABAFQADAVAUAHQAPAFATgCQAagEApgSQAigOAagQQASgLAggbQAigbASgLQAcgRAdgEQAkgEAqAaQASALAKAXQAGAQADAXIADAmQABAPgKAUQgLAUgOALQgHAFgNAEQgGABgDADIgKAEQgoAIgoACQgSACgVAAQgZAAgbgCg");
	this.shape_1.setTransform(125.3,92.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52AFE2").s().p("AkfKqQiFg5hmhmQhmhng5iEQg6iKAAiWQAAiVA6iJQA5iFBmhnQBnhmCEg5QCKg6CVAAQCWAACKA6QCEA5BnBmQBmBnA5CFQA6CJAACVQAACWg6CKQg5CFhmBmQhnBmiEA5QiKA6iWAAQiVAAiKg6g");
	this.shape_2.setTransform(74,74);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149.4,148.1);


(lib.DadPiece = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52AFE2").s().p("AgfgBIgBgCQAUAEAtgBIhAAEQABgEgBgBg");
	this.shape.setTransform(29.2,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52AFE2").s().p("AgoAAIAhAAQAhAAAPgDIgBACQgBABABAEg");
	this.shape_1.setTransform(10.9,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AAoAzIgIAAQgOAJgSAAQgQAAgOgJIgJAAIh4ApQgjAAgGgbQgCgIAAg5QAAg4ACgIQAGgbAjAAIB4AoIAEAAQARgMASAAQAUAAARAMIADAAIB5goQAhAAAHAbQACAIAAA4QAAA5gCAIQgHAbghAAg");
	this.shape_2.setTransform(20.4,9.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.7,18.6);


(lib.Dad = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FC7F3").s().p("AA4ipQB+hHBsgPQj+BGi7DjQheBygsBkQBekZD7iQg");
	this.shape.setTransform(35.2,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AAHBgIgHgCIgGACQg/AQhMAAQgrgBgygHQgagEghgIQhQgSgjgQQgigOgNgXQgHgNABgNQAAgRAJgKQAHgHAGgEIAGgDQgEAFgCAIQgDAJAAAHQACASAUAJQAOAGATgBQAbgBApgOQAlgOAZgMQATgKAkgYQAjgZATgJQAegQAdgBQAkgCAoAeQAKAHAHAJQAKgKAIgGQAogeAkACQAdABAeAQQATAJAkAZQAjAYATAKQAYAMAmAOQAqAOAbABQATABAOgGQATgJACgSQAAgHgDgJQgCgIgEgFIAGADIANALQAJAKABARQAAANgHANQgMAWgjAPQgYALghAJIg6AOQghAIgaAEQgyAHgrABQhLAAhAgQg");
	this.shape_1.setTransform(74.5,95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52AFE2").s().p("AkeKnQiEg4hmhmQhmhmg4iEQg6iJAAiWQAAiUA6iJQA4iFBmhmQBmhmCEg4QCJg6CVAAQCVAACJA6QCFA4BmBmQBmBmA4CFQA6CJAACUQAACWg6CJQg4CEhmBmQhmBmiFA4QiJA6iVAAQiVAAiJg6g");
	this.shape_2.setTransform(73.8,76.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.3,147.6,147.5);


(lib.Boy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AhGgBQAjgRAkAAQAlAAAgAQIgKATQgdgMgeAAQgeAAgeAOg");
	this.shape.setTransform(51.4,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwgAhghgQgpAoAAA4QAAA5ApApQAoAoA4AAQA5AAAogoQApgpAAg5QAAg4gpgoQgogpg5AAQg4AAgoApg");
	this.shape_1.setTransform(71,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwgAhghgQgpAoAAA4QAAA5ApApQAoAoA4AAQA5AAApgoQAogpAAg5QAAg4gogoQgpgpg5AAQg4AAgoApg");
	this.shape_2.setTransform(31.7,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8EC74C").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDVAACXCXQCXCXAADUQAADViXCXQiXCXjVAAQjUAAiXiXg");
	this.shape_3.setTransform(51.5,51.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103.1,103.1);


(lib.Boy1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0D469").s().p("AAmhyQBWgxBJgKQitAwh9CZQhBBOgeBEQBAi/Cqhhg");
	this.shape.setTransform(25.1,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8EC74C").s().p("AigCnQi/ANiKAcQA0i6CVhiQBhhAB5gVQABgTATgNQATgOAagBQAZABATAOQATANABAUQDkAdB8CsQA+BWARBRQkNhGl9AdgACUB/IAAAAIAAgCQABgIAAgLQgBgbgNgVQgeg4hegCIgVAAQheACgeA4QgMAVgCAbQAAAJABAKIAAACIABAAIAvgDQA1gDAuAAQBLABBJAFg");
	this.shape_1.setTransform(52.3,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#52AFE2").s().p("AlmFmQiUiVAAjRQAAjRCUiUQCViVDRAAQDRAACWCVQCUCUAADRQAADRiUCVQiWCVjRAAQjRAAiViVg");
	this.shape_2.setTransform(52.4,56);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.6,1.1,101.5,105.7);


(lib.UpperViel = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAYQgIgGgBgKQgFAHgKABQgJABgIgFQgHgGgCgIQgBgJAGgIQAGgIAKgBQAJgBAIAGQAHAGACAKQAFgHAKgBQAHgBAHAFIAHAIQABgHADgEQAGgHAJgCQAJgBAJAGQAHAFACAKQAAAHgFAIQgGAIgJABQgJABgIgFIgHgIQgBAHgDADQgFAIgKACIgCAAQgHAAgHgFg");
	this.shape.setTransform(98,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAYQgIgGgBgKQgGAHgJABQgKABgHgFQgIgGgBgIQgCgJAGgIQAGgIAJgBQAKgBAHAGQAJAGABAKQAFgHAKgBQAHgBAHAFQAEADADAFQABgGADgFQAGgHAJgCQAKgBAHAGQAIAFACAKQABAHgGAIQgGAIgJABQgKABgHgFQgEgDgDgFQAAAFgEAFQgGAIgJACIgCAAQgHAAgGgFg");
	this.shape_1.setTransform(62.6,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAYQgIgGgBgKQgGAHgJABQgKABgHgFQgIgGgCgIQAAgJAFgIQAFgIAKgBQAKgBAHAGQAJAGAAAKQAGgHAKgBQAGgBAJAFQADADACAFQABgGAEgFQAGgHAJgCQAJgBAIAGQAIAFABAKQACAHgGAIQgGAIgKABQgJABgIgFQgEgDgCgFQgBAFgDAFQgGAIgKACIgBAAQgHAAgGgFg");
	this.shape_2.setTransform(25.6,29.6);

	this.instance = new lib.Path();
	this.instance.setTransform(61.1,13.4,1,1,0,0,0,2.6,14.5);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(93.8,18.1,1,1,0,0,0,4.6,13);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(31,17.7,1,1,0,0,0,5.4,13.1);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(60.8,14.3,1,1,0,0,0,62.4,17.4);
	this.instance_3.alpha = 0.699;

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-3.2,124.8,36.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Boy2();
	this.instance.setTransform(0,51.6,1,1,0,0,0,51.5,103.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAhUIAACp");
	this.shape.setTransform(25.2,35.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-51.5,103.1,103.1);


(lib.LowerViel = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(126.7,92.2,1,1,0,0,0,7.3,49.1);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(32,92.2,1,1,0,0,0,7.3,49.1);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(80,72.5,1,1,0,0,0,80,72.4);
	this.instance_2.alpha = 0.699;

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160.1,144.9);


(lib.heartbeat = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Hearts();
	this.instance.setTransform(20.5,17,0.262,0.262,0,0,0,78.2,65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,34);


// stage content:
(lib.Final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		
			playSound("whistle");
	}
	this.frame_310 = function() {
		this.stop ();
		this.stop ();
		this.stop ();
		this.stop ();
		this.stop ();
		this.stop ();
		this.stop ();
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(259).call(this.frame_310).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("Egx5AhXMAAAhCtMBj0AAAMAAABCtg");
	var mask_graphics_310 = new cjs.Graphics().p("Egx5AhXMAAAhCtMBj0AAAMAAABCtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:330.2,y:184.2}).wait(258).to({graphics:mask_graphics_310,x:330.2,y:184.2}).wait(1));

	// Boy1
	this.instance = new lib.Boy1();
	this.instance.setTransform(416.1,292.2,0.32,0.299,0,0,0,51.5,107.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).to({regX:51.6,regY:107.4,scaleX:0.6,scaleY:0.6,x:455.3,y:245.4,alpha:1},5).to({scaleY:0.45,y:370.4},4).to({scaleY:0.59,y:370.5},4).wait(116));

	// Boy1Shadow
	this.instance_1 = new lib.shadow1();
	this.instance_1.setTransform(460.8,458.6,0.441,0.441,0,0,0,74.5,12.1);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({regY:12,scaleX:0.28,x:457,y:368.5},6).to({regY:12.1,scaleX:0.44,x:451.3,y:367.2},4).wait(119));

	// Boy2
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(387,295.7,0.243,0.243);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(323.5,206.7,0.6,0.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(324.1,373,0.6,0.462,0,0,0,-1,53.2);
	this.instance_4._off = true;

	this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).to({_off:true,scaleX:0.6,scaleY:0.6,x:323.5,y:206.7,alpha:1},6).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},6).to({_off:true,regX:-1,regY:53.2,scaleY:0.46,x:324.1,y:373},4).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},4).to({scaleY:0.59},5).wait(107).to({startPosition:0},0).wait(1));

	// Boy2Shadow
	this.instance_5 = new lib.shadow1();
	this.instance_5.setTransform(333.7,458.6,0.441,0.441,0,0,0,74.5,12.1);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({x:324.3,y:367.2},10).wait(113));

	// Girl
	this.instance_6 = new lib.Girl();
	this.instance_6.setTransform(387,304.3,0.287,0.287,0,0,0,49.3,106.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({scaleX:0.6,scaleY:0.57,x:269.6,y:287.9,alpha:1},4).to({regX:52.4,regY:109.9,scaleY:0.45,x:174.5,y:365.1},4).to({scaleY:0.57},5).wait(114));

	// GirlShadow
	this.instance_7 = new lib.shadow1();
	this.instance_7.setTransform(184,522.6,0.441,0.441,0,0,0,74.5,12.1);
	this.instance_7.alpha = 0.301;
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(184).to({_off:false},0).to({regY:12,scaleX:0.28,x:173.3,y:361.1},4).to({regY:12.1,scaleX:0.44,x:174.5,y:365.1},4).wait(119));

	// DadPiece
	this.instance_8 = new lib.DadPiece();
	this.instance_8.setTransform(256.5,-145.2,1,1,0,0,0,20.4,9.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(147).to({_off:false},0).to({rotation:30,x:256.4,y:193.9},2).to({rotation:0,x:246.9,y:295.8},4).to({rotation:-15,x:248.5},4).to({rotation:0,x:245.3},4).wait(20).to({x:269.3},3).to({x:301.3},2).to({x:295.7},5).to({x:295.4},2).to({x:249.7},1).to({x:244.5},2).to({x:232.5},6).wait(109));

	// UpperLip
	this.instance_9 = new lib.UpperLip();
	this.instance_9.setTransform(253,277.4,1,1,0,0,0,0,6.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({rotation:15},15).to({rotation:0},5).to({rotation:15},6).to({rotation:0},7).to({rotation:15},6).to({rotation:0},11).to({rotation:15},13).to({_off:true},1).wait(67).to({_off:false},0).to({x:309},5).to({regY:6.4,scaleX:0.99,scaleY:1.52,rotation:0,skewX:11.9,skewY:18.8,x:307.5,y:277.5},2).to({regX:0.1,scaleX:1.16,scaleY:1.76,skewX:13,skewY:17.3,x:308.2,y:277.6},2).to({regX:0,regY:6.3,scaleX:1,scaleY:1,rotation:15,skewX:0,skewY:0,x:309,y:277.4},3).to({_off:true},1).wait(117));

	// LowerLip
	this.instance_10 = new lib.LowerLip();
	this.instance_10.setTransform(251.1,288.3,1,1,0,0,0,4.7,9.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({rotation:-15},15).to({rotation:0},5).to({rotation:-15},6).to({rotation:0},7).to({rotation:-15},6).to({rotation:0},11).to({rotation:-15},13).to({_off:true},1).wait(67).to({_off:false},0).to({x:307.1},5).to({scaleX:1.37,scaleY:0.83,rotation:0,skewX:-11.9,skewY:-18.8,x:306},2).to({regY:9.2,scaleX:1.22,scaleY:0.9,skewX:-13,skewY:-17.3,x:306.4,y:288.4},2).to({regY:9.1,scaleX:1,scaleY:1,rotation:-15,skewX:0,skewY:0,x:307.1,y:288.3},3).to({_off:true},1).wait(117));

	// DadSide
	this.instance_11 = new lib.DadSide();
	this.instance_11.setTransform(311.6,316.7,1,1,0,0,0,74.9,146.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50).to({_off:false},0).to({x:199.6},8).to({_off:true},56).wait(67).to({_off:false},0).to({x:255.6},5).to({scaleX:0.79,x:265.3},2).to({scaleX:0.87,x:261.5},2).to({scaleX:1,x:255.6},3).to({_off:true},1).wait(117));

	// MusicNote1
	this.instance_12 = new lib.MusicalNote2();
	this.instance_12.setTransform(272.8,284,0.688,0.688,15,0,0,0,46.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:3.5,guide:{path:[272.7,283.9,282.5,279.9,292.8,274.7,304.9,268.4,307.1,265.5,314.5,255.8,315.1,254.6,315.9,252.7,315.9,245.1,315.9,240.9,311.4,230.3,309.5,225.6,301.5,208.8,287.1,178.3,287.1,168.3,287.1,158.3,295.4,145.9,300.3,138.7,313.5,122.6,325.7,106.7,331.7,93,339.3,75.4,339.9,55.7]}},21).to({regY:47,scaleX:1,scaleY:1,rotation:0,guide:{path:[340,55.5,340,54,340,52.5,340,33.3,337.8,19.2,337,14.6,335.8,9.4]},alpha:0},6).wait(214));

	// MusicNote1
	this.instance_13 = new lib.MusicalNote2();
	this.instance_13.setTransform(269.6,282.1,0.688,0.688,15,0,0,0,46.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:3.5,guide:{path:[269.5,282.1,312.6,289.5,327.5,236.2,340.8,188.4,304.5,151.4,270.7,117,261.5,72.4]}},23).to({regY:47,scaleX:1,scaleY:1,rotation:0,guide:{path:[261.5,72.2,258.3,56.7,258.1,40,257.8,12.3,274.2,-6.5]},alpha:0},10).wait(218));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egx6AcyMAAAg5jMBj0AAAMAAAA5jg");
	mask_1.setTransform(320.5,144.8);

	// Dad
	this.instance_14 = new lib.Dad();
	this.instance_14.setTransform(311.7,564.7,1,1,0,0,0,74.8,74.8);

	this.instance_14.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1.03,scaleY:0.81,y:166.2},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.85,y:257.2},3,cjs.Ease.get(0.5)).to({scaleY:1,y:243.5},5,cjs.Ease.get(1)).wait(27).to({x:343.7},4).to({x:201},10).wait(18).to({_off:true},1).wait(37).to({_off:false},0).to({x:247.1},4).wait(29).to({scaleY:0.8,x:253.8,y:245.1},2).to({scaleY:1,x:247.1,y:243.5},2).to({_off:true},30).wait(13).to({_off:false,x:249},0).to({x:234.6},7).wait(110));

	// Shadow1
	this.instance_15 = new lib.shadow1();
	this.instance_15.setTransform(312,359.8,1,1,0,0,0,74.5,12.1);
	this.instance_15.alpha = 0.301;
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).to({scaleX:0.49,y:316.7},4).to({scaleX:1},3).wait(32).to({x:344},4).to({x:199.6},10).wait(56).to({x:245.7},4).to({x:244.4},50).wait(143));

	// UpperViel
	this.instance_16 = new lib.UpperViel();
	this.instance_16.setTransform(392.1,-175.1,1,1,0,0,0,62.4,21.4);
	this.instance_16._off = true;

	this.instance_16.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(146).to({_off:false},0).to({y:198.5},4).to({y:181.7},4).wait(33).to({scaleX:0.66,x:376.9},2).to({scaleX:1,x:398.5},7).wait(115));

	// Mom
	this.instance_17 = new lib.Mom();
	this.instance_17.setTransform(737.1,247.9,1,1,0,0,0,74.8,74.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(46).to({_off:false},0).to({x:441.6,y:240.6,alpha:1},12,cjs.Ease.get(1)).wait(56).to({x:390.4},5).wait(30).to({x:400},0).to({scaleY:0.87,x:393.6},2).to({scaleY:1,x:392},3).wait(33).to({regX:74.9,scaleX:0.81,x:372.9},2).to({regX:74.8,scaleX:1,x:400},7).wait(115));

	// Shadow1
	this.instance_18 = new lib.shadow1();
	this.instance_18.setTransform(608.8,316.7,1,1,0,0,0,74.5,12.1);
	this.instance_18.alpha = 0.301;
	this.instance_18._off = true;

	this.instance_18.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).to({scaleY:1.32,skewX:-41,x:543.3},2).to({scaleY:1,skewX:0,x:438.4},7).wait(56).to({x:387.2},5).wait(192));

	// Hearts2
	this.instance_19 = new lib.heartbeat();
	this.instance_19.setTransform(321.6,210.8,0.6,0.6,0,0,0,20.4,17);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.instance_19.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(95).to({_off:false},0).to({regX:20.5,scaleX:1.01,scaleY:1.01,y:162.8,alpha:1},7).to({regX:20.6,scaleX:0.76,scaleY:0.76,x:321.7},3).to({regX:20.5,scaleX:1.01,scaleY:1.01,x:321.6},4).to({regX:20.6,scaleX:0.76,scaleY:0.76,x:321.7,alpha:0},4).to({regX:20.5,scaleX:1.01,scaleY:1.01,x:324.7,y:113.1,alpha:1},4).to({regX:20.4,scaleX:0.73,scaleY:0.73},4).to({regX:20.5,scaleX:1.01,scaleY:1.01},4).to({regX:20.4,scaleX:0.73,scaleY:0.73},4).to({regX:20.5,scaleX:1.01,scaleY:1.01},4).to({regX:20.4,scaleX:0.73,scaleY:0.73},4).to({regY:16.9,scaleX:0.48,scaleY:0.48,alpha:0},3).wait(171));

	// LowerViel
	this.instance_20 = new lib.LowerViel();
	this.instance_20.setTransform(392.2,-112.6,1,1,0,0,0,80,72.4);
	this.instance_20._off = true;

	this.instance_20.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(146).to({_off:false},0).to({y:261.1},4).to({y:244.3},4).wait(33).to({scaleX:0.76,x:384.2},2).to({scaleX:1.06,x:398.6},7).wait(115));

	// Hearts
	this.instance_21 = new lib.heartbeat();
	this.instance_21.setTransform(320.5,245.7,1,1,0,0,0,20.4,17);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.instance_21.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(73).to({_off:false},0).to({scaleX:1.68,scaleY:1.68,x:320.4,y:165.7,alpha:1},7).to({regX:20.5,scaleX:1.27,scaleY:1.27,x:320.6},3).to({regX:20.4,scaleX:1.68,scaleY:1.68,x:320.4},4).to({regX:20.5,scaleX:1.27,scaleY:1.27,x:320.6,alpha:0},4).to({regX:20.4,scaleX:1.68,scaleY:1.68,x:325.7,y:82.8,alpha:1},4).to({scaleX:1.22,scaleY:1.22},4).to({scaleX:1.68,scaleY:1.68},4).to({scaleX:1.22,scaleY:1.22},4).to({scaleX:1.68,scaleY:1.68},4).to({scaleX:1.22,scaleY:1.22},4).to({scaleX:0.81,scaleY:0.81,alpha:0},3).wait(193));

	// Hearts2
	this.instance_22 = new lib.heartbeat();
	this.instance_22.setTransform(384.3,187.7,0.6,0.6,0,0,0,20.4,17);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(134).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[384.2,187.6,356.8,164.2,360.3,124.6,362.9,95.4,385.1,80.5]}},15).to({regY:16.9,scaleX:0.48,scaleY:0.48,x:344.5,y:-182.3,alpha:0},30).wait(132));

	// Hearts2
	this.instance_23 = new lib.heartbeat();
	this.instance_23.setTransform(404.8,273.1,0.6,0.6,0,0,0,20.4,17);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(132).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[404.7,273.4,353.6,273,334.4,226.6,314.5,178.8,368.6,141.8,422.6,105,434.5,56.6]}},26).to({regX:20.3,regY:16.9,scaleX:1.44,scaleY:1.68,guide:{path:[434.5,56.4,437.6,43.8,437.8,30.4,438,20.1,434.6,10.9]},alpha:0.328},4).to({regX:20.4,scaleX:0.48,scaleY:0.48,guide:{path:[434.7,10.6,423.1,-21.1,369.5,-37.1,333.7,-48,299.6,-61.5,292.9,-64.1,282.5,-66.6]},alpha:0},15).wait(134));

	// Hearts2
	this.instance_24 = new lib.heartbeat();
	this.instance_24.setTransform(224.1,282.8,1.08,1.08,0,0,0,20.4,16.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(152).to({_off:false},0).to({regY:17,scaleX:0.59,scaleY:0.59,guide:{path:[224,282.8,255.3,280,267.5,236.2,280.8,188.4,244.5,151.4,240.8,147.6,237.4,143.7]}},21).to({regX:20.5,regY:16.9,scaleX:0.87,scaleY:0.87,guide:{path:[237.5,143.7,198.9,99.5,198.1,40.1,197.6,-3.9,238.7,-25]},alpha:0},24).wait(114));

	// Hearts2
	this.instance_25 = new lib.heartbeat();
	this.instance_25.setTransform(449.7,187.7,0.6,0.6,0,0,0,20.4,17);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(136).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[449.6,187.6,422.2,164.2,425.7,124.6,428.3,95.4,450.5,80.5]}},15).to({regY:16.9,scaleX:0.48,scaleY:0.48,x:409.9,y:-182.3,alpha:0},30).wait(130));

	// Hearts2
	this.instance_26 = new lib.heartbeat();
	this.instance_26.setTransform(404.8,273.1,0.6,0.6,0,0,0,20.4,17);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(144).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[404.7,273.4,353.6,273,334.4,226.6,314.5,178.8,368.6,141.8,422.6,105,434.5,56.6]}},26).to({regX:20.3,regY:16.9,scaleX:1.44,scaleY:1.68,guide:{path:[434.5,56.4,437.6,43.8,437.8,30.4,438,20.1,434.6,10.9]},alpha:0.328},4).to({regX:20.4,scaleX:0.48,scaleY:0.48,guide:{path:[434.7,10.6,423.1,-21.1,369.5,-37.1,333.7,-48,299.6,-61.5,292.9,-64.1,282.5,-66.6]},alpha:0},15).wait(122));

	// Hearts2
	this.instance_27 = new lib.heartbeat();
	this.instance_27.setTransform(284.1,282.8,1.08,1.08,0,0,0,20.4,16.9);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(155).to({_off:false},0).to({regY:17,scaleX:0.59,scaleY:0.59,guide:{path:[284,282.8,315.3,280,327.5,236.2,340.8,188.4,304.5,151.4,300.8,147.6,297.4,143.7]},alpha:0.539},21).to({regX:20.3,regY:16.9,scaleX:1.31,scaleY:1.53,guide:{path:[297.4,143.7,275.2,118.2,265.5,87.7]},alpha:0.359},8).to({regX:20.5,scaleX:0.87,scaleY:0.87,guide:{path:[265.6,87.8,258.5,65.3,258.1,40,257.6,-3.8,298.7,-25]},alpha:0},16).wait(111));

	// Hearts2
	this.instance_28 = new lib.heartbeat();
	this.instance_28.setTransform(449.7,187.7,0.6,0.6,0,0,0,20.4,17);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(118).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[449.6,187.6,422.2,164.2,425.7,124.6,428.3,95.4,450.5,80.5]}},15).to({regY:16.9,scaleX:0.48,scaleY:0.48,x:409.9,y:-182.3,alpha:0},30).wait(148));

	// Hearts2
	this.instance_29 = new lib.heartbeat();
	this.instance_29.setTransform(404.8,273.1,0.6,0.6,0,0,0,20.4,17);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(118).to({_off:false},0).to({scaleX:0.62,scaleY:0.68,guide:{path:[404.7,273.4,353.6,273,334.4,226.6,314.5,178.8,368.6,141.8,422.6,105,434.5,56.6]}},26).to({regX:20.3,regY:16.9,scaleX:1.44,scaleY:1.68,guide:{path:[434.5,56.4,437.6,43.8,437.8,30.4,438,20.1,434.6,10.9]},alpha:0.328},4).to({regX:20.4,scaleX:0.48,scaleY:0.48,guide:{path:[434.7,10.6,423.1,-21.1,369.5,-37.1,333.7,-48,299.6,-61.5,292.9,-64.1,282.5,-66.6]},alpha:0},15).wait(148));

	// Hearts2
	this.instance_30 = new lib.heartbeat();
	this.instance_30.setTransform(284.1,282.8,1.08,1.08,0,0,0,20.4,16.9);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(118).to({_off:false},0).to({regY:17,scaleX:0.59,scaleY:0.59,guide:{path:[284,282.8,315.3,280,327.5,236.2,340.8,188.4,304.5,151.4,300.8,147.6,297.4,143.7]},alpha:0.539},21).to({regX:20.3,regY:16.9,scaleX:1.31,scaleY:1.53,guide:{path:[297.4,143.7,275.2,118.2,265.5,87.7]},alpha:0.359},8).to({regX:20.5,scaleX:0.87,scaleY:0.87,guide:{path:[265.6,87.8,258.5,65.3,258.1,40,257.6,-3.8,298.7,-25]},alpha:0},16).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;