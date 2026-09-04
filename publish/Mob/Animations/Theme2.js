(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/HOYTSBOING.mp3", id:"HOYTSBOING"},
		{src:"sounds/sayyes.mp3", id:"sayyes"},
		{src:"sounds/SHORTBALLOONSQUEAK.mp3", id:"SHORTBALLOONSQUEAK"}
	]
};



// symbols:



(lib.TrueBallMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2ClIAAgFIAAgCIAAgLQABgGgFgEIglghIgFgEIgkgKIAAACIgJgDIgJgSIAJAFIADABQAEADAJADIAWAGQAHACADgGQAMgWAFgLQACgFgCgHQgMgpgFgWQgDgKgJgDIgXgHQgFgDgCADIgcAdIAAgBIACgRQAHgHAAACQAQgLACgbIACgFIAAgNQAMgQAOgNIAtgLIAEgCIASgVQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAZgIAXAAIAMABQgEABgCACIgCAAQgnAJgSATQgIAJAEAJIAIAXQABAEAFACIBEAPQAHACAEgCQANgGAagPQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIgIgZQgFgOgGgIIAAgBIgCgIIAAAAQAKADAHAEIABADIgCgBIAOAvQABACAEAFIAlAnQAEAFABAAIAZAAIAAgBIADABIADALQgIgDgKABIgLAAIgTAxQgBACABAFIASBAQAJABAIgDIACABQgbA3g4AaIgBgBIACgGQACgGgCgFQggAAgggMQgEgCgGACIglAMIgHACQgDACABAFQAAAGAEANgAAzAJIgvAzQgEAFABAFIAKAsQABAGAGACIAyAMQATgHACgCIAigjQAEgEgBgFQgCgjgMgaQgCgGgGgBQgTgEgYgEIgDAAQgEAAgDAEgAg1hNQgRARgPARQgHAHADAIQAGAcAMAmQACAGAIACIAzAMQAEABAFgFIAlgrQALgLgGgfQgGgggKgBQgNgCgUgFQgZgIgJgBIgDAAQgFAAgDADg");
	this.shape.setTransform(-0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C913").s().p("Ah5B6QgygzAAhHQAAhGAygzQAzgyBGAAQBHAAAzAyQAyAzAABGQAABHgyAzQgzAyhHAAQhGAAgzgyg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-17.2,34.6,34.6);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("Ah4ARQgzgIAAgJQAAgJAzgGQAygIBGAAQBHAAAyAIQAzAGAAAJQAAAJgzAIQgyAGhHAAQhGAAgygGg");
	this.shape.setTransform(17.2,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,4.8);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686868").s().p("AjQAQQhXgHAAgJQAAgIBXgHQBXgHB5AAQB6AABXAHQBXAHAAAIQAAAJhXAHQhWAHh7AAQh6AAhWgHg");
	this.shape_1.setTransform(29.6,2.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,4.8);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AoGA1QjXgWAAgfQAAgeDXgWQDXgXEvAAQEwAADXAXQDXAWAAAeQAAAfjXAWQjXAXkwAAQkvAAjXgXg");
	this.shape_2.setTransform(73.5,7.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,15.2);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AjQAQQhWgHgBgJQABgIBWgHQBXgHB5AAQB6AABXAHQBWAHABAIQgBAJhWAHQhXAHh6AAQh5AAhXgHg");
	this.shape_3.setTransform(29.6,2.4);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.2,4.8);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686868").s().p("AoGA1QjXgWAAgfQAAgeDXgWQDXgXEvAAQEwAADXAXQDXAWAAAeQAAAfjXAWQjXAXkwAAQkvAAjXgXg");
	this.shape_4.setTransform(73.5,7.6);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.9,15.2);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#686868").s().p("AjNAQQhVgHAAgJQAAgIBVgHQBWgHB3AAQB5AABVAHQBVAHAAAIQAAAJhVAHQhVAHh5AAQh4AAhVgHg");
	this.shape_5.setTransform(29.2,2.4);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,4.8);


(lib.RoojPopUpMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#686868").p("ABAAfQAIARgGARQgGARgRAHQgQAIgRgGQgPgHgHgQIg1hvQgHgOAKgKQAFgFAVgKQAWgKAHgBQAMgBAGAPg");
	this.shape.setTransform(-9.4,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686868").s().p("AggAMQgHgMABgEQACgIAQgUIAPgRQAGgGAEAKIAiBFQgNABgPAHQgOAHgLANg");
	this.shape_1.setTransform(-14.3,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AhgAAIABgCIAAAAQgZgLgGgEIAVAAQAYgDAPgMQAUgSAWAGQAVAFAKASQAUgJAVAFQAYAGAJAYIABgBQAIASATAOQAKAGAIAEIglgCQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQhtgLhMgjg");
	this.shape_2.setTransform(5.6,-12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AAHAuQgcgCgYgPQgTgKgPgUIgZgnIgDgGQBbAtB8AKIgJAGIgYAOQgOAKgKADQgOAFgRAAIgNgBg");
	this.shape_3.setTransform(4.7,-7.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-16.8,36.8,36);


(lib.PinkGirlMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED3778").s().p("AgCAtQgWgEgBACQACgEAAgGQAAgNgKgKQgEgEgFgDIALgRQALgTALgIQAJgHALAFQAJAFAGAJQAOATACAOQAEAWgNAMQgKAIgQAAIgJgBgAgZArIAAAAIAAAAg");
	this.shape.setTransform(-6.3,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED3778").s().p("AgaAdQgLgNgGgUQgEgKADgKQADgLAMgFQANgEAUADIAVAEQgBAFABAGQACAOAKAIQAFADAFABQgCAAgFAHIgGALQgLAVgSADIgFABQgNAAgNgOg");
	this.shape_1.setTransform(-17.6,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED3778").s().p("AgIAbQgLgEgFgLIgBgBQgFgKAEgJQAEgLAKgFQALgFAJADQALAEAGAKIAAABQAGALgEAKQgEAKgLAGQgGACgGAAIgIgBg");
	this.shape_2.setTransform(-11.9,-16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B5CF").s().p("AAVhBQAggRAggKQARgFAKgCQhiAchIBXQgkAtgSAnQAmhtBfg4g");
	this.shape_3.setTransform(-13.7,-13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F17BA2").s().p("AjKDdQhWhVABh5QAAgpAMgpQgSgLAAgVQAAgPALgKQAKgLAPAAQgUgTAAgcQAAgbASgSQATgTAbAAIAOACQABgaATgRQASgSAZAAQAgAAATAYQALgLAPAAQAVAAALATQAPgBAOAAQB5AABVBVQBWBWgBB2QABB5hWBVQhWBVh4AAQh2AAhWhVg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-30.6,58.8,61.4);


(lib.MomMouthMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED3778").s().p("AgegaQAQAUAdAKQAPAGAMACQgLAFgkAGIgkAEg");
	this.shape.setTransform(12.2,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED3778").s().p("AgpAMIAbgIQAcgKARgUIALA1QhBgHgSgIg");
	this.shape_1.setTransform(-15.7,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED3778").s().p("AgkAjIghgBQgsgDgWgDIg8gLQgLgBgRgFIhGgTIghgNIgYgMIAYALIAiALIAsALIAaAGIA5AKIAfAFIBBAFIAiABIAhAAQAgAAAigDIB8gRIAcgHIAagEIAtgMIBAgTIhAAXQgIADgkAJIgaAGIgbAHIh+ATIhCADg");
	this.shape_2.setTransform(0,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED3778").s().p("AguAmQgbgIgdgYQgegcgRgPQgEgFgCgBQCLAdCsgbIgLAKIgbAdQgQAPgNAJQgXAPgjAFQgQACgPAAQgXAAgXgGg");
	this.shape_3.setTransform(-2.4,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED3778").s().p("AgpAuQg0gCgpgIIAAgCIAjg4QASgYAdAAQAfAAAVAUQAWgUAfAAQAeAAAUAXQALAOAVArIgBADQhGAKhBAAIgogBg");
	this.shape_4.setTransform(-2,-4.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.1,-9,70.3,18.1);


(lib.MomMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B5CF").s().p("AAwiQQBsg9BcgNQjZA8ifDCQgzA9gnBDIgdA3QBRjxDWh6g");
	this.shape.setTransform(-33.6,-37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17BA2").s().p("Am9G+Qi4i5AAkFQAAkEC4i5QC5i5EEAAQEFAAC4C5QC5C5ABEEQgBEFi5C5Qi4C5kFAAQkEAAi5i5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.1,-63.1,126.2,126.3);


(lib.IceCreamPopUpMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("AAQAMQgIgDgJgFIgRgKIgHgHIAKACQAHACAKAGQAMAFAFAFIAHAHQgEAAgGgCg");
	this.shape.setTransform(4.9,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686868").s().p("AAQAMQgKgDgHgFQgJgEgIgGIgHgHIAKACQAJACAIAGIARAKIAHAHg");
	this.shape_1.setTransform(3.6,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AgLAQQADgKAFgHQAEgLAGgGIAHgHIgCAKQgEAMgEAFQgEAJgGAIIgHAHg");
	this.shape_2.setTransform(5.2,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AgLAQQACgJAGgIIAKgRIAHgHIgCAKQgDAIgFAJQgEAJgGAIIgHAHg");
	this.shape_3.setTransform(4,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#686868").p("AA7AIQAEgPgFgSQgIgbgZgNQgZgOgZAIQgbAIgNAZQgOAZAIAZQAFARANANQgJAIAEALQACAHAGAEQAHADAHgCQALgEACgKIAAADQADAHAGAEQAHAEAHgDQAKgDABgMIABgBIABAAQAIAKAMgEQAHgCADgHQAEgGgCgHIgBgEQAIAJAKgEQAHgCAEgGQAEgHgDgHQgDgLgMgCg");
	this.shape_4.setTransform(-2.4,-13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBJQgGgEgDgHIAAgDQgCAKgLAEQgHACgHgDQgGgEgCgHQgEgLAJgIQgNgNgFgRQgIgZAOgZQANgZAbgIQAZgIAZAOQAZANAIAbQAFASgEAPQAMACADALQADAHgEAHQgEAGgHACQgKAEgIgJIABAEQACAHgEAGQgDAHgHACQgMAEgIgKIgBAAIgBABQgBAMgKADIgGABQgEAAgEgCg");
	this.shape_5.setTransform(-2.4,-13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#686868").p("AA7AIQAEgPgFgSQgIgbgYgNQgZgOgaAIQgbAIgNAZQgOAZAIAZQAGASAMAMQgJAIAEALQACAHAGAEQAHADAHgCQALgDACgLIAAADQADAHAGAEQAHAEAHgDQAKgDABgMIABgBIABAAQAIAKAMgEQAHgCADgHQAEgGgCgHIgBgEQAHAJALgDQAHgCAEgHQAEgHgDgHQgDgLgMgCg");
	this.shape_6.setTransform(0,-5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBJQgGgEgDgHIAAgDQgCALgLADQgHACgHgDQgGgEgCgHQgEgLAJgIQgMgMgGgSQgIgZAOgZQANgZAbgIQAagIAZAOQAYANAIAbQAFASgEAPQAMACADALQADAHgEAHQgEAHgHACQgLADgHgJIABAEQACAHgEAGQgDAHgHACQgMAEgIgKIgBAAIgBABQgBAMgKADIgGABQgEAAgEgCg");
	this.shape_7.setTransform(0,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#686868").p("AA7AIQAFgPgGgSQgIgbgYgOQgZgNgaAIQgbAIgNAZQgOAYAIAaQAFARANANQgIAHADALQACAIAHADQAGAEAHgCQALgDACgMIABAEQACAHAGAEQAHADAHgCQAKgEABgMIABAAIABAAQAIAJAMgDQAHgCAEgHQADgHgCgHIgBgDQAHAIALgDQAHgCAEgHQAEgGgDgHQgDgMgMgBg");
	this.shape_8.setTransform(2.4,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBJQgGgEgCgHIgBgEQgCAMgLADQgHACgGgEQgHgDgCgIQgDgLAIgHQgNgNgFgRQgIgaAOgYQANgZAbgIQAagIAZANQAYAOAIAbQAGASgFAPQAMABADAMQADAHgEAGQgEAHgHACQgLADgHgIIABADQACAHgDAHQgEAHgHACQgMADgIgJIgBAAIgBAAQgBAMgKAEIgFABQgFAAgEgCg");
	this.shape_9.setTransform(2.4,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#686868").p("Ag2gyQA9B3AdACIAAABIAEgBIgBgBQAXgQgMiC");
	this.shape_10.setTransform(3.1,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBKQgcgCg9h3IBogaQALCBgWARIAAAAIgDABg");
	this.shape_11.setTransform(3.1,13.6);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.9,-22,25.5,44.2);


(lib.Heart4MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17BA2").s().p("Ag6BFQg8gxgKgmIAAgBIAAAAIAAAAQgFgMAAgMQAAgcAUgUQATgTAcAAQAcAAAUATQASAUAAAcQAAgcATgUQAUgTAcAAQAcAAATATQAUAUAAAcQAAANgEALIAAAAIgBABQgKAmg8AxIg7AqQgbgRgfgZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-11.1,26.9,22.4);


(lib.Heart3MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17BA2").s().p("AglAtQgnghgGgYIAAABQgDgHAAgJQAAgSANgNQAMgNASAAQASAAANANQALANAAARQAAgRAMgNQANgNASAAQASAAANANQAMANAAASQAAAGgDAKIAAgBQgGAYgnAhIgmAbQgRgLgUgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,-7.2,17.4,14.5);


(lib.Heart2MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17BA2").s().p("AgbAhQgegYgFgSIABABQgDgGAAgGQAAgOAKgJQAJgKAOAAQANAAAKAKQAIAJAAANQAAgNAJgJQAKgKANAAQAOAAAJAKQAKAJAAAOQAAAGgDAGIABgBQgFASgeAYIgcAVQgNgIgOgNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.4,13.1,10.9);


(lib.GreenBoyMc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACD261").s().p("AAWhBQAxgcAqgFQhjAbhIBXQglAtgRAmQAlhsBhg4g");
	this.shape.setTransform(-15.1,-16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAAQATgKATABQAVAAATAJIgHAKQgPgHgSgBQgPAAgRAIg");
	this.shape_1.setTransform(0,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABBQgbgbAAgmQAAglAbgbQAcgbAkAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQgkAAgcgbgAg2g2QgXAXAAAfQAAAgAXAXQAXAXAfAAQAgAAAXgXQAXgXAAggQAAgfgXgXQgXgXggAAQgfAAgXAXg");
	this.shape_2.setTransform(11,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhABBQgbgbAAgmQAAglAbgbQAcgbAkAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQgkAAgcgbgAg2g2QgXAXAAAfQAAAgAXAXQAXAXAfAAQAgAAAXgXQAXgXAAggQAAgfgXgXQgXgXggAAQgfAAgXAXg");
	this.shape_3.setTransform(-11.2,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88C440").s().p("AjMDOQhWhWAAh4QAAh3BWhVQBVhWB3AAQB4AABWBWQBVBVAAB3QAAB5hVBVQhVBVh5AAQh3AAhVhVg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.1,-29.1,58.3,58.3);


(lib.FlowerPopUpMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#686868").p("ABKAAQgFgJgMgEQgLgEgLAFIABgCQAEgLgGgLQgFgLgMgEQgLgEgJAGQgLAFgDAMIgCAGIgCgFQgFgLgMgDQgLgEgLAFQgLAGgEALQgDAMAFALQAHALASATQAUAXAMABQAJAGAdgGQAagFANgGQALgGAEgLQAEgMgGgKg");
	this.shape.setTransform(11.2,-13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAyQgMgBgUgXQgSgTgHgLQgFgLADgMQAEgLALgGQALgFALAEQAMADAFALIACAFIACgGQADgMALgFQAJgGALAEQAMAEAFALQAGALgEALIgBACQALgFALAEQAMAEAFAJQAGAKgEAMQgEALgLAGQgNAGgaAFQgPADgIAAQgLAAgEgDg");
	this.shape_1.setTransform(11.2,-13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AgWAXQACgLAHgMQANgWAXgBIgGAZQgKAWgVAAIgIgBg");
	this.shape_2.setTransform(10.5,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AgVgHIANgtQgJgQANgMIAMgJIAOAhIgWAJQgUAvAOAxQAGAZAKAPQgkgrAFg1g");
	this.shape_3.setTransform(9.9,-2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686868").s().p("AAiBKQghAAgfg7Igcg+IgBgDIACgCQAPgWAPABQAKgBAFAJQBQBIgJAqQgCAMgKAIQgFAEgFABgAgugvQANAlATAdQAYAsAYAAQAMgEACgNQAIgjhMhEIgBgCQgCgDgEAAQgIAAgLAPg");
	this.shape_4.setTransform(3.2,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAKIgag7QAPgVAMACQAHABADAFQBKBDgEAnQgCATgRAGIgBAAQgfAAgeg7g");
	this.shape_5.setTransform(3.2,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGApIgigxQgHgKADgMQACgLAKgHQAJgHANADQAKACAHAKIAiAxQAHAKgDAMQgCAMgKAGQgHAFgKAAQgPAAgHgNgAgagnQgGAEgBAIQgCAHAEAGIAgAxQAEAGAIACQAHABAGgEQAHgEABgHQABgIgEgGIgggxQgFgIgKAAQgEAAgGADg");
	this.shape_6.setTransform(-1.3,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#686868").s().p("AAMAwQgKgCgDgIIgigxQgGgIACgKQACgJAIgGQAIgFAKACQAKACADAIIAiAxQAFAIgBAKQgCAJgIAGQgGAEgHAAIgFgBg");
	this.shape_7.setTransform(-1.3,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#686868").s().p("AhKB1QgTgZgHgzIgKg9QgJg9AOgcQANgZAeAFQAVAEAaARQAtAeAmAnIAYAVQAOANAGAKQAJATgQAOQgKAIgWANIhEAtIgFADQgXARgNAEQgHADgGAAQgPAAgKgOg");
	this.shape_8.setTransform(-7.4,-3.8);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19.6,39,38.3);


(lib.FlowerMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17BA2").s().p("AgKBJQgLgKgPgVQgSgaABgLQgDgJANgcQALgZAJgLQAHgJAMgBQAKgCAKAIQAJAIABAMQACAMgIAJIgDAEIAFgBQANgBAJAHQAJAIABAMQABAKgHAJQgIAKgMABIgCAAQAJAIABAMQABAMgIAJQgHAJgMABIgEAAQgIAAgIgGg");
	this.shape.setTransform(12.5,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88C440").s().p("AgegMIAZgBQAZADALATQgNAFgOAAQgbAAgHgag");
	this.shape_1.setTransform(2.3,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88C440").s().p("AgEgZQAYgIAVABQALgOAQAHQAIADAFAGIgXAaIgSgRQgzgBgoAfQgUARgJAQQAYgyA0gRg");
	this.shape_2.setTransform(2.6,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88C440").s().p("AgxBEQgLgdAggxQAYglAfgfQAVAHAEAKQACAFgDAFIgBACQgjB5gnAHIgDAAQgNAAgJgLg");
	this.shape_3.setTransform(-12.4,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#776D6D").s().p("AgcAtQgIgFgCgKQgCgJAFgJIAhgxQAEgJAJgCQAKgCAIAFQAIAGACAJQACAKgFAIIghAyQgDAIgKACIgGABQgGAAgGgEg");
	this.shape_4.setTransform(-8.4,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#928686").s().p("AAeB9IgegVIhFgtIgEgCQgbgQgJgLQgQgTAMgSQAQgcAqgbIA2giQAyghAgACQAcABAHAeQAFAUgFAgQgJA2gUAxIgKAfQgGASgIAKQgJAKgLAAQgGAAgHgDg");
	this.shape_5.setTransform(-6,-5.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-18.6,36,37.3);


(lib.DadMostachMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFBSIgFgBIgEABQg5APg/gBQglAAgqgHQgTgCgggHQhEgRgfgNQgcgLgLgVQgGgLAAgLQAAgOAIgIQAFgFAGgFIAGgDQgDAEgDAIQgDAHABAGQABAPARAIQAMAFAQAAQAWgBAkgNQAggLAWgLQAQgIAfgVQAegVAQgIQAagNAYgBQAfgCAjAaQAHAFAHAJQAIgJAHgFQAkgaAdACQAZABAaANQAQAIAeAVQAfAVAQAIQAWALAfALQAlANAWABQAQAAAMgFQARgIABgPQAAgGgCgHQgCgIgDgEIAFADQAGAFAFAFQAIAIAAAOQAAALgGALQgKAVgdALQgfANhEARIgzAJQgpAHgmAAIgIAAQg7AAg1gOg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-9.6,79.9,19.2);


(lib.DadMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42C4F2").s().p("AAwiQQBsg9BcgNQjZA8igDCQhQBigmBVQBRjxDWh6g");
	this.shape.setTransform(-33,-37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#46ACE1").s().p("Am8G+Qi6i5AAkFQAAkEC6i5QC4i5EEAAQEFAAC5C5QC4C5AAEEQAAEFi4C5Qi5C5kFAAQkEAAi4i5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.1,-63.1,126.2,126.3);


(lib.Border2MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#686868").p("AEngmQAAh6hWhXQhXhXh6AAQh5AAhXBXQhWBXAAB6QAABqBEBSQBEBRBoAUQAWBOAXAFIAAABIADAAIAAgBQAUgFAWhLQBugOBKhTQBLhUAAhvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJFPIAAgBQgXgFgWhOQhogUhDhRQhGhSABhqQAAh6BWhXQBXhXB5AAQB6AABXBXQBXBXAAB6QAABvhMBUQhKBThuAOQgWBLgUAFIAAABg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.6,-34.5,61.2,69.1);


(lib.Border1MC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#686868").p("AEngmQAAh7hWhWQhXhXh6AAQh5AAhXBXQhWBWAAB7QAABpBFBTQBEBRBnAUQAXBOAWAFIAAABIADAAIAAgBQAVgFAVhMQBugNBKhTQBLhUAAhvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJFPIAAgBQgWgFgXhOQhngUhEhRQhFhTAAhpQAAh7BWhWQBXhXB5AAQB6AABXBXQBWBWAAB7QAABvhLBUQhKBThuANQgVBMgVAFIAAABg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-34.5,61.2,69.1);


(lib.BookPopUpMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("Aghh7IBDD3g");
	this.shape.setTransform(-13.8,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686868").s().p("Aghh7IBDD3g");
	this.shape_1.setTransform(-12.1,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AB4gkIjvBJg");
	this.shape_2.setTransform(-1.8,-16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AB4gkIjvBJg");
	this.shape_3.setTransform(-4.5,-16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686868").s().p("AB4gkIjvBJg");
	this.shape_4.setTransform(-5.1,-17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#686868").s().p("AAgCfQACgDACgHQACgIgCgIIgCgKIgih6IgQg6IgMg0IgIgmIgDgOIAFAOIAMAkIA9DpIABALQABAFgDALQgDAHgCADIgDADg");
	this.shape_5.setTransform(17.8,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmihIBMEcIABAOQAAAQgIAJg");
	this.shape_6.setTransform(17.7,-6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#686868").s().p("Ag1AsIA/gYIBCgVIA8gUQACgHAAgGQAAgGgFgDQgFgDgLAAIgUADIhVAcQhqAghCARQBCgeBkglIBWgfQANgEALAAQASAAAKAFQAJAFADAHQAEAHAAAJQABALgGAPIgBAFIgGACIjGA3QgiAJgiAHIBBgZg");
	this.shape_7.setTransform(-2,-17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiaAdIDzhWIAogFQAlACgPAqIkHBSg");
	this.shape_8.setTransform(-2.6,-17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#686868").s().p("AiwhnIEPhfIBSEzIkJBagAiVhZIBNEDIDehMIhGkHg");
	this.shape_9.setTransform(3.4,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiihgID5hYIBMEdIj0BTg");
	this.shape_10.setTransform(3.4,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#686868").s().p("AALBpIhOkSIAuAlIAAABIBZEtgAAOBoIAvA3IhUkhIgnggg");
	this.shape_11.setTransform(-11.6,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMBpIhMkNIAqAjIBXEng");
	this.shape_12.setTransform(-11.6,2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#686868").s().p("AiwhnIEPhfIBSEzIkIBagAiVhZIBMEDIDfhMIhGkHg");
	this.shape_13.setTransform(-1.8,-4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiihgID5hYIBMEdIjzBTg");
	this.shape_14.setTransform(-1.8,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#686868").p("AEngmQAAh7hWhXQhXhWh6AAQh5AAhXBWQhXBXAAB7QAABpBFBTQBEBRBoATQAWBOAXAHIAAAAIADAAIAAAAQAVgGAVhMQBugNBKhUQBLhUAAhug");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJFPIAAAAQgXgHgWhOQhogThEhRQhFhTABhpQgBh7BXhWQBXhXB5AAQB6AABXBXQBXBWAAB7QAABvhMBUQhKBThuAOQgVBLgVAGIAAAAg");

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.6,-34.5,61.2,69.1);


(lib.BookMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("AgPh+IAfD9g");
	this.shape.setTransform(-15.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686868").s().p("AgPh+IAfD9g");
	this.shape_1.setTransform(-13.8,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AB8gTIj3Ang");
	this.shape_2.setTransform(-1.1,-14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686868").s().p("AB8gTIj3Ang");
	this.shape_3.setTransform(-3.8,-15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686868").s().p("AB8gTIj3Ang");
	this.shape_4.setTransform(-4.3,-15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#50C7EB").s().p("AiQhmIAAAAIgBgFIEJg4QADgIAAgDQABgGgEgEQgEgDgMgCIgUAAIhWAQQhsAShIAIQBAgTBwgaIBLgRIANgBQAKgCAOABQATAEAIAGQAIAFADAIQACAGgBAGIAgDbIAGBBIgBALQAAAHgFAJQgCAGgEADIgDADQgTAGABgCIj2A9g");
	this.shape_5.setTransform(0.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRilIAjEkIgBAPQgCAQgKAHg");
	this.shape_6.setTransform(16.9,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AieAGID+gyIAogBQAkAJgVAlIkQAsg");
	this.shape_7.setTransform(-1.8,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#686868").s().p("AgCBpIgokbIApAtIAAAAIArE4gAAABpIAmA9IgqkqIghglg");
	this.shape_8.setTransform(-13.6,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBBqIgmkWIAkAoIAsExg");
	this.shape_9.setTransform(-13.6,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#50C7EB").s().p("AifiAIEag3IAlE7IkTA0gAiGhuIAmELIDngrIggkOg");
	this.shape_10.setTransform(-2.9,-2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiSh3IEDgyIAiEkIj9Awg");
	this.shape_11.setTransform(-2.9,-2.7);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-21.2,37.9,42.5);


(lib.BlueBoyMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACD261").s().p("AAWhBQAxgbAqgGQhjAbhIBXQgXAcgSAfIgNAZQAlhtBhg4g");
	this.shape.setTransform(-15.6,-14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88C440").s().p("AhbBfQhFAFhDALIg1AJQAdhsBWg3QA4glBFgMQABgLALgIQALgHAPgBQAOABAKAHQALAIABALQCDARBHBiQAjAyAKAvQibgpjZAQgABUBJIABAAIAAgNQAAgPgHgNQgSggg2AAIgLAAQg1AAgTAgQgGALgBARIAAAMIAAABIBUgEQArABApADg");
	this.shape_1.setTransform(0,-18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#46ACE1").s().p("AjNDOQhVhWAAh4QAAh3BVhVQBWhWB3AAQB4AABWBWQBVBVAAB3QAAB4hVBWQhWBVh4AAQh4AAhVhVg");
	this.shape_2.setTransform(0,1.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.1,-30.3,58.3,60.7);


(lib.BallPopUpMC = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686868").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABYg/BAQg/A/hZAAQhYAAg/g/gAiMiMQg7A7AABRQAABSA7A7QA6A7BSAAQBTAAA6g7QA7g7gBhSQABhRg7g7Qg6g7hTAAQhSAAg6A7g");
	this.shape.setTransform(-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKgZQAAATgEAIQgEAQgLAIg");
	this.shape_1.setTransform(-18,-7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AAADQQgUgHgdgBQgSgBgVABQhYgkghhaIABiUQAUg1ArgiQAqgkA8gMIBIAAQBCAMAwAxQA1A0AKBPIAEAdIgCAGIgCAOIAAgHQgIA7ghAsQggAsg0AZIgMADQgNADgzAHgAgKCWIguAOIgHACQgEACABAFQAAAJABACQABAEAIACQA+APA8gYQAPgFgHgNQgmABgkgPIgCAAIgIABgAhMC3IAAgMQAAgIgFgDQgJgIgigfIgGgFIgqgLQAkA2A8AYgAAuAKQggAigUAaQgFAEABAHQAEAUAGAeQABAIAHACIA6APIANgFQAIgDADgDIAogpQAEgEAAgGQgEgrgNgdQgDgGgGgBQgWgFgdgFIgCAAQgFAAgEAFgAivgzQgXAbgFAhIADASIADATQALAlAGAFQAEAEAmALQAIACADgHIAUgmQADgGgCgIIgVhJQgDgMgKgDIgbgJIgEgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAgACggxIgMABIgWA5QgCADACAFIAVBKQAMACADgCQADgCAFgNQAWgygKg6QgCgOgDgCQgCgBgJAAIgGAAgAhMhZQgTASgSAUQgGAIABAKIAWBNQACAHAJADIA7ANQAGABAFgFIAsgzIALgMQAEgGgHgJQAEgBgKgdQgLgegFgBQgYgHg2gLIgDAAQgFAAgFAFgAjFgsQANgIAEgQQAEgKAAgTgACvg7QgchNhIgkIAQA1QABADAFAGIArAuIAGAFIAdAAIAAAAgAgpi0QgTAHgNAOQgJALAEAKQAEAJAFARQADAGAFABIBPATQAJABADgCIAugZQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIgJgcQgGgQgHgKQgEgFgMgEIgVgEIgbgGQgXAGgNAGgAiEiSIAogKIAGgCIAUgYQgiAKggAag");
	this.shape_2.setTransform(0.8,-0.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.8,-21.5,43.7,43.1);


(lib.TrueBallShadowMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(0,0,1,1,0,0,0,17.2,2.4);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-2.4,34.5,4.8);


(lib.PinkGirlShadowMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1();
	this.instance.setTransform(0,0.1,1,1,0,0,0,29.6,2.4);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-2.3,59.3,4.8);


(lib.MomShadowMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(0.1,0,1,1,0,0,0,73.5,7.6);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-7.6,147,15.2);


(lib.GreenBoyShadow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_3();
	this.instance.setTransform(0,0.1,1,1,0,0,0,29.6,2.4);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-2.3,59.2,4.8);


(lib.DadShadowMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(0.1,0,1,1,0,0,0,73.5,7.6);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-7.6,146.9,15.2);


(lib.BlueBoyShadowMC = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_5();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,29.2,2.4);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.1,-2.3,58.4,4.8);


// stage content:
(lib.Theme2V2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		
			playSound("HOYTSBOING");
			playSound("HOYTSBOING");
		
	}
	this.frame_30 = function() {

			playSound("SHORTBALLOONSQUEAK");
			playSound("SHORTBALLOONSQUEAK");
		
		
		
	}
	this.frame_104 = function() {
		
			playSound("sayyes");
		
		
	}
	this.frame_118 = function() {
		
			playSound("sayyes");
		
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(74).call(this.frame_104).wait(14).call(this.frame_118).wait(651));

	// KidsMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgydAexMAAAglZMBk7AAAMAAAAlZg");
	mask.setTransform(321.1,196.9);

	// TrueBall
	this.instance = new lib.TrueBallMC();
	this.instance.setTransform(402.7,184.2,0.361,0.361);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).to({regX:6.3,regY:-5,scaleX:0.79,scaleY:0.79,x:439.9,y:244.3},6,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:443.3,y:364.3},6,cjs.Ease.get(-0.5)).to({scaleY:0.77,y:369.3},3).to({scaleY:1,y:364.3},3).to({_off:true},334).wait(283));

	// TrueBallShadow
	this.instance_1 = new lib.TrueBallShadowMC();
	this.instance_1.setTransform(437.2,379.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(152).to({_off:false},0).to({scaleX:0.52},5).to({scaleX:1},5).to({_off:true},324).wait(283));

	// BallPopUp
	this.instance_2 = new lib.BallPopUpMC();
	this.instance_2.setTransform(450.7,295.3,0.023,0.023);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({scaleX:1,scaleY:1},4).to({scaleX:0.77,scaleY:0.77},4).to({scaleX:1,scaleY:1},4).wait(32).to({scaleX:0.02,scaleY:0.02},4).to({_off:true},353).wait(283));

	// BlueBoy
	this.instance_3 = new lib.BlueBoyMC();
	this.instance_3.setTransform(420.1,467,1,1,0,0,0,3,30.9);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:420,y:288.5},6,cjs.Ease.get(0.5)).to({scaleY:0.73,x:420.1,y:377},6,cjs.Ease.get(-0.5)).to({scaleY:1},5,cjs.Ease.get(0.5)).wait(110).to({scaleY:0.71},3,cjs.Ease.get(0.5)).to({scaleY:0.96,x:421.1,y:285.7},4).to({scaleY:1,x:420.1,y:377},4,cjs.Ease.get(-0.5)).to({scaleY:0.71},4).to({scaleY:1},5).to({scaleY:0.71},4).to({scaleY:0.96,x:421.1,y:285.7},4,cjs.Ease.get(0.5)).to({scaleY:1,x:420.1,y:377},4,cjs.Ease.get(-0.5)).to({scaleY:0.71},4).to({scaleY:1},5).to({_off:true},308).wait(283));

	// BlueBoyShadow
	this.instance_4 = new lib.BlueBoyShadowMC();
	this.instance_4.setTransform(418.3,374.9);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:0.54},6,cjs.Ease.get(0.5)).to({scaleX:1},6,cjs.Ease.get(-0.5)).wait(115).to({scaleX:0.65},0).to({scaleX:0.42},7).to({scaleX:0.65},6).wait(13).to({scaleX:0.39},5).to({scaleX:0.65},5).to({_off:true},313).wait(283));

	// IceCreamPopUp
	this.instance_5 = new lib.IceCreamPopUpMC();
	this.instance_5.setTransform(448.2,292.3,0.05,0.024);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).to({regX:0.8,regY:0.1,scaleX:1,scaleY:1,x:448.4,y:292.4,alpha:1},5).to({scaleX:1.08,scaleY:1.08},5).to({scaleX:1,scaleY:1},4).wait(18).to({rotation:-43.5,x:417.9,y:298.3,alpha:0},6).to({_off:true},411).wait(283));

	// Border1
	this.instance_6 = new lib.Border1MC();
	this.instance_6.setTransform(439.9,339.5,0.017,0.015,0,0,0,0,33.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({scaleX:1,scaleY:1,x:449.9,y:332.5},7,cjs.Ease.get(0.5)).to({scaleX:0.97,scaleY:0.97},6,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(0.5)).wait(17).to({scaleX:0.97,scaleY:0.95,rotation:-114.8,y:332.6,alpha:0},9).wait(5).to({scaleX:1,scaleY:1,rotation:0,y:332.5,alpha:1},5,cjs.Ease.get(0.5)).to({rotation:11.7},6).to({rotation:0},3).wait(29).to({scaleX:0.97,scaleY:0.95,rotation:-114.8,y:332.6,alpha:0},9).to({_off:true},348).wait(283));

	// Heart4
	this.instance_7 = new lib.Heart4MC();
	this.instance_7.setTransform(170.9,222.5,1,1,-16.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(429).to({_off:false},0).to({guide:{path:[170.9,222.5,173.9,207.9,181.1,177.9,189,144.3,191.9,129.6,196.6,105.3,195.7,95.3,194,78.2,184.5,58.1,171.5,33.2,164,16.6,151.9,-8.9,145.9,-22.3,135.7,-45.9,133.5,-60.6,132.5,-71.2,131.5,-81.7,131.5,-81.7,131.5,-81.7]},alpha:0},33).to({_off:true},306).wait(1));

	// Heart3
	this.instance_8 = new lib.Heart3MC();
	this.instance_8.setTransform(190.7,214.4,1,1,-16.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(426).to({_off:false},0).to({guide:{path:[190.7,214.3,190.7,214.3,190.7,214.3,191,207.5,199.2,190.6,203.9,180.5,216.6,156.7,229.3,133.2,234.2,122.7,242.3,105.7,242.7,98.7,243.6,86.8,237,72.7,227.9,55.4,223,43.8,214.6,26,210.8,16.7,204.1,0.3,204.1,-10.1,204.6,-17.5,205.2,-24.9]},alpha:0},44).to({_off:true},298).wait(1));

	// Heart2
	this.instance_9 = new lib.Heart2MC();
	this.instance_9.setTransform(175,168.9,1.463,1.463,-16.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(423).to({_off:false},0).to({regY:-1.3,scaleX:3.75,scaleY:4.15,guide:{path:[174.9,168.8,175.2,168.8,175.5,168.8,177,168.6,177.3,168,177.6,167.7,177.6,167.5,177.7,167.6,177.7,167,177.7,166.4,177.5,165.2,177.4,164.2,175,160.1,171.1,153.9,169.5,151,161.3,136,159.3,121.2,158.2,114.9,162.9,97.6,165,89.4,173.2,62.4,180.4,38.5,183.4,26.1,187.6,7.5,186.4,-1.3,184.7,-12.9,173.8,-29.5,168.5,-37.4,151.4,-59.4,136.7,-78.1,131,-88.5,122.4,-104.1,123.9,-114.8,122,-114.6,120.1,-114.3]},alpha:0},54).to({_off:true},291).wait(1));

	// Heart4
	this.instance_10 = new lib.Heart4MC();
	this.instance_10.setTransform(282.1,273.9,1,1,-16.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(239).to({_off:false},0).to({guide:{path:[282.1,273.9,285.1,259.3,292.3,229.3,300.3,195.7,303.2,181,307.9,156.7,306.9,146.7,305.2,129.6,295.7,109.5,282.8,84.6,275.3,68,263.1,42.5,257.2,29.1,247,5.5,244.7,-9.2,243.7,-19.8,242.7,-30.3,242.7,-30.3,242.7,-30.3]},alpha:0},33).to({_off:true},306).wait(191));

	// Heart3
	this.instance_11 = new lib.Heart3MC();
	this.instance_11.setTransform(301.9,265.8,1,1,-16.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(236).to({_off:false},0).to({guide:{path:[301.9,265.8,301.9,265.8,301.9,265.8,302.3,259,310.5,242.1,315.2,232,327.9,208.2,340.5,184.7,345.5,174.2,353.5,157.2,353.9,150.2,354.8,138.1,348.3,124.1,339.2,106.8,334.2,95.2,325.9,77.5,322,68.2,315.3,51.7,315.4,41.3,315.9,33.9,316.4,26.6]},alpha:0},44).to({_off:true},298).wait(191));

	// Heart2
	this.instance_12 = new lib.Heart2MC();
	this.instance_12.setTransform(286.2,220.3,1.463,1.463,-16.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(233).to({_off:false},0).to({regY:-1.3,scaleX:3.75,scaleY:4.15,guide:{path:[286.1,220.2,286.4,220.2,286.7,220.2,288.2,220,288.5,219.4,288.8,219.1,288.8,218.9,289,219,288.9,218.4,288.9,217.8,288.7,216.6,288.6,215.6,286.2,211.5,282.3,205.3,280.7,202.4,272.5,187.4,270.5,172.6,269.4,166.3,274.1,149,276.2,140.8,284.4,113.8,291.6,89.9,294.6,77.5,298.8,58.9,297.6,50.1,295.9,38.5,285,21.9,279.7,14,262.6,-8,247.9,-26.7,242.2,-37.1,233.6,-52.7,235.1,-63.4,233.2,-63.2,231.3,-62.9]},alpha:0},54).to({_off:true},291).wait(191));

	// Heart4
	this.instance_13 = new lib.Heart4MC();
	this.instance_13.setTransform(424.7,302.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(147).to({_off:false},0).to({x:474.8,y:-17,alpha:0},33).to({_off:true},306).wait(283));

	// Heart3
	this.instance_14 = new lib.Heart3MC();
	this.instance_14.setTransform(445.9,300.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(144).to({_off:false},0).to({guide:{path:[445.8,300.6,448.2,294.2,460.9,280.4,468.3,272.1,487.3,253,506.2,234,514,225.5,526.6,211.5,529,204.9,533.3,193.6,531.1,178.2,527.4,159,526,146.7,523.1,127.3,522.2,117.2,520.5,99.6,523.5,89.6,526.1,82.7,528.7,75.8,528.7,75.8,528.7,75.8]},alpha:0},44).to({_off:true},298).wait(283));

	// Heart2
	this.instance_15 = new lib.Heart2MC();
	this.instance_15.setTransform(444,252.6,1.463,1.463);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(141).to({_off:false},0).to({regY:-1.3,scaleX:3.75,scaleY:4.15,guide:{path:[443.9,252.5,444.2,252.6,444.4,252.7,446,252.9,446.5,252.4,446.8,252.2,446.8,252,447,252.2,447.1,251.6,447.3,251.1,447.4,249.8,447.6,248.7,446.5,244.2,444.5,237.1,443.8,233.9,440.3,217.2,442.7,202.4,443.5,196,452.9,180.8,457.3,173.6,472.9,150,486.7,129.3,493.2,118.1,502.7,101.6,504,92.9,505.8,81.3,500.1,62.3,497.3,53.2,487.3,27.3,478.6,5,476.1,-6.6,472.3,-23.9,476.9,-33.8,475.1,-34.1,473.2,-34.4]},alpha:0},54).to({_off:true},291).wait(283));

	// Book
	this.instance_16 = new lib.BookMC();
	this.instance_16.setTransform(259.9,206.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(227).to({_off:false},0).to({regX:-0.1,regY:-5,rotation:486.2,x:341,y:270.8},7).to({regX:0,regY:0,rotation:360,y:355.9},8).to({_off:true},244).wait(283));

	// GreenBoy
	this.instance_17 = new lib.GreenBoyMc();
	this.instance_17.setTransform(297.9,551.2,1,0.958,0,0,0,0,29.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(155).to({_off:false},0).to({scaleY:0.86,y:317.7},7,cjs.Ease.get(0.5)).to({scaleY:0.72,x:304.6,y:377.2},6).to({regY:30,scaleY:1,y:377.3},6).wait(59).to({regY:29.9,scaleY:0.72,y:377.2},5,cjs.Ease.get(-0.5)).to({regY:30,scaleY:1,y:275.3},4).to({regY:29.9,scaleY:0.72,y:377.2},5).to({regY:30,scaleY:1,y:377.3},4,cjs.Ease.get(0.5)).to({regY:29.9,scaleY:0.72,y:377.2},5,cjs.Ease.get(-0.5)).to({regY:30,scaleY:1,y:275.3},4).to({regY:29.9,scaleY:0.72,y:377.2},5).to({regY:30,scaleY:1,y:377.3},4,cjs.Ease.get(0.5)).to({_off:true},217).wait(283));

	// GreenBoyShadow
	this.instance_18 = new lib.GreenBoyShadow();
	this.instance_18.setTransform(298.4,548.1,1,1.329);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(155).to({_off:false},0).to({scaleX:0.66,scaleY:1.19,y:371.9},7,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,x:305.1,y:374.9},6).wait(6).to({_off:true},301).wait(294));

	// BookPopUp
	this.instance_19 = new lib.BookPopUpMC();
	this.instance_19.setTransform(334.9,331.9,0.718,0.718,-129.8,0,0,-1,35);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(175).to({_off:false},0).to({regX:-1.1,scaleX:1,scaleY:1,rotation:21,x:334.8,alpha:1},7,cjs.Ease.get(0.5)).to({regX:-1,rotation:0,x:334.9},6).wait(35).to({scaleX:0.72,scaleY:0.72,rotation:-129.8,alpha:0},10,cjs.Ease.get(-0.5)).to({_off:true},253).wait(283));

	// FlowerPopUp
	this.instance_20 = new lib.FlowerPopUpMC();
	this.instance_20.setTransform(222.1,294,0.026,0.027);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(359).to({_off:false},0).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,x:222.4,y:293.7},7).to({regX:0.2,regY:-0.2,scaleX:0.89,scaleY:0.89,y:293.8},3).to({regX:0.3,regY:-0.3,scaleX:1,scaleY:1,y:293.7},4).wait(14).to({rotation:-42.7,x:193.3,y:345.5,alpha:0},6).to({_off:true},93).wait(283));

	// PinkGirl
	this.instance_21 = new lib.PinkGirlMC();
	this.instance_21.setTransform(186.3,493.7,1,1,0,0,0,0,31);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(259).to({_off:false},0).to({x:191.5,y:266.7},6,cjs.Ease.get(0.5)).to({scaleY:0.76,x:190.5,y:375.7},6).to({scaleY:1},7,cjs.Ease.get(-0.5)).wait(133).to({scaleY:0.76},7,cjs.Ease.get(0.5)).to({scaleY:1,y:276.7},5,cjs.Ease.get(-0.5)).to({y:375.7},6,cjs.Ease.get(0.5)).to({scaleY:0.76},6,cjs.Ease.get(0.5)).to({scaleY:1,y:276.7},5,cjs.Ease.get(-0.5)).to({regY:30.9,scaleY:0.85,y:375.7},6,cjs.Ease.get(0.5)).to({regY:31,scaleY:1},9).to({_off:true},31).wait(283));

	// RoojPopUp
	this.instance_22 = new lib.RoojPopUpMC();
	this.instance_22.setTransform(225.6,295.2,0.61,0.61,0,0,0,-0.1,1.1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(287).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).to({regY:1.2,scaleX:0.89,scaleY:0.89,y:295.3},4).to({regY:1.1,scaleX:1,scaleY:1,y:295.2},5).wait(40).to({rotation:-52,x:186.4,y:341.3,alpha:0},8).to({_off:true},135).wait(283));

	// Border2
	this.instance_23 = new lib.Border2MC();
	this.instance_23.setTransform(220.7,331.3,1,1,-116.1,0,0,-1,35);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(278).to({_off:false},0).to({rotation:22.4,alpha:1},7).to({rotation:0},7).wait(51).to({rotation:-113.8,alpha:0},8,cjs.Ease.get(0.5)).to({rotation:0,alpha:1},8).wait(28).to({rotation:-113.8,alpha:0},6).to({_off:true},93).wait(283));

	// PinkGirlShadow
	this.instance_24 = new lib.PinkGirlShadowMC();
	this.instance_24.setTransform(186,373.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(259).to({_off:false},0).to({_off:true},227).wait(283));

	// Flower
	this.instance_25 = new lib.FlowerMC();
	this.instance_25.setTransform(266.8,188.5,1,1,0,0,0,1,-7);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(407).to({_off:false},0).to({rotation:360,x:233.8,y:347.5,alpha:1},16,cjs.Ease.get(0.5)).to({_off:true},63).wait(283));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_259 = new cjs.Graphics().p("EgyYAU8MAAAgp3MBkxAAAMAAAAp3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_1_graphics_259,x:319.6,y:127}).wait(510));

	// DadMostach
	this.instance_26 = new lib.DadMostachMC();
	this.instance_26.setTransform(245.1,350.7);

	this.instance_26.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({y:153.7},4,cjs.Ease.get(0.5)).to({y:190.7},4,cjs.Ease.get(-0.5)).wait(95).to({y:198.7},8).to({y:190.7},6).to({y:198.7},7).to({y:190.7},7).wait(189).to({rotation:-2.7,x:235.5,y:189.7},5).to({rotation:0,x:245.1,y:190.7},5).to({rotation:-6.2,x:255.1},5).to({rotation:0,x:245.1},6).wait(68).to({x:250.1,y:222.7},5).to({x:245.1,y:190.7},3).to({_off:true},69).wait(283));

	// Dad
	this.instance_27 = new lib.DadMC();
	this.instance_27.setTransform(244.5,394.9,1,1,0,0,0,0,60.4);

	this.instance_27.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({y:197.9},4,cjs.Ease.get(0.5)).to({scaleY:0.74,y:234.9},4,cjs.Ease.get(-0.5)).to({scaleY:1},6,cjs.Ease.get(0.5)).wait(89).to({scaleY:0.94},6).to({scaleY:1},8).to({scaleY:0.94},8).to({scaleY:1},6).wait(93).to({regY:60.3,scaleX:0.97,scaleY:0.98,x:248.5,y:240.8},3).to({regY:60.4,scaleX:1,scaleY:1,x:244.5,y:234.9},3).wait(90).to({scaleX:0.95},5).to({scaleX:1},5).to({scaleX:0.98},5).to({scaleX:1},6).wait(68).to({scaleY:0.92,x:249.5,y:254.9},4).to({scaleY:1,x:244.5,y:234.9},4).to({_off:true},69).wait(283));

	// DadShadow
	this.instance_28 = new lib.DadShadowMC();
	this.instance_28.setTransform(244.5,394.9);

	this.instance_28.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:0.5,y:237.9},4,cjs.Ease.get(0.5)).to({scaleX:1,y:234.9},4,cjs.Ease.get(-0.5)).wait(6).to({_off:true},472).wait(283));

	// MomMouth
	this.instance_29 = new lib.MomMouthMC();
	this.instance_29.setTransform(363.1,314.5);
	this.instance_29._off = true;

	this.instance_29.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(3).to({_off:false},0).to({y:154.5},5,cjs.Ease.get(0.5)).to({y:204.5},6,cjs.Ease.get(-0.5)).wait(38).to({rotation:-8,x:377.1,y:203.5},7).to({rotation:0,x:363.1,y:204.5},4).to({rotation:7,x:356.1},4).to({rotation:0,x:363.1},5).wait(120).to({y:208.5},6,cjs.Ease.get(0.5)).to({y:204.5},8,cjs.Ease.get(-0.5)).to({y:208.5},6,cjs.Ease.get(0.5)).to({y:204.5},8,cjs.Ease.get(-0.5)).wait(151).to({y:210.5},6).to({y:204.5},6).to({y:210.5},6).to({y:204.5},6).to({_off:true},91).wait(283));

	// Mom
	this.instance_30 = new lib.MomMC();
	this.instance_30.setTransform(361.3,347.6,1,1,0,0,0,0,63.1);
	this.instance_30._off = true;

	this.instance_30.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(3).to({_off:false},0).to({y:187.6},5,cjs.Ease.get(0.5)).to({regY:63.2,scaleY:0.78,y:237.7},6,cjs.Ease.get(-0.5)).to({regY:63.1,scaleY:1,y:237.6},6,cjs.Ease.get(0.5)).wait(32).to({scaleX:0.94},7).to({scaleX:1},4).to({scaleX:1.04},4).to({scaleX:1},5).wait(60).to({scaleX:0.93,x:366.3,y:240.6},3).to({scaleX:1,x:361.3,y:237.6},4).wait(53).to({scaleY:0.89},8,cjs.Ease.get(0.5)).to({scaleY:1},6,cjs.Ease.get(-0.5)).to({scaleY:0.89},7,cjs.Ease.get(0.5)).to({scaleY:1},7,cjs.Ease.get(-0.5)).wait(151).to({scaleY:0.92},6).to({scaleY:1},6).to({scaleY:0.92},6).to({scaleY:1},6).to({_off:true},91).wait(283));

	// MomShadow
	this.instance_31 = new lib.MomShadowMC();
	this.instance_31.setTransform(365.4,344.9);
	this.instance_31._off = true;

	this.instance_31.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(3).to({_off:false},0).to({scaleX:0.51,y:233.9},5,cjs.Ease.get(0.5)).to({scaleX:1,y:234.9},6,cjs.Ease.get(-0.5)).wait(6).to({_off:true},466).wait(283));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(491,511.4,146.9,131.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;