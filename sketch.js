var dog,sadDog,happyDog;
var foodObj;
var feed,addfood;
var fedTime,lastFed;
var foodS,foodStock; 

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();

   foodObj = new food();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed = createButton('feed the dog');
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addfood = createButton('add Food');
  addfood.position(800,95);
  addfood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);

  foodObj.display(); 

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  })

  fill(255,255,255);
  textSize(15);
  if(lastFed >= 12){
    text("Last Fed: " + lastFed%12 + " PM",350,30);

  }else if(lastFed == 0){
     text("Last Food: " + lastFed + " AM",350,30);

  }else{
    text("Lat Feed: " +lastFed + " AM", 350,30);
  }

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStocks(foodS);
}

//function to add food in stock
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
  food:foodS.getFoodStock(),
  feedTime : hour() 
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}