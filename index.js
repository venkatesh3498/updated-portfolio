window.onscroll = function() {myfunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var lin = document.querySelector(".topnav .links")
function myfunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        lin.className = "links";
    } else {
        navbar.classList.remove("sticky");
        
    }
}

function myFunction() { 
    
    if(lin.className==="links"){
        lin.className += " responsive";
    }
    else{
        lin.className = "links";
    }
    
}


var progress = document.getElementsByTagName("progress");
var skills = document.getElementById("about");
window.addEventListener('scroll',checkscroll);
var animationdone = false;
function setbarszero(){
    for(var bar of progress){
        bar.value = 0;
    }
}

function checkscroll(){
    var coord = skills.getBoundingClientRect();
        if(!animationdone && coord.top < window.innerHeight){
            animationdone = true;
            setbarszero();
            fillbars();
        }
        else if(coord.top>window.innerHeight){
            animationdone = false;
        }
    
}
function fillbars(){
    for(let i=0;i<progress.length;i++){
        let target = parseInt(progress[i].getAttribute('data-bar'));
        var id = setInterval(frame,20);
        let temp = 0;
        function frame(){
            if(progress[i].value>=target){
                temp = 0;
                clearInterval(id);
            }
            else{
                temp++;
                progress[i].value = temp;
                
            }
        }
        
    }
}







// JQuery Code

$(document).ready(function(){
    $(this).scroll(function(){
        




        var $winheight = $(window).height();
        var $winpos = $(document).scrollTop()+$winheight + 200;
        $(".ima").each(function () { 
            var $pos = $(this).offset().top;
            if($winpos>$pos){
                $(this).addClass("imosli");
            }
            else{
                $(this).removeClass("imosli");
            }
        });
        $(".slider").each(function () { 
            var $slipos = $(this).offset().top;
            if($winpos>$slipos){
                $(this).addClass("About");
            }
            else{
                $(this).removeClass("About");
            }
        });
        $(".social").each(function(){
            var $socpos = $(this).offset().top;
            if($winpos>$socpos){
                $(this).addClass("socials");
            }
            else{
                $(this).removeClass("socials");
            }
        })
    });
});