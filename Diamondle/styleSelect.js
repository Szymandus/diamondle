function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

var currentStyle = "thefamilyjewelsStyle";

function selectStyle(){
    var style = document.getElementById("styleOptions").value;
    switch(style){
        case "mvs":{
            document.getElementById(currentStyle).id = "mermaidvssailorStyle";
            currentStyle = "mermaidvssailorStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=mermaidvssailorStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "tfj":{
            document.getElementById(currentStyle).id = "thefamilyjewelsStyle";
            currentStyle = "thefamilyjewelsStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=thefamilyjewelsStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "eh":{
            document.getElementById(currentStyle).id = "electraheartStyle";
            currentStyle = "electraheartStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=electraheartStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "f":{
            document.getElementById(currentStyle).id = "frootStyle";
            currentStyle = "frootStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=frootStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "lf":{
            document.getElementById(currentStyle).id = "lovefearStyle";
            currentStyle = "lovefearStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=lovefearStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "adiaml":{
            document.getElementById(currentStyle).id = "ancientdreamsinamodernlandStyle";
            currentStyle = "ancientdreamsinamodernlandStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=ancientdreamsinamodernlandStyle; expires="+d.toUTCString()+";";
            break;
        }
        case "pop":{
            document.getElementById(currentStyle).id = "princessofpowerStyle";
            currentStyle = "princessofpowerStyle";
            var d = new Date();
            d.setTime(d.getTime() + 90*24*60*60*1000);
            document.cookie = "style=princessofpowerStyle; expires="+d.toUTCString()+";";
            break;
        }
    }
}