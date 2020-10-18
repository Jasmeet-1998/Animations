$(document).ready(function(){
  $surface=$('.surface');
  $car=$('.car');
  $img=$('.car img');
  let flag=true;
  const cars=["./assets/Img_05.png","./assets/Img_06.png"]


  //keypress Event
  $(document).on('keypress',function(e){
    console.log(e.which);//displays the value associated when a key is Pressed.
    if(e.which==13){
      $($surface).toggleClass("moveRight");
      $($car).toggleClass("suspension");
    }
  });

  //lights
  $(document).on('keypress',function(e){
    console.log(e.which);//displays the value associated when a key is Pressed.
    if(e.which==32){
      if(flag){
        flag=false;
        $img.attr('src',cars[0]);// to switch off the lights
      }
      else{
        flag=true;
        $img.attr('src',cars[1]);////to switch on the lights
    }
  }
  });


});
