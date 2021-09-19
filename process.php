<?php

if (!isset($_POST['action']) && !isset($_GET['action'])) {
	echo '<p>We appreciate your feedback:</p>';
}
else if (isset($_POST['action'])) {
	$action = $_POST['action'];
	if ($_POST["comment"]=='') {
		echo "We appreciate your feedback:";
	} elseif ($_POST["comment"]<>'') {
		$content=$_POST["comment"];
		echo "<p>Thanks for your valuable feedback, i will consider your suggestions and advices carefully:</p>";
		echo "<p><i>$content</i></p>";
		
		echo "<p>You can always continue to post other feedbacks for me :-)</p>";
}
}
?>