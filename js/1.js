//购物车
var shop = document.getElementById("shop"), shopCar = document.getElementById("shopCar");
shop.onmouseenter = function () {
    shopCar.style.display = "block";
};
shop.onmouseleave = function () {
    shopCar.style.display = "none";
};

//搜索框
var list = document.getElementById("list"), search = document.getElementById("search"), button = document.getElementById("button");
var oInput = document.getElementById("_input"), InputList = oInput.getElementsByTagName("input");
search.onmouseenter = function (e) {
    e = e || window.event;
};
search.onfocus = search.onkeyup = function () {
    list.style.display = "block";
    search.style.borderColor = "#ff6700";
    button.style.borderColor = "#ff6700";
};
document.body.onclick = function (e) {
    e = e || window.event;
    var tar = e.target || e.srcElement;

    if (tar.tagName.toLowerCase() === "li" && tar.parentNode.id === "list") {
        search.value = tar.getElementsByTagName("a")[0].innerHTML;
        list.style.display = "none";
        return;
    }
    if (tar.tagName.toLowerCase() === "a" && tar.parentNode.id === "list") {
        search.value = tar.innerHTML;
        list.style.display = "none";
        return;
    }
    if (tar.id === "search") {
        return;
    }
    list.style.display = "none";

};
search.onblur = function () {
    search.style.borderColor = "#e0e0e0";
    button.style.borderColor = "#e0e0e0";
};


//轮播图上方列表
(function(){
//    var title = document.getElementById("title"), type = document.getElementById("type");
    var oLis = utils.getElementsByClass("title");
    var oDiv = utils.getElementsByClass("type");
    var phoneType = utils.getElementsByClass("phoneType");

    bindData();
    function bindData(){
        var str ="";
        str+='<li class="first-li"><img src='+dateAry0[0].logo+' alt=""><p class="name"><a href="">'+dateAry0[0].title+'</a></p><p class="price">'+dateAry0[0].desc+'</p></li>';
        for(var i=1;i<dateAry0.length;i++){
            str+='<li><img src='+dateAry0[i].logo+' alt=""><p class="name"><a href="">'+dateAry0[i].title+'</a></p><p class="price">'+dateAry0[i].desc+'</p></li>'
        }
        phoneType[0].innerHTML=str;
    }

    for(var i=0;i<oLis.length-2;i++){
        oLis[i].i = i;
        oLis[i].onmouseenter = function () {
            oDiv[0].style.display = "block";
        };
        oLis[i].onmouseleave = function () {
            oDiv[0].style.display = "none";
        };
    }

})();




////轮播图左侧列表
(function () {
    var outerLeft = document.getElementById("outerLeft");
    var oLis = utils.getElementsByClass("all-product");
    var oDiv = utils.getElementsByClass("phone");
    var oUl = utils.getElementsByClass("phoneSelect");

    bindData();
    function bindData(){
        var str="";
        for(var i=0;i<=6;i++){
            str+='<li><a class="link" href=""><img src='+leftListAry1[i].logo+' alt=""><span class="name">'+leftListAry1[i].title+'</span></a><a class="chose" href="">'+leftListAry1[i].desc+'</a></li>';
        }
        oUl[0].innerHTML=str;
        for(i=7;i<=12;i++){
            str+='<li><a class="link" href=""><img src='+leftListAry1[i].logo+' alt=""><span class="name">'+leftListAry1[i].title+'</span></a><a class="chose" href="">'+leftListAry1[i].desc+'</a></li>';
        }
        oUl[1].innerHTML=str;

    for(i=13;i<leftListAry1.length;i++){
        str+='<li><a class="link" href=""><img src='+leftListAry1[i].logo+' alt=""><span class="name">'+leftListAry1[i].title+'</span></a><a class="chose" href="">'+leftListAry1[i].desc+'</a></li>';
    }
    oUl[2].innerHTML=str;
}
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].i = i;
        oLis[i].onmouseover = function () {
            oDiv[0].style.display = "block";
            oDiv[0].style.width = "795px";
        };
        oLis[i].onmouseout = function () {
            oDiv[0].style.display = "none";
        };
    }
})();

//neck
(function(){
    var neckProduct=document.getElementById("neck-product");
    //var oLis=neckProduct.getElementsByTagName("li")

    bindData();
    function bindData(){
        var str="";
        for(var i=0;i<playNext.length;i++){
            str+='<li><a href=""><img src='+playNext[i].logo+' alt=""/></a></li>'
        }
        neckProduct.innerHTML=str;
    }
})();


//明星单品
(function(){
    var starPlay=document.getElementById("starPlay"),starPlayUl=document.getElementById("starPlayUl");

    bindData();
    function bindData(){
        var str="";
        for(var i=0;i<star.length-1;i++){
            str+='<li class="starList"><a class="im" href=""><img src='+star[i].logo+' alt=""/></a><h3><a href="">'+star[i].title+'</a></h3><p class="desc">'+star[i].desc+'</p><p class="price">'+star[i].price+'</p></li>'
        }
        str+='<li class="starList starLast"><a class="im" href=""><img src='+star[9].logo+' alt=""/></a><h3><a href="">'+star[9].title+'</a></h3><p class="desc">'+star[9].desc+'</p><p class="price">'+star[9].price+'</p></li>';

        starPlayUl.innerHTML=str;
    }

    var ary=["#ffac13","green","blue","red","#00c0a5"];
    var oLis=starPlayUl.getElementsByTagName("li");
    for(var i=0;i<oLis.length;i++){
        oLis[i].i=i;
        oLis[i].style.borderColor=ary[i];
        if(i>5){
            oLis[i].style.borderColor=ary[i-5];
        }
    }

    var step= 0,autoTimer=null;
    function autoMove(){
        step++;
        if(step>1){
            step=0;
            animate(starPlayUl,{left:-step*1240},300);
        }
        animate(starPlayUl,{left:-step*1240},300);
    }
    autoTimer=window.setInterval(autoMove,3000);
})();

//智能硬件

//(function(){
//    var smartProduct=document.getElementById("smart");
//
//    bindData();
//    function bindData(){
//        var str="";
//        for(var i=0;i<)
//    }
//})();


//搭配
(function(){
    var suitType=document.getElementById("suitType"),oLis=suitType.getElementsByTagName("li");
    var suitChange=document.getElementById("suitChange"),oUl=suitChange.getElementsByTagName("ul");
    for(var i=0;i<oLis.length;i++){
        oLis[i].onmouseover=function(){
            oLis[i].className="select";
           oUl[i].className="zIndex"
        }
    }
})();
//为你推荐
(function(){
    var introducePlayUl=document.getElementById("introducePlayUl");
    var step= 0,autoTimer=null;
    function autoMove(){
        step++;
        if(step>1){
            step=0;
            animate(introducePlayUl,{left:-step*1240},300);
        }
        animate(introducePlayUl,{left:-step*1240},300);
    }
    autoTimer=window.setInterval(autoMove,5000);
})();