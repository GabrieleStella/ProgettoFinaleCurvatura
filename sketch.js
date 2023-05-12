/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function preload() {
  treeModel = loadAsset("albero.glb"); //add
}

function setup() {
  createCanvas3D(windowWidth, windowHeight)

  environment(SUNSET);
  
  diffuse("#00A107");
  
 var albero2 = beginGroup();
  roughness(0.3); 
  diffuse("brown");
  cylinder(0, 1, 0, 0.3, 1);
  diffuse("#005200");
  cone(0, 2, 0, 1.5, 1);
   diffuse("#006305");
  cone(0, 2.5, 0, 1.2, 1);
   diffuse("#006E1B");
  cone(0, 3, 0, 1, 1);
   diffuse("#005E05");
  cone(0, 3.6, 0, 0.5, 0.7);
 endGroup();
  
  //foresta:
  var lato = 95;
  var numeroAlberi = 190;
  for  (var i=0; i<numeroAlberi; i++)
    {
      var x = random(-lato/2, lato/2);
      var y = 0;
      var z = random(-lato/2, lato/2);
      var nuovoAlbero = clone(albero2, x, y, z);
      nuovoAlbero.setScale(random(1, 1.8));
    }
  
  align(BOTTOM);
  diffuse("#3B8800");
  box(0, 0.8, 0, lato+60, 1, lato+60);
  
  pushFX(BLOOM, 0.25);  
  
}


function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
}
