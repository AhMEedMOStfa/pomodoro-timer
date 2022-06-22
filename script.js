//selecting elements

//btns selecting
let startWork = document.querySelector('.start-Work');
let startBreak = document.querySelector('.start-Break');
let resumeWork = document.querySelector('.resume-Work');
let endWork = document.querySelector('.end-work');

//span selecting
let workHour=document.querySelector('.work-hour');
let workMinute=document.querySelector('.work-minute');
let workSecond=document.querySelector('.work-second');
let breakHour=document.querySelector('.break-hour');
let breakMinute=document.querySelector('.break-minute');
let breakSecond=document.querySelector('.break-second');
//variables
let secondForWork=00;
let minuteForWork=00;
let hourForWork=00;

let secondforBreak=0;
let minuteForBreak=00;
let hourForBreak=00;
//interval variable
let startWorkInterval;
let startBreakInterval;
let resumeWorkInterval;
let work=false;
let breakpoint=false;
let resume=false;
let end=false;

//functionality

//disable for btns
startBreak.disabled=true;
resumeWork.disabled=true;
endWork.disabled=true;

//start work event
startWork.addEventListener('click',function(){
        if(!work)
        {
            breakpoint=false;
            end=false;
            resume=false;
         startWorkInterval= setInterval(startWorkFunction,1000);
         clearInterval(startBreakInterval);
         clearInterval(resumeWorkInterval);
        }
        work=true;
        startBreak.disabled=false;
        resumeWork.disabled=false;
        endWork.disabled=false;
        startWork.disabled=true;
});

//start break event
startBreak.addEventListener('click',function(){
        if(!breakpoint)
        {
        work=false;
        resume=false;
        end=false;
        clearInterval(startWorkInterval);
        clearInterval(resumeWorkInterval);
        startBreakInterval= setInterval(startBreakFunction,1000);
         }
    breakpoint=true;    
});
//resume work event
resumeWork.addEventListener('click',function(){
      if(!resume)
        {
       breakpoint=false;
       work=false;
       end=false;
       clearInterval(startBreakInterval);
       clearInterval(startWorkInterval);
       resumeWorkInterval= setInterval(startWorkFunction,1000);
       }
        resume=true;
 });
 //end work event
endWork.addEventListener('click',function(){
        if(!end)
        {
            resume=false;
            work=false;
            breakpoint=false;
        clearInterval(startWorkInterval);
        clearInterval(startBreakInterval);
        clearInterval(resumeWorkInterval);
        endWorkFunction();
        }
        end=true;
        startBreak.disabled=true;
        resumeWork.disabled=true;
        endWork.disabled=true;  
        startWork.disabled=false;
});
//start work fn
let startWorkFunction = function()
{
     secondForWork++;
     if(secondForWork>=60)
     {
        secondForWork=00;
        minuteForWork++;
        if(minuteForWork>=60)
        {
            minuteForWork=00;
            hourForWork++;
        }
     }
     workSecond.textContent= (secondForWork<=9)?('0'+secondForWork):secondForWork;
     workMinute.textContent=(minuteForWork<=9)?('0'+minuteForWork):minuteForWork;
     workHour.textContent=(hourForWork<=9)?('0'+hourForWork):hourForWork;
}
//break work fn
let startBreakFunction = function(){
    secondforBreak++;
    if(secondforBreak>=60)
    {
       secondforBreak=00;
       minuteForBreak++;
       if(minuteForBreak>=60)
       {
           minuteForBreak=00;
           hourForBreak++;
       }
    }
    breakSecond.textContent= (secondforBreak<=9)?('0'+secondforBreak):secondforBreak;
    breakMinute.textContent=(minuteForBreak<=9)?('0'+minuteForBreak):minuteForBreak;
    breakHour.textContent=(hourForBreak<=9)?('0'+hourForBreak):hourForBreak; 
};
//end work
let endWorkFunction=function()
{
    alert(`WorkTime=>hour:${hourForWork}-Minute:${minuteForWork}-Second:${secondForWork}`);
    alert(`BreakTime=>hour:${hourForBreak}-Minute:${minuteForBreak}-Second:${secondforBreak}`);
//reset values
 secondForWork=00;
 minuteForWork=00;
 hourForWork=00;
 secondforBreak=00;
 minuteForBreak=00;
 hourForBreak=00;
 //reset html
   workSecond.textContent='00';
   workMinute.textContent='00';
   workHour.textContent='00';
   breakSecond.textContent='00';
   breakMinute.textContent='00';
   breakHour.textContent='00';
}
