let user=0;
let comp=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#move");
let score1=document.querySelector("#user");

let score2=document.querySelector("#comp");
choices.forEach((choice) =>{
  choice.addEventListener("click",()=>{
    let a=choice.getAttribute("id");
    playgame(a);
  })
}
)

const compchoice = ()=>{
  let options=["rock","paper","scissor"];
  let computer=Math.floor(Math.random()*3);
  return options[computer];

}
const playgame=(a)=>{
  let compu=compchoice();
  if(compu===a)
    {
      drawgame();
    }
    else{
     let result=true;
      if(a==="rock")
        {
          if (compu==="paper")
            {
              result=false;
            }
            else{
              result=true;
            }
        }
      else if(a==="paper")
        {
          if (compu==="scissor")
            {
              result=false;
            }
            else{
              result=true;
            }
        }
        else if(a==="scissor")
          {
            if (compu==="rock")
              {
                result=false;
              }
              else{
                result=true;
              }
          }
          showwinner(result,a,compu);
    }
    

}
const showwinner=(result,a,compu) =>{
  if(result==true)
    {
      user++;
      score1.innerText=user;
      msg.style.backgroundColor="green";
      msg.innerText=`your ${a} beats computer's ${compu}`;
    }
    else{
      comp++;
      score2.innerText=comp;
      msg.style.backgroundColor="red";
      msg.innerText=`computer's ${compu} beats your ${a}`;
    }
}
const drawgame=() =>{
  msg.innerText="draw";
  msg.style.backgroundColor="grey";

}