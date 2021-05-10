class Food{
constructor(){
    this.foodStalk=0
    this.lastFed;
    this.image=loadImage('images/Milk.png')
}
updateFoodStalk(foodStalk){
    this.foodStalk=foodStalk
}
getFoodStalk(){
    return this.foodStalk
}
deductFood(){
if(this.foodStalk>0){
    this.foodStalk=this.foodStalk-1
}

}
display(){
    var x=80;
    var y=100;
    imageMode(CENTER)
image(this.image,720,220,70,70)
if(this.foodStalk!=0){
for(var i=0;i<this.foodStalk;i++){
if(i%10===0){
    x=80;
    y=y+50;
}
image(this.image,x,y,50,50)
x=x+30
}
}
}
bedroom(){
    background(bedroom,550,500)
}
garden(){
    background(garden,550,500)
}
washroom(){
    background(washroom,550,500)
}

}

