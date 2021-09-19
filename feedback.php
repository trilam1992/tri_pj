<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
	<head>
         <meta charset="utf-8" />
		<title>Feedback</title>
        <meta name="description" content="Feedback form let visitors to leave feedbacks created by Tri Van Lam-s3342031" />
        <meta name="keywords" content="Tri Van Lam, s3342031, INTE2047, E-Business Systems 1, Feedback" />
        <link rel="stylesheet" type="text/css" href="layoutstyles.css" />
        <link rel="stylesheet" type="text/css" href="stylesheet.css" />
         
        
 	</head>
	<body>
        <div id="wrapper">
            <div id="header">
          
            <?php include("header.php");?>
        <nav>
            
            <a href="index.html"><div class="menu">Home</div></a>
            <a href="aboutme.html"><div class ="menu">About Me</div></a>
            <a href="timetable.html"><div class ="menu">Timetable</div></a>
            <a href="http://raws.adc.rmit.edu.au/~s3342031/blog2/" target="_blank"><div class="menu">Weekly Blog</div></a>
          
        </nav>
            </div>
        
        
            <div id="leftmenu">
                <h1>Discover</h1>
                <?php include("menu.php");?>
           </div>

            <div id="content">
                <h1>Feedback</h1>
                <div id="thankyou"><?php include("process.php");?></div>
                
                <form name="feedback" method="post">
                	<br/>
                	<textarea name="comment" rows="25" cols="70"></textarea>
                	<br/>
                	<button type="submit">Submit</button>
					<input type="hidden" name="action" value="submit"/>                	
                </form>
              
            </div>
            <div id="footer">
                 <p>This website is a student project that is intended to be used only for academic purposes. This page was created by Tri Van Lam-s3342031</p>
            </div>
        </div>
	</body>
</html>