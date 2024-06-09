var mbtn = document.querySelectorAll(".menu-btn")[0];
var mobile_nav = document.querySelectorAll("nav.sms")[0];
var dropdown_btn = document.querySelectorAll(".dropdown-btn");

var circle_btn_left = document.querySelectorAll(".circle-btn.left-btn");
var circle_btn_right = document.querySelectorAll(".circle-btn.right-btn");
scroller = document.querySelectorAll(".testimonial-scroller")[0];

nav_open = false;
mbtn.addEventListener("click", ()=>{
    mbtn.classList.toggle("fa-bars");
    mbtn.classList.toggle("fa-times");
    if(nav_open){
        mobile_nav.style.display = "none";
        nav_open = false;
    }
    else{
        mobile_nav.style.display = "flex"
        nav_open = true;
    }
});

dropdown_btn.forEach(function(dropdown_btn){
    dropdown_btn.addEventListener("click", function(){
        tparent = this.parentElement;
        if(this.classList.contains("fa-plus-circle")){
            tparent.style.background = "#F5FCFF";
            tparent.style.color = "var(--blue)";
            tparent.parentElement.querySelectorAll(".dropdown")[0].style.display = "block";
        }
        else{
            tparent.style.background = "transparent";
            tparent.style.color = "var(--black)";
            this.parentElement.parentElement.querySelectorAll(".dropdown")[0].style.display = "none";
        }

        this.classList.toggle("fa-plus-circle");
        this.classList.toggle("fa-times-circle-o");
    })
});

window.addEventListener("resize", function() {
    if(document.documentElement.clientWidth>1080){
        if(nav_open)
            mbtn.click();
    }
});


var s_distance = 373;

circle_btn_right.forEach(function(cbr){
    cbr.addEventListener("click", function(){
        scroller.scrollBy({left: s_distance, behavior: 'smooth'});
    });
});


circle_btn_left.forEach(function(cbl){
    cbl.addEventListener("click", function(){
        scroller.scrollBy({left: -s_distance, behavior: 'smooth'});
    });
});

scroller.addEventListener("scroll", function(){
    check_scroller();
})

check_scroller();
function check_scroller(){
    if(scroller.scrollLeft <= 0){
        circle_btn_left.forEach(function(cbl){
            cbl.classList.add("o3");
        });
        scroller.scrollBy({left: 0, behavior: 'auto'});
    }
    else
    circle_btn_left.forEach(function(cbl){
        cbl.classList.remove("o3");
    });

    if(scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth){
        circle_btn_right.forEach(function(cbr){
            cbr.classList.add("o3");
        });
        scroller.scrollBy({left: scroller.scrollWidth, behavior: 'auto'});
    }
    else
    circle_btn_right.forEach(function(cbr){
        cbr.classList.remove("o3");
    });
}

var t_scroller_width = document.querySelectorAll(".testimony-row")[0].scrollWidth;
document.querySelectorAll(".testimony-row")[0].style.setProperty('--scroller-width', `${t_scroller_width}px`);
