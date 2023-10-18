var navi = document.getElementById("master").addEventListener("click",function(){
    mass()
});


function mass(){
    var hello = document.getElementsByTagName("ul")[0];

    hello.classList.toggle("jass");

    for(var i=0;i<5;i++){
      var mass =  document.getElementsByClassName("rem")[i].addEventListener("click",function(){
      
        document.getElementsByTagName("ul")[0].classList.remove("jass");
     
    });
}  
   
}