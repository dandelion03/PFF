window.onload = function(){ 
       let btn=document.querySelector("#btn-bar");
       let sidebar=document.querySelector(".sidebar");
       let search=document.querySelector("#search");

      btn.onclick = function(){
           sidebar.classList.toggle("active");
       }
       search.onclick = function(){
           sidebar.classList.toggle("active");
       }
       const arrows=document.querySelectorAll(".arrowswipe");
       const bookLists = document.querySelectorAll(".mainbookswrapper");
       arrows.forEach((arrow,i)=>{
        const maxclicks=bookLists[i].querySelectorAll(".mainbookcover").length;
        let clickCounter=0;
           arrow.addEventListener("click" ,()=>{
               clickCounter++;
               if(maxclicks - (4+ clickCounter)>0) {
                bookLists[i].style.transform=`translateX(
                    ${bookLists[i].computedStyleMap().get("transform")[0].x.value -160}px)`;
               }else {
                bookLists[i].style.transform="translateX(0)";
                clickCounter=0;
               }
            
           });

          
       });

        const dotmenu =  document.querySelectorAll(".dots");
        const drop =  document.querySelector(".dropcontainer");
        dotmenu.forEach(function(dots){
            dots.addEventListener("click", function(){
                drop.classList.toggle("active");
            })
        })
    };