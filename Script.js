let adder=document.querySelector(".btn");
let txt=document.querySelector(".tt");
var placeholder = ["f","f","f","f","f"];
let rootstxt1=document.querySelector(".myspace1");
let rootsbuttons1=document.querySelector(".holders1");
let rootstxt2=document.querySelector(".myspace2");
let rootsbuttons2=document.querySelector(".holders2");
let rootstxt3=document.querySelector(".myspace3");
let rootsbuttons3=document.querySelector(".holders3");
let rootstxt4=document.querySelector(".myspace4");
let rootsbuttons4=document.querySelector(".holders4");
let rootstxt5=document.querySelector(".myspace5");
let rootsbuttons5=document.querySelector(".holders5");
let elem1=document.querySelector(".c1");
let elem2=document.querySelector(".c2");
let elem3=document.querySelector(".c3");
let elem4=document.querySelector(".c4");
let elem5=document.querySelector(".c5");

let d1=document.querySelector(".d1");
let e1=document.querySelector(".e1");
let d2=document.querySelector(".d2");
let e2=document.querySelector(".e2");
let d3=document.querySelector(".d3");
let e3=document.querySelector(".e3");
let d4=document.querySelector(".d4");
let e4=document.querySelector(".e4");
let d5=document.querySelector(".d5");
let e5=document.querySelector(".e5");

d1.classList.add("fade");
e1.classList.add("fade");
d2.classList.add("fade");
e2.classList.add("fade");
d3.classList.add("fade");
e3.classList.add("fade");
d4.classList.add("fade");
e4.classList.add("fade");
d5.classList.add("fade");
e5.classList.add("fade");
var count=0;

Reconstructor=()=>{
    if(txt.value==="" || txt.value.length>30)
    {
        alert("invalid or max entry");
        txt.value="";
    }
    else {
        if(placeholder[0]==="f")
        {
        let elemtxt=document.createTextNode(txt.value);
        elem1.appendChild(elemtxt);
        rootstxt1.appendChild(elem1);
        rootstxt1.classList.remove("fade");  
        rootsbuttons1.classList.remove("fade"); 
        d1.classList.remove("fade");
        e1.classList.remove("fade");
        
        placeholder[0]="t";
        d1.addEventListener("click",function()
         {
            rootstxt1.classList.add("fade");
            rootsbuttons1.classList.add("fade");
            elem1.innerHTML="";
            placeholder[0]="f";
         })
         e1.addEventListener("click",function(){
            placeholder[0]="f";
            let newdec=prompt();
            elem1.innerHTML=newdec;
            placeholder[0]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="f")
        {
        elemtxt=document.createTextNode(txt.value);
        elem2.appendChild(elemtxt);
        rootstxt2.appendChild(elem2);
        rootstxt2.classList.remove("fade");  
        rootsbuttons2.classList.remove("fade"); 
        d2.classList.remove("fade");
        e2.classList.remove("fade");
        placeholder[1]="t";
        d2.addEventListener("click",function()
         {
            rootstxt2.classList.add("fade");
            rootsbuttons2.classList.add("fade");
            elem2.innerHTML="";
            placeholder[1]="f";
         })
         e2.addEventListener("click",function()
         {
            placeholder[1]="f";
            let newdec=prompt();
            elem2.innerHTML=newdec;
            placeholder[1]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem3.appendChild(elemtxt);
        rootstxt3.appendChild(elem3);
        rootstxt3.classList.remove("fade");  
        rootsbuttons3.classList.remove("fade"); 
        d3.classList.remove("fade");
        e3.classList.remove("fade");
        placeholder[2]="t";
        d3.addEventListener("click",function()
         {
            rootstxt3.classList.add("fade");
            rootsbuttons3.classList.add("fade");
            elem3.innerHTML="";
            placeholder[2]="f";
         })
         e3.addEventListener("click",function()
         {
            placeholder[2]="f";
            let newdec=prompt();
            elem3.innerHTML=newdec;
            placeholder[2]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem4.appendChild(elemtxt);
        rootstxt4.appendChild(elem4);
        rootstxt4.classList.remove("fade");  
        rootsbuttons4.classList.remove("fade"); 
        d4.classList.remove("fade");
        e4.classList.remove("fade");
        placeholder[3]="t";
        d4.addEventListener("click",function()
         {
            rootstxt4.classList.add("fade");
            rootsbuttons4.classList.add("fade");
            elem4.innerHTML="";
            placeholder[3]="f";
         })
         e4.addEventListener("click",function()
         {
            placeholder[3]="f";
            let newdec=prompt();
            elem4.innerHTML=newdec;
            placeholder[3]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="t" && placeholder[4]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem5.appendChild(elemtxt);
        rootstxt5.appendChild(elem5);
        rootstxt5.classList.remove("fade");  
        rootsbuttons5.classList.remove("fade"); 
        d5.classList.remove("fade");
        e5.classList.remove("fade");
        placeholder[4]="t";
        d5.addEventListener("click",function()
         {
            rootstxt5.classList.add("fade");
            rootsbuttons5.classList.add("fade");
            elem5.innerHTML="";
            placeholder[4]="f";
         })
         e5.addEventListener("click",function()
         {
            placeholder[4]="f";
            let newdec=prompt();
            elem5.innerHTML=newdec;
            placeholder[4]="t";
         })
         }
        else if (placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="t" && placeholder[4]==="t"){
            alert("the list if full please delete finished tasks");
        }
        txt.value="";
    }
}



adder.addEventListener("click",Reconstructor);
txt.addEventListener("keypress",function(event)   //when enter is pressed
{
    if(event.keyCode===13)
    {
    if(txt.value==="" || txt.value.length>30)
    {
        alert("invalid or max entry");
        txt.value="";
    }
    else {
        if(placeholder[0]==="f")
        {
        let elemtxt=document.createTextNode(txt.value);
        elem1.appendChild(elemtxt);
        rootstxt1.appendChild(elem1);
        rootstxt1.classList.remove("fade");  
        rootsbuttons1.classList.remove("fade"); 
        d1.classList.remove("fade");
        e1.classList.remove("fade");
        
        placeholder[0]="t";
        d1.addEventListener("click",function()
         {
            rootstxt1.classList.add("fade");
            rootsbuttons1.classList.add("fade");
            elem1.innerHTML="";
            placeholder[0]="f";
         })
         e1.addEventListener("click",function(){
            placeholder[0]="f";
            let newdec=prompt();
            elem1.innerHTML=newdec;
            placeholder[0]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="f")
        {
        elemtxt=document.createTextNode(txt.value);
        elem2.appendChild(elemtxt);
        rootstxt2.appendChild(elem2);
        rootstxt2.classList.remove("fade");  
        rootsbuttons2.classList.remove("fade"); 
        d2.classList.remove("fade");
        e2.classList.remove("fade");
        placeholder[1]="t";
        d2.addEventListener("click",function()
         {
            rootstxt2.classList.add("fade");
            rootsbuttons2.classList.add("fade");
            elem2.innerHTML="";
            placeholder[1]="f";
         })
         e2.addEventListener("click",function()
         {
            placeholder[1]="f";
            let newdec=prompt();
            elem2.innerHTML=newdec;
            placeholder[1]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem3.appendChild(elemtxt);
        rootstxt3.appendChild(elem3);
        rootstxt3.classList.remove("fade");  
        rootsbuttons3.classList.remove("fade"); 
        d3.classList.remove("fade");
        e3.classList.remove("fade");
        placeholder[2]="t";
        d3.addEventListener("click",function()
         {
            rootstxt3.classList.add("fade");
            rootsbuttons3.classList.add("fade");
            elem3.innerHTML="";
            placeholder[2]="f";
         })
         e3.addEventListener("click",function()
         {
            placeholder[2]="f";
            let newdec=prompt();
            elem3.innerHTML=newdec;
            placeholder[2]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem4.appendChild(elemtxt);
        rootstxt4.appendChild(elem4);
        rootstxt4.classList.remove("fade");  
        rootsbuttons4.classList.remove("fade"); 
        d4.classList.remove("fade");
        e4.classList.remove("fade");
        placeholder[3]="t";
        d4.addEventListener("click",function()
         {
            rootstxt4.classList.add("fade");
            rootsbuttons4.classList.add("fade");
            elem4.innerHTML="";
            placeholder[3]="f";
         })
         e4.addEventListener("click",function()
         {
            placeholder[3]="f";
            let newdec=prompt();
            elem4.innerHTML=newdec;
            placeholder[3]="t";
         })
         }
        else if(placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="t" && placeholder[4]==="f")
        {
        
        elemtxt=document.createTextNode(txt.value);
        elem5.appendChild(elemtxt);
        rootstxt5.appendChild(elem5);
        rootstxt5.classList.remove("fade");  
        rootsbuttons5.classList.remove("fade"); 
        d5.classList.remove("fade");
        e5.classList.remove("fade");
        placeholder[4]="t";
        d5.addEventListener("click",function()
         {
            rootstxt5.classList.add("fade");
            rootsbuttons5.classList.add("fade");
            elem5.innerHTML="";
            placeholder[4]="f";
         })
         e5.addEventListener("click",function()
         {
            placeholder[4]="f";
            let newdec=prompt();
            elem5.innerHTML=newdec;
            placeholder[4]="t";
         })
         }
        else if (placeholder[0]==="t" && placeholder[1]==="t" && placeholder[2]==="t"&& placeholder[3]==="t" && placeholder[4]==="t"){
            alert("the list if full please delete finished tasks");
        }
        txt.value=""; 
    }
}
else{
    console.log("no");
}
});
