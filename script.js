var splashs = document.getElementsByClassName("splash");
var splashs_count = splashs.length;
for(var i=0; i<splashs.length; i++){
    if(i>0)
    {
        splashs[i].style.left="100%";
        splashs[i].style.opacity="0";
    }
    TreatNext(splashs[i], i);
}
function TreatNext(splash, i){
    var div1 = splash.getElementsByTagName("div")[0];
    var h1 = splash.getElementsByTagName("h1")[0];
    var a = splash.getElementsByTagName("a")[0];
    var btn = splash.getElementsByTagName("button")[0];
    btn.onclick = function(){
        if(btn.innerHTML.toLowerCase().indexOf("next") != -1){
        div1.style.transform="translateX(-200%)";
        div1.style.transition="1s";
        h1.style.transform="translateX(-200%)";
        h1.style.transition="2s";
        a.style.transform="translateX(-200%)";
        a.style.transition="3s";
        btn.style.transform="translateX(-200%)";
        btn.style.transition="2.5s";
        setTimeout(function(){
            splash.style.transform="translateX(-100%)";
            splash.style.transition="1s";
            if((i+1) < splashs_count ){
                var splash_next = splashs[i+1];
                splash_next.style.left="0px";
                splash_next.style.opacity="1";
                splash_next.style.transition="1s";
            }
        }, 500);
        }
        else{
            alert("done");
        }
    };
}