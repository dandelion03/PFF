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

};