function BounceOff(FR,MR){
    if(FR.x-MR.x<FR.width/2+MR.width/2 && MR.x-FR.x<FR.width/2+MR.width/2){
  FR.velocityX=FR.velocityX*(-1);
  MR.velocityX=MR.velocityX*(-1);
  }
  if (FR.y-MR.y<FR.height/2+MR.height/2 && MR.y-FR.y<FR.height/2+MR.height/2){
  FR.velocityY=FR.velocityY*(-1);
  MR.velocityY=MR.velocityY*(-1);
  }
}
function IsTouching(FR,MR){
if(FR.x-MR.x<FR.width/2+MR.width/2 && MR.x-FR.x<FR.width/2+MR.width/2
  && FR.y-MR.y<FR.height/2+MR.height/2 && MR.y-FR.y<FR.height/2+MR.height/2){
      return true;
  }else{
      return false;
  }
}
