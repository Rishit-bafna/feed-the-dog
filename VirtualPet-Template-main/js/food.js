class food{

   constructor(){
     this.foodStock = 0;
     this.image1 = loadImage("Images/Milk.png");
     this.lastFed;

   }

   display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image1,720,220,70,70);
      
      if(this.foodStock!=0){
         for(var i=0;i<this.foodStock;i++){
       if(i%10==0){
          x=80;
          y=y+50; 
          }
         image(this.image,x,y,50,50);
      x=x+30;
      }
   }
      
}
      
 
getFedTime(lastFed){
 this.lastFed = lastFed;
}

updateFoodStock(foodStock){
   this.foodStock = foodStock;
}

detuctFood(){
   if(this.foodStock > 0){
     this.foodStock = this.foodStock-1;
   }
}

getFoodStock(){
return this.foodStock;
}


}