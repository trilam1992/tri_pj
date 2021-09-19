//This script reads and displays contents of an xml file
//var xmlDoc;

//*************************************************************************
//CHECK WHICH BROWSER IS NEEDED FOR XML

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
//*************************************************************************
//LOAD REQUIRED XML FILE

xmlhttp.open("GET","studies.xml",false);    // specify which xml file should be loaded
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

x=xmlDoc.getElementsByTagName("course");    //name of element (record)
i=0; 										// set counter to zero


//*************************************************************************
//FUNCTIONS TO DISPLAY SPECIFIED FIELDS OF DATA
// function to display data from fields listed below

function display() {
    coursetitle = (x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    coursecode = (x[i].getElementsByTagName("code")[0].childNodes[0].nodeValue);
    enrolledyear = (x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue);
    enrolledsem = (x[i].getElementsByTagName("semester")[0].childNodes[0].nodeValue);
    lectureday = (x[i].getElementsByTagName("lectureday")[0].childNodes[0].nodeValue);
    labday = (x[i].getElementsByTagName("labday")[0].childNodes[0].nodeValue);
    desc = (x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue);
    apic = (x[i].getElementsByTagName("graphic")[0].childNodes[0].nodeValue);

	//Store field data in variable called txt
    txt = "<b>Course:</b> " + coursetitle + "<br /><b>Code:</b> " + coursecode +
                                                "<br /><b>Year:</b> " + enrolledyear + "<br /><b>Semester:</b> " + enrolledsem +
                                                "<br /><b>Lectures are on:</b> " + lectureday +
                                                "<br /><b>Labs are on:</b> " + labday +
												"<br /><b>Description:</b> " + desc +
                                                "<br /><br /><img src=" + apic + " title=" + coursetitle +" alt="+ coursetitle +"/>";

	// Display the contents of the variable called txt
	document.getElementById("showStudies").innerHTML=txt;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function that is activated when next button is clicked
function next() {
    if (i < x.length - 1) {
        i++;
        display();
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function that is activated when previous button is clicked
function previous() {

    if (i > 0) {
        i--;
        display();
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
