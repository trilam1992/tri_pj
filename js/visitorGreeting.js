
//Display Time of last visit script
//Visit http://rainbow.arch.scriptmania.com for this script

var expDays = 30;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

function When(info){
    // When
    var rightNow = new Date()
    var WWHTime = 0;
    WWHTime = GetCookie('WWhenH')
		
    WWHTime = WWHTime * 1

    var lastHereFormatting = new Date(WWHTime);  // Date-i-fy that number
    var intLastVisit = (lastHereFormatting.getYear() * 10000)+(lastHereFormatting.getMonth() * 100) + lastHereFormatting.getDate()
    var lastHereInDateFormat = "" + lastHereFormatting;  // Gotta use substring functions
    var dayOfWeek = lastHereInDateFormat.substring(0,3)
    var dateMonth = lastHereInDateFormat.substring(4,10)
    var hours = "" + lastHereFormatting.getHours()
    var year = lastHereFormatting.getYear()
    if (year < 1000) year+=1900
    var minutes = "" + lastHereFormatting.getMinutes()
    if (minutes.substring(0,1) == minutes){
        minutes = "0" + minutes
    }
    var WWHText = dayOfWeek + ", " + dateMonth + " " + year + " at " +  hours + ":" + minutes// display
	
    SetCookie ("WWhenH", rightNow.getTime(), exp)

    return WWHText;
}

function Count(info){
    var psj=0;
    // How many times
    var WWHCount = GetCookie('WWHCount')
    if (WWHCount == null) {
        WWHCount = 0;
    }
    else{
        WWHCount++;
    }
    SetCookie ('WWHCount', WWHCount, exp);


    return WWHCount+1;
}



function set(){
    //	VisitorName = prompt("Who are you?", "Nada");
    //	SetCookie ('VisitorName', VisitorName, exp);
    SetCookie ('WWHCount', 0, exp);
    SetCookie ('WWhenH', 0, exp);
}

function getCookieVal (offset) {  
    var endstr = document.cookie.indexOf (";", offset);  
    if (endstr == -1)    
        endstr = document.cookie.length;  
    return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {  
    var arg = name + "=";  
    var alen = arg.length;  
    var clen = document.cookie.length;  
    var i = 0;  
    while (i < clen) {    
        var j = i + alen;    
        if (document.cookie.substring(i, j) == arg)      
            return getCookieVal (j);    
        i = document.cookie.indexOf(" ", i) + 1;    
        if (i == 0) break;   
    }  
    return null;
}

function SetCookie (name, value) {  
    var argv = SetCookie.arguments;  
    var argc = SetCookie.arguments.length;  
    var expires = (argc > 2) ? argv[2] : null;  
    var path = (argc > 3) ? argv[3] : null;  
    var domain = (argc > 4) ? argv[4] : null;  
    var secure = (argc > 5) ? argv[5] : false;  
    document.cookie = name + "=" + escape (value) + 
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
	((path == null) ? "" : ("; path=" + path)) +  
	((domain == null) ? "" : ("; domain=" + domain)) +    
	((secure == true) ? "; secure" : "");
}

function DeleteCookie (name) {  
    var exp = new Date();  
    exp.setTime (exp.getTime() - 1);  
    // This cookie is history  
    var cval = GetCookie (name);  
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();

}

function DeleteAndRefresh () {
    DeleteCookie("WWhenH");
    DeleteCookie("WWHCount");
    location.reload(true);
}

function addButton() {
    
    var element = document.createElement("input");
    element.setAttribute("type", "button");
    element.setAttribute("value", "invert");
    element.setAttribute("name", "button3");
   // element.setAttribute("onclick", "foo()");
    document.flotta.appendChild(element);
}
//  End Script -->


