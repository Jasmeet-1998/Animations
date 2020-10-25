const card=document.querySelector('.card');
const container=document.querySelector('.container');
//grab other
const title=document.querySelector('.title');
const product=document.querySelector('.product img');
const purchase=document.querySelector('.purchase button');
const desc=document.querySelector('.info h2');
const type=document.querySelector('.type');

//Moving Animation EventListener
container.addEventListener('mousemove',(e)=>{
  //console.log(e.pageX,e.pageY);//move the mouse and see the console how the event responds with cordinates.
  let xAxis = (window.innerWidth/2- e.pageX)/20 ; //X Axis window.innerWidth/2 is for the center position of the entire page.
  let yAxis = (window.innerHeight/2- e.pageY)/20; //Y Axis
  card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;




//Animate in
container.addEventListener('mouseenter',e=>{
  card.style.transition='none';
  //Pop Out Elements....
  title.style.transform="translateZ(160px) rotateZ(10deg)";
  product.style.transform="translateZ(160px) rotateZ(10deg)";//add try it :) rotateZ(360deg)
  desc.style.transform="translateZ(160px) rotateZ(10deg)";
  type.style.transform="translateZ(160px) rotateZ(10deg)";
  purchase.style.transform="translateZ(50px)";

});


//Animate out
container.addEventListener('mouseleave',(e)=>{
  card.style.transition='all 0.3s ease';
  card.style.transform=`rotateY(0deg) rotateX(0deg)`;
  //Pop Back Elements...
  title.style.transform="translateZ(0px)";
  product.style.transform="translateZ(0px) rotateZ(0deg)";
  desc.style.transform="translateZ(0px) rotateZ(0deg)";
  type.style.transform="translateZ(0px) rotateZ(0deg)";
  purchase.style.transform="translateZ(0px)";
});

});
