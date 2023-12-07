var n;
function OpenTab(num){
n = num;
   switch (n) {
    case 0:
        document.getElementById("sig").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
        break;
    case 1:
        document.getElementById("ques").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    case 2:
        document.getElementById("lit").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    case 3:
        document.getElementById("met").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    case 4:
        document.getElementById("results").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    case 5:
        document.getElementById("implication").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
             break;
    case 6:
        document.getElementById("limits").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    case 7:
        document.getElementById("conclu").style.width = "600px";
        document.getElementById("main").style.marginLeft = "600px";
            break;
    default:
        break;
   }

}
function closeNav(num) {
n = num;
switch (n) {
    case  0:
    document.getElementById("sig").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  1:
    document.getElementById("ques").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  2:
    document.getElementById("lit").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  3:
    document.getElementById("met").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  4:
    document.getElementById("results").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  5:
    document.getElementById("implication").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  6:
    document.getElementById("limits").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    case  7:
     document.getElementById("conclu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
        break;
    default:
        break;
}

}
