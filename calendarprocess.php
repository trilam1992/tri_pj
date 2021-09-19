<?php
	$date = time();
	$today = date("d",$date);
	if (isset($_POST['go'])){
						
		$month = $_POST['month'];
		
	}else{
		$month = date("m", $date);
	}
	$monthName = date("F", mktime(0, 0, 0, $month, 10));
	$year = date("Y",$date);
	
	$first_day = mktime(0,0,0,$month, 1, $year) ;
	
	$days_in_month = date('t', mktime(0, 0, 0, $month, 1, $year)); 
	
	$day_of_week = date('D',$first_day);
	
	switch($day_of_week){ 

 		 case "Sun": $blank = 0; break; 

		 case "Mon": $blank = 1; break; 
			
		 case "Tue": $blank = 2; break; 
		
		 case "Wed": $blank = 3; break; 
		
		 case "Thu": $blank = 4; break; 
		
		 case "Fri": $blank = 5; break; 
		
		 case "Sat": $blank = 6; break; 
		
	}
	
	echo '<table border="1">';
	echo '<caption>' . $monthName . '</caption>';
 	echo "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";
	$day_count=1;
	
	echo "<tr>";
	
	while ($blank>0){
		
		echo "<td></td>"; 

 		$blank = $blank-1; 

 		$day_count++;
		
	}
	$day_num =1;
	
	while ( $day_num <= $days_in_month ) 

 { 
		if ($day_num == $today && $month == date("m")){ echo '<td class="today"> '. $day_num. ' </td>';}
		else{
		 echo "<td> $day_num </td>"; 
		}
		 $day_num++; 
		
		 $day_count++;
		
		
		
		 //Make sure we start a new row every week
		
		 if ($day_count > 7)
		
		 {
		
		 echo "</tr><tr>";
		
		 $day_count = 1;
		
		 }
		
} 
	 //Finaly we finish out the table with some blank details if needed
	
	 while ( $day_count >1 && $day_count <=7 ) 
	
	 { 
	
		 echo "<td> </td>"; 
		
		 $day_count++; 
	
	 } 
	
	 
	 echo "</tr></table><br/>";
		
?>
