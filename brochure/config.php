<?php
	//session_start();
	if(session_id() == '') {
		session_start();
	}

	if (!isset($_SESSION['lang']))
		$_SESSION['lang'] = "en";
	else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
		// echo $_GET['lang'];
		if ($_GET['lang'] == "en")
			$_SESSION['lang'] = "en";
		else if ($_GET['lang'] == "fr")
			$_SESSION['lang'] = "fr";
	}

	require_once "./languages/" . $_SESSION['lang'] . ".php";
	 // echo ($_SESSION['lang']) 
	?>