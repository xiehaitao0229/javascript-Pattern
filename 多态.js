let makeSound = function(animal){
  animal.sound();
}

let Duck = function(){}
Duck.prototype.sound = function(){
  console.log( '嘎嘎嘎' ); 
}; 

let Dog = function(){}
Dog.prototype.sound = function(){
  console.log( '旺旺旺' ); 
}; 

makeSound(new Duck())

makeSound(new Dog())

