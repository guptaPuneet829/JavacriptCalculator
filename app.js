(()=>{
    const buttons=document.querySelectorAll(".btn");
    const clearBtn=document.querySelector(".clearBtn");
    const equalBtn=document.querySelector(".equalBtn");
    const display=document.querySelector(".display");
    const dltBtn=document.querySelector(".deleteBtn");

    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            const btnValue = e.target.innerHTML;
            display.value += btnValue;
        })
    });

    equalBtn.addEventListener("click",()=>{
        if(display.value===""){
            return;
        }
        else{
            const calculatedAns=eval(display.value);
            display.value=calculatedAns;
        }
    })
    clearBtn.addEventListener("click",()=>{
        display.value="";
    })

    dltBtn.addEventListener("click",()=>{
        display.value=display.value.substring(0,display.value.length-1);
    })
})();