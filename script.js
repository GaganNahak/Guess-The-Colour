const colourText=document.getElementById("colorText")
const right=document.getElementById("right")
const wrong=document.getElementById("wrong")
const counter=document.getElementById("counter")
const sublimit=document.getElementById("sublimit")
let corr=0;
    let inco=0;
    let tap=0
function start(){
    
    let count=0
    
    let intervalId=setInterval(()=>{
        randomInt=Math.floor(Math.random()*5)
       randomInt1=Math.floor(Math.random()*5)
      
        switch(randomInt){
            case 0:
                colourText.innerHTML="RED"
                break
            case 1:
                colourText.innerHTML="ORANGE"
                break
            case 2:
                colourText.innerHTML="YELLOW"
                break
            case 3:
                colourText.innerHTML="GREEN"
                break
            case 4:
                colourText.innerHTML="BLUE"
                break
            case 5:
                colourText.innerHTML="VIOLET"
                break
        }

        switch(randomInt1){
            case 0:
                colourText.style.color="RED"
                break
            case 1:
                colourText.style.color="ORANGE"
                break
            case 2:
                colourText.style.color="YELLOW"
                break
            case 3:
                colourText.style.color="GREEN"
                break
            case 4:
                colourText.style.color="BLUE"
                break
            case 5:
                colourText.style.color="VIOLET"
                break
        }

        sublimit.style.backgroundColor="rgba(184, 131, 230, 0.84)"
   sublimit.style.animation=" filler 1.5s 0.001s 15 ease-in-out"
       
        count++
        sublimit.innerHTML=count
        
        if(count>=15){
            clearInterval(intervalId)
        }
    },1500)
   document.getElementById("start").remove()
    
 
}
document.getElementById("check").addEventListener('click',()=>{
    counter.innerHTML="Attended "+tap+" correct is "+corr+" incorrect is "+inco
    console.log("correct is "+corr)
    console.log(" incorrect is "+inco)
    if(corr==0 && inco==0){
        counter.innerHTML="No Attends"
    }
})
    right.addEventListener('click',()=>{
        if(randomInt==randomInt1){
           corr++
        }
        else{
           inco++
        }
        tap++
    })
    wrong.addEventListener('click',()=>{
       if(randomInt!=randomInt1){
          corr++
       }
       else{
          inco++
       }
       tap++
   })