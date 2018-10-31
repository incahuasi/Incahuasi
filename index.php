<?php include"cabecera.php" ?>


<?php 

if (isset($_GET['/'])) {
	if ($_GET['/']=="inicio.jj" || $_GET['/']=="acerca.jj" || $_GET['/']=="fotos.jj" || $_GET['/']=="contacto.jj") {
		$url=$_GET['/'];
	}else{
	    $url="inicio.jj";
	}
}else{
	$url="inicio.jj";
}



include"".$url;


 ?>




<?php include"footer.php";?>
