<!DOCTYPE html>
<html>
	<head>
	    <title>Profileforce</title>
	    <script>
	    	window.onload = function(){
  				let iframe = document.getElementsByTagName("iframe")[0];
				iframe.style.height = window.innerHeight + "px";
				iframe.style.width = window.innerWidth + "px";
	    		iframe.src = "https://sf-devs-developer-edition.ap15.force.com" + location.pathname + location.search; 
	    	}
		</script>
	</head>
	<body style="margin:0px;padding:0px;overflow:hidden">
	    <iframe src="" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
	</body>
</html>
